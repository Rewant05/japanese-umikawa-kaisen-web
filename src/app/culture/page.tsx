import Image from "next/image";
import Link from "next/link";

export default function Culture() {
  return (
    <div className="bg-navy text-ivory min-h-screen">
      <section className="pt-32 pb-20 px-6 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif mb-8 tracking-widest text-ivory">海鮮の文化</h1>
        <p className="text-ivory/70 text-lg leading-relaxed mb-12">
          「海鮮」とは単なる新鮮な魚介類を意味する言葉ではありません。日本では、海への敬意、細部への徹底したこだわり、そして完璧さへの絶え間ない追求という、哲学全体を包含しています。
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative h-[60vh]">
            <Image
              src="https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?q=80&w=1974&auto=format&fit=crop"
              alt="寿司の準備"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-serif mb-6 tracking-wide text-ivory">仕込みの芸術</h2>
            <p className="text-ivory/70 leading-relaxed mb-6">
              海鮮の品質は、水揚げされた時だけで決まるわけではありません。どのように扱われ、血抜きされ、休ませられ、切られるかが、最終的な体験を決定づけます。私たちは、最高級の海鮮には絶対的な精度が必要であることを理解しているシェフたちと提携しています。
            </p>
            <p className="text-ivory/70 leading-relaxed">
              旨味を最大限に引き出すためのマグロの熟成から、自然な甘みを保つためのホタテの素早い下処理まで、すべてのステップが意図的な選択なのです。
            </p>
          </div>
        </div>

        <div className="text-center">
          <Link href="/journal" className="inline-block border border-ivory px-8 py-4 font-serif tracking-widest text-sm hover:bg-ivory hover:text-navy transition-colors">
            読み物でさらに詳しく
          </Link>
        </div>
      </section>
    </div>
  );
}
