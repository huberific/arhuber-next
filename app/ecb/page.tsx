'use client'

import dynamic from 'next/dynamic';
import './styles.css'
import { motion } from 'framer-motion';
const ECBWithNoSSR = dynamic(() => import('./ecb-component'), { ssr: false });


export default function Home() {
  return (
    <div className='page-container'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0 }}
      >
        <ECBWithNoSSR/>
      </motion.div>
    </div>
  )
}
