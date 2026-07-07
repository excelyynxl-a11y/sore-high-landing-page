"use client";
import { ArrowDown, ArrowUp } from 'lucide-react';
import React, { useState } from 'react';

type FAQCardProps = {
    itemId: number;
    itemQuestion: string;
    itemAnswer: string;
};

export default function FAQCard({
    itemQuestion,
    itemAnswer,
}: FAQCardProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="border rounded-xl p-5 sm:p-6 bg-white transition-shadow duration-300 hover:shadow-lg">
            <button
                onClick={() => setIsExpanded((prev) => !prev)}
                className="flex w-full items-center justify-between gap-4 text-left"
            >
                <span className="font-bold text-lg sm:text-xl">
                    {itemQuestion}
                </span>
                {isExpanded ? (
                    <ArrowUp className="shrink-0" size={24} />
                ) : (
                    <ArrowDown className="shrink-0" size={24} />
                )}
            </button>

            <div
                className={`
                    grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
                    ${isExpanded ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'}
                `}
            >
                <div className="overflow-hidden">
                    <div className="text-base sm:text-lg font-normal max-w-3xl">
                        {itemAnswer}
                    </div>
                </div>
            </div>
        </div>
    );
}
