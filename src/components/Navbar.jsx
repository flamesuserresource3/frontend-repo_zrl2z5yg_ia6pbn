import { useState } from 'react';
import { Plane, MapPin, Calendar, Star } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: '#home', label: 'Home' },
    { href: '#destinations', label: 'Destinations' },
    { href: '#planner', label: 'Planner' },
  ];

  return (
    <nav className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-xl border border-white/10 bg-white/10 backdrop-blur supports-[backdrop-filter]:bg-white/10">
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <a href="#home" className="group inline-flex items-center gap-2">
              <div className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-cyan-400/80 to-fuchsia-500/80">
                <Plane className="h-5 w-5 text-white drop-shadow" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-sm font-semibold text-white">VibeTravel</span>
                <span className="text-[10px] text-white/70">Plan. Explore. Feel.</span>
              </div>
            </a>

            <div className="hidden items-center gap-8 md:flex">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-sm text-white/90 transition-colors hover:text-white"
                >
                  {l.label}
                </a>
              ))}
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="#planner"
                className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-slate-900 shadow-md backdrop-blur transition hover:bg-white"
              >
                <Calendar className="h-4 w-4" /> Start Planning
              </motion.a>
            </div>

            <button
              onClick={() => setOpen((v) => !v)}
              className="inline-flex items-center gap-2 rounded-md p-2 text-white/90 ring-1 ring-white/15 md:hidden"
              aria-label="Open menu"
            >
              <MapPin className="h-5 w-5" />
            </button>
          </div>

          {open && (
            <div className="border-t border-white/10 px-4 py-3 md:hidden">
              <div className="grid gap-2">
                {links.map((l) => (
                  <a
                    onClick={() => setOpen(false)}
                    key={l.href}
                    href={l.href}
                    className="rounded-md px-3 py-2 text-sm text-white/90 hover:bg-white/10"
                  >
                    {l.label}
                  </a>
                ))}
                <a
                  onClick={() => setOpen(false)}
                  href="#planner"
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-medium text-slate-900"
                >
                  <Star className="h-4 w-4" /> Start Planning
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
