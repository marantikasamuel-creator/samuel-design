"use client";
import React, {useState, useRef} from "react";

import {motion, useMotionValue, AnimatePresence} from "framer-motion";
import Link from "next/link";

interface iNavItem {
	heading: string;
	href: string;
	subheading?: string;
	imgSrc?: string;
}

interface iNavLinkProps extends iNavItem {
	setIsActive: (isActive: boolean) => void;
	index: number;
}

interface iCurvedNavbarProps {
	setIsActive: (isActive: boolean) => void;
	navItems: iNavItem[];
}

interface iHeaderProps {
	navItems?: iNavItem[];
	footer?: React.ReactNode;
}

const MENU_SLIDE_ANIMATION: any = {
	initial: {x: "calc(100% + 100px)"},
	enter: {x: "0", transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1]}},
	exit: {
		x: "calc(100% + 100px)",
		transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1]},
	},
};

const defaultNavItems: iNavItem[] = [
	{
		heading: "Home",
		href: "/",
		subheading: "Welcome to our website",
		imgSrc: "/images/home.jpg",
	},
	{
		heading: "Components",
		href: "/components",
		subheading: "View our components",
		imgSrc: "/images/about.jpg",
	},
	{
		heading: "Services",
		href: "/services",
		subheading: "What we offer",
		imgSrc: "/images/services.jpg",
	},
	{
		heading: "Contact",
		href: "/contact",
		subheading: "Get in touch with us",
		imgSrc: "/images/contact.jpg",
	},
];

const CustomFooter: React.FC = () => {
	return (
		<div className="flex w-full text-xs font-semibold uppercase tracking-wider justify-between text-black px-10 md:px-24 py-5">
			<a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#0b5ed7] transition-colors">
				LinkedIn
			</a>
			<a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#0b5ed7] transition-colors">
				GitHub
			</a>
			<a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#0b5ed7] transition-colors">
				Instagram
			</a>
		</div>
	);
};

const NavLink: React.FC<iNavLinkProps> = ({
	heading,
	href,
	setIsActive,
	index,
}) => {
	const ref = useRef<HTMLAnchorElement | null>(null);
	const x = useMotionValue(0);
	const y = useMotionValue(0);

	const handleMouseMove = (
		e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
	) => {
		const rect = ref.current!.getBoundingClientRect();
		const mouseX = e.clientX - rect.left;
		const mouseY = e.clientY - rect.top;
		x.set(mouseX / rect.width - 0.5);
		y.set(mouseY / rect.height - 0.5);
	};

	const handleClick = () => {
		return setIsActive(false);
	};

	const isExternalLink = index === 4 || index === 3;
	const linkProps = isExternalLink
		? {target: "_blank", rel: "noopener noreferrer"}
		: {};

	return (
		<motion.div
			onClick={handleClick}
			initial="initial"
			whileHover="whileHover"
			className="group relative flex items-center justify-between border-b border-black/30 py-4 transition-colors duration-500 md:py-8 uppercase"
			{...linkProps}
		>
			<Link ref={ref} onMouseMove={handleMouseMove} href={href}>
				<div className="relative flex items-start">
					<span className="text-black transition-colors duration-500 text-2xl font-medium mr-2">
						{index}.
					</span>
					<div className="flex flex-row gap-2">
						<motion.span
							variants={{
								initial: {x: 0},
								whileHover: {x: -16},
							}}
							transition={{
								type: "spring",
								staggerChildren: 0.075,
								delayChildren: 0.25,
							}}
							className="relative z-10 block text-2xl font-medium text-black transition-colors duration-500"
						>
							{heading.split("").map((letter, i) => {
								return (
									<motion.span
										key={i}
										variants={{
											initial: {x: 0},
											whileHover: {x: 16},
										}}
										transition={{type: "spring"}}
										className="inline-block"
									>
										{letter}
									</motion.span>
								);
							})}
						</motion.span>
					</div>
				</div>
			</Link>
		</motion.div>
	);
};

const Curve: React.FC = () => {
	const initialPath = `M100 0 L200 0 L200 ${window.innerHeight} L100 ${window.innerHeight} Q-100 ${window.innerHeight / 2} 100 0`;
	const targetPath = `M100 0 L200 0 L200 ${window.innerHeight} L100 ${window.innerHeight} Q100 ${window.innerHeight / 2} 100 0`;

	const curve: any = {
		initial: {d: initialPath},
		enter: {
			d: targetPath,
			transition: {duration: 1, ease: [0.76, 0, 0.24, 1]},
		},
		exit: {
			d: initialPath,
			transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1]},
		},
	};

	return (
		<svg
			className="absolute top-0 -left-[99px] w-[100px] stroke-none h-full"
			style={{fill: "#ffffff"}}
		>
			<motion.path
				variants={curve}
				initial="initial"
				animate="enter"
				exit="exit"
			/>
		</svg>
	);
};

const CurvedNavbar: React.FC<
	iCurvedNavbarProps & {footer?: React.ReactNode}
> = ({setIsActive, navItems, footer}) => {
	return (
		<motion.div
			variants={MENU_SLIDE_ANIMATION}
			initial="initial"
			animate="enter"
			exit="exit"
			className="h-[100dvh] w-screen max-w-screen-sm fixed right-0 top-0 z-40 bg-white"
		>
			<div className="h-full pt-11 flex flex-col justify-between">
				<div className="flex flex-col text-5xl gap-3 mt-0 px-10 md:px-24">
					<div className="text-black border-b border-black/30 uppercase text-sm mb-0">
						<p>Navigation</p>
					</div>
					<section className="bg-transparent mt-0">
						<div className="mx-auto max-w-7xl">
							{navItems.map((item, index) => {
								return (
									<NavLink
										key={item.href}
										{...item}
										setIsActive={setIsActive}
										index={index + 1}
									/>
								);
							})}
						</div>
					</section>
				</div>
				{footer}
			</div>
			<Curve />
		</motion.div>
	);
};

const Header: React.FC<iHeaderProps> = ({
	navItems = defaultNavItems,
	footer = <CustomFooter />,
}) => {
	const [isActive, setIsActive] = useState(false);
	const openAudioRef = useRef<HTMLAudioElement | null>(null);
	const closeAudioRef = useRef<HTMLAudioElement | null>(null);

	const handleClick = () => {
		if (isActive) {
			closeAudioRef.current?.play();
		} else {
			openAudioRef.current?.play();
		}
		setIsActive(!isActive);
	};

	return (
		<>
			<div className="relative">
				<div
					onClick={handleClick}
					className="md:hidden fixed right-6 top-0 h-20 z-50 flex items-center justify-center cursor-pointer bg-transparent"
				>
					{isActive ? (
						<svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M18 6L6 18" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
							<path d="M6 6L18 18" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
						</svg>
					) : (
						<svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M4 18L20 18" stroke="#000000" strokeWidth="2" strokeLinecap="round"/>
							<path d="M4 12L20 12" stroke="#000000" strokeWidth="2" strokeLinecap="round"/>
							<path d="M4 6L20 6" stroke="#000000" strokeWidth="2" strokeLinecap="round"/>
						</svg>
					)}
				</div>
			</div>

			<AnimatePresence mode="wait">
				{isActive && (
					<CurvedNavbar
						setIsActive={setIsActive}
						navItems={navItems}
						footer={footer}
					/>
				)}
			</AnimatePresence>
		</>
	);
};

export default Header;
