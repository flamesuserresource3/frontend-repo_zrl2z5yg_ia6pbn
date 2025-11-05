import { useMemo, useState } from 'react';
import { Calendar, MapPin, Plane, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Planner() {
  const [form, setForm] = useState({
    city: '',
    days: 5,
    style: 'Relaxed',
    budget: '$$',
  });
  const [submitted, setSubmitted] = useState(false);

  const itinerary = useMemo(() => buildItinerary(form), [form]);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="planner" className="relative bg-slate-900 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 grid items-end justify-between gap-6 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">Plan your perfect trip</h2>
            <p className="mt-2 text-white/70">Tell us your vibe — get a beautiful, day-by-day plan.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-xs text-white/70 backdrop-blur">
            Tip: You can tweak inputs and see the itinerary update instantly.
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur"
          >
            <div className="grid gap-5">
              <Field label="Where to?" icon={<MapPin className="h-4 w-4" />}> 
                <input
                  required
                  value={form.city}
                  onChange={(e) => setForm({ ...form, city: e.target.value })}
                  placeholder="e.g., Lisbon"
                  className="w-full rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-white placeholder-white/50 outline-none ring-0"
                />
              </Field>

              <Field label="How many days?" icon={<Calendar className="h-4 w-4" />}> 
                <input
                  type="number"
                  min={2}
                  max={14}
                  value={form.days}
                  onChange={(e) => setForm({ ...form, days: Number(e.target.value) })}
                  className="w-full rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-white outline-none ring-0"
                />
              </Field>

              <Field label="Travel style" icon={<Plane className="h-4 w-4" />}> 
                <select
                  value={form.style}
                  onChange={(e) => setForm({ ...form, style: e.target.value })}
                  className="w-full appearance-none rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-white outline-none ring-0"
                >
                  <option className="text-slate-900">Relaxed</option>
                  <option className="text-slate-900">Balanced</option>
                  <option className="text-slate-900">Explorer</option>
                  <option className="text-slate-900">Luxury</option>
                </select>
              </Field>

              <Field label="Budget" icon={<Star className="h-4 w-4" />}> 
                <div className="flex gap-2">
                  {['$', '$$', '$$$'].map((b) => (
                    <button
                      type="button"
                      key={b}
                      onClick={() => setForm({ ...form, budget: b })}
                      className={`flex-1 rounded-lg px-3 py-2 text-sm transition ${
                        form.budget === b
                          ? 'bg-white text-slate-900'
                          : 'bg-white/10 text-white hover:bg-white/20'
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </Field>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 font-medium text-slate-900 shadow-lg"
              >
                Generate Itinerary
              </motion.button>
            </div>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-slate-800/60 to-slate-900 p-6 shadow-lg"
          >
            <div className="pointer-events-none absolute inset-0 opacity-30 [background:radial-gradient(1000px_circle_at_10%_-10%,rgba(34,211,238,.5),transparent)]" />
            <h3 className="relative z-10 text-lg font-semibold text-white">Your itinerary</h3>
            <p className="relative z-10 mt-1 text-sm text-white/70">A balanced mix tailored to you.</p>

            <div className="relative z-10 mt-6 grid gap-4">
              <AnimatePresence mode="popLayout">
                {submitted && itinerary.map((day) => (
                  <motion.div
                    key={day.day}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="rounded-xl border border-white/10 bg-white/5 p-4 text-white backdrop-blur"
                  >
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-sm font-semibold">Day {day.day}</span>
                      <span className="text-xs text-white/70">{day.theme}</span>
                    </div>
                    <ul className="ml-4 list-disc space-y-1 text-sm text-white/90">
                      {day.activities.map((a, i) => (
                        <li key={i}>{a}</li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </AnimatePresence>
              {!submitted && (
                <div className="rounded-lg border border-white/10 bg-white/5 p-4 text-white/80">
                  Fill the form and tap Generate to see your plan here.
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, icon, children }) {
  return (
    <label className="grid gap-2 text-sm text-white/90">
      <span className="inline-flex items-center gap-2 text-white/80">
        <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-white/10">{icon}</span>
        {label}
      </span>
      {children}
    </label>
  );
}

function buildItinerary({ city, days, style, budget }) {
  const vibes = {
    Relaxed: ['Leisurely brunch', 'Scenic stroll', 'Sunset spot', 'Cafe hopping'],
    Balanced: ['Iconic landmark', 'Local market', 'Hidden gem', 'Viewpoint hike'],
    Explorer: ['Early sunrise view', 'Museum or gallery', 'Street food trail', 'Neighborhood walk'],
    Luxury: ['Boutique brunch', 'Private tour', 'Fine dining', 'Rooftop lounge'],
  };

  const extras = {
    $: 'budget eats',
    $$: 'mid-range picks',
    $$$: 'premium selections',
  };

  const daysArr = Array.from({ length: Math.min(Math.max(days || 3, 2), 14) }, (_, i) => i + 1);

  return daysArr.map((d) => ({
    day: d,
    theme: `${style} • ${extras[budget]}`,
    activities: [
      `${vibes[style][0]} in ${city || 'the city'}`,
      `${vibes[style][1]} around the old town`,
      `${vibes[style][2]} at a viewpoint`,
      `${vibes[style][3]} to end the day`,
    ],
  }));
}
