import type { CSSProperties } from 'react';

interface BubbleParticlesProps {
  className?: string;
  count?: number;
  style?: CSSProperties;
}

type BubbleStyle = CSSProperties & {
  '--bubble-size': string;
  '--bubble-duration': string;
  '--bubble-delay': string;
  '--bubble-drift': string;
  '--bubble-rise': string;
  '--bubble-opacity': string;
};

export default function BubbleParticles({
  className = '',
  count = 32,
  style,
}: BubbleParticlesProps) {
  const bubbleCount = Math.min(Math.max(count, 0), 48);

  return (
    <div
      className={`bubble-particles absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      style={style}
      aria-hidden="true"
    >
      {Array.from({ length: bubbleCount }, (_, index) => {
        const style: BubbleStyle = {
          left: `${(index * 53 + 7) % 100}%`,
          top: `${(index * 37 + 11) % 100}%`,
          '--bubble-size': `${10 + ((index * 17) % 30)}px`,
          '--bubble-duration': `${7 + ((index * 13) % 9)}s`,
          '--bubble-delay': `${-((index * 19) % 14)}s`,
          '--bubble-drift': `${-40 + ((index * 29) % 81)}px`,
          '--bubble-rise': `${160 + ((index * 31) % 260)}px`,
          '--bubble-opacity': `${0.2 + (index % 4) * 0.07}`,
        };

        return <span key={index} className="bubble-particle" style={style} />;
      })}
    </div>
  );
}
