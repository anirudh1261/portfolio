import { Trophy, ExternalLink, Coins, Globe, Target } from 'lucide-react';

// InterviewBit has no public API — stats are manually synced from the profile
const displayData = {
  username: 'anirudh_968',
  globalRank: 342087,
  universityRank: 1,
  score: 733,
  coins: 50,
  solvedCount: 8,
  totalCount: 954,
  streak: 0,
  language: 'Python',
};

const InterviewBitStats = () => {
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
          {solved}<span className="text-[9px] opacity-30 mx-0.5">/</span>{total}
        </span>
      </div>
      <div className="h-1.5 w-full bg-black/5 border border-black/10 overflow-hidden relative">
        <div
          className={`h-full ${color} transition-all duration-1000 ease-out border-r border-black`}
          style={{ width: `${Math.min((solved / total) * 100, 100)}%` }}
        />
      </div>
    </div>
  );

  return (
    <div className="border-4 border-black p-5 bg-white text-black hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 flex flex-col h-full relative overflow-hidden">
      {/* InterviewBit teal accent bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00A3A6] via-[#00B4B6] to-[#00CBD0]" />

      <div className="flex justify-between items-start mb-6 border-b-2 border-black pb-3 mt-1">
        <div>
          <h3 className="font-mono text-xl font-black uppercase tracking-tighter flex items-center gap-2">
            <span className="inline-block w-3 h-3 rounded-full bg-[#00A3A6] shadow-[0_0_8px_#00A3A6]"></span>
            InterviewBit_
            <span className="text-[9px] font-normal px-1.5 py-0.5 bg-gray-100 border border-gray-300 text-gray-400 rounded-sm">
              Cached
            </span>
          </h3>
          <p className="text-[10px] font-mono opacity-50 uppercase tracking-widest mt-1">
            // @{displayData.username}
          </p>
        </div>
        <a
          href={`https://www.interviewbit.com/profile/${displayData.username}/`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 border-2 border-black hover:bg-black hover:text-white transition-colors"
          aria-label="View InterviewBit Profile"
        >
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
        {/* Left Side: Summary Score and Rank */}
        <div className="flex flex-col justify-center items-center p-4 bg-gradient-to-br from-[#00A3A6]/10 to-[#00CBD0]/5 border-2 border-black relative overflow-hidden group">
          <Target className="w-12 h-12 mb-2 text-[#00A3A6]/10 absolute -top-2 -right-2 rotate-12 group-hover:scale-110 transition-transform" />
          <span className="text-4xl font-black font-mono leading-none text-[#00A3A6]">
            {displayData.score}
          </span>
          <span className="text-[10px] font-black uppercase tracking-[0.2em] mt-2 opacity-60">
            Total Score
          </span>
          <div className="mt-4 flex items-center gap-2 px-3 py-1 bg-white border-2 border-black text-[10px] font-mono font-bold">
            <Coins className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
            Coins: {displayData.coins}
          </div>
        </div>

        {/* Right Side: Ranks & Solved percentage */}
        <div className="space-y-3 flex flex-col justify-center font-mono text-xs">
          <StatBar
            label="Problems Solved"
            solved={displayData.solvedCount}
            total={displayData.totalCount}
            color="bg-[#00A3A6]"
          />

          <div className="pt-2 space-y-2 border-t border-black/10">
            <div className="flex justify-between items-center">
              <span className="opacity-60 uppercase text-[9px] font-black flex items-center gap-1">
                <Globe className="w-3 h-3 text-[#00A3A6]" /> Global Rank
              </span>
              <span className="font-bold">#{displayData.globalRank.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="opacity-60 uppercase text-[9px] font-black flex items-center gap-1">
                <Trophy className="w-3 h-3 text-yellow-600" /> University Rank
              </span>
              <span className="font-bold">#{displayData.universityRank}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="opacity-60 uppercase text-[9px] font-black">Fav Language</span>
              <span className="font-bold text-[#00A3A6]">{displayData.language}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 text-[9px] font-mono text-center opacity-40 italic">
        * InterviewBit has no public API — stats manually synced
      </div>
    </div>
  );
};

export default InterviewBitStats;
