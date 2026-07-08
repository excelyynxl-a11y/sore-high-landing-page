"use client";
import { gsap, useGSAP, ScrollTrigger, SplitText } from '@/lib/gsap-util';
import { useRef } from 'react';
export default function About() {

    const containerRef = useRef<HTMLDivElement | null>(null);
    useGSAP(() => {
        const textSplit = SplitText.create('.text', {
            type: 'words lines',
            linesClass: 'text-line',
        });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.about-wrapper',
                start: 'top center',
            }
        });

        tl.from(textSplit.words, {
            yPercent: 100,
            ease: 'power2.inOut',
            duration: 1,
            stagger: 0.03, 
        });
        }, 
        {
            scope: containerRef,
        }
    );

    return (
        <section className="pt-20 sm:pt-24" ref={containerRef}>
            <div className="container flex justify-end-safe">

                {/* wrapper */}
                <div className="max-w-5xl w-full about-wrapper">

                    {/* text wrapper */}
                    <div className="flex flex-col md:items-center md:flex-row">
                        <p className="uppercase text-xl md:px-7 font-medium overflow-hidden text mb-2 sm:mb-0 text">
                            about 
                        </p>
                    </div>

                    {/* text wrapper */}
                    <div className="text-xl sm:text-2xl lg:text-5xl text">
                        <p className="">
                            Sore High is a training label built for those who show up. Born from sweat, reps, and the culture of moving with intention — every piece we make is designed to carry the weight of your grind and still look sharp when you walk out the door. No hype. Just honest gear for people who earn it.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
