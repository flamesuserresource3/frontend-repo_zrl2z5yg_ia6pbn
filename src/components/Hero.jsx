import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative h-[92vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/ESO6PnMadasO0hU3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* subtle gradient overlays that don't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/10 to-slate-950/70" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950 to-transparent" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="bg-gradient-to-br from-white via-cyan-100 to-fuchsia-200 bg-clip-text text-4xl font-extrabold leading-tight text-transparent sm:text-5xl md:text-6xl"
        >
          Your Next Adventure, Beautifully Planned
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-4 max-w-2xl text-base text-white/85 sm:text-lg"
        >
          Discover dreamy destinations, curated stays, and a smart planner that turns wanderlust into effortless itineraries.
        </motion.p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <HeroButton href="#planner" primary>
            Start Planning
          </HeroButton>
          <HeroButton href="#destinations">Explore Places</HeroButton>
        </div>
      </div>
    </section>
  );
}

function HeroButton({ href, children, primary = false }) {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.04, y: -1 }}
      whileTap={{ scale: 0.98 }}
      className={
        'group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition ' +
        (primary
          ? 'bg-white text-slate-900 shadow-lg hover:shadow-xl'
          : 'bg-white/10 text-white backdrop-blur ring-1 ring-white/20 hover:bg-white/20')
      }
    >
      {children}
      <span className="transition-transform group-hover:translate-x-0.5">→</span>
    </motion.a>
  );
}
