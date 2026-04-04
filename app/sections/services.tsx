"use-client";
import ServiceContainer from "../components/containers/ServiceContainer";
import { services } from "../utils/data/servicesData";
export default function Services() {
  return (
    <section className="bg-surface-container-low py-16 sm:py-24 px-20 sm:px-8 max-w-7xl overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-[3.5rem] font-headline font-bold mb-4">
            Engineering Services
          </h2>
          <p className="text-on-surface-variant max-w-lg">
            Beyond standard code. I deliver technical excellence through curated service pillars.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service) => (
            <ServiceContainer key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
