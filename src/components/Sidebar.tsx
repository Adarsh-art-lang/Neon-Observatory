import { NavLink, Link } from 'react-router-dom';

export default function Sidebar() {
  const baseClasses = "flex items-center gap-4 py-3 px-6 transition-transform duration-300 hover:translate-x-1 rounded-full";
  const inactiveClasses = "text-on-surface-variant hover:text-primary";
  const activeClasses = "sidebar-item-active";

  return (
    <aside className="fixed left-0 top-0 h-full w-64 z-40 bg-white/20 backdrop-blur-[40px] border-r border-white/40 flex flex-col py-10 px-4 pt-24">
      <div className="flex flex-col gap-2 flex-grow">
        <div className="mb-4 px-6">
          <p className="font-headline uppercase text-[10px] tracking-widest text-on-surface-variant/60 mb-2">Systems</p>
        </div>
        <nav className="space-y-1">
          <NavLink to="/" end className={({ isActive }) => `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>grid_view</span>
            <span className="font-headline uppercase text-[10px] tracking-widest font-bold">Dashboard</span>
          </NavLink>
          <NavLink to="/projects" className={({ isActive }) => `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}>
            <span className="material-symbols-outlined">folder_open</span>
            <span className="font-headline uppercase text-[10px] tracking-widest font-bold">Projects</span>
          </NavLink>
          <NavLink to="/models" className={({ isActive }) => `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}>
            <span className="material-symbols-outlined">biotech</span>
            <span className="font-headline uppercase text-[10px] tracking-widest font-bold">Models</span>
          </NavLink>
          <NavLink to="/deployments" className={({ isActive }) => `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}>
            <span className="material-symbols-outlined">rocket_launch</span>
            <span className="font-headline uppercase text-[10px] tracking-widest font-bold">Deployments</span>
          </NavLink>
        </nav>
      </div>

      <div className="mt-auto border-t border-black/5 pt-6 flex flex-col gap-1">
        {/* Upgrade to Pro */}
        <Link
          to="/settings"
          className="flex items-center gap-4 text-white bg-gradient-to-r from-primary to-tertiary rounded-2xl py-3 px-6 mb-4 transition-all duration-300 hover:scale-[1.02] shadow-[0_8px_20px_rgba(107,70,193,0.3)] group"
        >
          <span className="material-symbols-outlined text-white" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
          <div className="flex flex-col">
            <span className="font-headline uppercase text-[10px] tracking-widest font-bold">Upgrade to Pro</span>
            <span className="text-[8px] opacity-80 font-label">Unlock Advanced Models</span>
          </div>
        </Link>

        {/* Settings */}
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `flex items-center gap-4 py-3 px-6 transition-transform duration-300 hover:translate-x-1 rounded-full ${
              isActive ? 'text-primary font-bold' : 'text-on-surface-variant hover:text-primary'
            }`
          }
        >
          <span className="material-symbols-outlined">settings</span>
          <span className="font-headline uppercase text-[10px] tracking-widest font-bold">Settings</span>
        </NavLink>

        {/* Logout */}
        <Link
          to="/login"
          className="flex items-center gap-4 text-on-surface-variant py-3 px-6 hover:text-error transition-all duration-300 hover:translate-x-1 rounded-full group"
        >
          <span className="material-symbols-outlined group-hover:text-error transition-colors">logout</span>
          <span className="font-headline uppercase text-[10px] tracking-widest font-bold">Logout</span>
        </Link>
      </div>
    </aside>
  );
}
