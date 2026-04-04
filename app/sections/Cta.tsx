"use-client";
import { useState } from "react";
import ContactForm from "../components/modals/ContactForm";
export default function Cta() {
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
    <section className="px-8 py-24">
      <div className="max-w-7xl mx-auto bg-gradient-to-br from-surface-container-high to-surface-container-lowest p-16 relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <img
            className="w-full h-full object-cover"
            data-alt="Digital grid lines and cyber security circuit board patterns with glowing blue nodes on a dark background"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuByhML2VitlojNbYNqSKdcl0M60YzxT6zAYspnBMifADBVOFvZOsNM-9ez5LW5ZBT6dcVisi9xVjVU8PhRpgNcrpH3GEW_JB4WqeYzfnV8VB3g4IjGptKvLFFw9bx7kzYqPqe-xscGBfOK1xZ96FSMirF865i-t1PdoCkqvBWbW3iK5NuFMZaRYEE9zRqDyuMsPCHptEYDb5w9vKbkmqLKvvr34rX_Fh5jB39G6MzoKUzYk3P93TrkRUMCSQC4hKoheNUCQfk9W-cMZ"
          />
        </div>
        <div className="relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-[3.5rem] font-headline font-bold tracking-tight mb-6">
            Let's build your next big idea.
          </h2>
          <p className="text-xl text-on-surface-variant mb-12 max-w-2xl mx-auto">
            Available for selective partnerships and large-scale technical consulting starting Q3
            2024.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button
              onClick={FormModalClick}
              className="bg-primary text-on-primary px-12 py-5 font-bold text-lg hover:shadow-[0_0_30px_rgba(56,189,248,0.5)] transition-all"
            >
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>{" "}
      {formModal && <ContactForm onClose={OnClose} />}
    </section>
  );
}
