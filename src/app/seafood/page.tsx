import Image from "next/image";
import Link from "next/link";
import { seafoodCatalog } from "@/data/seafood";

export default function SeafoodCatalog() {
  return (
    <div className="bg-ivory min-h-screen pb-24">
      {/* Header */}
      <section className="pt-24 pb-16 px-6 border-b border-sand text-center bg-ivory">
        <h1 className="text-4xl md:text-5xl font-serif text-navy mb-6 tracking-widest">最高級海鮮一覧</h1>
        <p className="text-charcoal/70 max-w-2xl mx-auto font-light leading-relaxed">
          日本全国から厳選された最高級の海鮮コレクション。代々続く漁師から直接買い付け、品質と鮮度への徹底したこだわりと共にお届けします。
        </p>
      </section>

      {/* Catalog Grid */}
      <section className="max-w-7xl mx-auto px-6 pt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
          {seafoodCatalog.map((item) => (
            <Link key={item.slug} href={`/seafood/${item.slug}`} className="group block">
              <div className="relative h-[60vh] md:h-[45vh] w-full overflow-hidden mb-6 bg-navy">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />
              </div>
              <div className="flex justify-between items-start mb-2">
                <h2 className="text-2xl font-serif text-navy">{item.name}</h2>
                <span className="text-sm font-serif text-vermilion">{item.japaneseName}</span>
              </div>
              <p className="text-charcoal/60 tracking-wider text-xs mb-4">{item.origin}</p>
              <div className="w-full h-[1px] bg-sand group-hover:bg-navy transition-colors duration-300" />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
