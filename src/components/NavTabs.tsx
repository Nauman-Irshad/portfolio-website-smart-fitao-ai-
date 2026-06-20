import type { PortfolioTab } from "../data/links";
import { PORTFOLIO_SECTIONS } from "../data/links";

interface NavTabsProps {
  active: PortfolioTab;
  onChange: (tab: PortfolioTab) => void;
}

export function NavTabs({ active, onChange }: NavTabsProps) {
  return (
    <nav className="flex flex-wrap gap-2" aria-label="Portfolio sections">
      {PORTFOLIO_SECTIONS.map((s) => {
        const on = active === s.id;
        return (
          <button
            key={s.id}
            type="button"
            onClick={() => onChange(s.id)}
            className={[
              "rounded-full px-4 py-2 text-sm font-semibold transition",
              on
                ? "bg-brand-500 text-white shadow-lg shadow-brand-500/30"
                : "border border-white/10 bg-white/5 text-slate-300 hover:bg-white/10",
            ].join(" ")}
          >
            {s.navLabel}
          </button>
        );
      })}
    </nav>
  );
}
