"use client";
import { gsap, useGSAP, SplitText } from '@/lib/gsap-util';
import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';
import ShareButton from './ShareButton';
import DownloadButton from './DownloadButton';

export default function SizeChart() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [shareUrl, setShareUrl] = useState("");

  useEffect(() => {
    setShareUrl(`${window.location.origin}/images/SizeChart/size_chart.png`);
  }, []);

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
            Size curated for all hustlers
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

        {/* share button */}
        <div className=" mt-3 flex items-center gap-3 pt-2 border-t border-neutral-200">
          <ShareButton 
            title="Sore High T-Shirt Size Chart"
            text="👕 Check out the Sore High size chart and find your fit 💪"
            url={shareUrl}
          />
        </div>
      </div> 
    </section>
  )
}
