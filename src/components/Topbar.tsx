import { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const notifications = [
  { id: 1, icon: 'check_circle', color: 'text-green-500', bg: 'bg-green-50', title: 'Deployment Successful', desc: 'Nebula v2.4 is live on us-east-4.', time: '2m ago', unread: true },
  { id: 2, icon: 'model_training', color: 'text-secondary', bg: 'bg-secondary/10', title: 'Training Complete', desc: 'Alpha-BERT-v4 reached epoch 50/50.', time: '18m ago', unread: true },
  { id: 3, icon: 'warning', color: 'text-amber-500', bg: 'bg-amber-50', title: 'High Memory Usage', desc: 'synapse-vision-14-node-02 at 68%.', time: '1h ago', unread: false },
  { id: 4, icon: 'analytics', color: 'text-blue-500', bg: 'bg-blue-50', title: 'Evaluation Ready', desc: 'RoBerta-Base-Exp results available.', time: '3h ago', unread: false },
];

export default function Topbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const isProjectWorkspace = location.pathname.startsWith('/projects/');

  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const notifRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);

  const unreadCount = notifications.filter(n => n.unread).length;

  // Close dropdowns on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (notifRef.current && !notifRef.current.contains(e.target as Node)) setShowNotifications(false);
      if (profileRef.current && !profileRef.current.contains(e.target as Node)) setShowProfile(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const searchResults = searchQuery.length > 1 ? [
    { label: 'Nebula v2.4 Ultra', type: 'Model', icon: 'auto_awesome', to: '/models' },
    { label: 'Alpha-BERT-v4', type: 'Project', icon: 'folder_open', to: '/projects' },
    { label: 'Deployments', type: 'Page', icon: 'rocket_launch', to: '/deployments' },
    { label: 'Settings', type: 'Page', icon: 'settings', to: '/settings' },
  ].filter(r => r.label.toLowerCase().includes(searchQuery.toLowerCase())) : [];

  return (
    <header className="fixed top-0 w-full z-50 bg-white/30 backdrop-blur-3xl border-b border-white/40 px-8 py-4 flex justify-between items-center">
      <div className="flex items-center gap-4">
        {isProjectWorkspace && (
          <button onClick={() => navigate('/projects')} className="p-2 hover:bg-black/5 rounded-full transition-colors active:scale-90 flex items-center justify-center">
            <span className="material-symbols-outlined text-zinc-600">arrow_back</span>
          </button>
        )}
        <Link to="/" className="text-2xl font-bold tracking-tighter text-primary font-headline">NeonObservatory</Link>
      </div>

      <div className="flex items-center gap-3">
        {/* Search */}
        <div className="relative hidden md:block">
          <div className="flex items-center gap-2 px-4 py-2 bg-white/70 rounded-full border border-white/40 backdrop-blur-md">
            <span className="material-symbols-outlined text-on-surface-variant text-sm">search</span>
            <input
              className="bg-transparent border-none focus:outline-none text-sm w-48 font-label text-on-surface"
              placeholder="Search parameters..."
              value={searchQuery}
              onChange={e => { setSearchQuery(e.target.value); setShowSearch(e.target.value.length > 1); }}
              onFocus={() => searchQuery.length > 1 && setShowSearch(true)}
              onBlur={() => setTimeout(() => setShowSearch(false), 150)}
            />
            {searchQuery && (
              <button onClick={() => { setSearchQuery(''); setShowSearch(false); }} className="text-zinc-400 hover:text-zinc-600">
                <span className="material-symbols-outlined text-sm">close</span>
              </button>
            )}
          </div>
          {showSearch && searchResults.length > 0 && (
            <div className="absolute top-full mt-2 left-0 w-72 bg-white/90 backdrop-blur-2xl border border-white/60 rounded-2xl shadow-2xl shadow-black/10 overflow-hidden z-50">
              {searchResults.map(r => (
                <Link key={r.label} to={r.to} onClick={() => { setSearchQuery(''); setShowSearch(false); }}
                  className="flex items-center gap-3 px-4 py-3 hover:bg-secondary/5 transition-colors">
                  <span className="material-symbols-outlined text-secondary text-base" style={{ fontVariationSettings: "'FILL' 1" }}>{r.icon}</span>
                  <div>
                    <p className="text-sm font-medium text-on-surface">{r.label}</p>
                    <p className="text-[10px] text-on-surface-variant font-label">{r.type}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Theme toggle */}
        <button className="p-2 hover:bg-black/5 rounded-full transition-all duration-300" title="Toggle theme">
          <span className="material-symbols-outlined text-primary">contrast</span>
        </button>

        {/* Notifications */}
        <div className="relative" ref={notifRef}>
          <button
            onClick={() => { setShowNotifications(v => !v); setShowProfile(false); }}
            className="p-2 hover:bg-black/5 rounded-full transition-all duration-300 relative"
          >
            <span className="material-symbols-outlined text-on-surface-variant">notifications</span>
            {unreadCount > 0 && (
              <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-primary rounded-full shadow-[0_0_8px_rgba(107,70,193,0.4)] border-2 border-white flex items-center justify-center">
              </span>
            )}
          </button>

          {showNotifications && (
            <div className="absolute top-full right-0 mt-2 w-80 bg-white/90 backdrop-blur-2xl border border-white/60 rounded-2xl shadow-2xl shadow-black/10 z-50 overflow-hidden">
              <div className="px-4 py-3 border-b border-black/5 flex justify-between items-center">
                <h4 className="text-sm font-headline font-bold text-on-surface">Notifications</h4>
                <button className="text-[10px] text-secondary font-bold hover:underline">Mark all read</button>
              </div>
              <div className="max-h-80 overflow-y-auto">
                {notifications.map(n => (
                  <div key={n.id} className={`flex gap-3 px-4 py-3 border-b border-black/5 last:border-0 hover:bg-black/[0.015] transition-colors cursor-default ${n.unread ? 'bg-secondary/[0.02]' : ''}`}>
                    <div className={`w-8 h-8 rounded-lg ${n.bg} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                      <span className={`material-symbols-outlined text-sm ${n.color}`} style={{ fontVariationSettings: "'FILL' 1" }}>{n.icon}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5">
                        <p className="text-xs font-bold text-on-surface">{n.title}</p>
                        {n.unread && <span className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />}
                      </div>
                      <p className="text-[11px] text-on-surface-variant mt-0.5 leading-relaxed">{n.desc}</p>
                      <p className="text-[10px] text-on-surface-variant/60 mt-0.5 font-label">{n.time}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="px-4 py-3 text-center border-t border-black/5">
                <button className="text-xs text-secondary font-bold hover:underline">View all notifications</button>
              </div>
            </div>
          )}
        </div>

        {/* Profile avatar */}
        <div className="relative" ref={profileRef}>
          <button
            onClick={() => { setShowProfile(v => !v); setShowNotifications(false); }}
            className="w-10 h-10 rounded-full overflow-hidden border border-primary/20 ring-2 ring-white/50 hover:ring-secondary/40 transition-all"
          >
            <img alt="User profile avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1fDqV2JiUBUYGbhi01GQ_X05__Ux4UJg33zrc0OeAPglLfuYSonzqAxF3h3HJ1Y5wRXFfnhrvrxsRtG27ATzi1NzN2IHF3YIIs8fa__xngio71GrmGCdPjX9ZoiuNYCmLrMVqcPDjtxE9GqGxP10bWkhjXjCxS0alUfzR57Y2SNFTRQ5I2_gUAfElPA4b5zJFIwr3v6Y-Ga6qd3xBuZvKhHdyUDuYy7w96KcQdhHaQDVS6YLpO8HP9EbBl6r8BS-AnTj1-PLDyQK_" />
          </button>

          {showProfile && (
            <div className="absolute top-full right-0 mt-2 w-64 bg-white/90 backdrop-blur-2xl border border-white/60 rounded-2xl shadow-2xl shadow-black/10 z-50 overflow-hidden">
              {/* Profile header */}
              <div className="px-4 py-4 border-b border-black/5 flex items-center gap-3">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1fDqV2JiUBUYGbhi01GQ_X05__Ux4UJg33zrc0OeAPglLfuYSonzqAxF3h3HJ1Y5wRXFfnhrvrxsRtG27ATzi1NzN2IHF3YIIs8fa__xngio71GrmGCdPjX9ZoiuNYCmLrMVqcPDjtxE9GqGxP10bWkhjXjCxS0alUfzR57Y2SNFTRQ5I2_gUAfElPA4b5zJFIwr3v6Y-Ga6qd3xBuZvKhHdyUDuYy7w96KcQdhHaQDVS6YLpO8HP9EbBl6r8BS-AnTj1-PLDyQK_" alt="" className="w-10 h-10 rounded-xl" />
                <div className="min-w-0">
                  <p className="text-sm font-bold text-on-surface truncate">Dr. Adarsh Pandey</p>
                  <p className="text-[10px] text-on-surface-variant truncate font-label">adarsh@neonobservatory.ai</p>
                </div>
              </div>

              <div className="py-2">
                {[
                  { icon: 'person', label: 'View Profile', to: '/settings' },
                  { icon: 'settings', label: 'Settings', to: '/settings' },
                  { icon: 'credit_card', label: 'Billing', to: '/settings' },
                  { icon: 'help', label: 'Help & Docs', to: '#' },
                ].map(item => (
                  <Link
                    key={item.label}
                    to={item.to}
                    onClick={() => setShowProfile(false)}
                    className="flex items-center gap-3 px-4 py-2.5 hover:bg-black/[0.03] transition-colors"
                  >
                    <span className="material-symbols-outlined text-sm text-on-surface-variant">{item.icon}</span>
                    <span className="text-sm text-on-surface font-medium">{item.label}</span>
                  </Link>
                ))}
              </div>

              <div className="py-2 border-t border-black/5">
                <Link
                  to="/login"
                  onClick={() => setShowProfile(false)}
                  className="flex items-center gap-3 px-4 py-2.5 hover:bg-red-50 transition-colors group"
                >
                  <span className="material-symbols-outlined text-sm text-red-400 group-hover:text-red-500">logout</span>
                  <span className="text-sm text-red-500 font-medium">Log Out</span>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}