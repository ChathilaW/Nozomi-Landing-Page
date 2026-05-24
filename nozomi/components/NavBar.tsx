'use client'

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from '@/constants';
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const NavBar = () => {
    const pathname = usePathname();
    const isHome = pathname === '/';
    const [pastHero, setPastHero] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setPastHero(window.scrollY > window.innerHeight * 0.8);
        };
        // Reset when route changes
        setPastHero(false);
        setIsOpen(false);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [pathname]);

    // White text only when on home AND still over the hero video
    const useLightText = isHome && !pastHero;

    return (
        <nav className={cn(
            "flex justify-between items-center fixed z-50 w-full h-28 px-4 sm:px-10 gap-4 transition-colors duration-300",
            "bg-transparent"
        )}>
            {/* Logo */}
            <Link href="/" className="flex items-center gap-1 lg:hover:scale-150 duration-500 z-50" onClick={() => setIsOpen(false)}>
                <Image
                    src="/Assets/logo-placeholder.svg"
                    width={60}
                    height={60}
                    alt="Nozomi logo"
                />
            </Link>

            {/* Mobile Menu Toggle Button */}
            <button 
                className="lg:hidden z-50 p-2"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle Menu"
            >
                {isOpen ? (
                    <X className="text-gray-800" size={32} />
                ) : (
                    <Menu className={useLightText ? "text-white" : "text-gray-800"} size={32} />
                )}
            </button>

            {/* Nav Links */}
            <section className={cn(
                "fixed inset-0 top-0 left-0 w-full h-screen flex-col items-center justify-center gap-8 lg:static lg:h-auto lg:w-auto lg:flex lg:flex-row lg:justify-end",
                isOpen ? "flex bg-white/95 backdrop-blur-sm" : "hidden lg:bg-white/20 lg:backdrop-blur-md lg:rounded-3xl"
            )}>
                <div className="flex flex-col lg:flex-row flex-1 w-full lg:w-auto items-center justify-center gap-6 lg:gap-2 px-4 lg:p-2">
                    {navLinks.map((item) => {
                        const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);
                        
                        return (
                            <Link
                                href={item.route}
                                key={item.label}
                                onClick={() => setIsOpen(false)}
                                className={cn(
                                    'flex gap-4 items-center p-4 rounded-3xl justify-center lg:justify-start lg:hover:scale-125 duration-300 transition-colors w-full lg:w-auto text-center',
                                    isActive && (useLightText && !isOpen ? 'bg-white/20' : 'bg-pink-100')
                                )}
                            >
                                <p className={cn(
                                    "text-2xl lg:text-lg font-semibold transition-colors duration-500",
                                    useLightText && !isOpen ? "text-white" : "text-gray-800"
                                )}>
                                    {item.label}
                                </p>
                            </Link>
                        );
                    })}
                </div>
            </section>
        </nav>
    )
}

export default NavBar