import type { Metadata } from "next";
import Link from "next/link";
import { Header, Footer } from "@/components/layout";

export const metadata: Metadata = {
  title: "Research — How we found LeadCatcher",
  description:
    "The Idea Miner research story behind LeadCatcher — validation, pain points, and source links.",
};

const checklist = [
  { label: "10+ posts with this pain", passed: true },
  { label: "Paying for inferior solution", passed: false },
  { label: "Reachable channel", passed: true },
  { label: "MVP < 4 weeks", passed: true },
  { label: "Price point high enough", passed: true },
  { label: "Hair-on-fire problem", passed: true },
  { label: "Can pre-sell", passed: true },
  { label: "< 3 competitors", passed: true },
  { label: "AI-agent operable", passed: true },
];

const painPoints = [
  {
    problem:
      "Manually counting cash is tedious and time-consuming for business owners who handle significant amounts of physical money.",
    persona: "Small business owner, cash-heavy operations",
    workaround: "Manual cash counting",
    frequency: "daily",
    wtp: "Expressed frustration and desire to streamline",
    url: "https://www.reddit.com/r/smallbusiness/comments/1ug2zby/whats_one_repetitive_task_in_your_business_that/",
  },
  {
    problem:
      "Confusion between new inquiries and actual follow-ups leads to lost leads when calls go to voicemail, with information scattered across voicemails, texts, spreadsheets, and unpursued quotes.",
    persona: "Local service provider, small business owner",
    workaround:
      "Voicemail, text messages, spreadsheet notes, manual tracking",
    frequency: "daily",
    wtp: "Expressed frustration with current process",
    url: "https://www.reddit.com/r/smallbusiness/comments/1ug2zby/whats_one_repetitive_task_in_your_business_that/",
  },
  {
    problem:
      "Managing vague appointment requests with back-and-forth communication about availability is tedious and could be resolved with smart scheduling that considers travel time.",
    persona: "Service provider, small business owner",
    workaround: "Manual back-and-forth communication with customers",
    frequency: "daily",
    wtp: "Expressed desire for better scheduling tool",
    url: "https://www.reddit.com/r/AskReddit/comments/1ultmx7/small_business_owners_of_reddit_what_is_a_problem/",
  },
  {
    problem:
      "Manual inventory counting every month is tedious and time-consuming.",
    persona: "Small business owner",
    workaround: "Manual monthly inventory count",
    frequency: "monthly",
    wtp: "Expressed frustration with current process",
    url: "https://www.reddit.com/r/AskReddit/comments/1ultmx7/small_business_owners_of_reddit_what_is_a_problem/",
  },
  {
    problem:
      "Vague appointment requests from customers lead to lengthy back-and-forth communication that could be resolved with smart scheduling considering travel time.",
    persona: "Service provider, small business owner",
    workaround: "Manual back-and-forth scheduling communication",
    frequency: "daily",
    wtp: "Expressed desire for better solution",
    url: "https://www.reddit.com/r/AskReddit/comments/1ultmx7/small_business_owners_of_reddit_what_is_a_problem/",
  },
  {
    problem:
      "Repetitive administrative tasks like follow-ups, status updates, and spreadsheet updates consume significant time and could be automated with simple rules.",
    persona: "Small business owner",
    workaround:
      "Manual follow-ups, status updates, spreadsheet management",
    frequency: "daily",
    wtp: "Seeking automation solutions",
    url: "https://www.reddit.com/r/smallbusiness/comments/1umj4ts/how_do_you_manage_repetitive_admin_work_without/",
  },
];

const coreFeatures = [
  "Voicemail transcription and instant SMS follow-up: when a call is missed, AI transcribes voicemail and sends a personalized text response within 60 seconds",
  "Lead intake via missed-call SMS: if no voicemail left, auto-texts 'Hey, saw you called — how can I help?' to capture intent",
  "Unified lead pipeline: all leads from calls, texts, and web form in one kanban board with AI-generated summaries",
  "Automated follow-up sequences: if no response in 24h, sends a second touch; configurable cadence",
  "Quote status tracker: marks leads as New / Quoted / Won / Lost with reminders to follow up on open quotes",
];

function Section({
  id,
  title,
  children,
}: {
  id?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="text-2xl font-bold text-white">{title}</h2>
      <div className="mt-4 space-y-4 text-zinc-300 leading-relaxed">{children}</div>
    </section>
  );
}

export default function ResearchPage() {
  const passedCount = checklist.filter((c) => c.passed).length;

  return (
    <div className="min-h-screen">
      <Header />

      <div className="border-b border-white/5 bg-surface-800/30">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
          <p className="text-sm font-medium uppercase tracking-wider text-brand-400">
            Idea Miner Research
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-white">
            How we found LeadCatcher
          </h1>
          <p className="mt-4 text-lg text-zinc-400">
            AI agent captures every missed call and voicemail, qualifies the
            lead, and sends a follow-up text within 60 seconds.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-1.5 text-sm text-brand-300">
              Score: 101/130
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-zinc-300">
              Validation: {passedCount}/9 passed
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-zinc-300">
              Cluster: Lead & Follow-Up Tracking
            </span>
          </div>
        </div>
      </div>

      <article className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <div className="space-y-16">
          <Section title="Why this research program exists">
            <p>
              This app was auto-generated by the <strong className="text-white">Idea Miner</strong> pipeline — a twice-daily research
              program that hunts for validated micro-SaaS opportunities from real
              people expressing real pain online (Reddit, Hacker News, Stack
              Exchange, GitHub, and more).
            </p>

            <h3 className="text-lg font-semibold text-white">
              What we&apos;re looking for
            </h3>
            <ul className="list-disc space-y-2 pl-6 text-zinc-400">
              <li>
                <strong className="text-zinc-200">Self-running micro-SaaS</strong> — one specific problem, a small dedicated user base, minimal
                manual ops (digital-nomad friendly).
              </li>
              <li>
                <strong className="text-zinc-200">AI-agent operable</strong> — daily support, content, and processing handled by autonomous
                agents on self-hosted LLMs (not locked into expensive cloud API token bills).
              </li>
              <li>
                <strong className="text-zinc-200">Real pain only</strong> — every idea must trace back to actual posts where people complain,
                ask &quot;is there a tool for X?&quot;, or say &quot;I wish someone would build…&quot;.
              </li>
              <li>
                <strong className="text-zinc-200">B2B & recurring revenue preferred</strong> — higher willingness to pay, lower churn.
              </li>
              <li>
                <strong className="text-zinc-200">Markets with &lt;3 established competitors</strong> — room for a focused wedge.
              </li>
              <li>
                <strong className="text-zinc-200">MVP in under 4 weeks</strong> — solo-dev buildable, no regulatory/hardware/capital barriers.
              </li>
            </ul>
          </Section>

          <Section title="Why this demo was built">
            <p>
              When an idea passes the validation gate (≥8/9 checklist items, not
              declining on Google Trends, not previously built), the pipeline
              automatically ships a working mock on Vercel so we can see the
              product story, not just a slide deck.
            </p>
          </Section>

          <Section title="This specific idea">
            <p>
              LeadCatcher scored <strong className="text-brand-400">101/130</strong> on the weighted rubric and passed{" "}
              <strong className="text-brand-400">8/9</strong> validation checks.
            </p>
            <p>
              <strong className="text-white">Cluster:</strong> Lead & Follow-Up
              Tracking for Small Service Businesses
            </p>
            <p>
              <strong className="text-white">Why we built this demo:</strong>{" "}
              Hyper-focused on the exact moment of lead loss (missed call) rather
              than a broad CRM; self-hosted LLM transcription keeps Twilio costs
              as the only variable cost
            </p>
          </Section>

          <Section title="Product specification">
            <p>
              <strong className="text-white">Target customer:</strong> Local
              service businesses (contractors, roofers, HVAC, landscapers,
              cleaning companies) that miss leads when calls go to voicemail and
              lose them in scattered notes
            </p>

            <h3 className="text-lg font-semibold text-white">
              Core MVP features
            </h3>
            <ul className="list-disc space-y-2 pl-6 text-zinc-400">
              {coreFeatures.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>

            <p>
              <strong className="text-white">Pricing:</strong> Monthly flat SaaS
              fee at $69/month per business location (one missed lead recovered
              pays for months of subscription)
            </p>

            <p>
              <strong className="text-white">Go-to-market:</strong> r/smallbusiness,
              r/Contractors, Facebook groups for home service businesses, Google
              Ads targeting &apos;missed call text back software&apos;, partnerships
              with local business associations
            </p>

            <p>
              <strong className="text-white">Competitive landscape:</strong>{" "}
              Missed Call Text Back tools (Eliza, HighLevel&apos;s feature) exist
              but require expensive full CRM suites. No lightweight standalone
              tool focused purely on local service lead capture + follow-up
              pipeline.
            </p>

            <p>
              <strong className="text-white">Agentic automation plan:</strong>{" "}
              Call monitor agent detects missed calls via Twilio webhooks;
              transcription agent runs Whisper on voicemail audio; response agent
              generates and sends contextual SMS; follow-up agent manages timed
              sequences; pipeline agent updates lead status based on reply
              content — owner only touches the kanban to mark quotes won/lost
            </p>

            <p>
              <strong className="text-white">MVP estimate:</strong> Python +
              Twilio (voice + SMS) + Whisper (self-hosted transcription) + LLaMA
              3 for response generation + Postgres + React kanban board; 3 weeks
              solo dev
            </p>
          </Section>

          <Section id="validation" title="Validation checklist (8/9)">
            <div className="grid gap-3 sm:grid-cols-2">
              {checklist.map((item) => (
                <div
                  key={item.label}
                  className={`flex items-center gap-3 rounded-lg border px-4 py-3 ${
                    item.passed
                      ? "border-brand-500/20 bg-brand-500/5"
                      : "border-white/5 bg-surface-800/50"
                  }`}
                >
                  <span
                    className={
                      item.passed ? "text-brand-400" : "text-zinc-600"
                    }
                  >
                    {item.passed ? "✓" : "○"}
                  </span>
                  <span
                    className={
                      item.passed ? "text-zinc-200" : "text-zinc-500"
                    }
                  >
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </Section>

          <Section title="Source pain points (real posts)">
            <div className="space-y-6">
              {painPoints.map((pp) => (
                <div
                  key={pp.url + pp.problem.slice(0, 40)}
                  className="rounded-xl border border-white/5 bg-surface-800/50 p-5"
                >
                  <p className="font-medium text-white">{pp.problem}</p>
                  <dl className="mt-4 grid gap-2 text-sm sm:grid-cols-2">
                    <div>
                      <dt className="text-zinc-500">Persona</dt>
                      <dd className="text-zinc-300">{pp.persona}</dd>
                    </div>
                    <div>
                      <dt className="text-zinc-500">Workaround</dt>
                      <dd className="text-zinc-300">{pp.workaround}</dd>
                    </div>
                    <div>
                      <dt className="text-zinc-500">Frequency</dt>
                      <dd className="text-zinc-300">{pp.frequency}</dd>
                    </div>
                    <div>
                      <dt className="text-zinc-500">WTP signal</dt>
                      <dd className="text-zinc-300">{pp.wtp}</dd>
                    </div>
                  </dl>
                  <a
                    href={pp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1 text-sm text-brand-400 hover:text-brand-300"
                  >
                    View source post →
                  </a>
                </div>
              ))}
            </div>
          </Section>

          <div className="rounded-xl border border-white/5 bg-surface-800/30 p-6 text-center text-sm text-zinc-500">
            Generated by Idea Miner run 2026-07-10-pm on 2026-07-10 19:17 UTC
          </div>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/demo"
              className="rounded-xl bg-brand-500 px-6 py-3 font-semibold text-white transition hover:bg-brand-400"
            >
              Try the interactive demo
            </Link>
            <Link
              href="/"
              className="rounded-xl border border-white/10 px-6 py-3 font-medium text-zinc-300 transition hover:bg-white/5"
            >
              Back to home
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
