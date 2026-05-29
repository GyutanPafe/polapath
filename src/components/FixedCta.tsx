"use client";

import { useEffect, useState } from "react";

export default function FixedCta() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // ヒーローセクションが見えなくなったら表示
        setIsVisible(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    observer.observe(hero);

    return () => observer.disconnect();
  }, []);

  const handleClick = () => {
    const contact = document.getElementById("contact");
    contact?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className={`fixed-cta-bar md:hidden ${isVisible ? "visible" : ""}`}
      role="complementary"
      aria-label="お申し込みボタン"
    >
      <div className="bg-cta shadow-[0_-4px_12px_rgba(0,0,0,0.1)] px-4 py-3">
        <button
          type="button"
          onClick={handleClick}
          className="w-full py-3 bg-primary hover:bg-primary-light text-white font-bold text-sm rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
        >
          <span className="text-cta font-bold text-xs">【無料】</span>
          今すぐ相談を申し込む
        </button>
      </div>
    </div>
  );
}
