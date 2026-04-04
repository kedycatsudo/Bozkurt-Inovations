"use-client";
import LifeCycleContainer from "../components/containers/LifeCytleContainer";
import { Cycles, CyleLap } from "../utils/data/devCycle";

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
        {Cycles.map((cycle) => (
          <LifeCycleContainer key={cycle.title} cycle={cycle}></LifeCycleContainer>
        ))}
      </div>
    </section>
  );
}
