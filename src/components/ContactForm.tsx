"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { services } from "@/lib/data";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex h-full flex-col items-center justify-center rounded-3xl border border-aqua-200 bg-aqua-50 p-10 text-center"
      >
        <CheckCircle2 className="h-12 w-12 text-aqua-500" />
        <h3 className="mt-4 font-display text-xl font-bold text-ink-950">
          Thanks! Your request is in.
        </h3>
        <p className="mt-2 max-w-sm text-sm leading-6 text-slate-600">
          One of our team members will reach out within one business day to
          confirm your service. Talk soon!
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 rounded-full border border-slate-200 bg-white px-6 py-2.5 text-sm font-semibold text-ink-950 transition-colors hover:border-aqua-300 hover:text-aqua-600"
        >
          Send another request
        </button>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Full Name" htmlFor="name">
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Jane Doe"
            className="form-input"
          />
        </Field>
        <Field label="Phone Number" htmlFor="phone">
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="(561) 619-8697"
            className="form-input"
          />
        </Field>
        <Field label="Email Address" htmlFor="email">
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="jane@example.com"
            className="form-input"
          />
        </Field>
        <Field label="Property Address" htmlFor="address" className="sm:col-span-2">
          <input
            id="address"
            name="address"
            type="text"
            required
            placeholder="401 W. Lantana Rd, Lantana, FL 33462"
            className="form-input"
          />
        </Field>
        <Field label="Service Needed" htmlFor="service">
          <select id="service" name="service" className="form-input" defaultValue="">
            <option value="" disabled>
              Select a service
            </option>
            {services.map((service) => (
              <option key={service.slug} value={service.slug}>
                {service.title}
              </option>
            ))}
            <option value="other">Other / Not sure</option>
          </select>
        </Field>
        <Field label="Square Footage (rough estimate)" htmlFor="squareFootage">
          <input
            id="squareFootage"
            name="squareFootage"
            type="text"
            inputMode="numeric"
            placeholder="e.g. 1,500 sq ft"
            className="form-input"
          />
        </Field>
        <Field label="Bedrooms" htmlFor="bedrooms">
          <select id="bedrooms" name="bedrooms" className="form-input" defaultValue="">
            <option value="" disabled>
              Select bedrooms
            </option>
            <option value="studio">Studio</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5+">5+</option>
          </select>
        </Field>
        <Field label="Bathrooms" htmlFor="bathrooms">
          <select id="bathrooms" name="bathrooms" className="form-input" defaultValue="">
            <option value="" disabled>
              Select bathrooms
            </option>
            <option value="1">1</option>
            <option value="1.5">1.5</option>
            <option value="2">2</option>
            <option value="2.5">2.5</option>
            <option value="3">3</option>
            <option value="3.5">3.5</option>
            <option value="4+">4+</option>
          </select>
        </Field>
        <Field
          label="Additional Comments"
          htmlFor="message"
          className="sm:col-span-2"
        >
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Tell us about your space and what you need..."
            className="form-input resize-none"
          />
        </Field>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-aqua-400 to-aqua-500 px-7 py-3.5 text-sm font-semibold text-ink-950 shadow-lg shadow-aqua-500/30 transition-transform hover:scale-[1.02] disabled:opacity-70 sm:w-auto"
      >
        <AnimatePresence mode="wait" initial={false}>
          {status === "submitting" ? (
            <motion.span
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-2"
            >
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending...
            </motion.span>
          ) : (
            <motion.span
              key="idle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-2"
            >
              <Send className="h-4 w-4" />
              Book a Service
            </motion.span>
          )}
        </AnimatePresence>
      </button>

      {status === "error" && (
        <p className="mt-4 text-sm font-medium text-red-600">
          Something went wrong sending your request. Please try again, or
          call us directly.
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  htmlFor,
  children,
  className = "",
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label
        htmlFor={htmlFor}
        className="mb-2 block text-sm font-medium text-slate-700"
      >
        {label}
      </label>
      {children}
    </div>
  );
}
