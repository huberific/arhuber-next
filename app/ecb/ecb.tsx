'use client';
import './ecb-styles.css';

import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';
import { Mesh } from 'three';

function MeshComponent() {
  const fileUrl = '/ecb1.gltf';
  const mesh = useRef<Mesh>(null);
  const [isTransparent, setIsTransparent] = useState(false); // Track transparency state
  const gltf = useLoader(GLTFLoader, fileUrl);
  // gltf.scene.traverse((node) => {
  //   console.log(node);
  // })

  useEffect(() => {
    // Ensure the loaded model has the mesh and material set up for transparency
    if (mesh.current) {
      // Loop through the children (in case the model has multiple meshes)
      mesh.current.traverse((child) => {
        if (child instanceof Mesh) {
          child.material.transparent = true; // Make the material transparent
          // child.material.opacity = isTransparent ? 0.8 : 1; // Set opacity based on state
          const color = child.material.color;
          const hsl = color.getHSL({});
          if (isTransparent) {
            color.setHSL(hsl.h, hsl.s * 0.0, hsl.l); // Reduce saturation by half
          } else {
            color.setHSL(hsl.h, hsl.s, hsl.l); // Reduce saturation by half
          }
        }
      });
    }
  }, [isTransparent, gltf]); // Re-run whenever transparency state or the model changes


  const handleClick = () => {
    setIsTransparent((prev) => !prev);
  };

  return (
    <mesh ref={mesh} onClick={handleClick}>
      <primitive object={gltf.scene} />
    </mesh>
  );
}


export function ECB() {
  console.log(MeshComponent());
  return (
    <div className='scene'>
      <Canvas camera={{ position: [0, 0.25, 0.2], fov: 75 }}
      >
        <ambientLight intensity={0.5} />
        <pointLight intensity={0.25} position={[0, 0.4, 0]} />
        <pointLight position={[0, 0.15, 0.4]} />
        <axesHelper/>
        <MeshComponent />
        <OrbitControls />
      </Canvas>
    </div>
  )
}
