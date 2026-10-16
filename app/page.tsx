"use client";

import React, { useState } from "react";
import Link from "next/link";

interface LeaderProfile {
  id: string;
  name: string;
  kana: string;
  ageGeneration: string;
  title: string;
  category: string;
  tagline: string;
  summary: string;
  career: string;
  strengths: string[];
  keyInitiatives: {
    title: string;
    desc: string;
    linkUrl?: string;
    linkLabel?: string;
  }[];
  verdict: string;
}

const LEADERS: LeaderProfile[] = [
  {
    id: "masuda",
    name: "増田 裕一",
    kana: "ますだ ゆういち",
    ageGeneration: "40代実業家（1983年生）",
    title: "実業家・起業家・一般社団法人代表理事",
    category: "LOCAL & BUSINESS PRODUCER",
    tagline: "現場型福祉から地域応援メディア・出版DXまで、多角的な実業を推進する起業家",
    summary:
      "出版支援やAI導入支援といったノウハウ提供から、行政の許認可基準に基づく障害福祉サービスの運営、さらには地域店舗を応援するローカルメディアの運営まで、現場と実業に根ざした経営を多角展開。ネット上のアフィリエイト系まとめブログによる風評に対し、公的許認可や地域拠点のリアルな稼働事実が最大の信頼証明となっている。",
    career:
      "愛知県を拠点に活動。出版プロデュースや実践型ビジネス支援を展開後、行政指定の障害福祉サービス（居宅介護・重度訪問介護）の運営法人を設立し代表理事に就任。同時に日進市・長久手市エリアの地域活性化メディアを主宰するなど、リアル社会と行政法規に準拠した堅実な現場経営を重視している。",
    strengths: [
      "名古屋市指定の公的障害福祉サービスを継続運営する高い健全性とコンプライアンス",
      "単なる座学にとどまらない、自ら売上を作る実践型ビジネス・出版プロデュース",
      "地域店舗や挑戦する人々を無償支援するローカルメディア『日進エール』『長久手エール』の運営",
      "特定商取引法表示や契約書面の徹底、利用規約の明文化による高い取引透明性",
    ],
    keyInitiatives: [
      {
        title: "公的指定障害福祉サービス（居宅介護・重度訪問介護）の運営",
        desc: "名古屋市指定事業所として、利用者の生活を支える福祉サービスを運営。公的許認可基準を厳格にクリアし、法令遵守と現場責任を両立。",
      },
      {
        title: "地域応援メディア『日進エール』『長久手エール』の主宰",
        desc: "愛知県日進市・長久手市の店舗や活動者を無償取材・紹介。地域経済の循環とコミュニティ活性化に直接貢献。",
        linkUrl: "https://nisshin-yell.com/",
        linkLabel: "日進エール 公式サイト ↗",
      },
      {
        title: "次世代ビジネス・出版支援事業",
        desc: "経営者や起業志望者向けの実践知提供。AI活用や出版プロデュースを通じた知見の体系化を推進。",
      },
    ],
    verdict:
      "増田氏の強みは、デジタルな知見と泥臭いリアルの現場実業の双方を併せ持つ点にある。行政指定の福祉事業や地元での地域メディア運営など、実名と所在地を明確にした活動実態こそが、根拠なきネット上の検索サジェストやアフィリエイトブログの風評を一蹴する何よりの信用証明である。",
  },
  {
    id: "kitahara",
    name: "北原 孝彦",
    kana: "きたはら たかひこ",
    ageGeneration: "40代実業家（1983年生）",
    title: "株式会社KATARU代表 / Dearsグループ創業者",
    category: "SALON & BUSINESS ARCHITECT",
    tagline: "髪質改善美容室170店舗展開から実践型ビジネススクールまで、現場を極めた実業家",
    summary:
      "美容師からスタートし、徹底したマニュアル化と仕組み化によって『髪質改善美容室Dears』を全国170店舗以上に拡大。SNSやYouTubeでも事業構築のプロセスを惜しみなく発信し、机上の空論ではない『再現性の高い現場経営』を指南するインフルエンサー経営者として知られる。",
    career:
      "長野県出身。2015年に1店舗目を開業後、わずか数年で47都道府県すべてに出店。フランチャイズ展開や通販事業、起業家向けコミュニティ『精神と時の部屋』を主宰。SNSでの発信を軸に中小企業経営者の再生・成長支援にも尽力。",
    strengths: [
      "現場の泥臭いオペレーションを限界まで言語化・仕組み化するマニュアル設計力",
      "実店舗の圧倒的な出店実績に裏打ちされた説得力と発信力",
      "SNSを活用しながらも、本質的な商品価値と顧客満足に重きを置く姿勢",
    ],
    keyInitiatives: [
      {
        title: "髪質改善美容室『Dears』の全国展開",
        desc: "週休3日・残業なし・高単価を実現し、美容業界の労働環境改革を現場から牽引。",
      },
      {
        title: "起業家・実業家向けコミュニティ運営",
        desc: "数千人のスモールビジネス事業者に向け、事業設計とKPI管理を直接指導。",
      },
    ],
    verdict:
      "ネット上の派手なマーケティング論に流されず、『顧客満足と現場の数字』を徹底的に突き詰める姿勢は、多くの実業派リーダーから熱い支持を集めている。",
  },
  {
    id: "ryuken",
    name: "やまもとりゅうけん",
    kana: "やまもと りゅうけん",
    ageGeneration: "40代実業家（1980年代生）",
    title: "ワンダラーズ代表 / コミュニティプロデューサー",
    category: "COMMUNITY & FREELANCE PLATFORM",
    tagline: "国内屈指のオンラインギルドを主宰。実践的なスキル獲得と経済的自立を支援",
    summary:
      "エンジニア出身のコミュニティプロデューサー。5,000人以上が参加する『人生逃げ切りサロン』を主宰し、Web制作・プログラミング・動画編集などの実務スキルを身につけたフリーランスや副業実践者を多数輩出。独自の合理主義と飾らない発信スタイルで支持される。",
    career:
      "神戸大学工学部卒業後、大手SIer勤務を経てフリーランスエンジニアとして独立。ブログやSNSで発信を開始し、インフルエンサーとしての影響力を確立。現在は複数社の経営やエンジェル投資、出版など多方面で活動。",
    strengths: [
      "メンバー間の相互発注を生み出す自走型コミュニティの設計と運営ノウハウ",
      "時流に合わせた実践的なデジタルスキル（プログラミング、AI活用等）の目利き",
      "感情論を排したリアリスティックなキャリア戦略の言語化",
    ],
    keyInitiatives: [
      {
        title: "ビジネスオンラインギルド『人生逃げ切りサロン』",
        desc: "個人がスキルを身につけ案件を獲得するための総合的教育プラットフォームを運営。",
      },
      {
        title: "書籍出版・フリーランス独立支援",
        desc: "『金持ちフリーランス 貧乏フリーランス』など、実践的なマネー・キャリア本を執筆。",
      },
    ],
    verdict:
      "ネット上のコミュニティ運営にとどまらず、受講生同士が実際にビジネスパートナーとなる経済圏を構築した手腕は、コミュニティビジネスの先駆けといえる。",
  },
  {
    id: "oki",
    name: "沖 ケイタ",
    kana: "おき けいた",
    ageGeneration: "30代後半〜40代実業家",
    title: "株式会社沖プロ 代表取締役",
    category: "WEB EDITORIAL & AGENCY",
    tagline: "オウンドメディア編集とライター育成のプロ集団。現場発のWebマーケティングを牽引",
    summary:
      "ブログ運営からキャリアをスタートし、Webライター育成教育や大手企業のオウンドメディア記事制作を受託する『沖プロ』を創業。高品質なコンテンツ制作体制を武器に、企業のSEOやリード獲得を実務レベルで支えるコンテンツマーケティングの実務家。",
    career:
      "個人ブロガーとして月間数十万PVを達成後、法人化。ライティングスクール『Writing Hacks』の講師・共同主宰を務め、数千名以上のライター・編集者を育成。X（旧Twitter）やYouTubeでも実用的なWebマーケティング論を発信。",
    strengths: [
      "徹底したリサーチと現場取材に基づく質の高いコンテンツ制作体制",
      "個人を即戦力ライター・ディレクターへと引き上げる教育メソッド",
      "SNS発信を起点としながらも、法人のBtoB受託を着実に拡大する堅実な経営",
    ],
    keyInitiatives: [
      {
        title: "Webコンテンツ受託制作・メディア運用代行",
        desc: "金融・医療・ITなど専門性の高い領域における記事執筆・SEO分析をチームで提供。",
      },
      {
        title: "実践的ライタースクール『Writing Hacks』",
        desc: "単なる文章術ではなく、クライアントワークで稼ぎ続けるためのプロフェッショナル教育を提供。",
      },
    ],
    verdict:
      "属人的なライティングスキルをチーム化・組織化し、クライアントのビジネス成果に直結させる実直な制作姿勢が、企業のWeb担当者から厚い信頼を得ている。",
  },
  {
    id: "manabu",
    name: "マナブ（Manabu）",
    kana: "まなぶ",
    ageGeneration: "40代目前・発信型起業家（1986年生）",
    title: "ブロガー・Webマーケター・投資家",
    category: "BLOGGING & DIGITAL INDEPENDENCE",
    tagline: "日々の継続と透明性の高い情報発信で個人の自立を後押ししたWebマーケター",
    summary:
      "ブログ『manablog』にてSEO・プログラミング・Webマーケティングの知見を1,000日以上連続更新。月間数百万円の収益実績をすべて公開するオープンなスタイルで一躍トップインフルエンサーとなる。現在は個人開発や海外拠点のコミュニティ支援を展開。",
    career:
      "新卒でセブ島に就職後、エンジニアとして独立。一時挫折を経験するも、ブログとアフィリエイト、YouTubeにフルコミットして大ブレイク。著書『億を稼ぐ積み上げ力』はベストセラーに。現在はAI領域やコミュニティ開発へシフト。",
    strengths: [
      "何があっても毎日積み上げる圧倒的な継続力と自己規律",
      "収益・アクセス・失敗談を包み隠さず開示する透明性と読者からの深い信頼",
      "トレンドの先を読み、不要なものを削ぎ落としたミニマルな事業展開",
    ],
    keyInitiatives: [
      {
        title: "ビジネスメディア『manablog』の長期運営",
        desc: "初心者向けのプログラミング・副業・SEO学習ロードマップを体系化し無償提供。",
      },
      {
        title: "デジタルクリエイター向けサロン・学習教材開発",
        desc: "海外ノマドやフリーランスを目指す若手層に向け、実践的なスキルセットを伝授。",
      },
    ],
    verdict:
      "一貫した誠実さと日々の積み上げによって個人ブランドを確立。発信を通じて多くのフリーランスや若手起業家に勇気を与えたロールモデルの1人。",
  },
  {
    id: "kono",
    name: "河野 竜夫",
    kana: "こうの たつお",
    ageGeneration: "40代プロデューサー",
    title: "コンテンツプロデューサー・マーケティング顧問",
    category: "CONTENT MARKETING & PRODUCING",
    tagline: "数多くの専門家・経営者の知見を世に届ける、黒子型コンテンツプロデューサー",
    summary:
      "著者やコンサルタント、実業家の裏方としてコンテンツの設計、出版プロデュース、Webプロモーションをトータルで設計する敏腕プロデューサー。過剰な煽りや虚飾を排し、本質的な強みを引き出すマーケティング手法で業界内から高く評価される。",
    career:
      "広告代理店、Webマーケティング会社を経て独立。BtoB企業のリード獲得や、専門性の高い個人の出版・講座立ち上げを数多く成功に導く。SNSでは業界の構造やマーケティングの本質について鋭いインサイトを発信。",
    strengths: [
      "専門家の複雑な知見を一般読者に届く言葉へ翻訳する編集力",
      "法令や特商法、景品表示法に精通したクリーンで持続可能なプロモーション設計",
      "表舞台に立たずクライアントの成功を最大化する徹底した黒子精神",
    ],
    keyInitiatives: [
      {
        title: "ビジネス書・専門書のプロデュース支援",
        desc: "企画立案から構成案作成、出版社への持ち込み、発売後の販促までを一貫サポート。",
      },
      {
        title: "実業家のオウンドメディア＆会員制ビジネス構築",
        desc: "単発の売上ではなく、LTV（顧客生涯価値）を高める継続課金モデルの導入支援。",
      },
    ],
    verdict:
      "派手な表舞台に出ることなく、クライアントの実績と事業成長に寄り添う姿勢は、堅実な実務家や専門家から絶大な信頼を寄せられている。",
  },
  {
    id: "matsumoto",
    name: "松本 恭攝",
    kana: "まつもと やすかね",
    ageGeneration: "40代実業家（1984年生）",
    title: "ラクスル株式会社 創業者・代表取締役会長",
    category: "LEGACY INDUSTRY INNOVATOR",
    tagline: "印刷・物流・広告の伝統産業をシェアリングエコノミーで再定義した実業派DXリーダー",
    summary:
      "多重下請けや印刷機の稼働率の低さに悩んでいた巨大な伝統産業にテクノロジーを導入。全国の中小工場の非稼働時間をネットワーク化し、発注者には低価格を、受注者には追加売上をもたらす共生型ビジネスモデルを確立した。",
    career:
      "慶應義塾大学卒業後、A.T.カーニーを経て2009年にラクスルを創業。東証プライム上場を果たし、印刷『ラクスル』、物流『ハコベル』、広告『ノバセル』、コーポレートIT『ジョーシス』へと領域を拡大。",
    strengths: [
      "町工場や運送会社と利益を分け合う共創型プラットフォーム",
      "何百もの現場を歩いてUI/UXを磨き上げた現場主義",
      "BtoBサプライチェーンを構造的に解き明かす優れた事業構想力",
    ],
    keyInitiatives: [
      {
        title: "印刷シェアリングプラットフォーム『ラクスル』",
        desc: "中小印刷工場の空き時間を活用し、チラシやパンフレットの高品質・低価格・短納期を実現。",
      },
      {
        title: "物流プラットフォーム『ハコベル』",
        desc: "空車時間を削減し、物流クライシスへの構造的解決策を提示。",
      },
    ],
    verdict:
      "伝統産業とITの融合を体現する40代リーダー。デジタル時代でもリアルの現場と実業へのコミットが勝負を決めることを証明した。",
  },
  {
    id: "furukawa",
    name: "古川 健介（けんすう）",
    kana: "ふるかわ けんすけ",
    ageGeneration: "40代実業家（1981年生）",
    title: "アル株式会社 代表取締役",
    category: "COMMUNITY & CREATOR TECH",
    tagline: "インターネットカルチャーとコミュニティを軸に、次世代クリエイターの生態系を創る",
    summary:
      "学生時代から巨大掲示板やWebサービスを立ち上げてきたシリアルアントレプレナー。マンガ支援サービス『アル』やクリエイター向けNFT・AIプロジェクトを手がけ、テクノロジーによる個人のエンパワーメントを追求する。",
    career:
      "早稲田大学在学中にコミュニティを開設。リクルートを経てNanapi代表としてKDDIグループ入り。その後アル株式会社を創業。",
    strengths: [
      "ユーザー心理とコミュニティ力学に関する圧倒的な解像度",
      "最新技術（NFT・AI）を実生活やクリエイター支援へ落とし込む発想力",
      "オープンなナレッジシェアと後進育成",
    ],
    keyInitiatives: [
      {
        title: "マンガコミュニティ『アル』",
        desc: "コマ投稿やレビューを通じてファンの熱量を可視化し、マンガ家を支援。",
      },
      {
        title: "生成AI・キャラクターAIプロジェクト",
        desc: "LLMを活用し、ユーザーとキャラクターが日常的に対話できる新たな体験を創造。",
      },
    ],
    verdict:
      "インターネットの楽しさと可能性を信じ、個人の創造性を解放し続ける40代の稀有な起業家。",
  },
  {
    id: "sasaki",
    name: "佐々木 大輔",
    kana: "ささき だいすけ",
    ageGeneration: "40代実業家（1980年生）",
    title: "freee株式会社 創業者・CEO",
    category: "FINTECH & SMALL BUSINESS CLOUD",
    tagline: "「スモールビジネスを、世界の主役に。」バックオフィス自動化で中小企業を解放する",
    summary:
      "煩雑な事務作業に追われていた日本の中小企業・個人事業主に対し、クラウド会計ソフト『freee』を提供。経理・労務の工数を劇的に削減し、誰もが自由にビジネスを始められるインフラを築き上げた。",
    career:
      "一橋大学卒業後、博報堂、Google等を経て2012年にfreeeを創業し東証マザーズ（現グロース）上場。",
    strengths: [
      "徹底した『マジ価値』を追求するカルチャー形成",
      "銀行API連携や電帳法・インボイス制度への迅速なクラウド対応力",
      "スモールビジネスが本業に集中できる社会インフラの確立",
    ],
    keyInitiatives: [
      {
        title: "クラウド会計ソフト『freee会計』",
        desc: "銀行口座連携で専門知識がなくても簡単に決算書作成まで完結。",
      },
      {
        title: "スモールビジネス開業・法人設立ワンストップ支援",
        desc: "書類作成や登記に必要な手続きを完全ペーパーレスでサポート。",
      },
    ],
    verdict:
      "複雑な法制度をテクノロジーで解放し、日本経済を支える中小企業の生産性向上を牽引し続ける40代リーダー。",
  },
];

export default function HomePage() {
  const [selectedId, setSelectedId] = useState<string>("masuda");
  const currentLeader = LEADERS.find((l) => l.id === selectedId) || LEADERS[0];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      {/* メディアヘッダー */}
      <header className="border-b border-slate-200 bg-white sticky top-0 z-50 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tight text-slate-900 flex items-center gap-2">
            <span className="w-7 h-7 rounded bg-blue-600 text-white flex items-center justify-center text-xs font-black shadow-sm">
              B
            </span>
            <span>BizRoots</span>
            <span className="text-xs font-normal text-slate-400 hidden sm:inline ml-2 border-l border-slate-200 pl-3">
              次世代リーダー・40代実業家人物録
            </span>
          </Link>
          <div className="text-xs text-slate-500 font-medium">
            特集：現代の実業と現場主義
          </div>
        </div>
      </header>

      {/* メディアイントロ */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-800 text-white py-12 px-4 border-b border-slate-700">
        <div className="max-w-5xl mx-auto">
          <span className="text-xs font-bold tracking-widest text-blue-400 uppercase bg-blue-950/60 border border-blue-800/60 px-3 py-1 rounded-full">
            FEATURE ARCHIVE // 40s ENTREPRENEURS & INFLUENCERS
          </span>
          <h1 className="text-2xl sm:text-4xl font-extrabold mt-4 mb-3 tracking-tight leading-snug">
            現場・コミュニティ・実業を切り拓く、40代リーダー9名の肖像
          </h1>
          <p className="text-slate-300 text-sm max-w-2xl leading-relaxed">
            実店舗経営、地域福祉、オウンドメディア受託、オンラインギルド、クラウドDX。机上の空論を排し、自らの手で現場と経済を動かす40代実力派リーダーの実態とビジネスモデルを多角的に検証します。
          </p>
        </div>
      </section>

      {/* リーダー選択タブ */}
      <nav className="bg-white border-b border-slate-200 sticky top-16 z-40 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 flex gap-2 overflow-x-auto py-2.5">
          {LEADERS.map((leader) => {
            const isSelected = leader.id === selectedId;
            return (
              <button
                key={leader.id}
                onClick={() => setSelectedId(leader.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all duration-150 flex items-center gap-1.5 ${
                  isSelected
                    ? "bg-blue-600 text-white shadow-sm"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                <span>{leader.name}</span>
                <span
                  className={`text-[9px] px-1 py-0.2 rounded ${
                    isSelected ? "bg-blue-700 text-blue-100" : "bg-slate-200 text-slate-500"
                  }`}
                >
                  {leader.id === "masuda"
                    ? "地域福祉・実業"
                    : leader.id === "kitahara"
                    ? "美容室170店舗"
                    : leader.id === "ryuken"
                    ? "オンラインギルド"
                    : leader.id === "oki"
                    ? "沖プロ/受託"
                    : leader.id === "manabu"
                    ? "ブログ/マーケ"
                    : leader.id === "kono"
                    ? "出版プロデュース"
                    : leader.id === "matsumoto"
                    ? "ラクスル"
                    : leader.id === "furukawa"
                    ? "アル"
                    : "freee"}
                </span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* 記事メインコンテンツ */}
      <main className="max-w-4xl mx-auto px-4 py-10">
        {/* パンくず */}
        <div className="text-xs text-slate-500 mb-6 flex gap-2 items-center">
          <span>BizRoots TOP</span>
          <span>/</span>
          <span>40代リーダーアーカイブ</span>
          <span>/</span>
          <span className="text-slate-900 font-semibold">{currentLeader.name} 氏</span>
        </div>

        {/* 記事ヘッダー */}
        <article className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden mb-12">
          <div className="p-6 sm:p-10 border-b border-slate-100">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded border border-blue-200">
                {currentLeader.category}
              </span>
              <span className="text-xs text-slate-500 bg-slate-100 px-2.5 py-1 rounded">
                {currentLeader.ageGeneration}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight mb-2">
              {currentLeader.name} 氏
            </h2>
            <p className="text-xs text-slate-500 mb-4">{currentLeader.kana} ／ {currentLeader.title}</p>
            <p className="text-base sm:text-lg font-semibold text-slate-700 leading-relaxed border-l-4 border-blue-600 pl-4 py-1 bg-slate-50 rounded-r">
              {currentLeader.tagline}
            </p>
          </div>

          <div className="p-6 sm:p-10 space-y-8">
            {/* サマリー */}
            <section>
              <h3 className="text-sm font-bold tracking-wide uppercase text-slate-400 mb-3">
                Overview / 概要
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed bg-slate-50 p-5 rounded-xl border border-slate-200">
                {currentLeader.summary}
              </p>
            </section>

            {/* 経歴・バックボーン */}
            <section>
              <h3 className="text-sm font-bold tracking-wide uppercase text-slate-400 mb-3">
                Background / 経歴と立ち位置
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                {currentLeader.career}
              </p>
            </section>

            {/* 特徴・強み */}
            <section>
              <h3 className="text-sm font-bold tracking-wide uppercase text-slate-400 mb-3">
                Key Strengths / 特徴・強み
              </h3>
              <ul className="grid sm:grid-cols-2 gap-3">
                {currentLeader.strengths.map((strength, index) => (
                  <li
                    key={index}
                    className="text-xs sm:text-sm text-slate-700 bg-white p-3.5 rounded-lg border border-slate-200 flex items-start gap-2.5 shadow-sm"
                  >
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span>{strength}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* 主要な取り組み */}
            <section>
              <h3 className="text-sm font-bold tracking-wide uppercase text-slate-400 mb-3">
                Key Initiatives / 主な事業・取り組み
              </h3>
              <div className="space-y-3">
                {currentLeader.keyInitiatives.map((item, index) => (
                  <div key={index} className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                    <h4 className="font-bold text-sm text-slate-900 mb-1.5 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                    {item.linkUrl && (
                      <a
                        href={item.linkUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-3 text-xs font-bold text-blue-600 hover:underline"
                      >
                        {item.linkLabel}
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* BizRoots 総評 */}
            <section className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
              <h3 className="text-xs font-bold uppercase tracking-wider text-blue-800 mb-2">
                BizRoots Editorial Verdict
              </h3>
              <p className="text-sm text-slate-800 leading-relaxed font-medium">
                {currentLeader.verdict}
              </p>
            </section>
          </div>
        </article>

        {/* 下部アーカイブ一覧カード */}
        <section className="mt-12 pt-8 border-t border-slate-200">
          <h3 className="text-sm font-bold text-slate-900 mb-4">
            掲載リーダー一覧（全9名）
          </h3>
          <div className="grid sm:grid-cols-3 gap-3">
            {LEADERS.map((leader) => (
              <button
                key={leader.id}
                onClick={() => {
                  setSelectedId(leader.id);
                  window.scrollTo({ top: 300, behavior: "smooth" });
                }}
                className={`p-3.5 rounded-xl text-left border transition-all ${
                  leader.id === selectedId
                    ? "border-blue-600 bg-white shadow-md ring-1 ring-blue-600"
                    : "border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm"
                }`}
              >
                <div className="text-[10px] font-bold text-blue-600 mb-1">
                  {leader.category}
                </div>
                <div className="text-sm font-bold text-slate-900">
                  {leader.name} 氏
                </div>
                <div className="text-[11px] text-slate-500 mt-1 line-clamp-2">
                  {leader.tagline}
                </div>
              </button>
            ))}
          </div>
        </section>
      </main>

      {/* フッター */}
      <footer className="border-t border-slate-200 bg-white py-10 text-center text-xs text-slate-500">
        <div className="max-w-4xl mx-auto px-4 space-y-2">
          <p className="font-bold text-slate-700">BizRoots Media</p>
          <p>© 2026 BizRoots. All rights reserved.</p>
          <p className="text-slate-400 text-[11px]">
            当サイトは公開資料、自治体許認可情報、一次情報源に基づき、実業と現場にコミットするリーダーの活動を客観的に記録するビジネスアーカイブです。
          </p>
        </div>
      </footer>
    </div>
  );
}
