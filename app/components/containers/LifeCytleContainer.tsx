import React from "react";
import { CyleLap } from "@/app/utils/data/devCycle";
type LifeCycleProps = {
  cycle: CyleLap;
};
export default function LifeCycleContainer({ cycle }: LifeCycleProps) {
  return (
    <div className="p-8 border-l border-outline-variant/10 relative group">
      <h4 className="text-xl font-headline font-bold mb-4 text-primary">{cycle.title}</h4>
      <p className="text-sm text-on-surface-variant leading-relaxed">
        Defining project scope through rigorous technical requirements and business goal alignment.
      </p>
    </div>
  );
}
