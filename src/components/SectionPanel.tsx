import type { PortfolioSection } from "../data/links";
import { LinkCard } from "./LinkCard";
import { ScreenshotGrid } from "./ScreenshotGrid";

interface SectionPanelProps {
  section: PortfolioSection;
  screenshotFiles?: string[];
}

function handlePrimary(section: PortfolioSection) {
  const action = section.primaryAction;
  if (!action) return;
  if (action.external === false) {
    window.location.href = action.url;
    return;
  }
  window.open(action.url, "_blank", "noopener,noreferrer");
}

export function SectionPanel({ section, screenshotFiles = [] }: SectionPanelProps) {
  return (
    <section className="animate-in fade-in space-y-8 duration-300">
      <header className="space-y-3">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-500">
          Smart Fitao AI · FYP
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {section.heading}
        </h2>
        <p className="max-w-3xl text-base leading-relaxed text-slate-400">{section.subtitle}</p>

        <div className="flex flex-wrap gap-3 pt-2">
          {section.primaryAction ? (
            <button type="button" className="btn-primary" onClick={() => handlePrimary(section)}>
              {section.id === "app" ? "⬇" : "↗"} {section.primaryAction.label}
            </button>
          ) : null}
          {section.extraButtons?.map((btn) => (
            <button
              key={btn.label}
              type="button"
              className={btn.variant === "primary" ? "btn-primary" : "btn-secondary"}
              onClick={() => window.open(btn.url, "_blank", "noopener,noreferrer")}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </header>

      <div className="grid gap-4 sm:grid-cols-2">
        {section.links.map((link) => (
          <LinkCard key={`${section.id}-${link.label}`} link={link} />
        ))}
      </div>

      <ScreenshotGrid
        folder={section.screenshotFolder}
        hint={section.screenshotHint}
        images={screenshotFiles}
      />
    </section>
  );
}
