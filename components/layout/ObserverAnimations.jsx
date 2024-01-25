// IntersectionObserverComponent.js
"use client"
import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

const ObserverAnimations = ({ children, threshold = 0.5, triggerOnce = true, animationType = 'fade-up' }) => {
  const ref = useRef();
  const [refInView, inView] = useInView({
    triggerOnce,
    threshold,
  });

  useEffect(() => {
    if (ref.current) {
      // Oculta la imagen inicialmente
      ref.current.style.opacity = '0';
    }
  }, []);

  useEffect(() => {
    if (inView && ref.current) {
      // Dependiendo del tipo de animación, aplica las clases correspondientes
      switch (animationType) {
        case 'fade-up':
          ref.current.classList.add('animate-fade-up', 'animate-once', 'animate-duration-[2000ms]', 'animate-from-down');
          break;
        case 'fade-right':
          ref.current.classList.add('animate-fade-right', 'animate-once', 'animate-duration-[100ms]', 'animate-from-left');
          break;
        case 'jump':
          ref.current.classList.add('animate-shake', 'animate-once', 'animate-duration-1500', 'animate-ease-linear', 'animate-normal')
          break;
        case 'jump-in':
          ref.current.classList.add('animate-jump-in', 'animate-once', 'animate-duration-1000', 'animate-ease-in', 'animate-normal')
          // Añade otras clases de animación según sea necesario
          break;
        // Agrega más casos según sea necesario
        default:
          break;
      }
      ref.current.style.opacity = '1';
    }
  }, [inView, ref, animationType]);

  return <div ref={(element) => { ref.current = element; refInView(element); }}>{children}</div>;
};

export default ObserverAnimations;
