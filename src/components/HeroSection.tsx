"use client";

import { useEffect, useRef } from "react";

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const animatedElements = section.querySelectorAll(
              ".fade-in-up, .fade-in-left, .fade-in-right, .scale-in"
            );
            animatedElements.forEach((el) => el.classList.add("visible"));
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="hero-bg relative py-24 md:py-32 lg:py-40"
      aria-label="メインビジュアル"
    >
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center md:px-6 lg:px-8">
        {/* メインコピー */}
        <h1
          className="fade-in-up mb-6 text-2xl font-bold leading-relaxed text-white md:text-3xl md:leading-relaxed lg:text-5xl lg:leading-relaxed"
          style={{ transitionDelay: "0.1s" }}
        >
          事業資金から個人の資金繰りまで
          <br />
          あなたに最適な資金調達を
          <br />
          <span className="gradient-text">サポートする個別相談会</span>
        </h1>

        {/* サブコピー */}
        <p
          className="fade-in-up mx-auto mb-8 max-w-2xl text-sm leading-relaxed text-gray-300 md:text-base md:leading-loose lg:text-lg"
          style={{ transitionDelay: "0.3s" }}
        >
          経営者様から個人の方まで、即日対応・秘密厳守で、一人ひとりの状況に合わせた最適なつなぎ資金・資金繰り改善プランをご提案
          <br />画一的なセミナーではなく、あなただけの個別相談で今すぐ解決策を見つけます
        </p>

        {/* バッジ */}
        <div
          className="fade-in-up mb-10 flex items-center justify-center gap-4 md:gap-6"
          style={{ transitionDelay: "0.5s" }}
        >
          <span className="glass-card inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold text-white md:text-base">
            <span className="text-cta">✓</span> 相談無料
          </span>
          <span className="glass-card inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold text-white md:text-base">
            <span className="text-cta">✓</span> 成功報酬型
          </span>
        </div>

        {/* CTAボタン */}
        <div
          className="fade-in-up"
          style={{ transitionDelay: "0.7s" }}
        >
          <a
            href="#contact"
            className="cta-pulse inline-block rounded-xl bg-cta px-8 py-4 text-base font-bold text-white shadow-lg transition-all duration-200 hover:bg-cta-hover hover:shadow-xl md:px-12 md:py-5 md:text-lg lg:text-xl"
          >
            【無料】個別相談会に申し込む
          </a>
          <p className="mt-4 text-xs text-gray-400 md:text-sm">
            ※ 相談会への参加は完全無料です
          </p>
        </div>
      </div>
    </section>
  );
}
