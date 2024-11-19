import React, { useState } from 'react';
import { 
  Crown,
  Coins,
  Gamepad,
  Star,
  Award,
  Users,
  ChevronRight,
  Shield,
  Bell,
  Settings
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
    <div className="pb-20">
      {/* Profile Header */}
      <div className="p-4">
        <div className="bg-white rounded-xl shadow">
          <div className="p-4 border-b flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Crown className="w-6 h-6 text-blue-500" />
              <div>
                <p className="font-medium">{userData.username}</p>
                <p className="text-sm text-gray-500">{userData.title}</p>
              </div>
            </div>
            <img 
              src={userData.avatar} 
              alt="Profile" 
              className="w-10 h-10 rounded-full border-4 border-white"
            />
          </div>
        </div>
      </div>

      {/* Currency Section */}
      <div className="p-4">
        <h2 className="text-lg font-bold mb-3">Wallet</h2>
        <div className="bg-white rounded-xl shadow">
          <div className="p-4 border-b flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Coins className="w-6 h-6 text-yellow-500" />
              <div>
                <p className="font-medium">Gem Points</p>
                <p className="text-sm text-gray-500">Available balance</p>
              </div>
            </div>
            <p className="font-bold">{userData.currencies.gemPoints.toLocaleString()}</p>
          </div>
          <div className="p-4 border-b flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Gamepad className="w-6 h-6 text-purple-500" />
              <div>
                <p className="font-medium">Quest Tokens</p>
                <p className="text-sm text-gray-500">For competitions</p>
              </div>
            </div>
            <p className="font-bold">{userData.currencies.questTokens}</p>
          </div>
          <div className="p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Star className="w-6 h-6 text-blue-500" />
              <div>
                <p className="font-medium">Community Credits</p>
                <p className="text-sm text-gray-500">Reputation points</p>
              </div>
            </div>
            <p className="font-bold">{userData.currencies.communityCredits}</p>
          </div>
        </div>
      </div>

      {/* Badges Section */}
      <div className="p-4">
        <h2 className="text-lg font-bold mb-3">Badges</h2>
        <div className="flex flex-wrap gap-2">
          {userData.badges.map((badge, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="p-4">
        <h2 className="text-lg font-bold mb-3">Recent Activity</h2>
        <div className="bg-white rounded-xl shadow">
          {userData.recentActivity.map((activity, index) => (
            <div 
              key={index} 
              className={`p-4 flex items-center justify-between ${
                index !== userData.recentActivity.length - 1 ? 'border-b' : ''
              }`}
            >
              <div className="flex items-center space-x-3">
                {activity.type === 'quest' && <Gamepad className="w-5 h-5 text-purple-500" />}
                {activity.type === 'achievement' && <Award className="w-5 h-5 text-yellow-500" />}
                {activity.type === 'social' && <Users className="w-5 h-5 text-blue-500" />}
                <div>
                  <p className="font-medium">{activity.text}</p>
                  <p className="text-sm text-gray-500">{activity.time}</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>
          ))}
        </div>
      </div>

      {/* Security & Settings Links */}
      <div className="p-4">
        <div className="bg-white rounded-xl shadow">
          <button className="w-full p-4 border-b flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Shield className="w-6 h-6 text-gray-500" />
              <span className="font-medium">Security Settings</span>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>
          <button className="w-full p-4 border-b flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Bell className="w-6 h-6 text-gray-500" />
              <span className="font-medium">Notifications</span>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>
          <button className="w-full p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Settings className="w-6 h-6 text-gray-500" />
              <span className="font-medium">General Settings</span>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileTab;