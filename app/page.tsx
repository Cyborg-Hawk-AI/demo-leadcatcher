import Link from "next/link";
import { Header, Footer } from "@/components/layout";
import { FeatureGrid } from "@/components/feature-grid";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-brand-500/10 blur-3xl" />
          <div className="absolute right-0 top-1/3 h-[400px] w-[400px] rounded-full bg-emerald-500/5 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 pb-24 pt-20 sm:px-6 lg:px-8 lg:pt-28">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-500/20 bg-brand-500/10 px-4 py-1.5 text-sm text-brand-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-500" />
              </span>
              AI responds in under 60 seconds
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Stop losing leads to{" "}
              <span className="text-gradient">voicemail</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-zinc-400 sm:text-xl">
              LeadCatcher captures every missed call and voicemail, qualifies
              the lead with AI, and sends a personalized follow-up text before
              they call your competitor.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/demo"
                className="glow w-full rounded-xl bg-brand-500 px-8 py-3.5 text-center text-base font-semibold text-white transition hover:bg-brand-400 sm:w-auto"
              >
                See it in action
              </Link>
              <a
                href="#pricing"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-8 py-3.5 text-center text-base font-medium text-zinc-300 transition hover:bg-white/10 sm:w-auto"
              >
                View pricing
              </a>
            </div>
          </div>

          {/* Hero preview card */}
          <div className="mx-auto mt-16 max-w-4xl animate-slide-up">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-surface-800/80 shadow-2xl backdrop-blur">
              <div className="flex items-center gap-2 border-b border-white/5 px-4 py-3">
                <div className="h-3 w-3 rounded-full bg-red-500/80" />
                <div className="h-3 w-3 rounded-full bg-amber-500/80" />
                <div className="h-3 w-3 rounded-full bg-brand-500/80" />
                <span className="ml-2 text-xs text-zinc-500">
                  LeadCatcher — Live pipeline
                </span>
              </div>
              <div className="grid gap-4 p-6 md:grid-cols-3">
                <div className="rounded-xl border border-brand-500/20 bg-brand-500/5 p-4">
                  <p className="text-xs font-medium uppercase tracking-wider text-brand-400">
                    Just now
                  </p>
                  <p className="mt-2 text-sm font-medium text-white">
                    Voicemail from Marcus Chen
                  </p>
                  <p className="mt-1 text-xs text-zinc-400">
                    Hail damage roof repair — insurance claim filed
                  </p>
                  <p className="mt-3 text-xs text-brand-300">
                    ✓ SMS sent in 47 seconds
                  </p>
                </div>
                <div className="rounded-xl border border-white/5 bg-surface-700/50 p-4">
                  <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                    2 min ago
                  </p>
                  <p className="mt-2 text-sm font-medium text-white">
                    Missed call — auto-text sent
                  </p>
                  <p className="mt-1 text-xs text-zinc-400">
                    &quot;Hey, saw you called — how can I help?&quot;
                  </p>
                  <p className="mt-3 text-xs text-amber-300">
                    Awaiting reply · follow-up in 22h
                  </p>
                </div>
                <div className="rounded-xl border border-white/5 bg-surface-700/50 p-4">
                  <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                    Open quote
                  </p>
                  <p className="mt-2 text-sm font-medium text-white">
                    Diane Foster — Landscaping
                  </p>
                  <p className="mt-1 text-xs text-zinc-400">
                    $14,200 quote · no reply 24h
                  </p>
                  <p className="mt-3 text-xs text-amber-300">
                    Follow-up sent automatically
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social proof strip */}
      <section className="border-y border-white/5 bg-surface-800/50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { value: "<60s", label: "Avg. response time" },
              { value: "4×", label: "More leads captured" },
              { value: "$69", label: "Per location / month" },
              { value: "1 lead", label: "Pays for months" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-bold text-white">{stat.value}</p>
                <p className="mt-1 text-sm text-zinc-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FeatureGrid />

      {/* How it works */}
      <section className="border-t border-white/5 bg-surface-800/30 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              How it works
            </h2>
            <p className="mt-4 text-zinc-400">
              From missed call to booked job — fully automated
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-4">
            {[
              {
                step: "01",
                title: "Call missed",
                desc: "Customer calls while you're on a job site. Goes to voicemail or rings out.",
              },
              {
                step: "02",
                title: "AI transcribes",
                desc: "Whisper transcribes voicemail. No message? Auto-SMS fires instantly.",
              },
              {
                step: "03",
                title: "Smart reply",
                desc: "AI crafts a personalized text referencing their specific need.",
              },
              {
                step: "04",
                title: "Pipeline update",
                desc: "Lead lands in your kanban with summary, status, and follow-up schedule.",
              },
            ].map((item) => (
              <div key={item.step} className="relative">
                <span className="text-5xl font-bold text-brand-500/20">
                  {item.step}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-wider text-brand-400">
              Simple pricing
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              One recovered lead pays for months
            </h2>
          </div>
          <div className="mx-auto mt-12 max-w-lg">
            <div className="glow rounded-2xl border border-brand-500/30 bg-gradient-to-b from-brand-500/10 to-surface-800 p-8">
              <div className="text-center">
                <p className="text-sm font-medium text-brand-300">
                  Per business location
                </p>
                <div className="mt-4 flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-bold text-white">$69</span>
                  <span className="text-zinc-400">/month</span>
                </div>
                <p className="mt-4 text-sm text-zinc-400">
                  No per-message fees. No CRM bloat. Just lead capture and
                  follow-up that works.
                </p>
              </div>
              <ul className="mt-8 space-y-3 text-sm text-zinc-300">
                {[
                  "Unlimited missed-call & voicemail capture",
                  "AI transcription & instant SMS replies",
                  "Unified kanban pipeline",
                  "Automated 24h follow-up sequences",
                  "Quote status tracking & reminders",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg
                      className="mt-0.5 h-5 w-5 shrink-0 text-brand-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/demo"
                className="mt-8 block w-full rounded-xl bg-brand-500 py-3.5 text-center font-semibold text-white transition hover:bg-brand-400"
              >
                Try the interactive demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/5 py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Your competitors answer faster.{" "}
            <span className="text-gradient">Or they used to.</span>
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            See how LeadCatcher turns every missed call into a conversation —
            no backend setup, no API keys, just click demo.
          </p>
          <Link
            href="/demo"
            className="mt-8 inline-flex rounded-xl bg-white px-8 py-3.5 font-semibold text-surface-900 transition hover:bg-zinc-200"
          >
            Launch demo →
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
