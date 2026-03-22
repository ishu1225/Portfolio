import { motion } from 'framer-motion';
import SectionWrapper, { SectionTitle } from '../components/SectionWrapper';
import { FiCode, FiMic, FiExternalLink } from 'react-icons/fi';
import { useState } from 'react';

const HeatmapSquares = () => {
  const monthsData = [
    { label: 'Oct', days: 31 },
    { label: 'Nov', days: 30 },
    { label: 'Dec', days: 31 },
    { label: 'Jan', days: 31 },
    { label: 'Feb', days: 28 },
    { label: 'Mar', days: 23 }
  ];

  return (
    <div className="flex gap-3 sm:gap-5 w-full pb-2 relative overflow-x-auto h-full min-h-[140px] justify-center md:justify-start">
      {monthsData.map((month, mIdx) => (
        <div key={month.label} className="flex flex-col h-full w-max">
          <div className="grid grid-flow-col grid-rows-7 gap-[4px] w-max">
            {Array.from({ length: month.days }).map((_, i) => {
              const rowIndex = i % 7;
              const isWeekend = rowIndex === 5 || rowIndex === 6;
              const isRecent = mIdx >= 3;
              
              const baseOpacity = isWeekend ? (Math.random() * 0.3) : Math.random() > 0.4 ? (Math.random() * 0.9 + 0.1) : 0;
              
              let fillClass = 'bg-[#2a2a2a]'; 
              if (baseOpacity > 0.8 && isRecent) fillClass = 'bg-[#39d353] shadow-[0_0_6px_rgba(57,211,83,0.3)]';
              else if (baseOpacity > 0.6) fillClass = 'bg-[#26a641]';
              else if (baseOpacity > 0.3) fillClass = 'bg-[#006d32]';
              else if (baseOpacity > 0.1) fillClass = 'bg-[#0e4429]';

              return (
                <div 
                  key={i} 
                  className={`w-[14px] h-[14px] rounded-[3px] ${fillClass} hover:ring-2 hover:scale-125 ring-white/50 transition-all cursor-crosshair`}
                  title={`${month.label} ${i + 1} - Submissions: ${Math.round(baseOpacity * 10)}`}
                />
              );
            })}
          </div>
          <span className="text-sm text-[var(--color-text-muted)] mt-2 font-medium text-center w-full block">
            {month.label}
          </span>
        </div>
      ))}
    </div>
  );
};

const PremiumDonutChart = () => {
  const radius = 70;
  const circumference = 2 * Math.PI * radius; // 439.82
  const gap = 8; // Visible gap between segments
  
  // Values: Total=274
  const vals = { easy: 96, med: 137, hard: 41 };
  const total = 274;

  const getDash = (val) => Math.max(0, (val / total) * circumference - gap);
  
  const easyDash = getDash(vals.easy);
  const medDash = getDash(vals.med);
  const hardDash = getDash(vals.hard);

  // Calculate offsets based on previous segment lengths + gaps
  const easyOffset = 0;
  const medOffset = -((vals.easy / total) * circumference);
  const hardOffset = -(((vals.easy + vals.med) / total) * circumference);

  return (
    <div className="relative w-56 h-56 flex items-center justify-center">
      <svg className="w-full h-full -rotate-90 drop-shadow-xl" viewBox="0 0 160 160">
        {/* Dark Background track exactly matching reference */}
        <circle cx="80" cy="80" r={radius} fill="none" stroke="#2a2a2a" strokeWidth="12" />
        
        {/* Easy Segment (Green) */}
        <circle 
          cx="80" cy="80" r={radius} fill="none" stroke="#22c55e" strokeWidth="12" 
          strokeDasharray={`${easyDash} ${circumference}`} 
          strokeDashoffset={easyOffset} 
          strokeLinecap="round"
          className="hover:stroke-[16px] transition-all duration-300 drop-shadow-[0_0_8px_rgba(34,197,94,0.6)] cursor-pointer"
        />

        {/* Medium Segment (Yellow) */}
        <circle 
          cx="80" cy="80" r={radius} fill="none" stroke="#eab308" strokeWidth="12" 
          strokeDasharray={`${medDash} ${circumference}`} 
          strokeDashoffset={medOffset} 
          strokeLinecap="round"
          className="hover:stroke-[16px] transition-all duration-300 drop-shadow-[0_0_8px_rgba(234,179,8,0.6)] cursor-pointer"
        />

        {/* Hard Segment (Red) */}
        <circle 
          cx="80" cy="80" r={radius} fill="none" stroke="#ef4444" strokeWidth="12" 
          strokeDasharray={`${hardDash} ${circumference}`} 
          strokeDashoffset={hardOffset} 
          strokeLinecap="round"
          className="hover:stroke-[16px] transition-all duration-300 drop-shadow-[0_0_8px_rgba(239,68,68,0.6)] cursor-pointer"
        />
      </svg>
      <div className="absolute flex flex-col items-center justify-center text-center">
        <span className="text-4xl font-bold bg-clip-text text-white drop-shadow-lg">274</span>
        <span className="text-[10px] text-[var(--color-text-muted)] font-semibold tracking-widest uppercase mt-1">Solved</span>
      </div>
    </div>
  );
};

export default function Achievements() {
  const [hoveredStat, setHoveredStat] = useState(null);

  return (
    <SectionWrapper id="achievements">
      <SectionTitle
        title="Achievements"
        subtitle="Highlights and Milestones"
      />

      <div className="flex flex-col gap-8">
        {/* Custom Codolio-style Stats Component */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: false, amount: 0.1 }}
           transition={{ duration: 0.5 }}
           className="glass p-6 md:p-8 rounded-3xl group hover:border-[var(--color-accent)]/50 transition-all w-full"
        >
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-[var(--color-dark-border)]">
            <div className="flex items-center gap-4">
               <div className="p-3 rounded-xl bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                 <FiCode size={28} />
               </div>
               <div>
                 <h3 className="text-xl md:text-2xl font-bold font-[family-name:var(--font-heading)] text-[var(--color-text-primary)] group-hover:text-[var(--color-accent-light)] transition-colors">
                   250+ Problems Solved
                 </h3>
                 <p className="text-sm text-[var(--color-text-secondary)] mt-1">Interactive Codolio Profile Snapshot</p>
               </div>
            </div>
          </div>

          <div className="grid md:grid-cols-12 gap-6">
            {/* Top Stat Cards */}
            <div className="md:col-span-4 flex flex-col gap-4">
              <div 
                className={`bg-[var(--color-dark)] rounded-2xl p-6 border border-white/5 flex flex-col items-center justify-center transition-transform ${hoveredStat === 'total' ? 'scale-105 shadow-lg shadow-[var(--color-accent)]/10' : ''}`}
                onMouseEnter={() => setHoveredStat('total')}
                onMouseLeave={() => setHoveredStat(null)}
              >
                <div className="text-sm text-[var(--color-text-secondary)] mb-2 font-medium">Total Questions</div>
                <div className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-white to-[var(--color-accent)]">
                  274
                </div>
              </div>
              <div 
                className={`bg-[var(--color-dark)] rounded-2xl p-6 border border-white/5 flex flex-col items-center justify-center transition-transform ${hoveredStat === 'active' ? 'scale-105 shadow-lg shadow-[var(--color-accent)]/10' : ''}`}
                onMouseEnter={() => setHoveredStat('active')}
                onMouseLeave={() => setHoveredStat(null)}
              >
                <div className="text-sm text-[var(--color-text-secondary)] mb-2 font-medium">Total Active Days</div>
                <div className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-white to-green-400">
                  115
                </div>
              </div>
            </div>

            {/* Heatmap Area */}
            <div className="md:col-span-8 bg-[var(--color-dark)] rounded-3xl p-7 border border-white/5 shadow-xl">
              <div className="flex justify-between items-end mb-6">
                <div className="text-sm text-[var(--color-text-secondary)] font-medium">Activity Heatmap</div>
                <div className="flex gap-6 text-xs font-semibold bg-[var(--color-dark-bg)] px-4 py-2 rounded-xl border border-white/5">
                   <div className="flex flex-col items-center gap-1">
                     <span className="text-[var(--color-text-muted)] tracking-wider">MAX STREAK</span>
                     <span className="text-green-400 text-lg font-bold">22<span className="text-[10px] ml-1">Days</span></span>
                   </div>
                   <div className="w-px h-8 bg-white/10" />
                   <div className="flex flex-col items-center gap-1">
                     <span className="text-[var(--color-text-muted)] tracking-wider">CURRENT</span>
                     <span className="text-green-400 text-lg font-bold">5<span className="text-[10px] ml-1">Days</span></span>
                   </div>
                </div>
              </div>
              <div className="min-w-[500px] overflow-x-auto pb-2">
                <HeatmapSquares />
              </div>
            </div>

            {/* Donut Chart and Problems List */}
            <div className="md:col-span-12 bg-[var(--color-dark)] rounded-3xl p-8 border border-white/5 mt-4 shadow-xl">
               <h4 className="text-center text-lg font-bold mb-10 text-[var(--color-text-primary)] tracking-wide">Problems Solved Breakdown</h4>
               <div className="flex flex-col md:flex-row items-center justify-center gap-16 max-w-3xl mx-auto">
                  
                  {/* Premium SVG Donut Chart */}
                  <PremiumDonutChart />

                  {/* Level Stats exactly matching reference */}
                  <div className="flex flex-col gap-4 w-full md:w-auto min-w-[240px]">
                     <div className="group flex justify-between items-center p-4 rounded-2xl bg-[#111815] border border-green-500/20 hover:border-green-500/40 hover:bg-[#16221d] transition-all cursor-pointer">
                       <div className="flex items-center gap-3">
                         <div className="w-3.5 h-3.5 rounded-full bg-[#22c55e] shadow-[0_0_8px_rgba(34,197,94,0.6)] group-hover:scale-125 transition-transform" />
                         <span className="text-green-500 font-semibold tracking-wide">Easy</span>
                       </div>
                       <span className="text-2xl font-bold text-white">96</span>
                     </div>
                     <div className="group flex justify-between items-center p-4 rounded-2xl bg-[#181611] border border-yellow-500/20 hover:border-yellow-500/40 hover:bg-[#221f16] transition-all cursor-pointer">
                       <div className="flex items-center gap-3">
                         <div className="w-3.5 h-3.5 rounded-full bg-[#eab308] shadow-[0_0_8px_rgba(234,179,8,0.6)] group-hover:scale-125 transition-transform" />
                         <span className="text-yellow-500 font-semibold tracking-wide">Medium</span>
                       </div>
                       <span className="text-2xl font-bold text-white">137</span>
                     </div>
                     <div className="group flex justify-between items-center p-4 rounded-2xl bg-[#181113] border border-red-500/20 hover:border-red-500/40 hover:bg-[#221618] transition-all cursor-pointer">
                       <div className="flex items-center gap-3">
                         <div className="w-3.5 h-3.5 rounded-full bg-[#ef4444] shadow-[0_0_8px_rgba(239,68,68,0.6)] group-hover:scale-125 transition-transform" />
                         <span className="text-red-500 font-semibold tracking-wide">Hard</span>
                       </div>
                       <span className="text-2xl font-bold text-white">41</span>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </motion.div>

        {/* Other Achievement */}
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="glass p-8 rounded-3xl flex flex-col group hover:border-[var(--color-accent)]/50 transition-all w-full"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-4 rounded-xl bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                <FiMic size={24} />
              </div>
              <h3 className="text-xl font-semibold font-[family-name:var(--font-heading)] text-[var(--color-text-primary)] group-hover:text-[var(--color-accent-light)] transition-colors">
                Won Group Discussion competition
              </h3>
            </div>
            
            <p className="text-[var(--color-text-secondary)] leading-relaxed mb-6 max-w-3xl">
              Secured 1st place in the university level Group Discussion competition, showcasing communication and leadership skills.
            </p>

            <div className="mt-auto">
              <a 
                href="https://www.linkedin.com/posts/eshanksingh2003_ideas-articulation-and-confidence-that-share-7410308117722460160-hO2a?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADX62EIBQA7B3yfS_l1EeGQSWcBVWF9tmZE"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-accent-light)] bg-[var(--color-accent)]/10 px-5 py-2.5 rounded-lg hover:bg-[var(--color-accent)]/20 transition-colors border border-[var(--color-accent)]/20 shadow-lg shadow-[var(--color-accent)]/5 hover:shadow-[var(--color-accent)]/20"
              >
                View LinkedIn Post <FiExternalLink size={16} />
              </a>
            </div>
        </motion.div>

      </div>
    </SectionWrapper>
  );
}
