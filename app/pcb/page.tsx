'use client'

import dynamic from 'next/dynamic';
import './styles.css'
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useWindowSize } from '../use-window-size';
const PCBWithNoSSR = dynamic(() => import('./pcb-component'), { ssr: false });


export default function Home() {
  const width = Math.min(useWindowSize().width * 0.5, 500);
  const height = Math.min(useWindowSize().width * 0.5, 500);
  return (
    <div className='page-container'>
      <div className='text-container mt-10 grid'>
        <div className='flex' style={{marginLeft: '38%'}}>
          <div id='img-container' className='flex justify-center'>
            <Image className='rounded-xl' src='/initech.png' width={width} height={height} alt='Picture of Aaron' />
          </div>
        </div>
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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0 }}
      >
        <PCBWithNoSSR />
      </motion.div>
    </div>
  )
}
