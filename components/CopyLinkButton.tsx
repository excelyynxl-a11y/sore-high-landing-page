"use client";
import { Copy } from 'lucide-react';
import React, { useState } from 'react';

interface CopyLinkButtonProps {
  url?: string; 
}

export default function CopyLinkButton({ 
  url 
}: CopyLinkButtonProps) {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const handleCopy = async (): Promise<void> => {
    // Fallback to current browser URL if no explicit URL is passed
    const linkToCopy = url || window.location.href;

    try {
      // Use the modern Clipboard API
      await navigator.clipboard.writeText(linkToCopy);
      setIsCopied(true);

      // Revert the button text back to original after 2 seconds
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    } catch (error) {
      console.error('Failed to copy link: ', error);
    }
  };

  return (
    <button 
      onClick={handleCopy}
      className="inline-flex items-center gap-2 px-4 py-2 border border-neutral-300 text-sm font-medium uppercase tracking-widest text-neutral-700 hover:bg-neutral-100 hover:border-neutral-400 transition-colors"
    >
        <Copy size={14} /> 
        {isCopied ? 'Copied!' : 'Copy Link'}
    </button>
  );
};
