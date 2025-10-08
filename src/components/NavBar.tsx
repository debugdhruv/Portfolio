"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface NavBarProps {
  onMenuToggle?: (isOpen: boolean) => void;
}

const NavBar = ({ onMenuToggle }: NavBarProps) => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => {
    const newState = !menuOpen;
    setMenuOpen(newState);
    onMenuToggle?.(newState);
  };

  return (
    <header className="fixed top-0 z-50 w-full bg-background">
      <div className="relative mx-auto w-full max-w-9xl px-6 py-4">
        <div className="mt-6 sm:mt-0 flex w-full items-center justify-between">
          {/* Left - Logo */}
          <div className="hover:text-primary sm:ml-12 sm:text-3xl text-2xl font-barcode">
            <Link href="/" className="flex items-center">
              {/* Mobile logo with dark mode swap */}
              <div className="block sm:hidden relative w-10 h-10">
                {/* Light mode icon */}
                <Image
                  src="/ico_light.png"
                  alt="Dhruv Logo Light"
                  fill
                  className="object-contain dark:hidden"
                  priority
                />
                {/* Dark mode icon */}
                <Image
                  src="/ico_dark.png"
                  alt="Dhruv Logo Dark"
                  fill
                  className="object-contain hidden dark:block"
                  priority
                />
              </div>

              {/* Desktop text logo */}
              <span className="hidden sm:inline">DHRUV NARAYAN TIWARI</span>
            </Link>
          </div>

          {/* Right - CTA and Menu icon */}
          <div className="mr-12 flex items-center gap-4">
            <Link
              href="https://calendly.com/dhruvtiwari-1130/booktheslot"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="shadow-none border font-inter hidden lg:inline-flex rounded-lg px-4 py-6 text-md font-bold text-foreground bg-transparent hover:bg-primary hover:text-white active:bg-primary">
                Book a call
              </Button>
            </Link>

            {/* Mobile Menu Icon */}
            <button
              onClick={handleToggle}
              className="lg:hidden -mr-8 transition-transform duration-300"
            >
              {menuOpen ? (
                <X className="h-6 w-6 text-primary transition-all duration-300" />
              ) : (
                <Menu className="h-6 w-6 transition-all duration-300" />
              )}
            </button>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <nav>
          <ul className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:flex gap-8 text-md font-medium text-foreground font-inter">
            <li>
              <Link
                href="/about"
                className={`${pathname === "/about" ? "text-primary font-bold" : ""} hover:text-primary`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className={`${pathname === "/projects" ? "text-primary font-bold" : ""} hover:text-primary`}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="https://drive.google.com/file/d/1QajQRx9Xu8NeX3yaG_dmtDn6XNjkS4YO/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                Resume
              </Link>
            </li>
            <li>
              <Link href="#footer" className="hover:text-primary">
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
