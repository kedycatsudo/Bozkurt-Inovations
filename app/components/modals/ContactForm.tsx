"use client";

type ContactFormProps = {
  onClose: () => void;
};

export default function ContactForm({ onClose }: ContactFormProps) {
  return (
    <div
      className="modal-backdrop fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto p-4 bg-background/90 backdrop-blur-md"
      id="consultation-modal"
    >
      <div className="bg-surface-container-high w-full max-w-xl border border-outline-variant/30 shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-on-surface-variant hover:text-primary transition-colors"
          type="button"
        >
          <span className="material-symbols-outlined text-2xl">X</span>
        </button>
        <div className="p-10">
          <h3 className="text-3xl font-headline font-bold mb-2">Technical Audit</h3>
          <p className="text-on-surface-variant text-sm mb-8">
            Tell us about your project requirements and we'll reach out within 24 hours.
          </p>
          <form className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-primary">
                  Full Name
                </label>
                <input
                  className="w-full bg-surface-container-lowest border border-outline-variant/20 px-4 py-3 text-on-surface focus:outline-none focus:border-primary transition-colors rounded-DEFAULT"
                  placeholder="Jane Doe"
                  type="text"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-primary">
                  Phone Number
                </label>
                <input
                  className="w-full bg-surface-container-lowest border border-outline-variant/20 px-4 py-3 text-on-surface focus:outline-none focus:border-primary transition-colors rounded-DEFAULT"
                  placeholder="+1 (555) 000-0000"
                  type="tel"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-primary">
                  Email Address
                </label>
                <input
                  className="w-full bg-surface-container-lowest border border-outline-variant/20 px-4 py-3 text-on-surface focus:outline-none focus:border-primary transition-colors rounded-DEFAULT"
                  placeholder="jane@company.com"
                  type="email"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-primary">
                  Location
                </label>
                <input
                  className="w-full bg-surface-container-lowest border border-outline-variant/20 px-4 py-3 text-on-surface focus:outline-none focus:border-primary transition-colors rounded-DEFAULT"
                  placeholder="City, Country"
                  type="text"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest font-bold text-primary">
                Describe your idea or problem
              </label>
              <textarea
                className="w-full bg-surface-container-lowest border border-outline-variant/20 px-4 py-3 text-on-surface focus:outline-none focus:border-primary transition-colors rounded-DEFAULT resize-none"
                placeholder="Share a few details about what you're looking to build..."
              ></textarea>
            </div>
            <button
              className="w-full bg-primary text-on-primary py-4 font-bold text-lg hover:shadow-[0_0_20px_rgba(56,189,248,0.4)] transition-all mt-4"
              type="submit"
            >
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
