'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import PCBPart from './pcb-part';
import { fileNames } from './pcb-filenames';
import './styles.css'

export default function PCBComponent() {
  const path = '/ecb-components/';
  const fileExt = '.gltf'
  const timer = Date.now();

  const handleMeshClick = (index: number, isVisible: boolean) => {
    const time = Date.now() - timer;
    console.log(`Mesh at index ${index} isVisible: ${isVisible}. Timestamp: ${time} ms`);
  }

  return (
    <div className='scene'>
      <Canvas camera={{ position: [0, 0.25, 0.2], fov: 75 }}
      >
        <ambientLight intensity={0.5} />
        <pointLight intensity={0.25} position={[0, 0.4, 0]} />
        <pointLight position={[0, 0.15, 0.4]} />

        {fileNames.map((fileName, index) => (
          <PCBPart key={index}
            fileUrl={path + fileName + fileExt}
            onClick={(isVisible) => handleMeshClick(index, isVisible)}/>
        ))}

        {/* <axesHelper/> */}
        {/* <OrbitControls enableRotate={false} maxZoom={10} /> */}
      </Canvas>
    </div>
  )
}
