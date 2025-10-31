"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

// Configure NProgress
NProgress.configure({
  showSpinner: false,
  speed: 400,
  minimum: 0.15,
  easing: "ease",
});

export default function TopProgressBar() {
  const pathname = usePathname();

  useEffect(() => {
    // Start progress bar slightly before route completes
    NProgress.start();

    // Finish progress bar after a small delay
    const timer = setTimeout(() => {
      NProgress.done();
    }, 300);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}