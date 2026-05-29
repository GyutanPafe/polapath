"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full bg-bg transition-shadow duration-300 ${
        isScrolled ? "shadow-md" : "shadow-none"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6 lg:px-8">
        {/* ロゴ */}
        <a href="#" className="flex items-center gap-2 md:gap-3" aria-label="POLAPATH トップへ戻る">
          <Image
            src="/logo.png"
            alt="POLAPATH ロゴ"
            width={36}
            height={36}
            className="h-8 w-8 md:h-9 md:w-9"
            priority
          />
          <span className="font-display text-lg font-bold tracking-tight text-primary md:text-xl lg:text-2xl">
            POLAPATH
          </span>
        </a>

        {/* CTAボタン */}
        <a
          href="#contact"
          className="inline-flex items-center rounded-lg bg-cta px-4 py-2 text-xs font-bold text-white shadow-sm transition-all duration-200 hover:bg-cta-hover hover:shadow-md md:px-6 md:py-2.5 md:text-sm"
        >
          無料相談を申し込む
        </a>
      </div>
    </header>
  );
}
