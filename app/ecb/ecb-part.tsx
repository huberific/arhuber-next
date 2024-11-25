'use client';

import { useRef, useState, useEffect } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

import { Mesh } from 'three';

interface GLTFComponentProps {
  fileUrl: string;
  onClick?: (isVisible: boolean) => void;
}

export default function ECBPart({ fileUrl, onClick }: GLTFComponentProps ) {
  const mesh = useRef<Mesh>(null);
  const [isVisible, setIsVisible] = useState(false); // Track visible state
//   const [isListenForClickEvents, setIsListenForClickEvents] = useState(true); // Track visible state
  let isListenForClickEvents = true;
  const gltf = useLoader(GLTFLoader, fileUrl);
  const doNotListenItems = new Set(['board']);
  gltf.scene.children.forEach((child) => {
    if (doNotListenItems.has(child.name)) {
        isListenForClickEvents = false;
    }
  });

//   gltf.scene.traverse(function(child){
//     if (child.name in doNotListenItems) {
//         setIsListenForClickEvents(false);
//     }
//   });

  useEffect(() => {
    if (mesh.current) {
      mesh.current.traverse((child) => {
        if (child instanceof Mesh) {
          if (child.parent?.name.includes('plane')) {
            child.parent.visible = isVisible;
          }
        }
      });
    }
  }, [isVisible, gltf]); // Re-run whenever isVisible state or the model changes

  const handleClick = () => {
    if (isListenForClickEvents) {
      const newVisibility = !isVisible;
      setIsVisible(newVisibility);
      if (onClick) {
        onClick(newVisibility);
      }
    }
  };

  return (
    <mesh ref={mesh} onClick={handleClick}>
      <primitive object={gltf.scene} />
    </mesh>
  );
}
