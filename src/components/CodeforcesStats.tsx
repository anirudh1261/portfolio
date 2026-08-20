import { useState, useEffect } from 'react';
import { Trophy, ExternalLink, Users, Calendar, Activity } from 'lucide-react';

interface CodeforcesUser {
  handle: string;
  contribution: number;
  lastOnlineTimeSeconds: number;
  friendOfCount: number;
  titlePhoto: string;
  avatar: string;
  registrationTimeSeconds: number;
  rating?: number;
  rank?: string;
  maxRating?: number;
  maxRank?: string;
}

const FALLBACK_USER: CodeforcesUser = {
  handle: 'anirudh.ganji15',
  contribution: 0,
  lastOnlineTimeSeconds: Math.floor(Date.now() / 1000),
  friendOfCount: 0,
  titlePhoto: 'https://userpic.codeforces.org/no-title.jpg',
  avatar: 'https://userpic.codeforces.org/no-avatar.jpg',
  registrationTimeSeconds: 1783263497,
  rating: 1204,
  rank: 'specialist',
  maxRating: 1204,
  maxRank: 'specialist',
};
const FALLBACK_SOLVED = 13;
const FALLBACK_SUBMISSIONS = 14;

// allorigins.win acts as a CORS proxy — required because codeforces.com blocks browser requests
const CF_PROXY = 'https://api.allorigins.win/get?url=';
const CF_INFO_URL = encodeURIComponent('https://codeforces.com/api/user.info?handles=anirudh.ganji15');
const CF_STATUS_URL = encodeURIComponent('https://codeforces.com/api/user.status?handle=anirudh.ganji15&from=1&count=1000');

const POLL_INTERVAL_MS = 5 * 60 * 1000;

const CodeforcesStats = () => {
  const [userInfo, setUserInfo] = useState<CodeforcesUser | null>(null);
  const [solvedCount, setSolvedCount] = useState<number>(FALLBACK_SOLVED);
  const [totalSubmissions, setTotalSubmissions] = useState<number>(FALLBACK_SUBMISSIONS);
  const [loading, setLoading] = useState(true);

  const fetchStats = async () => {
    try {
      const [infoRes, statusRes] = await Promise.all([
        fetch(`${CF_PROXY}${CF_INFO_URL}`, { cache: 'no-store' }),
        fetch(`${CF_PROXY}${CF_STATUS_URL}`, { cache: 'no-store' }),
      ]);

      if (infoRes.ok) {
        const infoWrapper = await infoRes.json();
        const infoResult = JSON.parse(infoWrapper.contents);
        if (infoResult?.status === 'OK' && infoResult.result?.[0]) {
          setUserInfo(infoResult.result[0]);
        }
      }

      if (statusRes.ok) {
        const statusWrapper = await statusRes.json();
        const statusResult = JSON.parse(statusWrapper.contents);
        if (statusResult?.status === 'OK' && statusResult.result) {
          const uniqueSolved = new Set<string>();
          statusResult.result.forEach(
            (sub: { verdict: string; problem?: { contestId: number; index: string } }) => {
              if (sub.verdict === 'OK' && sub.problem) {
                uniqueSolved.add(`${sub.problem.contestId}-${sub.problem.index}`);
              }
            }
          );
          setSolvedCount(uniqueSolved.size);
          setTotalSubmissions(statusResult.result.length);
        }
      }
    } catch (error) {
      console.warn('Codeforces fetch failed, using fallback.', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();
    const interval = setInterval(fetchStats, POLL_INTERVAL_MS);
    return () => clearInterval(interval);
  }, []);

  const displayData = userInfo || FALLBACK_USER;

  const getRankColor = (rank: string) => {
    const r = rank.toLowerCase();
    if (r.includes('legendary') || r.includes('grandmaster')) return 'text-red-600';
    if (r.includes('master')) return 'text-orange-500';
    if (r.includes('candidate master')) return 'text-violet-500';
    if (r.includes('expert')) return 'text-blue-600';
    if (r.includes('specialist')) return 'text-cyan-600';
    if (r.includes('pupil')) return 'text-green-600';
    if (r.includes('newbie')) return 'text-gray-500';
    return 'text-gray-400';
  };

  const registrationDate = new Date(displayData.registrationTimeSeconds * 1000).toLocaleDateString(
    undefined,
    { year: 'numeric', month: 'short', day: 'numeric' }
  );

  return (
    <div className="border-4 border-black p-5 bg-white text-black hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 flex flex-col h-full relative overflow-hidden">
      {/* Codeforces three-color accent bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#3182CE] via-[#DD6B20] to-[#E53E3E]" />

      <div className="flex justify-between items-start mb-6 border-b-2 border-black pb-3 mt-1">
        <div>
          <h3 className="font-mono text-xl font-black uppercase tracking-tighter flex items-center gap-2">
            <span className="inline-block w-3 h-3 rounded-full bg-[#3182CE] shadow-[0_0_8px_#3182CE]"></span>
            Codeforces_
            <span className="text-[9px] font-normal px-1.5 py-0.5 bg-[#3182CE]/10 border border-[#3182CE]/30 text-[#3182CE] rounded-sm">
              Live
            </span>
          </h3>
          <p className="text-[10px] font-mono opacity-50 uppercase tracking-widest mt-1">
            // @{displayData.handle}
          </p>
        </div>
        <a
          href={`https://codeforces.com/profile/${displayData.handle}`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 border-2 border-black hover:bg-black hover:text-white transition-colors"
          aria-label="View Codeforces Profile"
        >
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
        {/* Left Side: Solved count display */}
        <div className="flex flex-col justify-center items-center p-4 bg-gradient-to-br from-blue-50 to-orange-50 border-2 border-black relative overflow-hidden group">
          <Trophy className="w-12 h-12 mb-2 text-black/10 absolute -top-2 -right-2 rotate-12 group-hover:scale-110 transition-transform" />
          <span className="text-4xl font-black font-mono leading-none text-black">
            {loading ? '...' : solvedCount}
          </span>
          <span className="text-[10px] font-black uppercase tracking-[0.2em] mt-2 opacity-60">
            Total Solved
          </span>
          <div
            className={`mt-4 px-3 py-1 bg-white border-2 border-black text-[10px] font-mono font-bold uppercase tracking-wider ${getRankColor(
              displayData.rank || 'Unrated'
            )}`}
          >
            {displayData.rank || 'Unrated'}
          </div>
        </div>

        {/* Right Side: Key Details */}
        <div className="flex flex-col justify-center gap-3 font-mono text-xs">
          <div className="flex justify-between items-center border-b border-black/10 pb-1.5">
            <span className="opacity-60 uppercase text-[9px] font-black flex items-center gap-1">
              <Activity className="w-3 h-3 text-[#E53E3E]" /> Submissions
            </span>
            <span className="font-bold">{loading ? '...' : totalSubmissions}</span>
          </div>
          <div className="flex justify-between items-center border-b border-black/10 pb-1.5">
            <span className="opacity-60 uppercase text-[9px] font-black">Rating</span>
            <span className="font-bold">
              {displayData.rating !== undefined ? displayData.rating : 'Unrated'}
            </span>
          </div>
          <div className="flex justify-between items-center border-b border-black/10 pb-1.5">
            <span className="opacity-60 uppercase text-[9px] font-black">Max Rating</span>
            <span className="font-bold">
              {displayData.maxRating !== undefined ? displayData.maxRating : 'N/A'}
            </span>
          </div>
          <div className="flex justify-between items-center border-b border-black/10 pb-1.5">
            <span className="opacity-60 uppercase text-[9px] font-black">Contribution</span>
            <span className="font-bold">
              {displayData.contribution > 0 ? `+${displayData.contribution}` : displayData.contribution}
            </span>
          </div>
          <div className="flex justify-between items-center border-b border-black/10 pb-1.5">
            <span className="opacity-60 uppercase text-[9px] font-black flex items-center gap-1">
              <Users className="w-3 h-3" /> Friends
            </span>
            <span className="font-bold">{displayData.friendOfCount}</span>
          </div>
          <div className="flex justify-between items-center pb-1">
            <span className="opacity-60 uppercase text-[9px] font-black flex items-center gap-1">
              <Calendar className="w-3 h-3" /> Joined
            </span>
            <span className="font-bold">{registrationDate}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeforcesStats;
