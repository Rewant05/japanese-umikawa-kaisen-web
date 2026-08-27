import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen -mt-24">
      {/* Hero Section */}
      <section className="relative min-h-[100dvh] w-full flex items-center justify-center overflow-hidden py-24">
        <div className="absolute inset-0 z-0 bg-navy">
          <Image
            src="/images/hero_waves_1787649888403.jpg"
            alt="日本の海の波"
            fill
            sizes="100vw"
            quality={90}
            className="object-cover opacity-60 mix-blend-overlay"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/40 via-transparent to-ivory" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-ivory mb-6 tracking-widest leading-tight reveal-visible drop-shadow-lg">
            日本海鮮の <br /> 最高峰
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-sand/90 font-light mb-10 max-w-2xl reveal-visible" style={{ transitionDelay: '0.2s' }}>
            日本の豊かな沿岸から、選び抜かれた旬の海鮮を。妥協のない品質でお届けします。
          </p>
          <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-4 sm:gap-6 reveal-visible" style={{ transitionDelay: '0.4s' }}>
            <Link href="/seafood" className="bg-vermilion text-white w-full sm:w-auto px-8 py-4 font-serif tracking-widest text-sm hover:bg-vermilion/90 transition-colors text-center">
              海鮮一覧を見る
            </Link>
            <Link href="/sourcing" className="border border-ivory text-ivory w-full sm:w-auto px-8 py-4 font-serif tracking-widest text-sm hover:bg-ivory hover:text-navy transition-colors text-center">
              産地について
            </Link>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 px-6 bg-ivory">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif text-navy mb-8 tracking-widest">妥協なき品質</h2>
          <p className="text-charcoal/80 leading-relaxed text-lg mb-12">
            海川（UMIKAWA）では、真の贅沢は「産地」と「旬」にあると信じています。北海道、石川、九州など全国の代々続く漁師たちと直接連携し、日本の海の恵みを世界の最高級テーブルへとお届けします。
          </p>
          <Image
            src="/images/seafood_prep_1787649903363.jpg"
            alt="日本の海鮮調理"
            width={800}
            height={500}
            sizes="(max-width: 768px) 100vw, 800px"
            className="w-full h-[60vh] object-cover grayscale hover:grayscale-0 transition-all duration-700"
          />
        </div>
      </section>

      {/* Featured Catches */}
      <section className="py-24 bg-sand px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="text-vermilion font-serif tracking-widest text-sm mb-4 block">旬の厳選</span>
              <h2 className="text-4xl font-serif text-navy tracking-wide">特選海鮮</h2>
            </div>
            <Link href="/seafood" className="hidden md:block border-b border-navy pb-1 text-sm font-serif tracking-widest hover:text-vermilion hover:border-vermilion transition-colors">
              すべての海鮮を見る
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "本マグロ", origin: "青森県 大間", img: "/images/tuna_1787649919528.jpg" },
              { name: "エゾバフンウニ", origin: "北海道 利尻", img: "/images/uni_1787649975343.jpg" },
              { name: "ボタンエビ", origin: "富山湾", img: "/images/shrimp_1787649988837.jpg" }
            ].map((item, i) => (
              <Link href="/seafood" key={i} className="group cursor-pointer block">
                <div className="relative h-[60vh] md:h-[50vh] overflow-hidden mb-6 bg-navy">
                  <Image
                    src={item.img}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  />
                </div>
                <h3 className="text-2xl font-serif text-navy mb-2">{item.name}</h3>
                <p className="text-charcoal/60 tracking-wider text-sm">{item.origin}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Journal / Kaisen Culture */}
      <section className="py-24 px-6 bg-navy text-ivory">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-vermilion font-serif tracking-widest text-sm mb-4 block">読み物</span>
            <h2 className="text-4xl font-serif mb-8 tracking-wide">海鮮の芸術</h2>
            <p className="text-ivory/70 leading-relaxed mb-10">
              日本の海鮮文化の豊かな伝統を探求します。神経締めなどの複雑な技術から、繊細な「旬」の移り変わりまで、日本の海鮮を世界最高峰たらしめる文化を深く掘り下げます。
            </p>
            <Link href="/journal" className="border border-ivory px-8 py-4 font-serif tracking-widest text-sm hover:bg-ivory hover:text-navy transition-colors inline-block">
              記事を読む
            </Link>
          </div>
          <div className="relative h-[70vh]">
            <Image
              src="/images/fisherman_boat_1787650040349.jpg"
              alt="船上の漁師"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
