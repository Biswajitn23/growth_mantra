import React from 'react';

export default function GrowVantaMarquee() {
  return (
    <div className="overflow-hidden py-8 border-y border-gray-200">
      <div className="flex whitespace-nowrap animate-infinite-scroll">
        {Array.from({ length: 20 }).map((_, idx) => (
          <span
            key={idx}
            className="font-heading text-2xl md:text-4xl text-black mx-8 inline-block"
          >
            GrowVanta Media
          </span>
        ))}
      </div>
    </div>
  );
}
