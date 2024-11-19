import React, { useState } from 'react';
import {
  Users,
  MessageSquare,
  Trophy,
  Star,
  Clock,
  Crown,
  Building2,
  Lock,
  Shield,
  Calendar,
  Gift,
  Medal,
  Sparkles,
  Target,
  Flame,
  ChevronRight
} from 'lucide-react';

const CommunityTab = () => {
  const [communityData] = useState({
    // Original community status data
    level: "Community Guide",
    communityCredits: 890,
    nextLevel: "Senior Guide",
    creditsToNextLevel: 110,
    badges: [
      { name: "First Adventurer", icon: Clock, color: "text-purple-500" },
      { name: "Community Helper", icon: Users, color: "text-blue-500" },
      { name: "Quest Mentor", icon: Star, color: "text-yellow-500" }
    ],
    ranks: [
      { name: "Community Member", required: 0, current: true },
      { name: "Community Guide", required: 500, current: true },
      { name: "Senior Guide", required: 1000, current: false },
      { name: "Community Leader", required: 2500, current: false }
    ],
    // Additional stats from second version
    activeUsers: 1234,
    onlineNow: 89,
    unreadMessages: 3,
    upcomingEvents: 2,
    weeklyQuests: 5,
    spotlightMember: {
      name: "Sarah Chen",
      achievement: "Quest Master",
      questsCompleted: 147
    }
  });

  const [selectedFeature, setSelectedFeature] = useState(null);

  const features = [
    {
      id: 'chat',
      icon: MessageSquare,
      color: 'text-blue-500',
      title: 'Community Chat',
      description: 'Connect with fellow questers',
      badge: communityData.unreadMessages > 0 ? `${communityData.unreadMessages} new` : null,
      rightIcon: Trophy
    },
    {
      id: 'events',
      icon: Calendar,
      color: 'text-green-500',
      title: 'Community Events',
      description: 'Weekly challenges & meetups',
      badge: communityData.upcomingEvents > 0 ? `${communityData.upcomingEvents} upcoming` : null,
      rightIcon: Sparkles
    },
    {
      id: 'quests',
      icon: Target,
      color: 'text-purple-500',
      title: 'Community Quests',
      description: 'Group missions & rewards',
      badge: `${communityData.weeklyQuests} active`,
      rightIcon: Medal
    },
    {
      id: 'rewards',
      icon: Gift,
      color: 'text-red-500',
      title: 'Community Rewards',
      description: 'Exclusive perks & items',
      rightIcon: Star
    },
    {
      id: 'groups',
      icon: Building2,
      color: 'text-gray-500',
      title: 'Adventure Groups',
      description: 'Coming soon',
      disabled: true,
      rightIcon: Lock
    }
  ];

  return (
    <div className="pb-20">
      {/* Stats Header */}
      <div className="p-4 bg-gradient-to-br from-blue-500 to-blue-600 text-white">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Users className="w-5 h-5" />
            <span>{communityData.onlineNow} online</span>
          </div>
          <div className="text-sm">
            Total Members: {communityData.activeUsers.toLocaleString()}
          </div>
        </div>
      </div>

      {/* Community Status */}
      <div className="p-4">
        <div className="bg-white rounded-xl shadow">
          <div className="p-4 border-b flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Shield className="w-6 h-6 text-blue-500" />
              <div>
                <p className="font-medium">{communityData.level}</p>
                <p className="text-sm text-gray-500">Community Rank</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-bold">{communityData.communityCredits}</p>
              <p className="text-sm text-gray-500">Community Credits</p>
            </div>
          </div>
          <div className="p-4 border-b">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-500 h-2 rounded-full" 
                style={{ width: `${(communityData.communityCredits / (communityData.communityCredits + communityData.creditsToNextLevel)) * 100}%` }}
              />
            </div>
            <p className="text-sm text-gray-500 mt-2">
              {communityData.creditsToNextLevel} credits until {communityData.nextLevel}
            </p>
          </div>
        </div>
      </div>

      {/* Spotlight Member */}
      <div className="p-4">
        <div className="bg-white rounded-xl shadow p-4 border-l-4 border-yellow-500">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-lg flex items-center">
                <Trophy className="w-5 h-5 text-yellow-500 mr-2" />
                Member Spotlight
              </h3>
              <p className="text-sm text-gray-600">{communityData.spotlightMember.name}</p>
              <span className="inline-block px-2 py-1 text-xs bg-yellow-100 text-yellow-800 rounded mt-1">
                {communityData.spotlightMember.achievement}
              </span>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">Quests Completed</p>
              <p className="text-2xl font-bold text-yellow-600">{communityData.spotlightMember.questsCompleted}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Community Features */}
      <div className="p-4">
        <h2 className="text-lg font-bold mb-3">Community</h2>
        <div className="bg-white rounded-xl shadow">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const RightIcon = feature.rightIcon;
            
            return (
              <button
                key={feature.id}
                className={`w-full p-4 flex items-center justify-between 
                  ${index !== features.length - 1 ? 'border-b' : ''}
                  ${feature.disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50'}
                  ${selectedFeature === feature.id ? 'bg-gray-50' : ''}`}
                onClick={() => !feature.disabled && setSelectedFeature(feature.id)}
                disabled={feature.disabled}
              >
                <div className="flex items-center space-x-3">
                  <Icon className={`w-6 h-6 ${feature.color}`} />
                  <div className="text-left">
                    <span className="font-medium">{feature.title}</span>
                    <p className="text-sm text-gray-500">{feature.description}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  {feature.badge && (
                    <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded">
                      {feature.badge}
                    </span>
                  )}
                  <RightIcon className="w-5 h-5 text-gray-400" />
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Badges Section */}
      <div className="p-4">
        <h2 className="text-lg font-bold mb-3">Badges</h2>
        <div className="bg-white rounded-xl shadow">
          {communityData.badges.map((badge, index) => (
            <div 
              key={index}
              className={`p-4 flex items-center justify-between ${
                index !== communityData.badges.length - 1 ? 'border-b' : ''
              }`}
            >
              <div className="flex items-center space-x-3">
                <badge.icon className={`w-6 h-6 ${badge.color}`} />
                <span className="font-medium">{badge.name}</span>
              </div>
              <Crown className="w-5 h-5 text-yellow-500" />
            </div>
          ))}
        </div>
      </div>

      {/* Rank Progress */}
      <div className="p-4">
        <h2 className="text-lg font-bold mb-3">Ranks</h2>
        <div className="bg-white rounded-xl shadow">
          {communityData.ranks.map((rank, index) => (
            <div 
              key={index}
              className={`p-4 flex items-center justify-between ${
                index !== communityData.ranks.length - 1 ? 'border-b' : ''
              }`}
            >
              <div className="flex items-center space-x-3">
                <Shield className={`w-6 h-6 ${rank.current ? 'text-blue-500' : 'text-gray-400'}`} />
                <div>
                  <p className="font-medium">{rank.name}</p>
                  <p className="text-sm text-gray-500">{rank.required} credits required</p>
                </div>
              </div>
              {rank.current && <Trophy className="w-5 h-5 text-yellow-500" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommunityTab;