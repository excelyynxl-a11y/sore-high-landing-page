"use client";
import { gsap, useGSAP, ScrollTrigger, SplitText } from '@/lib/gsap-util';
import { useRef } from 'react';
import { productSectionItems } from '@/data/data';
import ProductItemCard from './ProductItemCard';

export default function Products() {
    const containerRef = useRef<HTMLDivElement | null>(null);
    useGSAP(() => {
        const textSplit = SplitText.create('.text', {
            type: 'words lines',
            linesClass: 'text-line',
        });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.products-wrapper',
                start: 'top 60%',
            }
        });

        tl.from(textSplit.words, {
            yPercent: 100,
            ease: 'power2.inOut',
            duration: 1,
            stagger: 0.03, 
        });

        gsap.to('.section-img', {
            duration: 1,
            stagger: 1,
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            scrollTrigger: {
                trigger: '.work-section-wrapper',
                start: 'top center',
            }
        });

        }, 
        {
            scope: containerRef,
        }
    ); 

    return (
        <section 
            className="section" 
            ref={containerRef}
            id="products"
        >
            <div className="container">
                {/* title */}
                <div className="flex flex-wrap items-center justify-between gap-6 products-wrapper">
                    {/* text wrapper */}
                    <div className="">
                        <h2 className="section-title text">
                            selected 
                        </h2>
                        <h2 className="section-title text">
                            Products
                        </h2>
                    </div>

                    {/* text wrapper */}
                    <div className="sm:text-2xl uppercase font-medium">
                        <p className="text">
                            selected 
                        </p>
                        <p className="text">
                            Works and Products
                        </p>
                    </div>
                </div>

                {/* wrapper */}
                <div className="space-y-32 lg:space-y-44 mt-24 lg:mt-36 work-section-wrapper">
                    {productSectionItems.map((item, index) => (
                        <ProductItemCard
                            key={item.id}
                            itemId={item.id}
                            itemTitle={item.title}
                            itemText={item.text}
                            itemImages={item.img}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
