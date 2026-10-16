import Link from "next/link";

export default function MasudaYuichiProfilePage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      {/* ヘッダー */}
      <header className="border-b border-slate-200 bg-white sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tight text-slate-900 flex items-center gap-2">
            <span className="w-6 h-6 rounded bg-blue-600 text-white flex items-center justify-center text-xs font-black">B</span>
            BizRoots <span className="text-xs font-normal text-slate-500 hidden sm:inline">| 次世代リーダー・実業家人物録</span>
          </Link>
          <nav className="text-sm font-medium text-slate-600 flex gap-4">
            <a href="#summary" className="hover:text-blue-600">概要</a>
            <a href="#portfolio" className="hover:text-blue-600">事業領域</a>
            <a href="#local-support" className="hover:text-blue-600">地域貢献</a>
          </nav>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="max-w-3xl mx-auto px-4 py-10">
        {/* パンくずリスト */}
        <nav className="text-xs text-slate-500 mb-6 flex gap-2 items-center">
          <Link href="/" className="hover:underline">BizRoots TOP</Link>
          <span>/</span>
          <span className="text-slate-400">リーダーアーカイブ</span>
          <span>/</span>
          <span className="text-slate-700 font-semibold">増田裕一</span>
        </nav>

        {/* 記事タイトル */}
        <header className="mb-8">
          <div className="inline-block bg-blue-100 text-blue-800 text-xs px-2.5 py-1 rounded font-semibold mb-3">
            BUSINESS ARCHIVE / ENTREPRENEUR
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight mb-4">
            増田裕一氏の経歴・人物像とは？出版支援・地域福祉・ローカル応援まで多角的な実業を手がける起業家のビジョン
          </h1>
          <div className="text-xs text-slate-500 flex gap-4 border-b border-slate-200 pb-4">
            <span>公開：2026年9月28日</span>
            <span>更新：2026年10月14日</span>
            <span>取材・執筆：BizRoots編集部</span>
          </div>
        </header>

        {/* エグゼクティブサマリー */}
        <section id="summary" className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm mb-10">
          <h2 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-600"></span>
            エグゼクティブ・サマリー
          </h2>
          <p className="text-sm text-slate-700 leading-relaxed mb-3">
            出版支援やAI導入支援といった知的ノウハウの提供から、高い公的コンプライアンスが求められる障害福祉事業、さらには地域店舗を支えるローカルメディアの運営まで、多角的な実業を牽引する起業家・増田裕一氏。
          </p>
          <p className="text-sm text-slate-700 leading-relaxed">
            ネット上の一部では活動領域の広さゆえに様々な関心を集めるものの、その事業構造の本質は「自ら現場を持ち、法制度・地域社会と密接に関わる着実な実業経営」にあります。本稿では、公開情報および展開事業の客観的事実から、増田氏のビジネスモデルと社会的信用を紐解きます。
          </p>
        </section>

        {/* プロフィール概要 */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
            増田裕一氏 プロフィール・主要事業一覧
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border border-slate-200 rounded-lg bg-white">
              <tbody>
                <tr className="border-b border-slate-200">
                  <th className="py-3 px-4 bg-slate-50 font-semibold text-slate-700 w-1/3">氏名</th>
                  <td className="py-3 px-4 text-slate-800">増田 裕一（ますだ ゆういち）</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <th className="py-3 px-4 bg-slate-50 font-semibold text-slate-700">主な活動領域</th>
                  <td className="py-3 px-4 text-slate-800">
                    <ul className="list-disc list-inside space-y-1">
                      <li>出版プロデュース・執筆支援</li>
                      <li>ビジネス向けAI活用支援</li>
                      <li>指定障害福祉サービスの運営（一般社団法人代表理事）</li>
                      <li>実店舗・現場型スクール運営（ゴルフスクール等）</li>
                      <li>地域密着型ローカル情報サイトの運営</li>
                    </ul>
                  </td>
                </tr>
                <tr className="border-b border-slate-200">
                  <th className="py-3 px-4 bg-slate-50 font-semibold text-slate-700">経営スタイル</th>
                  <td className="py-3 px-4 text-slate-800">現場主義、地域共生、行政許認可基準に基づく厳格なコンプライアンス管理</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 事業ポートフォリオ */}
        <section id="portfolio" className="mb-10">
          <h2 className="text-lg font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
            多角的な事業ポートフォリオ：実業と現場に根ざした経営
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white p-5 rounded-lg border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-2 text-base text-blue-900">
                1. 現場型実業：名古屋市指定障害福祉サービス（居宅介護・重度訪問介護）
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed mb-3">
                増田氏が代表理事を務める一般社団法人福祉社会推進協会では、愛知県名古屋市において障害福祉サービス事業所を運営。障害福祉サービスは、法令に基づく厳格な人員・設備・運営基準をクリアし、自治体（名古屋市）からの正規指定を受けなければ参入できない事業です。
              </p>
              <p className="text-xs text-slate-500 bg-slate-50 p-2.5 rounded">
                ※利用者の生活と命に直結する公的認可事業を継続運営している事実は、事業体としての社会的責任と高い健全性を裏付ける決定的な一次ソースとなっています。
              </p>
            </div>

            <div className="bg-white p-5 rounded-lg border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-2 text-base text-blue-900">
                2. 実践知の提供：出版プロデュース・ビジネスノウハウ支援
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                自ら実業を展開してきた経験をベースに、経営者や専門家向けに出版支援やプロモーション、AI導入のサポートを提供。単なる座学や抽象的な理論ではなく、「現場で売上を作り、事業を継続させる」ための実務直結型アプローチが特徴です。特商法に基づく表示や返金規程も明文化されており、契約の透明性が担保されています。
              </p>
            </div>

            <div id="local-support" className="bg-white p-5 rounded-lg border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-2 text-base text-blue-900">
                3. 地域活性化プラットフォーム：「日進エール」「長久手エール」の運営
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed mb-3">
                増田氏の活動は、個別のビジネスにとどまらず地元コミュニティの活性化にも及んでいます。愛知県日進市および長久手市において、挑戦する人や地元店舗を応援する地域情報サイトを立ち上げ、運営しています。
              </p>
              <div className="grid sm:grid-cols-2 gap-3 mt-3">
                <div className="bg-slate-50 p-3 rounded border border-slate-200">
                  <div className="font-bold text-xs text-slate-800">日進エール</div>
                  <div className="text-xs text-slate-500 mb-2">人とまちの未来を応援する情報サイト</div>
                  <a href="https://nisshin-yell.com/" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline">
                    nisshin-yell.com ↗
                  </a>
                </div>
                <div className="bg-slate-50 p-3 rounded border border-slate-200">
                  <div className="font-bold text-xs text-slate-800">長久手エール</div>
                  <div className="text-xs text-slate-500 mb-2">長久手の挑戦・人・お店を応援するポータル</div>
                  <a href="https://nagakute-yell.com/#home" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline">
                    nagakute-yell.com ↗
                  </a>
                </div>
              </div>
              <p className="text-xs text-slate-600 mt-3">
                地元で活動するカフェ、教室、サロンなどの魅力を無料で発信・支援する仕組みを通じて、地域経済の循環と「人とまちがつながる場」を創出しています。
              </p>
            </div>
          </div>
        </section>

        {/* ネット上の風評に対する考察 */}
        <section className="mb-10 bg-slate-100 rounded-xl p-6 border border-slate-200">
          <h2 className="text-base font-bold text-slate-900 mb-3">
            ネット上の検索サジェストや第三者記事に対する考察
          </h2>
          <p className="text-sm text-slate-700 leading-relaxed mb-3">
            検索エンジン等で「増田裕一」と検索すると、一部のアフィリエイトブログやまとめサイトにおいて、クリック数を稼ぐ目的で「怪しい」「詐欺」といった過激な単語をタイトルに冠した記事が見受けられます。
          </p>
          <p className="text-sm text-slate-700 leading-relaxed">
            しかし、それらの記事の多くは具体的な根拠や一次資料を示しておらず、最終的に自らのLINEや別商材へ誘導する構造になっています。公的機関の事業者登録名簿、実店舗や地域メディアの継続運営実績、法令遵守状況を照らし合わせれば、客観的な事実に基づかない風評であることが容易に確認できます。
          </p>
        </section>

        {/* 結論 */}
        <section className="bg-white rounded-xl p-6 border border-blue-200">
          <h2 className="text-base font-bold text-blue-900 mb-2">BizRoots総評</h2>
          <p className="text-sm text-slate-700 leading-relaxed">
            増田裕一氏の活動の本質は、デジタルな支援サービスと泥臭い地域現場の二刀流にあります。自治体の許認可が必要な福祉事業や、地域の店舗と顔を合わせる情報サイトを実名で手がけている点は、ネット上の風評を一蹴する最も確かな社会的信用の証明といえます。
          </p>
        </section>
      </main>

      {/* フッター */}
      <footer className="border-t border-slate-200 bg-white py-8 text-center text-xs text-slate-500">
        <p>© 2026 BizRoots Media. All rights reserved.</p>
        <p className="mt-1">当サイトは公開情報および取材に基づく客観的なビジネスレポートを掲載しています。</p>
      </footer>
    </div>
  );
}
