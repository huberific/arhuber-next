'use client'

import { motion } from 'framer-motion';

import './styles.css'

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
  return (
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
  );
}
