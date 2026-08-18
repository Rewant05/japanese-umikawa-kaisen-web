export default function FAQ() {
  return (
    <div className="bg-ivory min-h-screen">
      <section className="pt-32 pb-16 px-6 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-serif text-navy mb-6 tracking-widest">よくあるご質問</h1>
      </section>

      <section className="max-w-3xl mx-auto px-6 pb-24 space-y-8">
        <div>
          <h3 className="text-xl font-serif text-navy mb-2">個人向けの販売は行っていますか？</h3>
          <p className="text-charcoal/70 leading-relaxed">はい、個人のお客様向けにも厳選された季節の割り当てを提供しております。在庫状況については、お問い合わせフォームからご連絡ください。</p>
        </div>
        <div>
          <h3 className="text-xl font-serif text-navy mb-2">海鮮はどのように配送されますか？</h3>
          <p className="text-charcoal/70 leading-relaxed">すべての海鮮は、日本から直接、専用のコールドチェーン物流を通じて発送され、水揚げから24〜48時間以内に最高の状態でお届けします。</p>
        </div>
        <div>
          <h3 className="text-xl font-serif text-navy mb-2">神経締めとは何ですか？</h3>
          <p className="text-charcoal/70 leading-relaxed">神経締めは日本の伝統的な活け締め技法であり、ストレス信号による身の劣化を防ぎ、食感と風味を劇的に向上させます。</p>
        </div>
      </section>
    </div>
  );
}
