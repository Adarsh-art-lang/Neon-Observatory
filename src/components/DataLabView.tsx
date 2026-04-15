type DataLabViewProps = {
  projectId: string;
};

export default function DataLabView({ projectId }: DataLabViewProps) {
  return (
    <div className="w-full h-full min-h-[800px]">
      <iframe 
        src="/data_lab_literal.html" 
        className="w-full h-full min-h-[800px] border-none rounded-xl shadow-lg bg-white overflow-hidden" 
        title="Workspace Data Lab (Centered Preprocessing)" 
      />
    </div>
  );
}
