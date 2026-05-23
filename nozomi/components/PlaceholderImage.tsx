import React from 'react';
import { cn } from '@/lib/utils';
import { Image as ImageIcon } from 'lucide-react';

interface PlaceholderImageProps {
  className?: string;
  text?: string;
}

const PlaceholderImage = ({ className, text = "Placeholder Image" }: PlaceholderImageProps) => {
  return (
    <div className={cn("w-full h-full bg-pink-50/50 flex flex-col items-center justify-center text-pink-300 border-2 border-dashed border-pink-200 rounded-3xl", className)}>
      <ImageIcon className="w-10 h-10 mb-2 opacity-50" />
      <span className="font-semibold tracking-wide text-sm opacity-80 uppercase">{text}</span>
    </div>
  );
};

export default PlaceholderImage;
