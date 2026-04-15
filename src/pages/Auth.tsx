import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Auth() {
  const [tab, setTab] = useState<'login' | 'signup'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-[#07070f] flex font-body overflow-hidden">

      {/* Left panel */}
      <div className="hidden lg:flex lg:w-[55%] relative flex-col justify-between p-14 overflow-hidden">
        {/* Background gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d0822] via-[#07070f] to-[#0a1a0a]" />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-700/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-[#c8f135]/5 rounded-full blur-[80px]" />

        {/* Logo */}
        <div className="relative flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#b287fe] to-[#6c3fe0] flex items-center justify-center shadow-lg shadow-purple-900/40">
            <span className="material-symbols-outlined text-white text-base" style={{ fontVariationSettings: "'FILL' 1" }}>satellite_alt</span>
          </div>
          <span className="font-headline font-bold text-white text-lg tracking-tight">Neon Observatory</span>
        </div>

        {/* Hero text */}
        <div className="relative">
          <h1 className="text-5xl font-headline font-bold text-white leading-[1.1] tracking-tight mb-6">
            Build, Train, and<br />
            Deploy{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b287fe] to-[#6c3fe0]">AI Models</span>
            <br />Effortlessly.
          </h1>
          <p className="text-zinc-500 text-sm leading-relaxed max-w-sm">
            The Digital Observatory for high-performance intelligence. Access panoramic insights and neural architecture tools in one ethereal workspace.
          </p>
        </div>

        {/* Bottom social proof */}
        <div className="relative flex items-center gap-4">
          <div className="flex -space-x-2">
            {['#b287fe','#6c3fe0','#c8f135','#00d4ec','#f97316'].map((c, i) => (
              <div key={i} className="w-9 h-9 rounded-full border-2 border-[#07070f] flex items-center justify-center text-[10px] font-bold text-white" style={{ background: c }}>
                {String.fromCharCode(65 + i)}
              </div>
            ))}
          </div>
          <p className="text-zinc-500 text-xs">Join <span className="text-white font-semibold">2,400+</span> researchers today</p>
        </div>
      </div>

      {/* Right panel – Auth form */}
      <div className="flex-1 flex items-center justify-center px-8 py-12 relative">
        <div className="absolute inset-0 bg-white/[0.02]" />
        <div className="absolute inset-y-0 left-0 w-px bg-white/5" />

        <div className="relative w-full max-w-sm">
          {/* Mobile logo */}
          <div className="flex lg:hidden items-center gap-2 mb-8">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#b287fe] to-[#6c3fe0] flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>satellite_alt</span>
            </div>
            <span className="font-headline font-bold text-white text-base">Neon Observatory</span>
          </div>

          {/* Tab switcher */}
          <div className="flex bg-white/5 border border-white/8 rounded-full p-1 mb-8">
            {(['login', 'signup'] as const).map(t => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`flex-1 py-2 text-xs font-bold rounded-full transition-all capitalize ${
                  tab === t
                    ? 'bg-white text-zinc-900 shadow-sm'
                    : 'text-zinc-500 hover:text-zinc-300'
                }`}
              >
                {t === 'login' ? 'Login' : 'Sign Up'}
              </button>
            ))}
          </div>

          {/* Heading */}
          <div className="mb-7">
            <h2 className="text-xl font-headline font-bold text-white mb-1">
              {tab === 'login' ? 'Welcome back' : 'Create account'}
            </h2>
            <p className="text-zinc-500 text-xs">
              {tab === 'login'
                ? 'Enter your credentials to enter the observatory.'
                : 'Start your free 14-day trial. No credit card required.'}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {tab === 'signup' && (
              <div>
                <label className="block text-[10px] font-label uppercase tracking-widest text-zinc-500 font-bold mb-2">Full Name</label>
                <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus-within:border-[#b287fe]/60 transition-colors">
                  <span className="material-symbols-outlined text-zinc-600 text-sm">person</span>
                  <input
                    type="text"
                    placeholder="Dr. Jane Doe"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    className="flex-1 bg-transparent text-sm text-white placeholder:text-zinc-600 outline-none"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-[10px] font-label uppercase tracking-widest text-zinc-500 font-bold mb-2">Email Address</label>
              <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus-within:border-[#b287fe]/60 transition-colors">
                <span className="material-symbols-outlined text-zinc-600 text-sm">alternate_email</span>
                <input
                  type="email"
                  placeholder="name@company.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="flex-1 bg-transparent text-sm text-white placeholder:text-zinc-600 outline-none"
                  required
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-[10px] font-label uppercase tracking-widest text-zinc-500 font-bold">Password</label>
                {tab === 'login' && (
                  <button type="button" className="text-[10px] text-[#b287fe] hover:text-[#c8a8ff] transition-colors">Forgot password?</button>
                )}
              </div>
              <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus-within:border-[#b287fe]/60 transition-colors">
                <span className="material-symbols-outlined text-zinc-600 text-sm">lock</span>
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  className="flex-1 bg-transparent text-sm text-white placeholder:text-zinc-600 outline-none"
                  required
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="text-zinc-600 hover:text-zinc-400 transition-colors">
                  <span className="material-symbols-outlined text-sm">{showPassword ? 'visibility_off' : 'visibility'}</span>
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-[#c8f135] text-zinc-900 rounded-xl font-headline font-bold text-sm hover:scale-[1.02] transition-transform shadow-lg shadow-[#c8f135]/20 flex items-center justify-center gap-2 mt-2"
            >
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                {tab === 'login' ? 'login' : 'person_add'}
              </span>
              {tab === 'login' ? 'Login to Dashboard' : 'Create Account'}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-5">
            <div className="flex-1 h-px bg-white/8" />
            <span className="text-[10px] text-zinc-600 font-label">or</span>
            <div className="flex-1 h-px bg-white/8" />
          </div>

          {/* Google SSO */}
          <button className="w-full flex items-center justify-center gap-3 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-zinc-300 font-medium hover:bg-white/8 transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
            Continue with Google
          </button>

          <p className="text-center text-[10px] text-zinc-600 mt-6 leading-relaxed">
            By continuing, you agree to our{' '}
            <a href="#" className="text-zinc-400 hover:text-white underline underline-offset-2">Terms of Service</a>
            {' '}and{' '}
            <a href="#" className="text-zinc-400 hover:text-white underline underline-offset-2">Privacy Policy</a>.
          </p>

          <div className="mt-8 text-center">
            <Link to="/" className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors flex items-center justify-center gap-1">
              <span className="material-symbols-outlined text-sm">arrow_back</span>
              Back to app
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
