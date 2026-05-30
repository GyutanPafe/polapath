const navLinks = [
  { label: "サービスの特徴", href: "#features" },
  { label: "相談の流れ", href: "#flow" },
  { label: "開催概要", href: "#details" },
  { label: "よくある質問", href: "#faq" },
  { label: "お申し込み", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-bg-dark text-white" role="contentinfo">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* ロゴ & 説明文 */}
          <div className="md:col-span-1">
            <p className="font-display font-bold text-xl tracking-wider mb-3">
              POLA{" "}
              <span className="gradient-text">PATH</span>
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              資金調達の架け橋として、
              <br />
              あなたの挑戦を全力でサポートします。
            </p>
          </div>

          {/* ナビゲーションリンク */}
          <nav aria-label="フッターナビゲーション" className="md:col-span-1">
            <h3 className="font-semibold text-sm text-gray-300 mb-4 uppercase tracking-wider">
              メニュー
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* お問い合わせ情報 */}
          <div className="md:col-span-1">
            <h3 className="font-semibold text-sm text-gray-300 mb-4 uppercase tracking-wider">
              お問い合わせ
            </h3>
            <a
              href="mailto:contact@polapath.jp"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              contact@polapath.jp
            </a>
          </div>
        </div>

        {/* 区切り線 & コピーライト */}
        <div className="mt-10 pt-6 border-t border-gray-700/50 text-center">
          <p className="text-gray-500 text-xs">
            © 2026 POLAPATH. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
