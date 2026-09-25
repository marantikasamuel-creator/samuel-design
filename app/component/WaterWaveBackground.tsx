interface WaterWaveBackgroundProps {
  /** Additional CSS classes for the container */
  className?: string;
}

/**
 * Animated white water waves for the hero section.
 * Rendered inside the lower half of the hero: fills its container with
 * solid white and stacks three seamless SVG crests that drift horizontally
 * above the waterline for a layered, moving-water effect.
 */
export default function WaterWaveBackground({ className = '' }: WaterWaveBackgroundProps) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none ${className}`}
      aria-hidden="true"
    >
      {/* Solid white water body (covers the lower 50% of the hero) */}
      <div className="absolute inset-0 bg-white" />

      {/* Animated crests rising above the waterline (back to front) */}
      <svg className="wave-crest wave-crest-back" viewBox="0 0 2880 120" preserveAspectRatio="none">
        <path
          d="M0,60 C240,105 480,15 720,60 C960,105 1200,15 1440,60 C1680,105 1920,15 2160,60 C2400,105 2640,15 2880,60 L2880,120 L0,120 Z"
          fill="rgba(255,255,255,0.35)"
        />
      </svg>
      <svg className="wave-crest wave-crest-mid" viewBox="0 0 2880 120" preserveAspectRatio="none">
        <path
          d="M0,60 C240,95 480,25 720,60 C960,95 1200,25 1440,60 C1680,95 1920,25 2160,60 C2400,95 2640,25 2880,60 L2880,120 L0,120 Z"
          fill="rgba(255,255,255,0.55)"
        />
      </svg>
      <svg className="wave-crest wave-crest-front" viewBox="0 0 2880 120" preserveAspectRatio="none">
        <path
          d="M0,60 C240,82 480,38 720,60 C960,82 1200,38 1440,60 C1680,82 1920,38 2160,60 C2400,82 2640,38 2880,60 L2880,120 L0,120 Z"
          fill="#ffffff"
        />
      </svg>
    </div>
  );
}
