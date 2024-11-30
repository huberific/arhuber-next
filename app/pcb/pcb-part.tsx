'use client';

import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

import { Mesh } from 'three';

interface GLTFComponentProps {
	fileUrl: string;
	onClick?: (isVisible: boolean) => void;
}

export default function PCBPart({ fileUrl, onClick }: GLTFComponentProps) {
	const mesh = useRef<Mesh>(null);
	const [isVisible, setIsVisible] = useState(false); // Track visible state
	let isListenForClickEvents = true;
	const gltf = useLoader(GLTFLoader, fileUrl);
	const doNotListenItems = new Set(['board']);
	gltf.scene.children.forEach((child) => {
		if (doNotListenItems.has(child.name)) {
			isListenForClickEvents = false;
			child.receiveShadow = true;
		} else {
			child.castShadow = true;
		}
	});

	useEffect(() => {
		let currChildren = mesh.current?.children;
		if (currChildren) {
			const grandchildren = currChildren[0].children;
			if (grandchildren) {
				grandchildren.forEach((child) => {
					if (child.name.includes('plane')) {
						child.visible = isVisible;
					}
				})
			}
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
