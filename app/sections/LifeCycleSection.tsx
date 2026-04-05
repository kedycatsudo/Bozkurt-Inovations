import { Cycles } from "../utils/data/devCycle";
export default function CircularLifecycle() {
  return (
    <section className="px-20 sm:px-8 max-w-7xl overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 lg:mb-0">
          <h2 className="text-3xl sm:text-4xl lg:text-[3.5rem] font-headline font-bold mb-4 pt-5">
            The Development Lifecycle
          </h2>
          <div className="h-1 w-24 bg-primary mx-auto mb-12" />
        </div>

        {/* Desktop Circle */}
        <div className="hidden lg:block circle-container scale-75 xl:scale-100 origin-center -mt-20">
          <div className="arrow-path"></div>
          {Cycles.map((step, i) => (
            <div className={`step-node node-${i} text-center group`} key={step.title}>
              <div className="w-24 h-24 mx-auto rounded-xl bg-surface-container-high border border-primary/30 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(142,213,255,0.05)] group-hover:border-primary group-hover:shadow-[0_0_30px_rgba(142,213,255,0.2)] transition-all">
                <span className="text-3xl font-headline font-bold text-primary">{step.id}</span>
              </div>
              <h4 className="text-xl font-headline font-bold mb-3 text-on-surface">{step.title}</h4>
              <p className="text-xs text-on-surface-variant leading-relaxed max-w-[240px] mx-auto">
                {step.description}
              </p>
              {/* Show arrow unless last node */}
            </div>
          ))}
          {/* Center Graphic */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary/10 pointer-events-none">
            <span
              className="material-symbols-outlined text-[300px]"
              style={{ fontVariationSettings: "'wght' 100" }}
            >
              ⚛︎
            </span>
          </div>
        </div>

        {/* Mobile Stacked */}
        <div className="lg:hidden flex flex-col gap-12">
          {Cycles.map((step, i) => (
            <div
              key={step.title}
              className="flex flex-col items-center text-center p-6 bg-surface-container/30 border border-outline-variant/10 rounded-xl"
            >
              <div className="w-20 h-20 rounded-xl bg-surface-container-high border border-primary/30 flex items-center justify-center mb-6">
                <span className="text-2xl font-headline font-bold text-primary">{step.id}</span>
              </div>
              <h4 className="text-xl font-headline font-bold mb-4 text-on-surface">{step.title}</h4>
              <p className="text-sm text-on-surface-variant leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
