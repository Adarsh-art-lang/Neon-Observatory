import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

export default function Layout() {
  const location = useLocation();
  const isProjectWorkspace = location.pathname.startsWith('/projects/');

  return (
    <>
      <Topbar />
      {!isProjectWorkspace && <Sidebar />}
      <div className="fixed top-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[120px] pointer-events-none -z-10"></div>
      <div className="fixed bottom-[-10%] left-[-10%] w-[30%] h-[30%] rounded-full bg-secondary/5 blur-[100px] pointer-events-none -z-10"></div>
      
      <main className={`${isProjectWorkspace ? 'pl-0' : 'pl-64'} pt-24 min-h-screen`}>
        <Outlet />
      </main>
    </>
  );
}
