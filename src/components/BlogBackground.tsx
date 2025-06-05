'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function BlogBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true,
    });
    
    // Set renderer size to match container
    const updateSize = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    
    updateSize();
    container.appendChild(renderer.domElement);

    // Define spread constants for element boundaries
    const xSpread = 30;
    const ySpread = 20;
    const zRange = [-20, -2]; // Increased depth range

    // Add floating elements
    const elements: THREE.Mesh[] = [];
    const geometries = [
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.SphereGeometry(0.7, 32, 32),
      new THREE.TorusGeometry(0.5, 0.2, 16, 32),
      new THREE.TetrahedronGeometry(0.8),
      new THREE.OctahedronGeometry(0.8),
      new THREE.IcosahedronGeometry(0.8),
      new THREE.DodecahedronGeometry(0.8),
      new THREE.TorusKnotGeometry(0.4, 0.2, 64, 8)
    ];

    // Create more elements and position them closer to the camera
    for (let i = 0; i < 100; i++) {
      const geometry = geometries[Math.floor(Math.random() * geometries.length)];
      const material = new THREE.MeshPhongMaterial({
        color: new THREE.Color(0x2563eb),
        transparent: true,
        opacity: 0.5 + Math.random() * 0.3, // Random opacity
        shininess: 100,
        specular: new THREE.Color(0xffffff)
      });
      
      const element = new THREE.Mesh(geometry, material);
      
      // Position elements throughout the space
      element.position.x = (Math.random() * 2 - 1) * xSpread;
      element.position.y = (Math.random() * 2 - 1) * ySpread;
      element.position.z = zRange[0] + Math.random() * (zRange[1] - zRange[0]);
      
      // Add initial random rotation
      element.rotation.x = Math.random() * Math.PI;
      element.rotation.y = Math.random() * Math.PI;
      element.rotation.z = Math.random() * Math.PI;
      
      // Add random scale variation
      const scale = 0.3 + Math.random() * 0.7;
      element.scale.set(scale, scale, scale);
      
      elements.push(element);
      scene.add(element);
    }

    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x2563eb, 3);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    const pointLight2 = new THREE.PointLight(0x2563eb, 2);
    pointLight2.position.set(-5, -5, 5);
    scene.add(pointLight2);

    // Add moving point light
    const movingLight = new THREE.PointLight(0x2563eb, 2);
    scene.add(movingLight);

    camera.position.z = 10;

    // Animation
    let time = 0;
    function animate() {
      requestAnimationFrame(animate);
      time += 0.002;

      // Move the light
      movingLight.position.x = Math.sin(time) * 15;
      movingLight.position.y = Math.cos(time) * 15;
      movingLight.position.z = 5 + Math.sin(time * 2) * 5;

      elements.forEach((element, i) => {
        // Create more varied movement
        const speed = 0.005 + (i % 5) * 0.002;
        element.rotation.x += speed * (i % 2 ? 1 : -1);
        element.rotation.y += speed * (i % 3 ? 1 : -1);
        element.rotation.z += speed * (i % 4 ? 1 : -1);
        
        // Add more natural floating motion
        const floatAmplitude = 0.8;
        const floatSpeed = 0.001;
        element.position.y += Math.sin(time * floatSpeed * (i + 1)) * floatAmplitude * 0.02;
        element.position.x += Math.cos(time * floatSpeed * (i + 1)) * floatAmplitude * 0.01;
        element.position.z += Math.sin(time * floatSpeed * (i + 2)) * floatAmplitude * 0.005;
        
        // Keep elements within bounds with smooth transition
        if (Math.abs(element.position.y) > ySpread) {
          element.position.y *= 0.98;
        }
        if (Math.abs(element.position.x) > xSpread) {
          element.position.x *= 0.98;
        }
        if (Math.abs(element.position.z - zRange[0]) > (zRange[1] - zRange[0])) {
          element.position.z = zRange[0] + (zRange[1] - zRange[0]) * 0.5;
        }
      });

      renderer.render(scene, camera);
    }

    // Handle resize
    function handleResize() {
      updateSize();
    }

    window.addEventListener('resize', handleResize);
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (container && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geometries.forEach(geometry => geometry.dispose());
      elements.forEach(element => {
        (element.material as THREE.Material).dispose();
        element.geometry.dispose();
      });
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed top-0 left-0 w-full h-full pointer-events-none" 
      style={{ zIndex: 0 }}
    />
  );
} 