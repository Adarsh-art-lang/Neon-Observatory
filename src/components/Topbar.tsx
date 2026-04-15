import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Topbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const isProjectWorkspace = location.pathname.startsWith('/projects/');

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
      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-white/70 rounded-full border border-white/40 backdrop-blur-md">
          <span className="material-symbols-outlined text-on-surface-variant text-sm">search</span>
          <input className="bg-transparent border-none focus:outline-none text-sm w-48 font-label text-on-surface" placeholder="Search parameters..." type="text" />
        </div>
        <button className="p-2 hover:bg-black/5 rounded-full transition-all duration-300" type="button">
          <span className="material-symbols-outlined text-primary">contrast</span>
        </button>
        <button className="p-2 hover:bg-black/5 rounded-full transition-all duration-300 relative" type="button">
          <span className="material-symbols-outlined text-on-surface-variant">notifications</span>
          <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-primary rounded-full shadow-[0_0_8px_rgba(107,70,193,0.4)] border-2 border-white"></span>
        </button>
        <div className="w-10 h-10 rounded-full overflow-hidden border border-primary/20 ring-2 ring-white/50">
          <img alt="User profile avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1fDqV2JiUBUYGbhi01GQ_X05__Ux4UJg33zrc0OeAPglLfuYSonzqAxF3h3HJ1Y5wRXFfnhrvrxsRtG27ATzi1NzN2IHF3YIIs8fa__xngio71GrmGCdPjX9ZoiuNYCmLrMVqcPDjtxE9GqGxP10bWkhjXjCxS0alUfzR57Y2SNFTRQ5I2_gUAfElPA4b5zJFIwr3v6Y-Ga6qd3xBuZvKhHdyUDuYy7w96KcQdhHaQDVS6YLpO8HP9EbBl6r8BS-AnTj1-PLDyQK_" />
        </div>
      </div>
    </header>
  );
}