'use client'

import dynamic from 'next/dynamic';
import './styles.css'
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useWindowSize } from '../use-window-size';
const PCBWithNoSSR = dynamic(() => import('./pcb-component'), { ssr: false });


export default function Home() {
  const logo_width = Math.min(useWindowSize().width * 0.2, 200);
  const logo_height = Math.min(useWindowSize().width * 0.2, 200);
  const pcb_ref_width = Math.min(useWindowSize().width * 0.8, 800);
  const pcb_ref_height = Math.min(useWindowSize().width * 0.8, 800);
  let hide_game = 0;
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
          Here at Initech, quality at speed is our top priority. We manufacture over a million circuit boards anually
          and our loyal customers demand perfection. To aid in assessing our future quality inspector&apos;s performance,
          we&apos;ve developed this quality test to check your speed and accuracy. It is our goal to hire quality inspectors
          that can manage our expected 3500 unit/day rate.
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
        {/* TODO: get shadows on parts if possible when fixing colors */}
        {/* <div style={{ position: 'absolute', opacity: hide_game, width: '100vw', height: '100vh', zIndex:'1', backgroundColor: 'purple' }} /> */}
        <div id='pcb_ref' className='flex justify-center'>
          <Image src='/pcb_ref.jpg' width={pcb_ref_width} height={pcb_ref_height} alt='Picture of PCB' />
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0, delay: 0 }}
        >
          <PCBWithNoSSR />
        </motion.div>
      </div>
    </div>
  )
}
