"use client";
import ArchitectureSection from "./sections/Architecture";
import Services from "./sections/services";
import LifeCycle from "./sections/LifeCycleSection";
import Cta from "./sections/Cta";
export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-[#0F172A]">
      <header>
        <div className="flex items-center justify-center gap-4 sm:gap-6">
          <a
            href="https://github.com/kedycatsudo"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/dorukkocausta/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://kedycatsudo.github.io/newPortfolio/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary transition-colors"
          >
            Portfolio
          </a>
        </div>
      </header>
      <main className=" pt-2 background bg-[#0F172A] ">
        <ArchitectureSection></ArchitectureSection>
        <Services></Services>
        <LifeCycle></LifeCycle>
        <Cta></Cta>
      </main>
      <footer className="w-full py-6 text-center text-on-surface-variant text-xs sm:text-sm">
        <div className="flex items-center justify-center gap-4 sm:gap-6">
          <a
            href="https://github.com/kedycatsudo"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/dorukkocausta/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://kedycatsudo.github.io/newPortfolio/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary transition-colors"
          >
            Portfolio
          </a>
        </div>
        <p className="mt-2">&copy; Doruk Kocausta 2026</p>
      </footer>
    </div>
  );
}
