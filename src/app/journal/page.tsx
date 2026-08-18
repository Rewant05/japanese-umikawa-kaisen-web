import Image from "next/image";
import Link from "next/link";

export default function Journal() {
  const articles = [
    {
      title: "神経締めの科学と芸術",
      category: "技術",
      date: "2023年10月12日",
      excerpt: "日本の伝統的な活け締め技法が、なぜ根本的に優れた海鮮を生み出し、身の劣化を防ぎ、純粋な旨味を保存するのか。",
      image: "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?q=80&w=1974&auto=format&fit=crop"
    },
    {
      title: "「旬」を理解する：海の微細な季節",
      category: "文化",
      date: "2023年9月28日",
      excerpt: "日本では、魚は単に「季節のもの」ではありません。「走り（初期）」「旬（最盛期）」「名残（末期）」があり、それぞれに異なる料理のアプローチが必要です。",
      image: "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "大間のマグロ競り",
      category: "調達",
      date: "2023年8月15日",
      excerpt: "世界で最も高価な本マグロが、ほんの数秒で評価され落札される、緊張感あふれる朝の競りの舞台裏。",
      image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?q=80&w=1827&auto=format&fit=crop"
    }
  ];

  return (
    <div className="bg-sand min-h-screen">
      <section className="pt-32 pb-16 px-6 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif text-navy mb-6 tracking-widest">読み物</h1>
        <p className="text-charcoal/80 text-lg leading-relaxed">
          日本の海鮮文化、料理技術、そして世界最高峰の獲物を生み出す環境についての探求。
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {articles.map((article, idx) => (
            <article key={idx} className="group cursor-pointer flex flex-col h-full bg-ivory">
              <div className="relative h-64 overflow-hidden bg-navy">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-vermilion text-xs tracking-widest">{article.category}</span>
                  <span className="text-charcoal/50 text-xs tracking-widest">{article.date}</span>
                </div>
                <h2 className="text-2xl font-serif text-navy mb-4 group-hover:text-vermilion transition-colors">{article.title}</h2>
                <p className="text-charcoal/70 text-sm leading-relaxed flex-grow">
                  {article.excerpt}
                </p>
                <div className="mt-6 pt-6 border-t border-sand">
                  <span className="text-xs tracking-widest text-navy">記事を読む</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
