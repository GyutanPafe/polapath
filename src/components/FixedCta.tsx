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
    <>
      {/* === モバイル版: 画面下部に固定バー === */}
      <div
        className={`fixed-cta-bar md:hidden ${isVisible ? "visible" : ""}`}
        role="complementary"
        aria-label="お申し込みボタン"
      >
        <div className="bg-primary shadow-[0_-4px_20px_rgba(0,0,0,0.3)] px-4 py-3">
          <button
            type="button"
            onClick={handleClick}
            className="w-full py-3 bg-cta hover:bg-cta-hover text-white font-bold text-sm rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
          >
            今すぐ無料で相談する
          </button>
        </div>
      </div>

      {/* === PC版: 右下にフローティングボタン === */}
      <div
        className={`fixed bottom-6 right-6 z-50 hidden md:flex flex-col items-end gap-3 transition-all duration-500 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 pointer-events-none"
        }`}
        role="complementary"
        aria-label="お問い合わせボタン"
      >
        <button
          type="button"
          onClick={handleClick}
          className="cta-pulse flex items-center gap-3 rounded-full bg-cta px-6 py-4 text-white shadow-lg transition-all duration-300 hover:bg-cta-hover hover:shadow-xl"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          <span className="text-sm font-bold">無料で相談する</span>
        </button>
      </div>
    </>
  );
}
