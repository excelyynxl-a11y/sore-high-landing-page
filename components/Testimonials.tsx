"use client";
import { gsap, useGSAP, SplitText } from '@/lib/gsap-util';
import { testimonialItems } from '@/data/data';
import { ArrowBigLeft, ArrowBigRight } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react'

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const item = testimonialItems[index];
  const total = testimonialItems.length;
  const containerRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const isFirstRender = useRef(true);

  // prev = swipe left
  const prev = () => {
    setDirection(-1);
    setIndex((i) => (i - 1 + total) % total);
  };

  // next = swipe right
  const next = () => {
    setDirection(1);
    setIndex((i) => (i + 1) % total);
  };

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { x: direction * 60, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: 'power2.out' }
      );
    }
  }, [index, direction]);

  useGSAP(() => {
    const textSplit = SplitText.create('.testimonial-text', {
      type: 'words lines',
      linesClass: 'text-line',
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.testimonial-wrapper',
        start: 'top 60%',
      }
    });

    tl.from(textSplit.words, {
      yPercent: 100,
      ease: 'power2.inOut',
      duration: 1,
      stagger: 0.03,
    });

    gsap.to('.testimonial-img', {
      duration: 1,
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      scrollTrigger: {
        trigger: '.testimonial-img',
        start: 'top center',
      }
    });
  }, { scope: containerRef });

  return (
    <section className="section mb-[10vh]" ref={containerRef}>
      <div className="container">
        {/* title */}
        <div className="sm:mx-auto testimonial-wrapper">
          {/* text wrapper */}
          <div className="flex gap-5 items-end">
            <h2 className="section-title testimonial-text">
              What 
            </h2>
            <p className="max-w-60 uppercase font-medium hidden md:block testimonial-text">
              Over time, some of them became a certified sore high!
            </p>
          </div>
          <h2 className="section-title testimonial-text">
            people say
          </h2>

          {/* small text */}
          <p className="max-w-96 uppercase font-medium mt-2 md:hidden testimonial-text">
            Over time, some of them have become a certified sore high!
          </p>
        </div>

        {/* wrapper */}
        <div className="border mt-16 lg:mt-24 divide-y">
          {/* content */}
          <div
            ref={contentRef}
            className="grid gap-5 lg:grid-cols-[0.8fr_1fr] lg:items-center p-6"
          >
            {/* image */}
            <div className="relative group">
              <Image 
                src={item.img}
                alt={item.name}
                width={640}
                height={965}
                className="w-full h-full object-cover testimonial-img [clip-path:polygon(0%_0%,100%_0%,100%_0%,0%_0%)]"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
            </div>

            {/* content */}
            <div className="border-t lg:border-l lg:border-t-0 lg:pl-5">
              {/* info */}
              <div className="flex flex-wrap py-5 px-2.5 gap-3 justify-between">
                <p className="text-lg uppercase">
                  <span className="font-medium">
                    name: {" "}
                  </span>
                  {item.name}
                </p>
                <p className="text-lg uppercase">
                  <span className="font-medium">
                    role: {" "}
                  </span>
                  {item.role}
                </p>
                <p className="text-lg uppercase">
                  <span className="font-medium">
                    product: {" "}
                  </span>
                  {item.product}
                </p>
                <p className="text-lg uppercase">
                  <span className="font-medium">
                    instagram: {" "}
                  </span>
                  <a 
                    href={item.instagramLink}
                    target="_blank"
                    className="hover:underline"
                  >
                    {item.instagramHandle}
                  </a>
                </p>
              </div>
              
              {/* text */}
              <p className="text-xl sm:text-2xl">
                {item.desc}
              </p>
            </div>
          </div>

          {/* controls */}
          <div className="flex justify-between items-center">
            <button onClick={prev}> 
              <ArrowBigLeft 
                size={40}
                className="text-neutral-900 hover:fill-neutral-900 transition-colors"
              />
            </button>
            <span>
              {String(index + 1).padStart(2, "0")}/{String(total).padStart(2, "0")}
            </span>
            <button onClick={next}>
              <ArrowBigRight 
                size={40}
                className="text-neutral-900 hover:fill-neutral-900 transition-colors"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
