'use client'

import { motion } from 'framer-motion';
import Link from 'next/link';

import './styles.css'

export default function MenuOptions({pageType}: {pageType: string}) {
  
  return pageType === '/' ? (
    <div className='menu-options grid justify-items-center'>
      <motion.div
        initial={{ y: '100vh' }}
        animate={{ y: 0 }}
        transition={{ delay: 1.8, type: 'spring', stiffness: 100, textShadow: { delay: 0, duration: 0.2 }, scale: { delay: 0, duration: 0.2 } }}
        whileHover={{ scale: 1.05, textShadow: '0 0 5px #008080' }}
      >
        <Link href={'/'}>
          <span className='menu-font' style={{ marginTop: '20px' }}>
            About
          </span>
        </Link>
      </motion.div>
      <motion.div
        initial={{ y: '100vh' }}
        animate={{ y: 0 }}
        transition={{ delay: 2, type: 'spring', stiffness: 100, textShadow: { delay: 0, duration: 0.2 }, scale: { delay: 0, duration: 0.2 } }}
        whileHover={{ scale: 1.05, textShadow: '0 0 5px #008080' }}
      >
        <Link href={'/resume'}>
          <span className='menu-font' style={{ marginTop: '5px' }}>
            Resume
          </span>
        </Link>
      </motion.div>
      <motion.div
        initial={{ y: '100vh' }}
        animate={{ y: 0 }}
        transition={{ delay: 2.2, type: 'spring', stiffness: 100, textShadow: { delay: 0, duration: 0.2 }, scale: { delay: 0, duration: 0.2 } }}
        whileHover={{ scale: 1.05, textShadow: '0 0 5px #008080' }}
      >
        <Link href={'/projects'}>
          <span className='menu-font' style={{ marginTop: '5px' }}>
            Projects
          </span>
        </Link>
      </motion.div>
    </div>
  ) : (
    <div className='mx-auto menu-options grid justify-items-center'>
      <motion.p className='menu-font' style={{ marginTop: '20px' }}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{delay: 0.2, duration: 1, textShadow: { delay: 0, duration: 0.2 }, scale: { delay: 0, duration: 0.2 }}}
        whileHover={{scale: 1.05, textShadow: '0 0 5px #008080'}}
      >
        <Link href={'/'}>About Me</Link>
      </motion.p>
      <motion.p className='menu-font' style={{ marginTop: '5px' }}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{delay: 0.5, duration: 1, textShadow: { delay: 0, duration: 0.2 }, scale: { delay: 0, duration: 0.2 }}}
        whileHover={{scale: 1.05, textShadow: '0 0 5px #008080'}}
      >
        <Link href={'/resume'}>Resume</Link>
      </motion.p>
      <motion.p className='menu-font' style={{ marginTop: '5px' }}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{delay: 0.8, duration: 1, textShadow: { delay: 0, duration: 0.2 }, scale: { delay: 0, duration: 0.2 }}}
        whileHover={{scale: 1.05, textShadow: '0 0 5px #008080'}}
      >
        <Link href={'/projects'}>Projects</Link>
      </motion.p>
    </div>
  )
}