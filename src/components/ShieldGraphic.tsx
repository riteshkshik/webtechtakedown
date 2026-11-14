"use client";

import React from "react";
import { ShieldCheck, Lock, Activity, Radio, Cpu } from "lucide-react";

export default function ShieldGraphic() {
  return (
    <div className="relative w-full max-w-md mx-auto aspect-square flex items-center justify-center p-4">
      {/* Background radial glow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-600/20 via-teal-500/10 to-transparent blur-3xl animate-pulse pointer-events-none" />

      {/* Orbiting rings */}
      <div className="absolute w-72 h-72 sm:w-80 sm:h-80 rounded-full border border-cyan-500/15 border-dashed animate-[spin_40s_linear_infinite]" />
      <div className="absolute w-60 h-60 sm:w-68 sm:h-68 rounded-full border border-teal-500/25 animate-[spin_25s_linear_infinite_reverse]" />

      {/* Main Glass Shield Container */}
      <div className="relative z-10 w-64 h-72 sm:w-72 sm:h-80 rounded-3xl bg-gradient-to-b from-[#0e1e38]/80 via-[#0a152b]/90 to-[#050b18]/95 border border-cyan-500/30 p-6 flex flex-col items-center justify-between shadow-[0_0_50px_rgba(6,182,212,0.3)] backdrop-blur-xl">
        
        {/* Top status bar */}
        <div className="w-full flex items-center justify-between border-b border-slate-700/60 pb-3">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-[11px] font-mono font-bold tracking-widest text-emerald-400 uppercase">
              Active Defense
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-[10px] font-mono text-cyan-300/80 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/60">
            <Radio className="w-3 h-3 text-cyan-400 animate-pulse" />
            <span>24/7 Scan</span>
          </div>
        </div>

        {/* Central Shield Graphic with Lock Motif */}
        <div className="relative my-auto flex items-center justify-center">
          {/* Animated hex background */}
          <div className="absolute w-32 h-32 rounded-2xl bg-cyan-500/10 rotate-45 border border-cyan-500/20 animate-pulse" />
          
          <div className="relative z-10 w-24 h-28 flex items-center justify-center bg-gradient-to-b from-cyan-400 to-teal-500 rounded-2xl shadow-[0_0_30px_rgba(0,242,254,0.5)] p-0.5">
            <div className="w-full h-full bg-[#071329] rounded-[14px] flex flex-col items-center justify-center p-3 text-cyan-300">
              <Lock className="w-10 h-10 text-cyan-300 mb-1 drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
              <div className="text-[9px] font-mono uppercase tracking-widest text-teal-300 font-bold">
                ENFORCED
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Metrics Pill */}
        <div className="w-full grid grid-cols-2 gap-2 pt-3 border-t border-slate-700/60">
          <div className="bg-[#050e1f] rounded-lg p-2 border border-slate-800 text-center">
            <div className="text-[10px] text-slate-400 font-mono">Infringement Sweep</div>
            <div className="text-xs font-bold text-cyan-300 font-mono flex items-center justify-center gap-1">
              <Activity className="w-3 h-3 text-cyan-400" /> Continuous
            </div>
          </div>
          <div className="bg-[#050e1f] rounded-lg p-2 border border-slate-800 text-center">
            <div className="text-[10px] text-slate-400 font-mono">Notice Protocols</div>
            <div className="text-xs font-bold text-teal-300 font-mono flex items-center justify-center gap-1">
              <Cpu className="w-3 h-3 text-teal-400" /> DMCA Verified
            </div>
          </div>
        </div>

      </div>

      {/* Floating Badges */}
      <div className="absolute -left-2 top-16 bg-[#0c1833]/90 border border-cyan-500/40 rounded-xl px-3 py-2 shadow-xl backdrop-blur-md hidden sm:flex items-center gap-2 text-xs">
        <ShieldCheck className="w-4 h-4 text-emerald-400" />
        <div>
          <p className="font-semibold text-white text-[11px]">Telegram Hubs</p>
          <p className="text-[10px] text-slate-400">Targeted & Escalated</p>
        </div>
      </div>

      <div className="absolute -right-2 bottom-14 bg-[#0c1833]/90 border border-teal-500/40 rounded-xl px-3 py-2 shadow-xl backdrop-blur-md hidden sm:flex items-center gap-2 text-xs">
        <ShieldCheck className="w-4 h-4 text-cyan-400" />
        <div>
          <p className="font-semibold text-white text-[11px]">YouTube Strikes</p>
          <p className="text-[10px] text-slate-400">Official Enforcement</p>
        </div>
      </div>
    </div>
  );
}

