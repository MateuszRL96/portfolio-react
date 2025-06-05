'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function BlogBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / 300, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, 300);
    containerRef.current.appendChild(renderer.domElement);

    // Add floating elements
    const elements: THREE.Mesh[] = [];
    const geometries = [
      new THREE.OctahedronGeometry(0.8),
      new THREE.TetrahedronGeometry(0.8),
      new THREE.IcosahedronGeometry(0.8)
    ];

    // Create more elements and position them closer to the camera
    for (let i = 0; i < 25; i++) {
      const geometry = geometries[Math.floor(Math.random() * geometries.length)];
      const material = new THREE.MeshPhongMaterial({
        color: 0x2563eb,
        transparent: true,
        opacity: 0.9,
        shininess: 200
      });
      
      const element = new THREE.Mesh(geometry, material);
      
      // Position elements in a more focused area around the text
      const xSpread = 12;
      const ySpread = 6;
      const zRange = [-8, -4]; // Bring elements closer to camera
      
      element.position.x = (Math.random() * 2 - 1) * xSpread;
      element.position.y = (Math.random() * 2 - 1) * ySpread;
      element.position.z = zRange[0] + Math.random() * (zRange[1] - zRange[0]);
      
      // Add initial random rotation
      element.rotation.x = Math.random() * Math.PI;
      element.rotation.y = Math.random() * Math.PI;
      
      elements.push(element);
      scene.add(element);
    }

    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x2563eb, 2);
    pointLight.position.set(2, 2, 2);
    scene.add(pointLight);

    // Add second point light for better illumination
    const pointLight2 = new THREE.PointLight(0x2563eb, 1.5);
    pointLight2.position.set(-2, -2, 2);
    scene.add(pointLight2);

    camera.position.z = 5;

    // Animation
    let time = 0;
    function animate() {
      requestAnimationFrame(animate);
      time += 0.01;

      elements.forEach((element, i) => {
        // Create more varied movement
        const speed = 0.02;
        element.rotation.x += speed * (i % 2 ? 1 : -1);
        element.rotation.y += speed * (i % 3 ? 1 : -1);
        
        // Add more natural floating motion
        const floatAmplitude = 0.5;
        const floatSpeed = 0.002;
        element.position.y += Math.sin(time * floatSpeed * (i + 1)) * floatAmplitude * 0.02;
        element.position.x += Math.cos(time * floatSpeed * (i + 1)) * floatAmplitude * 0.01;
        
        // Keep elements within bounds
        if (Math.abs(element.position.y) > ySpread) {
          element.position.y *= 0.95;
        }
        if (Math.abs(element.position.x) > xSpread) {
          element.position.x *= 0.95;
        }
      });

      renderer.render(scene, camera);
    }

    // Handle resize
    function handleResize() {
      if (!containerRef.current) return;
      camera.aspect = window.innerWidth / 300;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, 300);
    }

    window.addEventListener('resize', handleResize);
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      geometries.forEach(geometry => geometry.dispose());
      elements.forEach(element => {
        (element.material as THREE.Material).dispose();
        element.geometry.dispose();
      });
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} className="absolute top-0 left-0 w-full h-[300px] -z-10" />;
} 