"use client";
import { workedWithParties } from '@/data/data';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import React from 'react'

export default function WorkedWith() {
  return (
    <section className="py-20 mb-[70vh]">
      <div> 
        <p className="text-xl font-medium text-center uppercase mb-9">
          Worked with some of the best sore highs out there
        </p>

        {/* logo wrapper */}
        <div className="">
          <Marquee autoFill={true}>
            {workedWithParties.map((party) => (
              <div 
                className="px-9 lg:px-16" 
                key={party.id}
              >
                <Image 
                  src={party.img}
                  alt={party.label}
                  width={140}
                  height={39}
                  className="w-full h-auto"
                />
              </div>
            ))} 
          </Marquee>
        </div>
      </div>
    </section>
  )
}
