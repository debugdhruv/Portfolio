"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

interface NavBarProps {
  onMenuToggle?: (isOpen: boolean) => void;
}

const NavBar = ({ onMenuToggle }: NavBarProps) => {
  const pathname = usePathname();
  const [currentTheme, setCurrentTheme] = useState<string>("light");
  const [isHeroVisible, setIsHeroVisible] = useState(pathname === '/');

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    setCurrentTheme(savedTheme);
    const themeObserver = new MutationObserver(() => {
      const newTheme = document.documentElement.classList.contains("dark") ? "dark" : "light";
      setCurrentTheme(newTheme);
    });
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    if (pathname === '/') {
      const heroElement = document.getElementById('hero');
      if (!heroElement) return;

      const scrollObserver = new IntersectionObserver(
        ([entry]) => {
          setIsHeroVisible(entry.isIntersecting);
        },
        { threshold: 0.1 }
      );

      scrollObserver.observe(heroElement);

      return () => {
        themeObserver.disconnect();
        scrollObserver.disconnect();
      };
    } else {
      setIsHeroVisible(false);
    }

    return () => themeObserver.disconnect();
  }, [pathname]);

  const handleMenuToggle = () => {
    onMenuToggle?.(true); 
  };
  
  const handleThemeToggle = () => {
    const html = document.documentElement;
    const newTheme = html.classList.contains("dark") ? "light" : "dark";
    html.classList.remove("light", "dark");
    html.classList.add(newTheme);
    localStorage.setItem("theme", newTheme);
    window.updateFavicon?.();
  };

  return (
    <header className="fixed top-0 z-50 w-full bg-background">
      <div className="relative mx-auto w-full max-w-9xl px-6 py-4">
        <div className="mt-6 sm:mt-0 flex w-full items-center justify-between">
          <div className="hover:text-primary sm:ml-12 sm:text-3xl text-2xl font-barcode">
            <Link href="/" className="flex items-center">
              <div className="block sm:hidden relative w-10 h-10">
                <Image src="/ico_light.png" alt="Dhruv Logo Light" fill className="object-contain dark:hidden" priority />
                <Image src="/ico_dark.png" alt="Dhruv Logo Dark" fill className="object-contain hidden dark:block" priority />
              </div>
              <span className="hidden sm:inline">DHRUV NARAYAN TIWARI</span>
            </Link>
          </div>

          {/* === RIGHT SIDE CONTROLS UPDATED HERE === */}
          <div className="flex items-center gap-4">
            
            {/* Theme Toggle Button (Visible on all screen sizes) */}
            {!isHeroVisible && (
              <button
                onClick={handleThemeToggle}
                className="p-2 bg-primary/30 rounded-full border-1 transition-transform duration-300"
                aria-label="Toggle theme"
              >
                {currentTheme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
            )}

            {/* Book a Call Button (Desktop Only) */}
            <Link href="https://calendly.com/dhruvtiwari-1130/booktheslot" target="_blank" rel="noopener noreferrer">
              <Button className="shadow-none border font-inter hidden lg:inline-flex rounded-lg px-4 py-6 text-md font-bold text-foreground bg-transparent hover:bg-primary hover:text-white active:bg-primary">
                Book a call
              </Button>
            </Link>

            {/* Mobile Menu Button (Mobile Only) */}
            <button onClick={handleMenuToggle} className="transition-transform duration-300 lg:hidden" aria-label="Toggle menu">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        <nav>
          <ul className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:flex gap-8 text-md font-medium text-foreground font-inter">
            <li>
              <Link href="/about" className={`${pathname === "/about" ? "text-primary font-bold" : ""} hover:text-primary`}>About</Link>
            </li>
            <li>
              <Link href="/projects" className={`${pathname === "/projects" ? "text-primary font-bold" : ""} hover:text-primary`}>Projects</Link>
            </li>
            {/* <li>
              <Link href="https://drive.google.com/file/d/12niEK0OIJFSsmz3T9NHv3khiqOONejkK/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="hover:text-primary">Resume</Link>
            </li> */}
            <li>
              <Link href="/#footer" className="hover:text-primary">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;