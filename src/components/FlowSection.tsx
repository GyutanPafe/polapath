"use client";

import { useEffect, useRef } from "react";

const steps = [
  {
    number: 1,
    title: "お申し込み",
    description: "フォームまたはお電話でお気軽にお申し込みください",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect x="5" y="3" width="18" height="22" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
        <line x1="9" y1="9" x2="19" y2="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="9" y1="13" x2="19" y2="13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="9" y1="17" x2="15" y2="17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: 2,
    title: "日程調整",
    description: "担当者より折り返しご連絡し、ご都合の良い日時を調整します",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect x="3" y="5" width="22" height="20" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
        <line x1="3" y1="11" x2="25" y2="11" stroke="currentColor" strokeWidth="2" />
        <line x1="9" y1="3" x2="9" y2="7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="19" y1="3" x2="19" y2="7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="14" cy="18" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    number: 3,
    title: "個別相談",
    description:
      "あなたの状況をヒアリングし、最適な資金調達プランをご提案します",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M4 6h16a2 2 0 012 2v8a2 2 0 01-2 2h-4l-4 4v-4H4a2 2 0 01-2-2V8a2 2 0 012-2z"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
        <circle cx="9" cy="12" r="1" fill="currentColor" />
        <circle cx="14" cy="12" r="1" fill="currentColor" />
        <circle cx="19" cy="12" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    number: 4,
    title: "資金調達実行",
    description:
      "書類作成から申請まで、調達成功に向けてトータルサポートします",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M10 14l3 3 5-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    ),
  },
];

export default function FlowSection() {
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
      id="flow"
      className="bg-bg-alt py-20 md:py-28"
      aria-label="ご相談の流れ"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="fade-in-up mb-14 text-center">
          <p className="mb-2 text-sm font-semibold tracking-widest text-accent uppercase">
            Flow
          </p>
          <h2 className="text-2xl font-bold text-text-primary md:text-3xl lg:text-4xl">
            ご相談の流れ
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-secondary md:text-lg">
            お申し込みから資金調達まで、4つのステップでサポートします
          </p>
        </div>

        {/* Steps */}
        <div className="grid gap-12 md:grid-cols-4 md:gap-0">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`fade-in-up flex flex-col items-center text-center ${
                index < steps.length - 1 ? "step-connector" : ""
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Number Circle */}
              <div className="relative mb-5">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-cta shadow-lg">
                  <span className="font-display text-2xl font-bold">
                    {step.number}
                  </span>
                </div>
              </div>

              {/* Icon */}
              <div className="mb-3 text-accent">{step.icon}</div>

              {/* Title */}
              <h3 className="mb-2 text-lg font-bold text-text-primary">
                {step.title}
              </h3>

              {/* Description */}
              <p className="max-w-[200px] text-sm leading-relaxed text-text-secondary">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
