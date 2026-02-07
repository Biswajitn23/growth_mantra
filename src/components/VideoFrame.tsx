import { useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface VideoFrameProps {
  src: string;
  poster?: string;
  className?: string;
  overlay?: ReactNode;
  children?: ReactNode;
}

export default function VideoFrame({ src, poster, className, overlay, children }: VideoFrameProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isActivated, setIsActivated] = useState(false);

  const handleActivate = () => {
    if (isActivated) {
      return;
    }

    setIsActivated(true);
    requestAnimationFrame(() => {
      videoRef.current?.play().catch(() => {});
    });
  };

  useEffect(() => {
    const handlePauseOthers = (event: Event) => {
      const customEvent = event as CustomEvent<{ source?: HTMLVideoElement | null }>;
      if (customEvent.detail?.source && customEvent.detail.source === videoRef.current) {
        return;
      }
      videoRef.current?.pause();
    };

    window.addEventListener('gm:video-play', handlePauseOthers);
    return () => window.removeEventListener('gm:video-play', handlePauseOthers);
  }, []);

  return (
    <div className={cn('relative overflow-hidden', className)}>
      <video
        ref={videoRef}
        className={cn(
          'h-full w-full object-cover transition duration-300',
          !isActivated && 'blur-[2px]'
        )}
        controls
        playsInline
        preload="none"
        src={isActivated ? src : undefined}
        poster={poster}
        onPlay={() => {
          window.dispatchEvent(
            new CustomEvent('gm:video-play', {
              detail: { source: videoRef.current },
            })
          );
        }}
      />
      {children && (
        <div className="pointer-events-none" aria-hidden="true">
          {children}
        </div>
      )}
      {overlay && !isActivated && (
        <button
          type="button"
          onClick={handleActivate}
          className="absolute inset-0 z-10 flex items-center justify-center text-center bg-black/35 backdrop-blur-[2px] transition-colors hover:bg-black/45"
          aria-label="Play video"
        >
          {overlay}
        </button>
      )}
    </div>
  );
}
