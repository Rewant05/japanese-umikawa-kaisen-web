export default function Sourcing() {
  const regions = [
    {
      name: "北海道",
      description: "栄養分が豊富で冷たいオホーツク海は、日本最高品質のウニ、ホタテ、イクラを育みます。函館や札幌に駐在する弊社のバイヤーが、毎日最高級の競り落としを行っています。",
      specialties: ["ウニ", "ホタテ", "イクラ"]
    },
    {
      name: "富山・石川",
      description: "深く冷たい日本海は、格別な冬の魚介類で有名です。富山湾の急峻な海底地形は、深海魚にとって完璧な環境を作り出しています。",
      specialties: ["ボタンエビ", "ズワイガニ", "ブリ"]
    },
    {
      name: "九州・長崎",
      description: "南部の暖かく速い海流は、信じられないほど引き締まった身と、きれいで上品な脂を持つ魚を育てます。長崎は日本でも最も多様な海鮮の水揚げを誇ります。",
      specialties: ["本マグロ（養殖）", "アジ", "タイ"]
    }
  ];

  return (
    <div className="bg-ivory min-h-screen">
      <section className="pt-32 pb-20 px-6 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif text-navy mb-8 tracking-widest">産地マップ</h1>
        <p className="text-charcoal/80 text-lg leading-relaxed mb-12">
          特徴的な海流に囲まれた日本の地理は、全く異なる風味プロファイルを生み出す独自の微小環境を作り出しています。私たちはすべての獲物を、特定の港と漁船に至るまで追跡しています。
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="space-y-16">
          {regions.map((region, idx) => (
            <div key={idx} className="border border-sand p-8 md:p-12 bg-white flex flex-col md:flex-row gap-12 items-start hover:border-navy transition-colors duration-500">
              <div className="md:w-1/3">
                <h2 className="text-3xl font-serif text-navy mb-4">{region.name}</h2>
                <div className="w-12 h-1 bg-vermilion mb-6"></div>
              </div>
              <div className="md:w-2/3">
                <p className="text-charcoal/80 text-lg leading-relaxed mb-8">
                  {region.description}
                </p>
                <div>
                  <h3 className="text-xs tracking-widest text-charcoal/50 mb-3">主な特産品</h3>
                  <div className="flex flex-wrap gap-3">
                    {region.specialties.map(spec => (
                      <span key={spec} className="px-4 py-2 border border-sand text-sm text-navy bg-ivory">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
