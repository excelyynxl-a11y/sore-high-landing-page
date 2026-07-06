"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useRef } from 'react';
import { gsap, useGSAP } from '@/lib/gsap-util';

type ProductItemCardProps = {
    itemId: number;
    itemTitle: string;
    itemText: string;
    itemImages: string[];
    index: number;
};

export default function ProductItemCard({
    itemId,
    itemTitle,
    itemText,
    itemImages,
    index,
}: ProductItemCardProps) {
    const trackRef = useRef<HTMLDivElement | null>(null);

    const loopImages = [...itemImages, ...itemImages]; 
    
    useGSAP(() => {
    gsap.to(trackRef.current, {
        xPercent: -500, 
        duration: 20, 
        ease: 'none',
        repeat: -1,
    });
    }, { scope: trackRef });

    return (
        <Link
            href={`/product/${itemId}`}
            className="flex flex-col lg:flex-row lg:justify-center lg:items-center gap-6 lg:gap-8 xl:gap-16"
        >
            {/* content */}
            <div className="space-y-1.5">
                <h3 className="text-4xl uppercase font-medium text">
                    {itemTitle}
                </h3>
                <p className="max-w-md text">
                    {itemText}
                </p>
            </div>

            {/* image */}
            <div
                className={`${index % 2 !== 0 ? 'lg:order-first' : ''} section-img overflow-hidden w-145.75 max-w-full h-65`}
                style={{
                    clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)'
                }}
            >
                <div ref={trackRef} className="flex h-full">
                    {loopImages.map((img, index) => (
                        <Image
                            key={index}
                            src={img}
                            alt={itemTitle}
                            width={583}
                            height={260}
                            className="w-145.75 h-full object-cover shrink-0"
                        />
                    ))}
                </div>
            </div>
        </Link>
    )
}
