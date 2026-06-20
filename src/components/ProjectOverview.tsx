import type { ReactNode } from "react";
import {
  ABSTRACT,
  ACCURACY_METRICS,
  CONCLUSION,
  DISCUSSION,
  HERO,
  INTRODUCTION,
  METHODS,
  PROJECT_META,
  REFERENCES,
  RESULTS,
  STANDEE_FEATURES,
  STANDEE_IMAGE,
  STANDEE_PDF,
  TEST_RESULTS,
} from "../data/project";
import { Logo } from "./Logo";

function SectionBlock({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="card-panel p-5 sm:p-6">
      <h3 className="mb-3 border-b border-slate-100 pb-2 text-lg font-bold text-brand-700">
        {title}
      </h3>
      {children}
    </div>
  );
}

export function ProjectOverview() {
  return (
    <section id="about" className="scroll-mt-28">
      <div className="grid items-start gap-8 lg:grid-cols-[minmax(260px,340px)_1fr] xl:grid-cols-[minmax(300px,380px)_1fr]">
        {/* Vertical standee poster */}
        <div className="lg:sticky lg:top-24">
          <div className="card-panel overflow-hidden p-3">
            <p className="mb-2 text-center text-xs font-bold uppercase tracking-wider text-slate-500">
              Open House Standee · {PROJECT_META.courseCode}
            </p>
            <a
              href={STANDEE_PDF}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
              title="Open full PDF standee"
            >
              <img
                src={STANDEE_IMAGE}
                alt="Smart Fitao AI standee poster"
                className="mx-auto w-full max-w-[340px] rounded-lg border border-slate-200 object-contain shadow-md"
              />
            </a>
            <p className="mt-2 text-center text-xs text-slate-400">
              Tap poster to open PDF · Vertical 24×60 standee
            </p>
          </div>
        </div>

        {/* Poster content — all sections beside standee */}
        <div className="space-y-5">
          <div className="card-panel overflow-hidden">
            <div className="border-b border-slate-100 bg-gradient-to-r from-brand-50 to-emerald-50 px-6 py-5">
              <div className="flex items-center gap-3">
                <Logo size="lg" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-brand-600">
                    {PROJECT_META.courseCode}
                  </p>
                  <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">{HERO.title}</h2>
                  <p className="text-sm font-semibold text-brand-700">{PROJECT_META.tagline}</p>
                </div>
              </div>
            </div>

            <div className="grid gap-0 md:grid-cols-2">
              <div className="border-b border-slate-100 p-5 md:border-b-0 md:border-r sm:p-6">
                <h3 className="mb-2 text-base font-bold text-red-700">Problem</h3>
                <p className="text-sm leading-relaxed text-slate-700">{HERO.problem}</p>
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="mb-2 text-base font-bold text-brand-700">Solution</h3>
                <p className="text-sm leading-relaxed text-slate-700">{HERO.solution}</p>
                <p className="mt-2 text-xs font-semibold text-brand-600">{HERO.tagline}</p>
              </div>
            </div>
          </div>

          <SectionBlock title="Abstract">
            <p className="text-sm leading-relaxed text-slate-700">{ABSTRACT}</p>
          </SectionBlock>

          <SectionBlock title="Introduction">
            <p className="text-sm leading-relaxed text-slate-700">{INTRODUCTION}</p>
          </SectionBlock>

          <SectionBlock title="Methods and Materials">
            <ul className="space-y-2">
              {METHODS.map((m) => (
                <li key={m} className="flex gap-2 text-sm text-slate-700">
                  <span className="text-brand-500">▸</span>
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </SectionBlock>

          <SectionBlock title="Standee Figures (from poster)">
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {STANDEE_FEATURES.map((f) => (
                <div
                  key={f.fig}
                  className="rounded-lg border border-slate-100 bg-slate-50 px-3 py-2 text-center"
                >
                  <p className="text-xs font-bold text-brand-600">{f.fig}</p>
                  <p className="mt-0.5 text-xs text-slate-600">{f.label}</p>
                </div>
              ))}
            </div>
          </SectionBlock>

          <SectionBlock title="Model / Feature Accuracy">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[280px] text-left text-sm">
                <thead className="bg-slate-50 text-xs uppercase text-slate-500">
                  <tr>
                    <th className="px-3 py-2">Model / Feature</th>
                    <th className="px-3 py-2">Accuracy</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {ACCURACY_METRICS.map((row) => (
                    <tr key={row.model}>
                      <td className="px-3 py-2 text-slate-700">{row.model}</td>
                      <td className="px-3 py-2 font-bold text-brand-600">{row.accuracy}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </SectionBlock>

          <SectionBlock title="Results (Testing)">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[360px] text-left text-sm">
                <thead className="bg-slate-50 text-xs uppercase text-slate-500">
                  <tr>
                    <th className="px-3 py-2">Feature</th>
                    <th className="px-3 py-2">Test Case</th>
                    <th className="px-3 py-2">Defects</th>
                    <th className="px-3 py-2">Correct</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {TEST_RESULTS.map((row) => (
                    <tr key={row.feature}>
                      <td className="px-3 py-2 text-slate-700">{row.feature}</td>
                      <td className="px-3 py-2 font-mono text-slate-500">{row.testCase}</td>
                      <td className="px-3 py-2 text-center">{row.defects}</td>
                      <td className="px-3 py-2 text-center font-bold text-brand-600">
                        {row.correct}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </SectionBlock>

          <SectionBlock title="Conclusion">
            <ul className="space-y-2">
              {RESULTS.map((r) => (
                <li key={r} className="flex gap-2 text-sm text-slate-700">
                  <span className="text-brand-500">✓</span>
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </SectionBlock>

          <SectionBlock title="Discussion">
            <p className="text-sm leading-relaxed text-slate-700">{DISCUSSION}</p>
            <p className="mt-2 text-sm italic text-slate-500">{CONCLUSION}</p>
          </SectionBlock>

          <SectionBlock title="References">
            <ol className="list-decimal space-y-1 pl-5 text-sm text-slate-600">
              {REFERENCES.map((ref) => (
                <li key={ref}>{ref}</li>
              ))}
            </ol>
          </SectionBlock>
        </div>
      </div>
    </section>
  );
}
