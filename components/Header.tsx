'use client';
import Link from 'next/link';
import React from 'react';
import { navItems } from '@/data/data';
import { useGSAP, gsap, ScrollTrigger } from '@/lib/gsap-util';
import { useRef } from 'react';

export default function Header() {

    useGSAP(() => {
        const showAnim = gsap.timeline({paused: true}).fromTo(
            '.header', 
            {
                yPercent: 0,
            },
            { 
                yPercent: -100, 
                duration: 0.3,
                ease: 'power2.inOut',
            }
        );

        ScrollTrigger.create({
            start: 'top top',
            end: 'max',
            onUpdate: (self) => {
                self.direction === 1 ? showAnim.play() : showAnim.reverse();
            },
        });
    }, {});

    const handleScroll = (elementId: string) => {
        if (!elementId) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }

        const section = document.getElementById(elementId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }

  return (
    <header 
        className='header sticky top-0 left-0 bg-white/70 backdrop-blur-md w-full py-4 z-50 header'
        id="header"
    >
        <div className='container flex items-center justify-between'>
            {/* logo */}
            <button
                onClick={() => handleScroll("")}
                className='font-bold text-2xl sm:text-3xl'    
            >
                Sore High
            </button>

            {/* nav list */}
            <nav className='flex items-center gap-5'>
                <ul className='flex flex-col sm:flex-row sm:items-center sm:gap-5'>
                    {navItems.map((item) => (
                        <li key={item.id}>
                            <button 
                                onClick={() => handleScroll(item.sectionId)}
                                className='uppercase font-medium hover:opacity-75 transition-opacity'    
                            >
                                {item.label}
                            </button>
                        </li>
                    ))}
                </ul>
                <button 
                    className='bg-neutral-900 text-white uppercase px-5 py-3 rounded-lg hover:opacity-85 transition-opacity hidden md:block'
                    onClick={() => handleScroll('contact')}
                >
                    Stalk Us 
                </button>
            </nav>
        </div>
    </header>
  )
}
