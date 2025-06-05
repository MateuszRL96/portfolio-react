'use client';

import { useEffect, useRef } from 'react';
import { gsap } from '@/utils/gsap';

const CodePreview = () => {
  const codeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (codeRef.current) {
      // Create floating animation
      gsap.to(codeRef.current, {
        y: '20px',
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
      });
    }
  }, []);

  return (
    <div 
      ref={codeRef}
      className="bg-gray-900/90 backdrop-blur-sm p-6 rounded-xl text-sm font-mono shadow-2xl"
    >
      <div className="flex items-center gap-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
      <div className="space-y-2">
        <div className="text-white"><span className="text-purple-400">const</span> <span className="text-blue-400">developer</span> = {'{'}</div>
        <div className="text-white pl-4"><span className="text-green-400">name</span>: <span className="text-yellow-300">&apos;Mateusz Kulec&apos;</span>,</div>
        <div className="text-white pl-4"><span className="text-green-400">role</span>: <span className="text-yellow-300">&apos;Full-Stack Developer&apos;</span>,</div>
        <div className="text-white pl-4"><span className="text-green-400">skills</span>: [</div>
        <div className="text-white pl-8"><span className="text-yellow-300">&apos;React&apos;</span>,</div>
        <div className="text-white pl-8"><span className="text-yellow-300">&apos;Node.js&apos;</span>,</div>
        <div className="text-white pl-8"><span className="text-yellow-300">&apos;TypeScript&apos;</span>,</div>
        <div className="text-white pl-8"><span className="text-yellow-300">&apos;Next.js&apos;</span></div>
        <div className="text-white pl-4">],</div>
        <div className="text-white pl-4"><span className="text-green-400">passion</span>: <span className="text-yellow-300">&apos;Tworzenie&apos;</span>,</div>
        <div className="text-white pl-4"><span className="text-blue-400">buildAmazingThings</span>() {'{'}</div>
        <div className="text-white pl-8"><span className="text-purple-400">return</span> <span className="text-yellow-300">&apos;🚀 Gotowe!&apos;</span>;</div>
        <div className="text-white pl-4">{'}'}</div>
        <div className="text-white">{'}'}</div>
      </div>
    </div>
  );
};

export default CodePreview; 