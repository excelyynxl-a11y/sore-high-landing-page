"use client";
import React, { useState, useRef, useCallback, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import ShareButton from './ShareButton';
import CopyLinkButton from './CopyLinkButton';

type ProductPageProps = {
    itemId: number;
    itemTitle: string;
    itemText: string;
    itemImages: string[];
    itemPrice: number;
};

export default function ProductPage({
    itemId,
    itemTitle,
    itemText,
    itemImages,
    itemPrice,
}: ProductPageProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentUrl, setCurrentUrl] = useState('');
    const touchStartX = useRef<number>(0);
    const touchEndX = useRef<number>(0);

    useEffect(() => {
        setCurrentUrl(window.location.href);
    }, []);

    const goTo = useCallback((index: number) => {
        setCurrentIndex(Math.max(0, Math.min(index, itemImages.length - 1)));
    }, [itemImages.length]);

    const prev = useCallback(() => goTo(currentIndex - 1), [currentIndex, goTo]);
    const next = useCallback(() => goTo(currentIndex + 1), [currentIndex, goTo]);

    const onTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const onTouchEnd = (e: React.TouchEvent) => {
        touchEndX.current = e.changedTouches[0].clientX;
        const delta = touchStartX.current - touchEndX.current;
        if (Math.abs(delta) > 50) {
            delta > 0 ? next() : prev();
        }
    };

    return (
        <div className="container py-10 lg:py-16">

            {/* back button */}
            <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-neutral-500 hover:text-black transition-colors mb-10"
            >
                <ArrowLeft size={16} />
                Back
            </Link>

            <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 xl:gap-24">

                {/* image carousel */}
                <div className="lg:w-3/5 flex flex-col gap-4">

                    {/* main image + arrows */}
                    <div className="relative overflow-hidden bg-neutral-100 aspect-square">

                        {/* slides */}
                        <div
                            className="flex h-full transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                            onTouchStart={onTouchStart}
                            onTouchEnd={onTouchEnd}
                        >
                            {itemImages.map((img, i) => (
                                <div key={i} className="relative shrink-0 w-full h-full">
                                    <Image
                                        src={img}
                                        alt={`${itemTitle} – image ${i + 1}`}
                                        fill
                                        className="object-cover"
                                        priority={i === 0}
                                    />
                                </div>
                            ))}
                        </div>

                        {/* desktop arrow buttons */}
                        <button
                            onClick={prev}
                            disabled={currentIndex === 0}
                            aria-label="Previous image"
                            className="hidden lg:flex absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 items-center justify-center rounded-full bg-neutral-200 hover:bg-neutral-300 transition-colors disabled:opacity-25 disabled:cursor-not-allowed z-10"
                        >
                            <ArrowLeft size={18} />
                        </button>
                        <button
                            onClick={next}
                            disabled={currentIndex === itemImages.length - 1}
                            aria-label="Next image"
                            className="hidden lg:flex absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 items-center justify-center rounded-full bg-neutral-200 hover:bg-neutral-300 transition-colors disabled:opacity-25 disabled:cursor-not-allowed z-10"
                        >
                            <ArrowRight size={18} />
                        </button>
                    </div>

                    {/* dot indicators */}
                    <div className="flex items-center justify-center gap-2">
                        {itemImages.map((image, index) => (
                            <button
                                key={index}
                                onClick={() => goTo(index)}
                                aria-label={`Go to image ${index + 1}`}
                                className={`rounded-full transition-all duration-300 ${
                                    index === currentIndex
                                        ? 'w-6 h-2 bg-neutral-900'
                                        : 'w-2 h-2 bg-neutral-300 hover:bg-neutral-500'
                                }`}
                            />
                        ))}
                    </div>

                    {/* thumbnail strip — desktop only */}
                    <div className="hidden lg:flex gap-2">
                        {itemImages.map((image, index) => (
                            <button
                                key={index}
                                onClick={() => goTo(index)}
                                aria-label={`Thumbnail ${index + 1}`}
                                className={`relative w-20 h-20 shrink-0 overflow-hidden border-2 transition-colors ${
                                    index === currentIndex
                                        ? 'border-neutral-900'
                                        : 'border-transparent hover:border-neutral-400'
                                }`}
                            >
                                <Image
                                    src={image}
                                    alt={`${itemTitle} thumbnail ${index + 1}`}
                                    fill
                                    className="object-cover"
                                />
                            </button>
                        ))}
                    </div>
                </div>

                {/* product info */}
                <div className="lg:w-2/5 flex flex-col gap-6">

                    {/* title & price */}
                    <div className="border-b border-neutral-200 pb-6">
                        <h1 className="font-medium uppercase text-3xl sm:text-4xl xl:text-5xl leading-[0.9] mb-4">
                            {itemTitle}
                        </h1>
                        <p className="text-2xl font-medium text-neutral-900">
                            RM {itemPrice}
                        </p>
                    </div>

                    {/* description */}
                    <p className="text-neutral-600 leading-relaxed">
                        {itemText}
                    </p>

                    {/* interested? preorder now */}
                    <a
                        href="https://wa.me/60193709781"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-neutral-900 text-white uppercase text-sm font-medium tracking-widest py-4 text-center hover:bg-neutral-700 transition-colors"
                    >
                        Interested? Preorder Now
                    </a>

                    {/* share row */}
                    <div className="flex items-center gap-3 pt-2 border-t border-neutral-200">
                        <span className="text-xs uppercase tracking-widest text-neutral-400 mr-auto">Share</span>
                        <ShareButton
                            title={itemTitle}
                            text={`Check out ${itemTitle} by Sore High!`}
                            url={currentUrl}
                        />
                        <CopyLinkButton url={currentUrl} />
                    </div>
                </div>
            </div>
        </div>
    );
}
