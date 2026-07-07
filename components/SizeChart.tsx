"use client";
import { gsap, useGSAP, SplitText } from '@/lib/gsap-util';
import Image from 'next/image';
import { useRef } from 'react';

export default function SizeChart() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const textSplit = SplitText.create('.sizechart-text', {
      type: 'words lines',
      linesClass: 'text-line',
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.sizechart-wrapper',
        start: 'top 60%',
      }
    });

    tl.from(textSplit.words, {
      yPercent: 100,
      ease: 'power2.inOut',
      duration: 1,
      stagger: 0.03,
    });

    gsap.to('.sizechart-img', {
      duration: 1,
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      scrollTrigger: {
        trigger: '.sizechart-img',
        start: 'top center',
      }
    });
  }, { scope: containerRef });

  return (
    <section className="section" ref={containerRef}>
      <div className="container">
        {/* title */}
        <div className="sm:mx-auto sizechart-wrapper">
          {/* text wrapper */}
          <div className="flex gap-5 items-end">
            <h2 className="section-title sizechart-text">
              Size 
            </h2>
            <p className="max-w-60 uppercase font-medium hidden md:block sizechart-text">
              Size curated to for all hustlers
            </p>
          </div>
          <h2 className="section-title sizechart-text">
            Chart
          </h2>

          {/* small text */}
          <p className="max-w-96 uppercase font-medium mt-2 md:hidden sizechart-text">
            Size curated to for all hustlers
          </p>
        </div>

        {/* image */}
        <div className="border mt-16 lg:mt-24 divide-y">
          <Image 
            src="/images/SizeChart/size_chart.png"
            alt="sizechart"
            width={500}
            height={800}
            className="w-full h-full object-cover sizechart-img [clip-path:polygon(0%_0%,100%_0%,100%_0%,0%_0%)]"
          />
        </div>
      </div> 
    </section>
  )
}
