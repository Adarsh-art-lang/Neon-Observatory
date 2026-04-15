import { useState } from 'react';

const sections = ['Profile', 'Appearance', 'Notifications', 'API Keys', 'Billing'];

export default function Settings() {
  const [active, setActive] = useState('Profile');
  const [name, setName] = useState('Dr. Adarsh Pandey');
  const [email, setEmail] = useState('adarsh@neonobservatory.ai');
  const [bio, setBio] = useState('ML researcher focused on astronomical data analysis and distributed training.');
  const [notifications, setNotifications] = useState({
    deployments: true, training: true, evaluation: false, billing: true, weekly: false,
  });

  return (
    <div className="p-10 pb-16">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <p className="text-xs font-label uppercase tracking-[0.2em] text-secondary font-bold mb-1">Account</p>
          <h2 className="text-4xl font-headline font-bold text-on-surface tracking-tight">Settings</h2>
          <p className="text-on-surface-variant font-body text-sm mt-1">Manage your account, preferences, and API access.</p>
        </div>

        <div className="grid grid-cols-12 gap-8">
          {/* Sidebar nav */}
          <div className="col-span-12 md:col-span-3">
            <nav className="flex flex-col gap-1">
              {sections.map(s => (
                <button
                  key={s}
                  onClick={() => setActive(s)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-left transition-all ${
                    active === s
                      ? 'bg-secondary/10 text-secondary font-bold'
                      : 'text-on-surface-variant hover:bg-black/5 hover:text-on-surface'
                  }`}
                >
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: active === s ? "'FILL' 1" : "'FILL' 0" }}>
                    {s === 'Profile' ? 'person' : s === 'Appearance' ? 'palette' : s === 'Notifications' ? 'notifications' : s === 'API Keys' ? 'key' : 'credit_card'}
                  </span>
                  {s}
                </button>
              ))}
            </nav>
          </div>

          {/* Content */}
          <div className="col-span-12 md:col-span-9 space-y-6">

            {active === 'Profile' && (
              <>
                <div className="glass-card rounded-2xl p-8">
                  <h3 className="text-sm font-headline font-bold text-on-surface mb-6">Personal Information</h3>
                  {/* Avatar */}
                  <div className="flex items-center gap-5 mb-8 pb-8 border-b border-black/5">
                    <div className="relative">
                      <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-secondary/20 ring-4 ring-secondary/10">
                        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1fDqV2JiUBUYGbhi01GQ_X05__Ux4UJg33zrc0OeAPglLfuYSonzqAxF3h3HJ1Y5wRXFfnhrvrxsRtG27ATzi1NzN2IHF3YIIs8fa__xngio71GrmGCdPjX9ZoiuNYCmLrMVqcPDjtxE9GqGxP10bWkhjXjCxS0alUfzR57Y2SNFTRQ5I2_gUAfElPA4b5zJFIwr3v6Y-Ga6qd3xBuZvKhHdyUDuYy7w96KcQdhHaQDVS6YLpO8HP9EbBl6r8BS-AnTj1-PLDyQK_" alt="Profile" className="w-full h-full object-cover" />
                      </div>
                      <button className="absolute -bottom-2 -right-2 w-7 h-7 bg-secondary rounded-full flex items-center justify-center shadow-lg">
                        <span className="material-symbols-outlined text-white text-xs">edit</span>
                      </button>
                    </div>
                    <div>
                      <p className="font-headline font-bold text-on-surface">{name}</p>
                      <p className="text-sm text-on-surface-variant">{email}</p>
                      <button className="mt-2 text-xs text-secondary font-bold hover:underline">Change photo</button>
                    </div>
                  </div>
                  {/* Fields */}
                  <div className="grid grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[10px] font-label uppercase tracking-widest text-on-surface-variant font-bold mb-2">Full Name</label>
                      <input value={name} onChange={e => setName(e.target.value)} className="w-full px-4 py-2.5 bg-black/[0.03] border border-black/10 rounded-xl text-sm text-on-surface outline-none focus:border-secondary/50 transition-colors" />
                    </div>
                    <div>
                      <label className="block text-[10px] font-label uppercase tracking-widest text-on-surface-variant font-bold mb-2">Email</label>
                      <input value={email} onChange={e => setEmail(e.target.value)} className="w-full px-4 py-2.5 bg-black/[0.03] border border-black/10 rounded-xl text-sm text-on-surface outline-none focus:border-secondary/50 transition-colors" />
                    </div>
                    <div className="col-span-2">
                      <label className="block text-[10px] font-label uppercase tracking-widest text-on-surface-variant font-bold mb-2">Bio</label>
                      <textarea value={bio} onChange={e => setBio(e.target.value)} rows={3} className="w-full px-4 py-2.5 bg-black/[0.03] border border-black/10 rounded-xl text-sm text-on-surface outline-none focus:border-secondary/50 transition-colors resize-none" />
                    </div>
                    <div>
                      <label className="block text-[10px] font-label uppercase tracking-widest text-on-surface-variant font-bold mb-2">Role</label>
                      <select className="w-full px-4 py-2.5 bg-black/[0.03] border border-black/10 rounded-xl text-sm text-on-surface outline-none focus:border-secondary/50 cursor-pointer">
                        <option>ML Research Scientist</option>
                        <option>ML Engineer</option>
                        <option>Data Scientist</option>
                        <option>Platform Engineer</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[10px] font-label uppercase tracking-widest text-on-surface-variant font-bold mb-2">Organisation</label>
                      <input defaultValue="NeonObservatory Labs" className="w-full px-4 py-2.5 bg-black/[0.03] border border-black/10 rounded-xl text-sm text-on-surface outline-none focus:border-secondary/50 transition-colors" />
                    </div>
                  </div>
                  <div className="flex justify-end mt-6">
                    <button className="px-6 py-2.5 bg-secondary text-white rounded-full text-sm font-bold hover:scale-105 transition-transform shadow-lg shadow-secondary/20">Save Changes</button>
                  </div>
                </div>

                <div className="glass-card rounded-2xl p-8 border border-red-200/40">
                  <h3 className="text-sm font-headline font-bold text-red-600 mb-2">Danger Zone</h3>
                  <p className="text-xs text-on-surface-variant mb-4">Permanently delete your account and all associated data.</p>
                  <button className="px-5 py-2.5 bg-red-50 border border-red-200 text-red-600 rounded-full text-sm font-bold hover:bg-red-100 transition-colors">Delete Account</button>
                </div>
              </>
            )}

            {active === 'Appearance' && (
              <div className="glass-card rounded-2xl p-8">
                <h3 className="text-sm font-headline font-bold text-on-surface mb-6">Appearance</h3>
                <div className="mb-6">
                  <p className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant font-bold mb-4">Theme</p>
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { label: 'Light', icon: 'light_mode', active: true },
                      { label: 'Dark', icon: 'dark_mode', active: false },
                      { label: 'System', icon: 'desktop_windows', active: false },
                    ].map(t => (
                      <button key={t.label} className={`p-5 rounded-xl border-2 flex flex-col items-center gap-2 transition-all ${t.active ? 'border-secondary bg-secondary/5' : 'border-black/10 hover:border-secondary/30'}`}>
                        <span className={`material-symbols-outlined ${t.active ? 'text-secondary' : 'text-on-surface-variant'}`} style={{ fontVariationSettings: "'FILL' 1" }}>{t.icon}</span>
                        <span className={`text-xs font-bold ${t.active ? 'text-secondary' : 'text-on-surface-variant'}`}>{t.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
                <div className="mb-6 pb-6 border-b border-black/5">
                  <p className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant font-bold mb-4">Accent Color</p>
                  <div className="flex gap-3">
                    {['#b287fe','#6c3fe0','#00d4ec','#f97316','#22c55e','#ef4444'].map(c => (
                      <button key={c} className="w-8 h-8 rounded-full border-2 border-white shadow-md hover:scale-110 transition-transform" style={{ background: c }} />
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant font-bold mb-4">Font Size</p>
                  <input type="range" min="12" max="18" defaultValue="14" className="w-full accent-secondary" />
                  <div className="flex justify-between text-[10px] text-on-surface-variant mt-1">
                    <span>Small</span><span>Large</span>
                  </div>
                </div>
              </div>
            )}

            {active === 'Notifications' && (
              <div className="glass-card rounded-2xl p-8">
                <h3 className="text-sm font-headline font-bold text-on-surface mb-6">Notification Preferences</h3>
                <div className="space-y-0">
                  {[
                    { key: 'deployments', label: 'Deployment Events', desc: 'Success, failure and scaling events.' },
                    { key: 'training', label: 'Training Updates', desc: 'Epoch completions, ETA estimates and errors.' },
                    { key: 'evaluation', label: 'Evaluation Results', desc: 'Model benchmarks and comparison reports.' },
                    { key: 'billing', label: 'Billing Alerts', desc: 'Usage thresholds and invoice notifications.' },
                    { key: 'weekly', label: 'Weekly Digest', desc: 'Summary of platform activity and insights.' },
                  ].map((item, i, arr) => (
                    <div key={item.key} className={`flex items-center justify-between py-5 ${i < arr.length - 1 ? 'border-b border-black/5' : ''}`}>
                      <div>
                        <p className="text-sm font-medium text-on-surface">{item.label}</p>
                        <p className="text-xs text-on-surface-variant mt-0.5">{item.desc}</p>
                      </div>
                      <button
                        onClick={() => setNotifications(n => ({ ...n, [item.key]: !n[item.key as keyof typeof n] }))}
                        className={`relative w-11 h-6 rounded-full transition-all duration-300 ${notifications[item.key as keyof typeof notifications] ? 'bg-secondary' : 'bg-black/10'}`}
                      >
                        <div className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow-sm transition-all duration-300 ${notifications[item.key as keyof typeof notifications] ? 'left-6' : 'left-1'}`} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {active === 'API Keys' && (
              <div className="glass-card rounded-2xl p-8">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-sm font-headline font-bold text-on-surface">API Keys</h3>
                  <button className="px-4 py-2 bg-zinc-900 text-white rounded-full text-xs font-bold flex items-center gap-1.5 hover:scale-105 transition-transform">
                    <span className="material-symbols-outlined text-sm">add</span>Generate Key
                  </button>
                </div>
                <div className="space-y-3">
                  {[
                    { name: 'Production Key', key: 'sk_live_••••••••••••••••4f2a', created: 'Jan 12, 2026', lastUsed: '2m ago', status: 'active' },
                    { name: 'Dev / Staging', key: 'sk_test_••••••••••••••••9b3c', created: 'Mar 2, 2026', lastUsed: '1h ago', status: 'active' },
                    { name: 'CI Pipeline', key: 'sk_live_••••••••••••••••7d1f', created: 'Apr 1, 2026', lastUsed: '3d ago', status: 'revoked' },
                  ].map(k => (
                    <div key={k.name} className="flex items-center gap-4 p-4 bg-black/[0.02] border border-black/8 rounded-xl">
                      <div className="w-9 h-9 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                        <span className="material-symbols-outlined text-secondary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>key</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <p className="text-sm font-medium text-on-surface">{k.name}</p>
                          <span className={`px-2 py-0.5 text-[9px] font-bold rounded-full ${k.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-600'}`}>{k.status.toUpperCase()}</span>
                        </div>
                        <p className="text-xs font-mono text-on-surface-variant mt-0.5">{k.key}</p>
                        <p className="text-[10px] text-on-surface-variant mt-0.5">Created {k.created} · Last used {k.lastUsed}</p>
                      </div>
                      <div className="flex gap-1 flex-shrink-0">
                        <button className="w-7 h-7 rounded-lg hover:bg-black/5 flex items-center justify-center transition-colors">
                          <span className="material-symbols-outlined text-sm text-on-surface-variant">content_copy</span>
                        </button>
                        <button className="w-7 h-7 rounded-lg hover:bg-red-50 flex items-center justify-center transition-colors">
                          <span className="material-symbols-outlined text-sm text-red-400">delete</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {active === 'Billing' && (
              <div className="space-y-5">
                <div className="glass-card rounded-2xl p-8 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent pointer-events-none" />
                  <div className="relative flex justify-between items-start">
                    <div>
                      <span className="px-2.5 py-1 bg-secondary/10 text-secondary text-[10px] font-bold rounded-full font-label">FREE TIER</span>
                      <h3 className="text-2xl font-headline font-bold text-on-surface mt-3 mb-1">$0 / month</h3>
                      <p className="text-xs text-on-surface-variant">Renews monthly · Next billing: N/A</p>
                    </div>
                    <button className="px-5 py-2.5 bg-gradient-to-r from-secondary to-primary text-white rounded-full text-sm font-bold hover:scale-105 transition-transform shadow-lg shadow-secondary/25">Upgrade to Pro</button>
                  </div>
                  <div className="mt-6 grid grid-cols-3 gap-4">
                    {[
                      { label: 'Model Runs', used: '1,240', limit: '2,000' },
                      { label: 'Storage', used: '4.2 GB', limit: '10 GB' },
                      { label: 'API Calls', used: '84K', limit: '100K' },
                    ].map(u => (
                      <div key={u.label} className="bg-black/[0.03] rounded-xl p-4">
                        <p className="text-[9px] font-label uppercase tracking-widest text-on-surface-variant font-bold mb-2">{u.label}</p>
                        <p className="text-base font-headline font-bold text-on-surface">{u.used}</p>
                        <p className="text-[10px] text-on-surface-variant">of {u.limit}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="glass-card rounded-2xl p-8">
                  <h3 className="text-sm font-headline font-bold text-on-surface mb-4">Invoice History</h3>
                  <div className="text-center py-8 text-on-surface-variant">
                    <span className="material-symbols-outlined text-4xl mb-2 block">receipt_long</span>
                    <p className="text-sm">No invoices yet — you're on the free tier.</p>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}
