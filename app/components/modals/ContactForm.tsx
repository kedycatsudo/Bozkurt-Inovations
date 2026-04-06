"use client";
import React, { useState } from "react";

type ContactFormProps = {
  onClose: () => void;
};

export default function ContactForm({ onClose }: ContactFormProps) {
  const [fields, setFields] = useState({
    fullName: "",
    phoneNumber: "",
    emailAddress: "",
    location: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [result, setResult] = useState<null | "success" | "error">(null);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSending(true);
    setResult(null);
    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(fields),
      headers: { "Content-Type": "application/json" },
    });
    setSending(false);
    if (res.ok) setResult("success");
    else setResult("error");
  }

  return (
    <div
      className="p-5 modal-backdrop fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto p-2 sm:p-4 bg-background/90 backdrop-blur-md"
      id="consultation-modal"
    >
      <div className="bg-surface-container-high w-full max-w-xl border border-outline-variant/30 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 sm:top-4 sm:right-4 text-on-surface-variant hover:text-primary transition-colors z-10 p-1"
          type="button"
          aria-label="Close modal"
          disabled={sending}
        >
          <span className="material-symbols-outlined text-xl sm:text-2xl">X</span>
        </button>

        <div className="p-3 sm:p-10">
          <h3 className="text-lg sm:text-3xl font-headline font-bold">Technical Audit</h3>
          <p className="text-on-surface-variant text-lg sm:text-xl py-1 sm:py-5">
            Tell us about your project requirements and we&apos;ll reach out within 24 hours.
          </p>

          <form className="space-y-3 sm:space-y-5" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-5">
              <div className="space-y-1 sm:space-y-2">
                <label className="text-xs sm:text-lg uppercase tracking-widest font-bold text-primary">
                  Full Name
                </label>
                <input
                  required
                  name="fullName"
                  className="w-full bg-surface-container-lowest border border-outline-variant/20 px-3 py-1 sm:py-2 sm:px-4 sm:py-3 text-sm sm:text-base text-on-surface focus:outline-none focus:border-primary transition-colors rounded"
                  placeholder="Jane Doe"
                  type="text"
                  value={fields.fullName}
                  onChange={handleChange}
                  disabled={sending}
                />
              </div>

              <div className="space-y-1 sm:space-y-2">
                <label className="text-xs sm:text-lg uppercase tracking-widest font-bold text-primary">
                  Phone Number
                </label>
                <input
                  required
                  name="phoneNumber"
                  className="w-full bg-surface-container-lowest border border-outline-variant/20 px-3 py-1 sm:py-2 sm:px-4 sm:py-3 text-sm sm:text-base text-on-surface focus:outline-none focus:border-primary transition-colors rounded"
                  placeholder="+1 (555) 000-0000"
                  type="tel"
                  value={fields.phoneNumber}
                  onChange={handleChange}
                  disabled={sending}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-5">
              <div className="space-y-1 sm:space-y-2">
                <label className="text-xs sm:text-lg uppercase tracking-widest font-bold text-primary">
                  Email Address
                </label>
                <input
                  required
                  name="emailAddress"
                  className="w-full bg-surface-container-lowest border border-outline-variant/20 px-3 py-1 sm:py-2 sm:px-4 sm:py-3 text-sm sm:text-base text-on-surface focus:outline-none focus:border-primary transition-colors rounded"
                  placeholder="jane@company.com"
                  type="email"
                  value={fields.emailAddress}
                  onChange={handleChange}
                  disabled={sending}
                />
              </div>

              <div className="space-y-1 sm:space-y-2">
                <label className="text-xs sm:text-lg uppercase tracking-widest font-bold text-primary">
                  Location
                </label>
                <input
                  required
                  name="location"
                  className="w-full bg-surface-container-lowest border border-outline-variant/20 px-3 py-1 sm:py-2 sm:px-4 sm:py-3 text-sm sm:text-base text-on-surface focus:outline-none focus:border-primary transition-colors rounded"
                  placeholder="City, Country"
                  type="text"
                  value={fields.location}
                  onChange={handleChange}
                  disabled={sending}
                />
              </div>
            </div>

            <div className="space-y-1 sm:space-y-2">
              <label className="text-xs sm:text-lg uppercase tracking-widest font-bold text-primary">
                Describe your idea or problem
              </label>
              <textarea
                required
                name="message"
                className="w-full bg-surface-container-lowest border border-outline-variant/20 px-3 py-1 sm:py-2 sm:px-4 sm:py-3 text-sm sm:text-base text-on-surface focus:outline-none focus:border-primary transition-colors rounded resize-none"
                placeholder="Share a few details about what you're looking to build..."
                rows={3}
                value={fields.message}
                onChange={handleChange}
                disabled={sending}
              />
            </div>

            <div className="flex flex-col justify-center items-center">
              <button
                className="w-full bg-primary text-on-primary py-1 sm:py-4 font-bold text-base sm:text-lg hover:shadow-[0_0_20px_rgba(56,189,248,0.4)] transition-all"
                type="submit"
                disabled={sending}
              >
                {sending ? "Sending..." : "Submit Request"}
              </button>
              {result === "success" && <div className="text-green-400 text-sm">Message sent!</div>}
              {result === "error" && (
                <div className="text-red-400 text-sm">There was an error. Try again?</div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
