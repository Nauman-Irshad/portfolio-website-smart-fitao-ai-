import { useRef } from "react";
import { PresentationSlides } from "./components/PresentationSlides";
import { BigLaunchButtons, SiteHeader } from "./components/SiteHeader";
import { PROJECT_META } from "./data/project";

export default function App() {
  const slidesRef = useRef<HTMLDivElement>(null);

  const scrollToSlides = () => {
    slidesRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-white">
      <SiteHeader onScrollAbout={scrollToSlides} />
      <BigLaunchButtons />

      <div ref={slidesRef}>
        <PresentationSlides />
      </div>

      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <footer className="flex flex-col items-center border-t border-slate-200 pt-6 text-center text-xs text-slate-500">
          <img src="/logo/app.png" alt="" className="mb-2 h-10 w-10 rounded-full object-cover" />
          <p>
            {PROJECT_META.name} — {PROJECT_META.tagline}
          </p>
        </footer>
      </div>
    </div>
  );
}
