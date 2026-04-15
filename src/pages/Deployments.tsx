export default function Deployments() {
  return (
    <div className="p-10 pb-12">
      <div className="max-w-7xl mx-auto flex flex-col gap-6">
        {/* Header */}
        <div className="flex justify-between items-start">
          <div>
            <p className="text-xs font-label uppercase tracking-[0.2em] text-secondary font-bold mb-1">Observatory AI</p>
            <h2 className="text-4xl font-headline font-bold text-on-surface tracking-tight mb-1">Deployments</h2>
            <p className="text-on-surface-variant font-body text-sm">Monitor and manage deployed APIs across global clusters.</p>
          </div>
          <div className="flex gap-3 mt-2">
            <button className="px-5 py-2 rounded-full border border-black/10 text-sm font-medium text-on-surface-variant hover:bg-black/5 transition-colors flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">settings</span>System Settings
            </button>
            <button className="px-6 py-2 rounded-full bg-zinc-900 text-white font-bold text-sm hover:scale-105 transition-transform shadow-lg shadow-zinc-900/20 flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">add</span>Deploy New Model
            </button>
          </div>
        </div>

        {/* Stats + API Auth Row */}
        <div className="grid grid-cols-12 gap-6">
          {/* P99 Latency */}
          <div className="col-span-12 md:col-span-6 lg:col-span-3 glass-card rounded-xl p-6 flex flex-col justify-between">
            <p className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant font-bold mb-3">P99 Latency</p>
            <h3 className="text-4xl font-headline font-bold text-on-surface mb-4">124ms</h3>
            <svg viewBox="0 0 120 40" className="w-full" preserveAspectRatio="none" style={{ height: '40px' }}>
              <path d="M0,35 C20,35 25,5 40,20 S60,35 80,10 S100,25 120,15" stroke="#b287fe" strokeWidth="2" fill="none"/>
            </svg>
          </div>
          {/* Daily Requests */}
          <div className="col-span-12 md:col-span-6 lg:col-span-3 glass-card rounded-xl p-6 flex flex-col justify-between">
            <p className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant font-bold mb-3">Daily Requests</p>
            <h3 className="text-4xl font-headline font-bold text-on-surface mb-4">1.2M</h3>
            <svg viewBox="0 0 120 40" className="w-full" preserveAspectRatio="none" style={{ height: '40px' }}>
              <path d="M0,20 C15,20 20,5 35,18 S55,35 75,15 S95,5 120,20" stroke="#00d4ec" strokeWidth="2" fill="none"/>
            </svg>
          </div>
          {/* API Authentication */}
          <div className="col-span-12 lg:col-span-6 glass-card rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined text-secondary text-base" style={{ fontVariationSettings: "'FILL' 1" }}>key</span>
              <h3 className="text-sm font-headline font-bold text-on-surface">API Authentication</h3>
            </div>
            <div className="mb-3">
              <p className="text-[9px] font-label uppercase tracking-widest text-on-surface-variant mb-2">Secret Key</p>
              <div className="flex items-center gap-2 bg-black/5 border border-black/10 rounded-lg px-3 py-2">
                <span className="font-mono text-xs text-on-surface-variant flex-1">sk_live_••••••••••••••••4f2a</span>
                <button className="material-symbols-outlined text-on-surface-variant hover:text-on-surface text-sm">content_copy</button>
              </div>
            </div>
            <div>
              <p className="text-[9px] font-label uppercase tracking-widest text-on-surface-variant mb-2">Sample Request</p>
              <div className="bg-zinc-950 rounded-lg p-3 font-mono text-[10px] text-zinc-300 leading-relaxed">
                <span className="text-zinc-500">{"{"}</span><br/>
                &nbsp;&nbsp;<span className="text-lime-400">"model"</span>: <span className="text-amber-300">"nebula-v2-ultra"</span>,<br/>
                &nbsp;&nbsp;<span className="text-lime-400">"stream"</span>: <span className="text-secondary">false</span><br/>
                <span className="text-zinc-500">{"}"}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Active Endpoints Table */}
        <div className="glass-card rounded-xl overflow-hidden">
          <div className="px-6 py-4 border-b border-black/5 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <h3 className="text-sm font-headline font-bold text-on-surface">Active Endpoints</h3>
              <span className="px-2.5 py-1 bg-secondary/10 text-secondary text-[10px] font-bold rounded-full font-label">4 ACTIVE NODES</span>
            </div>
            <div className="flex items-center gap-2 bg-black/5 border border-black/10 rounded-lg px-3 py-1.5">
              <span className="material-symbols-outlined text-on-surface-variant text-sm">search</span>
              <input className="text-xs bg-transparent outline-none text-on-surface-variant w-32 placeholder:text-on-surface-variant/50" placeholder="Filter endpoints..." />
            </div>
          </div>
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-black/[0.02] text-[10px] font-label uppercase tracking-widest text-on-surface-variant">
                <th className="px-6 py-4 text-left font-semibold">Model Name</th>
                <th className="px-6 py-4 text-left font-semibold">Endpoint URL</th>
                <th className="px-6 py-4 text-left font-semibold">Status</th>
                <th className="px-6 py-4 text-left font-semibold">Requests (24h)</th>
                <th className="px-6 py-4 text-left font-semibold">Avg Latency</th>
                <th className="px-6 py-4 text-left font-semibold">Uptime</th>
                <th className="px-6 py-4"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black/5">
              {[
                { name: 'Nebula v2.4 Ultra', icon: 'rocket_launch', iconBg: 'bg-secondary/10 text-secondary', url: 'api.observatory.ai/v1/nebula...', status: 'ACTIVE', statusColor: 'bg-green-100 text-green-700', reqs: '842,019', latency: '112ms', uptime: '99.98%', uptimeColor: 'text-green-600' },
                { name: 'Synapse Vision L-4', icon: 'visibility', iconBg: 'bg-purple-100 text-purple-600', url: 'api.observatory.ai/v1/synapse...', status: 'PENDING', statusColor: 'bg-amber-100 text-amber-700', reqs: '–', latency: '–', uptime: 'Initializing', uptimeColor: 'text-on-surface-variant' },
                { name: 'Titan NLP Legacy', icon: 'warning', iconBg: 'bg-red-100 text-red-600', url: 'api.observatory.ai/v1/titan-old...', status: 'FAILED', statusColor: 'bg-red-100 text-red-700', reqs: '4,201', latency: '450ms', uptime: '94.12%', uptimeColor: 'text-error' },
              ].map(e => (
                <tr key={e.name} className="hover:bg-black/[0.015] transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${e.iconBg}`}>
                        <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>{e.icon}</span>
                      </div>
                      <span className="font-medium text-on-surface text-sm">{e.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-mono text-[11px] text-on-surface-variant">{e.url}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${e.statusColor}`}>{e.status}</span>
                  </td>
                  <td className="px-6 py-4 text-on-surface-variant font-mono text-xs">{e.reqs}</td>
                  <td className="px-6 py-4 text-on-surface-variant font-mono text-xs">{e.latency}</td>
                  <td className={`px-6 py-4 font-bold text-sm ${e.uptimeColor}`}>{e.uptime}</td>
                  <td className="px-6 py-4">
                    <button className="material-symbols-outlined text-on-surface-variant hover:text-on-surface text-base">more_vert</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Live Streaming Logs */}
        <div className="glass-card rounded-xl overflow-hidden">
          <div className="bg-zinc-900 px-6 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              <span className="text-xs font-label text-zinc-300 font-medium uppercase tracking-widest">Live Streaming Logs</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[10px] text-zinc-500 font-label">DC-NORTH-1 / CLUSTER-B</span>
              <button className="material-symbols-outlined text-zinc-500 hover:text-zinc-300 text-sm transition-colors">open_in_full</button>
            </div>
          </div>
          <div className="bg-zinc-950 px-6 py-4 font-mono text-[11px] space-y-2">
            {[
              { time: '[14:02:11]', level: 'INFO', levelColor: 'text-lime-400', msg: 'Deployment nebula-v2.4 scaled to 4 replicas in us-east-1', msgColor: 'text-lime-300' },
              { time: '[14:02:08]', level: 'WARN', levelColor: 'text-amber-400', msg: 'High memory utilization (68%) detected on synapse-vision-14-node-02', msgColor: 'text-zinc-300' },
              { time: '[14:01:59]', level: 'INFO', levelColor: 'text-lime-400', msg: 'Successfully validated schema for request 0x9f4a... [Auth: API_KEY_ID: 9203]', msgColor: 'text-zinc-300' },
              { time: '[14:01:45]', level: 'DEBUG', levelColor: 'text-blue-400', msg: 'Connection pool resized to accommodate traffic surge', msgColor: 'text-zinc-400' },
            ].map((log, i) => (
              <p key={i} className="flex gap-4">
                <span className="text-zinc-600 shrink-0">{log.time}</span>
                <span className={`font-bold ${log.levelColor}`}>{log.level}</span>
                <span className={log.msgColor}>{log.msg}</span>
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
