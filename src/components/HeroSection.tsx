"use client";

import { useEffect, useRef, useState } from "react";

function useCountdown(targetDate: Date) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calc = () => {
      const now = new Date().getTime();
      const diff = targetDate.getTime() - now;
      if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      };
    };
    setTimeLeft(calc());
    const timer = setInterval(() => setTimeLeft(calc()), 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return timeLeft;
}

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  // 2026年7月19日 10:00 JST
  const eventDate = new Date("2026-07-19T10:00:00+09:00");
  const { days, hours, minutes, seconds } = useCountdown(eventDate);

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
        {/* 開催日バッジ */}
        <div
          className="fade-in-up mb-6"
          style={{ transitionDelay: "0s" }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-cta/40 bg-cta/10 px-4 py-2 text-xs font-bold text-cta backdrop-blur-sm sm:px-5 sm:text-sm md:text-base">
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cta opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cta" />
            </span>
            🔥 7月19日（土）北千住で対面開催
            <span className="hidden sm:inline">｜ 残り枠わずか</span>
          </span>
        </div>

        {/* メインコピー */}
        <h1
          className="fade-in-up mb-6 text-xl font-bold leading-snug text-white sm:text-2xl sm:leading-relaxed md:text-3xl md:leading-relaxed lg:text-5xl lg:leading-relaxed"
          style={{ transitionDelay: "0.1s" }}
        >
          事業資金から個人の資金繰りまで
          <br className="hidden sm:inline" />
          あなたに最適な資金調達を
          <br className="hidden sm:inline" />
          <span className="gradient-text">サポートする個別相談会</span>
        </h1>

        {/* サブコピー */}
        <p
          className="fade-in-up mx-auto mb-8 max-w-2xl text-xs leading-relaxed text-gray-300 sm:text-sm md:text-base md:leading-loose lg:text-lg"
          style={{ transitionDelay: "0.3s" }}
        >
          経営者様から個人の方まで、即日対応・秘密厳守で、
          <br className="hidden sm:inline" />
          一人ひとりの状況に合わせた最適な資金繰り改善プランをご提案。
          <br className="hidden sm:inline" />
          あなただけの個別相談で今すぐ解決策を見つけます。
        </p>

        {/* バッジ */}
        <div
          className="fade-in-up mb-8 flex flex-wrap items-center justify-center gap-3 md:gap-5"
          style={{ transitionDelay: "0.5s" }}
        >
          <span className="glass-card inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold text-white md:text-base">
            <span className="text-cta">✓</span> 相談無料
          </span>
          <span className="glass-card inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold text-white md:text-base">
            <span className="text-cta">✓</span> 成功報酬型
          </span>
          <span className="glass-card inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold text-white md:text-base">
            <span className="text-cta">✓</span> 秘密厳守
          </span>
        </div>

        {/* カウントダウンタイマー */}
        <div
          className="fade-in-up mb-8 flex flex-col items-center"
          style={{ transitionDelay: "0.6s" }}
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-gray-400">対面開催まであと</p>
          <div className="flex items-center gap-2 md:gap-3">
            {[
              { value: days, label: "日" },
              { value: hours, label: "時間" },
              { value: minutes, label: "分" },
              { value: seconds, label: "秒" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center">
                <span className="glass-card flex h-14 w-14 items-center justify-center rounded-lg text-2xl font-bold text-white md:h-16 md:w-16 md:text-3xl">
                  {String(item.value).padStart(2, "0")}
                </span>
                <span className="mt-1 text-[10px] text-gray-400 md:text-xs">{item.label}</span>
              </div>
            ))}
          </div>
          <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-accent/10 border border-accent/30 px-4 py-1.5 text-xs font-medium text-accent-hover backdrop-blur-sm md:text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            遠方の方はオンライン相談もOK
          </p>
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
            まずは無料で相談してみる
          </a>
          <p className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-gray-400 md:text-sm">
            <span>✓ たった3分で完了</span>
            <span>✓ 強引な勧誘なし</span>
            <span>✓ 相談だけでもOK</span>
          </p>
        </div>
      </div>
    </section>
  );
}
