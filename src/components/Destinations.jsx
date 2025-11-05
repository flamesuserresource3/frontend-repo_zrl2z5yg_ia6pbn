import { motion } from 'framer-motion';
import { MapPin, Star } from 'lucide-react';

const spots = [
  {
    title: 'Santorini, Greece',
    img: 'https://images.unsplash.com/photo-1506461883276-594a12b11cf3?q=80&w=1974&auto=format&fit=crop',
    rating: 4.9,
    tag: 'Romantic • Island',
  },
  {
    title: 'Kyoto, Japan',
    img: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d0?q=80&w=2070&auto=format&fit=crop',
    rating: 4.8,
    tag: 'Culture • Temples',
  },
  {
    title: 'Banff, Canada',
    img: 'https://images.unsplash.com/photo-1508261303786-0e3b4e0a52a4?q=80&w=1935&auto=format&fit=crop',
    rating: 4.9,
    tag: 'Nature • Lakes',
  },
  {
    title: 'Amalfi Coast, Italy',
    img: 'https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?q=80&w=1974&auto=format&fit=crop',
    rating: 4.7,
    tag: 'Coastal • Food',
  },
];

export default function Destinations() {
  return (
    <section id="destinations" className="relative bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 py-20">
      <div className="pointer-events-none absolute inset-x-0 -top-16 h-16 bg-gradient-to-b from-transparent to-slate-950" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">Trending Destinations</h2>
            <p className="mt-2 text-white/70">Handpicked escapes with postcard-perfect vibes.</p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {spots.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg backdrop-blur"
            >
              <div className="relative h-52 w-full overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              </div>
              <div className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-black/50 px-2 py-1 text-xs text-white backdrop-blur">
                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" /> {s.rating}
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 text-white/80">
                  <MapPin className="h-4 w-4 text-cyan-300" />
                  <span className="text-sm">{s.tag}</span>
                </div>
                <h3 className="mt-1 line-clamp-2 text-lg font-semibold text-white">{s.title}</h3>
                <button className="mt-3 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-2 text-xs font-medium text-slate-900 transition hover:bg-white">
                  View details <span>→</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
