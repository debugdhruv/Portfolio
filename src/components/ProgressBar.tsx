"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

NProgress.configure({ showSpinner: false, speed: 400, minimum: 0.2 });

export default function TopProgressBar() {
  const pathname = usePathname();

  useEffect(() => {
  const handleStart = () => NProgress.start();

  const anchorClickHandler = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const anchor = target.closest("a");

    if (
      anchor &&
      anchor.href &&
      anchor.target !== "_blank" &&
      anchor.hostname === window.location.hostname
    ) {
      handleStart();
    }
  };

  window.addEventListener("click", anchorClickHandler);
  return () => window.removeEventListener("click", anchorClickHandler);
}, []);

  useEffect(() => {
    // Finish progress bar on route change
    const timer = setTimeout(() => {
      NProgress.done();
    }, 300);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}