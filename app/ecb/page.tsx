'use client'

import { ECB } from './ecb';
import './styles.css'
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className='page-container'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0 }}
      >
        <ECB/>
      </motion.div>
    </div>
  )
}
