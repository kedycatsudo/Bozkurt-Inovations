"use client";
import { useState } from "react";
import ContactForm from "../components/modals/ContactForm";
export default function ArchitectureSection() {
  const [formModal, setFormModal] = useState<boolean>(false);
  const FormModalClick = () => {
    if (formModal === false) {
      setFormModal(true);
    }
  };
  const OnClose = () => {
    setFormModal(false);
  };
  return (
    <section className="px-20 sm:px-8 max-w-7xl overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="z-10">
          <span className="label-md uppercase tracking-[0.2em] text-primary font-bold mb-6 block font-label">
            Full Stack Engineering
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-[3.5rem] leading-[1.1] font-headline font-bold tracking-tighter text-on-surface mb-8">
            Architecture for the
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-container">
              Modern Web.
            </span>
          </h1>
          <p className="text-lg text-on-surface-variant max-w-xl mb-10 leading-relaxed">
            Precision-engineered software solutions that bridge technical logic with business
            strategy. I build scalable, high-performance infrastructures designed for tomorrow.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={FormModalClick}
              className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-8 py-4 font-bold text-lg rounded-DEFAULT hover:shadow-[0_0_20px_rgba(56,189,248,0.4)] transition-all"
            >
              Contact with me
            </button>
            <a
              href="https://kedycatsudo.github.io/newPortfolio/"
              className="border border-outline-variant/30 text-primary px-8 py-4 font-bold text-lg rounded-DEFAULT hover:bg-surface-container-highest transition-all"
            >
              Portfolio
            </a>
          </div>
        </div>
        <div className="relative lg:h-[600px] hidden lg:block">
          <div className="absolute inset-0 bg-gradient-to-tr from-surface-container-low to-transparent rounded-xl overflow-hidden border border-outline-variant/20">
            <img
              alt="A high-tech, minimalist 3D illustration of a complex system architecture"
              className="w-full h-full object-cover mix-blend-lighten opacity-80"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcJE5KTWN8Vm7Wluce2C_IMonGsOgJoPtCJRm9yNrCXqOAR6afzbsghs3sOxO4YyJCK3pKMYsWB3QbZvCxM--eeZJt8GGrNKnu8mk2WVoBnHH0jMjFOxoGqCNXinO-7yYhpM2Z17czxzRnujpccEW_MHsrWOG8ij0XN-vb6h1u5EWRjMdyKb4LofqWula6ngSkQJTwxmUnpr1xxSj23K8efk-cxisjLdZgecxZ38SuooZrXGXGkTeYe-xd5-wHtziLwd8wVz_tsmGg"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 p-8 bg-surface-container-high/90 backdrop-blur-xl border-l-4 border-primary shadow-2xl">
            <div className="flex items-center gap-4 mb-4">
              <span className="material-symbols-outlined text-primary text-3xl">terminal</span>
              <div className="text-xs font-mono text-on-secondary-container">
                system.status: optimal
              </div>
            </div>
            <div className="font-headline text-2xl font-bold text-on-surface">
              99.9% Uptime Architecture
            </div>
          </div>
        </div>
      </div>
      {formModal && <ContactForm onClose={OnClose} />}
    </section>
  );
}
