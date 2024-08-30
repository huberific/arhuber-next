'use client'

import './styles.css'
import { motion } from 'framer-motion';
import { Intro } from './intro';

export default function Home() {
  return (
    <div className='page-container dark:bg-slate-800'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0 }}
      >
        <Intro />
      </motion.div>
    </div>
  )
}
