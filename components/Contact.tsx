"use client";
import { gsap, useGSAP, SplitText } from '@/lib/gsap-util';
import Image from 'next/image';
import { useRef } from 'react';

export default function Contact() {

  const containerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const textSplit = SplitText.create('.contact-text', {
      type: 'words lines',
      linesClass: 'text-line',
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.contact-wrapper',
        start: 'top 60%',
      }
    });

    tl.from(textSplit.words, {
      yPercent: 100,
      ease: 'power2.inOut',
      duration: 1,
      stagger: 0.03,
    });

    gsap.to('.contact-img', {
      duration: 1,
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      scrollTrigger: {
        trigger: '.contact-img',
        start: 'top center',
      }
    });
  }, { scope: containerRef }); 

  return (
    <section className="section" ref={containerRef}>
      <div className="container">
        {/* title */}
        <div className="sm:mx-auto contact-wrapper">
          {/* text wrapper */}
          <div className="flex gap-5 items-end">
            <h2 className="section-title contact-text">
              Contact 
            </h2>
            <p className="max-w-60 uppercase font-medium hidden md:block sizechart-text">
              Place your orders, DMs, collaboration or borak
            </p>
          </div>
          <h2 className="section-title contact-text">
            Us
          </h2>

          {/* small text */}
          <p className="max-w-96 uppercase font-medium mt-2 md:hidden sizechart-text">
            Place your orders, DMs, collaboration or borak
          </p>

          <div>
            
          </div>
        </div>
      </div> 
    </section>
  )
}
