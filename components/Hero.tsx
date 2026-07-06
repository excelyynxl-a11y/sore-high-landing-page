"use client";
import { gsap, useGSAP, ScrollTrigger, SplitText } from '@/lib/gsap-util';
import { useRef } from 'react';

export default function Hero() {

    const containerRef = useRef<HTMLDivElement | null>(null);
    useGSAP(() => {
        const textSplit = SplitText.create('.text', {
            type: 'words',
            linesClass: 'text-line',
        });
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.hero-wrapper',
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
        <section 
            className="py-20 lg:py-28" 
            ref={containerRef}
            id="hero"
        >
            <div className="container flex flex-col">

                {/* wrapper */}
                <div className="hero-wrapper">
                    <h1 className="hero-title text">
                        train 
                    </h1>
                    <h1 className="hero-title text">
                        today 
                    </h1>
                    <h2 className="hero-title text">
                        move 
                    </h2>

                    {/* wrapper */}
                    <div className="flex items-center gap-6">
                        <h2 className="hero-title text">
                            forever 
                        </h2>
                        <div className="font-medium tracking-wider uppercase -space-y-1 sm:text-2xl text-neutral-800 hidden sm:block">
                            <p className="text hero-text">
                                sweat junkie
                            </p>
                            <p className="text hero-text">
                                training dept
                            </p>
                            <p className="text hero-text">
                                est 2021 
                            </p>
                        </div>
                    </div>

                    {/* small text */}
                    <div className="font-medium tracking-wider uppercase -space-y-1 sm:text-2xl text-neutral-800 hidden sm:block">
                        <p className="hero-text text">
                            blablabla 
                        </p>
                        <p className="hero-text text">
                            blablabla 
                        </p>
                        <p className="hero-text text">
                            blablabla 
                        </p>
                    </div>

                </div>
            </div>
        </section>
    )
}
