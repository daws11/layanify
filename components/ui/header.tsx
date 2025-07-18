"use client";

import Link from "next/link";
import Logo from "./logo";
import { useState } from "react";

const NAV_ITEMS = [
  { label: "Home", href: "/#hero" },
  // { label: "Workflows", href: "/#workflows" },
  { label: "Fitur", href: "/#features" },
  // { label: "Kenapa Kami?", href: "/#why-us" },
  { label: "Pricing", href: "/#pricing" },
  { label: "FAQ", href: "/faq" },
];

function handleSmoothScroll(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
  if (href.startsWith("/#")) {
    e.preventDefault();
    const id = href.replace("/#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", href);
    }
  }
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="z-30 mt-2 w-full md:mt-5">
      <style>{`html { scroll-behavior: smooth; }`}</style>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-gray-900/90 px-3 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] after:absolute after:inset-0 after:-z-10 after:backdrop-blur-xs">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          {/* Desktop navigation */}
          <nav className="hidden flex-1 items-center justify-center gap-10 md:flex">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-gray-200 transition hover:text-indigo-400"
                onClick={e => handleSmoothScroll(e, item.href)}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop sign in links */}
          <ul className="hidden flex-1 items-center justify-end gap-3 md:flex">
            <li>
              <Link
                href="/signin"
                className="btn-sm relative bg-linear-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] py-[5px] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%]"
              >
                Sign In
              </Link>
            </li>
            <li>
              <Link
                href="/signup"
                className="btn-sm bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] py-[5px] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%]"
              >
                Register
              </Link>
            </li>
          </ul>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex items-center justify-center p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6 text-gray-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden absolute left-0 right-0 top-16 z-40 rounded-b-2xl bg-gray-900/95 shadow-lg border-t border-gray-800 animate-fade-in">
            <nav className="flex flex-col items-center gap-4 py-4">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-base font-medium text-gray-200 transition hover:text-indigo-400"
                  onClick={e => { handleSmoothScroll(e, item.href); setMenuOpen(false); }}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex gap-3 mt-2">
                <Link
                  href="/signin"
                  className="btn-sm relative bg-linear-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] py-[5px] text-gray-300 hover:bg-[length:100%_150%]"
                  onClick={() => setMenuOpen(false)}
                >
                  Sign In
                </Link>
                <Link
                  href="/signup"
                  className="btn-sm bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] py-[5px] text-white hover:bg-[length:100%_150%]"
                  onClick={() => setMenuOpen(false)}
                >
                  Register
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
