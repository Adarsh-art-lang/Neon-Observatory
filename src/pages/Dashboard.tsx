import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div className="p-10 pb-12">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Summary Cards Row */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="glass-card p-8 rounded-xl group transition-all duration-300">
            <div className="flex justify-between items-start mb-6">
              <span className="p-2.5 bg-primary/10 rounded-xl text-primary material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>folder</span>
              <span className="text-[10px] text-on-surface-variant font-label font-bold uppercase">+2 this week</span>
            </div>
            <p className="text-on-surface-variant font-label text-[10px] uppercase tracking-widest mb-1 font-bold">Total Projects</p>
            <h3 className="text-3xl font-headline font-bold text-on-surface">12</h3>
          </div>
          <div className="glass-card p-8 rounded-xl group transition-all duration-300">
            <div className="flex justify-between items-start mb-6">
              <span className="p-2.5 bg-secondary/10 rounded-xl text-secondary material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>biotech</span>
              <span className="text-[10px] text-on-surface-variant font-label font-bold uppercase">+12% perf</span>
            </div>
            <p className="text-on-surface-variant font-label text-[10px] uppercase tracking-widest mb-1 font-bold">Models Trained</p>
            <h3 className="text-3xl font-headline font-bold text-on-surface">45</h3>
          </div>
          <div className="glass-card p-8 rounded-xl group transition-all duration-300">
            <div className="flex justify-between items-start mb-6">
              <span className="p-2.5 bg-primary/10 rounded-xl text-primary material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>api</span>
              <span className="text-[10px] text-primary font-label font-bold uppercase">Active</span>
            </div>
            <p className="text-on-surface-variant font-label text-[10px] uppercase tracking-widest mb-1 font-bold">APIs Deployed</p>
            <h3 className="text-3xl font-headline font-bold text-on-surface">08</h3>
          </div>
          <div className="glass-card p-8 rounded-xl group transition-all duration-300">
            <div className="flex justify-between items-start mb-6">
              <span className="p-2.5 bg-secondary/10 rounded-xl text-secondary material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>cycle</span>
              <span className="text-[10px] text-secondary font-label animate-pulse font-bold uppercase">Running</span>
            </div>
            <p className="text-on-surface-variant font-label text-[10px] uppercase tracking-widest mb-1 font-bold">Active Jobs</p>
            <h3 className="text-3xl font-headline font-bold text-on-surface">03</h3>
          </div>
        </section>

        {/* Main Layout: Recent Projects */}
        <section>
          <div className="flex justify-between items-center mb-8">
            <h2 className="font-headline text-xl flex items-center gap-3 text-on-surface font-bold">
              <span className="w-1 h-6 bg-primary rounded-full shadow-[0_0_10px_rgba(107,70,193,0.3)]"></span>
              Recent Projects
            </h2>
            <Link to="/projects" className="text-primary text-[10px] font-label uppercase tracking-widest hover:underline font-bold">View All Projects</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="glass-card rounded-xl p-6 flex flex-col hover:translate-y-[-4px] transition-transform">
              <div className="flex justify-between items-center mb-6">
                <span className="text-[9px] px-3 py-1 bg-green-50 text-green-600 border border-green-100 rounded-full font-label uppercase font-bold tracking-wider">Completed</span>
                <span className="material-symbols-outlined text-on-surface-variant text-base cursor-pointer">more_vert</span>
              </div>
              <h4 className="font-headline font-bold text-lg mb-6 text-on-surface">Sentiment Engine</h4>
              <div className="space-y-4 flex-grow">
                <div className="flex justify-between text-[11px] font-label">
                  <span className="text-on-surface-variant font-medium">Dataset</span>
                  <span className="text-on-surface font-bold">Twitter-v2</span>
                </div>
                <div className="flex justify-between text-[11px] font-label">
                  <span className="text-on-surface-variant font-medium">Model</span>
                  <span className="text-on-surface font-bold">BERT</span>
                </div>
                <div className="pt-4 border-t border-black/5 mt-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[9px] text-on-surface-variant uppercase tracking-widest font-bold">Accuracy</span>
                    <span className="text-primary font-headline font-bold text-sm">94.2%</span>
                  </div>
                  <div className="w-full h-1.5 bg-black/5 rounded-full overflow-hidden">
                    <div className="h-full bg-primary" style={{ width: "94.2%" }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="glass-card rounded-xl p-6 flex flex-col hover:translate-y-[-4px] transition-transform">
              <div className="flex justify-between items-center mb-6">
                <span className="text-[9px] px-3 py-1 bg-red-50 text-red-600 border border-red-100 rounded-full font-label uppercase font-bold tracking-wider">Failed</span>
                <span className="material-symbols-outlined text-on-surface-variant text-base cursor-pointer">more_vert</span>
              </div>
              <h4 className="font-headline font-bold text-lg mb-6 text-on-surface">Vision Guard</h4>
              <div className="space-y-4 flex-grow">
                <div className="flex justify-between text-[11px] font-label">
                  <span className="text-on-surface-variant font-medium">Dataset</span>
                  <span className="text-on-surface font-bold">ImageNet-Small</span>
                </div>
                <div className="flex justify-between text-[11px] font-label">
                  <span className="text-on-surface-variant font-medium">Model</span>
                  <span className="text-on-surface font-bold">ResNet-50</span>
                </div>
                <div className="pt-4 border-t border-black/5 mt-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[9px] text-on-surface-variant uppercase tracking-widest font-bold">Accuracy</span>
                    <span className="text-error font-headline font-bold text-sm">89.1%</span>
                  </div>
                  <div className="w-full h-1.5 bg-black/5 rounded-full overflow-hidden">
                    <div className="h-full bg-error" style={{ width: "89.1%" }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="glass-card rounded-xl p-6 flex flex-col hover:translate-y-[-4px] transition-transform">
              <div className="flex justify-between items-center mb-6">
                <span className="text-[9px] px-3 py-1 bg-secondary/10 text-secondary border border-secondary/20 rounded-full font-label uppercase font-bold tracking-wider">Running</span>
                <span className="material-symbols-outlined text-on-surface-variant text-base cursor-pointer">more_vert</span>
              </div>
              <h4 className="font-headline font-bold text-lg mb-6 text-on-surface">Price Predictor</h4>
              <div className="space-y-4 flex-grow">
                <div className="flex justify-between text-[11px] font-label">
                  <span className="text-on-surface-variant font-medium">Dataset</span>
                  <span className="text-on-surface font-bold">Market-TS</span>
                </div>
                <div className="flex justify-between text-[11px] font-label">
                  <span className="text-on-surface-variant font-medium">Model</span>
                  <span className="text-on-surface font-bold">LSTM</span>
                </div>
                <div className="pt-4 border-t border-black/5 mt-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[9px] text-on-surface-variant uppercase tracking-widest font-bold">Accuracy</span>
                    <span className="text-secondary font-headline font-bold text-sm">76.5%</span>
                  </div>
                  <div className="w-full h-1.5 bg-black/5 rounded-full overflow-hidden">
                    <div className="h-full bg-secondary" style={{ width: "76.5%" }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="glass-card rounded-xl p-6 flex flex-col hover:translate-y-[-4px] transition-transform">
              <div className="flex justify-between items-center mb-6">
                <span className="text-[9px] px-3 py-1 bg-green-50 text-green-600 border border-green-100 rounded-full font-label uppercase font-bold tracking-wider">Completed</span>
                <span className="material-symbols-outlined text-on-surface-variant text-base cursor-pointer">more_vert</span>
              </div>
              <h4 className="font-headline font-bold text-lg mb-6 text-on-surface">Neural Genesis</h4>
              <div className="space-y-4 flex-grow">
                <div className="flex justify-between text-[11px] font-label">
                  <span className="text-on-surface-variant font-medium">Dataset</span>
                  <span className="text-on-surface font-bold">Arch-HD</span>
                </div>
                <div className="flex justify-between text-[11px] font-label">
                  <span className="text-on-surface-variant font-medium">Model</span>
                  <span className="text-on-surface font-bold">GAN-v2</span>
                </div>
                <div className="pt-4 border-t border-black/5 mt-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[9px] text-on-surface-variant uppercase tracking-widest font-bold">Accuracy</span>
                    <span className="text-primary font-headline font-bold text-sm">91.8%</span>
                  </div>
                  <div className="w-full h-1.5 bg-black/5 rounded-full overflow-hidden">
                    <div className="h-full bg-primary" style={{ width: "91.8%" }}></div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>
      </div>
    </div>
  );
}
