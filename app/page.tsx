'use client'

import { Divider, List, ListItem, ListItemText, Paper, SvgIcon, Tooltip } from '@mui/material'
import { educationList } from './data';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image'
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

import './styles.css'
import Navbar from './navbar/page';

function MenuOptions() {
  return (
    <motion.div
      className='mx-auto menu-options grid justify-items-center'
    >
      <p></p>
      <motion.p style={{ marginTop: '20px' }}
        initial={{ y: '100vh' }}
        animate={{ y: 0 }}
        transition={{ delay: 1.8, type: 'spring', stiffness: 75 }}
      >
        <Link href={'/'}>About Me</Link>
      </motion.p>
      <motion.p
        style={{ marginTop: '5px' }}
        initial={{ y: '100vh' }}
        animate={{ y: 0 }}
        transition={{ delay: 2.0, type: 'spring', stiffness: 75 }}
      >
        <Link href={'/resume'}>Resume</Link>
      </motion.p>
      <motion.p
        style={{ marginTop: '5px' }}
        initial={{ y: '100vh' }}
        animate={{ y: 0 }}
        transition={{ delay: 2.2, type: 'spring', stiffness: 75 }}
      >
        <Link href={'/'}>Projects</Link>
      </motion.p>
    </motion.div>
  )
}

export default function Home() {
  return (
    <div>
      <Navbar title='Home' />
      <MenuOptions/>
    </div>
  );
}
