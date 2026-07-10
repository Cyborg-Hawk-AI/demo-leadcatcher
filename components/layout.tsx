import Link from "next/link";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center gap-2.5 ${className}`}>
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-brand-400 to-brand-600 shadow-lg shadow-brand-500/20">
        <svg
          className="h-5 w-5 text-white"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.25 15.75h4.5M14.25 19.5h4.5"
          />
        </svg>
      </div>
      <span className="text-lg font-semibold tracking-tight text-white">
        Lead<span className="text-brand-400">Catcher</span>
      </span>
    </Link>
  );
}

export function Header({
  variant = "default",
}: {
  variant?: "default" | "demo";
}) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-surface-900/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />
        <nav className="hidden items-center gap-8 text-sm text-zinc-400 md:flex">
          <a href="/#features" className="transition hover:text-white">
            Features
          </a>
          <a href="/#pricing" className="transition hover:text-white">
            Pricing
          </a>
          <Link href="/demo" className="transition hover:text-white">
            Live Demo
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          {variant === "demo" && (
            <span className="hidden rounded-full border border-brand-500/30 bg-brand-500/10 px-3 py-1 text-xs font-medium text-brand-300 sm:inline">
              Interactive Demo
            </span>
          )}
          <Link
            href="/demo"
            className="rounded-lg bg-brand-500 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-brand-500/25 transition hover:bg-brand-400"
          >
            Try Demo
          </Link>
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-surface-800">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <Logo />
          <p className="text-center text-sm text-zinc-500">
            Never lose another lead to voicemail.
          </p>
          <div className="flex items-center gap-6 text-sm text-zinc-400">
            <Link
              href="/research"
              className="transition hover:text-brand-400"
            >
              How we found this idea
            </Link>
            <Link href="/demo" className="transition hover:text-white">
              Demo
            </Link>
          </div>
        </div>
        <div className="mt-8 border-t border-white/5 pt-8 text-center text-xs text-zinc-600">
          Demo mock built by Idea Miner · Not a live product
        </div>
      </div>
    </footer>
  );
}
