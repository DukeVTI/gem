import React, { useState } from 'react';
import {
  Trophy,
  Target,
  Users,
  Coins,
  Star,
  Clock,
  Crown,
  Building2,
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
    <div className="pb-20">
      {/* Welcome Header */}
      <div className="p-4 bg-gradient-to-br from-blue-500 to-purple-600 text-white">
        <div className="flex justify-between items-start mb-6">
          <div>
            <div className="flex items-center space-x-2 mb-1">
              <div className="text-2xl">{userData.profile.avatarBadge}</div>
              <h1 className="text-xl font-bold">{userData.profile.name}</h1>
            </div>
            <div className="flex items-center space-x-2 text-white/80">
              <Shield className="w-4 h-4" />
              <span>Level {userData.profile.level}</span>
              <span>•</span>
              <span>{userData.profile.title}</span>
            </div>
          </div>
          <div className="text-right">
            <div className="flex items-center space-x-1 text-yellow-300">
              <Flame className="w-4 h-4" />
              <span>{userData.profile.dailyStreak} day streak</span>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-white/10 rounded-lg p-2">
            <div className="flex items-center space-x-1 text-xs opacity-80">
              <Coins className="w-3 h-3" />
              <span>GP Balance</span>
            </div>
            <div className="text-lg font-bold">{userData.stats.gemPoints.toLocaleString()}</div>
          </div>
          <div className="bg-white/10 rounded-lg p-2">
            <div className="flex items-center space-x-1 text-xs opacity-80">
              <Target className="w-3 h-3" />
              <span>Quest Tokens</span>
            </div>
            <div className="text-lg font-bold">{userData.stats.questTokens}</div>
          </div>
          <div className="bg-white/10 rounded-lg p-2">
            <div className="flex items-center space-x-1 text-xs opacity-80">
              <Users className="w-3 h-3" />
              <span>Com. Credits</span>
            </div>
            <div className="text-lg font-bold">{userData.stats.communityCredits}</div>
          </div>
        </div>
      </div>

      {/* Daily Progress */}
      <div className="p-4">
        <h2 className="text-lg font-bold mb-3">Today's Progress</h2>
        <div className="bg-white rounded-xl shadow p-4">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm text-gray-600">Daily Quests</span>
                <span className="text-sm font-medium">{userData.dailyProgress.questsDone}/{userData.dailyProgress.questTarget}</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div 
                  className="bg-green-500 h-2 rounded-full" 
                  style={{ width: `${(userData.dailyProgress.questsDone / userData.dailyProgress.questTarget) * 100}%` }}
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm text-gray-600">GP Earned</span>
                <span className="text-sm font-medium">{userData.dailyProgress.gpEarned} GP</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div 
                  className="bg-blue-500 h-2 rounded-full" 
                  style={{ width: '50%' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="p-4">
        <div className="grid grid-cols-3 gap-3">
          <button className="bg-purple-100 p-3 rounded-xl flex flex-col items-center justify-center">
            <Gamepad className="w-6 h-6 text-purple-600 mb-1" />
            <span className="text-sm font-medium text-purple-700">Play Now</span>
          </button>
          <button className="bg-blue-100 p-3 rounded-xl flex flex-col items-center justify-center">
            <MessageCircle className="w-6 h-6 text-blue-600 mb-1" />
            <span className="text-sm font-medium text-blue-700">Community</span>
          </button>
          <button className="bg-green-100 p-3 rounded-xl flex flex-col items-center justify-center">
            <BookOpen className="w-6 h-6 text-green-600 mb-1" />
            <span className="text-sm font-medium text-green-700">Learn</span>
          </button>
        </div>
      </div>

      {/* Active Quests */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-bold">Active Quests</h2>
          <button className="text-sm text-purple-600 font-medium flex items-center">
            View All <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        <div className="space-y-3">
          {userData.activeQuests.map((quest, index) => (
            <div key={index} className="bg-white rounded-xl shadow p-4">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-semibold">{quest.title}</h3>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs">
                      {quest.type}
                    </span>
                    <span>•</span>
                    <span className="text-xs">{quest.difficulty}</span>
                  </div>
                </div>
                <div className="text-right text-sm">
                  <div className="text-purple-600 font-medium">{quest.reward}</div>
                  <div className="text-gray-500">{quest.timeLeft}</div>
                </div>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div 
                  className="bg-purple-500 h-2 rounded-full" 
                  style={{ width: `${quest.progress}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Community Highlights */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-bold">Community Highlights</h2>
          <button className="text-sm text-purple-600 font-medium flex items-center">
            Join Events <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        <div className="space-y-3">
          {userData.communityHighlights.map((event, index) => (
            <div key={index} className="bg-white rounded-xl shadow p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold">{event.title}</h3>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">
                      {event.type}
                    </span>
                    <span>•</span>
                    <span>{event.participants} participating</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-green-600">{event.status}</div>
                  <div className="text-xs text-gray-500">Starts in {event.startTime}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Rewards */}
      <div className="p-4">
        <h2 className="text-lg font-bold mb-3">Quick Rewards</h2>
        <div className="bg-white rounded-xl shadow">
          {userData.rewardOpportunities.map((opportunity, index) => (
            <div 
              key={index} 
              className={`p-4 flex items-center justify-between ${
                index !== userData.rewardOpportunities.length - 1 ? 'border-b' : ''
              }`}
            >
              <div>
                <div className="font-medium">{opportunity.title}</div>
                <div className="flex items-center space-x-2 text-sm">
                  <span className="text-gray-500">{opportunity.type}</span>
                  <span>•</span>
                  <span className="text-gray-500">{opportunity.difficulty}</span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-purple-600 font-medium">{opportunity.reward}</span>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Notifications */}
      <div className="p-4">
        <h2 className="text-lg font-bold mb-3">Recent Activity</h2>
        <div className="bg-white rounded-xl shadow divide-y">
          {userData.notifications.map((notification, index) => (
            <div key={index} className="p-4 flex items-center space-x-3">
              {notification.type === 'achievement' ? (
                <div className="p-2 bg-yellow-100 rounded-lg">
                  <Trophy className="w-5 h-5 text-yellow-600" />
                </div>
              ) : (
                <div className="p-2 bg-blue-100 rounded-lg">
                  <MessageCircle className="w-5 h-5 text-blue-600" />
                </div>
              )}
              <div className="flex-1">
                <p className="text-gray-900">{notification.message}</p>
                <p className="text-sm text-gray-500">{notification.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeTab;