import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import Planner from './components/Planner';

function App() {
  return (
    <div className="min-h-screen scroll-smooth bg-slate-950 antialiased">
      <Navbar />
      <Hero />
      <Destinations />
      <Planner />
      <footer className="border-t border-white/10 bg-slate-900/60 py-10 text-center text-sm text-white/60">
        <div className="mx-auto max-w-7xl px-6">
          <p>© {new Date().getFullYear()} VibeTravel — Crafted with love for explorers.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
