'use client'

import SmallResume from './small-resume';
import LargeResume from './large-resume';


export default function Resume() {
  return (
    <>
      <div className='block md:hidden'>
        <SmallResume />
      </div>
      <div className='hidden md:block'>
        <LargeResume />
      </div>
    </>
  );
}
