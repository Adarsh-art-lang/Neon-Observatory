import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const defaultProjects = [
  {
    id: 'neuralvision-alpha',
    title: 'NeuralVision Alpha',
    dataset: 'ImageNet-Sub-2024',
    modelType: 'CNN-ResNet50',
    accuracy: '98.4%',
    progress: '98.4%',
    status: 'Completed',
    statusClass: 'bg-green-100 text-green-700 border-green-200',
    icon: 'data_object',
    iconClass: 'text-primary bg-primary/10',
  },
  {
    id: 'quantumnlp-core',
    title: 'QuantumNLP Core',
    dataset: 'CommonCrawl-HQ',
    modelType: 'Transformer-LLM',
    accuracy: '72.1%',
    progress: '72%',
    status: 'Running',
    statusClass: 'bg-secondary/10 text-secondary border-secondary/20',
    icon: 'neurology',
    iconClass: 'text-secondary bg-secondary/10',
  },
  {
    id: 'ecosense-predict',
    title: 'EcoSense Predict',
    dataset: 'Global-Weather-v4',
    modelType: 'RNN-LSTM',
    accuracy: '12.4%',
    progress: '12.4%',
    status: 'Failed',
    statusClass: 'bg-red-100 text-red-700 border-red-200',
    icon: 'warning',
    iconClass: 'text-error bg-error/10',
  },
  {
    id: 'financialguard-pro',
    title: 'FinancialGuard Pro',
    dataset: 'Fraud-Detection-v2',
    modelType: 'RandomForest',
    accuracy: '99.1%',
    progress: '99.1%',
    status: 'Completed',
    statusClass: 'bg-green-100 text-green-700 border-green-200',
    icon: 'analytics',
    iconClass: 'text-secondary bg-secondary/10',
  },
];

const modelTypes = [
  'CNN-ResNet50', 'Transformer-LLM', 'RNN-LSTM', 'RandomForest',
  'Alpha-BERT', 'Vision Transformer', 'Diffusion Model', 'Graph Neural Network',
];

const iconOptions = [
  { icon: 'data_object', cls: 'text-primary bg-primary/10' },
  { icon: 'neurology', cls: 'text-secondary bg-secondary/10' },
  { icon: 'analytics', cls: 'text-secondary bg-secondary/10' },
  { icon: 'satellite_alt', cls: 'text-teal-600 bg-teal-100' },
  { icon: 'biotech', cls: 'text-blue-600 bg-blue-100' },
  { icon: 'hub', cls: 'text-purple-600 bg-purple-100' },
];

type Project = typeof defaultProjects[0];

function NewProjectModal({ onClose, onAdd }: { onClose: () => void; onAdd: (p: Project) => void }) {
  const [name, setName] = useState('');
  const [dataset, setDataset] = useState('');
  const [modelType, setModelType] = useState(modelTypes[0]);
  const [desc, setDesc] = useState('');
  const [selectedIcon, setSelectedIcon] = useState(0);
  const [step, setStep] = useState(1);

  const handleCreate = () => {
    const id = name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    const newProject: Project = {
      id,
      title: name,
      dataset: dataset || 'Custom Dataset',
      modelType,
      accuracy: '0%',
      progress: '0%',
      status: 'Running',
      statusClass: 'bg-secondary/10 text-secondary border-secondary/20',
      icon: iconOptions[selectedIcon].icon,
      iconClass: iconOptions[selectedIcon].cls,
    };
    onAdd(newProject);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={onClose}>
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative w-full max-w-lg bg-white/90 backdrop-blur-2xl border border-white/60 rounded-3xl shadow-2xl shadow-black/20 overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-8 pt-8 pb-6 border-b border-black/5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[10px] font-label uppercase tracking-widest text-secondary font-bold mb-1">New Project</p>
              <h3 className="text-xl font-headline font-bold text-on-surface">Initialize ML Pipeline</h3>
            </div>
            <button onClick={onClose} className="w-8 h-8 rounded-full hover:bg-black/5 flex items-center justify-center transition-colors">
              <span className="material-symbols-outlined text-on-surface-variant text-lg">close</span>
            </button>
          </div>
          {/* Step indicator */}
          <div className="flex items-center gap-2 mt-5">
            {[1, 2].map(s => (
              <div key={s} className="flex items-center gap-2">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold transition-all ${step >= s ? 'bg-secondary text-white' : 'bg-black/5 text-on-surface-variant'}`}>{s}</div>
                <span className={`text-[10px] font-label font-bold ${step >= s ? 'text-secondary' : 'text-on-surface-variant'}`}>
                  {s === 1 ? 'Basic Info' : 'Configuration'}
                </span>
                {s < 2 && <div className={`w-8 h-0.5 mx-1 rounded ${step > s ? 'bg-secondary' : 'bg-black/10'}`} />}
              </div>
            ))}
          </div>
        </div>

        {/* Body */}
        <div className="px-8 py-6">
          {step === 1 ? (
            <div className="space-y-5">
              <div>
                <label className="block text-[10px] font-label uppercase tracking-widest text-on-surface-variant font-bold mb-2">Project Name *</label>
                <input
                  autoFocus
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="e.g. StellarVision Nano"
                  className="w-full px-4 py-3 bg-black/[0.03] border border-black/10 rounded-xl text-sm text-on-surface outline-none focus:border-secondary/50 transition-colors placeholder:text-on-surface-variant/40"
                />
              </div>
              <div>
                <label className="block text-[10px] font-label uppercase tracking-widest text-on-surface-variant font-bold mb-2">Description</label>
                <textarea
                  value={desc}
                  onChange={e => setDesc(e.target.value)}
                  placeholder="Brief description of your ML pipeline..."
                  rows={3}
                  className="w-full px-4 py-3 bg-black/[0.03] border border-black/10 rounded-xl text-sm text-on-surface outline-none focus:border-secondary/50 transition-colors resize-none placeholder:text-on-surface-variant/40"
                />
              </div>
              <div>
                <label className="block text-[10px] font-label uppercase tracking-widest text-on-surface-variant font-bold mb-3">Project Icon</label>
                <div className="flex gap-2">
                  {iconOptions.map((opt, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedIcon(i)}
                      className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${opt.cls} ${selectedIcon === i ? 'ring-2 ring-secondary ring-offset-2 scale-110' : 'opacity-60 hover:opacity-100'}`}
                    >
                      <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>{opt.icon}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-5">
              <div>
                <label className="block text-[10px] font-label uppercase tracking-widest text-on-surface-variant font-bold mb-2">Dataset Name</label>
                <input
                  autoFocus
                  value={dataset}
                  onChange={e => setDataset(e.target.value)}
                  placeholder="e.g. ImageNet-Sub-2024"
                  className="w-full px-4 py-3 bg-black/[0.03] border border-black/10 rounded-xl text-sm text-on-surface outline-none focus:border-secondary/50 transition-colors placeholder:text-on-surface-variant/40"
                />
              </div>
              <div>
                <label className="block text-[10px] font-label uppercase tracking-widest text-on-surface-variant font-bold mb-2">Model Architecture</label>
                <select
                  value={modelType}
                  onChange={e => setModelType(e.target.value)}
                  className="w-full px-4 py-3 bg-black/[0.03] border border-black/10 rounded-xl text-sm text-on-surface outline-none focus:border-secondary/50 transition-colors cursor-pointer"
                >
                  {modelTypes.map(m => <option key={m}>{m}</option>)}
                </select>
              </div>
              {/* Summary card */}
              <div className="bg-secondary/5 border border-secondary/15 rounded-xl p-4">
                <p className="text-[9px] font-label uppercase tracking-widest text-secondary font-bold mb-3">Project Summary</p>
                <div className="space-y-2">
                  {[
                    { label: 'Name', value: name || '—' },
                    { label: 'Dataset', value: dataset || 'Custom Dataset' },
                    { label: 'Architecture', value: modelType },
                  ].map(r => (
                    <div key={r.label} className="flex justify-between text-xs">
                      <span className="text-on-surface-variant font-label">{r.label}</span>
                      <span className="text-on-surface font-medium">{r.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-8 pb-8 flex justify-between items-center">
          {step === 1 ? (
            <>
              <button onClick={onClose} className="text-sm text-on-surface-variant hover:text-on-surface transition-colors font-medium">Cancel</button>
              <button
                onClick={() => setStep(2)}
                disabled={!name.trim()}
                className="px-6 py-2.5 bg-secondary text-white rounded-full text-sm font-bold hover:scale-105 transition-all disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-lg shadow-secondary/20 flex items-center gap-2"
              >
                Continue <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </>
          ) : (
            <>
              <button onClick={() => setStep(1)} className="flex items-center gap-1.5 text-sm text-on-surface-variant hover:text-on-surface transition-colors font-medium">
                <span className="material-symbols-outlined text-sm">arrow_back</span> Back
              </button>
              <button
                onClick={handleCreate}
                className="px-6 py-2.5 bg-zinc-900 text-white rounded-full text-sm font-bold hover:scale-105 transition-all shadow-lg shadow-zinc-900/20 flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>rocket_launch</span>
                Create Project
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

const statusFilters = ['All', 'Running', 'Completed', 'Failed'] as const;
type StatusFilter = typeof statusFilters[number];

export default function Projects() {
  const navigate = useNavigate();
  const [projects, setProjects] = useState<Project[]>(defaultProjects);
  const [showModal, setShowModal] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [filterStatus, setFilterStatus] = useState<StatusFilter>('All');
  const filterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (filterRef.current && !filterRef.current.contains(e.target as Node)) {
        setShowFilter(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const handleAdd = (p: Project) => {
    setProjects(prev => [p, ...prev]);
    setTimeout(() => navigate(`/projects/${p.id}`), 150);
  };

  const filteredProjects = filterStatus === 'All'
    ? projects
    : projects.filter(p => p.status === filterStatus);

  return (
    <div className="p-10 pb-12">
      {showModal && <NewProjectModal onClose={() => setShowModal(false)} onAdd={handleAdd} />}

      {/* Header */}
      <div className="mb-10 flex justify-between items-end max-w-7xl mx-auto">
        <div>
          <p className="text-[10px] font-bold font-headline uppercase tracking-widest text-primary mb-2">Active Workspace</p>
          <h2 className="text-4xl font-bold font-headline tracking-tight text-on-surface">Project Overview</h2>
        </div>
        <div className="flex gap-3 relative" ref={filterRef}>
          <button
            onClick={() => setShowFilter(v => !v)}
            className={`px-5 py-2.5 rounded-full backdrop-blur-md border text-xs font-bold font-label uppercase tracking-widest transition-all flex items-center gap-2 ${
              filterStatus !== 'All'
                ? 'bg-primary text-white border-primary shadow-lg shadow-primary/20'
                : 'bg-white/60 border-white/40 text-on-surface hover:bg-white'
            }`}
          >
            <span className="material-symbols-outlined text-sm">filter_list</span>
            Filter{filterStatus !== 'All' ? `: ${filterStatus}` : ''}
          </button>

          {/* Filter dropdown */}
          {showFilter && (
            <div className="absolute top-full right-0 mt-2 w-52 bg-white/90 backdrop-blur-2xl border border-white/60 rounded-2xl shadow-2xl shadow-black/10 z-50 overflow-hidden">
              <div className="px-4 py-3 border-b border-black/5">
                <p className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant font-bold">Filter by Status</p>
              </div>
              <div className="py-2">
                {statusFilters.map(f => (
                  <button
                    key={f}
                    onClick={() => { setFilterStatus(f); setShowFilter(false); }}
                    className={`w-full flex items-center justify-between px-4 py-2.5 text-sm font-medium transition-colors hover:bg-black/[0.03] ${
                      filterStatus === f ? 'text-primary font-bold' : 'text-on-surface'
                    }`}
                  >
                    <span className="flex items-center gap-2.5">
                      <span className={`w-2 h-2 rounded-full ${
                        f === 'Running' ? 'bg-secondary' :
                        f === 'Completed' ? 'bg-green-500' :
                        f === 'Failed' ? 'bg-red-500' : 'bg-zinc-300'
                      }`} />
                      {f}
                    </span>
                    {filterStatus === f && (
                      <span className="material-symbols-outlined text-sm text-primary">check</span>
                    )}
                  </button>
                ))}
              </div>
              {filterStatus !== 'All' && (
                <div className="px-4 py-3 border-t border-black/5">
                  <button
                    onClick={() => { setFilterStatus('All'); setShowFilter(false); }}
                    className="text-xs text-red-500 font-bold hover:text-red-600 transition-colors"
                  >
                    Clear filter
                  </button>
                </div>
              )}
            </div>
          )}
          <button
            onClick={() => setShowModal(true)}
            className="px-5 py-2.5 rounded-full bg-primary text-white text-xs font-bold font-label uppercase tracking-widest hover:shadow-lg hover:shadow-primary/30 hover:scale-105 transition-all flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-sm">add</span>
            New Project
          </button>
        </div>
      </div>

      {/* Active filter chip */}
      {filterStatus !== 'All' && (
        <div className="max-w-7xl mx-auto mb-4 flex items-center gap-2">
          <span className="text-xs text-on-surface-variant font-label">Showing:</span>
          <span className="flex items-center gap-1.5 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold">
            {filterStatus}
            <button onClick={() => setFilterStatus('All')} className="hover:text-primary/60 transition-colors">
              <span className="material-symbols-outlined text-sm">close</span>
            </button>
          </span>
          <span className="text-xs text-on-surface-variant font-label">{filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}</span>
        </div>
      )}

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {/* Initialize card */}
        <div
          onClick={() => setShowModal(true)}
          className="p-6 rounded-xl border-2 border-dashed border-primary/30 flex flex-col items-center justify-center text-center gap-4 hover:bg-white/40 hover:border-primary/60 transition-all cursor-pointer group bg-white/10 backdrop-blur-sm"
        >
          <div className="w-14 h-14 rounded-full bg-white shadow-sm flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
            <span className="material-symbols-outlined text-3xl">add_circle</span>
          </div>
          <div>
            <h4 className="font-bold font-headline text-on-surface">Initialize Project</h4>
            <p className="text-[10px] text-on-surface-variant font-label uppercase tracking-widest">Start a new ML pipeline</p>
          </div>
        </div>

        {filteredProjects.map((project) => (
          <button
            key={project.id}
            type="button"
            onClick={() => navigate(`/projects/${project.id}`)}
            className="glass-card p-6 rounded-xl transition-all duration-300 group relative flex flex-col text-left hover:-translate-y-1"
          >
            <div className="absolute top-0 right-0 p-4">
              <span className="text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity material-symbols-outlined">more_vert</span>
            </div>
            <div className="mb-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 ${project.iconClass}`}>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>{project.icon}</span>
              </div>
              <h3 className="text-lg font-bold font-headline mb-1 text-on-surface">{project.title}</h3>
              <p className="text-[10px] text-on-surface-variant font-label uppercase tracking-widest">Dataset: {project.dataset}</p>
            </div>
            <div className="space-y-4 flex-grow">
              <div className="flex justify-between items-center bg-white/40 p-3 rounded-lg border border-white/40">
                <span className="text-[10px] uppercase font-bold tracking-widest text-on-surface-variant font-label">Model Type</span>
                <span className="text-xs font-bold text-on-surface">{project.modelType}</span>
              </div>
              <div className="pt-2 border-t border-black/5 mt-auto">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-[10px] text-on-surface-variant uppercase tracking-widest font-label">Accuracy</span>
                  <span className={`font-headline font-bold ${project.id === 'ecosense-predict' ? 'text-error' : project.id === 'quantumnlp-core' ? 'text-secondary' : 'text-primary'}`}>{project.accuracy}</span>
                </div>
                <div className="w-full h-1.5 bg-black/5 rounded-full overflow-hidden mb-3">
                  <div
                    className={`${project.id === 'ecosense-predict' ? 'bg-error' : project.id === 'quantumnlp-core' ? 'bg-secondary' : 'bg-primary'} h-full`}
                    style={{ width: project.progress }}
                  />
                </div>
                <span className={`inline-flex px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest border ${project.statusClass}`}>
                  {project.status}
                </span>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
