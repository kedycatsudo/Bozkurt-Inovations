import React from "react";
import { Service } from "@/app/utils/data/servicesData";
type ServiceContainerProps = {
  service: Service;
};
export default function ServiceContainer({ service }: ServiceContainerProps) {
  return (
    <div className="bg-surface-container p-6 sm:p-8 lg:p-10 flex flex-col group transition-all hover:bg-surface-container-high border border-outline-variant/10">
      <span className="text-xl sm:text-4xl material-symbols-outlined text-primary mb-6">
        {service.icon}
      </span>
      <h3 className="text-l sm:text-xl font-headline font-bold mb-4 text-on-surface">
        {service.title}
      </h3>
      <p className="text-on-surface-variant text-sm mb-6">{service.description}</p>
      <div className="flex flex-col mt-auto pt-4 border-t border-outline-variant/15 text-primary text-xs font-bold">
        {service.bullets.map((bullet) => (
          <span key={bullet} className="material-symbols-outlined text-sm">
            {bullet}
          </span>
        ))}
      </div>
    </div>
  );
}
