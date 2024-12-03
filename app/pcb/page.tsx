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
import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';

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
  const goal = 4;
  const [hideGameOpacity, setHideGameOpacity] = useState(1);
  const [hideGameZIndex, setHideGameZIndex] = useState(1);
  const [hideResultsOpacity, setHideResultsOpacity] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [timerText, setTimerText] = useState('1:00');
  const [timerRemaining, setTimeRemaining] = useState(60);
  const [gameStartTime, setGameStartTime] = useState(0);
  const [gameTracker, setGameTracker] = useState(new Map());
  const [numCorrect, setNumCorrect] = useState(0);
  const [numIncorrect, setNumIncorrect] = useState(0);
  const [poissonData, setPoissonData] = useState(poissonInitialData);
  const [finalTime, setFinalTime] = useState(60);
  const [lambda, setLambda] = useState('');
  const [probabilityOutcome, setProbabilityOutcome] = useState('0');
  const [acceptableOutcome, setAcceptableOutcome] = useState(false);
  const [gameStarted, setGameStarted] = useState(0);
  const logo_width = Math.min(useWindowSize().width * 0.2, 200);
  const logo_height = Math.min(useWindowSize().width * 0.2, 200);
  const pcb_ref_width = Math.min(useWindowSize().width * 0.7, 700);
  const pcb_ref_height = Math.min(useWindowSize().width * 0.7, 700);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (gameStartTime > 0) {
        let elapsedSeconds = Math.floor((Date.now() - gameStartTime) / 1000);
        if (numCorrect == 5) {
          elapsedSeconds = 61;
        }
        if (elapsedSeconds < 1) {
          setTimerText('1:00');
        } else if (60 - elapsedSeconds >= 0) {
          let sec = String(60 - elapsedSeconds);
          if (sec.length == 1) {
            sec = `0${sec}`;
          }
          setTimerText(`0:${sec}`);
        } else {
          clearInterval(intervalId)
          if (60 - elapsedSeconds < 1) {
            setTimerText('0:00');
          }
          setShowResults(true);
          const l = numCorrect / (finalTime / 60);
          setLambda(l.toFixed(1));
          const pmf = getData(l);
          setPoissonData(pmf);
          removeIncorrectParts();
          setHideResultsOpacity(1);
          setHideGameZIndex(1);
          setProbabilityResults(pmf);
        }
      }
    }, 1000);
    return () => clearInterval(intervalId);
  }, [timerRemaining, gameStartTime, numCorrect, finalTime]);

  function LambdaCalculation() {
    const t = finalTime;
    const strlatex = `
      $$\\lambda = \\frac{${numCorrect} \\text{ defects}}{${finalTime} \\text{ sec}}
      \\times
      \\frac{60 \\text{ sec}}{1 \\text{ min}}=${lambda} \\text{ } \\frac{\\text{defects}}{\\text{min}}$$
    `;
    return (
      <div className='game-text mt-10 mb-10'>
        <Latex>{strlatex}</Latex>
      </div>
    )
  }

  function ProbabilityFormula() {
    const t = finalTime;
    const strlatex = `$$
      P(X=x) = \\frac{\\lambda^x e^{-\\lambda}}{x!}
    $$`;
    return (
      <div className='game-text mt-10 mb-10'>
        <Latex>{strlatex}</Latex>
      </div>
    )
  }

  function ProbabilityCalculation() {
    const t = finalTime;
    const eqn = `$$
      P(x \\geq ${goal}) = 1 - \\sum\\limits_{i=0}^{n = ${goal - 1}} \\frac{\\lambda^{x_i} e^{-\\lambda}}{x_i!}
    $$`;
    return (
      <div className='game-text mt-10 mb-10'>
        <Latex>{eqn}</Latex>
      </div>
    )
  }

  function setProbabilityResults(pmf: any) {
    let p = 0;
    const y_data = pmf.y_data;
    console.log(pmf);
    for (let i = 0; i < goal; i++) {
      p += y_data[i];
    }
    const prob_gte_goal = (1 - p) * 100;
    console.log(prob_gte_goal);
    if (prob_gte_goal > 75) {
      setAcceptableOutcome(true);
    } else {
      setAcceptableOutcome(false);
    }
    setProbabilityOutcome(prob_gte_goal.toFixed(1));
  }

  function AcceptanceStatement() {
    return acceptableOutcome ? (
      <p className='paragraph font-normal text-cyan-950 dark:text-cyan-100 mt-5'>
        Congratulations! We are impressed with your results! We wish to make you an offer given your strong performance!
      </p>
    ) : (
      <p className='paragraph font-normal text-cyan-950 dark:text-cyan-100 mt-5'>
        Unfortunately, we are looking to find a candidate with a higher likelihood (75%) of detecting {goal} defects/min.
        Thank you for taking the time to test with us!
      </p>
    )
  }

  function onBeginButtonClick() {
    setGameStartTime(Date.now());
    setHideGameOpacity(0);
    setHideGameZIndex(0);
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

  function removeIncorrectParts() {
    for (const key of gameTracker.keys()) {
      const idx = Number(key);
      if (!fileNames[idx].includes('defect')) {
        gameTracker.delete(key)
      }
    }
  }

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
    const p = (Math.pow(lambda, x) * Math.exp(-1 * lambda)) / factorial(x);
    return p;
  }

  function getData(lambda: number): PoissonData {
    let x_data = [];
    let y_data = [];
    for (let i = 0; i < 100; i++) {
      let p = calculatePMF(lambda, i);
      if (p > 0.001) {
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
      <div className='grid justify-center'>
        <BarChart className='mb-0 pb-0'
          xAxis={[{ scaleType: 'band', data: poissonData.x_data, label: 'number of defects' }]}
          yAxis={[{ label: 'probability' }]}
          series={[{ data: poissonData.y_data }]}
          width={pcb_ref_width}
          height={pcb_ref_width * 2 / 3}
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
          Circuit Board Quality Assurance Test
        </h1>
        <p className='paragraph font-normal text-cyan-950 dark:text-cyan-50 mt-5'>
          Welcome!
        </p>
        <p className='paragraph font-normal text-cyan-950 dark:text-cyan-50 mt-5'>
          Here at Initech, quality at speed is our top priority. We manufacture over a million circuit boards annually
          and our loyal customers demand perfection. To aid in assessing our future quality inspector&apos;s performance,
          we&apos;ve developed this quality assurance test to test your speed in finding defective parts. It is our
          goal to hire quality inspectors that can meet an expected rate of {goal} defects/min.
        </p>
        <p className='paragraph font-normal text-cyan-950 dark:text-cyan-50 mt-5'>
          Your task is to find the five non-conforming parts on a circuit board. You will be shown a picture of a board that
          is correctly installed. The 3D model below should match the photo, but it does not. Once the test has begun,
          you will have {timerMinutes} minute to select the defective parts on the model. Are you ready?
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
          <p className='mt-5 text-md font-bold flex justify-center'>
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
              The table below contains the timestamps at which the defects were found.
            </p>
          </div>
          <div id="results-table" className='mt-5'>
            {showResults && numCorrect > 0 && <ResultsTable data={gameTracker} />}
          </div>
          <div className='text-container'>
            <p className='paragraph font-normal text-cyan-950 dark:text-cyan-100 mt-5'>
              Analysis
            </p>
            <p className='paragraph font-normal text-cyan-950 dark:text-cyan-100 mt-5'>
              A Poisson random variable gives the probability of a given number of events in a fixed interval of time. In this
              analysis, we assume that the events of finding defects has a constant mean rate and is independent of the time since
              the last event. The mean rate is calculated:
            </p>
            <LambdaCalculation />
            <p className='paragraph font-normal text-cyan-950 dark:text-cyan-100 mt-5'>
              With this rate, the probablitiy mass function can be used to find the probabilities that a discrete random variable is exactly equal
              to some value. The Poisson PMF, shown below, was used to find the probability distribution given the lambda calculated above. Probabilities above
              0.001 are captured within the bar chart.
            </p>
            <ProbabilityFormula />
            <div id='bar-chart' className='flex justify-center'>
              {showResults && <BasicBarChart />}
            </div>
            <p className='paragraph font-normal text-cyan-950 dark:text-cyan-100 mt-8'>
              The goal of the company is to hire someone who can find {goal} defects or more within a minute. Given
              your test results, there is a probability of {probabilityOutcome}% that you can achieve this
              standard on a consistent basis. This result was calculated with the following formula:
            </p>
            <ProbabilityCalculation />
            <AcceptanceStatement />
            <div className='p-20'></div>
          </div>
        </div>
      </div>
    </div>
  )
}
