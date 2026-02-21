'use client'

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from '@/constants';
import { cn } from "@/lib/utils";

const NavBar = () => {
    const pathname = usePathname();

    return (
        <>
          {/* Nav is always fully transparent — text uses mix-blend-mode to auto-adapt */}
          <nav className="flex justify-between items-center fixed z-50 w-full h-28 px-10 gap-4">
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
              <section className="sticky top-0 flex justify-between">
                <div className="flex flex-1 max-sm:gap-0 sm:gap-6">
                  {navLinks.map((item) => {
                    const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);
                    
                    return (
                      <Link
                        href={item.route}
                        key={item.label}
                        className={cn(
                          'flex gap-4 items-center p-4 rounded-lg justify-start hover:scale-150 duration-300',
                          isActive && 'rounded-3xl'
                        )}
                      >
                        {/*
                          mix-blend-mode: difference with white text:
                          - Over dark backgrounds → renders as WHITE (255 - dark ≈ 255)
                          - Over white/light backgrounds → renders as BLACK (255 - 255 = 0)
                          Only the text pixels are affected, not the button background.
                        */}
                        <p
                          className={cn("text-lg font-semibold max-lg:hidden text-white")}
                          style={{ mixBlendMode: 'difference' }}
                        >
                          {item.label}
                        </p>
                      </Link>
                    );
                  })}
                </div>
              </section>

          </nav>
        </>
    )
}

export default NavBar