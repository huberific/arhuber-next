'use client'

import './styles.css'
import Navbar from './navbar/page';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Homefirst() {
  return (
    <>
      <div className='page-container'>
        <Navbar />
        {/* <MenuOptions pageType='/' /> */}
        <div className='flex mt-10'>
          <div style={{ width: '40%', marginLeft: '12%' }}>
            <p className='font-thin text-cyan-500' style={{ fontSize: '30px' }}></p>
          </div>
          <div style={{ width: '38%', marginRight: '12%' }}>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <div className='flex gap-5 mt-5 items-center'>
            <div style={{ width: '40%', marginLeft: '12%' }}>
              <p className='font-normal text-cyan-200' style={{ fontSize: 'min(3vw, 30px)' }}>
                Hi, I&apos;m Aaron.
              </p>
              <p className='font-thin text-cyan-200 mt-2' style={{ fontSize: 'min(2.8vw, 30px)' }}>
                I&apos;m a full stack software engineer at Boeing and a graduate student in the Honors Cooperative Program
                at Stanford pursuing a Masters in Computer Science. I have interests in Artifical Intelligence, Data Management, and
                solving challenging problems.
              </p>
            </div>
            <div className='flex justify-end' style={{ width: '38%', marginRight: '12%' }}>
              <Image className='rounded-xl content-center' src='/arhuber_profile.jpg' width={350} height={350} alt='Picture of Aaron' />
            </div>
          </div>
          <div className='flex font-thin justify-center p-10 text-cyan-400' style={{ width: '76%', marginLeft: '12%' }}>
            <Link href='/resume'>
              Read more about my experience
            </Link>
          </div>
        </motion.div>


      </div>
    </>
  );
}
