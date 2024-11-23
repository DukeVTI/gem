import React, { useState } from 'react';
import {
  Trophy,
  Medal,
  Crown,
  Star,
  Users,
  Target,
  Coins,
  Clock,
  Heart,
  ChevronRight,
  ArrowUp,
  Sparkles,
  Flame,
  Shield,
  TrendingUp
} from 'lucide-react';

const LeaderboardTab = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [timeframe, setTimeframe] = useState('weekly');

  const [leaderboardData] = useState({
    timeframes: [
      { id: 'daily', label: 'Daily' },
      { id: 'weekly', label: 'Weekly' },
      { id: 'biweekly', label: 'Competition' },
      { id: 'allTime', label: 'All Time' }
    ],
    categories: [
      { id: 'all', name: 'Overall Rankings', icon: Trophy, color: 'text-yellow-500', description: 'Combined achievement across all activities' },
      { id: 'quests', name: 'Quest Champions', icon: Target, color: 'text-purple-500', description: 'Top performers in gaming challenges' },
      { id: 'community', name: 'Community Leaders', icon: Users, color: 'text-blue-500', description: 'Most helpful community members' },
      { id: 'gemPoints', name: 'Top Earners', icon: Coins, color: 'text-green-500', description: 'Highest GP accumulators' }
    ],
    rankings: {
      all: [
        { 
          rank: 1, 
          name: "CryptoNinja", 
          questTokens: 1200,
          communityCredits: 890,
          gemPoints: 15000,
          badges: ["Quest Master", "Community Guide"],
          achievements: ["First 100k GP", "50 Quests Completed"],
          change: 0
        },
        { 
          rank: 2, 
          name: "Web3Explorer", 
          questTokens: 950,
          communityCredits: 1200,
          gemPoints: 12000,
          badges: ["Community Guide", "Content Creator"],
          achievements: ["Most Helpful", "Guide Writer"],
          change: 2
        },
        { 
          rank: 3, 
          name: "BlockchainPro", 
          questTokens: 800,
          communityCredits: 750,
          gemPoints: 11500,
          badges: ["Gem Collector", "Quest Hero"],
          achievements: ["Speed Runner", "Market Master"],
          change: -1
        }
      ],
      quests: [
        {
          rank: 1,
          name: "QuestMaster99",
          questTokens: 1500,
          badges: ["Quest Expert"],
          achievements: ["100 Quests Completed"],
          change: 2
        }
      ],
      community: [
        {
          rank: 1,
          name: "CommunityHero",
          communityCredits: 1500,
          badges: ["Top Contributor"],
          achievements: ["1000 Helpful Responses"],
          change: 0
        }
      ],
      gemPoints: [
        {
          rank: 1,
          name: "TokenWhale",
          gemPoints: 25000,
          badges: ["GP Master"],
          achievements: ["First to 25k GP"],
          change: 1
        }
      ]
    },
    stats: {
      totalParticipants: 1234,
      questsCompleted: 5678,
      totalRewardsGP: 250000,
      activeUsers: 456,
      weeklyGrowth: 23
    }
  });

  const getRankIcon = (rank) => {
    switch (rank) {
      case 1: return <Crown className="w-6 h-6 text-yellow-400" />;
      case 2: return <Medal className="w-6 h-6 text-gray-400" />;
      case 3: return <Medal className="w-6 h-6 text-amber-600" />;
      default: return <Shield className="w-6 h-6 text-blue-400" />;
    }
  };

  const getChangeIndicator = (change) => {
    if (change > 0) return <div className="flex items-center text-emerald-400 text-sm"><ArrowUp className="w-4 h-4" />+{change}</div>;
    if (change < 0) return <div className="flex items-center text-red-400 text-sm"><ArrowUp className="w-4 h-4 rotate-180" />{change}</div>;
    return <div className="text-purple-300 text-sm">-</div>;
  };

  const getScoreDisplay = (player, category) => {
    switch (category) {
      case 'quests': return `${player.questTokens} QT`;
      case 'community': return `${player.communityCredits} CC`;
      case 'gemPoints': return `${player.gemPoints?.toLocaleString()} GP`;
      case 'all': return `${player.gemPoints?.toLocaleString()} GP`;
      default: return '';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900 text-white pb-20">
      {/* Hero Banner */}
      <div className="p-6 bg-gradient-to-br from-purple-900 to-indigo-900 border-b-2 border-purple-500/30">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-2">
            <Trophy className="w-8 h-8 text-yellow-400" />
            <span className="text-2xl font-bold bg-gradient-to-r from-yellow-200 to-yellow-500 bg-clip-text text-transparent">
              Achievement Board
            </span>
          </div>
          <Clock className="w-6 h-6 text-purple-300" />
        </div>
        
        {/* Timeframe Selector */}
        <div className="flex space-x-2 mb-6 overflow-x-auto">
          {leaderboardData.timeframes.map(frame => (
            <button
              key={frame.id}
              onClick={() => setTimeframe(frame.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all
                ${timeframe === frame.id 
                  ? 'bg-purple-500 text-white' 
                  : 'bg-black/30 text-purple-200 border border-purple-500/30'}`}
            >
              {frame.label}
            </button>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-black/30 rounded-lg p-4 border border-purple-500/30">
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-blue-400" />
              <div>
                <div className="text-xs text-purple-200">Active Players</div>
                <div className="font-bold text-lg">{leaderboardData.stats.activeUsers}</div>
              </div>
            </div>
          </div>
          <div className="bg-black/30 rounded-lg p-4 border border-purple-500/30">
            <div className="flex items-center space-x-2">
              <Target className="w-5 h-5 text-purple-400" />
              <div>
                <div className="text-xs text-purple-200">Quests Done</div>
                <div className="font-bold text-lg">{leaderboardData.stats.questsCompleted}</div>
              </div>
            </div>
          </div>
          <div className="bg-black/30 rounded-lg p-4 border border-purple-500/30">
            <div className="flex items-center space-x-2">
              <Coins className="w-5 h-5 text-yellow-400" />
              <div>
                <div className="text-xs text-purple-200">Total Rewards</div>
                <div className="font-bold text-lg">{leaderboardData.stats.totalRewardsGP.toLocaleString()}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="p-4">
        <div className="flex space-x-2 overflow-x-auto mb-4">
          {leaderboardData.categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all
                ${activeCategory === category.id 
                  ? 'bg-purple-500/20 border-purple-500 text-purple-200' 
                  : 'bg-black/30 border-purple-500/30 text-purple-300'} border`}
            >
              <category.icon className={`w-4 h-4 ${category.color}`} />
              <span className="text-sm font-medium whitespace-nowrap">{category.name}</span>
            </button>
          ))}
        </div>
        
        {/* Category Description */}
        <div className="text-sm text-purple-300 px-2 mb-4">
          {leaderboardData.categories.find(c => c.id === activeCategory)?.description}
        </div>
      </div>

      {/* Rankings */}
      <div className="p-4">
        <div className="space-y-3">
          {leaderboardData.rankings[activeCategory]?.map((player, index) => (
            <div 
              key={index}
              className="bg-black/40 rounded-xl border border-purple-500/30 p-4"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-3">
                    {getRankIcon(player.rank)}
                    {getChangeIndicator(player.change)}
                  </div>
                  <div>
                    <p className="font-bold text-purple-100">{player.name}</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {player.badges?.map((badge, i) => (
                        <span key={i} className="px-2 py-1 text-xs bg-purple-500/20 text-purple-200 rounded-lg">
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-lg text-purple-200">
                    {getScoreDisplay(player, activeCategory)}
                  </div>
                  {activeCategory === 'all' && (
                    <div className="text-xs text-purple-300 mt-1">
                      QT: {player.questTokens} | CC: {player.communityCredits}
                    </div>
                  )}
                </div>
              </div>
              {player.achievements && (
                <div className="mt-3 flex items-center space-x-2 text-xs text-purple-300 bg-purple-500/10 p-2 rounded-lg">
                  <Sparkles className="w-4 h-4 text-yellow-400" />
                  <div className="flex space-x-2">
                    {player.achievements.map((achievement, i) => (
                      <span key={i}>
                        {achievement}
                        {i < player.achievements.length - 1 ? ' • ' : ''}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Summary Stats */}
      <div className="p-4">
        <div className="bg-black/40 rounded-xl border border-purple-500/30 p-4">
          <h3 className="font-bold text-lg flex items-center mb-4 text-purple-100">
            <Star className="w-5 h-5 text-yellow-400 mr-2" />
            Period Summary
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-purple-300">Total Players</p>
              <div className="flex items-center space-x-2">
                <p className="text-xl font-bold text-purple-200">
                  {leaderboardData.stats.totalParticipants.toLocaleString()}
                </p>
                <span className="text-xs text-emerald-400 flex items-center">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  {leaderboardData.stats.weeklyGrowth}%
                </span>
              </div>
            </div>
            <div>
              <p className="text-sm text-purple-300">Quests Completed</p>
              <p className="text-xl font-bold text-purple-200">
                {leaderboardData.stats.questsCompleted.toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardTab;