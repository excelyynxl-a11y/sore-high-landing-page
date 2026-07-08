"use client";
import { faqItems } from '@/data/data';
import { gsap, useGSAP, ScrollTrigger, SplitText } from '@/lib/gsap-util';
import React, { useRef } from 'react'
import FAQCard from './FAQCard';

export default function FAQ() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  useGSAP(() => {
    const textSplit = SplitText.create('.faq-text', {
      type: 'words lines',
      linesClass: 'text-line',
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.faq-wrapper',
        start: 'top 60%',
      }
    });

    tl.from(textSplit.words, {
      yPercent: 100,
      ease: 'power2.inOut',
      duration: 1,
      stagger: 0.03,
    });

    gsap.to('.faq-img', {
      duration: 1,
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      scrollTrigger: {
        trigger: '.faq-img',
        start: 'top center',
      }
    });
  }, { scope: containerRef });

  return (
      <section className="section mb-[10vh]" ref={containerRef}>
        <div className="container">
          {/* title */}
          <div className="sm:mx-auto faq-wrapper">
            {/* text wrapper */}
            <div className="flex gap-5 items-end">
              <h2 className="section-title faq-text">
                FAQ 
              </h2>
              <p className="max-w-60 uppercase font-medium hidden md:block faq-text">
                layaning your sore high questions
              </p>
            </div>

            {/* small text */}
            <p className="max-w-96 uppercase font-medium mt-2 md:hidden faq-text">
              layaning your sore high questions
            </p>
          </div>

          {/* faq card container */}
          <div className="space-y-4 sm:space-y-5 mt-10 lg:mt-24">
            {faqItems.map((item) => (
              <FAQCard 
                key={item.id}
                itemId={item.id}
                itemQuestion={item.question}
                itemAnswer={item.answer}
              />
            ))}
          </div>
        </div>
      </section>
  )
}
