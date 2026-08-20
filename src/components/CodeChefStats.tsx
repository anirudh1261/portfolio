import { useState, useEffect } from 'react';
import { Award, ExternalLink, Globe, Star, RefreshCw } from 'lucide-react';

interface CodeChefData {
  name: string;
  currentRating: number | null;
  highestRating: number | null;
  numberOfProblemsSolved: number;
  globalRank: number | null;
  countryRank: number | null;
  stars: string;
}

const FALLBACK_DATA: CodeChefData = {
  name: 'anirudh_0334',
  currentRating: null,
  highestRating: null,
  numberOfProblemsSolved: 110,
  globalRank: null,
  countryRank: null,
  stars: 'unrated',
};

const CODECHEF_API_URLS = [
  'https://codechef-api.vercel.app/handle/anirudh_0334',
  'https://codechef-api.vercel.app/anirudh_0334',
];

const CodeChefStats = () => {
  const [data, setData] = useState<CodeChefData | null>(null);
  const [loading, setLoading] = useState(true);
  const [isLive, setIsLive] = useState(false);

  const fetchStats = async () => {
    setLoading(true);
    setIsLive(false);
    let fetched = false;

    for (const url of CODECHEF_API_URLS) {
      try {
        const response = await fetch(url, { cache: 'no-store' });
        if (response.ok) {
          const result = await response.json();
          if (result && (result.success || result.numberOfProblemsSolved !== undefined)) {
            setData(result);
            setIsLive(true);
            fetched = true;
            break;
          }
        }
      } catch (err) {
        console.warn(`CodeChef API ${url} failed:`, err);
      }
    }

    if (!fetched) {
      console.warn('All CodeChef APIs unavailable — showing baseline stats.');
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchStats();
  }, []);

  const displayData = data || FALLBACK_DATA;

  // Parse progress percentage if name has format "Practice Python 14%"
  const progressMatch = displayData.name?.match(/(\d+)%/);
  const progressPercent = progressMatch ? parseInt(progressMatch[1], 10) : null;

  const StatBar = ({
    label,
    solved,
    total,
    color
  }: {
    label: string;
    solved: number;
    total: number;
    color: string;
  }) => (
    <div className="space-y-1">
      <div className="flex justify-between items-end px-1">
        <span className="text-[9px] uppercase font-black tracking-wider opacity-60">
          {label}
        </span>
        <span className="text-[10px] font-mono font-bold">
          {solved}%
        </span>
      </div>
      <div className="h-1.5 w-full bg-black/5 border border-black/10 overflow-hidden relative">
        <div
          className={`h-full ${color} transition-all duration-1000 ease-out border-r border-black`}
          style={{ width: `${Math.min(solved, 100)}%` }}
        />
      </div>
    </div>
  );

  const formatRank = (rank: number | null) => {
    if (rank === null || rank === undefined) return 'N/A';
    return `#${rank.toLocaleString()}`;
  };

  return (
    <div className="border-4 border-black p-5 bg-white text-black hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 flex flex-col h-full relative overflow-hidden">
      {/* CodeChef brown accent bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#5B4636] via-[#B87333] to-[#8B5A2B]" />

      <div className="flex justify-between items-start mb-6 border-b-2 border-black pb-3 mt-1">
        <div>
          <h3 className="font-mono text-xl font-black uppercase tracking-tighter flex items-center gap-2">
            <span className="inline-block w-3 h-3 rounded-full bg-[#5B4636] shadow-[0_0_8px_#5B4636]"></span>
            CodeChef_
            <span className={`text-[9px] font-normal px-1.5 py-0.5 border rounded-sm ${
              isLive
                ? 'bg-[#5B4636]/10 border-[#5B4636]/30 text-[#5B4636]'
                : 'bg-gray-100 border-gray-300 text-gray-400'
            }`}>
              {isLive ? 'Live' : 'Cached'}
            </span>
          </h3>
          <p className="text-[10px] font-mono opacity-50 uppercase tracking-widest mt-1">
            // @anirudh_0334
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={fetchStats}
            disabled={loading}
            className="p-2 border-2 border-black hover:bg-black hover:text-white transition-colors"
            title="Refresh Live Stats"
            aria-label="Refresh CodeChef Stats"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
          </button>
          <a
            href="https://www.codechef.com/users/anirudh_0334"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 border-2 border-black hover:bg-black hover:text-white transition-colors"
            aria-label="View CodeChef Profile"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
        {/* Left Side: Solved Count */}
        <div className="flex flex-col justify-center items-center p-4 bg-gradient-to-br from-[#5B4636]/10 to-[#8B5A2B]/5 border-2 border-black relative overflow-hidden group">
          <Award className="w-12 h-12 mb-2 text-[#5B4636]/10 absolute -top-2 -right-2 rotate-12 group-hover:scale-110 transition-transform" />
          <span className="text-4xl font-black font-mono leading-none text-[#5B4636] drop-shadow-[0_0_8px_rgba(91,70,54,0.2)]">
            {loading ? '...' : displayData.numberOfProblemsSolved}
          </span>
          <span className="text-[10px] font-black uppercase tracking-[0.2em] mt-2 opacity-60">
            Total Solved
          </span>
          <div className="mt-4 flex items-center gap-1.5 px-3 py-1 bg-white border-2 border-black text-[10px] font-mono font-bold uppercase">
            <Star className="w-3 h-3 text-[#5B4636] fill-[#5B4636]" />
            {displayData.stars === 'unrated' ? 'Unrated' : displayData.stars}
          </div>
        </div>

        {/* Right Side: Rating and ranks */}
        <div className="space-y-3 flex flex-col justify-center font-mono text-xs">
          {progressPercent !== null && (
            <StatBar
              label="Practice Progress"
              solved={progressPercent}
              total={100}
              color="bg-amber-600"
            />
          )}

          <div className="pt-2 space-y-2 border-t border-black/10">
            <div className="flex justify-between items-center">
              <span className="opacity-60 uppercase text-[9px] font-black">Rating</span>
              <span className="font-bold">{displayData.currentRating !== null ? displayData.currentRating : 'Unrated'}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="opacity-60 uppercase text-[9px] font-black">Highest Rating</span>
              <span className="font-bold">{displayData.highestRating !== null ? displayData.highestRating : 'Unrated'}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="opacity-60 uppercase text-[9px] font-black flex items-center gap-1">
                <Globe className="w-3 h-3 text-[#5B4636]" /> Global Rank
              </span>
              <span className="font-bold">{formatRank(displayData.globalRank)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="opacity-60 uppercase text-[9px] font-black flex items-center gap-1">
                <Award className="w-3 h-3 text-[#B87333]" /> Country Rank
              </span>
              <span className="font-bold">{formatRank(displayData.countryRank)}</span>
            </div>
          </div>
        </div>
      </div>

      {!loading && !isLive && (
        <div className="mt-4 text-[9px] font-mono text-center opacity-40 italic">
          * No public CodeChef API — showing cached baseline stats
        </div>
      )}
      {!loading && isLive && (
        <div className="mt-4 text-[9px] font-mono text-center text-emerald-600 font-semibold">
          • Live updated from CodeChef
        </div>
      )}
    </div>
  );
};

export default CodeChefStats;
