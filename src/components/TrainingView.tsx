type TrainingViewProps = {
  projectId: string;
};

export default function TrainingView({ projectId: _projectId }: TrainingViewProps) {
  return (
    <div className="w-full h-full min-h-[800px]">
      <iframe 
        src="/training_lab_literal.html" 
        className="w-full h-full min-h-[800px] border-none rounded-xl shadow-lg bg-white overflow-hidden" 
        title="Workspace Training Lab" 
      />
    </div>
  );
}
