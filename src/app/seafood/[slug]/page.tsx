import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { seafoodCatalog } from "@/data/seafood";

export async function generateStaticParams() {
  return seafoodCatalog.map((item) => ({
    slug: item.slug,
  }));
}

export default async function SeafoodDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const item = seafoodCatalog.find((s) => s.slug === resolvedParams.slug);

  if (!item) {
    notFound();
  }

  return (
    <div className="bg-ivory min-h-screen">
      {/* Hero Image */}
      <div className="relative w-full h-[60vh] md:h-[70vh] bg-navy">
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="100vw"
          quality={90}
          className="object-cover opacity-80"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
        
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-vermilion text-lg font-serif mb-2 block">{item.japaneseName}</span>
              <h1 className="text-5xl md:text-7xl font-serif text-ivory tracking-wide">{item.name}</h1>
            </div>
            <div className="text-ivory/80 tracking-widest text-sm flex flex-col items-start md:items-end gap-2 border-l-2 md:border-l-0 md:border-r-2 border-vermilion pl-4 md:pl-0 md:pr-4">
              <span>産地: {item.origin}</span>
              <span>旬: {item.season}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Details Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Main Description */}
          <div className="lg:col-span-7">
            <h2 className="text-2xl font-serif text-navy mb-6 tracking-widest border-b border-sand pb-4">海鮮の特徴</h2>
            <p className="text-charcoal/80 text-lg leading-relaxed mb-12">
              {item.description}
            </p>

            <h2 className="text-2xl font-serif text-navy mb-6 tracking-widest border-b border-sand pb-4 mt-16">味わいと食感</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-sm tracking-widest text-charcoal/50 mb-2">味わい</h3>
                <p className="text-charcoal/80 font-serif text-lg">{item.tasteProfile}</p>
              </div>
              <div>
                <h3 className="text-sm tracking-widest text-charcoal/50 mb-2">食感</h3>
                <p className="text-charcoal/80 font-serif text-lg">{item.texture}</p>
              </div>
              <div>
                <h3 className="text-sm tracking-widest text-charcoal/50 mb-2">おすすめの調理法</h3>
                <p className="text-charcoal/80 font-serif text-lg">{item.recommendedPrep}</p>
              </div>
            </div>
          </div>

          {/* Sidebar Info */}
          <div className="lg:col-span-4 lg:col-start-9">
            <div className="bg-sand/30 p-8 border border-sand">
              <h3 className="font-serif text-xl text-navy mb-6 text-center border-b border-charcoal/10 pb-4">調達情報</h3>
              
              <dl className="space-y-6">
                <div>
                  <dt className="text-xs tracking-widest text-charcoal/50 mb-1">漁獲方法</dt>
                  <dd className="text-charcoal">{item.fishingMethod}</dd>
                </div>
                <div>
                  <dt className="text-xs tracking-widest text-charcoal/50 mb-1">提供状況</dt>
                  <dd className="text-charcoal">{item.availability}</dd>
                </div>
              </dl>

              <div className="mt-12 text-center">
                <Link href="/contact" className="block w-full bg-navy text-ivory py-4 tracking-widest text-sm hover:bg-vermilion transition-colors duration-300">
                  仕入れのお問い合わせ
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>
      
      {/* Next/Prev Navigation could go here, for now a back link */}
      <section className="py-12 border-t border-sand text-center">
        <Link href="/seafood" className="text-sm tracking-widest text-charcoal/60 hover:text-navy transition-colors">
          海鮮一覧へ戻る
        </Link>
      </section>
    </div>
  );
}
