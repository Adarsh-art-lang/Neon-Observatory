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
          <div className="grid grid-cols-12 gap-6 pb-20">
            {/* Dataset Overview */}
            <div className="col-span-12 lg:col-span-8 glass-card rounded-xl p-8 flex flex-col justify-between min-h-[300px]">
              <div>
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h3 className="text-xl font-headline font-bold text-zinc-900">Dataset Overview</h3>
                    <p className="text-sm text-zinc-500 font-label">Preprocessing & ingestion pipeline status</p>
                  </div>
                  <span className="px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-green-100 text-green-700">Ready</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="space-y-1">
                    <p className="text-[10px] uppercase font-label tracking-wider text-zinc-500">Source</p>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-secondary text-lg">folder_zip</span>
                      <p className="font-body font-bold text-zinc-800">{project.dataset}</p>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] uppercase font-label tracking-wider text-zinc-500">Split Ratio</p>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-secondary text-lg">pie_chart</span>
                      <p className="font-body font-bold text-zinc-800">80 / 10 / 10</p>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] uppercase font-label tracking-wider text-zinc-500">Total Samples</p>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-secondary text-lg">dataset</span>
                      <p className="font-body font-bold text-zinc-800">124,500</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 mt-8">
                <button className="px-6 py-2.5 bg-zinc-900 text-white rounded-full font-bold text-sm transition-transform active:scale-95 hover:shadow-lg hover:shadow-zinc-900/20">Run Preprocessing</button>
                <button className="px-6 py-2.5 bg-white/70 backdrop-blur-sm text-zinc-900 border border-white rounded-full font-bold text-sm transition-transform active:scale-95 hover:bg-white">Preview Samples</button>
              </div>
            </div>

            {/* Data Quality Score */}
            <div className="col-span-12 md:col-span-6 lg:col-span-4 glass-card rounded-xl p-8 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-6">
                  <p className="text-sm font-label uppercase tracking-widest text-zinc-500">Data Quality</p>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-green-100 text-green-600">
                    <span className="material-symbols-outlined">verified</span>
                  </div>
                </div>
                <h4 className="text-6xl font-headline font-bold text-zinc-900">97<span className="text-3xl text-zinc-400">%</span></h4>
              </div>
              <div className="mt-4">
                <div className="w-full bg-zinc-200/50 h-1.5 rounded-full overflow-hidden">
                  <div className="h-full bg-secondary neon-glow transition-all duration-1000 ease-out" style={{ width: '97%' }}></div>
                </div>
                <p className="text-xs text-zinc-500 mt-2">No missing values detected</p>
              </div>
            </div>

            {/* Pipeline Steps */}
            <div className="col-span-12 md:col-span-6 lg:col-span-4 glass-card rounded-xl p-8 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-6">
                  <p className="text-sm font-label uppercase tracking-widest text-zinc-500">Pipeline Steps</p>
                  <div className="w-10 h-10 bg-blue-50/80 rounded-full flex items-center justify-center text-blue-500">
                    <span className="material-symbols-outlined">alt_route</span>
                  </div>
                </div>
                <h4 className="text-4xl font-headline font-bold text-zinc-900">6 Steps</h4>
              </div>
              <div className="mt-4 flex flex-col gap-2">
                {['Ingest', 'Clean', 'Tokenize', 'Normalize', 'Augment', 'Export'].map((step, i) => (
                  <div key={step} className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-secondary"></span>
                    <span className="text-xs text-zinc-600 font-label">{step}</span>
                    {i < 4 && <span className="ml-auto text-[10px] text-green-600 font-bold">Done</span>}
                    {i === 4 && <span className="ml-auto text-[10px] text-amber-500 font-bold animate-pulse">Running</span>}
                    {i === 5 && <span className="ml-auto text-[10px] text-zinc-400 font-bold">Pending</span>}
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Banner */}
            <div className="col-span-12 lg:col-span-8 glass-card rounded-xl overflow-hidden relative group min-h-[220px]">
              <img className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" alt="data pipeline visualization" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPB_t4K0sl8qVh_29MRPkmr2FwQaDCcRSoMZMfq-4Niii5GP8XXA0fwhFNkcSqTGkd4L5elMs2DqJkRvmAN_-jMZN4He41UjOMsafrrap8tGLYKC9_vbrNoaQ55Hkx1nuwsu8QYEFx06aBNdhfhFt-a8eMMvE06WUJIQfMEpysD6VPQTb09A4fqn_4hbwArf4_UnbMF5Zcjwmd10N9fAEDU1yXQeggOVAvHp3Qm_JFOfPVwmPtLgX9PezQlcbV52fKgoLp3xYLpNX1" />
              <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent p-8 flex flex-col justify-center">
                <div className="max-w-xs relative z-10">
                  <span className="inline-block mb-4 px-3 py-1 bg-secondary/15 text-secondary rounded-full text-[10px] font-bold uppercase tracking-widest">Data Insights</span>
                  <h3 className="text-2xl font-headline font-bold text-zinc-900 mb-2">Feature Distribution</h3>
                  <p className="text-sm text-zinc-600 font-body leading-relaxed">Explore class balance, outlier detection, and feature correlation heatmaps.</p>
                  <button className="mt-6 flex items-center gap-2 text-zinc-900 font-bold text-sm group/btn hover:text-secondary transition-colors">
                    Open Explorer
                    <span className="material-symbols-outlined group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'Training' && (
          <div className="grid grid-cols-12 gap-6 pb-20">
            {/* Training Config */}
            <div className="col-span-12 lg:col-span-8 glass-card rounded-xl p-8 flex flex-col justify-between min-h-[300px]">
              <div>
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h3 className="text-xl font-headline font-bold text-zinc-900">Training Configuration</h3>
                    <p className="text-sm text-zinc-500 font-label">Hyperparameters & runtime settings</p>
                  </div>
                  <span className={`px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest ${
                    project.status === 'Completed' ? 'bg-green-100 text-green-700' :
                    project.status === 'Running' ? 'bg-secondary/10 text-secondary' :
                    'bg-red-100 text-red-700'
                  }`}>{project.status}</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="space-y-1">
                    <p className="text-[10px] uppercase font-label tracking-wider text-zinc-500">Architecture</p>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-secondary text-lg">memory</span>
                      <p className="font-body font-bold text-zinc-800">{project.model}</p>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] uppercase font-label tracking-wider text-zinc-500">Learning Rate</p>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-secondary text-lg">tune</span>
                      <p className="font-body font-bold text-zinc-800">3e-4</p>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] uppercase font-label tracking-wider text-zinc-500">Batch Size</p>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-secondary text-lg">layers</span>
                      <p className="font-body font-bold text-zinc-800">64</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 mt-8">
                <button className="px-6 py-2.5 bg-zinc-900 text-white rounded-full font-bold text-sm transition-transform active:scale-95 hover:shadow-lg hover:shadow-zinc-900/20">View Logs</button>
                <button className="px-6 py-2.5 bg-white/70 backdrop-blur-sm text-zinc-900 border border-white rounded-full font-bold text-sm transition-transform active:scale-95 hover:bg-white">Edit Config</button>
              </div>
            </div>

            {/* Training Progress */}
            <div className="col-span-12 md:col-span-6 lg:col-span-4 glass-card rounded-xl p-8 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-6">
                  <p className="text-sm font-label uppercase tracking-widest text-zinc-500">Current Accuracy</p>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    Number(project.accuracy) > 90 ? 'bg-green-100 text-green-600' :
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
                <p className="text-xs text-zinc-500 mt-2">Epochs completed: 42 / 100</p>
              </div>
            </div>

            {/* Last Run */}
            <div className="col-span-12 md:col-span-6 lg:col-span-4 glass-card rounded-xl p-8 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-6">
                  <p className="text-sm font-label uppercase tracking-widest text-zinc-500">Last Run</p>
                  <div className="w-10 h-10 bg-blue-50/80 rounded-full flex items-center justify-center text-blue-500">
                    <span className="material-symbols-outlined">history</span>
                  </div>
                </div>
                <h4 className="text-4xl font-headline font-bold text-zinc-900">{project.lastRunTime}</h4>
              </div>
              <div className="mt-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-zinc-400 text-lg">event_available</span>
                <p className="text-xs text-zinc-500">{project.date}</p>
              </div>
            </div>

            {/* Visual Banner */}
            <div className="col-span-12 lg:col-span-8 glass-card rounded-xl overflow-hidden relative group min-h-[220px]">
              <img className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" alt="abstract neural network visualization" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPB_t4K0sl8qVh_29MRPkmr2FwQaDCcRSoMZMfq-4Niii5GP8XXA0fwhFNkcSqTGkd4L5elMs2DqJkRvmAN_-jMZN4He41UjOMsafrrap8tGLYKC9_vbrNoaQ55Hkx1nuwsu8QYEFx06aBNdhfhFt-a8eMMvE06WUJIQfMEpysD6VPQTb09A4fqn_4hbwArf4_UnbMF5Zcjwmd10N9fAEDU1yXQeggOVAvHp3Qm_JFOfPVwmPtLgX9PezQlcbV52fKgoLp3xYLpNX1" />
              <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent p-8 flex flex-col justify-center">
                <div className="max-w-xs relative z-10">
                  <span className="inline-block mb-4 px-3 py-1 bg-secondary/15 text-secondary rounded-full text-[10px] font-bold uppercase tracking-widest">Training Insights</span>
                  <h3 className="text-2xl font-headline font-bold text-zinc-900 mb-2">Loss Curve View</h3>
                  <p className="text-sm text-zinc-600 font-body leading-relaxed">Visualize training vs. validation loss and detect overfitting early.</p>
                  <button className="mt-6 flex items-center gap-2 text-zinc-900 font-bold text-sm group/btn hover:text-secondary transition-colors">
                    Open Chart
                    <span className="material-symbols-outlined group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}