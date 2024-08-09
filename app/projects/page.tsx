'use client'

import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import ConstructionIcon from '@mui/icons-material/Construction';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

import './styles.css'
import Navbar from '../navbar/page';
import { Tooltip } from '@mui/material';


export default function Resume() {
  return (
    <>
      <Navbar title='Projects' />
      <div id='page-container' className='container mx-auto'>
        <div style={{ marginLeft: '10%' }}>
          <Tooltip title='Home' enterDelay={ 2000 }>
            <Link href={'/home'}>
              <KeyboardBackspaceIcon id='back-logo' fontSize='large' sx={{ color: '#696969' }} />
            </Link>
          </Tooltip>
        </div>
        <motion.div className='flex justify-center'
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 4 }}
        >
          <ConstructionIcon fontSize='large' sx={{ color: '#696969' }} />
        </motion.div>
        <div className='flex justify-center mt-5' style={{ fontSize: '20px', color: '#696969' }}>
          <p>More to come soon...</p>
        </div>
      </div>
    </>
  );
}
