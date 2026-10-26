import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '紫微斗数 v4 数据集 · 年度目录',
  description: '浏览紫微斗数开源解读数据集 v4.0 的年度统计、字段口径、许可与下载信息。',
};

const FIRST_YEAR = 1950;
const LAST_YEAR = 2026;
const TOPIC_COUNT = 13;
const RELEASE_URL = 'https://github.com/Renhuai123/ziwei-doushu/releases/tag/v4.0-13d';
const MANIFEST_URL = 'https://github.com/Renhuai123/ziwei-doushu/releases/download/v4.0-13d/MANIFEST.json';

function isLeapYear(year: number) {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}

function formatNumber(value: number) {
  return new Intl.NumberFormat('zh-CN').format(value);
}

const yearlyRows = Array.from({ length: LAST_YEAR - FIRST_YEAR + 1 }, (_, index) => {
  const year = FIRST_YEAR + index;
  const charts = (isLeapYear(year) ? 366 : 365) * 12 * 2;
  return { year, charts, readings: charts * TOPIC_COUNT };
});

export default function DatasetPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-page)] px-4 py-10 text-[var(--tx-1)] sm:px-8">
      <div className="mx-auto max-w-5xl">
        <nav className="mb-8 text-sm">
          <a className="text-amber-700 underline" href="/">返回首页</a>
          <span className="mx-2 text-slate-400">/</span>
          <span>数据集 v4.0</span>
        </nav>

        <header className="mb-8 rounded-2xl border border-amber-900/10 bg-white/80 p-6 shadow-sm sm:p-10">
          <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-amber-700">OPEN DATASET · v4.0</p>
          <h1 className="mb-4 text-3xl font-bold sm:text-4xl">紫微斗数开源解读数据集</h1>
          <p className="max-w-3xl leading-7 text-slate-700">
            按公历真实日期生成的年度 JSONL 压缩数据。完整文件较大，建议先查看清单和字段说明，再按需从 GitHub Releases 下载。
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a className="rounded-lg bg-amber-700 px-5 py-3 font-semibold text-white hover:bg-amber-800" href={RELEASE_URL}>
              查看 v4.0 下载文件
            </a>
            <a className="rounded-lg border border-amber-800/30 px-5 py-3 font-semibold text-amber-800 hover:bg-amber-50" href={MANIFEST_URL}>
              查看 JSON 清单
            </a>
          </div>
        </header>

        <section aria-label="数据集规模" className="mb-8 grid gap-4 sm:grid-cols-3">
          {[
            { label: '命盘样本', value: formatNumber(674976) },
            { label: '解读记录', value: formatNumber(8774688) },
            { label: '压缩总量', value: '约 161 MB' },
          ].map((item) => (
            <div key={item.label} className="rounded-xl border border-slate-200 bg-white p-5">
              <div className="text-sm text-slate-500">{item.label}</div>
              <div className="mt-2 text-2xl font-bold">{item.value}</div>
            </div>
          ))}
        </section>

        <section className="mb-8 rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="mb-4 text-xl font-bold">数据口径</h2>
          <dl className="grid gap-3 text-sm sm:grid-cols-2">
            <div><dt className="font-semibold">日期范围</dt><dd>1950–2026，公历真实日期</dd></div>
            <div><dt className="font-semibold">时辰</dt><dd>时辰序号 0–11（子时为 0），不是 0–23 点</dd></div>
            <div><dt className="font-semibold">性别</dt><dd>male / female</dd></div>
            <div><dt className="font-semibold">主题</dt><dd>overview、personality、love、career、wealth、health、family、children、move、friends、home、spirit、parents</dd></div>
            <div><dt className="font-semibold">许可</dt><dd>CC BY 4.0，使用时须注明来源</dd></div>
            <div><dt className="font-semibold">压缩格式</dt><dd>每年一个 JSONL Zstandard 文件；清单提供各文件校验和</dd></div>
          </dl>
          <p className="mt-5 text-sm leading-6 text-slate-600">
            文件完整性校验、逐年压缩字节数和具体下载资产名称以发布页中的 MANIFEST.json 为准。解压说明及完整许可请查看仓库 README 与 DATASET-LICENSE。
          </p>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="mb-2 text-xl font-bold">逐年样本目录</h2>
          <p className="mb-4 text-sm text-slate-600">
            统计按每个公历日 × 12 个时辰 × 2 种性别计算；逐年实际文件信息以清单为准。
          </p>
          <div className="max-h-[34rem] overflow-auto rounded-lg border border-slate-200">
            <table className="w-full text-left text-sm">
              <thead className="sticky top-0 bg-slate-100">
                <tr><th className="px-4 py-3">年份</th><th className="px-4 py-3">命盘</th><th className="px-4 py-3">解读记录</th></tr>
              </thead>
              <tbody>
                {yearlyRows.map((row) => (
                  <tr key={row.year} className="border-t border-slate-100">
                    <th className="px-4 py-2 font-medium">{row.year}</th>
                    <td className="px-4 py-2">{formatNumber(row.charts)}</td>
                    <td className="px-4 py-2">{formatNumber(row.readings)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <footer className="mt-8 border-t border-slate-200 pt-5 text-sm leading-6 text-slate-600">
          <p>来源：Renhuai123/ziwei-doushu，数据集 v4.0。使用、再发布或衍生数据时请保留 CC BY 4.0 attribution。</p>
          <p>数据由传统命理系统生成，不应视为经过独立验证的预测、医疗、法律、投资或人生建议。</p>
        </footer>
      </div>
    </main>
  );
}
