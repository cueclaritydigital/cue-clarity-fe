import FadeInView from "@/components/animate/FadeInView";
import { slideInLeft, slideInRight } from "@/lib/animations/variants";
import { FiMail, FiMapPin } from "react-icons/fi";

export default function ContactSection() {
  return (
    <section className="section-padding px-4 sm:px-6 bg-[var(--primary-white)]">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left — intro */}
          <FadeInView variants={slideInLeft}>
            <h2
              style={{
                fontFamily: "var(--font-oswald)",
                fontWeight: 800,
                fontSize: "clamp(2.25rem, 6vw, 3.75rem)",
                color: "var(--primary-blue)",
                textTransform: "uppercase",
                lineHeight: 1,
              }}
            >
              Start Your <br />
              Next Chapter
            </h2>

            <p
              className="type-lead mt-6 mb-10 max-w-md"
              style={{ color: "var(--muted-text)" }}
            >
              Ready to find clarity in your next move? Our counsellors are here
              to help you navigate the noise.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-5">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0"
                  style={{
                    backgroundColor: "rgba(41,50,110,0.06)",
                    color: "var(--primary-blue)",
                  }}
                >
                  <FiMail className="w-5 h-5" />
                </div>
                <div>
                  <p
                    className="type-label"
                    style={{ color: "var(--primary-yellow)" }}
                  >
                    Write to us
                  </p>
                  <p
                    className="font-bold text-lg"
                    style={{ color: "var(--primary-blue)" }}
                  >
                    hello@cueclarity.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0"
                  style={{
                    backgroundColor: "rgba(41,50,110,0.06)",
                    color: "var(--primary-blue)",
                  }}
                >
                  <FiMapPin className="w-5 h-5" />
                </div>
                <div>
                  <p
                    className="type-label"
                    style={{ color: "var(--primary-yellow)" }}
                  >
                    Visit us
                  </p>
                  <p
                    className="font-bold text-lg"
                    style={{ color: "var(--primary-blue)" }}
                  >
                    Chandigarh · Pan India (Online)
                  </p>
                </div>
              </div>
            </div>
          </FadeInView>

          {/* Right — form card */}
          <FadeInView variants={slideInRight}>
            <div
              className="p-8 sm:p-10 lg:p-12 rounded-[2.5rem]"
              style={{
                backgroundColor: "var(--surface-card)",
                border: "1px solid var(--secondary-white)",
                boxShadow: "var(--shadow-lg)",
              }}
            >
              <form className="space-y-5" action="#" method="POST">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="about-name"
                      className="type-label ml-3"
                      style={{ color: "var(--muted-text)" }}
                    >
                      Full Name
                    </label>
                    <input
                      id="about-name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Enter your name"
                      className="w-full rounded-xl px-5 py-3.5 text-sm outline-none transition-all focus:ring-2 focus:ring-[var(--primary-yellow)]"
                      style={{
                        backgroundColor: "var(--primary-white)",
                        border: "1px solid transparent",
                        color: "var(--primary-black)",
                      }}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label
                      htmlFor="about-email"
                      className="type-label ml-3"
                      style={{ color: "var(--muted-text)" }}
                    >
                      Email
                    </label>
                    <input
                      id="about-email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="you@example.com"
                      className="w-full rounded-xl px-5 py-3.5 text-sm outline-none transition-all focus:ring-2 focus:ring-[var(--primary-yellow)]"
                      style={{
                        backgroundColor: "var(--primary-white)",
                        border: "1px solid transparent",
                        color: "var(--primary-black)",
                      }}
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label
                    htmlFor="about-message"
                    className="type-label ml-3"
                    style={{ color: "var(--muted-text)" }}
                  >
                    Your Message
                  </label>
                  <textarea
                    id="about-message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us what you're looking for..."
                    className="w-full rounded-xl px-5 py-3.5 text-sm outline-none transition-all resize-none focus:ring-2 focus:ring-[var(--primary-yellow)]"
                    style={{
                      backgroundColor: "var(--primary-white)",
                      border: "1px solid transparent",
                      color: "var(--primary-black)",
                    }}
                  />
                </div>
                <button
                  type="submit"
                  className="btn-primary w-full !py-4 uppercase tracking-widest text-sm"
                >
                  Send Message
                </button>
              </form>
            </div>
          </FadeInView>
        </div>
      </div>
    </section>
  );
}
