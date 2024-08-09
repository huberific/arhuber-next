'use client'

import { motion } from 'framer-motion';
import Link from 'next/link';

import './styles.css'


function AnimatedHeader({pageType}: {pageType: string} ) {

  return pageType === 'Home' ? (
    <svg width={'100%'} height={'200px'}  id="animated-header" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 300" shapeRendering="geometricPrecision" textRendering="geometricPrecision">
      <path id='a-1st-vert' d="M-11.918605,36.22093l15.27907-89.883719" transform="translate(115.244187 147.558138)" fill="none" stroke="#505050" strokeWidth="6" strokeLinecap="round" strokeDasharray={'91.18'} strokeDashoffset={'91.18'}>
        <animate attributeName='stroke-dashoffset' begin={'0s'} dur={'0.25s'} from={'91.18'} to={'0'} fill='freeze'/>
      </path>
      <path id='a-2nd-vert' d="M-16.569767,-59.302325L3.779069,68.313953" transform="translate(135.174419 152.61628)" fill="none" stroke="#505050" strokeWidth="6" strokeLinecap="round" strokeDasharray={'129.23'} strokeDashoffset={'129.23'}>
        <animate attributeName='stroke-dashoffset' begin={'0.25s'} dur={'0.25s'} from={'129.23'} to={'0'} fill='freeze'/>
      </path>
      <path id='a-horiz' d="M-14.034883,0h28.069766" transform="translate(124.918605 138.837209)" fill="none" stroke="#505050" strokeWidth="6" strokeLinecap="round" strokeDasharray={'28.07'} strokeDashoffset={'28.07'}>
        <animate attributeName='stroke-dashoffset' begin={'0.5s'} dur={'0.25s'} from={'28.07'} to={'0'} fill='freeze'/>
      </path>
      <path id='h-1st-vert' d="M-0.290697,-44.94186l.581394,89.883719" transform="translate(155.523256 138.837209)" fill="none" stroke="#505050" strokeWidth="6" strokeLinecap="round" strokeDasharray={'89.89'} strokeDashoffset={'89.89'}>
        <animate attributeName='stroke-dashoffset' begin={'0.75s'} dur={'0.25s'} from={'89.89'} to={'0'} fill='freeze'/>
      </path>
      <path id='h-2nd-vert' d="M-0.290697,-44.94186L0.290697,82.093024" transform="translate(179.523256 138.837209)" fill="none" stroke="#505050" strokeWidth="6" strokeLinecap="round" strokeDasharray={'127.04'} strokeDashoffset={'127.04'}>
        <animate attributeName='stroke-dashoffset' begin={'1.00s'} dur={'0.25s'} from={'127.04'} to={'0'} fill='freeze'/>
      </path>
      <path id='h-horiz' d="M-24.418605,0h36.627907" transform="translate(180.232558 138.837209)" fill="none" stroke="#505050" strokeWidth="6" strokeLinecap="round" strokeDasharray={'36.63'} strokeDashoffset={'36.63'}>
        <animate attributeName='stroke-dashoffset' begin={'1.25s'} dur={'0.25s'} from={'36.63'} to={'0'} fill='freeze'/>
      </path>
      <path id='long-dash' d="M-24.418605,0h1250.627907" transform="translate(260.232558 138.837209)" fill="none" stroke="#505050" strokeWidth="6" strokeLinecap="round" strokeDasharray={'1251'} strokeDashoffset={'1251'}>
        <animate attributeName='stroke-dashoffset' begin={'1.5s'} dur={'0.25s'} from={'1251'} to={'0'} fill='freeze'/>
      </path>
      <text id='nav-text' x={'70%'} y={'40%'} style={{fontSize: '40px', fill: '#505050'}}></text>
    </svg>
  ) : (
    <svg width={'100%'} height={'200px'}  id="animated-header" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 300" shapeRendering="geometricPrecision" textRendering="geometricPrecision">
      <path id='a-1st-vert' d="M-11.918605,36.22093l15.27907-89.883719" transform="translate(115.244187 147.558138)" fill="none" stroke="#505050" strokeWidth="6" strokeLinecap="round" />
      <path id='a-2nd-vert' d="M-16.569767,-59.302325L3.779069,68.313953" transform="translate(135.174419 152.61628)" fill="none" stroke="#505050" strokeWidth="6" strokeLinecap="round" />
      <path id='a-horiz' d="M-14.034883,0h28.069766" transform="translate(124.918605 138.837209)" fill="none" stroke="#505050" strokeWidth="6" strokeLinecap="round" />
      <path id='h-1st-vert' d="M-0.290697,-44.94186l.581394,89.883719" transform="translate(155.523256 138.837209)" fill="none" stroke="#505050" strokeWidth="6" strokeLinecap="round" />
      <path id='h-2nd-vert' d="M-0.290697,-44.94186L0.290697,82.093024" transform="translate(179.523256 138.837209)" fill="none" stroke="#505050" strokeWidth="6" strokeLinecap="round" />
      <path id='h-horiz' d="M-24.418605,0h36.627907" transform="translate(180.232558 138.837209)" fill="none" stroke="#505050" strokeWidth="6" strokeLinecap="round" />
      <path id='long-dash' d="M-24.418605,0h1250.627907" transform="translate(260.232558 138.837209)" fill="none" stroke="#505050" strokeWidth="6" strokeLinecap="round" />
      <Link href={'/'}>
        <rect id='home-click' x='70' y='70' width='150' height='170' fill='transparent'></rect>
      </Link>
      <Link href={'/'}>
        <text id='nav-text' x={'70%'} y={'40%'} style={{fontSize: '40px', fill: '#505050'}}>{pageType}</text>
      </Link>
    </svg>
  )
}

export default function Navbar({title}: {title: string}) {
  return title === 'Home' ? (
    <main>
      <motion.div
        initial={{ y: 200 }}
        animate={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 1.8, duration: 1, type: 'spring', stiffness: 100 }}>
        <AnimatedHeader pageType={title}/>
      </motion.div>
    </main>
  ) : (
    <AnimatedHeader pageType={title}/>
  );
}
