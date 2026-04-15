import { useState } from 'react';

const projectCatalog = {
  'neuralvision-alpha': { name: 'NeuralVision Alpha', dataset: 'ImageNet-Sub-2024', model: 'CNN-ResNet50', status: 'Completed', accuracy: '98.4', lastRun: '2h ago', lastRunTime: '04:12:33', date: 'Oct 24, 2024 • 14:30 GMT' },
  'quantumnlp-core': { name: 'QuantumNLP Core', dataset: 'CommonCrawl-HQ', model: 'Transformer-LLM', status: 'Running', accuracy: '72.1', lastRun: 'In Progress', lastRunTime: '--:--', date: 'Running now' },
  'ecosense-predict': { name: 'EcoSense Predict', dataset: 'Global-Weather-v4', model: 'RNN-LSTM', status: 'Failed', accuracy: '12.4', lastRun: 'Failed', lastRunTime: '00:15:22', date: 'Oct 23, 2024 • 09:12 GMT' },
  'financialguard-pro': { name: 'FinancialGuard Pro', dataset: 'Fraud-Detection-v2', model: 'RandomForest', status: 'Completed', accuracy: '99.1', lastRun: '1d ago', lastRunTime: '02:44:11', date: 'Oct 22, 2024 • 11:00 GMT' },
};

type ProjectWorkspaceViewProps = {
  projectId: string;
};

export default function ProjectWorkspaceView({ projectId }: ProjectWorkspaceViewProps) {
  const [activeTab, setActiveTab] = useState('Overview');

  const project = projectCatalog[projectId as keyof typeof projectCatalog] ?? {
    name: `Project ${projectId}`,
    dataset: 'Custom dataset',
    model: 'Hybrid model',
    status: 'Active',
    accuracy: '85.0',
    lastRun: 'Just now',
    lastRunTime: '01:00:00',
    date: 'Today',
  };

  const navItems = [
    { label: 'Overview', icon: 'dashboard', color: 'bg-green-500' },
    { label: 'Data Lab', icon: 'database', color: 'bg-green-500' },
    { label: 'Training', icon: 'model_training', color: 'bg-amber-400' },
    { label: 'Evaluation', icon: 'analytics' },
    { label: 'Deployment', icon: 'rocket_launch' },
  ];

  return (
    <div className="flex h-full min-h-[calc(100vh-64px)] overflow-hidden">
      {/* SideNavBar (Pipeline Navigation) */}
      <aside className="fixed left-0 top-16 h-[calc(100vh-64px)] w-64 bg-white/40 border-r border-white/40 backdrop-blur-2xl flex flex-col py-8 pr-4 font-['Manrope'] text-sm font-medium z-40">
        <div className="px-6 mb-8">
          <div className="flex items-center gap-3 p-3 bg-white/60 rounded-lg">
            <div className="w-10 h-10 bg-secondary/20 rounded-xl flex items-center justify-center text-secondary">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>insights</span>
            </div>
            <div>
              <p className="text-zinc-900 font-bold font-headline leading-tight truncate w-32" title={project.name}>{project.name}</p>
              <p className="text-[10px] uppercase tracking-widest text-zinc-500">Project Workspace</p>
            </div>
          </div>
        </div>
        <nav className="flex-1">
          <ul className="space-y-1">
            {navItems.map((item) => {
              const isActive = activeTab === item.label;
              return (
                <li key={item.label}>
                  <button
                    onClick={() => setActiveTab(item.label)}
                    className={`w-full flex items-center gap-3 px-6 py-3 rounded-r-full transition-all duration-300 ${isActive
                        ? 'bg-zinc-200/50 text-zinc-900 border-l-4 border-secondary'
                        : 'text-zinc-500 hover:text-zinc-800 hover:bg-zinc-100/50 hover:translate-x-1 border-l-4 border-transparent'
                      }`}
                  >
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: isActive ? "'FILL' 1" : undefined }}>{item.icon}</span>
                    <span>{item.label}</span>
                    {item.color && (
                      <span className={`ml-auto w-1.5 h-1.5 rounded-full ${item.color}`}></span>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="px-6 mt-auto">
          <div className="flex flex-col gap-2">
            <a className="flex items-center gap-2 text-zinc-500 hover:text-zinc-800 transition-colors" href="#">
              <span className="material-symbols-outlined text-lg">menu_book</span>
              <span className="text-xs">Docs</span>
            </a>
            <a className="flex items-center gap-2 text-zinc-500 hover:text-zinc-800 transition-colors" href="#">
              <span className="material-symbols-outlined text-lg">contact_support</span>
              <span className="text-xs">Support</span>
            </a>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64 p-8 overflow-y-auto z-10 relative">
        <header className="mb-10">
          <h2 className="text-4xl font-headline font-bold text-zinc-900 mb-2 tracking-tight">{activeTab}</h2>
          <p className="text-zinc-500 font-body">Manage your vision pipeline and monitor real-time performance metrics.</p>
        </header>

        {activeTab === 'Overview' && (
          <div className="grid grid-cols-12 gap-6 pb-20">
            {/* Project Summary Card */}
            <div className="col-span-12 lg:col-span-8 glass-card rounded-xl p-8 flex flex-col justify-between min-h-[300px]">
              <div>
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h3 className="text-xl font-headline font-bold text-zinc-900">Project Summary</h3>
                    <p className="text-sm text-zinc-500 font-label">Neural Network Configuration</p>
                  </div>
                  <span className={`px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest ${project.status === 'Completed' ? 'bg-green-100 text-green-700' :
                      project.status === 'Running' ? 'bg-secondary/10 text-secondary' :
                        'bg-red-100 text-red-700'
                    }`}>
                    {project.status}
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="space-y-1">
                    <p className="text-[10px] uppercase font-label tracking-wider text-zinc-500">Dataset</p>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-secondary text-lg">folder_zip</span>
                      <p className="font-body font-bold text-zinc-800">{project.dataset}</p>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] uppercase font-label tracking-wider text-zinc-500">Model Architecture</p>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-secondary text-lg">memory</span>
                      <p className="font-body font-bold text-zinc-800">{project.model}</p>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] uppercase font-label tracking-wider text-zinc-500">Last Runtime</p>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-secondary text-lg">timer</span>
                      <p className="font-body font-bold text-zinc-800">{project.lastRunTime}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 mt-8">
                <button className="px-6 py-2.5 bg-zinc-900 text-white rounded-full font-bold text-sm transition-transform active:scale-95 hover:shadow-lg hover:shadow-zinc-900/20">Go to Training</button>
                <button className="px-6 py-2.5 bg-white/70 backdrop-blur-sm text-zinc-900 border border-white rounded-full font-bold text-sm transition-transform active:scale-95 hover:bg-white">View Evaluation</button>
              </div>
            </div>

            {/* Accuracy Stat */}
            <div className="col-span-12 md:col-span-6 lg:col-span-4 glass-card rounded-xl p-8 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-6">
                  <p className="text-sm font-label uppercase tracking-widest text-zinc-500">Current Accuracy</p>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${Number(project.accuracy) > 90 ? 'bg-green-100 text-green-600' :
                      Number(project.accuracy) > 70 ? 'bg-amber-100 text-amber-600' :
                        'bg-red-100 text-red-600'
                    }`}>
                    <span className="material-symbols-outlined">{Number(project.accuracy) > 70 ? 'trending_up' : 'trending_down'}</span>
                  </div>
                </div>
                <h4 className="text-6xl font-headline font-bold text-zinc-900">{project.accuracy}<span className="text-3xl text-zinc-400">%</span></h4>
              </div>
              <div className="mt-4">
                <div className="w-full bg-zinc-200/50 h-1.5 rounded-full overflow-hidden">
                  <div className="h-full bg-secondary neon-glow transition-all duration-1000 ease-out" style={{ width: `${project.accuracy}%` }}></div>
                </div>
                <p className="text-xs text-zinc-500 mt-2">Target reached: 95.0%</p>
              </div>
            </div>

            {/* Last Trained Stat */}
            <div className="col-span-12 md:col-span-6 lg:col-span-4 glass-card rounded-xl p-8 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-6">
                  <p className="text-sm font-label uppercase tracking-widest text-zinc-500">Last Trained</p>
                  <div className="w-10 h-10 bg-blue-50/80 rounded-full flex items-center justify-center text-blue-500">
                    <span className="material-symbols-outlined">history</span>
                  </div>
                </div>
                <h4 className="text-4xl font-headline font-bold text-zinc-900">{project.lastRun}</h4>
              </div>
              <div className="mt-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-zinc-400 text-lg">event_available</span>
                <p className="text-xs text-zinc-500">{project.date}</p>
              </div>
            </div>

            {/* Image Analysis Preview (Visual Context) */}
            <div className="col-span-12 lg:col-span-8 glass-card rounded-xl overflow-hidden relative group min-h-[220px]">
              <img className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" alt="abstract neural network visualization" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPB_t4K0sl8qVh_29MRPkmr2FwQaDCcRSoMZMfq-4Niii5GP8XXA0fwhFNkcSqTGkd4L5elMs2DqJkRvmAN_-jMZN4He41UjOMsafrrap8tGLYKC9_vbrNoaQ55Hkx1nuwsu8QYEFx06aBNdhfhFt-a8eMMvE06WUJIQfMEpysD6VPQTb09A4fqn_4hbwArf4_UnbMF5Zcjwmd10N9fAEDU1yXQeggOVAvHp3Qm_JFOfPVwmPtLgX9PezQlcbV52fKgoLp3xYLpNX1" />
              <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent p-8 flex flex-col justify-center">
                <div className="max-w-xs relative z-10">
                  <span className="inline-block mb-4 px-3 py-1 bg-secondary/15 text-secondary rounded-full text-[10px] font-bold uppercase tracking-widest">Performance Insights</span>
                  <h3 className="text-2xl font-headline font-bold text-zinc-900 mb-2">Neural Map View</h3>
                  <p className="text-sm text-zinc-600 font-body leading-relaxed">Analyze the weight distribution across convolutional layers in real-time.</p>
                  <button className="mt-6 flex items-center gap-2 text-zinc-900 font-bold text-sm group/btn hover:text-secondary transition-colors">
                    Explore Graph
                    <span className="material-symbols-outlined group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>

          </div>
        )}
        
        {activeTab === 'Data Lab' && (
          <div className="flex flex-col gap-6 pb-20">
            {/* Page Action Bar */}
            <div className="flex justify-between items-center">
              <div>
                <p className="text-xs font-label uppercase tracking-[0.2em] text-secondary font-bold mb-1">Workspace Environment</p>
                <p className="text-zinc-500 font-body text-sm">Refining dataset and preprocessing pipeline.</p>
              </div>
              <div className="flex gap-3">
                <button className="px-5 py-2 rounded-full border border-zinc-200 text-sm font-medium text-zinc-700 hover:bg-zinc-50 transition-colors">Save Draft</button>
                <button className="px-6 py-2 rounded-full bg-zinc-900 text-white font-bold text-sm hover:scale-105 transition-transform shadow-lg shadow-zinc-900/20">Run Preprocessing</button>
              </div>
            </div>

            {/* Tier 1: Upload & Quality Metrics */}
            <div className="glass-card rounded-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-black/5">
                {/* Upload Zone */}
                <div className="p-6 flex flex-col items-center justify-center group cursor-pointer border-2 border-dashed border-transparent hover:border-secondary/30 transition-all rounded-xl">
                  <span className="material-symbols-outlined text-secondary mb-3 text-3xl">cloud_upload</span>
                  <h4 className="text-sm font-bold text-zinc-900">Upload Dataset</h4>
                  <p className="text-[10px] text-zinc-500 mt-1 text-center">CSV, JSON, or Parquet</p>
                </div>
                {/* Quality Metrics */}
                <div className="p-6 col-span-2 flex items-center justify-around gap-4">
                  <div className="text-center">
                    <p className="text-[10px] font-label text-zinc-500 uppercase tracking-widest mb-1">Score</p>
                    <span className="px-2 py-0.5 bg-green-100 text-green-700 text-[10px] font-bold rounded-full">HEALTHY</span>
                  </div>
                  <div className="text-center">
                    <p className="text-[10px] font-label text-zinc-500 uppercase tracking-widest mb-1">Missing</p>
                    <p className="text-2xl font-headline font-bold text-zinc-900">1.2%</p>
                  </div>
                  <div className="text-center">
                    <p className="text-[10px] font-label text-zinc-500 uppercase tracking-widest mb-1">Outliers</p>
                    <p className="text-2xl font-headline font-bold text-zinc-900">0.5%</p>
                  </div>
                  <div className="text-center">
                    <p className="text-[10px] font-label text-zinc-500 uppercase tracking-widest mb-1">Duplicates</p>
                    <p className="text-2xl font-headline font-bold text-zinc-900">0%</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tier 2: Preprocessing Config */}
            <div className="glass-card rounded-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary">tune</span>
                  <h4 className="text-sm font-bold text-zinc-900">Preprocessing Configuration</h4>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-secondary/10 border border-secondary/20 rounded-lg">
                  <span className="material-symbols-outlined text-secondary text-sm">auto_awesome</span>
                  <p className="text-[11px] font-medium text-secondary">Smart Strategy Active</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="text-[10px] font-label text-zinc-500 uppercase tracking-widest block mb-2">Handle Missing</label>
                  <select className="w-full bg-white border border-zinc-200 rounded-lg text-xs py-2.5 px-3 text-zinc-800 focus:outline-none focus:ring-2 focus:ring-secondary/30 transition-all">
                    <option>Drop Rows</option>
                    <option>Mean Imputation</option>
                    <option>Median Imputation</option>
                  </select>
                </div>
                <div>
                  <label className="text-[10px] font-label text-zinc-500 uppercase tracking-widest block mb-2">Encoding Type</label>
                  <select className="w-full bg-white border border-zinc-200 rounded-lg text-xs py-2.5 px-3 text-zinc-800 focus:outline-none focus:ring-2 focus:ring-secondary/30 transition-all">
                    <option>One-Hot Encoding</option>
                    <option>Label Encoding</option>
                    <option>Ordinal Encoding</option>
                  </select>
                </div>
                <div>
                  <label className="text-[10px] font-label text-zinc-500 uppercase tracking-widest block mb-2">Feature Scaling</label>
                  <select className="w-full bg-white border border-zinc-200 rounded-lg text-xs py-2.5 px-3 text-zinc-800 focus:outline-none focus:ring-2 focus:ring-secondary/30 transition-all">
                    <option>Min-Max Scaler</option>
                    <option>Standard Scaler</option>
                    <option>Robust Scaler</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Tier 3: Data Preview Table */}
            <div className="glass-card rounded-xl overflow-hidden">
              <div className="px-6 py-4 border-b border-black/5 flex justify-between items-center">
                <h4 className="text-sm font-bold text-zinc-900">
                  Data Preview <span className="text-[10px] font-normal text-zinc-500 ml-2 uppercase tracking-wide">Showing 5 rows</span>
                </h4>
                <div className="flex gap-2">
                  <button className="material-symbols-outlined text-zinc-400 text-sm hover:text-zinc-700 p-1 hover:bg-zinc-100 rounded transition-colors">download</button>
                  <button className="material-symbols-outlined text-zinc-400 text-sm hover:text-zinc-700 p-1 hover:bg-zinc-100 rounded transition-colors">fullscreen</button>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="bg-zinc-50 text-[10px] font-label uppercase tracking-widest text-zinc-500">
                      <th className="px-6 py-4 font-semibold">ID</th>
                      <th className="px-6 py-4 font-semibold">Feature A</th>
                      <th className="px-6 py-4 font-semibold">Category</th>
                      <th className="px-6 py-4 font-semibold text-secondary">Target</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-black/5">
                    {[
                      { id: '#92831', val: '0.842', cat: 'ALPHA', catColor: 'bg-secondary/10 text-secondary border border-secondary/20', target: 'TRUE' },
                      { id: '#92832', val: '0.129', cat: 'BETA',  catColor: 'bg-zinc-100 text-zinc-600', target: 'FALSE' },
                      { id: '#92833', val: '0.551', cat: 'GAMMA', catColor: 'bg-zinc-100 text-zinc-600', target: 'TRUE' },
                      { id: '#92834', val: '0.912', cat: 'ALPHA', catColor: 'bg-secondary/10 text-secondary border border-secondary/20', target: 'TRUE' },
                      { id: '#92835', val: '0.334', cat: 'BETA',  catColor: 'bg-zinc-100 text-zinc-600', target: 'FALSE' },
                    ].map(row => (
                      <tr key={row.id} className="hover:bg-zinc-50/60 transition-colors">
                        <td className="px-6 py-4 font-mono text-[10px] text-zinc-400">{row.id}</td>
                        <td className="px-6 py-4 text-zinc-800 text-xs">{row.val}</td>
                        <td className="px-6 py-4"><span className={`px-2 py-0.5 rounded text-[10px] font-bold ${row.catColor}`}>{row.cat}</span></td>
                        <td className="px-6 py-4 text-[10px] font-bold text-secondary uppercase tracking-wider">{row.target}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'Training' && (
          <div className="grid grid-cols-12 gap-8 items-start pb-20">
            {/* Left Column: Model & Hyperparameters */}
            <div className="col-span-12 lg:col-span-4 space-y-6">
              {/* Status badge */}
              <div className="flex items-center gap-3">
                <span className={`px-4 py-2 text-sm rounded-full font-medium flex items-center gap-2 ${
                  project.status === 'Running' ? 'bg-secondary/10 text-secondary' :
                  project.status === 'Completed' ? 'bg-green-100 text-green-700' :
                  'bg-red-100 text-red-600'
                }`}>
                  {project.status === 'Running' && <span className="w-2 h-2 bg-secondary rounded-full animate-pulse"></span>}
                  Status: {project.status}
                </span>
              </div>

              {/* Model Selection */}
              <div className="glass-card p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-6">
                  <span className="material-symbols-outlined text-secondary">architecture</span>
                  <h2 className="text-base font-headline font-semibold text-zinc-900">Model Selection</h2>
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-zinc-500 mb-2 font-label">Architecture</label>
                  <div className="relative">
                    <select className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3 text-zinc-800 text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-secondary/30">
                      <option>Transformer</option>
                      <option>XGBoost</option>
                      <option>CNN</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-4 bottom-3 text-zinc-400 pointer-events-none">expand_more</span>
                  </div>
                </div>
              </div>

              {/* Hyperparameters */}
              <div className="glass-card p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-6">
                  <span className="material-symbols-outlined text-secondary">tune</span>
                  <h2 className="text-base font-headline font-semibold text-zinc-900">Hyperparameters</h2>
                </div>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-label">Learning Rate</label>
                      <span className="text-secondary font-mono text-xs">0.001</span>
                    </div>
                    <div className="h-2 w-full bg-zinc-100 rounded-full overflow-hidden">
                      <div className="h-full bg-secondary w-1/3 rounded-full"></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest text-zinc-500 mb-2 font-label">Epochs</label>
                      <input className="w-full bg-white border border-zinc-200 rounded-lg px-4 py-2 text-zinc-900 text-center font-mono text-sm focus:outline-none focus:ring-2 focus:ring-secondary/30" type="text" defaultValue="50" />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest text-zinc-500 mb-2 font-label">Batch Size</label>
                      <input className="w-full bg-white border border-zinc-200 rounded-lg px-4 py-2 text-zinc-900 text-center font-mono text-sm focus:outline-none focus:ring-2 focus:ring-secondary/30" type="text" defaultValue="32" />
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <button className="w-full bg-zinc-900 hover:bg-zinc-800 text-white py-4 rounded-xl font-headline font-bold flex items-center justify-center gap-3 transition-all shadow-lg shadow-zinc-900/20 group">
                    <span className="material-symbols-outlined group-hover:rotate-12 transition-transform" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                    Start Training
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column: Progress & Logs */}
            <div className="col-span-12 lg:col-span-8 space-y-6">
              {/* Progress Card */}
              <div className="glass-card p-8 rounded-xl overflow-hidden relative">
                <div className="absolute top-0 left-0 w-1 h-full bg-secondary rounded-l-xl"></div>
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                  <div>
                    <h2 className="text-xl font-headline font-bold text-zinc-900">Training Progress</h2>
                    <p className="text-zinc-500 text-sm">{project.model} · {project.status === 'Running' ? 'Currently training...' : `Last run: ${project.lastRun}`}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-4xl font-headline font-bold text-secondary">{project.accuracy}%</span>
                  </div>
                </div>
                <div className="relative h-4 w-full bg-zinc-100 rounded-full overflow-hidden mb-4">
                  <div
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-secondary to-purple-300 rounded-full shadow-[0_0_15px_rgba(178,135,254,0.3)] transition-all duration-1000"
                    style={{ width: `${project.accuracy}%` }}
                  ></div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                  <div className="p-4 bg-zinc-50 rounded-xl">
                    <span className="block text-[10px] uppercase text-zinc-500 mb-1 font-label">Loss</span>
                    <span className="text-lg font-mono font-semibold text-red-500">0.2451</span>
                  </div>
                  <div className="p-4 bg-zinc-50 rounded-xl">
                    <span className="block text-[10px] uppercase text-zinc-500 mb-1 font-label">Accuracy</span>
                    <span className="text-lg font-mono font-semibold text-secondary">{(Number(project.accuracy) / 100).toFixed(3)}</span>
                  </div>
                  <div className="p-4 bg-zinc-50 rounded-xl">
                    <span className="block text-[10px] uppercase text-zinc-500 mb-1 font-label">Time Left</span>
                    <span className="text-lg font-mono font-semibold text-zinc-800">12m 45s</span>
                  </div>
                  <div className="p-4 bg-zinc-50 rounded-xl">
                    <span className="block text-[10px] uppercase text-zinc-500 mb-1 font-label">Device</span>
                    <span className="text-lg font-mono font-semibold text-zinc-800">A100 x4</span>
                  </div>
                </div>
              </div>

              {/* Live Logs Console */}
              <div className="glass-card rounded-xl overflow-hidden flex flex-col" style={{ height: '340px' }}>
                <div className="bg-zinc-900 px-6 py-3 flex items-center justify-between flex-shrink-0">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-400/60 border border-red-400/80"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400/60 border border-yellow-400/80"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400/60 border border-green-400/80"></div>
                    </div>
                    <span className="ml-4 text-xs font-label text-zinc-400 font-medium">Live Pipeline Logs</span>
                  </div>
                  <button className="material-symbols-outlined text-zinc-500 hover:text-zinc-300 text-sm transition-colors">content_copy</button>
                </div>
                <div className="p-6 font-mono text-xs overflow-y-auto space-y-2 flex-1 bg-zinc-950">
                  <p className="flex gap-4"><span className="w-24 shrink-0 text-zinc-600">[14:20:01]</span><span className="text-lime-400">INFO</span><span className="text-zinc-400">Initializing training kernel on CUDA:0, CUDA:1...</span></p>
                  <p className="flex gap-4"><span className="w-24 shrink-0 text-zinc-600">[14:20:05]</span><span className="text-lime-400">INFO</span><span className="text-zinc-400">Loading datasets from high-velocity storage...</span></p>
                  <p className="flex gap-4"><span className="w-24 shrink-0 text-zinc-600">[14:20:12]</span><span className="text-lime-400">INFO</span><span className="text-zinc-400">Data partition complete: 4,000,000 rows loaded.</span></p>
                  <p className="flex gap-4"><span className="w-24 shrink-0 text-zinc-600">[14:20:15]</span><span className="text-purple-400">EXEC</span><span className="text-zinc-300">Epoch 1/50 starting...</span></p>
                  <p className="flex gap-4"><span className="w-24 shrink-0 text-zinc-600">[14:21:40]</span><span className="text-zinc-200">LOG</span><span className="text-zinc-300">Step 500/5000: loss=0.824, acc=0.651</span></p>
                  <p className="flex gap-4"><span className="w-24 shrink-0 text-zinc-600">[14:23:12]</span><span className="text-zinc-200">LOG</span><span className="text-zinc-300">Step 1000/5000: loss=0.612, acc=0.742</span></p>
                  <p className="flex gap-4"><span className="w-24 shrink-0 text-zinc-600">[14:25:05]</span><span className="text-zinc-200">LOG</span><span className="text-zinc-300">Step 1500/5000: loss=0.421, acc=0.819</span></p>
                  <p className="flex gap-4"><span className="w-24 shrink-0 text-zinc-600">[14:27:00]</span><span className="text-zinc-200">LOG</span><span className="text-zinc-300">Step 2000/5000: loss=0.354, acc=0.865</span></p>
                  <p className="flex gap-4"><span className="w-24 shrink-0 text-zinc-600">[14:29:15]</span><span className="text-zinc-100 font-bold">LOG</span><span className="text-zinc-100">Epoch 1/50 Complete — Avg Accuracy: 0.884</span></p>
                  <p className="flex gap-4"><span className="w-24 shrink-0 text-zinc-600">[14:29:20]</span><span className="text-purple-400">EXEC</span><span className="text-zinc-300">Epoch 2/50 starting...</span></p>
                  <p className="flex gap-4 animate-pulse"><span className="w-24 shrink-0 text-zinc-600">[14:31:02]</span><span className="text-zinc-100">LOG</span><span className="text-zinc-300">Step 450/5000: loss=0.245, acc=0.912 <span className="inline-block w-1.5 h-3.5 bg-zinc-300 ml-1 align-middle"></span></span></p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'Evaluation' && (
          <div className="flex flex-col gap-6 pb-20">
            {/* Action Bar */}
            <div className="flex justify-between items-start">
              <div>
                <p className="text-xs font-label uppercase tracking-[0.2em] text-secondary font-bold mb-1">Model Evaluation</p>
                <p className="text-zinc-500 font-body text-sm">Performance analysis for <span className="text-secondary font-bold">Alpha-BERT-v4</span> experimental run.</p>
              </div>
              <div className="flex gap-3">
                <button className="px-5 py-2 rounded-full border border-zinc-200 text-sm font-medium text-zinc-700 hover:bg-zinc-50 transition-colors">Export Report</button>
                <button className="px-6 py-2 rounded-full bg-zinc-900 text-white font-bold text-sm hover:scale-105 transition-transform shadow-lg shadow-zinc-900/20">Deploy Version</button>
              </div>
            </div>

            {/* Metric Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'Accuracy', value: project.accuracy + '%', sub: '+0.2% from baseline', icon: 'trending_up', color: 'text-secondary' },
                { label: 'Precision', value: '0.96', sub: 'Macro average score', icon: 'gps_fixed', color: 'text-purple-500' },
                { label: 'Recall', value: '0.94', sub: 'Weighted average', icon: 'replay', color: 'text-teal-500' },
                { label: 'F1 Score', value: '0.95', sub: 'Global performance metric', icon: 'functions', color: 'text-blue-500' },
              ].map(m => (
                <div key={m.label} className="glass-card rounded-xl p-6 flex flex-col justify-between">
                  <div className="flex justify-between items-start mb-4">
                    <p className="text-[10px] font-label uppercase tracking-widest text-zinc-500 font-bold">{m.label}</p>
                    <span className={`material-symbols-outlined text-base ${m.color}`}>{m.icon}</span>
                  </div>
                  <h3 className="text-3xl font-headline font-bold text-zinc-900 mb-1">{m.value}</h3>
                  <p className="text-[10px] text-zinc-400 font-label">{m.sub}</p>
                </div>
              ))}
            </div>

            {/* ROC Curve + Confusion Matrix */}
            <div className="grid grid-cols-12 gap-6">
              {/* ROC Curve */}
              <div className="col-span-12 lg:col-span-7 glass-card rounded-xl p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-sm font-headline font-bold text-zinc-900">ROC Curve Analysis</h3>
                  <div className="flex items-center gap-4 text-[10px] font-label text-zinc-500">
                    <span className="flex items-center gap-1.5"><span className="w-3 h-0.5 bg-secondary inline-block rounded"></span>Current Variant</span>
                    <span className="flex items-center gap-1.5"><span className="w-3 h-0.5 bg-zinc-400 inline-block rounded"></span>Baseline</span>
                  </div>
                </div>
                <div className="relative w-full" style={{ height: '200px' }}>
                  <svg viewBox="0 0 400 200" className="w-full h-full" preserveAspectRatio="none">
                    {/* Grid */}
                    <line x1="0" y1="200" x2="400" y2="0" stroke="#e4e4e7" strokeWidth="1" strokeDasharray="4"/>
                    {/* Baseline diagonal */}
                    <path d="M0,200 Q100,160 200,120 T400,20" stroke="#a1a1aa" strokeWidth="1.5" fill="none" strokeDasharray="5,3"/>
                    {/* Current Variant curve - sharper ROC */}
                    <path d="M0,200 Q30,80 80,30 T200,10 T400,5" stroke="url(#rocGrad)" strokeWidth="2.5" fill="none"/>
                    <defs>
                      <linearGradient id="rocGrad" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#b287fe"/>
                        <stop offset="100%" stopColor="#81ecff"/>
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute bottom-0 left-0 right-0 flex justify-between text-[9px] text-zinc-400 font-label px-1">
                    <span>FALSE POSITIVE RATE (FPR)</span>
                    <span>1.0</span>
                  </div>
                </div>
              </div>

              {/* Confusion Matrix */}
              <div className="col-span-12 lg:col-span-5 glass-card rounded-xl p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-sm font-headline font-bold text-zinc-900">Confusion Matrix</h3>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div className="bg-secondary/20 rounded-xl p-5 flex flex-col items-center justify-center">
                    <p className="text-[9px] font-label uppercase tracking-widest text-secondary/70 font-bold mb-1">True Positive</p>
                    <p className="text-3xl font-headline font-bold text-secondary">842</p>
                  </div>
                  <div className="bg-zinc-100 rounded-xl p-5 flex flex-col items-center justify-center">
                    <p className="text-[9px] font-label uppercase tracking-widest text-zinc-500 font-bold mb-1">False Negative</p>
                    <p className="text-3xl font-headline font-bold text-zinc-700">12</p>
                  </div>
                  <div className="bg-zinc-100 rounded-xl p-5 flex flex-col items-center justify-center">
                    <p className="text-[9px] font-label uppercase tracking-widest text-zinc-500 font-bold mb-1">False Positive</p>
                    <p className="text-3xl font-headline font-bold text-zinc-700">24</p>
                  </div>
                  <div className="bg-secondary/40 rounded-xl p-5 flex flex-col items-center justify-center">
                    <p className="text-[9px] font-label uppercase tracking-widest text-secondary/70 font-bold mb-1">True Negative</p>
                    <p className="text-3xl font-headline font-bold text-zinc-900">788</p>
                  </div>
                </div>
                <p className="text-[9px] text-zinc-400 font-label uppercase tracking-widest">Class: High Priority</p>
              </div>
            </div>

            {/* Variant Benchmarking Table */}
            <div className="glass-card rounded-xl overflow-hidden">
              <div className="px-6 py-4 border-b border-black/5 flex justify-between items-center">
                <h3 className="text-sm font-headline font-bold text-zinc-900">Variant Benchmarking</h3>
                <p className="text-[10px] text-zinc-400 font-label">Displaying top 5 performing variants</p>
              </div>
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-zinc-50 text-[10px] font-label uppercase tracking-widest text-zinc-500">
                    <th className="px-6 py-4 text-left font-semibold">Variant Name</th>
                    <th className="px-6 py-4 text-left font-semibold">Parameters</th>
                    <th className="px-6 py-4 text-left font-semibold">Loss</th>
                    <th className="px-6 py-4 text-left font-semibold">Accuracy</th>
                    <th className="px-6 py-4 text-left font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/5">
                  {[
                    { name: 'Alpha-BERT-v4 (Current)', params: '110M', loss: '0.023', acc: '98.4%', accBg: 'bg-secondary/15 text-secondary', status: 'Validated', statusIcon: 'check_circle', statusColor: 'text-green-600', dot: 'bg-secondary' },
                    { name: 'Alpha-BERT-v3', params: '110M', loss: '0.041', acc: '97.1%', accBg: '', status: 'Archived', statusIcon: 'inventory_2', statusColor: 'text-zinc-400', dot: 'bg-zinc-300' },
                    { name: 'RoBerta-Base-Exp', params: '125M', loss: '0.038', acc: '96.8%', accBg: '', status: 'History', statusIcon: 'history', statusColor: 'text-zinc-400', dot: 'bg-zinc-300' },
                    { name: 'DistII-BERT-Fast', params: '66M', loss: '0.112', acc: '92.3%', accBg: '', status: 'Rejected', statusIcon: 'cancel', statusColor: 'text-red-500', dot: 'bg-red-400' },
                  ].map(v => (
                    <tr key={v.name} className="hover:bg-zinc-50/60 transition-colors">
                      <td className="px-6 py-4 font-medium text-zinc-800 flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full inline-block ${v.dot}`}></span>
                        {v.name}
                      </td>
                      <td className="px-6 py-4 text-zinc-500 font-mono text-xs">{v.params}</td>
                      <td className="px-6 py-4 text-zinc-600 font-mono text-xs">{v.loss}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${v.accBg || 'text-zinc-700'}`}>{v.acc}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`flex items-center gap-1.5 text-xs font-medium ${v.statusColor}`}>
                          <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>{v.statusIcon}</span>
                          {v.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'Deployment' && (
          <div className="flex flex-col gap-6 pb-20">
            {/* Header */}
            <div className="flex justify-between items-start">
              <div>
                <p className="text-xs font-label uppercase tracking-[0.2em] text-secondary font-bold mb-1">Finalization Stage</p>
                <p className="text-zinc-500 font-body text-sm">Configure and push your model to production infrastructure.</p>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/60 border border-black/10 rounded-full">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                <span className="text-[10px] font-label uppercase tracking-widest text-zinc-600 font-bold">System Online</span>
              </div>
            </div>

            {/* Main Two-Column Layout */}
            <div className="grid grid-cols-12 gap-6">
              {/* Left: Pipeline Health + Config */}
              <div className="col-span-12 lg:col-span-4 flex flex-col gap-4">
                {/* Pipeline Health */}
                <div className="glass-card rounded-xl p-6">
                  <p className="text-[9px] font-label uppercase tracking-widest text-zinc-400 font-bold mb-4">Pipeline Health</p>
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h3 className="text-3xl font-headline font-bold text-zinc-900">Ready</h3>
                      <p className="text-sm text-zinc-500 mt-1">Model Validation Passed</p>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center shadow-lg shadow-zinc-900/20">
                      <span className="material-symbols-outlined text-white text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    </div>
                  </div>
                  <button className="mt-5 w-full py-3 bg-secondary text-white rounded-full font-headline font-bold flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform shadow-lg shadow-secondary/25 active:scale-95">
                    <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>rocket_launch</span>
                    Deploy to Production
                  </button>
                </div>

                {/* Configuration — flex-1 so it fills remaining height */}
                <div className="glass-card rounded-xl p-6 flex-1 flex flex-col">
                  <p className="text-[9px] font-label uppercase tracking-widest text-zinc-400 font-bold mb-5">Configuration</p>
                  <div className="flex flex-col gap-0 flex-1">
                    {[
                      { label: 'Cluster Zone', value: 'us-east-4 (Nova)', valueColor: 'text-zinc-800' },
                      { label: 'Replicas', value: 'Auto-scale (2-12)', valueColor: 'text-zinc-800' },
                      { label: 'Instance Type', value: 'A100-Glow-S', valueColor: 'text-secondary font-bold' },
                      { label: 'Memory', value: '80 GB HBM3', valueColor: 'text-zinc-800' },
                      { label: 'Max Tokens', value: '131,072', valueColor: 'text-zinc-800' },
                      { label: 'Framework', value: 'PyTorch 2.3', valueColor: 'text-zinc-800' },
                      { label: 'Quantization', value: 'INT8 (optimized)', valueColor: 'text-zinc-800' },
                    ].map((c, i, arr) => (
                      <div
                        key={c.label}
                        className={`flex justify-between items-center py-3 ${i < arr.length - 1 ? 'border-b border-black/5' : ''}`}
                      >
                        <span className="text-xs text-zinc-500 font-label">{c.label}</span>
                        <span className={`text-xs font-medium ${c.valueColor}`}>{c.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>


              {/* Right: Inference Endpoint + Code */}
              <div className="col-span-12 lg:col-span-8">
                <div className="glass-card rounded-xl p-6 flex flex-col gap-5">
                  {/* Inference Endpoint */}
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <p className="text-[9px] font-label uppercase tracking-widest text-zinc-400 font-bold">Inference Endpoint</p>
                      <span className="px-2.5 py-1 bg-teal-100 text-teal-700 text-[9px] font-bold rounded-full font-label tracking-wider">PRIVATE API</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex-1 bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-2.5 font-mono text-xs text-zinc-500 truncate">
                        https://api.neonobservatory.ai/v1/predict/model-01
                      </div>
                      <button className="flex-shrink-0 px-4 py-2.5 bg-zinc-100 hover:bg-zinc-200 border border-zinc-200 text-zinc-800 rounded-lg text-xs font-bold flex items-center gap-2 transition-colors">
                        <span className="material-symbols-outlined text-sm">content_copy</span>
                        Copy URL
                      </button>
                    </div>
                  </div>

                  {/* Tabs */}
                  <div>
                    <div className="flex gap-6 border-b border-black/5 mb-4">
                      {['Example Request', 'Response Body'].map((tab, i) => (
                        <button key={tab} className={`pb-3 text-sm font-medium transition-colors ${i === 0 ? 'text-zinc-900 border-b-2 border-zinc-900 -mb-px' : 'text-zinc-400 hover:text-zinc-600'}`}>
                          {tab}
                        </button>
                      ))}
                    </div>
                    {/* JSON Code Block */}
                    <div className="bg-zinc-950 rounded-xl p-5 font-mono text-[11px] leading-6">
                      <p><span className="text-zinc-500">{'{'}</span></p>
                      <p>&nbsp;&nbsp;<span className="text-lime-400">"input"</span><span className="text-zinc-500">: {'{'}</span></p>
                      <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-lime-400">"prompt"</span><span className="text-zinc-400">: </span><span className="text-amber-300">"Analyze astronomical data from sector 7G"</span><span className="text-zinc-400">,</span></p>
                      <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-lime-400">"resolution"</span><span className="text-zinc-400">: </span><span className="text-amber-300">"ultra-high"</span><span className="text-zinc-400">,</span></p>
                      <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-lime-400">"parameters"</span><span className="text-zinc-500">: {'{'}</span></p>
                      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-lime-400">"noise_reduction"</span><span className="text-zinc-400">: </span><span className="text-secondary">0.95</span><span className="text-zinc-400">,</span></p>
                      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-lime-400">"contrast_enhancement"</span><span className="text-zinc-400">: </span><span className="text-secondary">true</span></p>
                      <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-zinc-500">{'}'}</span></p>
                      <p>&nbsp;&nbsp;<span className="text-zinc-500">{'}'}</span><span className="text-zinc-400">,</span></p>
                      <p>&nbsp;&nbsp;<span className="text-lime-400">"metadata"</span><span className="text-zinc-500">: {'{'}</span></p>
                      <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-lime-400">"request_id"</span><span className="text-zinc-400">: </span><span className="text-amber-300">"req_ne0n_89234"</span></p>
                      <p>&nbsp;&nbsp;<span className="text-zinc-500">{'}'}</span></p>
                      <p><span className="text-zinc-500">{'}'}</span></p>
                    </div>
                  </div>

                  {/* SDK footer */}
                  <div className="flex justify-between items-center pt-1">
                    <div className="flex items-center gap-2">
                      <div className="flex -space-x-1">
                        <div className="w-5 h-5 rounded-full bg-secondary border-2 border-white"></div>
                        <div className="w-5 h-5 rounded-full bg-teal-400 border-2 border-white"></div>
                        <div className="w-5 h-5 rounded-full bg-amber-400 border-2 border-white"></div>
                      </div>
                      <span className="text-[11px] text-zinc-500 font-label">SDKs available for Python, Node, and Go</span>
                    </div>
                    <button className="text-[11px] text-zinc-700 font-bold hover:text-secondary transition-colors flex items-center gap-1">
                      View Documentation
                      <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Deployment Sequence */}
            <div className="glass-card rounded-xl p-6">
              <p className="text-[9px] font-label uppercase tracking-widest text-zinc-400 font-bold mb-6">Deployment Sequence</p>
              <div className="relative flex items-center justify-between">
                {/* Track line */}
                <div className="absolute left-0 right-0 top-3 h-0.5 bg-zinc-200 z-0"></div>
                {/* Filled progress up to Production (4th step) */}
                <div className="absolute left-0 top-3 h-0.5 bg-gradient-to-r from-secondary to-purple-300 z-0" style={{ width: '75%' }}></div>

                {[
                  { label: 'Artifact Built', done: true },
                  { label: 'Sec Scan', done: true },
                  { label: 'Staging Test', done: true },
                  { label: 'Production', active: true },
                  { label: 'Post-Deploy', done: false },
                ].map((step, i) => (
                  <div key={step.label} className="relative z-10 flex flex-col items-center gap-2">
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                      step.active
                        ? 'bg-zinc-900 border-zinc-900 shadow-lg shadow-zinc-900/30'
                        : step.done
                        ? 'bg-secondary border-secondary'
                        : 'bg-white border-zinc-300'
                    }`}>
                      {step.done && !step.active && (
                        <span className="material-symbols-outlined text-white text-xs" style={{ fontVariationSettings: "'FILL' 1", fontSize: '12px' }}>check</span>
                      )}
                      {step.active && <div className="w-2 h-2 rounded-full bg-white"></div>}
                    </div>
                    <span className={`text-[9px] font-label uppercase tracking-wider font-bold ${step.active ? 'text-zinc-900' : step.done ? 'text-secondary' : 'text-zinc-400'}`}>
                      {step.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
