// src/components/NavBar.tsx
"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const handleContactClick = () => {
    router.push("/#contact");
  };

  return (
    <header className="fixed top-0 z-50 w-full backdrop-blur bg-background/70 border-b border-border">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Left - Logo or Name */}
        <div className="text-xl font-barcode tracking-widest">
          DHRUVNARAYANTIWARI
        </div>

        {/* Center - Nav Links */}
        <ul className="flex gap-6 text-sm font-medium text-foreground">
          <li>
            <Link href="/projects" className={pathname === "/projects" ? "underline" : ""}>
              Projects
            </Link>
          </li>
          <li>
            <Link href="/about" className={pathname === "/about" ? "underline" : ""}>
              About
            </Link>
          </li>
          <li>
            <Link href="/resume" className={pathname === "/resume" ? "underline" : ""}>
              Resume
            </Link>
          </li>
          <li>
            <button onClick={handleContactClick} className="hover:underline">
              Contact
            </button>
          </li>
        </ul>

        {/* Right - CTA Button */}
        <div>
          <button className="rounded-md border border-foreground px-4 py-1.5 text-sm font-medium hover:bg-foreground hover:text-background transition">
            Book a Call
          </button>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;