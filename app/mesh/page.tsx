'use client'

import { duration } from '@mui/material';
import './styles.css'
import { motion } from 'framer-motion';

const div = 4;
// const numRows = Math.floor(window.screen.height / div);
// const numCols = Math.floor(window.screen.width / div);
const numRows = 100 / div;
const numCols = 100 / div;
const width = div + 'vw';
const height = div + 'vh';
const scale = 0.8;
const borderColor = 'black'; 
const borderThickness = '0.5px';
const borderStyle = 'solid';
const border = borderThickness + ' ' + borderStyle + ' ' + borderColor;
const divStyle = {
  width: width,
  height: height,
  border: border,
  // backgroundColor: '#F0F0F0',
  borderRadius: '50%'
}
const divHover = {
  scale: scale
}
const divTransition = {
  type: 'spring',
  stiffness: '100',
}
let keyIncr = 0;

function AnimatedBox() {
  return (
    <motion.div
      whileHover={divHover}
      transition={divTransition}>
      <div style={divStyle} />
    </motion.div>
  )
}

function AnimatedRows() {
  let boxes = []
  for (let i = 0; i < numCols; i++) {
    boxes.push(<AnimatedBox key={keyIncr++}/>)
  }
  return (
    <div className='flex'>
      {boxes}
    </div>
  );
}

function AnimatedGrid() {
  let rows = [];
  for (let i = 0; i < numRows; i++) {
    rows.push(<AnimatedRows key={keyIncr++}/>)
  }
  console.log(rows);
  return rows;
}

export default function Home() {
  return (
    <AnimatedGrid />
  );
}
