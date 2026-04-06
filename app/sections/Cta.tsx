"use client";
import Image from "next/image";
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
    <section className="py-24 px-5 lg:px-20">
      <div className="mx-auto bg-gradient-to-br from-surface-container-high to-surface-container-lowest p-5 relative text-center">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <Image
            className="object-cover object-[center_30%] sm:object-center"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuByhML2VitlojNbYNqSKdcl0M60YzxT6zAYspnBMifADBVOFvZOsNM-9ez5LW5ZBT6dcVisi9xVjVU8PhRpgNcrpH3GEW_JB4WqeYzfnV8VB3g4IjGptKvLFFw9bx7kzYqPqe-xscGBfOK1xZ96FSMirF865i-t1PdoCkqvBWbW3iK5NuFMZaRYEE9zRqDyuMsPCHptEYDb5w9vKbkmqLKvvr34rX_Fh5jB39G6MzoKUzYk3P93TrkRUMCSQC4hKoheNUCQfk9W-cMZ"
            alt="Digital grid lines and cyber security circuit board patterns"
            fill
            sizes="(max-width: 640px) calc(100vw - 4rem), (max-width: 1024px) calc(100vw - 6rem), 1280px"
          />
        </div>
        <div className="relative z-10">
          <h2 className="text-2xl sm:text-4xl lg:text-[3.5rem] font-headline font-bold tracking-tight mb-6">
            Let&apos;s build your next big idea.
          </h2>
          <p className="text-lg text-on-surface-variant mb-12 max-w-2xl mx-auto">
            Available for selective partnerships and large-scale technical consulting.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button
              onClick={FormModalClick}
              className="bg-primary text-on-primary p-3 sm:px-10 font-bold text-lg hover:shadow-[0_0_30px_rgba(56,189,248,0.5)] transition-all"
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
