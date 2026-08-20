import { useState, useEffect } from 'react';
import { Award, ExternalLink, Globe, Star } from 'lucide-react';

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

// allorigins.win CORS proxy — fetches CodeChef data through a server-side request
const CC_PROXY = 'https://api.allorigins.win/get?url=';
// We use the codechef-api.vercel.app scraper via proxy so it works from browser
const CC_API_URL = encodeURIComponent('https://codechef-api.vercel.app/handle/anirudh_0334');
const CC_API_URL_2 = encodeURIComponent('https://codechef-api.vercel.app/anirudh_0334');

const POLL_INTERVAL_MS = 5 * 60 * 1000;

const CodeChefStats = () => {
  const [data, setData] = useState<CodeChefData | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchStats = async () => {
    let fetchedData: CodeChefData | null = null;

    const endpoints = [CC_API_URL, CC_API_URL_2];
    for (const ep of endpoints) {
      try {
        const res = await fetch(`${CC_PROXY}${ep}`, { cache: 'no-store' });
        if (res.ok) {
          const wrapper = await res.json();
          const result = JSON.parse(wrapper.contents);
          if (result && (result.success || result.numberOfProblemsSolved !== undefined)) {
            fetchedData = result;
            break;
          }
        }
      } catch (err) {
        console.warn('CodeChef API attempt failed:', err);
      }
    }

    if (fetchedData) setData(fetchedData);
    setLoading(false);
  };

  useEffect(() => {
    fetchStats();
    const interval = setInterval(fetchStats, POLL_INTERVAL_MS);
    return () => clearInterval(interval);
  }, []);

  const displayData = data || FALLBACK_DATA;

  const progressMatch = displayData.name?.match(/(\d+)%/);
  const progressPercent = progressMatch ? parseInt(progressMatch[1], 10) : null;

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
    <div className="space-y-1">
      <div className="flex justify-between items-end px-1">
        <span className="text-[9px] uppercase font-black tracking-wider opacity-60">{label}</span>
        <span className="text-[10px] font-mono font-bold">{solved}%</span>
      </div>
      <div className="h-1.5 w-full bg-black/5 border border-black/10 overflow-hidden relative">
        <div
          className={`h-full ${color} transition-all duration-1000 ease-out border-r border-black`}
          style={{ width: `${Math.min(solved, 100)}%` }}
        />
      </div>
    </div>
  );

  const formatRank = (rank: number | null) =>
    rank === null || rank === undefined ? 'N/A' : `#${rank.toLocaleString()}`;

  return (
    <div className="border-4 border-black p-5 bg-white text-black hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 flex flex-col h-full relative overflow-hidden">
      {/* CodeChef brown accent bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#5B4636] via-[#B87333] to-[#8B5A2B]" />

      <div className="flex justify-between items-start mb-6 border-b-2 border-black pb-3 mt-1">
        <div>
          <h3 className="font-mono text-xl font-black uppercase tracking-tighter flex items-center gap-2">
            <span className="inline-block w-3 h-3 rounded-full bg-[#5B4636] shadow-[0_0_8px_#5B4636]"></span>
            CodeChef_
            <span className="text-[9px] font-normal px-1.5 py-0.5 bg-[#5B4636]/10 border border-[#5B4636]/30 text-[#5B4636] rounded-sm">
              Live
            </span>
          </h3>
          <p className="text-[10px] font-mono opacity-50 uppercase tracking-widest mt-1">
            // @anirudh_0334
          </p>
        </div>
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
            <StatBar label="Practice Progress" solved={progressPercent} total={100} color="bg-amber-600" />
          )}

          <div className="pt-2 space-y-2 border-t border-black/10">
            <div className="flex justify-between items-center">
              <span className="opacity-60 uppercase text-[9px] font-black">Rating</span>
              <span className="font-bold">
                {displayData.currentRating !== null ? displayData.currentRating : 'Unrated'}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="opacity-60 uppercase text-[9px] font-black">Highest Rating</span>
              <span className="font-bold">
                {displayData.highestRating !== null ? displayData.highestRating : 'Unrated'}
              </span>
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

      {!loading && !data && (
        <div className="mt-4 text-[9px] font-mono text-center opacity-40 italic">
          * Showing cached baseline stats
        </div>
      )}
    </div>
  );
};

export default CodeChefStats;
