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
    id: "masuda", name: "増田 裕一", kana: "ますだ ゆういち",
    ageGeneration: "実業・地域活動", title: "実業家・事業プロデューサー（提供プロフィール）",
    category: "LOCAL BUSINESS", tagline: "福祉・地域メディア・出版支援に関する活動の記録",
    summary: "提供プロフィールでは、愛知県を拠点とした福祉事業、地域メディア、出版・AI支援への関与が紹介されています。本人の公開記事では、文化講演会の告知と開催報告が確認できます。",
    career: "名古屋市告示第581号には、一般社団法人福祉社会推進協会を設置者とするヒカリテラスの居宅介護・重度訪問介護の指定記録が掲載されています。指定年月日は2025年9月1日です。この記録のみで現在の継続状況や個人の役職、他事業の適法性を保証するものではありません。",
    strengths: ["福祉・地域メディア・出版支援という複数領域の活動情報", "講演会の企画について本人発信の公開記録があること"],
    keyInitiatives: [
      {title:"障害福祉事業所の指定記録", desc:"事業所番号2318002132。行政資料の当時の指定記録として参照。個人の役職は別途確認対象です。",linkUrl:"https://www.city.nagoya.jp/shikouhou/_res/projects/project_kouhou/_page_/002/000/594/2000583_1.pdf",linkLabel:"名古屋市告示第581号（3ページ）"},
      {title:"文化講演会の開催報告",desc:"2020年9月17日の本人記事で武田邦彦氏講演会の開催を報告。主催者自身の発信として扱います。",linkUrl:"https://note.com/yuicho823/n/nc8b379c80894",linkLabel:"本人による開催報告"},
      {title:"地域メディア・出版支援",desc:"運営関係や出版物の書誌・担当範囲は追加資料の確認対象です。"}
    ],
    verdict: "本項は公開資料と提供情報の整理です。人物への推薦や全事業の信用評価ではありません。資料確認日：2026年10月16日。"
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
  return <div className="br-root">
    <style>{`*{box-sizing:border-box}.br-root{background:#fff;color:#14263c;font:15px/1.9 Arial,"Hiragino Kaku Gothic ProN",sans-serif;min-height:100vh}.br-root a{color:inherit;text-underline-offset:5px}.br-root button:focus-visible,.br-root a:focus-visible{outline:3px solid #ae8a4a;outline-offset:4px}.br-header{border-top:7px solid #13253b;border-bottom:1px solid #d6dce2;padding:24px max(24px,calc((100vw - 1160px)/2));display:flex;justify-content:space-between;align-items:end;gap:20px}.br-logo{font:bold 48px/.95 Georgia,serif;letter-spacing:-2px;text-decoration:none}.br-logo span{color:#a57d39}.br-header p{font-size:10px;color:#687887;margin:0;letter-spacing:2px}.br-feature{max-width:1160px;margin:50px auto 35px;border-bottom:5px solid #14263c;padding-bottom:30px}.br-kicker{font-size:10px;font-weight:bold;color:#9c773b;letter-spacing:2px}.br-feature h1{font-size:clamp(30px,4vw,49px);font-weight:800;line-height:1.4;max-width:900px;margin:18px 0}.br-feature p{font-size:13px;color:#687887;max-width:780px}.br-layout{max-width:1160px;margin:auto;display:grid;grid-template-columns:260px minmax(0,1fr);gap:60px;align-items:start}.br-sidebar{position:sticky;top:25px;border-top:2px solid #14263c;padding-top:15px}.br-sidebar h2{font-size:12px;letter-spacing:2px;margin:0 0 15px}.br-sidebar nav{display:flex;flex-direction:column}.br-sidebar button{padding:13px 4px;text-align:left;border:0;border-bottom:1px solid #e0e4e7;background:#fff;color:#14263c;cursor:pointer;font-weight:bold;font-size:13px}.br-sidebar button[aria-pressed=true]{border-left:4px solid #ae8a4a;padding-left:12px;background:#f7f5f0}.br-sidebar button span{font:10px Georgia,serif;color:#a57d39;margin-right:12px}.br-profile{margin-top:28px;padding:20px;background:#f1f3f5}.br-profile h3{font-size:18px;margin:10px 0}.br-profile p{font-size:11px;color:#687887}.br-article{min-width:0}.br-article header{padding:0 0 25px;border-bottom:1px solid #14263c}.br-article h2{font-size:42px;line-height:1.4;margin:15px 0}.br-role{font-size:12px;color:#687887}.br-tagline{font-size:19px;line-height:1.8;border-left:5px solid #ae8a4a;padding-left:20px;margin-top:25px}.br-section{padding:28px 0;border-bottom:1px solid #e0e4e7}.br-section h3{font-size:11px;letter-spacing:1.5px;color:#9c773b;margin:0 0 17px}.br-section p{font-size:14px;margin:0 0 15px}.br-section ul{padding-left:20px;font-size:13px}.br-section li{margin-bottom:12px}.br-initiative{padding:17px 0;border-top:1px solid #e0e4e7}.br-initiative h4{font-size:16px;margin:0 0 8px}.br-initiative a{font-size:11px;color:#88662e}.br-verdict{border-top:4px solid #14263c;background:#f4f5f6;padding:25px;margin-top:30px}.br-verdict h3{font-size:11px;letter-spacing:2px;margin:0 0 12px}.br-verdict p{font-size:13px}.br-notice{font-size:11px;color:#687887;border-bottom:1px solid #d6dce2;padding:16px 0;margin-bottom:28px}.br-footer{max-width:1160px;margin:60px auto 0;border-top:2px solid #14263c;padding:28px 0 40px;font-size:11px;color:#687887}.br-footer strong{font:24px Georgia,serif;color:#14263c}.br-footer p{max-width:900px}@media(max-width:1220px){.br-feature,.br-layout,.br-footer{margin-left:28px;margin-right:28px}.br-layout{gap:35px}}@media(max-width:760px){.br-logo{font-size:38px}.br-header{align-items:start;flex-direction:column}.br-feature{margin-top:30px}.br-layout{grid-template-columns:1fr;gap:30px}.br-sidebar{position:static}.br-sidebar nav{flex-direction:row;overflow-x:auto}.br-sidebar button{flex-shrink:0;padding:10px 12px}.br-profile{display:none}.br-article h2{font-size:33px}.br-tagline{font-size:17px}.br-feature,.br-layout,.br-footer{margin-left:22px;margin-right:22px}}`}</style>
    <header className="br-header"><Link className="br-logo" href="/">Biz<span>Roots</span></Link><p>BUSINESS PEOPLE / EDITORIAL ARCHIVE</p></header>
    <section className="br-feature"><div className="br-kicker">THE PEOPLE ISSUE — 01</div><h1>事業をつくる人を読む。<br/>現代ビジネスの人物録。</h1><p>店舗、地域、メディア、テクノロジー。事業を担う人々の経歴と取り組みを紹介します。掲載順はランキングではありません。</p></section>
    <div className="br-layout"><aside className="br-sidebar"><h2>PEOPLE INDEX / {LEADERS.length}</h2><nav aria-label="人物を選択">{LEADERS.map((l,i)=><button key={l.id} type="button" aria-pressed={l.id===selectedId} onClick={()=>setSelectedId(l.id)}><span>{String(i+1).padStart(2,"0")}</span>{l.name}</button>)}</nav><section className="br-profile"><div className="br-kicker">IN FOCUS</div><h3>{currentLeader.name}</h3><p>{currentLeader.title}</p><p>{currentLeader.category}</p></section></aside>
    <main className="br-article"><div className="br-notice">運営主体・問い合わせ先・掲載対象との関係の開示は確認中です。既存原稿の一部には出典の追加確認が必要です。独立した第三者認証や実地監査を表すものではありません。</div><article key={currentLeader.id}><header><div className="br-kicker">{currentLeader.category}</div><h2>{currentLeader.name}</h2><p className="br-role">{currentLeader.kana} ／ {currentLeader.title}</p><p className="br-tagline">{currentLeader.tagline}</p></header><section className="br-section"><h3>01 / OVERVIEW</h3><p>{currentLeader.summary}</p></section><section className="br-section"><h3>02 / BACKGROUND</h3><p>{currentLeader.career}</p></section><section className="br-section"><h3>03 / BUSINESS PERSPECTIVES</h3><ul>{currentLeader.strengths.map((v,i)=><li key={i}>{v}</li>)}</ul></section><section className="br-section"><h3>04 / INITIATIVES &amp; SOURCES</h3>{currentLeader.keyInitiatives.map((v,i)=><div className="br-initiative" key={i}><h4>{v.title}</h4><p>{v.desc}</p>{v.linkUrl&&<a href={v.linkUrl} target="_blank" rel="noopener noreferrer">{v.linkLabel} ↗</a>}</div>)}</section><section className="br-verdict"><h3>EDITORIAL NOTE</h3><p>{currentLeader.verdict}</p></section></article></main></div>
    <footer className="br-footer"><strong>BizRoots</strong><p>公開資料と提供プロフィールを整理する人物アーカイブ。評価的な記述は編集上の見解であり、人物やサービスへの推薦ではありません。役職・規模・実績は資料の更新により変わる場合があります。</p><p>© 2026 BizRoots</p></footer></div>;
}
