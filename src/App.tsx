import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import ProjectWorkspace from './pages/ProjectWorkspace';
import Deployments from './pages/Deployments';
import Models from './pages/Models';
import Landing from './pages/Landing';
import Auth from './pages/Auth';
import Settings from './pages/Settings';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public pages (no sidebar) */}
        <Route path="/landing" element={<Landing />} />
        <Route path="/login" element={<Auth />} />

        {/* App shell with sidebar */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:id" element={<ProjectWorkspace />} />
          <Route path="models" element={<Models />} />
          <Route path="deployments" element={<Deployments />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
