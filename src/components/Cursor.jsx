import React, { useState, useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';

const Cursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const springConfig = { damping: 25, stiffness: 250 };
  const cursorX = useSpring(mousePos.x, springConfig);
  const cursorY = useSpring(mousePos.y, springConfig);
  
  const outlineX = useSpring(mousePos.x, { damping: 15, stiffness: 100 });
  const outlineY = useSpring(mousePos.y, { damping: 15, stiffness: 100 });

  return (
    <div style={{ pointerEvents: 'none' }}>
      <motion.div 
        className="custom-cursor"
        style={{ 
          x: cursorX, 
          y: cursorY, 
          translateX: '-50%', 
          translateY: '-50%',
          position: 'fixed',
          top: 0,
          left: 0
        }}
      />
      <motion.div 
        className="custom-cursor-outline"
        style={{ 
          x: outlineX, 
          y: outlineY, 
          translateX: '-50%', 
          translateY: '-50%',
          position: 'fixed',
          top: 0,
          left: 0
        }}
      />
    </div>
  );
};

export default Cursor;
