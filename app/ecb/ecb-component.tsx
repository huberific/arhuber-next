'use client';
import './ecb-styles.css';

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import ECBPart from './ecb-part';

export default function ECBComponent() {
  const path = '/ecb-components/';
  const fileUrls = [
    "ecb_board.gltf",
    "cyl_chip_1.gltf",
    "cyl_chip_2.gltf",
  ];
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

        {fileUrls.map((fileUrl, index) => (
          <ECBPart key={index}
            fileUrl={path + fileUrl}
            onClick={(isVisible) => handleMeshClick(index, isVisible)}/>
        ))}

        <axesHelper/>
        <OrbitControls />
      </Canvas>
    </div>
  )
}
