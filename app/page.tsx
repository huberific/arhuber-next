'use client'

import './styles.css'
import { motion } from 'framer-motion';
import { Intro } from './home/intro';

export default function LandingPage() {
  return (
    <div className='page-container'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <Intro />
      </motion.div>
    </div>
  );
}
