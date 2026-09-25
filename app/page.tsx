'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import WaterWaveBackground from './component/WaterWaveBackground';
import BubbleParticles from './component/BubbleParticles';
import HeroClouds from './component/HeroClouds';
type IconProps = React.SVGProps<SVGSVGElement> & { size?: number };

const createIcon = (symbol: string) => ({ size = 24, ...props }: IconProps) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <text x="12" y="16" textAnchor="middle" fontSize="12" fill="currentColor" stroke="none">{symbol}</text>
  </svg>
);

const X = ({ size = 24, className = '', ...props }: IconProps & { className?: string }) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="19" y1="19" x2="5" y2="5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    <line x1="19" y1="5" x2="5" y2="19" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
  </svg>
);
const ArrowUpRight = ({ size = 24, className = '', ...props }: IconProps & { className?: string }) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const Linkedin = ({ size = 24, className = '', ...props }: IconProps & { className?: string }) => (
  <svg {...props} width={size} height={size} viewBox="0 0 20 20" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M144,7339 L140,7339 L140,7332.001 C140,7330.081 139.153,7329.01 137.634,7329.01 C135.981,7329.01 135,7330.126 135,7332.001 L135,7339 L131,7339 L131,7326 L135,7326 L135,7327.462 C135,7327.462 136.255,7325.26 139.083,7325.26 C141.912,7325.26 144,7326.986 144,7330.558 L144,7339 L144,7339 Z M126.442,7323.921 C125.093,7323.921 124,7322.819 124,7321.46 C124,7320.102 125.093,7319 126.442,7319 C127.79,7319 128.883,7320.102 128.883,7321.46 C128.884,7322.819 127.79,7323.921 126.442,7323.921 L126.442,7323.921 Z M124,7339 L129,7339 L129,7326 L124,7326 L124,7339 Z" transform="translate(-124.000000, -7319.000000)" />
  </svg>
);
const CheckCircle2 = createIcon('✓');
const Menu = createIcon('☰');
const Sparkles = ({ size = 24, className = '', ...props }: IconProps & { className?: string }) => (
  <svg {...props} width={size} height={size} viewBox="0 0 512 512" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M247.355,106.9C222.705,82.241,205.833,39.18,197.46,0c-8.386,39.188-25.24,82.258-49.899,106.917 c-24.65,24.642-67.724,41.514-106.896,49.904c39.188,8.373,82.254,25.235,106.904,49.895c24.65,24.65,41.522,67.72,49.908,106.9 c8.373-39.188,25.24-82.258,49.886-106.917c24.65-24.65,67.724-41.514,106.896-49.904 C315.08,148.422,272.014,131.551,247.355,106.9z" />
    <path d="M407.471,304.339c-14.714-14.721-24.81-40.46-29.812-63.864c-5.011,23.404-15.073,49.142-29.803,63.872 c-14.73,14.714-40.464,24.801-63.864,29.812c23.408,5.01,49.134,15.081,63.864,29.811c14.73,14.722,24.81,40.46,29.82,63.864 c5.001-23.413,15.081-49.142,29.802-63.872c14.722-14.722,40.46-24.802,63.856-29.82 C447.939,329.14,422.201,319.061,407.471,304.339z" />
    <path d="M146.352,354.702c-4.207,19.648-12.655,41.263-25.019,53.626c-12.362,12.354-33.968,20.82-53.613,25.027 c19.645,4.216,41.251,12.656,53.613,25.027c12.364,12.362,20.829,33.96,25.036,53.618c4.203-19.658,12.655-41.255,25.023-53.626 c12.354-12.362,33.964-20.82,53.605-25.035c-19.64-4.2-41.251-12.656-53.613-25.019 C159.024,395.966,150.555,374.351,146.352,354.702z" />
  </svg>
);
const Layers = ({ size = 24, className = '', ...props }: IconProps & { className?: string }) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 18L20 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M4 12L20 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M4 6L20 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const Mail = ({ size = 24, className = '', ...props }: IconProps & { className?: string }) => (
  <svg {...props} width={size} height={size} viewBox="0 -4 32 32" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M442,279 C442,279.203 441.961,279.395 441.905,279.578 L433,270 L442,263 L442,279 L442,279 Z M415.556,280.946 L424.58,271.33 L428,273.915 L431.272,271.314 L440.444,280.946 C440.301,280.979 415.699,280.979 415.556,280.946 L415.556,280.946 Z M414,279 L414,263 L423,270 L414.095,279.578 C414.039,279.395 414,279.203 414,279 L414,279 Z M441,261 L428,271 L415,261 L441,261 L441,261 Z M440,259 L416,259 C413.791,259 412,260.791 412,263 L412,279 C412,281.209 413.791,283 416,283 L440,283 C442.209,283 444,281.209 444,279 L444,263 C444,260.791 442.209,259 440,259 L440,259 Z" transform="translate(-412.000000, -259.000000)" />
  </svg>
);

const WhatsApp = ({ size = 24, className = '', ...props }: IconProps & { className?: string }) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M3.50002 12C3.50002 7.30558 7.3056 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C10.3278 20.5 8.77127 20.0182 7.45798 19.1861C7.21357 19.0313 6.91408 18.9899 6.63684 19.0726L3.75769 19.9319L4.84173 17.3953C4.96986 17.0955 4.94379 16.7521 4.77187 16.4751C3.9657 15.176 3.50002 13.6439 3.50002 12ZM12 1.5C6.20103 1.5 1.50002 6.20101 1.50002 12C1.50002 13.8381 1.97316 15.5683 2.80465 17.0727L1.08047 21.107C0.928048 21.4637 0.99561 21.8763 1.25382 22.1657C1.51203 22.4552 1.91432 22.5692 2.28599 22.4582L6.78541 21.1155C8.32245 21.9965 10.1037 22.5 12 22.5C17.799 22.5 22.5 17.799 22.5 12C22.5 6.20101 17.799 1.5 12 1.5ZM14.2925 14.1824L12.9783 15.1081C12.3628 14.7575 11.6823 14.2681 10.9997 13.5855C10.2901 12.8759 9.76402 12.1433 9.37612 11.4713L10.2113 10.7624C10.5697 10.4582 10.6678 9.94533 10.447 9.53028L9.38284 7.53028C9.23954 7.26097 8.98116 7.0718 8.68115 7.01654C8.38113 6.96129 8.07231 7.046 7.84247 7.24659L7.52696 7.52195C6.76823 8.18414 6.3195 9.2723 6.69141 10.3741C7.07698 11.5163 7.89983 13.314 9.58552 14.9997C11.3991 16.8133 13.2413 17.5275 14.3186 17.8049C15.1866 18.0283 16.008 17.7288 16.5868 17.2572L17.1783 16.7752C17.4313 16.5691 17.5678 16.2524 17.544 15.9269C17.5201 15.6014 17.3389 15.308 17.0585 15.1409L15.3802 14.1409C15.0412 13.939 14.6152 13.9552 14.2925 14.1824Z" />
  </svg>
);

const Copy = ({ size = 24, className = '', ...props }: IconProps & { className?: string }) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M21 8C21 6.34315 19.6569 5 18 5H10C8.34315 5 7 6.34315 7 8V20C7 21.6569 8.34315 23 10 23H18C19.6569 23 21 21.6569 21 20V8ZM19 8C19 7.44772 18.5523 7 18 7H10C9.44772 7 9 7.44772 9 8V20C9 20.5523 9.44772 21 10 21H18C18.5523 21 19 20.5523 19 20V8Z" />
    <path d="M6 3H16C16.5523 3 17 2.55228 17 2C17 1.44772 16.5523 1 16 1H6C4.34315 1 3 2.34315 3 4V18C3 18.5523 3.44772 19 4 19C4.55228 19 5 18.5523 5 18V4C5 3.44772 5.44772 3 6 3Z" />
  </svg>
);

const Github = ({ size = 24, className = '', ...props }: IconProps & { className?: string }) => (
  <svg {...props} width={size} height={size} viewBox="0 0 64 64" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M32 0 C14 0 0 14 0 32 0 53 19 62 22 62 24 62 24 61 24 60 L24 55 C17 57 14 53 13 50 13 50 13 49 11 47 10 46 6 44 10 44 13 44 15 48 15 48 18 52 22 51 24 50 24 48 26 46 26 46 18 45 12 42 12 31 12 27 13 24 15 22 15 22 13 18 15 13 15 13 20 13 24 17 27 15 37 15 40 17 44 13 49 13 49 13 51 20 49 22 49 22 51 24 52 27 52 31 52 42 45 45 38 46 39 47 40 49 40 52 L40 60 C40 61 40 62 42 62 45 62 64 53 64 32 64 14 50 0 32 0 Z" />
  </svg>
);

const Instagram = ({ size = 24, className = '', ...props }: IconProps & { className?: string }) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" />
    <path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" />
    <path fillRule="evenodd" clipRule="evenodd" d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z" />
  </svg>
);

const Palette = ({ size = 24, className = '', ...props }: IconProps & { className?: string }) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
    <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
    <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
    <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
  </svg>
);

const Globe = ({ size = 24, className = '', ...props }: IconProps & { className?: string }) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const Camera = ({ size = 24, className = '', ...props }: IconProps & { className?: string }) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
    <circle cx="12" cy="13" r="3" />
  </svg>
);

const Video = ({ size = 24, className = '', ...props }: IconProps & { className?: string }) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M23 7l-7 5 7 5V7z" />
    <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
  </svg>
);

// --- Types ---
type Category = 'All' | 'UI/UX' | 'Iklan' | 'Film' | 'Photography' | 'Banner';

interface Project {
  id: string;
  title: string;
  category: Category;
  thumbnail: string;
  shortDesc: string;
  fullDesc: string;
  client: string;
  year: string;
  tools: string[];
  images: string[];
}

// --- Sample Data ---
const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'AIESEC MIX & Carrer Panel',
    category: 'Banner',
    thumbnail: '/bannner aiesec (1) (1).jpg',
    shortDesc: 'Banner Untuk Acara AIESEC MIX & Carrer Panel.',
    fullDesc: 'AIESEC membutuhkan sebuah banner untuk acara MIX & Carrer Panel dengan menampilkan elemen kebudayaan. Saya membuat banner tersebut dengan menggunakan Figma, Canva, dan Photoshop.',
    client: 'AIESEC',
    year: '2026',
    tools: ['Figma', 'Canva', 'Photoshop'],
    images: [
      '/bannner aiesec (1) (1).jpg'
    ]
  },
  {
    id: '2',
    title: 'Anugerah Laundry',
    category: 'Banner',
    thumbnail: '/unnamed.jpg',
    shortDesc: 'Banner Untuk Usaha Laundry bernama Anugrah Laundry.',
    fullDesc: 'Anugerah Laundry membutuhkan sebuah banner untuk usaha laundry tersebut.',
    client: 'Anugerah Laundry',
    year: '2025',
    tools: ['Figma', 'Canva', 'Photoshop'],
    images: [
      '/unnamed.jpg'
    ]
  },
  {
    id: '3',
    title: 'Sayur Box',
    category: 'UI/UX',
    thumbnail: '/iPhone 18 Pro (1).png',
    shortDesc: 'Desain antarmuka aplikasi e-commerce mobile menjual sayur-mayur, buah-buahan dan daging.',
    fullDesc: 'Personal project, membuat sebuah aplikasi e-commerce mobile untuk menjual sayur-mayur, buah-buahan dan daging.',
    client: 'Personal Project',
    year: '2026',
    tools: ['Figma', 'Canva'],
    images: [
      '/Hand and iPhone 16 Pro.jpg'
    ]
  },
  {
    id: '4',
    title: 'Iklan Parfum Amthra',
    category: 'Iklan',
    thumbnail: '/brand-logo-1763456987376.jpg',
    shortDesc: 'Project iklan parfum Amthra.',
    fullDesc: 'Personal project iklan parfum Amthra sebagai syarat pemenuhan nilai mata kuliah Videography. Dibuat dengan CapCut',
    client: 'Personal Project',
    year: '2025',
    tools: ['CapCut'],
    images: [
      '/0920 (1)(1).mp4'
    ]
  },
  {
    id: '5',
    title: 'Bukan Lomba Biasa',
    category: 'Film',
    thumbnail: '/thumbnail-6ryhgwGcbnk-640x480.jpg',
    shortDesc: 'Short movie Bukan "Lomba Biasa".',
    fullDesc: 'Personal project short movie Bukan "Lomba Biasa". Bergenre komedi dan action.',
    client: 'Verve Architecture',
    year: '2026',
    tools: ['Nikon Coolpix 500'],
    images: [
      '/0920(1).mp4'
    ]
  },
  {
    id: '6',
    title: 'Dokumentasi MPLS SMK KUSUMA BANGSA',
    category: 'Photography',
    thumbnail: '/IMG_9943.JPG',
    shortDesc: 'Dokumentasi  Masa Pengenalan Lingkungan Sekolah SMK KUSUMA BANGSA.',
    fullDesc: 'Personal project, dokumentasi Masa Pengenalan Lingkungan Sekolah SMK KUSUMA BANGSA.',
    client: 'Personal Project',
    year: '2024',
    tools: ['Canon 70D'],
    images: [
      '/IMG_1039.JPG',
      '/IMG_1023.JPG',
      '/IMG_9971.JPG'
    ]
  }
];

const SKILLS = [
  'Graphic Design', 'UI/UX Design', 'Video Editing',
  'Photography', 'Web Design', 'Front End Development',
  'Figma', 'Photoshop', 'Canva', 'Affinity Suite', 'CapCut'
];

const DECRYPT_CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*';

function DecryptedText({ text }: { text: string }) {
  const [displayText, setDisplayText] = useState(() => text.replace(/\S/g, '•'));

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let frame = 0;
    let intervalId: ReturnType<typeof setInterval> | undefined;
    const startTimeout = window.setTimeout(() => {
      if (prefersReducedMotion) {
        setDisplayText(text);
        return;
      }

      intervalId = setInterval(() => {
        const revealedCount = Math.floor(frame / 3);

        setDisplayText(
          Array.from(text, (character, index) => {
            if (character === ' ' || index < revealedCount) return character;
            return DECRYPT_CHARACTERS[Math.floor(Math.random() * DECRYPT_CHARACTERS.length)];
          }).join('')
        );

        frame += 1;
        if (revealedCount >= text.length) {
          if (intervalId) clearInterval(intervalId);
          setDisplayText(text);
        }
      }, 45);
    }, prefersReducedMotion ? 0 : 250);

    return () => {
      window.clearTimeout(startTimeout);
      if (intervalId) clearInterval(intervalId);
    };
  }, [text]);

  return (
    <motion.span
      initial={{ opacity: 0.35, filter: 'blur(3px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      transition={{ duration: 1.1, ease: 'easeOut' }}
      className="relative inline-block"
      aria-label={text}
    >
      <span className="invisible" aria-hidden="true">{text}</span>
      <span className="absolute inset-0 whitespace-nowrap" aria-hidden="true">{displayText}</span>
    </motion.span>
  );
}

function ClickSparks() {
  const [sparks, setSparks] = useState<{ id: number; x: number; y: number }[]>([]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const newSpark = { id: Date.now(), x: e.clientX, y: e.clientY };
      setSparks((prev) => [...prev, newSpark]);

      setTimeout(() => {
        setSparks((prev) => prev.filter((s) => s.id !== newSpark.id));
      }, 700);
    };

    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[99999] overflow-hidden">
      {sparks.map((spark) => (
        <SparkExplosion key={spark.id} x={spark.x} y={spark.y} />
      ))}
    </div>
  );
}

function SparkExplosion({ x, y }: { x: number; y: number }) {
  const numSparks = 8;
  const colors = ['#0b5ed7', '#63b3ff', '#2f86eb', '#ffffff'];

  return (
    <div style={{ left: x, top: y }} className="absolute">
      {Array.from({ length: numSparks }).map((_, i) => {
        const angle = (i * 360) / numSparks + (Math.random() * 20 - 10);
        const distance = 30 + Math.random() * 50;
        const radian = (angle * Math.PI) / 180;
        const targetX = Math.cos(radian) * distance;
        const targetY = Math.sin(radian) * distance;
        const color = colors[Math.floor(Math.random() * colors.length)];

        return (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              backgroundColor: color,
              boxShadow: `0 0 10px 1px ${color}`,
              width: 5 + Math.random() * 3,
              height: 5 + Math.random() * 3,
              marginLeft: -3,
              marginTop: -3,
            }}
            initial={{ opacity: 1, x: 0, y: 0, scale: 1 }}
            animate={{
              opacity: 0,
              x: targetX,
              y: targetY,
              scale: 0
            }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          />
        );
      })}
    </div>
  );
}

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const sections = ['services', 'work', 'about', 'contact'];
    const observers: IntersectionObserver[] = [];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.25, rootMargin: '-80px 0px -40% 0px' }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const navLinks = [
    { href: '#services', label: 'Layanan', id: 'services' },
    { href: '#work', label: 'Karya', id: 'work' },
    { href: '#about', label: 'Tentang Saya', id: 'about' },
    { href: '#contact', label: 'Kontak', id: 'contact' },
  ];

  const navIndicator = hoveredNav ?? activeSection;

  const categories: Category[] = ['All', 'UI/UX', 'Iklan', 'Film', 'Photography', 'Banner'];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-[#0b5ed7] font-sans selection:bg-[#0b5ed7] selection:text-white">
      <ClickSparks />

      {/* --- NAVBAR --- */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-white border-b border-[#0b5ed7]/15 transition-colors">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="text-2xl font-black tracking-tighter hover:opacity-80 transition-opacity">
            SAMUEL<span className="text-[#63b3ff]">.</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 font-medium text-sm">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onMouseEnter={() => setHoveredNav(link.id)}
                onMouseLeave={() => setHoveredNav(null)}
                className={`relative py-1 transition-colors ${navIndicator === link.id ? 'text-[#0b5ed7]' : 'text-[#0b5ed7]/60 hover:text-[#0b5ed7]'}`}
              >
                {link.label}
                {navIndicator === link.id && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#0b5ed7] rounded-full"
                    transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                  />
                )}
              </a>
            ))}


          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-3">

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#0b5ed7]"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Nav Links */}
        {mobileMenuOpen && (
          <div className="relative z-10 md:hidden border-b border-[#0b5ed7]/15 px-6 py-4 space-y-3 bg-white">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-1 font-medium transition-colors ${activeSection === link.id ? 'text-[#0b5ed7]' : 'text-[#0b5ed7]/60 hover:text-[#0b5ed7]'}`}
              >
                {link.label}
                {activeSection === link.id && (
                  <span className="block h-0.5 w-6 bg-[#0b5ed7] rounded-full mt-0.5" />
                )}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* --- BLUE HALF OF HERO --- */}
      <section className="hero-light relative z-10 h-[50vh] min-h-[400px] overflow-hidden bg-gradient-to-b from-[#0b5ed7] via-[#2f86eb] to-[#63b3ff]">
        {/* Awan tipis yang bergerak searah gelombang air di bawahnya */}
        <HeroClouds />
        <div className="relative z-10 h-full flex flex-col justify-end px-6 pt-28 md:pt-36 pb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-7xl mx-auto w-full"
          >
            <span className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold tracking-wider uppercase text-white/90 mb-6 border border-white/40 bg-white/10 rounded-full px-4 py-1.5 backdrop-blur-sm">
              <Sparkles size={60} className="text-white w-5 h-5 md:w-6 md:h-6" /> Graphic Designer · Video Editor · Photographer
            </span>

            <h1 className="text-5xl md:text-8xl font-black tracking-tight leading-[1.05] text-white">
              <DecryptedText text="Be better" />
              {' '}<br className="hidden md:block" />
              <span className="animated-gradient-text-light">
                Be creative.
              </span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* One uninterrupted white area and bubble field from hero to footer */}
      <div className="relative bg-white">
        <BubbleParticles count={48} style={{ zIndex: 20 }} />

        {/* --- WHITE HALF OF HERO --- */}
        <section className="hero-light relative z-10 h-[50vh] min-h-[400px] flex flex-col justify-start px-6 pt-14 pb-16 md:pb-20">
          <WaterWaveBackground />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative z-30 max-w-7xl mx-auto w-full"
          >
            <p className="text-lg md:text-2xl text-[#0b5ed7]/80 max-w-2xl font-light leading-relaxed mb-10">
              Halo, saya <span className="font-semibold text-[#0b5ed7]">Samuel Arga Sefta Marantika</span>. Mahasiswa Kajian Film semester 3 yang juga aktif sebagai freelancer di bidang desain grafis, video editing, dan fotografi—mengerjakan proyek untuk acara, bisnis, organisasi, hingga film pendek.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#work"
                className="btn-fill-center px-8 py-4 font-semibold rounded-full flex items-center gap-2 group shadow-lg"
              >
                Lihat Portofolio
                <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a
                href="#contact"
                className="btn-fill-center px-8 py-4 font-semibold rounded-full"
              >
                Diskusi Proyek
              </a>
            </div>
          </motion.div>
        </section>

        {/* --- SERVICES SECTION --- */}
        <section id="services" className="relative z-30 py-24 px-6 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-center mb-16"
          >
            <p className="text-3xl md:text-5xl font-black tracking-tight">My Service</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: Graphic Design */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group flex flex-col items-center text-center p-8 rounded-2xl bg-white border border-[#0b5ed7]/10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="mb-6 text-[#0b5ed7]">
                <Palette size={48} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold mb-4">Graphic Design</h3>
              <p className="text-sm text-[#0b5ed7]/70 mb-8 leading-relaxed">
                Desain visual yang menarik untuk kebutuhan branding, promosi, dan media sosial Anda.
              </p>
              <a href="#contact" className="text-sm font-medium text-[#0b5ed7] flex items-center gap-1 group-hover:gap-2 transition-all mt-auto">
                View details <ArrowUpRight size={16} />
              </a>
            </motion.div>

            {/* Card 2: Web Design */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group flex flex-col items-center text-center p-8 rounded-2xl bg-white border border-[#0b5ed7]/10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="mb-6 text-[#0b5ed7]">
                <Globe size={48} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold mb-4">Web Design</h3>
              <p className="text-sm text-[#0b5ed7]/70 mb-8 leading-relaxed">
                Menciptakan antarmuka website yang estetis, responsif, dan mudah digunakan.
              </p>
              <a href="#contact" className="text-sm font-medium text-[#0b5ed7] flex items-center gap-1 group-hover:gap-2 transition-all mt-auto">
                View details <ArrowUpRight size={16} />
              </a>
            </motion.div>

            {/* Card 3: Photography */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="group flex flex-col items-center text-center p-8 rounded-2xl bg-white border border-[#0b5ed7]/10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="mb-6 text-[#0b5ed7]">
                <Camera size={48} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold mb-4">Photography</h3>
              <p className="text-sm text-[#0b5ed7]/70 mb-8 leading-relaxed">
                Menangkap momen terbaik dengan kualitas visual yang tajam dan bercerita.
              </p>
              <a href="#contact" className="text-sm font-medium text-[#0b5ed7] flex items-center gap-1 group-hover:gap-2 transition-all mt-auto">
                View details <ArrowUpRight size={16} />
              </a>
            </motion.div>

            {/* Card 4: Video Editing */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="group flex flex-col items-center text-center p-8 rounded-2xl bg-white border border-[#0b5ed7]/10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="mb-6 text-[#0b5ed7]">
                <Video size={48} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold mb-4">Video Editing</h3>
              <p className="text-sm text-[#0b5ed7]/70 mb-8 leading-relaxed">
                Menyusun dan mengolah video menjadi cerita yang menarik dan profesional.
              </p>
              <a href="#contact" className="text-sm font-medium text-[#0b5ed7] flex items-center gap-1 group-hover:gap-2 transition-all mt-auto">
                View details <ArrowUpRight size={16} />
              </a>
            </motion.div>

          </div>
        </section>

        {/* --- PORTFOLIO GALLERY SECTION --- */}
        <section id="work" className="relative z-30 py-24 px-6 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
          >
            <div>
              <h2 className="text-xs uppercase font-bold tracking-widest text-[#0b5ed7] mb-2">Portofolio Pilihan</h2>
              <p className="text-3xl md:text-5xl font-black tracking-tight">Karya Terkini.</p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === category
                    ? 'bg-[#0b5ed7] text-white shadow-md'
                    : 'bg-[#0b5ed7]/10 text-[#0b5ed7]/70 hover:bg-[#0b5ed7]/20'
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Masonry / Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{
                    layout: { type: 'spring', stiffness: 300, damping: 30 },
                    opacity: { duration: 0.25, ease: 'easeInOut' },
                    scale: { duration: 0.25, ease: 'easeInOut' },
                  }}
                  key={project.id}
                  onClick={() => setActiveProject(project)}
                  className="group relative cursor-pointer rounded-2xl overflow-hidden bg-white border border-[#0b5ed7]/20 transition-[box-shadow] duration-500 ease-out hover:shadow-[0_0_35px_6px_rgba(11,94,215,0.25)]"
                >
                  {/* Lazy Loaded Image Container */}
                  <div className="aspect-[4/3] overflow-hidden bg-[#0b5ed7]/5">
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>

                  {/* Card Content Overlay / Bottom info */}
                  <div className="p-6 flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-semibold text-[#0b5ed7] uppercase tracking-wider">
                        {project.category}
                      </span>
                      <h3 className="text-xl font-bold mt-1 group-hover:text-[#2f86eb] transition-colors flex items-center justify-between">
                        {project.title}
                        <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-[#0b5ed7]" />
                      </h3>
                      <p className="text-sm text-[#0b5ed7]/70 mt-2 line-clamp-2">
                        {project.shortDesc}
                      </p>
                    </div>
                  </div>

                  {/* Kilau melintang (lihat .card-glare di globals.css): menyapu seluruh area card hanya saat card ini di-hover, lalu langsung reset tanpa sapuan balik saat kursor pergi */}
                  <span aria-hidden="true" className="card-glare" />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </section>

        {/* --- PROJECT DETAIL MODAL --- */}
        <AnimatePresence>
          {activeProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10 bg-black/70 backdrop-blur-md overflow-y-auto"
              onClick={() => setActiveProject(null)}
            >
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                onClick={(e: { stopPropagation: () => any; }) => e.stopPropagation()}
                className="bg-white border border-[#0b5ed7]/20 w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col my-auto"
              >
                {/* Modal Header */}
                <div className="p-6 md:p-8 border-b border-[#0b5ed7]/15 flex items-center justify-between sticky top-0 bg-white/90 backdrop-blur-md z-10">
                  <div>
                    <span className="text-xs font-bold text-[#0b5ed7] uppercase tracking-wider">{activeProject.category}</span>
                    <h3 className="text-2xl md:text-3xl font-extrabold">{activeProject.title}</h3>
                  </div>
                  <button
                    onClick={() => setActiveProject(null)}
                    className="p-3 rounded-full hover:bg-[#0b5ed7]/10 transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Modal Body */}
                <div className="p-6 md:p-8 overflow-y-auto space-y-8">
                  {/* Meta details */}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4 rounded-xl bg-[#0b5ed7]/5 border border-[#0b5ed7]/15 text-sm">
                    <div>
                      <p className="text-[#0b5ed7]/60 text-xs uppercase font-medium">Klien</p>
                      <p className="font-semibold mt-1">{activeProject.client}</p>
                    </div>
                    <div>
                      <p className="text-[#0b5ed7]/60 text-xs uppercase font-medium">Tahun</p>
                      <p className="font-semibold mt-1">{activeProject.year}</p>
                    </div>
                    <div className="col-span-2 md:col-span-1">
                      <p className="text-[#0b5ed7]/60 text-xs uppercase font-medium">Tools</p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {activeProject.tools.map(t => (
                          <span key={t} className="px-2 py-0.5 bg-[#0b5ed7]/10 text-[#0b5ed7] text-xs rounded-md font-medium">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <h4 className="text-lg font-bold mb-2">Tentang Proyek</h4>
                    <p className="text-[#0b5ed7]/80 leading-relaxed">
                      {activeProject.fullDesc}
                    </p>
                  </div>

                  {/* Images/Videos Showcase */}
                  <div className="space-y-6">
                    <h4 className="text-lg font-bold">Galeri Tampilan</h4>
                    {activeProject.images.map((media, idx) => {
                      const isVideo = media.endsWith('.mp4') || media.endsWith('.webm');
                      return isVideo ? (
                        <video
                          key={idx}
                          src={media}
                          controls
                          className="w-full rounded-2xl border border-[#0b5ed7]/20 shadow-sm"
                        />
                      ) : (
                        <img
                          key={idx}
                          src={media}
                          alt={`${activeProject.title} detail ${idx + 1}`}
                          loading="lazy"
                          className="w-full rounded-2xl object-cover border border-[#0b5ed7]/20 shadow-sm"
                        />
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* --- ABOUT SECTION --- */}
        <section id="about" className="relative z-30 py-24 px-6 border-y border-[#0b5ed7]/15">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Profile Photo Container */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden bg-[#0b5ed7]/10 max-w-md mx-auto shadow-2xl relative group transition-all duration-500 ease-out hover:scale-[1.03] hover:shadow-[0_0_35px_6px_rgba(11,94,215,0.25)]">
                <img
                  src="/samuel-profile.jpg"
                  alt="Samuel Profile"
                  loading="lazy"
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none flex flex-col justify-end p-6 md:p-8 text-white">
                  <p className="text-2xl md:text-3xl font-black leading-tight mb-1">Samuel Arga Sefta Marantika</p>
                  <p className="text-xs uppercase tracking-widest font-bold opacity-90">FREELANCER</p>
                </div>
              </div>

            </motion.div>

            {/* Bio & Skills */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="space-y-6"
            >
              <span className="text-xs uppercase font-bold tracking-widest text-[#0b5ed7]">Tentang Saya</span>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight">Kreativitas dari Layar hingga Lensa.</h2>

              <p className="text-[#0b5ed7]/80 leading-relaxed font-light">
                Saya adalah <strong>Samuel Arga Sefta Marantika</strong>, mahasiswa Kajian Film semester 3 yang baru menapaki dunia freelance sebagai desainer grafis, video editor, dan fotografer. Saya telah mengerjakan berbagai proyek—mulai dari kebutuhan acara, branding bisnis, kegiatan organisasi, hingga film pendek untuk penilaian akademik. Bagi saya, setiap karya adalah perpaduan antara narasi visual yang kuat dan eksekusi yang penuh dedikasi.
              </p>

              <div className="pt-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#0b5ed7]/70 mb-4 flex items-center gap-2">
                  <Layers size={16} className="text-[#0b5ed7]" /> Keahlian & Spesialisasi
                </h3>
                <div className="flex flex-wrap gap-2">
                  {SKILLS.map((skill, idx) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: idx * 0.05 }}
                      className="px-4 py-2 rounded-xl bg-white border border-[#0b5ed7]/25 text-[#0b5ed7] text-sm font-medium shadow-sm"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* --- CONTACT SECTION --- */}
        <section id="contact" className="relative z-30 py-24 px-6 max-w-4xl mx-auto flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="space-y-12 w-full"
          >
            <div className="space-y-6">
              <span className="inline-block px-5 py-2 rounded-full bg-[#0b5ed7]/10 text-sm font-semibold text-[#0b5ed7]">
                Get in touch
              </span>
              <p className="text-[#0b5ed7]/75 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
                What's next? Feel free to reach out to me if you're looking for a designer, have a query, or simply want to connect.
              </p>
            </div>

            <div className="space-y-6 pt-4">
              {/* Email */}
              <div className="flex items-center justify-center gap-2 md:gap-4 text-xl md:text-4xl font-bold tracking-tight">
                <Mail size={28} className="text-[#0b5ed7]/60 md:w-8 md:h-8 w-6 h-6" />
                <span>marantikasamuel@gmail.com</span>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText('marantikasamuel@gmail.com');
                    setCopiedEmail(true);
                    setTimeout(() => setCopiedEmail(false), 2000);
                  }}
                  className={`transition-colors p-2 ${copiedEmail ? 'text-green-400' : 'text-[#0b5ed7]/50 hover:text-[#0b5ed7]'}`}
                  aria-label="Copy email"
                >
                  {copiedEmail ? <CheckCircle2 size={24} className="md:w-7 md:h-7 w-5 h-5" /> : <Copy size={24} className="md:w-7 md:h-7 w-5 h-5" />}
                </button>
              </div>

              {/* Phone */}
              <div className="flex items-center justify-center gap-2 md:gap-4 text-xl md:text-4xl font-bold tracking-tight">
                <WhatsApp size={28} className="text-[#0b5ed7]/60 md:w-8 md:h-8 w-6 h-6" />
                <span>+62 896-8795-9233</span>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText('+62896-8795-9233');
                    setCopiedPhone(true);
                    setTimeout(() => setCopiedPhone(false), 2000);
                  }}
                  className={`transition-colors p-2 ${copiedPhone ? 'text-green-400' : 'text-[#0b5ed7]/50 hover:text-[#0b5ed7]'}`}
                  aria-label="Copy phone"
                >
                  {copiedPhone ? <CheckCircle2 size={24} className="md:w-7 md:h-7 w-5 h-5" /> : <Copy size={24} className="md:w-7 md:h-7 w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="pt-16 space-y-6">
              <p className="text-sm text-[#0b5ed7]/60">You may also find me on these platforms!</p>
              <div className="flex justify-center gap-6">
                {[
                  { name: 'Github', icon: <Github size={24} />, href: 'https://github.com/marantikasamuel-creator' },
                  { name: 'Instagram', icon: <Instagram size={24} />, href: 'https://www.instagram.com/s_amm01?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==' },
                  { name: 'LinkedIn', icon: <Linkedin size={24} />, href: 'https://www.linkedin.com/in/samuel-marantika-89a576389/' },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0b5ed7]/50 hover:text-[#0b5ed7] transition-colors p-2"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* --- FOOTER --- */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative z-30 py-8 px-6 border-t border-[#0b5ed7]/15 text-center text-xs text-[#0b5ed7]/60"
        >
          <p>© {new Date().getFullYear()} Samuel. Be better be creative. All rights reserved.</p>
        </motion.footer>
      </div>

    </div>
  );
}