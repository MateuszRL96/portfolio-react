'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface AnimatedDotsBackgroundProps {
  className?: string;
}

// Function to create a star geometry with different sizes
function createStarGeometry(size: number) {
  const geometry = new THREE.BufferGeometry();
  const vertices = [];
  const indices = [];
  
  // Create a simple star shape with 5 points
  const outerRadius = size;
  const innerRadius = size * 0.5;
  
  for (let i = 0; i < 10; i++) {
    const angle = (i * Math.PI) / 5;
    const radius = i % 2 === 0 ? outerRadius : innerRadius;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    vertices.push(x, y, 0);
  }
  
  // Create triangles to form the star
  for (let i = 0; i < 8; i++) {
    indices.push(0, i + 1, i + 2);
  }
  indices.push(0, 9, 1); // Close the star
  
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();
  
  return geometry;
}

interface StarProperties {
  velocity: {
    x: number;
    y: number;
    z: number;
  };
  twinkleSpeed: number;
  twinklePhase: number;
  baseOpacity: number;
}

export default function AnimatedDotsBackground({ className = '' }: AnimatedDotsBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const animationIdRef = useRef<number | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: true 
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x6366f1, 0.2); // Indigo color to match hero section
    rendererRef.current = renderer;

    // Add renderer to container
    const container = containerRef.current;
    container.appendChild(renderer.domElement);

    // Create stars with different sizes and effects
    const stars: THREE.Mesh[] = [];
    const starCount = 800; // Much more stars for a denser effect
    
    // Create different star sizes
    const starSizes = [0.015, 0.02, 0.025, 0.03];
    const starColors = [
      0xffffff, // Pure white
      0xf0f8ff, // Alice blue
      0xe6f3ff, // Light blue-white
      0xfaf0e6  // Linen (warm white)
    ];

    for (let i = 0; i < starCount; i++) {
      const size = starSizes[Math.floor(Math.random() * starSizes.length)];
      const geometry = createStarGeometry(size);
      const color = starColors[Math.floor(Math.random() * starColors.length)];
      
      const material = new THREE.MeshBasicMaterial({ 
        color: color,
        transparent: true,
        opacity: 0.7,
        side: THREE.DoubleSide
      });

      const star = new THREE.Mesh(geometry, material);
      
      // Random position with systematic left-to-right movement
      star.position.x = (Math.random() - 0.5) * 15; // Wider spread
      star.position.y = (Math.random() - 0.5) * 15;
      star.position.z = (Math.random() - 0.5) * 15;
      
      // Random rotation for variety
      star.rotation.z = Math.random() * Math.PI * 2;
      
      // Systematic left-to-right movement with slight vertical variation
      star.userData = {
        velocity: {
          x: 0.012 + (Math.random() * 0.008), // Slightly slower for more stars
          y: (Math.random() - 0.5) * 0.003, // Minimal vertical movement
          z: (Math.random() - 0.5) * 0.003  // Minimal depth movement
        },
        twinkleSpeed: 0.02 + Math.random() * 0.03,
        twinklePhase: Math.random() * Math.PI * 2,
        baseOpacity: 0.4 + Math.random() * 0.4 // Different base opacities
      } as StarProperties;
      
      stars.push(star);
      scene.add(star);
    }

    // Animation loop
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);
      const time = Date.now() * 0.001;

      // Update star positions and effects
      stars.forEach((star) => {
        const userData = star.userData as StarProperties;
        const velocity = userData.velocity;
        const twinkleSpeed = userData.twinkleSpeed;
        const twinklePhase = userData.twinklePhase;
        const baseOpacity = userData.baseOpacity;
        
        // Update position
        star.position.x += velocity.x;
        star.position.y += velocity.y;
        star.position.z += velocity.z;

        // Reset position when star goes off the right side
        if (star.position.x > 7.5) {
          star.position.x = -7.5;
          star.position.y = (Math.random() - 0.5) * 15;
          star.position.z = (Math.random() - 0.5) * 15;
          star.rotation.z = Math.random() * Math.PI * 2;
          userData.twinklePhase = Math.random() * Math.PI * 2; // New twinkle phase
        }

        // Twinkling effect
        const twinkle = Math.sin(time * twinkleSpeed + twinklePhase) * 0.3 + 0.7;
        const finalOpacity = baseOpacity * twinkle;
        (star.material as THREE.MeshBasicMaterial).opacity = Math.max(0.1, finalOpacity);
        
        // Subtle rotation during movement
        star.rotation.z += 0.001;
      });

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      if (!renderer || !container) return;
      
      const width = container.clientWidth;
      const height = container.clientHeight;
      
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial size

    // Cleanup
    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      if (renderer && container) {
        container.removeChild(renderer.domElement);
      }
      window.removeEventListener('resize', handleResize);
      
      // Dispose of Three.js resources
      stars.forEach(star => {
        star.geometry.dispose();
        if (star.material instanceof THREE.Material) {
          star.material.dispose();
        }
      });
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      style={{ zIndex: 0 }}
    />
  );
} 