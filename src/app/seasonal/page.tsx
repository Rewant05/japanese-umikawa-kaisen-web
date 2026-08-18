import Link from "next/link";
import { seafoodCatalog } from "@/data/seafood";
import Image from "next/image";

export default function Seasonal() {
  // Mock filter for seasonal items
  const winterItems = seafoodCatalog.filter(item => item.season.includes("冬") || item.season.includes("通年"));

  return (
    <div className="bg-sand min-h-screen">
      <section className="pt-32 pb-16 px-6 text-center max-w-4xl mx-auto">
        <span className="text-vermilion tracking-widest text-sm mb-4 block">Shun (旬)</span>
        <h1 className="text-4xl md:text-5xl font-serif text-navy mb-6 tracking-widest">冬の厳選</h1>
        <p className="text-charcoal/80 text-lg leading-relaxed">
          日本の伝統的な食文化において、「旬」とは食材がその頂点に達する正確な瞬間を指します。
          凍てつく冬の海は、他に類を見ない豊かな脂と極上の風味を持つ海鮮を育みます。
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {winterItems.map(item => (
            <Link key={item.slug} href={`/seafood/${item.slug}`} className="group bg-ivory flex flex-col md:flex-row overflow-hidden hover:shadow-lg transition-shadow duration-500">
              <div className="relative w-full md:w-1/2 h-64 md:h-auto bg-navy">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                />
              </div>
              <div className="p-8 w-full md:w-1/2 flex flex-col justify-center">
                <span className="text-vermilion text-xs tracking-widest mb-2">{item.japaneseName}</span>
                <h2 className="text-2xl font-serif text-navy mb-4">{item.name}</h2>
                <p className="text-charcoal/70 text-sm leading-relaxed mb-6 line-clamp-3">
                  {item.description}
                </p>
                <span className="text-xs tracking-widest text-navy border-b border-navy self-start pb-1">
                  詳細を見る
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
