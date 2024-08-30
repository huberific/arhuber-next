'use client'

import { AnimatePresence, motion } from 'framer-motion';

import './styles.css'
import Link from 'next/link';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { usePathname } from 'next/navigation';
import {Stack} from '@mui/material';
import {Breadcrumbs} from '@mui/material';


function Dividers({ type }: { type: string }) {
  const dividers = [];
  let delay = 0;
  for (let i = 1; i < 4; i++) {
    if (type === 'animated') {
      dividers.push({
        key: i,
        id: 'divider' + i,
        delay: delay
      });
    } else {
      dividers.push({
        key: i,
        id: 'divider' + i,
      });
    }
    delay += 0.5;
  }
  return (
    <>
      {dividers.map((divider) => (
        <Divider key={divider.key} props={divider} />
      ))}
    </>
  )
}

function Divider({ props }: { props: any }) {
  return props['delay'] !== undefined ? (
    <motion.div key={props.key} id={props.id} className='divider'
      initial={{ opacity: 0, width: '0%', marginLeft: '50%', marginRight: '50%' }}
      animate={{ opacity: 1, width: '80%', marginLeft: '10%', marginRight: '50%' }}
      transition={{ ease: 'easeInOut', duration: 0.5, delay: props.delay }}
    >
    </motion.div>
  ) : (
    <div key={props.key} id={props.id} className='divider'></div>
  )
}

export default function Navbar() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const paths = usePathname().split('/').filter(e => e !== '');
  const pathName = usePathname().replace('/', '');
  const breadcrumbs = [
    <motion.div key="1"
      whileHover={{color: '#FFFFFF'}}
    >
      <Link href={'/home'}>
        home
      </Link>
    </motion.div>,
    // <div key="2" className='font-extralight'>
    //   {pathName}
    // </div>
  ]
  for (let i = 0; i < paths.length; i++) {
    const keyRef = i + 1;
    if (i + 1 < paths.length) {
      breadcrumbs.push(
        <Link href={'/' + paths[i]}>
          <div key={keyRef} className='font-extralight'>
            {paths[i]}
          </div>
        </Link>
      );
    } else {
      breadcrumbs.push(
        <div key={keyRef} className='font-extralight'>
          {paths[i]}
        </div>
      );
    }
  }

  return (
    <>
      <div ref={ref}>
        <Link href={'/home'}>
          <div className='navbar-container'>
            <div className='flex justify-center'>
              <motion.h1 id='header'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.6 }}
              >arhuber.dev</motion.h1>
            </div>
            <Dividers type='animated' />
          </div>
        </Link>
      </div>
      <AnimatePresence>
        {!isInView && !pathName.includes('home') && 
          <motion.div
            initial={{ y: '-50px' }}
            animate={{ y: 0 }}
            exit={{ y: '-50px' }}
            transition={{ duration: 0.2 }}
            className='bg-slate-700/80 backdrop-blur breadcrumbs-container flex items-center justify-center'
          >
            <div className='grid grid-cols-3 breadcrumbs'>
              <span className='col-span-1 self-start text-cyan-700'>arhuber.dev</span>
              <span className='col-span-1'></span>
              <Stack spacing={2} className='col-span-1 items-end'>
                <Breadcrumbs separator='/' className='text-slate-400'>
                  {breadcrumbs}
                </Breadcrumbs>
              </Stack>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </>
  );
}
