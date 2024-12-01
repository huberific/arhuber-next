'use client'

import dynamic from 'next/dynamic';
import './styles.css'
import Image from 'next/image';
import { useWindowSize } from '../use-window-size';
import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { fileNames } from './pcb-filenames';
const PCBWithNoSSR = dynamic(() => import('./pcb-component'), { ssr: false });
import { BarChart } from '@mui/x-charts';
import { axisClasses } from '@mui/x-charts/ChartsAxis';

interface PoissonData {
  x_data: number[],
  y_data: number[]
}

export default function Home() {
  const timerMinutes = 1;
  const poissonInitialData: PoissonData = {
    x_data: [],
    y_data: []
  };
  const [hideGameOpacity, setHideGameOpacity] = useState(1);
  const [hideGameZIndex, setHideGameZIndex] = useState(1);
  const [timerText, setTimerText] = useState('2:00');
  const [timerRemaining, setTimeRemaining] = useState(timerMinutes * 60 * 1000);
  const [gameStartTime, setGameStartTime] = useState(0);
  const [gameTracker, setGameTracker] = useState(new Map());
  const [poissonData, setPoissonData] = useState(poissonInitialData);
  const logo_width = Math.min(useWindowSize().width * 0.2, 200);
  const logo_height = Math.min(useWindowSize().width * 0.2, 200);
  const pcb_ref_width = Math.min(useWindowSize().width * 0.7, 700);
  const pcb_ref_height = Math.min(useWindowSize().width * 0.7, 700);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (timerRemaining - 1000 >= 0) {
        setTimerText(getTimerText(timerRemaining));
      } else {
        clearInterval(intervalId)
        setTimerText('0:00');
        getTestResults();
        setPoissonData(getData(5));
      }
    }, 1000);
    return () => clearInterval(intervalId);
  }, [timerRemaining]);

  function getTimerText(time_ms: number) {
    setTimeRemaining(timerRemaining - 1000);
    let minutes = String(Math.floor(time_ms / (60 * 1000)));
    let seconds = String((time_ms / 1000) % 60);
    if (seconds.length < 2) {
      seconds = '0' + seconds;
    }
    return `${minutes}:${seconds}`
  }

  function onBeginButtonClick() {
    setHideGameOpacity(0);
    setHideGameZIndex(0);
    setGameStartTime(Date.now());
  }

  const handlePartClick = (index: number, isVisible: boolean) => {
    const gameTracker_temp = gameTracker;
    const timeStamp = (Date.now() - gameStartTime) / 1000;
    if (!isVisible) {
      gameTracker_temp.delete(index);
    } else {
      gameTracker_temp.set(index, timeStamp);
    }
    setGameTracker(gameTracker_temp);
    console.log(gameTracker);
  };

  function getTestResults() {
    let countCorrect = 0;
    let countIncorrect = 0;
    for (const key of gameTracker.keys()) {
      const idx = Number(key);
      if (fileNames[idx].includes('defect')) {
        countCorrect++;
      } else {
        countIncorrect++;
      }
    }
  }

  function factorial(n: number) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }

  function calculatePMF(lambda: number, x: number) {
    let p = (Math.pow(lambda, x) * Math.exp(-1 * lambda))/factorial(x);
    console.log(p);
    return p;
  }

  function getData(lambda: number): PoissonData {
    let x_data = [];
    let y_data = [];
    for (let i = 0; i < 100; i++) {
      let p = calculatePMF(lambda, i);
      if (p > 0.005) {
        x_data.push(i);
        y_data.push(p);
      }
    }
    return {
      x_data: x_data,
      y_data: y_data
    }
  }

  function BasicLineChart() {
    const chartSetting = {
      sx: {
        [`.${axisClasses.left} .${axisClasses.label}`]: {
          transform: 'translate(-12px, 0)',
        },
      },
    }
    return (
      <div className='grid justify-center mt-20'>
        <div className='game-text'>RESULTS</div>
        <BarChart className='mb-0 pb-0'
          xAxis={[{ scaleType: 'band', data: poissonData.x_data, label: 'number of defects' }]}
          yAxis={[{ label: 'probability' }]}
          series={[{ data: poissonData.y_data }]}
          width={pcb_ref_width}
          height={pcb_ref_width * 2/3}
          {...chartSetting}
        />
        <div className='game-text flex justify-center'></div>
      </div>
    )
  }

  return (
    <div className='page-container'>
      <div className='text-container mt-10 grid'>
        <div className='flex' style={{ marginLeft: '38.5%' }}>
          <div id='logo' className='flex justify-center'>
            <Image src='/initech.png' width={logo_width} height={logo_height} alt='Picture of Initech Logo' />
          </div>
        </div>
        <h1 id="initech" className='font-bold text-cyan-950 dark:text-cyan-50 text-center mt-2'>
          INITECH
        </h1>
        <h1 id="title" className='font-normal text-cyan-950 dark:text-cyan-200 text-center mt-5'>
          Circuit Board Quality Test
        </h1>
        <p className='paragraph font-normal text-cyan-950 dark:text-cyan-50 mt-5'>
          Welcome to the Circuit Board Quality Test!
        </p>
        <p className='paragraph font-normal text-cyan-950 dark:text-cyan-50 mt-5'>
          Here at Initech, quality at speed is our top priority. We manufacture over a million circuit boards annually
          and our loyal customers demand perfection. To aid in assessing our future quality inspector&apos;s performance,
          we&apos;ve developed this quality test to check your speed and accuracy in detecting defective parts. It is our
          goal to hire quality inspectors that can meet our expected 3500 unit/day rate.
        </p>
        <p className='paragraph font-normal text-cyan-950 dark:text-cyan-50 mt-5'>
          Your task is to find the non-conforming parts to a circuit board. You will be shown a picture of a board that
          is correctly installed. The 3D model below that should match the photo, but it does not. Your task is to select
          the parts on the model that are incorrect.
        </p>
      </div>
      <div className='mt-10'>
        {/* TODO: get start of game text on front of image */}
        <div className='test-cover' style={{ position: 'absolute', opacity: hideGameOpacity, width: '100vw', height: '100vh', zIndex: hideGameZIndex, transition: 'opacity 0.5s ease-in' }}>
          <div style={{ position: 'absolute', width: '100vw', height: '50px', top: '200px' }} className='flex justify-center'>
            <Button variant="outlined" className='begin-button'
              onClick={() => onBeginButtonClick()}
            >Begin Test</Button>
          </div>
        </div>
        {/* <div style={{ position: 'absolute', opacity: hide_game, width: '100vw', height: '100vh', zIndex:'1', backgroundColor: 'purple' }} /> */}
        <div id='pcb_ref' className='grid justify-center mt-1'>
          <Image src='/pcb_ref.jpg' width={pcb_ref_width} height={pcb_ref_height} alt='Picture of PCB' />
          <div className='text-sm game-text flex justify-center'>Correct Installation Reference</div>
        </div>
        <div style={{ marginTop: '-70px;' }}>
          <PCBWithNoSSR onPartClick={handlePartClick} />
        </div>
        <div className='game-text grid justify-center' style={{ opacity: 1 - hideGameOpacity, marginTop: '-70px' }}>
          <p className='text-sm'>
            Incorrect Installation - select all defective parts
          </p>
          <p className='mt-5 text-md flex justify-center'>
            TIME REMAINING:<span className='ml-2'> {timerText} </span>
          </p>
        </div>
        <div id='line-chart' className='flex justify-center'>
          <BasicLineChart />
        </div>
      </div>
    </div>
  )
}
