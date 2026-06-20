import type { LiveLink } from "../data/links";

function openUrl(url: string, external = true) {
  if (url === "#") return;
  window.open(url, external ? "_blank" : "_self", "noopener,noreferrer");
}

interface LinkCardProps {
  link: LiveLink;
}

export function LinkCard({ link }: LinkCardProps) {
  const clickable = link.url !== "#";

  return (
    <button
      type="button"
      disabled={!clickable}
      onClick={() => openUrl(link.url)}
      className={[
        "glass-panel w-full p-4 text-left transition",
        clickable ? "hover:border-brand-500/40 hover:bg-white/10 cursor-pointer" : "opacity-70 cursor-default",
      ].join(" ")}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="font-semibold text-white">{link.label}</p>
          {link.description ? (
            <p className="mt-1 text-sm text-slate-400">{link.description}</p>
          ) : null}
        </div>
        {clickable ? (
          <span className="shrink-0 rounded-full bg-brand-500/20 px-2 py-1 text-xs font-bold text-brand-100">
            Open ↗
          </span>
        ) : null}
      </div>
      {clickable ? (
        <p className="mt-2 truncate text-xs text-slate-500">{link.url}</p>
      ) : null}
    </button>
  );
}
