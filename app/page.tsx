'use client'

import MenuOptions from './home/menu-options/page';
import './styles.css'
import Navbar from './navbar/page';

export default function Homefirst() {
  return (
    <>
      <Navbar title='/' />
      <MenuOptions pageType='/' />
    </>
  );
}
