"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function ProfileSection() {
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
      className="bg-bg py-20 md:py-28"
      aria-label="代表者メッセージ"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* セクションヘッダー */}
        <div className="mb-12 text-center fade-in-up">
          <p className="mb-2 text-sm font-semibold tracking-widest text-accent uppercase">
            Message
          </p>
          <h2 className="text-2xl font-bold text-text-primary md:text-3xl lg:text-4xl">
            代表者からの<span className="gradient-text">メッセージ</span>
          </h2>
        </div>

        {/* プロフィールカード */}
        <div className="fade-in-up" style={{ transitionDelay: "200ms" }}>
          <div className="overflow-hidden rounded-2xl bg-white shadow-xl md:flex">
            {/* 左: ブランドロゴ */}
            <div className="relative flex flex-col items-center justify-center gap-5 bg-gradient-to-br from-primary to-primary-medium p-10 md:w-1/3">
              <div className="flex h-28 w-28 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg">
                <Image
                  src="/logo.png"
                  alt="POLAPATH ロゴ"
                  width={80}
                  height={80}
                  className="h-20 w-20 object-contain"
                />
              </div>
              <div className="text-center">
                <p className="font-display text-xl font-bold tracking-wider text-white">POLAPATH</p>
                <p className="mt-1 text-xs text-gray-400">代表メッセージ</p>
              </div>
            </div>

            {/* 右: メッセージ */}
            <div className="p-8 md:w-2/3 md:p-10">
              <blockquote className="relative">
                <svg
                  className="absolute -top-2 -left-2 h-8 w-8 text-accent/20"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="relative text-text-secondary text-sm md:text-base leading-relaxed pl-6">
                  資金繰りの悩みは、多くの方が「誰にも相談できない」と感じています。
                  銀行に断られた、信用情報に不安がある、急いでいるけどどこに頼ればいいかわからない——
                  そんな方が最初の一歩を踏み出せる場所を作りたい、という想いでPOLAPATHを立ち上げました。
                </p>
                <p className="relative text-text-secondary text-sm md:text-base leading-relaxed pl-6 mt-4">
                  私たちが大切にしているのは、<strong className="text-text-primary">「一人ひとりの状況に合った最適解を一緒に見つけること」</strong>です。
                  画一的な提案ではなく、あなたの置かれた状況、ご希望、将来の計画をしっかりとお聞きした上で、
                  本当に必要な資金調達の方法をご提案します。
                </p>
                <p className="relative text-text-primary text-sm md:text-base leading-relaxed pl-6 mt-4 font-semibold">
                  「こんなこと相談していいのかな」と悩む必要はありません。
                  <br />
                  まずはお気軽にお話をお聞かせください。
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
