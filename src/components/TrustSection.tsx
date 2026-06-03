"use client";

import { useEffect, useRef } from "react";

interface VoiceCard {
  icon: React.ReactNode;
  highlight: string;
  description: string;
  accentColor: string;
}

const voices: VoiceCard[] = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    highlight: "信用情報に不安がある方でも\n資金調達に成功\nしています",
    description: "過去の信用情報に自信がなくても大丈夫。状況に応じた最適な調達方法を一緒に探します。",
    accentColor: "from-cta to-cta-hover",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    ),
    highlight: "銀行融資に\n一度断られた方も\n別の方法で調達を実現",
    description: "融資審査に落ちても諦める必要はありません。公庫・助成金・ファクタリングなど、多角的にご提案します。",
    accentColor: "from-accent to-accent-hover",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    highlight: "法人だけでなく\n個人の方の\n調達実績も多数",
    description: "「個人だから無理かも」と思っていた方も、状況に合った方法が見つかっています。まずはご相談ください。",
    accentColor: "from-success to-emerald-400",
  },
];

export default function TrustSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = sectionRef.current;
            if (el) {
              el.querySelectorAll(".fade-in-up").forEach((t) =>
                t.classList.add("visible")
              );
            }
          }
        });
      },
      { threshold: 0.15 }
    );

    const el = sectionRef.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="trust"
      className="bg-primary py-20 md:py-28 relative overflow-hidden"
      aria-label="選ばれている理由"
    >
      {/* 背景デコレーション */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-cta/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* セクションヘッダー */}
        <div className="mb-14 text-center fade-in-up">
          <p className="mb-2 text-sm font-semibold tracking-widest text-accent-hover uppercase">
            Why Choose Us
          </p>
          <h2 className="text-xl font-bold text-white sm:text-2xl md:text-3xl lg:text-4xl mb-4">
            こんな方でも<span className="gradient-text">資金調達に成功</span>しています
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            一人ひとり状況は違います。だからこそ、個別相談で最適な道を見つけることが大切です。
          </p>
        </div>

        {/* Voice Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {voices.map((voice, index) => (
            <div
              key={index}
              className="fade-in-up group"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="glass-card rounded-2xl p-6 md:p-8 h-full flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 hover:bg-white/10">
                {/* アイコン */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${voice.accentColor} flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {voice.icon}
                </div>

                {/* ハイライトテキスト */}
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-4 leading-snug whitespace-pre-line">
                  {voice.highlight}
                </h3>

                {/* ゴールドライン */}
                <div className="mb-4 h-0.5 w-12 bg-gradient-to-r from-cta to-cta-hover rounded-full" />

                {/* 説明テキスト */}
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                  {voice.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 補足メッセージ */}
        <div className="mt-12 text-center fade-in-up" style={{ transitionDelay: "500ms" }}>
          <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed">
            「自分の場合は難しいかも…」と思っている方こそ、
            <br className="hidden sm:inline" />
            まずは一度ご相談ください。一緒に最適な方法を探しましょう。
          </p>
        </div>
      </div>
    </section>
  );
}
