import { DEPLOYMENT_LAUNCHERS } from "../data/links";
import { PROJECT_META } from "../data/project";
import { Logo } from "./Logo";

interface SiteHeaderProps {
  onScrollAbout: () => void;
}

function openUrl(url: string) {
  window.open(url, "_blank", "noopener,noreferrer");
}

function TeamCredits() {
  return (
    <div className="min-w-0 flex-1 space-y-2">
      <p className="text-sm text-slate-600">
        <span className="font-bold text-brand-700">{PROJECT_META.advisor.title}:</span>{" "}
        <span className="font-semibold text-slate-800">{PROJECT_META.advisor.name}</span>
      </p>
      <div>
        <p className="mb-1.5 text-sm font-bold text-brand-700">Team members</p>
        <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {PROJECT_META.team.map((member) => (
            <li
              key={member.id}
              className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2"
            >
              <p className="text-sm font-semibold leading-snug text-slate-900">{member.name}</p>
              <p className="mt-0.5 text-xs font-medium text-slate-500">{member.id}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function SiteHeader({ onScrollAbout }: SiteHeaderProps) {
  return (
    <header className="border-b border-slate-200 bg-white shadow-sm">
      <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:gap-6">
          <button type="button" onClick={onScrollAbout} className="shrink-0 self-start">
            <Logo size="md" showName />
          </button>
          <TeamCredits />
        </div>
      </div>
    </header>
  );
}

export function BigLaunchButtons() {
  return (
    <div className="border-b border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-5 sm:px-6 sm:py-6">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {DEPLOYMENT_LAUNCHERS.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => openUrl(item.liveUrl)}
              className={[
                "group flex min-h-[108px] flex-col items-center justify-center gap-1 rounded-2xl border bg-gradient-to-br px-4 py-5 shadow-md transition hover:scale-[1.02] active:scale-[0.98]",
                item.border,
                item.gradient,
              ].join(" ")}
            >
              <Logo size="sm" />
              <span className="text-center text-base font-bold tracking-wide text-white sm:text-lg">
                {item.label}
              </span>
              <span className="text-center text-xs text-white/85">{item.subtitle}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
