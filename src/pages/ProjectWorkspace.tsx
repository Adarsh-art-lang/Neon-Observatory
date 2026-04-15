import { useParams } from 'react-router-dom';
import ProjectWorkspaceView from '../components/ProjectWorkspaceView';
export default function ProjectWorkspace() {
  const params = useParams();

  return <ProjectWorkspaceView projectId={params.id ?? 'neuralvision-alpha'} />;
}