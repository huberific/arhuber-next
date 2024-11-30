'use client'

import dynamic from 'next/dynamic';
import './styles.css'
import Image from 'next/image';
import { useWindowSize } from '../use-window-size';
import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
const PCBWithNoSSR = dynamic(() => import('./pcb-component'), { ssr: false });


export default function Home() {
  const timerMinutes = 2;
  const [hideGameOpacity, setHideGameOpacity] = useState(1);
  const [hideGameZIndex, setHideGameZIndex] = useState(1);
  const [timerText, setTimerText] = useState('2:00');
  const [timerRemaining, setTimeRemaining] = useState(timerMinutes * 60 * 1000);
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (timerRemaining - 1000 >= 0) {
        setTimerText(getTimerText(timerRemaining));
      } else {
        clearInterval(intervalId)
        setTimerText('0:00');
      }
    }, 1000);
    return () => clearInterval(intervalId);
  });

  function getTimerText(time_ms: number) {
    setTimeRemaining(timerRemaining - 1000);
    let minutes = String(Math.floor(time_ms / (60 * 1000)));
    let seconds = String((time_ms / 1000) % 60);
    if (seconds.length < 2) {
      seconds = '0' + seconds;
    }
    return `${minutes}:${seconds}`
  }

  const logo_width = Math.min(useWindowSize().width * 0.2, 200);
  const logo_height = Math.min(useWindowSize().width * 0.2, 200);
  const pcb_ref_width = Math.min(useWindowSize().width * 0.8, 800);
  const pcb_ref_height = Math.min(useWindowSize().width * 0.8, 800);

  function onBeginButtonClick() {
    setHideGameOpacity(0);
    setHideGameZIndex(0);
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
        {/* TODO: fix colors of resistors */}
        {/* TODO: get shadows on parts if possible when fixing clors */}
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
          <PCBWithNoSSR />
        </div>
        <div className='game-text grid justify-center' style={{ opacity: 1 - hideGameOpacity, marginTop: '-70px' }}>
          <p className='text-sm'>
            Incorrect Installation - select all defective parts
          </p>
          <p className='mt-5 text-md flex justify-center'>
            TIME REMAINING:<span className='ml-2'> {timerText} </span>
          </p>
        </div>
      </div>
    </div>
  )
}
