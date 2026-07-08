"use client";
import { productSectionItems } from '@/data/data';
import { ArrowLeft, Copy, Share } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import ShareButton from './ShareButton';
import CopyLinkButton from './CopyLinkButton';
import { useRouter } from 'next/navigation';

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

  const [index, setIndex] = useState(0); 
  const [direction, setDirection] = useState(1);
  const item = productSectionItems[index];
  const total = productSectionItems.length;

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
  
  const [currentUrl, setCurrentUrl] = useState<string>('');

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  const router = useRouter();


  return (
    <div>
      {/* back to homepage arrow button */}
      <button 
        className=""
        onClick={() => router.back()}
      >
        <ArrowLeft />
      </button>

      {/* swipable images display */}
      <div className="">
        <Image 
          src={item.img[index]}
          alt={item.title}
          width={640}
          height={965}
          className="w-full h-full object-cover testimonial-img [clip-path:polygon(0%_0%,100%_0%,100%_0%,0%_0%)]"
        />
      </div>

      {/* item title  */}
      <div className="">
        {itemTitle}
      </div>
        
      {/* item price  */}
      <div className="">
        {itemPrice}
      </div>

      {/* share this link to users device contact */}
      <ShareButton 
        title={itemTitle}
        text={`Check out this ${itemTitle} by Sore High!`}
        url={currentUrl}
      />

      {/* convinient copy and paste the name  */}
      <CopyLinkButton
        url={currentUrl}
      />

      {/* "interested? click here to preorder now!" that links to Aziz whatsapp chat */}

    </div>
  )
}
