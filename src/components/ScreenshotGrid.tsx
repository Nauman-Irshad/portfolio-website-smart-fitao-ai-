import { PLACEHOLDER_SCREEN_COUNT } from "../data/links";

interface ScreenshotGridProps {
  folder: string;
  hint: string;
  images?: string[];
}

export function ScreenshotGrid({ folder, hint, images = [] }: ScreenshotGridProps) {
  const hasImages = images.length > 0;

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
          Screenshots
        </h3>
        <code className="rounded-lg bg-black/40 px-2 py-1 text-xs text-brand-100">{hint}</code>
      </div>

      {hasImages ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((src) => (
            <figure
              key={src}
              className="overflow-hidden rounded-xl border border-white/10 bg-black/30"
            >
              <img
                src={src}
                alt="Project screenshot"
                className="h-56 w-full object-cover object-top sm:h-64"
                loading="lazy"
              />
            </figure>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: PLACEHOLDER_SCREEN_COUNT }).map((_, i) => (
            <div
              key={i}
              className="flex h-56 flex-col items-center justify-center rounded-xl border border-dashed border-white/15 bg-gradient-to-br from-slate-900 to-slate-800/80 p-6 text-center sm:h-64"
            >
              <span className="mb-2 text-3xl opacity-40">🖼️</span>
              <p className="text-sm font-medium text-slate-400">Screenshot {i + 1}</p>
              <p className="mt-1 text-xs text-slate-500">
                Drop image in <span className="text-brand-100">{folder}</span>
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
