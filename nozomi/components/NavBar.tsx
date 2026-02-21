'use client'

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from '@/constants';
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const NavBar = () => {
    const pathname = usePathname();
    const isHome = pathname === '/';
    const [pastHero, setPastHero] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setPastHero(window.scrollY > window.innerHeight * 0.8);
        };
        // Reset when route changes
        setPastHero(false);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [pathname]);

    // White text only when on home AND still over the hero video
    const useLightText = isHome && !pastHero;

    return (
        <nav className="flex justify-between items-center fixed z-50 w-full h-28 px-10 gap-4 bg-transparent">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-1 hover:scale-150 duration-500">
                <Image
                    src="/Assets/logo-placeholder.svg"
                    width={60}
                    height={60}
                    alt="Nozomi logo"
                />
            </Link>

            {/* Nav Links */}
            <section className="flex">
                <div className="flex flex-1 max-sm:gap-0 sm:gap-6">
                    {navLinks.map((item) => {
                        const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);

                        return (
                            <Link
                                href={item.route}
                                key={item.label}
                                className={cn(
                                    'flex gap-4 items-center p-4 rounded-3xl justify-start hover:scale-150 duration-300 transition-colors',
                                    isActive && (useLightText ? 'bg-white/20' : 'bg-pink-100')
                                )}
                            >
                                <p className={cn(
                                    "text-lg font-semibold max-lg:hidden transition-colors duration-500",
                                    // White over the hero video only; dark everywhere else
                                    useLightText ? "text-white" : "text-gray-800"
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