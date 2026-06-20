import { LOGO_PATH, PROJECT_META } from "../data/project";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showName?: boolean;
}

const sizes = {
  sm: "h-8 w-8",
  md: "h-10 w-10",
  lg: "h-14 w-14",
};

export function Logo({ size = "md", showName = false }: LogoProps) {
  return (
    <div className="flex items-center gap-2">
      <img
        src={LOGO_PATH}
        alt={`${PROJECT_META.name} logo`}
        className={`${sizes[size]} shrink-0 rounded-full object-cover shadow-sm ring-1 ring-slate-200`}
      />
      {showName ? (
        <span className="whitespace-nowrap text-base font-bold text-slate-900 sm:text-lg">
          {PROJECT_META.name}
        </span>
      ) : null}
    </div>
  );
}
