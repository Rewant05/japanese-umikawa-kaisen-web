import Image from "next/image";

export default function Fishermen() {
  return (
    <div className="bg-ivory min-h-screen">
      <section className="pt-32 pb-16 px-6 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif text-navy mb-6 tracking-widest">提携漁師</h1>
        <p className="text-charcoal/80 text-lg leading-relaxed">
          海川の魂は、荒波に立ち向かう代々続く漁師たちの荒れた手に宿っています。
          私たちは、品質と持続可能性に対する妥協のない献身を共有する漁師とだけ、独占的に提携しています。
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-24 space-y-24">
        
        {/* Profile 1 */}
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2 h-[60vh] relative bg-navy">
            <Image
              src="https://images.unsplash.com/photo-1544253139-44026600c064?q=80&w=2070&auto=format&fit=crop"
              alt="北海道の漁師"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            />
          </div>
          <div className="w-full md:w-1/2">
            <span className="text-vermilion tracking-widest text-sm mb-2 block">青森県 大間</span>
            <h2 className="text-3xl font-serif text-navy mb-6">渡辺家</h2>
            <p className="text-charcoal/80 leading-relaxed mb-6">
              渡辺家は3代にわたり、一本の針と糸でクロマグロを釣り上げる「一本釣り」の技術を実践してきました。この非常に困難な漁法により、マグロへのストレスを最小限に抑え、大間が世界的に有名な理由である、あのとろけるような純白の身を保証します。
            </p>
            <p className="text-charcoal/80 leading-relaxed font-serif italic text-lg border-l-2 border-vermilion pl-4">
              「私たちは海を征服するのではなく、海と対話するのです。すべての獲物は、絶対的な敬意をもって扱われるべき贈り物です。」
            </p>
          </div>
        </div>

        {/* Profile 2 */}
        <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
          <div className="w-full md:w-1/2 h-[60vh] relative bg-navy">
            <Image
              src="https://images.unsplash.com/photo-1534604973900-c4335533cb3f?q=80&w=2098&auto=format&fit=crop"
              alt="三重の海女"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            />
          </div>
          <div className="w-full md:w-1/2">
            <span className="text-vermilion tracking-widest text-sm mb-2 block">北海道 利尻</span>
            <h2 className="text-3xl font-serif text-navy mb-6">収穫の達人 伊藤</h2>
            <p className="text-charcoal/80 leading-relaxed mb-6">
              世界最高峰のウニを収穫するには、単なる技術以上のものが必要です。海底の深い理解が不可欠です。伊藤名人は利尻島の凍てつく海に素潜りし、最高級の昆布だけを食べて育った成熟したウニだけを手作業で選び抜きます。
            </p>
            <p className="text-charcoal/80 leading-relaxed font-serif italic text-lg border-l-2 border-vermilion pl-4">
              「ウニを理解するには、まず昆布の森を理解しなければなりません。それらは一つの生態系なのです。」
            </p>
          </div>
        </div>

      </section>
    </div>
  );
}
