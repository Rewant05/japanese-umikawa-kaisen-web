"use client";

export default function Contact() {
  return (
    <div className="bg-sand min-h-screen">
      <section className="pt-32 pb-16 px-6 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif text-navy mb-6 tracking-widest">お問い合わせ</h1>
        <p className="text-charcoal/80 text-lg leading-relaxed">
          海川（UMIKAWA）は、ミシュラン星付きレストラン、一流の卸売業者、および世界中の個人顧客に最高級の日本の海鮮を提供しています。
          卸売ポータルへのアクセス要求、または特定の季節の割り当てについてのお問い合わせは、以下のフォームをご利用ください。
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 pb-24">
        <div className="bg-ivory p-8 md:p-16 border border-navy/10 shadow-sm">
          <form className="space-y-8" action="#" method="POST" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label htmlFor="name" className="block text-xs tracking-widest text-charcoal/70 mb-2">氏名</label>
                <input type="text" id="name" className="w-full bg-transparent border-b border-charcoal/30 py-2 focus:outline-none focus:border-navy transition-colors text-charcoal" />
              </div>
              <div>
                <label htmlFor="company" className="block text-xs tracking-widest text-charcoal/70 mb-2">レストラン / 会社名</label>
                <input type="text" id="company" className="w-full bg-transparent border-b border-charcoal/30 py-2 focus:outline-none focus:border-navy transition-colors text-charcoal" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label htmlFor="email" className="block text-xs tracking-widest text-charcoal/70 mb-2">メールアドレス</label>
                <input type="email" id="email" className="w-full bg-transparent border-b border-charcoal/30 py-2 focus:outline-none focus:border-navy transition-colors text-charcoal" />
              </div>
              <div>
                <label htmlFor="type" className="block text-xs tracking-widest text-charcoal/70 mb-2">お問い合わせの種類</label>
                <select id="type" className="w-full bg-transparent border-b border-charcoal/30 py-2 focus:outline-none focus:border-navy transition-colors text-charcoal appearance-none">
                  <option>卸売アカウント</option>
                  <option>個人のお客様</option>
                  <option>メディア関係</option>
                  <option>その他</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-xs tracking-widest text-charcoal/70 mb-2">メッセージ</label>
              <textarea id="message" rows={4} className="w-full bg-transparent border-b border-charcoal/30 py-2 focus:outline-none focus:border-navy transition-colors text-charcoal resize-none"></textarea>
            </div>

            <div className="pt-4 text-center">
              <button type="submit" className="bg-navy text-ivory px-12 py-4 tracking-widest text-sm font-serif hover:bg-vermilion transition-colors duration-300">
                送信する
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
