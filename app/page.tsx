'use client'

import './styles.css'
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useWindowSize } from './use-window-size';

export default function Homefirst() {
  const width = Math.min(useWindowSize().width * 0.3, 300);
  const height = Math.min(useWindowSize().width * 0.3, 300);

  return (
    <>
      <div className='page-container'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <div className='flex gap-5 mt-10 lg:mt-20 items-center'>
            <div id='intro-container'>
              <p id='hello-text' className='font-normal text-cyan-200'>
                Hi, I&apos;m Aaron.
              </p>
              <p className='page-text font-thin text-cyan-50 mt-2'>
                I&apos;m a full stack software engineer at Boeing and a graduate student in the Honors Cooperative Program
                at Stanford pursuing a Masters in Computer Science. I have interests in Artifical Intelligence, Data Management, and
                solving challenging problems.
              </p>
            </div>
            <div id='img-container' className='flex justify-end'>
              <Image className='rounded-xl content-center' src='/arhuber_profile.jpg' width={width} height={height} alt='Picture of Aaron' />
            </div>
          </div>
          <div id='resume-link-container' className='page-text flex font-thin justify-center p-10 lg:p-20 text-cyan-200'>
            <Link href='/resume'>
              Read more about my experience
            </Link>
          </div>
        </motion.div>
      </div>
    </>
  );
}
