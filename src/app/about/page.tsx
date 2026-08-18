import Image from "next/image";

export default function About() {
  return (
    <div className="bg-ivory min-h-screen">
      <section className="pt-32 pb-20 px-6 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif text-navy mb-8 tracking-widest">私たちの歴史</h1>
        <p className="text-charcoal/80 text-lg leading-relaxed mb-12">
          海と、その恵みを収穫する職人たちへの深い敬意に基づいて設立された海川（UMIKAWA）は、日本の最も辺鄙な漁村と世界中の最高級の料理機関との間の架け橋となるために生まれました。
        </p>
      </section>

      <section className="relative w-full h-[50vh] md:h-[70vh]">
        <Image
          src="https://images.unsplash.com/photo-1544253139-44026600c064?q=80&w=2070&auto=format&fit=crop"
          alt="日本の伝統的な船"
          fill
          sizes="100vw"
          className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
        />
      </section>

      <section className="py-24 px-6 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-serif text-navy mb-6 tracking-wide">海川の基準</h2>
            <p className="text-charcoal/80 leading-relaxed mb-6">
              私たちは単に海鮮を買うのではありません。厳選するのです。私たちのバイヤーは北海道、九州、富山などの主要な港に駐在し、夜明け前にすべての獲物を検査しています。
            </p>
            <p className="text-charcoal/80 leading-relaxed">
              私たちは、魚が本来持つ食感と風味プロファイルを維持し、品質を劣化させる乳酸の蓄積を防ぐために、神経締めなどの伝統的な方法を必須としています。
            </p>
          </div>
          <div className="relative h-[60vh] bg-navy p-8 text-ivory flex flex-col justify-center border-l-4 border-vermilion">
            <blockquote className="text-2xl font-serif leading-relaxed mb-6">
              「海鮮における真の贅沢は、単なる希少性ではありません。それは旬、産地、そして取り扱いの完璧な交差点なのです。」
            </blockquote>
            <cite className="text-sm tracking-widest text-ivory/70">— 高橋 K. (チーフバイヤー)</cite>
          </div>
        </div>
      </section>
    </div>
  );
}
