import Link from "next/link";

export default function Recruitment() {
  return (
    <div className="bg-ivory min-h-screen pb-24">
      <section className="pt-32 pb-16 px-6 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif text-navy mb-6 tracking-widest">採用情報</h1>
        <p className="text-charcoal/80 text-lg leading-relaxed">
          現在、募集中のポジションはありません。
        </p>
        <div className="mt-12">
          <Link href="/" className="bg-vermilion text-white px-8 py-4 font-serif tracking-widest text-sm hover:bg-vermilion/90 transition-colors inline-block">
            ホームに戻る
          </Link>
        </div>
      </section>
    </div>
  );
}
