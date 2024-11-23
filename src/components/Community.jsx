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
  ChevronRight,
  Flame,
  MessageCircle,
  Zap
} from 'lucide-react';

const CommunityTab = () => {
  const [communityData] = useState({
    level: "Community Guide",
    communityCredits: 890,
    nextLevel: "Senior Guide",
    creditsToNextLevel: 110,
    badges: [
      { name: "First Adventurer", icon: Clock, color: "text-purple-400" },
      { name: "Community Helper", icon: Users, color: "text-blue-400" },
      { name: "Quest Mentor", icon: Star, color: "text-yellow-400" }
    ],
    ranks: [
      { name: "Community Member", required: 0, current: true },
      { name: "Community Guide", required: 500, current: true },
      { name: "Senior Guide", required: 1000, current: false },
      { name: "Community Leader", required: 2500, current: false }
    ],
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

  const features = [
    {
      id: 'chat',
      icon: MessageSquare,
      color: 'from-blue-500 to-blue-700',
      title: 'Community Chat',
      description: 'Connect with fellow questers',
      badge: communityData.unreadMessages > 0 ? `${communityData.unreadMessages} new` : null,
    },
    {
      id: 'events',
      icon: Calendar,
      color: 'from-green-500 to-green-700',
      title: 'Community Events',
      description: 'Weekly challenges & meetups',
      badge: communityData.upcomingEvents > 0 ? `${communityData.upcomingEvents} upcoming` : null,
    },
    {
      id: 'quests',
      icon: Target,
      color: 'from-purple-500 to-purple-700',
      title: 'Group Quests',
      description: 'Team up for rewards',
      badge: `${communityData.weeklyQuests} active`,
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900 text-white pb-20">
      {/* Hero Banner */}
      <div className="p-6 bg-gradient-to-br from-purple-900 to-indigo-900 border-b-2 border-purple-500/30">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-black/30 rounded-lg border border-purple-500/30">
              <Shield className="w-6 h-6 text-purple-400" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-200 to-purple-500 bg-clip-text text-transparent">
                {communityData.level}
              </h1>
              <p className="text-purple-200">{communityData.communityCredits} Community Credits</p>
            </div>
          </div>
          <div className="bg-black/30 px-4 py-2 rounded-lg border border-purple-500/30">
            <p className="text-sm text-purple-200">{communityData.onlineNow} Online Now</p>
            <p className="text-xs text-purple-400">of {communityData.activeUsers.toLocaleString()} members</p>
          </div>
        </div>
        
        <div className="bg-black/30 rounded-xl border border-purple-500/30 p-4">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-purple-200">Progress to {communityData.nextLevel}</span>
            <span className="text-purple-300">{communityData.creditsToNextLevel} credits to go</span>
          </div>
          <div className="h-3 bg-purple-900/50 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-500"
              style={{ width: `${(communityData.communityCredits / (communityData.communityCredits + communityData.creditsToNextLevel)) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="p-4 grid grid-cols-3 gap-3">
        {features.map((feature) => (
          <button
            key={feature.id}
            className={`bg-gradient-to-br ${feature.color} p-4 rounded-xl flex flex-col items-center justify-center shadow-lg hover:brightness-110 transition-all`}
          >
            <feature.icon className="w-6 h-6 mb-1" />
            <span className="text-sm font-bold">{feature.title}</span>
            {feature.badge && (
              <span className="mt-1 px-2 py-1 bg-black/20 rounded-full text-xs">
                {feature.badge}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Member Spotlight */}
      <div className="p-4">
        <div className="bg-black/40 rounded-xl border border-purple-500/30 p-4">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="font-bold text-lg flex items-center mb-2">
                <Trophy className="w-5 h-5 text-yellow-400 mr-2" />
                Member Spotlight
              </h2>
              <p className="text-xl font-bold text-purple-200">{communityData.spotlightMember.name}</p>
              <span className="inline-block px-2 py-1 bg-purple-500/20 rounded text-sm text-purple-200 mt-1">
                {communityData.spotlightMember.achievement}
              </span>
            </div>
            <div className="text-center bg-black/30 p-3 rounded-lg border border-purple-500/30">
              <p className="text-3xl font-bold text-yellow-400">{communityData.spotlightMember.questsCompleted}</p>
              <p className="text-sm text-purple-300">Quests</p>
            </div>
          </div>
        </div>
      </div>

      {/* Badges */}
      <div className="p-4">
        <h2 className="text-lg font-bold mb-3 flex items-center">
          <Medal className="w-5 h-5 text-yellow-400 mr-2" />
          Your Badges
        </h2>
        <div className="grid grid-cols-3 gap-3">
          {communityData.badges.map((badge, index) => (
            <div key={index} className="bg-black/40 rounded-xl border border-purple-500/30 p-4 text-center">
              <div className={`w-12 h-12 mx-auto bg-black/30 rounded-xl flex items-center justify-center mb-2 border border-purple-500/30`}>
                <badge.icon className={`w-6 h-6 ${badge.color}`} />
              </div>
              <p className="font-medium text-sm text-purple-200">{badge.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Rank Journey */}
      <div className="p-4">
        <h2 className="text-lg font-bold mb-3 flex items-center">
          <Crown className="w-5 h-5 text-yellow-400 mr-2" />
          Rank Journey
        </h2>
        <div className="bg-black/40 rounded-xl border border-purple-500/30 p-4">
          <div className="space-y-6">
            {communityData.ranks.map((rank, index) => (
              <div key={index} className="flex items-center">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center border ${
                  rank.current 
                    ? 'bg-purple-500/20 border-purple-500 text-purple-400' 
                    : 'bg-black/30 border-purple-500/30 text-purple-600'
                }`}>
                  <Shield className="w-5 h-5" />
                </div>
                <div className="ml-4 flex-1">
                  <p className={`font-bold ${rank.current ? 'text-purple-200' : 'text-purple-400'}`}>
                    {rank.name}
                  </p>
                  <p className="text-sm text-purple-400">{rank.required} credits</p>
                </div>
                {rank.current && <Crown className="w-5 h-5 text-yellow-400" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityTab;