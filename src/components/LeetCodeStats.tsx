import { useState, useEffect } from 'react';
import { Trophy, Activity, ExternalLink } from 'lucide-react';

interface LeetCodeData {
  totalSolved: number;
  totalQuestions: number;
  easySolved: number;
  totalEasy: number;
  mediumSolved: number;
  totalMedium: number;
  hardSolved: number;
  totalHard: number;
  ranking: number;
}

const FALLBACK_STATS: LeetCodeData = {
  totalSolved: 201,
  totalQuestions: 4033,
  easySolved: 117,
  totalEasy: 961,
  mediumSolved: 65,
  totalMedium: 2105,
  hardSolved: 19,
  totalHard: 967,
  ranking: 842766,
};

const POLL_INTERVAL_MS = 5 * 60 * 1000; // refresh every 5 minutes

const LeetCodeStats = () => {
  const [data, setData] = useState<LeetCodeData | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchStats = async () => {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 6000);
    let fetchedData: LeetCodeData | null = null;

    // Endpoint 1: alfa-leetcode-api userProfile (has CORS headers)
    try {
      const response = await fetch(
        'https://alfa-leetcode-api.onrender.com/userProfile/GANJI_ANIRUDH',
        { cache: 'no-store', signal: controller.signal }
      );
      if (response.ok) {
        const result = await response.json();
        if (result && (result.totalSolved !== undefined || result.solvedProblem !== undefined)) {
          fetchedData = {
            totalSolved: result.totalSolved ?? result.solvedProblem ?? 201,
            totalQuestions: result.totalQuestions ?? 4033,
            easySolved: result.easySolved ?? 117,
            totalEasy: result.totalEasy ?? 961,
            mediumSolved: result.mediumSolved ?? 65,
            totalMedium: result.totalMedium ?? 2105,
            hardSolved: result.hardSolved ?? 19,
            totalHard: result.totalHard ?? 967,
            ranking: result.ranking ?? 842766,
          };
        }
      }
    } catch (error) {
      console.warn('Primary LeetCode API failed, trying fallback...', error);
    }

    // Endpoint 2: alfa-leetcode-api /solved route
    if (!fetchedData) {
      try {
        const response = await fetch(
          'https://alfa-leetcode-api.onrender.com/GANJI_ANIRUDH/solved',
          { cache: 'no-store', signal: controller.signal }
        );
        if (response.ok) {
          const result = await response.json();
          if (result && (result.solvedProblem !== undefined || result.totalSolved !== undefined)) {
            fetchedData = {
              totalSolved: result.solvedProblem ?? result.totalSolved ?? 201,
              totalQuestions: 4033,
              easySolved: result.easySolved ?? 117,
              totalEasy: 961,
              mediumSolved: result.mediumSolved ?? 65,
              totalMedium: 2105,
              hardSolved: result.hardSolved ?? 19,
              totalHard: 967,
              ranking: 842766,
            };
          }
        }
      } catch (error) {
        console.warn('Secondary LeetCode API failed...', error);
      }
    }

    if (fetchedData) setData(fetchedData);
    clearTimeout(timeoutId);
    setLoading(false);
  };

  useEffect(() => {
    fetchStats();
    const interval = setInterval(fetchStats, POLL_INTERVAL_MS);
    return () => clearInterval(interval);
  }, []);

  const displayData = data || FALLBACK_STATS;

  const StatBar = ({
    label,
    solved,
    total,
    color,
  }: {
    label: string;
    solved: number;
    total: number;
    color: string;
  }) => (
    <div className="space-y-1.5">
      <div className="flex justify-between items-end px-1">
        <span className="text-[10px] uppercase font-black tracking-wider opacity-60">
          {label}
        </span>
        <span className="text-xs font-mono font-bold">
          {solved}
          <span className="text-[10px] opacity-30 mx-1">/</span>
          {total}
        </span>
      </div>
      <div className="h-2 w-full bg-black/5 border border-black/10 overflow-hidden relative">
        <div
          className={`h-full ${color} transition-all duration-1000 ease-out border-r border-black`}
          style={{ width: `${Math.min((solved / total) * 100, 100)}%` }}
        />
      </div>
    </div>
  );

  return (
    <div className="border-4 border-black p-5 bg-white text-black hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 flex flex-col h-full relative overflow-hidden">
      {/* LeetCode orange accent bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FFA116] via-[#f89f1b] to-[#FF6B35]" />
      <div className="flex justify-between items-start mb-6 border-b-2 border-black pb-3 mt-1">
        <div>
          <h3 className="font-mono text-xl font-black uppercase tracking-tighter flex items-center gap-2">
            <span className="inline-block w-3 h-3 rounded-full bg-[#FFA116] shadow-[0_0_8px_#FFA116]"></span>
            LeetCode Stats_
            <span className="text-[9px] font-normal px-1.5 py-0.5 bg-[#FFA116]/10 border border-[#FFA116]/30 text-[#FFA116] rounded-sm">
              Live
            </span>
          </h3>
          <p className="text-[10px] font-mono opacity-50 uppercase tracking-widest mt-1">
            // @GANJI_ANIRUDH
          </p>
        </div>
        <a
          href="https://leetcode.com/u/GANJI_ANIRUDH/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 border-2 border-black hover:bg-black hover:text-white transition-colors"
          aria-label="View LeetCode Profile"
        >
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-1">
        {/* Left Side: Summary */}
        <div className="flex flex-col justify-center items-center p-4 bg-gradient-to-br from-[#FFA116]/10 to-[#FF6B35]/5 border-2 border-[#FFA116]/40 relative overflow-hidden group">
          <Trophy className="w-12 h-12 mb-2 text-[#FFA116]/20 absolute -top-2 -right-2 rotate-12 group-hover:scale-110 transition-transform" />
          <span className="text-4xl font-black font-mono leading-none text-[#FFA116] drop-shadow-[0_0_8px_rgba(255,161,22,0.4)]">
            {loading ? '...' : displayData.totalSolved}
          </span>
          <span className="text-[10px] font-black uppercase tracking-[0.2em] mt-2 opacity-60">
            Solved
          </span>
          <div className="mt-4 flex items-center gap-2 px-3 py-1 bg-white border border-[#FFA116]/50 text-[10px] font-mono">
            <Activity className="w-3 h-3 text-[#FFA116]" />
            Rank: #{loading ? '...' : displayData.ranking.toLocaleString()}
          </div>
        </div>

        {/* Right Side: Detailed Breakdown */}
        <div className="space-y-4">
          <StatBar
            label="Easy"
            solved={displayData.easySolved}
            total={displayData.totalEasy}
            color="bg-emerald-400"
          />
          <StatBar
            label="Med."
            solved={displayData.mediumSolved}
            total={displayData.totalMedium}
            color="bg-[#FFA116]"
          />
          <StatBar
            label="Hard"
            solved={displayData.hardSolved}
            total={displayData.totalHard}
            color="bg-rose-500"
          />
        </div>
      </div>

      {!loading && !data && (
        <div className="mt-4 text-[9px] font-mono text-center opacity-40 italic">
          * Showing cached baseline stats (201 problems solved)
        </div>
      )}
    </div>
  );
};

export default LeetCodeStats;
