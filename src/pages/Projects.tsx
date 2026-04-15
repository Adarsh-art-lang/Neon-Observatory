import { useNavigate } from 'react-router-dom';

const projects = [
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

export default function Projects() {
  const navigate = useNavigate();

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

        {projects.map((project) => (
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
