export default function LifeCycle() {
  return (
    <section className="px-20 sm:px-8 max-w-7xl overflow-hidden">
      <div className="text-center mb-24">
        <h2 className="text-3xl sm:text-4xl lg:text-[3.5rem] font-headline font-bold mb-4">
          The Development Lifecycle
        </h2>
        <div className="h-1 w-24 bg-primary mx-auto"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
        <div className="p-8 border-l border-outline-variant/10 relative group">
          <span className="text-6xl font-headline font-black text-on-surface/5 absolute -top-8 left-4 group-hover:text-primary/10 transition-colors">
            01
          </span>
          <h4 className="text-xl font-headline font-bold mb-4 text-primary">Discovery</h4>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            Defining project scope through rigorous technical requirements and business goal
            alignment.
          </p>
        </div>
        <div className="p-8 border-l border-outline-variant/10 relative group bg-surface-container-lowest">
          <span className="text-6xl font-headline font-black text-on-surface/5 absolute -top-8 left-4 group-hover:text-primary/10 transition-colors">
            02
          </span>
          <h4 className="text-xl font-headline font-bold mb-4 text-primary">Schematics</h4>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            Designing the system architecture and UI patterns before a single line of production
            code is written.
          </p>
        </div>
        <div className="p-8 border-l border-outline-variant/10 relative group">
          <span className="text-6xl font-headline font-black text-on-surface/5 absolute -top-8 left-4 group-hover:text-primary/10 transition-colors">
            03
          </span>
          <h4 className="text-xl font-headline font-bold mb-4 text-primary">Assembly</h4>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            High-velocity development cycles with weekly deployments and continuous feedback loops.
          </p>
        </div>
        <div className="p-8 border-l border-outline-variant/10 relative group bg-surface-container-lowest">
          <span className="text-6xl font-headline font-black text-on-surface/5 absolute -top-8 left-4 group-hover:text-primary/10 transition-colors">
            04
          </span>
          <h4 className="text-xl font-headline font-bold mb-4 text-primary">Deployment</h4>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            Final optimization, automated testing suites, and seamless migration to production
            environments.
          </p>
        </div>
      </div>
    </section>
  );
}
