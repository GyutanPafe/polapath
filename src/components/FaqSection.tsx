"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const faqItems = [
  {
    question: "個人でも相談できますか？",
    answer:
      "はい、もちろんです。POLAPATHでは法人・個人事業主の方だけでなく、個人の方のご相談も承っております。生活費や予期せぬ出費、複数の借入のまとめなど、どのようなお悩みでもまずはお気軽にご相談ください。",
  },
  {
    question: "相談料はかかりますか？",
    answer:
      "個別相談会への参加は完全無料です。費用が発生するのは、実際に資金調達が成功した場合の成功報酬のみとなります。相談だけで費用をいただくことは一切ございません。",
  },
  {
    question: "どのような資金調達方法を提案してもらえますか？",
    answer:
      "お客様の状況に応じて、銀行融資、日本政策金融公庫の融資、自治体の制度融資、補助金・助成金、ファクタリング、ビジネスローンなど、幅広い選択肢からご提案いたします。資金の種類や借入の形態は一人ひとり異なりますので、最適な方法を一緒に探しましょう。",
  },
  {
    question: "銀行融資に落ちたのですが、相談できますか？",
    answer:
      "はい、ぜひご相談ください。銀行融資に落ちた理由を分析し、改善策のご提案や、銀行融資以外の資金調達方法もご案内いたします。一度審査に落ちたからといって諦める必要はありません。",
  },
  {
    question: "オンラインでの相談は可能ですか？",
    answer:
      "現在は北千住駅近くの会議室での対面相談を基本としておりますが、遠方の方にはZoomなどを活用したオンライン相談にも対応しております。お申し込み時にご希望をお伝えください。",
  },
  {
    question: "相談当日に必要な持ち物はありますか？",
    answer:
      "特に必須の持ち物はございません。ただし、事業計画書や決算書、確定申告書などをお持ちいただくと、より具体的なアドバイスが可能です。手ぶらでお越しいただいても問題ございません。",
  },
  {
    question: "今日・明日中に資金が必要ですが、即日対応は可能ですか？",
    answer:
      "はい、お急ぎの方には最短即日〜数日以内での迅速な対応・提案を行っております。状況に応じて即効性のある調達手段をご案内いたしますので、まずはお申し込み時に「急ぎ」である旨をお伝えください。",
  },
  {
    question: "過去にブラックリスト入りしている（またはリスケ中）ですが、相談できますか？",
    answer:
      "はい、全く問題ございません。信用情報機関（ブラックリスト等）の状況や現在の返済猶予（リスケ）状況に関わらず、調達可能なスキームは多数存在します。ご相談内容の秘密は厳守いたしますので、現状をありのままお話しください。",
  },
];

export default function FaqSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = useCallback((index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  }, []);

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
      { threshold: 0.05 }
    );

    const el = sectionRef.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="py-16 md:py-24 bg-bg-alt"
      aria-labelledby="faq-title"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* セクションタイトル */}
        <div className="text-center mb-12 fade-in-up">
          <h2
            id="faq-title"
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-primary mb-4"
          >
            よくある<span className="gradient-text">質問</span>
          </h2>
          <p className="text-text-secondary text-sm md:text-base">
            ご不明な点がございましたら、お気軽にお問い合わせください
          </p>
        </div>

        {/* アコーディオン */}
        <div className="space-y-4 fade-in-up">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-border rounded-xl bg-white overflow-hidden transition-shadow hover:shadow-md"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-5 md:px-6 md:py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded-xl"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 text-accent font-bold text-sm flex items-center justify-center">
                      Q
                    </span>
                    <span className="font-semibold text-text-primary text-sm md:text-base">
                      {item.question}
                    </span>
                  </span>
                  {/* +/- アイコン（回転アニメーション） */}
                  <span
                    className={`flex-shrink-0 w-7 h-7 rounded-full border-2 border-accent flex items-center justify-center transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-accent" : "bg-transparent"
                    }`}
                    aria-hidden="true"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`w-4 h-4 transition-colors duration-300 ${
                        isOpen ? "text-white" : "text-accent"
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      {isOpen ? (
                        <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
                      ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                      )}
                    </svg>
                  </span>
                </button>
                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  className={`accordion-content ${isOpen ? "open" : ""}`}
                >
                  <div className="px-5 pb-5 md:px-6 md:pb-6 pl-16 md:pl-[4.5rem]">
                    <p className="text-text-secondary text-sm md:text-base leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
