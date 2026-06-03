"use client";

import { useEffect, useRef } from "react";

const corporateProblems = [
  "銀行融資の審査に落ちてしまった、他社で断られた",
  "事業拡大・設備投資のための運転資金が足りない",
  "数日以内に「つなぎ資金」が急ぎで必要になった",
  "創業融資の申請手続きや事業計画の書き方がわからない",
  "赤字補填やリスケ中（返済猶予中）でも調達できる方法を探したい",
  "補助金・助成金の具体的な申請や活用方法を知りたい",
];

const personalProblems = [
  "突然の出費や支払いで、今すぐまとまった資金が必要になった",
  "複数の借入・ローンを一本化して月々の返済負担を減らしたい",
  "過去の信用情報（ブラックなど）に不安があり審査が通らない",
  "安全で信頼できる資金繰り・融資の相談窓口を探している",
];

function CheckIcon() {
  return (
    <svg
      className="mt-0.5 h-5 w-5 shrink-0 text-accent"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function ProblemSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const animatedElements = section.querySelectorAll(".fade-in-up");
            animatedElements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add("visible");
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-bg-alt py-20 md:py-28 lg:py-32"
      aria-labelledby="problem-heading"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        {/* セクションタイトル */}
        <div className="fade-in-up mb-12 text-center md:mb-16">
          <h2
            id="problem-heading"
            className="mb-4 text-2xl font-bold text-primary md:text-3xl lg:text-4xl"
          >
            こんなお悩みはありませんか？
          </h2>
          <p className="text-sm text-text-secondary md:text-base">
            資金調達のお悩みは、一人で抱え込む必要はありません
          </p>
        </div>

        {/* 2カラムレイアウト */}
        <div className="grid gap-6 md:grid-cols-12 md:gap-8">
          {/* 左カラム: 法人・個人事業主（7/12） */}
          <div className="fade-in-up md:col-span-7">
            <div className="h-full overflow-hidden rounded-2xl bg-bg shadow-md transition-shadow duration-300 hover:shadow-xl">
              {/* カードヘッダー */}
              <div className="bg-primary px-6 py-5 md:px-8 md:py-6">
                <div className="mb-2 flex items-center gap-3">
                  <span className="rounded-full bg-cta/20 px-3 py-0.5 text-[10px] font-bold tracking-wider text-cta md:text-xs">
                    MAIN TARGET
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white md:text-xl">
                  法人・個人事業主の方
                </h3>
              </div>

              {/* カードボディ */}
              <div className="px-6 py-6 md:px-8 md:py-8">
                <ul className="space-y-4" role="list">
                  {corporateProblems.map((problem) => (
                    <li key={problem} className="flex items-start gap-3">
                      <CheckIcon />
                      <span className="text-sm leading-relaxed text-text-primary md:text-base">
                        {problem}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* 右カラム: 個人（5/12） */}
          <div className="fade-in-up md:col-span-5">
            <div className="h-full overflow-hidden rounded-2xl bg-bg shadow-md transition-shadow duration-300 hover:shadow-xl">
              {/* カードヘッダー */}
              <div className="bg-accent px-6 py-5 md:px-8 md:py-6">
                <h3 className="text-lg font-bold text-white md:text-xl">
                  個人の方
                </h3>
              </div>

              {/* カードボディ */}
              <div className="flex h-[calc(100%-72px)] flex-col px-6 py-6 md:h-[calc(100%-80px)] md:px-8 md:py-8">
                <ul className="space-y-4" role="list">
                  {personalProblems.map((problem) => (
                    <li key={problem} className="flex items-start gap-3">
                      <CheckIcon />
                      <span className="text-sm leading-relaxed text-text-primary md:text-base">
                        {problem}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* 下部メッセージ */}
                <div className="mt-auto pt-6">
                  <div className="rounded-xl bg-accent/5 px-4 py-4 md:px-5">
                    <p className="text-xs leading-relaxed text-text-secondary md:text-sm">
                      個人の方もお気軽にご相談ください。あなたの状況に合わせた最適な方法をご提案します。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 安心メッセージ */}
        <div className="fade-in-up mt-12 text-center md:mt-16">
          <div className="mx-auto max-w-2xl rounded-2xl bg-white px-6 py-8 shadow-lg md:px-10 md:py-10">
            <p className="mb-3 text-lg font-bold text-primary sm:text-xl md:text-2xl">
              まずは一人で抱え込まず
              <br className="hidden sm:inline" />
              <span className="gradient-text">専門家に相談</span>しませんか？
            </p>
            <p className="mb-6 text-xs leading-relaxed text-text-secondary sm:text-sm md:text-base">
              「こんなこと相談していいのかな…」と思っている方こそ
              <br className="hidden sm:inline" />
              まずはお気軽にお話をお聞かせください。
              <br className="hidden sm:inline" />
              一緒に解決策を見つけましょう。
            </p>
            <a
              href="#contact"
              className="cta-pulse inline-block rounded-xl bg-cta px-8 py-3.5 text-sm font-bold text-white shadow-md transition-all duration-200 hover:bg-cta-hover hover:shadow-lg md:px-10 md:py-4 md:text-base"
            >
              無料で話を聞いてみる
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
