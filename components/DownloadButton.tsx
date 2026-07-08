"use client";
import { Download } from 'lucide-react';
import React, { useState } from 'react';

interface DownloadButtonProps {
  url?: string;
  filename?: string;
}

export default function DownloadButton({
  url,
  filename,
}: DownloadButtonProps) {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const handleDownload = async (): Promise<void> => {
        const linkToDownload = url || window.location.href;

        try {
            const response = await fetch(linkToDownload);
            const blob = await response.blob();
            const blobUrl = window.URL.createObjectURL(blob);

            const anchor = document.createElement('a');
            anchor.href = blobUrl;
            anchor.download = filename || 'download.png';
            document.body.appendChild(anchor);
            anchor.click();
            document.body.removeChild(anchor);

            window.URL.revokeObjectURL(blobUrl);

            setIsClicked(true);
            setTimeout(() => setIsClicked(false), 2000);
        } catch (error) {
            console.error('Failed to download file:', error);
        }
  };

  return (
    <button
      onClick={handleDownload}
      className="inline-flex items-center gap-2 px-4 py-2 border border-neutral-300 text-sm font-medium uppercase tracking-widest text-neutral-700 hover:bg-neutral-100 hover:border-neutral-400 transition-colors"
    >
      <Download size={14} />
      {isClicked ? 'Downloaded!' : 'Download'}
    </button>
  );
}
