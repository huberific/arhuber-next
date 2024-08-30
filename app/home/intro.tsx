import './styles.css'
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useWindowSize } from '../use-window-size';

export function Intro() {
  const width = Math.min(useWindowSize().width * 0.3, 300);
  const height = Math.min(useWindowSize().width * 0.3, 300);
  return (
    <>
      <div className='flex gap-5 mt-10 lg:mt-20 items-center'>
        <div id='intro-container'>
          <p id='hello-text' className='font-normal dark:text-cyan-200'>
            Hi, I&apos;m Aaron.
          </p>
          <p className='page-text font-extralight dark:text-cyan-50 mt-2'>
            I&apos;m a full stack software engineer at Boeing and a graduate student in the Honors Cooperative Program
            at Stanford pursuing a Masters in Computer Science. I have interests in Artificial Intelligence, Data Management, and
            solving challenging problems.
          </p>
        </div>
        <div id='img-container' className='flex justify-end'>
          <Image className='rounded-xl content-center' src='/arhuber_profile.jpg' width={width} height={height} alt='Picture of Aaron' />
        </div>
      </div>
      <div id='resume-link-container' className='page-text flex font-extralight justify-center p-10 lg:p-20 dark:text-cyan-200'>
        <Link href='/resume'>
          <motion.p
            whileHover={{ scale: 1.05, color: '#ecfeff' }}
          >
            Read more about my experience...
          </motion.p>
        </Link>
      </div>
    </>
  )
}