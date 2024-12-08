import React, { useState } from 'react';
import { 
  Crown,
  Coins,
  Target,
  Star,
  Award,
  Users,
  ChevronRight,
  Shield,
  Bell,
  Settings,
  Medal
} from 'lucide-react';

const ProfileTab = () => {
  const [userData] = useState({
    username: "DukeVTI",
    title: "Gem Explorer",
    avatar: "/api/placeholder/100/100",
    stats: {
      totalQuests: 145,
      gamesWon: 23,
      referrals: 12,
      achievements: 34
    },
    currencies: {
      gemPoints: 12500,
      questTokens: 45,
      communityCredits: 890
    },
    badges: ["OG Member", "Quest Pioneer", "Top Contributor"],
    recentActivity: [
      { type: "quest", text: "Completed Daily Quest", time: "2h ago" },
      { type: "achievement", text: "Earned New Badge", time: "5h ago" },
      { type: "social", text: "Referred New User", time: "1d ago" }
    ]
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900 text-white pb-20">
      {/* Hero Banner */}
      <div className="p-6 bg-gradient-to-br from-purple-900 to-indigo-900 border-b-2 border-purple-500/30">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-black/30 rounded-lg border border-purple-500/30">
              <Crown className="w-6 h-6 text-purple-400" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-200 to-purple-500 bg-clip-text text-transparent">
                {userData.username}
              </h1>
              <p className="text-purple-200">{userData.title}</p>
            </div>
          </div>
          <img 
            src={userData.avatar} 
            alt="Profile" 
            className="w-16 h-16 rounded-xl border-2 border-purple-500/30 bg-black/30"
          />
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-4 gap-3">
          <div className="bg-black/30 rounded-lg p-3 border border-purple-500/30">
            <Target className="w-5 h-5 text-purple-400 mb-1" />
            <div className="text-xl font-bold">{userData.stats.totalQuests}</div>
            <div className="text-xs text-purple-300">Quests</div>
          </div>
          <div className="bg-black/30 rounded-lg p-3 border border-purple-500/30">
            <Star className="w-5 h-5 text-yellow-400 mb-1" />
            <div className="text-xl font-bold">{userData.stats.gamesWon}</div>
            <div className="text-xs text-purple-300">Wins</div>
          </div>
          <div className="bg-black/30 rounded-lg p-3 border border-purple-500/30">
            <Users className="w-5 h-5 text-blue-400 mb-1" />
            <div className="text-xl font-bold">{userData.stats.referrals}</div>
            <div className="text-xs text-purple-300">Referrals</div>
          </div>
          <div className="bg-black/30 rounded-lg p-3 border border-purple-500/30">
            <Medal className="w-5 h-5 text-purple-400 mb-1" />
            <div className="text-xl font-bold">{userData.stats.achievements}</div>
            <div className="text-xs text-purple-300">Achieved</div>
          </div>
        </div>
      </div>

      {/* Currency Section */}
      <div className="p-4">
        <h2 className="text-lg font-bold mb-3 flex items-center">
          <Coins className="w-5 h-5 text-yellow-400 mr-2" />
          Your Wallet
        </h2>
        <div className="space-y-3">
          <div className="bg-black/40 rounded-xl border border-purple-500/30 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-yellow-400/10 rounded-lg">
                  <Coins className="w-5 h-5 text-yellow-400" />
                </div>
                <div>
                  <p className="text-purple-200">Gem Points</p>
                  <p className="text-sm text-purple-400">Available balance</p>
                </div>
              </div>
              <p className="text-xl font-bold text-purple-200">{userData.currencies.gemPoints.toLocaleString()}</p>
            </div>
          </div>
          
          <div className="bg-black/40 rounded-xl border border-purple-500/30 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-purple-400/10 rounded-lg">
                  <Target className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <p className="text-purple-200">Quest Tokens</p>
                  <p className="text-sm text-purple-400">For competitions</p>
                </div>
              </div>
              <p className="text-xl font-bold text-purple-200">{userData.currencies.questTokens}</p>
            </div>
          </div>
          
          <div className="bg-black/40 rounded-xl border border-purple-500/30 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-400/10 rounded-lg">
                  <Star className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-purple-200">Community Credits</p>
                  <p className="text-sm text-purple-400">Reputation points</p>
                </div>
              </div>
              <p className="text-xl font-bold text-purple-200">{userData.currencies.communityCredits}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Badges Section */}
      <div className="p-4">
        <h2 className="text-lg font-bold mb-3 flex items-center">
          <Medal className="w-5 h-5 text-yellow-400 mr-2" />
          Your Badges
        </h2>
        <div className="flex flex-wrap gap-2">
          {userData.badges.map((badge, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-purple-500/20 text-purple-200 rounded-lg text-sm font-medium border border-purple-500/30"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="p-4">
        <h2 className="text-lg font-bold mb-3 flex items-center">
          <Award className="w-5 h-5 text-yellow-400 mr-2" />
          Recent Activity
        </h2>
        <div className="bg-black/40 rounded-xl border border-purple-500/30 divide-y divide-purple-500/30">
          {userData.recentActivity.map((activity, index) => (
            <div key={index} className="p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-purple-500/20">
                  {activity.type === 'quest' && <Target className="w-5 h-5 text-purple-400" />}
                  {activity.type === 'achievement' && <Award className="w-5 h-5 text-yellow-400" />}
                  {activity.type === 'social' && <Users className="w-5 h-5 text-blue-400" />}
                </div>
                <div>
                  <p className="text-purple-200">{activity.text}</p>
                  <p className="text-sm text-purple-400">{activity.time}</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-purple-400" />
            </div>
          ))}
        </div>
      </div>

      {/* Settings Links */}
      <div className="p-4">
        <h2 className="text-lg font-bold mb-3 flex items-center">
          <Settings className="w-5 h-5 text-yellow-400 mr-2" />
          Settings
        </h2>
        <div className="bg-black/40 rounded-xl border border-purple-500/30 divide-y divide-purple-500/30">
          <button className="w-full p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Shield className="w-5 h-5 text-purple-400" />
              <span className="text-purple-200">Security Settings</span>
            </div>
            <ChevronRight className="w-5 h-5 text-purple-400" />
          </button>
          <button className="w-full p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Bell className="w-5 h-5 text-purple-400" />
              <span className="text-purple-200">Notifications</span>
            </div>
            <ChevronRight className="w-5 h-5 text-purple-400" />
          </button>
          <button className="w-full p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Settings className="w-5 h-5 text-purple-400" />
              <span className="text-purple-200">General Settings</span>
            </div>
            <ChevronRight className="w-5 h-5 text-purple-400" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileTab;