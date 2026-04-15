import { useState } from 'react';

const models = [
  {
    id: 1,
    name: 'Nebula v2.4 Ultra',
    type: 'LLM',
    typeColor: 'bg-secondary/10 text-secondary',
    icon: 'auto_awesome',
    iconBg: 'bg-secondary/10 text-secondary',
    params: '70B',
    accuracy: '98.4%',
    f1: '0.97',
    size: '142 GB',
    status: 'Production',
    statusColor: 'bg-green-100 text-green-700',
    framework: 'PyTorch 2.3',
    lastUpdated: '2h ago',
    featured: true,
    description: 'State-of-the-art large language model optimized for astronomical data analysis and multi-modal inference.',
  },
  {
    id: 2,
    name: 'Synapse Vision L-4',
    type: 'Vision',
    typeColor: 'bg-blue-100 text-blue-700',
    icon: 'visibility',
    iconBg: 'bg-blue-100 text-blue-600',
    params: '22B',
    accuracy: '96.1%',
    f1: '0.95',
    size: '44 GB',
    status: 'Training',
    statusColor: 'bg-amber-100 text-amber-700',
    framework: 'JAX',
    lastUpdated: '18m ago',
    featured: false,
    description: 'High-resolution visual understanding model for deep-space image classification.',
  },
  {
    id: 3,
    name: 'Alpha-BERT-v4',
    type: 'NLP',
    typeColor: 'bg-teal-100 text-teal-700',
    icon: 'subject',
    iconBg: 'bg-teal-100 text-teal-600',
    params: '110M',
    accuracy: '98.4%',
    f1: '0.96',
    size: '440 MB',
    status: 'Production',
    statusColor: 'bg-green-100 text-green-700',
    framework: 'PyTorch 2.3',
    lastUpdated: '1d ago',
    featured: false,
    description: 'Fine-tuned BERT variant for scientific text classification and entity extraction.',
  },
  {
    id: 4,
    name: 'Titan NLP Legacy',
    type: 'NLP',
    typeColor: 'bg-teal-100 text-teal-700',
    icon: 'warning_amber',
    iconBg: 'bg-red-100 text-red-500',
    params: '3.5B',
    accuracy: '92.3%',
    f1: '0.91',
    size: '7 GB',
    status: 'Deprecated',
    statusColor: 'bg-red-100 text-red-700',
    framework: 'TensorFlow 2',
    lastUpdated: '14d ago',
    featured: false,
    description: 'Legacy NLP pipeline maintained for backwards-compatibility. Migration recommended.',
  },
  {
    id: 5,
    name: 'RoBerta-Base-Exp',
    type: 'NLP',
    typeColor: 'bg-teal-100 text-teal-700',
    icon: 'science',
    iconBg: 'bg-purple-100 text-purple-600',
    params: '125M',
    accuracy: '96.8%',
    f1: '0.95',
    size: '501 MB',
    status: 'Archived',
    statusColor: 'bg-zinc-100 text-zinc-600',
    framework: 'PyTorch 2.1',
    lastUpdated: '5d ago',
    featured: false,
    description: 'Experimental RoBERTa variant with extended context window for domain adaptation.',
  },
  {
    id: 6,
    name: 'DistII-BERT-Fast',
    type: 'NLP',
    typeColor: 'bg-teal-100 text-teal-700',
    icon: 'bolt',
    iconBg: 'bg-amber-100 text-amber-600',
    params: '66M',
    accuracy: '92.3%',
    f1: '0.90',
    size: '266 MB',
    status: 'Archived',
    statusColor: 'bg-zinc-100 text-zinc-600',
    framework: 'ONNX',
    lastUpdated: '7d ago',
    featured: false,
    description: 'Distilled model optimised for edge inference with reduced memory footprint.',
  },
];

const stats = [
  { label: 'Total Models', value: '6', icon: 'hub', color: 'text-secondary' },
  { label: 'In Production', value: '2', icon: 'rocket_launch', color: 'text-green-600' },
  { label: 'In Training', value: '1', icon: 'model_training', color: 'text-amber-500' },
  { label: 'Avg F1 Score', value: '0.94', icon: 'analytics', color: 'text-blue-500' },
];

export default function Models() {
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');
  const filters = ['All', 'LLM', 'Vision', 'NLP'];

  const featured = models.find(m => m.featured)!;
  const rest = models
    .filter(m => !m.featured)
    .filter(m => filter === 'All' || m.type === filter)
    .filter(m => m.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="p-10 pb-16">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">

        {/* Header */}
        <div className="flex justify-between items-start">
          <div>
            <p className="text-xs font-label uppercase tracking-[0.2em] text-secondary font-bold mb-1">Model Registry</p>
            <h2 className="text-4xl font-headline font-bold text-on-surface tracking-tight mb-1">Models</h2>
            <p className="text-on-surface-variant font-body text-sm">Manage, evaluate and deploy your model collection.</p>
          </div>
          <div className="flex gap-3 mt-2">
            <button className="px-5 py-2 rounded-full border border-black/10 text-sm font-medium text-on-surface-variant hover:bg-black/5 transition-colors flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">filter_list</span>Filter
            </button>
            <button className="px-6 py-2.5 rounded-full bg-zinc-900 text-white font-bold text-sm hover:scale-105 transition-transform shadow-lg shadow-zinc-900/20 flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">add</span>Register Model
            </button>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map(s => (
            <div key={s.label} className="glass-card rounded-xl p-5 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-black/5 flex items-center justify-center flex-shrink-0">
                <span className={`material-symbols-outlined text-lg ${s.color}`} style={{ fontVariationSettings: "'FILL' 1" }}>{s.icon}</span>
              </div>
              <div>
                <p className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant font-bold">{s.label}</p>
                <p className="text-2xl font-headline font-bold text-on-surface">{s.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Model */}
        <div className="glass-card rounded-2xl p-8 relative overflow-hidden">
          {/* Background accent */}
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-transparent pointer-events-none rounded-2xl" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/4" />

          <div className="relative grid grid-cols-12 gap-8 items-center">
            <div className="col-span-12 lg:col-span-7">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/15 flex items-center justify-center">
                  <span className="material-symbols-outlined text-secondary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>{featured.icon}</span>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-headline font-bold text-on-surface">{featured.name}</h3>
                    <span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-[9px] font-bold rounded-full font-label tracking-wider">FEATURED</span>
                  </div>
                  <p className="text-xs text-on-surface-variant font-label">{featured.type} · {featured.params} parameters · {featured.framework}</p>
                </div>
              </div>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-6">{featured.description}</p>
              <div className="flex gap-3">
                <button className="px-6 py-2.5 bg-secondary text-white rounded-full font-bold text-sm flex items-center gap-2 hover:scale-105 transition-transform shadow-lg shadow-secondary/25">
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>rocket_launch</span>
                  Deploy
                </button>
                <button className="px-6 py-2.5 border border-black/10 text-on-surface-variant rounded-full font-medium text-sm flex items-center gap-2 hover:bg-black/5 transition-colors">
                  <span className="material-symbols-outlined text-sm">analytics</span>
                  Evaluate
                </button>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-5">
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: 'Accuracy', value: featured.accuracy, icon: 'trending_up', color: 'text-green-600', bg: 'bg-green-50' },
                  { label: 'F1 Score', value: featured.f1, icon: 'functions', color: 'text-secondary', bg: 'bg-secondary/10' },
                  { label: 'Model Size', value: featured.size, icon: 'storage', color: 'text-blue-600', bg: 'bg-blue-50' },
                  { label: 'Updated', value: featured.lastUpdated, icon: 'schedule', color: 'text-zinc-600', bg: 'bg-zinc-100' },
                ].map(m => (
                  <div key={m.label} className={`${m.bg} rounded-xl p-4`}>
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`material-symbols-outlined text-sm ${m.color}`} style={{ fontVariationSettings: "'FILL' 1" }}>{m.icon}</span>
                      <p className="text-[9px] font-label uppercase tracking-widest text-zinc-500 font-bold">{m.label}</p>
                    </div>
                    <p className="text-xl font-headline font-bold text-on-surface">{m.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Search + Filter Bar */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 bg-white/60 border border-black/10 rounded-full px-4 py-2.5 w-72 backdrop-blur-sm">
            <span className="material-symbols-outlined text-zinc-400 text-sm">search</span>
            <input
              className="text-sm bg-transparent outline-none text-on-surface placeholder:text-on-surface-variant/50 w-full"
              placeholder="Search models..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-full text-xs font-bold font-label transition-all ${
                  filter === f
                    ? 'bg-zinc-900 text-white shadow-lg shadow-zinc-900/20'
                    : 'bg-white/60 border border-black/10 text-on-surface-variant hover:bg-black/5'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Model Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {rest.map(model => (
            <div key={model.id} className="glass-card rounded-xl p-6 flex flex-col gap-4 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200">
              {/* Card Header */}
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${model.iconBg}`}>
                    <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>{model.icon}</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-headline font-bold text-on-surface leading-tight">{model.name}</h4>
                    <p className="text-[10px] text-on-surface-variant font-label">{model.params} params</p>
                  </div>
                </div>
                <span className={`px-2.5 py-1 text-[10px] font-bold rounded-full font-label ${model.statusColor}`}>{model.status}</span>
              </div>

              {/* Description */}
              <p className="text-xs text-on-surface-variant leading-relaxed line-clamp-2">{model.description}</p>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-2">
                {[
                  { label: 'Accuracy', value: model.accuracy },
                  { label: 'F1', value: model.f1 },
                  { label: 'Size', value: model.size },
                ].map(m => (
                  <div key={m.label} className="bg-black/[0.03] rounded-lg p-3 text-center">
                    <p className="text-[9px] font-label uppercase tracking-widest text-zinc-500 font-bold mb-1">{m.label}</p>
                    <p className="text-sm font-headline font-bold text-on-surface">{m.value}</p>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-1 border-t border-black/5">
                <div className="flex items-center gap-1.5 text-[10px] text-on-surface-variant font-label">
                  <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold ${model.typeColor}`}>{model.type}</span>
                  <span>·</span>
                  <span>{model.framework}</span>
                  <span>·</span>
                  <span>{model.lastUpdated}</span>
                </div>
                <div className="flex gap-1">
                  <button className="w-7 h-7 rounded-lg bg-black/5 hover:bg-secondary/10 hover:text-secondary flex items-center justify-center transition-colors">
                    <span className="material-symbols-outlined text-sm text-zinc-500">analytics</span>
                  </button>
                  <button className="w-7 h-7 rounded-lg bg-black/5 hover:bg-zinc-900 hover:text-white flex items-center justify-center transition-colors">
                    <span className="material-symbols-outlined text-sm text-zinc-500">rocket_launch</span>
                  </button>
                  <button className="w-7 h-7 rounded-lg bg-black/5 hover:bg-black/10 flex items-center justify-center transition-colors">
                    <span className="material-symbols-outlined text-sm text-zinc-500">more_vert</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
