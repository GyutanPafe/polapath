"use client";

import { useEffect, useRef, useState, FormEvent } from "react";

export default function ContactForm() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [contactMethod, setContactMethod] = useState<string>("phone");
  const [fieldErrors, setFieldErrors] = useState<{ name?: string; phone?: string; email?: string }>({});



  const validateForm = (name: string, phone: string, method: string, email: string): boolean => {
    const errors: { name?: string; phone?: string; email?: string } = {};

    if (!name.trim()) {
      errors.name = "企業名またはお名前を入力してください";
    }

    if (!phone.trim()) {
      errors.phone = "電話番号を入力してください";
    } else if (!/^[0-9\-+() ]{8,15}$/.test(phone.trim())) {
      errors.phone = "正しい電話番号を入力してください";
    }

    if (method === "email") {
      if (!email.trim()) {
        errors.email = "メールでの連絡をご希望の場合は、メールアドレスを入力してください";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
        errors.email = "正しいメールアドレスを入力してください";
      }
    } else if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      errors.email = "正しいメールアドレスを入力してください";
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = (formData.get("name") as string) || "";
    const phone = (formData.get("phone") as string) || "";
    const email = (formData.get("email") as string) || "";
    const method = contactMethod;

    if (!validateForm(name, phone, method, email)) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
        setFieldErrors({});
        form.reset();
      } else {
        setErrorMessage("送信に失敗しました。もう一度お試しください。");
      }
    } catch {
      setErrorMessage("通信エラーが発生しました。もう一度お試しください。");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-16 md:py-24 hero-bg"
      aria-labelledby="contact-title"
    >
      <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* セクションタイトル */}
        <div className="text-center mb-10">
          <h2
            id="contact-title"
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4"
          >
            個別相談会に<span className="gradient-text">申し込む</span>
          </h2>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            まずはお気軽にご相談ください。
            <br className="hidden sm:inline" />
            あなたの状況に合った最適な方法を一緒に考えます。
          </p>
        </div>

        {/* 3つの安心宣言 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="flex flex-col items-center text-center p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-md">
            <span className="text-2xl mb-1.5" role="img" aria-label="秘密厳守">🔒</span>
            <h3 className="text-white text-sm font-bold mb-1">徹底した秘密厳守</h3>
            <p className="text-gray-300 text-[11px] leading-relaxed">
              ご相談内容や個人情報が外部、ご家族、お取引先に知られることはありません。
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-md">
            <span className="text-2xl mb-1.5" role="img" aria-label="勧誘なし">🚫</span>
            <h3 className="text-white text-sm font-bold mb-1">強引な勧誘なし</h3>
            <p className="text-gray-300 text-[11px] leading-relaxed">
              しつこい営業電話や契約の強要はありません。合わない場合はいつでもお断り可能です。
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-md">
            <span className="text-2xl mb-1.5" role="img" aria-label="手ぶらOK">🎒</span>
            <h3 className="text-white text-sm font-bold mb-1">まずは手ぶらでOK</h3>
            <p className="text-gray-300 text-[11px] leading-relaxed">
              最初の相談に難しい書類は不要。現在のご状況をそのままお聞かせください。
            </p>
          </div>
        </div>

        {/* フォームカード */}
        <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-10">
          {isSuccess ? (
            /* 成功メッセージ */
            <div className="text-center py-8">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-success/10 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-3">
                お申し込みありがとうございます
              </h3>
              <p className="text-text-secondary leading-relaxed">
                担当者より折り返しご連絡いたします。
              </p>
            </div>
          ) : (
            /* フォーム */
            <form onSubmit={handleSubmit} noValidate>
              {/* Web3Forms hidden inputs */}
              <input type="hidden" name="access_key" value="6c77f2be-034b-4b07-a9cc-f8dff2c9b66d" />
              <input type="hidden" name="subject" value="【POLAPATH】個別相談会のお申し込み" />
              <input type="hidden" name="to" value="contact@gyutanpafe.com" />
              <input type="hidden" name="希望連絡方法" value={contactMethod === "phone" ? "電話" : contactMethod === "email" ? "メール" : "どちらでも"} />
              {/* ハニーポット */}
              <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

              <div className="space-y-6">
                {/* 企業名 / お名前 */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-text-primary mb-2"
                  >
                    企業名 または お名前
                    <span className="text-red-500 ml-1">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="例）株式会社〇〇 / 山田太郎"
                    onChange={() => setFieldErrors((prev) => ({ ...prev, name: undefined }))}
                    className={`w-full px-4 py-3 rounded-lg border bg-bg-alt text-text-primary placeholder:text-text-light focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-shadow text-sm md:text-base ${
                      fieldErrors.name ? "border-red-500" : "border-border"
                    }`}
                  />
                  {fieldErrors.name && (
                    <p className="text-red-500 text-xs mt-1">{fieldErrors.name}</p>
                  )}
                </div>

                {/* 電話番号 */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-text-primary mb-2"
                  >
                    電話番号
                    <span className="text-red-500 ml-1">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    placeholder="例）090-1234-5678"
                    onChange={() => setFieldErrors((prev) => ({ ...prev, phone: undefined }))}
                    className={`w-full px-4 py-3 rounded-lg border bg-bg-alt text-text-primary placeholder:text-text-light focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-shadow text-sm md:text-base ${
                      fieldErrors.phone ? "border-red-500" : "border-border"
                    }`}
                  />
                  {fieldErrors.phone && (
                    <p className="text-red-500 text-xs mt-1">{fieldErrors.phone}</p>
                  )}
                </div>

                {/* ご希望の連絡方法 */}
                <div>
                  <label className="block text-sm font-semibold text-text-primary mb-2">
                    ご希望の連絡方法
                    <span className="text-red-500 ml-1">*</span>
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <label className="flex items-center justify-center gap-1.5 px-2 py-3 border border-border rounded-lg bg-bg-alt text-xs md:text-sm font-semibold text-text-primary cursor-pointer hover:bg-border/10 transition-colors">
                      <input
                        type="radio"
                        name="contact_method"
                        value="phone"
                        checked={contactMethod === "phone"}
                        onChange={() => {
                          setContactMethod("phone");
                          setFieldErrors((prev) => ({ ...prev, email: undefined }));
                        }}
                        className="text-accent focus:ring-accent"
                      />
                      お電話
                    </label>
                    <label className="flex items-center justify-center gap-1.5 px-2 py-3 border border-border rounded-lg bg-bg-alt text-xs md:text-sm font-semibold text-text-primary cursor-pointer hover:bg-border/10 transition-colors">
                      <input
                        type="radio"
                        name="contact_method"
                        value="email"
                        checked={contactMethod === "email"}
                        onChange={() => setContactMethod("email")}
                        className="text-accent focus:ring-accent"
                      />
                      メール
                    </label>
                    <label className="flex items-center justify-center gap-1.5 px-2 py-3 border border-border rounded-lg bg-bg-alt text-xs md:text-sm font-semibold text-text-primary cursor-pointer hover:bg-border/10 transition-colors">
                      <input
                        type="radio"
                        name="contact_method"
                        value="any"
                        checked={contactMethod === "any"}
                        onChange={() => {
                          setContactMethod("any");
                          setFieldErrors((prev) => ({ ...prev, email: undefined }));
                        }}
                        className="text-accent focus:ring-accent"
                      />
                      どちらでも
                    </label>
                  </div>
                </div>

                {/* メールアドレス */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-text-primary mb-2"
                  >
                    メールアドレス
                    {contactMethod === "email" ? (
                      <span className="text-red-500 ml-1">*（必須）</span>
                    ) : (
                      <span className="text-text-light ml-2 font-normal text-xs">（任意）</span>
                    )}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder={contactMethod === "email" ? "メール連絡をご希望のため必須です" : "例）example@email.com"}
                    onChange={() => setFieldErrors((prev) => ({ ...prev, email: undefined }))}
                    className={`w-full px-4 py-3 rounded-lg border bg-bg-alt text-text-primary placeholder:text-text-light focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-shadow text-sm md:text-base ${
                      fieldErrors.email ? "border-red-500" : "border-border"
                    }`}
                  />
                  {fieldErrors.email && (
                    <p className="text-red-500 text-xs mt-1">{fieldErrors.email}</p>
                  )}
                </div>

                {/* 連絡事項（任意） */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-text-primary mb-2"
                  >
                    連絡事項
                    <span className="text-text-light ml-2 font-normal text-xs">（任意）</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    placeholder="例）オンラインでの相談を希望します / 銀行融資について相談したいです"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-bg-alt text-text-primary placeholder:text-text-light focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-shadow text-sm md:text-base resize-y"
                  />
                </div>
                {/* エラーメッセージ */}
                {errorMessage && (
                  <p className="text-red-500 text-sm text-center" role="alert">
                    {errorMessage}
                  </p>
                )}

                {/* 送信ボタン */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 bg-cta hover:bg-cta-hover text-white font-bold text-base md:text-lg rounded-xl shadow-lg cta-pulse transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:animate-none flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      送信中...
                    </>
                  ) : (
                    "無料相談に申し込む"
                  )}
                </button>

                {/* 注記 */}
                <p className="text-text-light text-xs text-center leading-relaxed">
                  ※ ご入力いただいた情報は相談会のご案内にのみ使用し、第三者に提供することはありません。
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
