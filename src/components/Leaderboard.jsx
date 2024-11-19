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
  Shield
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
        },
        // Add more quest-specific rankings
      ],
      community: [
        {
          rank: 1,
          name: "CommunityHero",
          communityCredits: 1500,
          badges: ["Top Contributor"],
          achievements: ["1000 Helpful Responses"],
          change: 0
        },
        // Add more community-specific rankings
      ],
      gemPoints: [
        {
          rank: 1,
          name: "TokenWhale",
          gemPoints: 25000,
          badges: ["GP Master"],
          achievements: ["First to 25k GP"],
          change: 1
        },
        // Add more GP-specific rankings
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
      case 1: return <Crown className="w-6 h-6 text-yellow-500" />;
      case 2: return <Medal className="w-6 h-6 text-gray-400" />;
      case 3: return <Medal className="w-6 h-6 text-amber-600" />;
      default: return <Shield className="w-6 h-6 text-blue-500" />;
    }
  };

  const getChangeIndicator = (change) => {
    if (change > 0) return <div className="flex items-center text-green-500 text-sm"><ArrowUp className="w-4 h-4" />+{change}</div>;
    if (change < 0) return <div className="flex items-center text-red-500 text-sm"><ArrowUp className="w-4 h-4 rotate-180" />{change}</div>;
    return <div className="text-gray-500 text-sm">-</div>;
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
    <div className="pb-20">
      {/* Stats Header */}
      <div className="p-4 bg-gradient-to-br from-blue-500 to-purple-600 text-white">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-2">
            <Trophy className="w-6 h-6" />
            <span className="text-lg font-bold">Achievement Board</span>
          </div>
          <Clock className="w-5 h-5" />
        </div>
        
        {/* Timeframe Selector */}
        <div className="flex space-x-2 mb-4 overflow-x-auto">
          {leaderboardData.timeframes.map(frame => (
            <button
              key={frame.id}
              onClick={() => setTimeframe(frame.id)}
              className={`px-3 py-1 rounded-full text-sm whitespace-nowrap
                ${timeframe === frame.id 
                  ? 'bg-white text-purple-600' 
                  : 'bg-white/20'}`}
            >
              {frame.label}
            </button>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white/10 rounded-lg p-3">
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4 opacity-80" />
              <div className="text-sm opacity-80">Active Players</div>
            </div>
            <div className="text-xl font-bold">{leaderboardData.stats.activeUsers}</div>
          </div>
          <div className="bg-white/10 rounded-lg p-3">
            <div className="flex items-center space-x-2">
              <Coins className="w-4 h-4 opacity-80" />
              <div className="text-sm opacity-80">Total Rewards</div>
            </div>
            <div className="text-xl font-bold">{leaderboardData.stats.totalRewardsGP.toLocaleString()} GP</div>
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="p-4">
        <div className="flex space-x-2 overflow-x-auto">
          {leaderboardData.categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg whitespace-nowrap
                ${activeCategory === category.id 
                  ? 'bg-purple-100 text-purple-700' 
                  : 'bg-white text-gray-600'}`}
            >
              <category.icon className={`w-4 h-4 ${activeCategory === category.id ? 'text-purple-500' : category.color}`} />
              <span className="text-sm font-medium">{category.name}</span>
            </button>
          ))}
        </div>
        
        {/* Category Description */}
        <div className="mt-2 text-sm text-gray-600 px-2">
          {leaderboardData.categories.find(c => c.id === activeCategory)?.description}
        </div>
      </div>

      {/* Rankings */}
      <div className="p-4">
        <div className="bg-white rounded-xl shadow">
          {leaderboardData.rankings[activeCategory]?.map((player, index) => (
            <div 
              key={index}
              className={`p-4 ${
                index !== leaderboardData.rankings[activeCategory].length - 1 ? 'border-b' : ''
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-3">
                    {getRankIcon(player.rank)}
                    {getChangeIndicator(player.change)}
                  </div>
                  <div>
                    <p className="font-medium">{player.name}</p>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {player.badges?.map((badge, i) => (
                        <span key={i} className="inline-block px-2 py-1 text-xs bg-purple-100 text-purple-800 rounded">
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-purple-600">
                    {getScoreDisplay(player, activeCategory)}
                  </div>
                  {activeCategory === 'all' && (
                    <div className="text-xs text-gray-500 mt-1">
                      QT: {player.questTokens} | CC: {player.communityCredits}
                    </div>
                  )}
                </div>
              </div>
              {player.achievements && (
                <div className="mt-2 flex items-center space-x-2 text-xs text-gray-500">
                  <Sparkles className="w-4 h-4 text-yellow-500" />
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
        <div className="bg-white rounded-xl shadow p-4">
          <h3 className="font-semibold text-lg flex items-center mb-4">
            <Star className="w-5 h-5 text-yellow-500 mr-2" />
            Period Summary
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500">Total Players</p>
              <div className="flex items-center space-x-2">
                <p className="text-xl font-bold text-purple-600">
                  {leaderboardData.stats.totalParticipants.toLocaleString()}
                </p>
                <span className="text-xs text-green-500">+{leaderboardData.stats.weeklyGrowth}%</span>
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-500">Quests Completed</p>
              <p className="text-xl font-bold text-purple-600">
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