"use client";

import { useEffect, useRef } from "react";

const details = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    label: "開催日時",
    value: "2026年7月19日（土） 10:00〜18:00（1枠20〜30分の完全予約制）",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: "会場",
    value: "北千住駅近くの貸し会議室（お申し込み後に詳細をご案内します）",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 4l6 8 6-8M8 12h8M8 16h8M12 12v8" />
      </svg>
    ),
    label: "参加費",
    value: "無料（資金調達が成功した場合のみ、成功報酬をいただきます）",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    label: "対象",
    value: "法人・個人事業主・個人の方（資金調達にお困りの全ての方）",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: "持ち物",
    value: "特になし（事業計画書等があればお持ちください）",
  },
];

export default function DetailsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".fade-in-up");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="details"
      ref={sectionRef}
      className="py-16 md:py-24 bg-bg"
      aria-labelledby="details-title"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* セクションタイトル */}
        <div className="text-center mb-12 fade-in-up">
          <h2
            id="details-title"
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-primary"
          >
            個別相談会{" "}
            <span className="gradient-text">開催概要</span>
          </h2>
        </div>

        {/* カード */}
        <div className="fade-in-up border-l-4 border-cta rounded-xl shadow-lg overflow-hidden bg-white">
          <dl>
            {details.map((item, index) => (
              <div
                key={item.label}
                className={`flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 px-5 py-5 md:px-8 md:py-6 ${
                  index % 2 === 0 ? "bg-white" : "bg-bg-alt"
                } ${index !== details.length - 1 ? "border-b border-border-light" : ""}`}
              >
                {/* アイコン + ラベル */}
                <dt className="flex items-center gap-3 min-w-[140px] md:min-w-[160px] shrink-0">
                  <span className="text-accent" aria-hidden="true">
                    {item.icon}
                  </span>
                  <span className="font-bold text-text-primary text-sm md:text-base">
                    {item.label}
                  </span>
                </dt>
                {/* 値 */}
                <dd className="text-text-secondary text-sm md:text-base leading-relaxed pl-9 sm:pl-0">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
