import { useParams } from 'react-router-dom';
import ProjectWorkspaceView from '../../../src/components/ProjectWorkspaceView';

export default function Page() {
  const params = useParams();

  return <ProjectWorkspaceView projectId={params.id ?? 'neuralvision-alpha'} />;
}