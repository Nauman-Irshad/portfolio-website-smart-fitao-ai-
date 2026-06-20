import { useCallback, useMemo, useState } from "react";
import {
  ALL_DEPLOYMENTS,
  DEPLOYMENT_CATEGORY_META,
  DEPLOYMENT_CATEGORY_ORDER,
  type DeploymentCategory,
  type DeploymentEntry,
} from "../data/deployments";

type CheckState = "idle" | "checking" | "ok" | "slow" | "fail" | "manual";

const CHECK_TIMEOUT_MS = 20000;

function openUrl(url: string) {
  window.open(url, "_blank", "noopener,noreferrer");
}

async function pingHealth(url: string): Promise<"ok" | "slow" | "fail" | "manual"> {
  const started = performance.now();
  try {
    const ctrl = new AbortController();
    const timer = window.setTimeout(() => ctrl.abort(), CHECK_TIMEOUT_MS);
    const res = await fetch(url, {
      method: "GET",
      mode: "cors",
      signal: ctrl.signal,
    });
    window.clearTimeout(timer);
    const ms = performance.now() - started;
    if (res.status >= 200 && res.status < 500) {
      return ms > 8000 ? "slow" : "ok";
    }
    return "fail";
  } catch {
    return "manual";
  }
}

function statusBadge(state: CheckState, ms?: number) {
  switch (state) {
    case "checking":
      return (
        <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-semibold text-slate-600">
          Checking…
        </span>
      );
    case "ok":
      return (
        <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-semibold text-emerald-800">
          OK{ms != null ? ` · ${Math.round(ms)}ms` : ""}
        </span>
      );
    case "slow":
      return (
        <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-semibold text-amber-900">
          Slow{ms != null ? ` · ${Math.round(ms)}ms` : ""} (cold start?)
        </span>
      );
    case "fail":
      return (
        <span className="rounded-full bg-red-100 px-2 py-0.5 text-xs font-semibold text-red-800">
          Down / error
        </span>
      );
    case "manual":
      return (
        <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-semibold text-slate-600">
          Open to verify (CORS)
        </span>
      );
    default:
      return null;
  }
}

function DeploymentRow({
  entry,
  state,
  onCheck,
}: {
  entry: DeploymentEntry;
  state: CheckState;
  onCheck: () => void;
}) {
  return (
    <div className="flex flex-col gap-2 rounded-xl border border-slate-200 bg-white p-3 sm:flex-row sm:items-center sm:justify-between">
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <p className="font-semibold text-slate-900">{entry.label}</p>
          {statusBadge(state)}
        </div>
        <p className="mt-0.5 text-xs text-slate-500">{entry.description}</p>
        <p className="mt-1 truncate font-mono text-[10px] text-slate-400">{entry.url}</p>
      </div>
      <div className="flex shrink-0 flex-wrap gap-2">
        {entry.healthUrl ? (
          <button
            type="button"
            onClick={onCheck}
            className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50"
          >
            Ping
          </button>
        ) : null}
        <button
          type="button"
          onClick={() => openUrl(entry.url)}
          className="rounded-lg bg-brand-500 px-3 py-1.5 text-xs font-semibold text-white hover:bg-brand-600"
        >
          Open ↗
        </button>
      </div>
    </div>
  );
}

export function DeploymentHub() {
  const [statuses, setStatuses] = useState<Record<string, CheckState>>({});
  const [checkingAll, setCheckingAll] = useState(false);

  const byCategory = useMemo(() => {
    const map = new Map<DeploymentCategory, DeploymentEntry[]>();
    for (const cat of DEPLOYMENT_CATEGORY_ORDER) map.set(cat, []);
    for (const d of ALL_DEPLOYMENTS) {
      map.get(d.category)!.push(d);
    }
    return map;
  }, []);

  const checkOne = useCallback(async (entry: DeploymentEntry) => {
    if (!entry.healthUrl) return;
    setStatuses((s) => ({ ...s, [entry.id]: "checking" }));
    const result = await pingHealth(entry.healthUrl);
    setStatuses((s) => ({ ...s, [entry.id]: result }));
  }, []);

  const checkAll = useCallback(async () => {
    setCheckingAll(true);
    const withHealth = ALL_DEPLOYMENTS.filter((d) => d.healthUrl);
    for (const entry of withHealth) {
      setStatuses((s) => ({ ...s, [entry.id]: "checking" }));
    }
    for (const entry of withHealth) {
      const result = await pingHealth(entry.healthUrl!);
      setStatuses((s) => ({ ...s, [entry.id]: result }));
    }
    setCheckingAll(false);
  }, []);

  const summary = useMemo(() => {
    const values = Object.values(statuses);
    return {
      ok: values.filter((v) => v === "ok").length,
      slow: values.filter((v) => v === "slow").length,
      fail: values.filter((v) => v === "fail").length,
      manual: values.filter((v) => v === "manual").length,
    };
  }, [statuses]);

  return (
    <section id="deployments" className="scroll-mt-28 border-b border-slate-200 bg-slate-50 py-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Full deployment map</h2>
            <p className="mt-1 max-w-2xl text-sm text-slate-600">
              Live URLs that are verified working — Vercel frontends, Render APIs, Supabase
              Postgres, and admin consoles. Use <strong>Ping</strong> to test or <strong>Open</strong>{" "}
              to verify in a new tab.
            </p>
          </div>
          <button
            type="button"
            disabled={checkingAll}
            onClick={checkAll}
            className="btn-primary shrink-0 disabled:opacity-60"
          >
            {checkingAll ? "Checking all…" : "Check all services"}
          </button>
        </div>

        {(summary.ok > 0 || summary.fail > 0 || summary.slow > 0) && (
          <div className="mb-6 flex flex-wrap gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm">
            <span className="font-semibold text-slate-700">Last check:</span>
            {summary.ok > 0 && (
              <span className="text-emerald-700">{summary.ok} OK</span>
            )}
            {summary.slow > 0 && (
              <span className="text-amber-700">{summary.slow} slow (Render cold start)</span>
            )}
            {summary.fail > 0 && (
              <span className="text-red-700">{summary.fail} failed</span>
            )}
            {summary.manual > 0 && (
              <span className="text-slate-500">{summary.manual} open manually</span>
            )}
          </div>
        )}

        <div className="space-y-8">
          {DEPLOYMENT_CATEGORY_ORDER.map((cat) => {
            const items = byCategory.get(cat) ?? [];
            if (items.length === 0) return null;
            const meta = DEPLOYMENT_CATEGORY_META[cat];
            return (
              <div key={cat}>
                <h3 className="text-lg font-bold text-brand-700">{meta.title}</h3>
                <p className="mb-3 text-sm text-slate-500">{meta.subtitle}</p>
                <div className="space-y-2">
                  {items.map((entry) => (
                    <DeploymentRow
                      key={entry.id}
                      entry={entry}
                      state={statuses[entry.id] ?? "idle"}
                      onCheck={() => checkOne(entry)}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
