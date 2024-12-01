'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import PCBPart from './pcb-part';
import { fileNames } from './pcb-filenames';
import './styles.css'

export default function PCBComponent({ onPartClick }: any) {
  const path = '/pcb-components/';
  const fileExt = '.gltf'
  const timer = Date.now();

  const handleMeshClick = (index: number, isVisible: boolean) => {
    const time = Date.now() - timer;
    // console.log(`Mesh at index ${index} isVisible: ${isVisible}. Timestamp: ${time} ms`);
    if (onPartClick) {
      onPartClick(index, isVisible, time);
    }
  }

  return (
    <div className='scene'>
      <Canvas camera={{ position: [0, 0.55, 0.3], fov: 75, zoom: 2.6 }}
      >
        <ambientLight intensity={0.5} />
        <pointLight intensity={0.25} position={[0, 0.4, 0]} />
        <pointLight position={[0, 0.6, 0.2]} />
        {fileNames.map((fileName, index) => (
          <PCBPart key={index}
            fileUrl={path + fileName + fileExt}
            onClick={(isVisible) => handleMeshClick(index, isVisible)}/>
        ))}
      </Canvas>
    </div>
  )
}
