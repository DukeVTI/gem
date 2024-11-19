import React, { useState } from 'react';
import {
  Trophy,
  Target,
  Users,
  Coins,
  Star,
  Clock,
  Crown,
  Shield,
  Calendar,
  Gift,
  Medal,
  Sparkles,
  Flame,
  ChevronRight,
  Heart,
  Zap,
  TrendingUp,
  Gamepad,
  BookOpen,
  MessageCircle
} from 'lucide-react';

const HomeTab = () => {
  const [userData] = useState({
    profile: {
      name: "DukeVTI",
      level: 24,
      title: "Quest Master",
      avatarBadge: "🎮",
      dailyStreak: 7
    },
    stats: {
      gemPoints: 15000,
      questTokens: 1200,
      communityCredits: 890,
      rank: 5,
      questsCompleted: 47
    },
    dailyProgress: {
      questTarget: 3,
      questsDone: 2,
      communityActions: 5,
      gpEarned: 250
    },
    activeQuests: [
      {
        title: "Market Master",
        type: "Weekly Challenge",
        progress: 75,
        reward: "500 GP",
        timeLeft: "2 days",
        difficulty: "Medium"
      },
      {
        title: "Community Guide",
        type: "Achievement Quest",
        progress: 60,
        reward: "Exclusive Badge",
        timeLeft: "Ongoing",
        difficulty: "Hard"
      }
    ],
    communityHighlights: [
      {
        title: "Guild Wars Season 4",
        type: "Event",
        status: "Registering",
        participants: 234,
        startTime: "2 hours"
      },
      {
        title: "New Player Welcome",
        type: "Community",
        status: "Active",
        participants: 45,
        reward: "Helper Badge"
      }
    ],
    rewardOpportunities: [
      {
        title: "Complete Daily Quests",
        reward: "100 GP",
        type: "Daily",
        difficulty: "Easy"
      },
      {
        title: "Join Community Event",
        reward: "50 CC",
        type: "Event",
        difficulty: "Easy"
      },
      {
        title: "Market Trading Quest",
        reward: "200 QT",
        type: "Quest",
        difficulty: "Medium"
      }
    ],
    notifications: [
      {
        type: "achievement",
        message: "Unlocked: Speed Runner Badge!",
        time: "1h ago"
      },
      {
        type: "community",
        message: "Your guide helped 10 users!",
        time: "3h ago"
      }
    ]
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900 text-white pb-20">
      {/* Hero Banner */}
      <div className="p-6 bg-gradient-to-br from-purple-900 to-indigo-900 border-b-2 border-purple-500/30">
        <div className="flex items-center space-x-4 mb-4">
          <div className="relative">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center text-3xl">
              {userData.profile.avatarBadge}
            </div>
            <div className="absolute -bottom-2 -right-2 bg-purple-500 rounded-full px-2 py-1 text-xs font-bold">
              Lvl {userData.profile.level}
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-yellow-200 to-yellow-500 bg-clip-text text-transparent">
              {userData.profile.name}
            </h1>
            <div className="flex items-center space-x-2 text-purple-200">
              <Crown className="w-4 h-4 text-yellow-400" />
              <span>{userData.profile.title}</span>
            </div>
          </div>
        </div>

        {/* Currency Stats */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-black/30 rounded-lg p-3 border border-purple-500/30">
            <div className="flex items-center space-x-2">
              <Coins className="w-5 h-5 text-yellow-400" />
              <div>
                <div className="text-xs text-purple-200">Gem Points</div>
                <div className="font-bold">{userData.stats.gemPoints.toLocaleString()}</div>
              </div>
            </div>
          </div>
          <div className="bg-black/30 rounded-lg p-3 border border-purple-500/30">
            <div className="flex items-center space-x-2">
              <Target className="w-5 h-5 text-blue-400" />
              <div>
                <div className="text-xs text-purple-200">Quest Tokens</div>
                <div className="font-bold">{userData.stats.questTokens}</div>
              </div>
            </div>
          </div>
          <div className="bg-black/30 rounded-lg p-3 border border-purple-500/30">
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-green-400" />
              <div>
                <div className="text-xs text-purple-200">Com. Credits</div>
                <div className="font-bold">{userData.stats.communityCredits}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Daily Progress */}
      <div className="p-4">
        <div className="bg-black/40 rounded-xl border border-purple-500/30 p-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold flex items-center">
              <Flame className="w-5 h-5 text-orange-500 mr-2" />
              Daily Streak: {userData.profile.dailyStreak} Days
            </h2>
          </div>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1 text-sm">
                <span>Daily Quests Progress</span>
                <span>{userData.dailyProgress.questsDone}/{userData.dailyProgress.questTarget}</span>
              </div>
              <div className="h-3 bg-purple-900/50 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transition-all duration-500"
                  style={{ width: `${(userData.dailyProgress.questsDone / userData.dailyProgress.questTarget) * 100}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="p-4 grid grid-cols-3 gap-3">
        <button className="bg-gradient-to-br from-red-500 to-red-700 p-4 rounded-xl flex flex-col items-center justify-center shadow-lg hover:from-red-600 hover:to-red-800 transition-all">
          <Gamepad className="w-6 h-6 mb-1" />
          <span className="text-sm font-bold">Battle</span>
        </button>
        <button className="bg-gradient-to-br from-blue-500 to-blue-700 p-4 rounded-xl flex flex-col items-center justify-center shadow-lg hover:from-blue-600 hover:to-blue-800 transition-all">
          <MessageCircle className="w-6 h-6 mb-1" />
          <span className="text-sm font-bold">Guild</span>
        </button>
        <button className="bg-gradient-to-br from-green-500 to-green-700 p-4 rounded-xl flex flex-col items-center justify-center shadow-lg hover:from-green-600 hover:to-green-800 transition-all">
          <BookOpen className="w-6 h-6 mb-1" />
          <span className="text-sm font-bold">Grimoire</span>
        </button>
      </div>

      {/* Active Quests */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-bold flex items-center">
            <Sparkles className="w-5 h-5 text-yellow-400 mr-2" />
            Active Quests
          </h2>
          <button className="text-sm text-purple-300 font-medium flex items-center">
            Quest Log <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        <div className="space-y-3">
          {userData.activeQuests.map((quest, index) => (
            <div key={index} className="bg-black/40 rounded-xl border border-purple-500/30 p-4">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-bold text-purple-200">{quest.title}</h3>
                  <div className="flex items-center space-x-2 text-sm">
                    <span className="px-2 py-1 bg-purple-500/20 rounded text-xs text-purple-200">
                      {quest.type}
                    </span>
                    <span className="text-purple-400">•</span>
                    <span className="text-purple-300 text-xs">{quest.difficulty}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-yellow-400 font-bold">{quest.reward}</div>
                  <div className="text-sm text-purple-300">{quest.timeLeft}</div>
                </div>
              </div>
              <div className="h-2 bg-purple-900/50 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-500"
                  style={{ width: `${quest.progress}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Community Events */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-bold flex items-center">
            <Users className="w-5 h-5 text-blue-400 mr-2" />
            Guild Events
          </h2>
          <button className="text-sm text-purple-300 font-medium flex items-center">
            All Events <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        <div className="space-y-3">
          {userData.communityHighlights.map((event, index) => (
            <div key={index} className="bg-black/40 rounded-xl border border-purple-500/30 p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-blue-200">{event.title}</h3>
                  <div className="flex items-center space-x-2 text-sm">
                    <span className="px-2 py-1 bg-blue-500/20 rounded text-xs text-blue-200">
                      {event.type}
                    </span>
                    <span className="text-blue-400">•</span>
                    <span className="text-blue-300">{event.participants} heroes</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-emerald-400 font-bold">{event.status}</div>
                  <div className="text-sm text-blue-300">In {event.startTime}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="p-4">
        <h2 className="text-lg font-bold mb-3 flex items-center">
          <Zap className="w-5 h-5 text-yellow-400 mr-2" />
          Adventure Log
        </h2>
        <div className="space-y-3">
          {userData.notifications.map((notification, index) => (
            <div key={index} className="bg-black/40 rounded-xl border border-purple-500/30 p-4 flex items-center space-x-3">
              {notification.type === 'achievement' ? (
                <div className="p-2 bg-yellow-500/20 rounded-lg">
                  <Trophy className="w-5 h-5 text-yellow-400" />
                </div>
              ) : (
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  <MessageCircle className="w-5 h-5 text-blue-400" />
                </div>
              )}
              <div>
                <p className="text-purple-100">{notification.message}</p>
                <p className="text-sm text-purple-300">{notification.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeTab;