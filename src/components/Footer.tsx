import Link from "next/link";

export default function Footer() {
  const footerLinks = {
    Company: [
      { name: "私たちについて", href: "/about" },
      { name: "提携漁師", href: "/fishermen" },
      { name: "採用情報", href: "#" },
      { name: "お問い合わせ", href: "/contact" },
    ],
    Explore: [
      { name: "最高級海鮮", href: "/seafood" },
      { name: "旬の厳選", href: "/seasonal" },
      { name: "産地マップ", href: "/sourcing" },
      { name: "海鮮の文化", href: "/culture" },
    ],
    Legal: [
      { name: "プライバシーポリシー", href: "/privacy" },
      { name: "利用規約", href: "/terms" },
      { name: "よくあるご質問", href: "/faq" },
    ],
  };

  return (
    <footer className="bg-navy text-ivory border-t border-navy">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          
          <div className="lg:col-span-2 flex flex-col items-start">
            <Link href="/" className="font-serif text-3xl font-semibold tracking-widest mb-6">
              海川
            </Link>
            <p className="text-ivory/70 max-w-sm mb-8 leading-relaxed font-light">
              日本の美しい海岸線から最高級の旬の海鮮を調達し、妥協のない品質で世界中の高級レストランや個人のお客様にお届けします。
            </p>
            <div className="text-sm text-ivory/50">
              © {new Date().getFullYear()} 海川水産株式会社
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6 tracking-wide text-sand">会社情報</h4>
            <ul className="space-y-4">
              {footerLinks.Company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-ivory/70 hover:text-vermilion transition-colors text-sm tracking-wide">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6 tracking-wide text-sand">コンテンツ</h4>
            <ul className="space-y-4">
              {footerLinks.Explore.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-ivory/70 hover:text-vermilion transition-colors text-sm tracking-wide">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6 tracking-wide text-sand">法的情報</h4>
            <ul className="space-y-4">
              {footerLinks.Legal.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-ivory/70 hover:text-vermilion transition-colors text-sm tracking-wide">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
}
