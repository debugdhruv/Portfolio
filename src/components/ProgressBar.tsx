"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

// Aapki configuration theek hai
NProgress.configure({ showSpinner: false, speed: 400, minimum: 0.2 });

export default function TopProgressBar() {
  const pathname = usePathname();

  // Yeh effect link clicks par progress bar start karta hai
  useEffect(() => {
    const handleStart = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");

      if (
        anchor &&
        anchor.href &&
        anchor.target !== "_blank" &&
        anchor.hostname === window.location.hostname
      ) {
        NProgress.start();
      }
    };

    // Click events ko suno
    document.addEventListener("click", handleStart);

    return () => {
      document.removeEventListener("click", handleStart);
    };
  }, []); // Yeh effect sirf ek baar chalega

  // Yeh effect route change hone par progress bar ko finish karta hai
  useEffect(() => {
    // === FIX YAHAN HAI ===
    // setTimeout ko hata diya gaya hai. Ab jaise hi page badlega, bar complete ho jayega.
    NProgress.done();
  }, [pathname]);

  return null;
}