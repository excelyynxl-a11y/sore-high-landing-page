"use client";
import { Share } from 'lucide-react';
import React, { useState } from 'react';

// Define strict TypeScript types for the component props
interface ShareButtonProps {
  title: string;
  text: string;
  url: string;
}

export default function ShareButton({ 
  title,
  text,
  url,
}: ShareButtonProps) {
  const [copied, setCopied] = useState<boolean>(false);

  const handleShare = async (): Promise<void> => {
    // Check if the browser supports the native Web Share API
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          text: text,
          url: url,
        });
        console.log('Content shared successfully!');
      } catch (error) {
        // Handle user cancellation or errors
        if ((error as Error).name !== 'AbortError') {
          console.error('Error sharing:', error);
        }
      }
    } else {
      // Fallback: Copy link to clipboard if Web Share API is missing
      try {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        // Reset the "Copied!" status after 2 seconds
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error('Failed to copy link: ', err);
      }
    }
  };

  return (
    <button
      onClick={handleShare}
      className="inline-flex items-center gap-2 px-4 py-2 border border-neutral-300 text-sm font-medium uppercase tracking-widest text-neutral-700 hover:bg-neutral-100 hover:border-neutral-400 transition-colors"
    >
        <Share size={14} />
        {copied ? 'Copied!' : 'Share'}
    </button>
  );
};
