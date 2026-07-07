"use client";
import { gsap, useGSAP, SplitText } from '@/lib/gsap-util';
import { testimonialItems } from '@/data/data';
import { ArrowBigLeft, ArrowBigRight } from 'lucide-react';
import Image from 'next/image';
import { useRef, useState } from 'react'

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const item = testimonialItems[index];
  const total = testimonialItems.length;
  const containerRef = useRef<HTMLDivElement | null>(null);

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

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
    <section className="section" ref={containerRef}>
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
          <div className="grid gap-5 lg:grid-cols-[0.8fr_1fr] lg:items-center p-6">
            {/* image */}
            <div className="">
              <Image 
                src={item.img}
                alt={item.name}
                width={640}
                height={965}
                className="w-full h-full object-cover testimonial-img [clip-path:polygon(0%_0%,100%_0%,100%_0%,0%_0%)]"
              />
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
