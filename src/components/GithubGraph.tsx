import React, { useState, useEffect } from 'react';
import { GitHubCalendar } from 'react-github-calendar';
import { GitCommit, Flame, Trophy, RefreshCw } from 'lucide-react';

const GithubGraph = () => {
  const [stats, setStats] = useState<{
    totalContributions: number;
    currentStreak: number;
    longestStreak: number;
  } | null>(null);
  const [loading, setLoading] = useState(true);
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch(
          'https://github-contributions-api.jogruber.de/v4/anirudh1261',
          { cache: 'no-store' }
        );
        const data = await response.json();
        if (data && data.contributions && data.total) {
          // Calculate total contributions
          const totalContributions = (Object.values(data.total) as number[]).reduce(
            (a: number, b: number) => a + b,
            0
          );

          // Sort contributions ascending
          const sorted = data.contributions.sort((a: { date: string; count: number }, b: { date: string; count: number }) =>
            a.date.localeCompare(b.date)
          );

          // Calculate longest streak
          let longestStreak = 0;
          let tempStreak = 0;
          for (const day of sorted) {
            if (day.count > 0) {
              tempStreak++;
              if (tempStreak > longestStreak) longestStreak = tempStreak;
            } else {
              tempStreak = 0;
            }
          }

          // Calculate current streak
          const dateMap: { [key: string]: number } = {};
          sorted.forEach((d: { date: string; count: number }) => {
            dateMap[d.date] = d.count;
          });

          const toLocalDateStr = (d: Date) => {
            const year = d.getFullYear();
            const month = String(d.getMonth() + 1).padStart(2, '0');
            const day = String(d.getDate()).padStart(2, '0');
            return `${year}-${month}-${day}`;
          };

          let currentStreak = 0;
          const checkDate = new Date();
          let checkStr = toLocalDateStr(checkDate);

          // If checkDate has 0 contributions, check yesterday
          if (dateMap[checkStr] === undefined || dateMap[checkStr] === 0) {
            checkDate.setDate(checkDate.getDate() - 1);
            checkStr = toLocalDateStr(checkDate);
          }

          while (dateMap[checkStr] > 0) {
            currentStreak++;
            checkDate.setDate(checkDate.getDate() - 1);
            checkStr = toLocalDateStr(checkDate);
          }

          setStats({
            totalContributions,
            currentStreak,
            longestStreak,
          });
        }
      } catch (error) {
        console.error('Error fetching GitHub stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
    const interval = setInterval(fetchStats, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, [refreshKey]);

  const handleRefresh = () => {
    setLoading(true);
    setRefreshKey((prev) => prev + 1);
  };


  return (
    <div className="border-4 border-black p-4 bg-white text-black hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 relative overflow-hidden">
      {/* green glow accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#39d353] via-[#26a641] to-[#006d32]" />

      <h3 className="font-mono text-xl font-bold mb-3 border-b-2 border-black pb-2 uppercase tracking-tighter flex items-center gap-3 mt-1">
        <span className="inline-block w-3 h-3 rounded-full bg-[#39d353] shadow-[0_0_8px_#39d353]"></span>
        GitHub Activity_
        <span className="ml-auto text-[10px] font-normal px-2 py-0.5 bg-[#39d353]/15 border border-[#39d353]/40 text-[#26a641] rounded-sm">Live</span>
        <button
          onClick={handleRefresh}
          disabled={loading}
          className="p-1 border border-black hover:bg-black hover:text-white transition-colors"
          title="Refresh Live Stats"
          aria-label="Refresh Live Stats"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
        </button>
      </h3>

      {/* Compact stats row */}
      <div className="grid grid-cols-3 gap-2 mb-3">
        <div className="border-2 border-black py-2 px-1 bg-[#ebedf0]/40 flex flex-col items-center justify-center text-center">
          <GitCommit className="w-4 h-4 mb-0.5 text-black/60" />
          <span className="font-mono text-sm font-black leading-none">
            {loading ? '...' : stats ? stats.totalContributions.toLocaleString() : '1,803'}
          </span>
          <span className="font-mono text-[8px] uppercase tracking-wider text-black/50 mt-0.5 leading-tight">Total Commits</span>
        </div>
        <div className="border-2 border-black py-2 px-1 bg-[#9be9a8]/30 flex flex-col items-center justify-center text-center">
          <Flame className="w-4 h-4 mb-0.5 text-orange-500" />
          <span className="font-mono text-sm font-black leading-none">
            {loading ? '...' : stats ? stats.currentStreak : '3'}
          </span>
          <span className="font-mono text-[8px] uppercase tracking-wider text-black/50 mt-0.5 leading-tight">Current Streak</span>
        </div>
        <div className="border-2 border-black py-2 px-1 bg-[#40c463]/20 flex flex-col items-center justify-center text-center">
          <Trophy className="w-4 h-4 mb-0.5 text-[#26a641]" />
          <span className="font-mono text-sm font-black leading-none">
            {loading ? '...' : stats ? stats.longestStreak : '21'}
          </span>
          <span className="font-mono text-[8px] uppercase tracking-wider text-black/50 mt-0.5 leading-tight">Longest Streak</span>
        </div>
      </div>

      {/* Calendar — shows current year (2026) up to today, so July is always visible */}
      <div className="overflow-x-auto pb-2">
        <GitHubCalendar
          key={refreshKey}
          username="anirudh1261"
          year="last"
          colorScheme="light"
          showTotalCount={false}
          transformData={(data) => {
            const today = new Date().toISOString().split('T')[0];
            return data.filter((d) => d.date <= today);
          }}
          style={{ fontFamily: 'monospace' }}
          theme={{ light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'] }}
          blockSize={11}
          blockMargin={3}
          fontSize={11}
        />
      </div>

      <div className="mt-2 flex items-center justify-between font-mono text-xs">
        <span className="flex items-center gap-1.5 text-[#26a641]">
          <span className="inline-block w-2 h-2 rounded-sm bg-[#40c463]"></span>
          <span className="text-[10px] opacity-70">Less</span>
          <span className="flex gap-0.5">
            {['#9be9a8', '#40c463', '#30a14e', '#216e39'].map(c => (
              <span key={c} className="inline-block w-2 h-2 rounded-sm" style={{ background: c }}></span>
            ))}
          </span>
          <span className="text-[10px] opacity-70">More</span>
        </span>
        <span className="text-gray-400 text-[10px]">
          // {loading ? '...' : stats ? stats.totalContributions.toLocaleString() : '1,803'} contributions all-time
        </span>
      </div>
    </div>
  );
};

export default GithubGraph;

