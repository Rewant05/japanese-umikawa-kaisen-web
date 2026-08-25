export interface SeafoodItem {
  slug: string;
  name: string;
  japaneseName: string;
  origin: string;
  season: string;
  fishingMethod: string;
  tasteProfile: string;
  texture: string;
  recommendedPrep: string;
  availability: string;
  description: string;
  image: string;
}

export const seafoodCatalog: SeafoodItem[] = [
  {
    slug: "bluefin-tuna",
    name: "本マグロ",
    japaneseName: "本マグロ (Hon Maguro)",
    origin: "青森県 大間",
    season: "冬（12月〜2月）",
    fishingMethod: "一本釣り",
    tasteProfile: "酸味と甘みの完璧なバランスを備えた、深く豊かな旨味。",
    texture: "口の中でとろけるような大トロから、しっかりとした食感の赤身まで。",
    recommendedPrep: "刺身、握り寿司、または軽く炙って（炙り）。",
    availability: "季節限定・数量限定",
    description: "津軽海峡の冷たい海流で育った大間のマグロは、日本の海鮮の最高峰とされています。魚へのストレスを最小限に抑え、身の品質を保つために伝統的な一本釣りで漁獲されます。",
    image: "/images/tuna_1787649919528.jpg"
  },
  {
    slug: "hokkaido-uni",
    name: "エゾバフンウニ",
    japaneseName: "ウニ (Uni)",
    origin: "北海道 利尻島",
    season: "夏（6月〜8月）",
    fishingMethod: "海女による素潜り手摘み",
    tasteProfile: "苦味が全くなく、磯の香りと共に驚くほどの甘みが広がる。",
    texture: "クリーミーで、舌の上で瞬時にとろける滑らかさ。",
    recommendedPrep: "軍艦巻き、温かいご飯に乗せて、またはそのまま生で。",
    availability: "極めて希少",
    description: "利尻島のウニは最高級の利尻昆布のみを食べて育つため、比類のない甘みと鮮やかな黄金色を持ちます。繊細な身を崩さないよう、一つ一つ丁寧に手作業で収穫されます。",
    image: "/images/uni_1787649975343.jpg"
  },
  {
    slug: "botan-ebi",
    name: "ボタンエビ",
    japaneseName: "ボタンエビ (Botan Ebi)",
    origin: "富山県 富山湾",
    season: "秋〜春",
    fishingMethod: "深海かご漁",
    tasteProfile: "際立つ甘みと、繊細な磯の余韻。",
    texture: "肉厚でジューシー、かつ特有のねっとりとした食感。",
    recommendedPrep: "自然な甘みを最大限に楽しむための刺身。",
    availability: "シーズン中は安定",
    description: "富山湾の冷たい深海で漁獲されます。水深の深さと低水温が、ボタンエビ特有の弾力のある食感と深い甘みを生み出します。",
    image: "/images/shrimp_1787649988837.jpg"
  },
  {
    slug: "hokkaido-scallops",
    name: "ホタテ",
    japaneseName: "ホタテ (Hotate)",
    origin: "北海道 猿払",
    season: "通年（旬は冬）",
    fishingMethod: "地撒き（じまき）漁",
    tasteProfile: "純粋な甘みと、雑味のないすっきりとした旨味。",
    texture: "肉厚で柔らかく、心地よい繊維感。",
    recommendedPrep: "刺身、または醤油とバターでの軽い網焼き。",
    availability: "通年提供可能",
    description: "栄養豊富なオホーツク海の極寒の海域で育ちます。猿払のホタテはその巨大なサイズと際立つ甘みで知られ、海底の環境を尊重しながら育てられています。",
    image: "/images/scallop_1787650013010.jpg"
  },
  {
    slug: "hamachi",
    name: "ハマチ",
    japaneseName: "ハマチ (Hamachi)",
    origin: "鹿児島県",
    season: "冬",
    fishingMethod: "持続可能な養殖",
    tasteProfile: "濃厚で脂が乗り、しっかりとした風味。",
    texture: "滑らかでオイリー、口溶けが良い。",
    recommendedPrep: "刺身、握り、またはカマの塩焼き。",
    availability: "通年提供可能",
    description: "鹿児島の急流で育てられたハマチは、脂肪と筋肉の完璧なバランスを備えています。日本の養殖技術の粋を集めた、格別に豊かな風味が特徴です。",
    image: "/images/hamachi_1787650025896.jpg"
  }
];
