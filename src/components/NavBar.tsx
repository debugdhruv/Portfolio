"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
const NavBar = () => {
  const pathname = usePathname();
  return (
    <header className="fixed top-0 z-50 w-full backdrop-blur bg-background/70">
      <div className="relative mx-auto w-full max-w-9xl px-6 py-4">
        {/* Flex container for left and right */}
        <div className="flex w-full items-center justify-between">
          {/* Left - Logo */}
          <div className="ml-12 text-3xl font-barcode">
            <Link href="/">DHRUV NARAYAN TIWARI</Link>
          </div>

          {/* Right - CTA (desktop) and Menu icon (mobile) */}
          <div className="mr-12 flex items-center gap-4">
            <Link href="https://calendly.com/dhruvtiwari-1130/booktheslot" target="_blank" rel="noopener noreferrer">
              <Button className="font-inter hidden md:inline-flex rounded-lg px-4 py-6 text-md font-bold text-white">
                Let&#39;s Talk
              </Button>
            </Link>
            <button className="md:hidden">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Center - Nav Links (only desktop) */}
        <nav>
          <ul className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex gap-8 text-md font-medium text-foreground font-inter">
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
              <Link href="#footer" className={pathname === "#footer" ? "underline" : ""}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;