const SLIDES = [
  { id: 1, src: "/slides/1.png", alt: "Smart Fitao AI — slide 1" },
  { id: 2, src: "/slides/2.png", alt: "Smart Fitao AI — slide 2" },
  { id: 3, src: "/slides/3.png", alt: "Smart Fitao AI — slide 3" },
  { id: 4, src: "/slides/4.png", alt: "Smart Fitao AI — slide 4" },
  { id: 5, src: "/slides/5.png", alt: "Smart Fitao AI — slide 5" },
] as const;

/** Same frame for every slide — images scale inside with object-contain. */
const SLIDE_FRAME_CLASS =
  "min-h-[280px] w-full sm:min-h-[360px] md:min-h-[420px] lg:min-h-[480px]";

export function PresentationSlides() {
  return (
    <section id="slides" className="scroll-mt-20 bg-white py-6 sm:py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-5 px-4 sm:gap-6 sm:px-6">
        {SLIDES.map((slide) => (
          <figure
            key={slide.id}
            className="w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md"
          >
            <div className={`flex items-center justify-center ${SLIDE_FRAME_CLASS}`}>
              <img
                src={slide.src}
                alt={slide.alt}
                className="h-full w-full object-contain"
                loading={slide.id === 1 ? "eager" : "lazy"}
                decoding="async"
              />
            </div>
          </figure>
        ))}
      </div>
    </section>
  );
}
