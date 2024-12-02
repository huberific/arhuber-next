'use client'

import dynamic from 'next/dynamic';
import './styles.css'
import Image from 'next/image';
import { useWindowSize } from '../use-window-size';
import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { fileNames } from './pcb-filenames';
import { BarChart } from '@mui/x-charts';
import { axisClasses } from '@mui/x-charts/ChartsAxis';
import ResultsTable from './results-table';
const PCBWithNoSSR = dynamic(() => import('./pcb-component'), { ssr: false });

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
  const [hideResultsOpacity, setHideResultsOpacity] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [timerText, setTimerText] = useState('2:00');
  const [timerRemaining, setTimeRemaining] = useState(timerMinutes * 60 * 1000);
  const [gameStartTime, setGameStartTime] = useState(0);
  const [gameTracker, setGameTracker] = useState(new Map());
  const [numCorrect, setNumCorrect] = useState(0);
  const [numIncorrect, setNumIncorrect] = useState(0);
  const [poissonData, setPoissonData] = useState(poissonInitialData);
  const [finalTime, setFinalTime] = useState(60);
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
        if (timerRemaining == 0) {
          setTimerText('0:00');
        }
        setShowResults(true);
        const lambda = numCorrect / (finalTime / 60);
        setPoissonData(getData(lambda));
        setHideResultsOpacity(1);
        setHideGameZIndex(1);
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
    setTimeRemaining(timerMinutes * 60 * 1000);
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
      gameTracker_temp.set(index, timeStamp.toFixed(2));
    }
    setGameTracker(gameTracker_temp);
    setCorrectCounters();
  };

  function setCorrectCounters() {
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
    if (countCorrect == 5) {
      const finalTime = (Date.now() - gameStartTime) / 1000;
      setFinalTime(Number(finalTime.toFixed(2)));
      setTimeRemaining(-1000);
    }
    setNumCorrect(countCorrect);
    setNumIncorrect(countIncorrect);
  }

  function factorial(n: number) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }

  function calculatePMF(lambda: number, x: number) {
    const p = (Math.pow(lambda, x) * Math.exp(-1 * lambda))/factorial(x);
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

  function BasicBarChart() {
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
          Your task is to find the non-conforming parts on a circuit board. You will be shown a picture of a board that
          is correctly installed. The 3D model below should match the photo, but it does not. You will have ${timerMinutes} minute to select
          the defective parts on the model.
        </p>
      </div>
      <div className='mt-10'>
        <div className='test-cover'
        style={{ position: 'absolute', opacity: hideGameOpacity, width: '100vw', height: '100vh', zIndex: hideGameZIndex, transition: 'opacity 0.5s ease-in' }}>
          <div style={{ position: 'absolute', width: '100vw', height: '50px', top: '200px' }} className='flex justify-center'>
            <Button variant="outlined" className='begin-button'
              onClick={() => onBeginButtonClick()}
            >Begin Test</Button>
          </div>
        </div>
        <div id='pcb_ref' className='grid justify-center mt-1'>
          <Image src='/pcb_ref.jpg' width={pcb_ref_width} height={pcb_ref_height} alt='Picture of PCB' />
          <div className='text-sm game-text flex justify-center mt-1'>Correct Installation Reference</div>
        </div>
        <div style={{ marginTop: '-70px', opacity: 1 - hideGameOpacity, transition: 'opacity 0.5s ease-in' }}>
          <PCBWithNoSSR onPartClick={handlePartClick} />
        </div>
        <div className='game-text grid justify-center' style={{ opacity: 1 - hideGameOpacity, marginTop: '-6vh', transition: 'opacity 0.5s ease-in' }}>
          <p className='text-sm'>
            Incorrect Installation - select all defective parts
          </p>
          <p className='mt-5 text-md flex justify-center'>
            TIME REMAINING:<span className='ml-2'> {timerText} </span>
          </p>
        </div>
        <div id='results' style={{ opacity: hideResultsOpacity, transition: 'opacity 0.5s ease-in' }}>
          <div className='text-container'>
            <p className='paragraph font-normal text-cyan-950 dark:text-cyan-100 mt-5'>
              Results
            </p>
            <p className='paragraph font-normal text-cyan-950 dark:text-cyan-100 mt-5'>
              You found {numCorrect} of 5 defects in {finalTime} seconds. You selected {numIncorrect} incorrect parts during your test.
              The table below contains the timestamps at which the defects were found. The rate at which
              you found defects can be found by dividing the number of defects by the total time it took
              to find them. This is calculated below.
            </p>
          </div>
          <div id="results-table" className='mt-5'>
            {showResults && numCorrect > 0 && <ResultsTable data={gameTracker} />}
          </div>
          <div id='bar-chart' className='flex justify-center'>
            {showResults && <BasicBarChart />}
          </div>
        </div>
      </div>
    </div>
  )
}
