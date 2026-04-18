"use client";
import { useState } from "react";
import FadeInView from "@/components/animate/FadeInView";
import { slideInLeft, slideInRight } from "@/lib/animations/variants";
import {
  FiMail,
  FiMapPin,
  FiPhone,
  FiChevronDown,
  FiCheckCircle,
  FiAlertCircle,
} from "react-icons/fi";

const WHO_OPTIONS = [
  "Student (8-10 Std)",
  "Student (11-12 Std)",
  "Student (UG)",
  "Student (PG)",
  "Parent (8-10 Std)",
  "Parent (11-12 Std)",
  "Parent (UG)",
  "Parent (PG)",
  "Working Professional (1-10 yrs exp)",
  "Senior Working Professional (10+ yrs)",
  "Executive with Career Break",
  "Principal/Teacher",
  "Others",
];

const CONTACT_ITEMS = [
  {
    icon: <FiMail size={20} />,
    label: "Write to us",
    value: "info@cueclarity.com",
    href: 'mailto:info@cueclarity.com'
  },
  {
    icon: <FiPhone size={20} />,
    label: "Call us",
    value: "+91 8652222525",
    href: 'tel:+918652222525'
  },
  {
    icon: <FiMapPin size={20} />,
    label: "Visit us",
    value: "Navi Mumbai, Maharashtra, India-410209",
    href: ''
  },
];

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  // UPDATED: Now points to your internal Next.js API route
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone || "—",
          role: form.role || "—",
          message: form.message,
        }),
      });
      
      const data = await res.json();
      
      if (!data.success) {
        throw new Error(data.message || "Something went wrong.");
      }
      
      setStatus("success");
      setForm({ name: "", email: "", phone: "", role: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <section className="relative py-24 px-4 sm:px-6 overflow-hidden bg-white">
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-100px] right-[-60px] w-[500px] h-[500px] bg-yellow-200/15 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-120px] left-[-80px] w-[400px] h-[400px] bg-blue-200/15 blur-[120px] rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* ── Left — intro ── */}
          <FadeInView variants={slideInLeft}>
            <span className="text-yellow-500 text-base font-bold tracking-widest uppercase">
              Get in touch
            </span>

            <h2 className="mt-5 text-4xl sm:text-5xl lg:text-6xl heading-font text-[var(--primary-blue)]">
              Start Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary-yellow)] to-orange-400">
                Next Chapter
              </span>
            </h2>

            {/* Accent bar */}
            <div className="mt-5 mb-7 h-[3px] w-14 rounded-full bg-yellow-400" />

            <p className="text-lg text-gray-500 leading-relaxed mb-10 max-w-md">
              Ready to find clarity in your next move? Our counsellors are here
              to help you navigate the noise.
            </p>

            <div className="space-y-5">
              {CONTACT_ITEMS.map((item) => (
                <a key={item.label} className="flex items-center gap-5 group cursor-pointer" href={item.href}>
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-900 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs tracking-widest uppercase text-gray-400 font-medium">
                      {item.label}
                    </p>
                    <p className="font-semibold text-lg text-blue-950">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
              
            </div>
          </FadeInView>

          {/* ── Right — form card ── */}
          <FadeInView variants={slideInRight}>
            <div className="group relative rounded-3xl border border-gray-100 bg-white/70 backdrop-blur-xl p-8 sm:p-10 lg:p-12 shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-500">
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-b from-yellow-100/30 to-transparent pointer-events-none" />

              <div className="relative">
                {/* Card header */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-blue-950 tracking-tight mb-1">
                    Send us a message
                  </h3>
                  <p className="text-sm text-gray-400">
                    We&apos;ll get back to you within 24 hours.
                  </p>
                </div>

                <form className="space-y-5" onSubmit={handleSubmit}>
                  {/* Row 1 — Name + Email */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <FieldWrap label="Full Name" htmlFor="contact-name">
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        placeholder="Enter your name"
                        className="w-full rounded-lg px-4 py-3 text-sm bg-gray-50 border border-gray-200 text-blue-950 placeholder:text-gray-400 outline-none focus:border-blue-900 focus:ring-2 focus:ring-blue-900/10 transition-all duration-200"
                        value={form.name}
                        onChange={handleChange}
                      />
                    </FieldWrap>

                    <FieldWrap label="Email" htmlFor="contact-email">
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        placeholder="you@example.com"
                        className="w-full rounded-lg px-4 py-3 text-sm bg-gray-50 border border-gray-200 text-blue-950 placeholder:text-gray-400 outline-none focus:border-blue-900 focus:ring-2 focus:ring-blue-900/10 transition-all duration-200"
                        value={form.email}
                        onChange={handleChange}
                      />
                    </FieldWrap>
                  </div>

                  {/* Row 2 — Phone + Who are you */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <FieldWrap label="Phone Number" htmlFor="contact-phone">
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        placeholder="+91 00000 00000"
                        className="w-full rounded-lg px-4 py-3 text-sm bg-gray-50 border border-gray-200 text-blue-950 placeholder:text-gray-400 outline-none focus:border-blue-900 focus:ring-2 focus:ring-blue-900/10 transition-all duration-200"
                        value={form.phone}
                        onChange={handleChange}
                      />
                    </FieldWrap>

                    <FieldWrap label="I am a…" htmlFor="contact-role">
                      <div className="relative">
                        <select
                          id="contact-role"
                          name="role"
                          required
                          value={form.role}
                          onChange={handleChange}
                          className="w-full rounded-lg px-4 py-3 text-sm bg-gray-50 border border-gray-200 text-blue-950 outline-none focus:border-blue-900 focus:ring-2 focus:ring-blue-900/10 transition-all duration-200 appearance-none pr-10 cursor-pointer truncate"
                        >
                          <option value="" disabled className="text-gray-400">
                            — Select —
                          </option>
                          {WHO_OPTIONS.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                        <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-blue-900">
                          <FiChevronDown size={14} strokeWidth={1.8} />
                        </span>
                      </div>
                    </FieldWrap>
                  </div>

                  {/* Message */}
                  <FieldWrap label="Your Message" htmlFor="contact-message">
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={4}
                      placeholder="Tell us what you're looking for…"
                      className="w-full rounded-lg px-4 py-3 text-sm bg-gray-50 border border-gray-200 text-blue-950 placeholder:text-gray-400 outline-none focus:border-blue-900 focus:ring-2 focus:ring-blue-900/10 transition-all duration-200 resize-none"
                      value={form.message}
                      onChange={handleChange}
                    />
                  </FieldWrap>

                  {/* Status feedback */}
                  {status === "success" && (
                    <div className="flex items-center gap-2.5 px-4 py-3 rounded-xl text-sm font-medium bg-green-50 text-green-700">
                      <FiCheckCircle size={16} className="shrink-0" />
                      Message sent! We&apos;ll get back to you within 24 hours.
                    </div>
                  )}
                  {status === "error" && (
                    <div className="flex items-center gap-2.5 px-4 py-3 rounded-xl text-sm font-medium bg-red-50 text-red-600">
                      <FiAlertCircle size={16} className="shrink-0" />
                      {errorMsg || "Failed to send. Please try again."}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full py-4 rounded-xl bg-[var(--primary-blue)] text-white text-sm font-semibold uppercase tracking-widest hover:bg-[var(--accent-blue)] transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed mt-1"
                  >
                    {status === "loading" ? "Sending…" : "Send Message →"}
                  </button>
                </form>
              </div>
            </div>
          </FadeInView>
        </div>
      </div>
    </section>
  );
}

/* ── tiny helper so label+input stay DRY ── */
function FieldWrap({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <label
        htmlFor={htmlFor}
        className="text-xs font-medium tracking-wide text-gray-400 ml-1 block"
      >
        {label}
      </label>
      {children}
    </div>
  );
}