interface HeroCloudsProps {
  /** Kelas CSS tambahan untuk kontainer */
  className?: string;
}

/**
 * Awan tipis yang mengapung di langit biru (paruh atas hero).
 * Tiga lapisan awan sirus bergerak mengikuti arah drift gelombang air di
 * bawahnya: lapisan belakang dan depan ke kiri (wave-drift), lapisan tengah
 * ke kanan (wave-drift-reverse) — persis seperti tiga lapisan gelombang —
 * hanya 6x lebih lambat agar langit terasa tenang. Setiap lapisan berisi
 * pola selebar 1440 unit yang digandakan ke 2880 (render 200%) sehingga
 * animasi translateX(-50%)-nya bergulir mulus tanpa jeda.
 */
export default function HeroClouds({ className = '' }: HeroCloudsProps) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none ${className}`}
      aria-hidden="true"
    >
      {/* Lapisan belakang: paling tinggi, paling samar, paling lambat (ke kiri) */}
      <svg className="hero-cloud hero-cloud-back" viewBox="0 0 2880 300" preserveAspectRatio="none">
        <defs>
          <radialGradient id="hero-cloud-soft-back" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.3" />
            <stop offset="55%" stopColor="#ffffff" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>
        </defs>
        <g id="hero-cloud-set-back" fill="url(#hero-cloud-soft-back)">
          <ellipse cx="170" cy="70" rx="240" ry="13" />
          <ellipse cx="90" cy="84" rx="130" ry="9" />
          <ellipse cx="300" cy="56" rx="110" ry="8" />
          <ellipse cx="620" cy="150" rx="300" ry="15" />
          <ellipse cx="520" cy="165" rx="150" ry="10" />
          <ellipse cx="760" cy="136" rx="140" ry="9" />
          <ellipse cx="1050" cy="60" rx="260" ry="12" />
          <ellipse cx="1150" cy="74" rx="130" ry="8" />
          <ellipse cx="1290" cy="205" rx="220" ry="12" />
          <ellipse cx="1200" cy="217" rx="120" ry="8" />
          <ellipse cx="880" cy="252" rx="150" ry="8" />
        </g>
        <use href="#hero-cloud-set-back" x="1440" />
      </svg>

      {/* Lapisan tengah: bergerak ke kanan, mengikuti gelombang tengah */}
      <svg className="hero-cloud hero-cloud-mid" viewBox="0 0 2880 220" preserveAspectRatio="none">
        <defs>
          <radialGradient id="hero-cloud-soft-mid" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.34" />
            <stop offset="55%" stopColor="#ffffff" stopOpacity="0.14" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>
        </defs>
        <g id="hero-cloud-set-mid" fill="url(#hero-cloud-soft-mid)">
          <ellipse cx="350" cy="60" rx="220" ry="12" />
          <ellipse cx="270" cy="72" rx="120" ry="8" />
          <ellipse cx="450" cy="50" rx="100" ry="7" />
          <ellipse cx="900" cy="130" rx="260" ry="13" />
          <ellipse cx="810" cy="142" rx="140" ry="9" />
          <ellipse cx="1010" cy="120" rx="120" ry="8" />
          <ellipse cx="1300" cy="40" rx="200" ry="10" />
          <ellipse cx="1230" cy="52" rx="110" ry="7" />
          <ellipse cx="600" cy="190" rx="170" ry="9" />
        </g>
        <use href="#hero-cloud-set-mid" x="1440" />
      </svg>

      {/* Lapisan depan: paling rendah, paling terlihat, tercepat (ke kiri) */}
      <svg className="hero-cloud hero-cloud-front" viewBox="0 0 2880 170" preserveAspectRatio="none">
        <defs>
          <radialGradient id="hero-cloud-soft-front" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.42" />
            <stop offset="55%" stopColor="#ffffff" stopOpacity="0.17" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>
        </defs>
        <g id="hero-cloud-set-front" fill="url(#hero-cloud-soft-front)">
          <ellipse cx="200" cy="90" rx="240" ry="11" />
          <ellipse cx="120" cy="101" rx="130" ry="8" />
          <ellipse cx="320" cy="79" rx="110" ry="7" />
          <ellipse cx="750" cy="40" rx="210" ry="10" />
          <ellipse cx="660" cy="51" rx="110" ry="7" />
          <ellipse cx="1150" cy="120" rx="250" ry="12" />
          <ellipse cx="1050" cy="132" rx="130" ry="8" />
          <ellipse cx="1270" cy="108" rx="120" ry="8" />
        </g>
        <use href="#hero-cloud-set-front" x="1440" />
      </svg>
    </div>
  );
}
