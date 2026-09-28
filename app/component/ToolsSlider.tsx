'use client';
import Image from 'next/image';
import figma from '../icon/tool icon/figma-color.svg';
import canva from '../icon/tool icon/canva-seeklogoo.svg';
import photoshop from '../icon/tool icon/ps_appicon.svg';
import affinity from '../icon/tool icon/Affinity_(App)_Logo.svg';
import capcut from '../icon/tool icon/capcut-seeklogo-2.svg';

const TOOLS = [
  { name: 'Figma', src: figma },
  { name: 'Canva', src: canva },
  { name: 'Photoshop', src: photoshop },
  { name: 'Affinity', src: affinity },
  { name: 'CapCut', src: capcut },
];

// Duplikasi lebih banyak agar terlihat penuh dan seamless
const REPEATED_TOOLS = [...TOOLS, ...TOOLS, ...TOOLS, ...TOOLS];

export default function ToolsSlider() {
  return (
    <section className="relative z-30 py-8 w-full">
      {/* Title */}
      <div className="text-center mb-8 px-6">
        <p className="text-xs font-bold tracking-widest text-[#0b5ed7]/50 uppercase">Tools yang Saya Gunakan</p>
      </div>

      {/* Slider wrapper — overflow hidden hanya di sini */}
      <div className="relative w-full overflow-hidden">
        {/* Gradient mask kiri */}
        <div
          className="pointer-events-none absolute left-0 top-0 h-full w-20 md:w-32 z-10"
          style={{ background: 'linear-gradient(to right, white 0%, transparent 100%)' }}
        />
        {/* Gradient mask kanan */}
        <div
          className="pointer-events-none absolute right-0 top-0 h-full w-20 md:w-32 z-10"
          style={{ background: 'linear-gradient(to left, white 0%, transparent 100%)' }}
        />

        {/* Track scroll */}
        <div className="flex w-max animate-infinite-scroll hover:[animation-play-state:paused] py-4">
          {REPEATED_TOOLS.map((tool, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-3 mx-8 md:mx-12 grayscale hover:grayscale-0 opacity-50 hover:opacity-100 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center p-3 rounded-2xl bg-white shadow-md border border-[#0b5ed7]/10 hover:shadow-lg hover:border-[#0b5ed7]/30 transition-all duration-300">
                <Image
                  src={tool.src}
                  alt={tool.name}
                  width={56}
                  height={56}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-[10px] md:text-xs font-bold text-[#0b5ed7] uppercase tracking-widest whitespace-nowrap">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
