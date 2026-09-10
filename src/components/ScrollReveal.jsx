import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './ScrollReveal.css';

gsap.registerPlugin(ScrollTrigger);

const ScrollReveal = ({
  children,
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0.1,
  baseRotation = 4,
  blurStrength = 8,
  containerClassName = '',
  scrollStart = 'top bottom-=5%',
  scrollEnd = 'center center+10%',
  scrub = true
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller = scrollContainerRef && scrollContainerRef.current ? scrollContainerRef.current : window;

    const tween = gsap.fromTo(
      el,
      {
        transformOrigin: '50% 50%',
        rotate: baseRotation,
        opacity: baseOpacity,
        filter: enableBlur ? `blur(${blurStrength}px)` : 'none',
        y: 40
      },
      {
        ease: 'power2.out',
        rotate: 0,
        opacity: 1,
        filter: 'blur(0px)',
        y: 0,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: scrollStart,
          end: scrollEnd,
          scrub: scrub
        }
      }
    );

    return () => {
      if (tween.scrollTrigger) tween.scrollTrigger.kill();
      tween.kill();
    };
  }, [scrollContainerRef, enableBlur, baseRotation, baseOpacity, blurStrength, scrollStart, scrollEnd, scrub]);

  return (
    <div ref={containerRef} className={`scroll-reveal ${containerClassName}`}>
      {children}
    </div>
  );
};

export default ScrollReveal;
