"use client";

import { useEffect, useRef } from "react";

const features = [
  {
    icon: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Person */}
        <circle cx="20" cy="14" r="6" stroke="currentColor" strokeWidth="2.5" fill="none" />
        <path
          d="M8 38c0-6.627 5.373-12 12-12s12 5.373 12 12"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
        {/* Gear */}
        <circle cx="36" cy="30" r="4.5" stroke="currentColor" strokeWidth="2" fill="none" />
        <circle cx="36" cy="30" r="1.5" fill="currentColor" />
        <line x1="36" y1="24" x2="36" y2="26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="36" y1="34" x2="36" y2="36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="30" y1="30" x2="32" y2="30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="40" y1="30" x2="42" y2="30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="31.76" y1="25.76" x2="33.17" y2="27.17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="38.83" y1="32.83" x2="40.24" y2="34.24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="31.76" y1="34.24" x2="33.17" y2="32.83" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="38.83" y1="27.17" x2="40.24" y2="25.76" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: "完全パーソナライズの個別相談",
    description:
      "お一人おひとりの財務状況、事業計画、借入履歴に応じて、最適な資金調達の方法をオーダーメイドでご提案します。",
    borderColor: "bg-accent",
  },
  {
    icon: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Multiple arrows / routes */}
        <path
          d="M8 36L20 24L28 30L40 16"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <polyline
          points="34,16 40,16 40,22"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M8 28L16 20L24 24L40 12"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          opacity="0.4"
        />
        <path
          d="M8 42L18 32L26 36L40 24"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          opacity="0.4"
        />
        {/* Dots for route choices */}
        <circle cx="20" cy="24" r="2.5" fill="currentColor" />
        <circle cx="28" cy="30" r="2.5" fill="currentColor" />
      </svg>
    ),
    title: "多様な資金調達方法のご提案",
    description:
      "銀行融資、日本政策金融公庫、補助金・助成金、ファクタリングなど、幅広い選択肢の中からベストな方法を一緒に探します。",
    borderColor: "bg-cta",
  },
  {
    icon: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Document */}
        <rect
          x="10"
          y="4"
          width="22"
          height="32"
          rx="2"
          stroke="currentColor"
          strokeWidth="2.5"
          fill="none"
        />
        <line x1="16" y1="12" x2="26" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="16" y1="18" x2="26" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="16" y1="24" x2="22" y2="24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        {/* Pen */}
        <path
          d="M34 22L40 16L44 20L38 26L34 27L34 22Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
          fill="none"
        />
        <line x1="37" y1="19" x2="41" y2="23" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    title: "申請書類の作成サポート",
    description:
      "融資審査に通りやすい事業計画書の作成から、申請手続きの代行まで、資金調達の成功に向けてトータルでサポートします。",
    borderColor: "bg-success",
  },
];

export default function FeaturesSection() {
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
      { threshold: 0.15 }
    );

    const el = sectionRef.current;
    if (!el) return;

    const targets = el.querySelectorAll(".fade-in-up");
    targets.forEach((t) => observer.observe(t));

    return () => {
      targets.forEach((t) => observer.unobserve(t));
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="features"
      className="bg-bg py-20 md:py-28"
      aria-label="POLAPATHが選ばれる理由"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="fade-in-up mb-14 text-center">
          <p className="mb-2 text-sm font-semibold tracking-widest text-accent uppercase">
            Features
          </p>
          <h2 className="text-2xl font-bold text-text-primary md:text-3xl lg:text-4xl">
            POLAPATHが選ばれる理由
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-secondary md:text-lg">
            画一的なセミナーではなく、一人ひとりに寄り添った個別相談だからこそできることがあります
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <article
              key={index}
              className="fade-in-up group relative overflow-hidden rounded-xl border border-border bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Top colored line */}
              <div className={`h-1 w-full ${feature.borderColor}`} />

              <div className="p-8">
                {/* Icon */}
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-xl bg-bg-alt text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
                  {feature.icon}
                </div>

                {/* Title */}
                <h3 className="mb-3 text-lg font-bold text-text-primary">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed text-text-secondary">
                  {feature.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Mid CTA */}
        <div className="fade-in-up mt-16 text-center">
          <p className="mb-6 text-base font-medium text-text-primary md:text-lg">
            まずは無料相談で、最適な資金調達方法を見つけましょう
          </p>
          <a
            href="#contact"
            className="cta-pulse inline-block rounded-full bg-cta px-10 py-4 text-base font-bold text-white shadow-lg transition-all duration-300 hover:bg-cta-hover hover:shadow-xl md:text-lg"
          >
            今すぐ無料で相談する
          </a>
        </div>
      </div>
    </section>
  );
}
