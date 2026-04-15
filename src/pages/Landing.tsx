import { Link } from 'react-router-dom';

const stackItems = [
  { icon: 'dataset', label: 'Data Orchestration', desc: 'Ingest, clean and version any data modality at scale.' },
  { icon: 'model_training', label: 'Distributed Training', desc: 'Multi-node GPU training with auto-scaling clusters.' },
  { icon: 'analytics', label: 'Rigorous Evaluation', desc: 'ROC curves, confusion matrices and variant benchmarking.' },
  { icon: 'rocket_launch', label: 'Global Deployment', desc: 'One-click production deploys with auto-scaling replicas.' },
];

const stats = [
  { value: '2,400+', label: 'Researchers' },
  { value: '18M+', label: 'Model Runs' },
  { value: '99.98%', label: 'Uptime SLA' },
  { value: '124ms', label: 'P99 Latency' },
];

export default function Landing() {
  return (
    <div className="min-h-screen bg-[#07070f] text-white font-body overflow-x-hidden">

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 py-5 bg-[#07070f]/80 backdrop-blur-xl border-b border-white/5">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#b287fe] to-[#6c3fe0] flex items-center justify-center shadow-lg shadow-purple-900/40">
            <span className="material-symbols-outlined text-white text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>satellite_alt</span>
          </div>
          <span className="font-headline font-bold text-white text-lg tracking-tight">NeonObservatory</span>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/login" className="text-sm text-zinc-400 hover:text-white transition-colors font-medium">Log In</Link>
          <Link to="/login" className="px-5 py-2 bg-[#c8f135] text-zinc-900 rounded-full text-sm font-bold hover:scale-105 transition-transform shadow-lg shadow-[#c8f135]/20">Sign Up</Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-10 max-w-7xl mx-auto">
        {/* Background glow */}
        <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-purple-700/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-40 right-1/4 w-[400px] h-[400px] bg-[#c8f135]/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="grid grid-cols-12 gap-12 items-center">
          {/* Left text */}
          <div className="col-span-12 lg:col-span-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c8f135] animate-pulse"></span>
              <span className="text-[11px] font-label text-zinc-400 tracking-wider">NEW · v2 × Observatory Framework Live</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-headline font-bold leading-[1.08] tracking-tight mb-6">
              Build, Train, and<br />
              Deploy AI Models<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b287fe] to-[#6c3fe0]">Effortlessly.</span>
            </h1>
            <p className="text-zinc-400 text-base leading-relaxed mb-8 max-w-md">
              An all-in-one AI platform for data orchestration, distributed training, rigorous evaluation, and global deployment.
            </p>
            <div className="flex items-center gap-4">
              <Link to="/" className="px-7 py-3.5 bg-[#c8f135] text-zinc-900 rounded-full font-bold text-sm hover:scale-105 transition-all shadow-lg shadow-[#c8f135]/25 flex items-center gap-2">
                Get Started
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
              <button className="px-7 py-3.5 border border-white/10 text-white rounded-full text-sm font-medium hover:bg-white/5 transition-colors flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">play_circle</span>
                Watch Demo
              </button>
            </div>
            {/* Social proof */}
            <div className="flex items-center gap-3 mt-10">
              <div className="flex -space-x-2">
                {['#b287fe','#6c3fe0','#c8f135','#00d4ec'].map((c, i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-[#07070f]" style={{ background: c }} />
                ))}
              </div>
              <p className="text-zinc-500 text-xs">Join <span className="text-white font-semibold">2,400+</span> researchers today</p>
            </div>
          </div>

          {/* Right – product mockup */}
          <div className="col-span-12 lg:col-span-6 relative z-10">
            <div className="relative">
              {/* Glow behind card */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-transparent rounded-3xl blur-2xl scale-110" />
              {/* Main card */}
              <div className="relative bg-white/[0.04] border border-white/10 rounded-2xl overflow-hidden shadow-2xl shadow-black/60 backdrop-blur-sm">
                {/* Faux topbar */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/[0.02]">
                  <div className="flex gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-red-400/50"/><div className="w-2.5 h-2.5 rounded-full bg-amber-400/50"/><div className="w-2.5 h-2.5 rounded-full bg-green-400/50"/></div>
                  <div className="flex-1 h-4 bg-white/5 rounded-full mx-4 max-w-32"/>
                </div>
                {/* Content preview */}
                <div className="flex">
                  {/* Faux sidebar */}
                  <div className="w-36 bg-white/[0.02] border-r border-white/5 p-3 flex flex-col gap-2">
                    {['Dashboard','Projects','Models','Deployments'].map((item, i) => (
                      <div key={item} className={`flex items-center gap-2 px-3 py-2 rounded-lg text-[10px] font-label ${i === 2 ? 'bg-[#b287fe]/20 text-[#b287fe]' : 'text-zinc-600'}`}>
                        <div className={`w-1.5 h-1.5 rounded-full ${i === 2 ? 'bg-[#b287fe]' : 'bg-zinc-700'}`}/>
                        {item}
                      </div>
                    ))}
                  </div>
                  {/* Faux main */}
                  <div className="flex-1 p-4 space-y-3">
                    <div className="flex gap-3">
                      {['98.4%','0.96','0.94','0.95'].map((val, i) => (
                        <div key={i} className="flex-1 bg-white/[0.04] rounded-xl p-3">
                          <div className="w-10 h-1.5 bg-white/10 rounded mb-2"/>
                          <div className="text-sm font-bold text-white">{val}</div>
                        </div>
                      ))}
                    </div>
                    <div className="bg-white/[0.04] rounded-xl p-3 h-24 flex items-end gap-1">
                      {[60,80,55,90,70,95,85,100,75,88].map((h, i) => (
                        <div key={i} className="flex-1 rounded-sm" style={{ height: `${h}%`, background: i > 7 ? '#b287fe' : 'rgba(178,135,254,0.25)' }} />
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <div className="flex-1 bg-white/[0.04] rounded-lg h-8"/>
                      <div className="flex-1 bg-[#b287fe]/20 rounded-lg h-8 flex items-center justify-center">
                        <span className="text-[9px] text-[#b287fe] font-bold">DEPLOY →</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <div className="border-y border-white/5 bg-white/[0.02] py-8">
        <div className="max-w-7xl mx-auto px-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map(s => (
            <div key={s.label}>
              <p className="text-3xl font-headline font-bold text-white mb-1">{s.value}</p>
              <p className="text-xs text-zinc-500 font-label uppercase tracking-widest">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Stack Section */}
      <section className="max-w-7xl mx-auto px-10 py-24">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-headline font-bold text-white mb-3">The Observatory Stack</h2>
          <p className="text-zinc-500 text-sm max-w-md mx-auto">Seamlessly transition from raw data to production-grade intelligence with our unified modular infrastructure.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {stackItems.map((item, i) => (
            <div key={item.label} className="group relative bg-white/[0.03] border border-white/8 rounded-2xl p-6 hover:bg-white/[0.06] hover:border-white/15 transition-all duration-300 cursor-default">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-[#b287fe]/10 flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-[#b287fe] text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>{item.icon}</span>
                </div>
                <div className="text-[10px] font-label text-zinc-600 font-bold mb-1">0{i + 1}</div>
                <h3 className="text-sm font-headline font-bold text-white mb-2">{item.label}</h3>
                <p className="text-xs text-zinc-500 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Band */}
      <section className="max-w-7xl mx-auto px-10 pb-24">
        <div className="relative bg-gradient-to-br from-purple-900/40 to-[#07070f] border border-white/10 rounded-3xl p-14 text-center overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-[#b287fe]/15 blur-3xl rounded-full" />
          <div className="relative">
            <h2 className="text-4xl font-headline font-bold text-white mb-4">Ready to launch your model?</h2>
            <p className="text-zinc-400 text-sm mb-8 max-w-md mx-auto">Start your free trial and deploy your first model in under 5 minutes.</p>
            <Link to="/login" className="inline-flex items-center gap-2 px-8 py-4 bg-[#c8f135] text-zinc-900 rounded-full font-bold text-sm hover:scale-105 transition-all shadow-xl shadow-[#c8f135]/20">
              Start Free Trial
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
