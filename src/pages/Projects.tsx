export default function Projects() {
  return (
    <div className="p-10 pb-12">
      {/* Dashboard Header */}
      <div className="mb-10 flex justify-between items-end max-w-7xl mx-auto">
        <div>
          <p className="text-[10px] font-bold font-headline uppercase tracking-widest text-primary mb-2">Active Workspace</p>
          <h2 className="text-4xl font-bold font-headline tracking-tight text-on-surface">Project Overview</h2>
        </div>
        <div className="flex gap-3">
          <button className="px-5 py-2.5 rounded-full bg-white/60 backdrop-blur-md border border-white/40 text-xs font-bold font-label uppercase tracking-widest hover:bg-white transition-all flex items-center gap-2 text-on-surface">
            <span className="material-symbols-outlined text-sm">filter_list</span>
            Filter
          </button>
          <button className="px-5 py-2.5 rounded-full bg-primary text-white text-xs font-bold font-label uppercase tracking-widest hover:shadow-lg hover:shadow-primary/30 transition-all flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">add</span>
            New Project
          </button>
        </div>
      </div>

      {/* Bento Grid / Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {/* Project Card 5: New Placeholder */}
        <div className="p-6 rounded-xl border-2 border-dashed border-primary/30 flex flex-col items-center justify-center text-center gap-4 hover:bg-white/40 transition-all cursor-pointer group bg-white/10 backdrop-blur-sm">
          <div className="w-14 h-14 rounded-full bg-white shadow-sm flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
            <span className="material-symbols-outlined text-3xl">add_circle</span>
          </div>
          <div>
            <h4 className="font-bold font-headline text-on-surface">Initialize Project</h4>
            <p className="text-[10px] text-on-surface-variant font-label uppercase tracking-widest">Start a new ML pipeline</p>
          </div>
        </div>

        {/* Project Card 1: Completed */}
        <div className="glass-card p-6 rounded-xl transition-all duration-300 group relative flex flex-col">
          <div className="absolute top-0 right-0 p-4">
            <button className="text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="material-symbols-outlined">more_vert</span>
            </button>
          </div>
          <div className="mb-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
              <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>data_object</span>
            </div>
            <h3 className="text-lg font-bold font-headline mb-1 text-on-surface">NeuralVision Alpha</h3>
            <p className="text-[10px] text-on-surface-variant font-label uppercase tracking-widest">Dataset: ImageNet-Sub-2024</p>
          </div>
          <div className="space-y-4 flex-grow">
            <div className="flex justify-between items-center bg-white/40 p-3 rounded-lg border border-white/40">
              <span className="text-[10px] uppercase font-bold tracking-widest text-on-surface-variant font-label">Model Type</span>
              <span className="text-xs font-bold text-on-surface">CNN-ResNet50</span>
            </div>
            <div className="pt-2 border-t border-black/5 mt-auto">
              <div className="flex justify-between items-center mb-1">
                <span className="text-[10px] text-on-surface-variant uppercase tracking-widest font-label">Accuracy</span>
                <span className="text-primary font-headline font-bold">98.4%</span>
              </div>
              <div className="w-full h-1.5 bg-black/5 rounded-full overflow-hidden mb-3">
                <div className="h-full bg-primary" style={{ width: "98.4%" }}></div>
              </div>
              <div className="flex justify-between items-center">
                <span className="px-2 py-0.5 rounded-full bg-green-100 text-green-700 text-[10px] font-bold uppercase tracking-widest border border-green-200">Completed</span>
                <div className="flex -space-x-2">
                  <img alt="Collaborator" className="w-6 h-6 rounded-full border-2 border-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOCHCnflNRnyDX0VKorguZfTjk3V_DdJC6ic3-8xX5gAyIevO-RfbJl-EO3Vp9ZbDRHF7iKB98UDdm5WU3YGx6mnydEwXz7NxwnjxxKaWFh0JY9tgpmmMjjDvR8P98t34gxwKOrtGBivjbUm1u4-55gQPVNIORa5e5remJZTlPAvSN0fb02jXolH8lCIPXeDki2E05DtQ3IAp9qE04OM7TlttlNEDCKwS6UqQMZ88Rbxib_P08XvMpJEzKya50OlWz6QC1psMgtWiX" />
                  <div className="w-6 h-6 rounded-full border-2 border-white bg-primary text-[8px] flex items-center justify-center text-white font-bold">+2</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project Card 2: Running */}
        <div className="glass-card p-6 rounded-xl transition-all duration-300 group relative flex flex-col">
          <div className="absolute top-0 right-0 p-4">
            <button className="text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="material-symbols-outlined">more_vert</span>
            </button>
          </div>
          <div className="mb-4">
            <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
              <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>neurology</span>
            </div>
            <h3 className="text-lg font-bold font-headline mb-1 text-on-surface">QuantumNLP Core</h3>
            <p className="text-[10px] text-on-surface-variant font-label uppercase tracking-widest">Dataset: CommonCrawl-HQ</p>
          </div>
          <div className="space-y-4 flex-grow">
            <div className="flex justify-between items-center bg-white/40 p-3 rounded-lg border border-white/40">
              <span className="text-[10px] uppercase font-bold tracking-widest text-on-surface-variant font-label">Model Type</span>
              <span className="text-xs font-bold text-on-surface">Transformer-LLM</span>
            </div>
            <div className="pt-2 border-t border-black/5 mt-auto">
              <div className="flex justify-between items-center mb-1">
                <span className="text-[10px] text-on-surface-variant uppercase tracking-widest font-label">Accuracy</span>
                <span className="text-secondary font-headline font-bold">72.1%</span>
              </div>
              <div className="w-full h-1.5 bg-black/5 rounded-full overflow-hidden mb-3">
                <div className="h-full bg-secondary" style={{ width: "72%" }}></div>
              </div>
              <span className="inline-flex px-2 py-0.5 rounded-full bg-secondary/10 text-secondary text-[10px] font-bold uppercase tracking-widest border border-secondary/20 items-center gap-1">
                <span className="w-1 h-1 bg-secondary rounded-full animate-pulse"></span>
                Running
              </span>
            </div>
          </div>
        </div>

        {/* Project Card 3: Failed */}
        <div className="glass-card p-6 rounded-xl transition-all duration-300 group relative flex flex-col">
           <div className="absolute top-0 right-0 p-4">
             <button className="text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity">
               <span className="material-symbols-outlined">more_vert</span>
             </button>
           </div>
           <div className="mb-4">
             <div className="w-12 h-12 rounded-xl bg-error/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
               <span className="material-symbols-outlined text-error" style={{ fontVariationSettings: "'FILL' 1" }}>warning</span>
             </div>
             <h3 className="text-lg font-bold font-headline mb-1 text-on-surface">EcoSense Predict</h3>
             <p className="text-[10px] text-on-surface-variant font-label uppercase tracking-widest">Dataset: Global-Weather-v4</p>
           </div>
           <div className="space-y-4 flex-grow">
             <div className="flex justify-between items-center bg-white/40 p-3 rounded-lg border border-white/40">
               <span className="text-[10px] uppercase font-bold tracking-widest text-on-surface-variant font-label">Model Type</span>
               <span className="text-xs font-bold text-on-surface">RNN-LSTM</span>
             </div>
             <div className="pt-2 border-t border-black/5 mt-auto">
               <div className="flex justify-between items-center mb-1">
                 <span className="text-[10px] text-on-surface-variant uppercase tracking-widest font-label">Accuracy</span>
                 <span className="text-error font-headline font-bold">12.4%</span>
               </div>
               <div className="w-full h-1.5 bg-black/5 rounded-full overflow-hidden mb-3">
                 <div className="h-full bg-error" style={{ width: "12.4%" }}></div>
               </div>
               <span className="inline-flex px-2 py-0.5 rounded-full bg-red-100 text-red-700 text-[10px] font-bold uppercase tracking-widest border border-red-200">Failed</span>
             </div>
           </div>
         </div>

        {/* Project Card 4: Completed */}
        <div className="glass-card p-6 rounded-xl transition-all duration-300 group relative flex flex-col">
          <div className="absolute top-0 right-0 p-4">
            <button className="text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="material-symbols-outlined">more_vert</span>
            </button>
          </div>
          <div className="mb-4">
            <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
              <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>analytics</span>
            </div>
            <h3 className="text-lg font-bold font-headline mb-1 text-on-surface">FinancialGuard Pro</h3>
            <p className="text-[10px] text-on-surface-variant font-label uppercase tracking-widest">Dataset: Fraud-Detection-v2</p>
          </div>
          <div className="space-y-4 flex-grow">
            <div className="flex justify-between items-center bg-white/40 p-3 rounded-lg border border-white/40">
              <span className="text-[10px] uppercase font-bold tracking-widest text-on-surface-variant font-label">Model Type</span>
              <span className="text-xs font-bold text-on-surface">RandomForest</span>
            </div>
            <div className="pt-2 border-t border-black/5 mt-auto">
              <div className="flex justify-between items-center mb-1">
                <span className="text-[10px] text-on-surface-variant uppercase tracking-widest font-label">Accuracy</span>
                <span className="text-secondary font-headline font-bold">99.1%</span>
              </div>
              <div className="w-full h-1.5 bg-black/5 rounded-full overflow-hidden mb-3">
                <div className="h-full bg-secondary" style={{ width: "99.1%" }}></div>
              </div>
              <span className="inline-flex px-2 py-0.5 rounded-full bg-green-100 text-green-700 text-[10px] font-bold uppercase tracking-widest border border-green-200">Completed</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
