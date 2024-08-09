'use client'

import MenuOptions from './menu-options/page';
import './styles.css'
import Navbar from '../navbar/page';

export default function Home() {
  return (
    <>
      <Navbar title='Home' />
      <MenuOptions pageType=''/>
    </>
  );
}
