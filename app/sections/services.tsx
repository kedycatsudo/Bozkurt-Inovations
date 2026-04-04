export default function Services() {
  return (
    <section className="bg-surface-container-low py-16 sm:py-24 px-20 sm:px-8 max-w-7xl overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-[3.5rem] font-headline font-bold mb-4">
            Engineering Services
          </h2>
          <p className="text-on-surface-variant max-w-lg">
            Beyond standard code. We deliver technical excellence through curated service pillars.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <div className="bg-surface-container p-6 sm:p-8 lg:p-10 flex flex-col group transition-all hover:bg-surface-container-high border border-outline-variant/10">
            <span className="material-symbols-outlined text-primary text-4xl mb-6">layers</span>
            <h3 className="text-xl sm:text-2xl font-headline font-bold mb-4 text-on-surface">
              Web Applications
            </h3>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
              Enterprise-grade React and Next.js applications built with a focus on speed,
              accessibility, and high-conversion UX.
            </p>
            <div className="mt-auto pt-4 border-t border-outline-variant/15 text-primary text-xs font-bold flex items-center gap-2">
              DETAILS <span className="material-symbols-outlined text-sm">trending_flat</span>
            </div>
          </div>
          <div className="bg-surface-container p-6 sm:p-8 lg:p-10 flex flex-col group transition-all hover:bg-surface-container-high border border-outline-variant/10">
            <span className="material-symbols-outlined text-primary text-4xl mb-6">hub</span>
            <h3 className="text-xl sm:text-2xl font-headline font-bold mb-4 text-on-surface">
              API Integrations
            </h3>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
              Seamlessly connecting your ecosystem with secure, documented, and resilient API
              architectures across services.
            </p>
            <div className="mt-auto pt-4 border-t border-outline-variant/15 text-primary text-xs font-bold flex items-center gap-2">
              DETAILS <span className="material-symbols-outlined text-sm">trending_flat</span>
            </div>
          </div>

          <div className="bg-surface-container p-6 sm:p-8 lg:p-10 flex flex-col group transition-all hover:bg-surface-container-high border border-outline-variant/10">
            <span className="material-symbols-outlined text-primary text-4xl mb-6">cloud_done</span>
            <h3 className="text-xl sm:text-2xl font-headline font-bold mb-4 text-on-surface">
              Cloud SaaS
            </h3>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
              Cloud-native software that grows with your user base without compromising stability or
              performance speed.
            </p>
            <div className="mt-auto pt-4 border-t border-outline-variant/15 text-primary text-xs font-bold flex items-center gap-2">
              DETAILS <span className="material-symbols-outlined text-sm">trending_flat</span>
            </div>
          </div>
          <div className="bg-surface-container p-6 sm:p-8 lg:p-10 flex flex-col group transition-all hover:bg-surface-container-high border border-outline-variant/10">
            <span className="material-symbols-outlined text-primary text-4xl mb-6">
              architecture
            </span>
            <h3 className="text-xl sm:text-2xl font-headline font-bold mb-4 text-on-surface">
              Consulting
            </h3>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
              Technical leadership for teams scaling complex digital products and navigating
              architectural hurdles.
            </p>
            <div className="mt-auto pt-4 border-t border-outline-variant/15 text-primary text-xs font-bold flex items-center gap-2">
              DETAILS <span className="material-symbols-outlined text-sm">trending_flat</span>
            </div>
          </div>
          <div className="bg-surface-container p-6 sm:p-8 lg:p-10 flex flex-col group transition-all hover:bg-surface-container-high border border-outline-variant/10">
            <span className="material-symbols-outlined text-primary text-4xl mb-6">security</span>
            <h3 className="text-xl sm:text-2xl font-headline font-bold mb-4 text-on-surface">
              Security Audit
            </h3>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
              Rigorous penetration testing and vulnerability assessments to keep your application
              and data secure.
            </p>
            <div className="mt-auto pt-4 border-t border-outline-variant/15 text-primary text-xs font-bold flex items-center gap-2">
              DETAILS <span className="material-symbols-outlined text-sm">trending_flat</span>
            </div>
          </div>
          <div className="bg-surface-container p-6 sm:p-8 lg:p-10 flex flex-col group transition-all hover:bg-surface-container-high border border-outline-variant/10">
            <span className="material-symbols-outlined text-primary text-4xl mb-6">speed</span>
            <h3 className="text-xl sm:text-2xl font-headline font-bold mb-4 text-on-surface">
              Optimization
            </h3>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
              Refactoring legacy codebases for peak performance, Core Web Vitals excellence, and
              lower latency.
            </p>
            <div className="mt-auto pt-4 border-t border-outline-variant/15 text-primary text-xs font-bold flex items-center gap-2">
              DETAILS <span className="material-symbols-outlined text-sm">trending_flat</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
