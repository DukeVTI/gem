import React, { useState } from 'react';
import { Trophy, Coins, Users, Star, Award, Gamepad, Clock, Flame, BookOpen, Heart, Zap, Crown } from 'lucide-react';

const Dashboard = () => {
  const [playerStats] = useState({
    level: 5,
    xp: 2750,
    xpNeeded: 5000,
    gemPoints: 1250,
    questTokens: 8,
    communityCredits: 320,
    referrals: 12,
    completedQuests: 25,
    titles: ['Early Adopter', 'Quest Pioneer'],
    nextCompetition: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
    mentorshipStatus: 'Available for Mentoring',
    educationProgress: 75,
    seasonalProgress: 45,
    activeQuests: [
      { name: 'Daily Login Streak', progress: 5, total: 7 },
      { name: 'Social Share Challenge', progress: 2, total: 5 },
      { name: 'Community Helper', progress: 8, total: 10 }
    ],
    leaderboard: [
      { name: 'CryptoMaster', score: 2500 },
      { name: 'QuestChamp', score: 2200 },
      { name: 'BlockExplorer', score: 2100 }
    ],
    upcomingEvents: [
      { name: 'Winter Quest Festival', date: '2024-12-20' },
      { name: 'Community Challenge', date: '2024-12-15' }
    ],
    tokenomics: {
      gpCirculation: 1000000,
      gpLocked: 500000,
      burnRate: '2%',
      stakingRewards: '5%'
    }
  });

  const ProgressBar = ({ value, max, color = 'blue' }) => {
    const percentage = (value / max) * 100;
    return (
      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className={`h-full bg-${color}-500 rounded-full transition-all duration-300`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    );
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const calculateTimeLeft = (date) => {
    const difference = new Date(date) - new Date();
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    return `${days}d ${hours}h`;
  };

  return (
    <div className="w-full max-w-6xl p-4 space-y-4">
      {/* Player Overview */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center gap-2 mb-4">
          <Trophy className="text-yellow-500" />
          <h2 className="text-xl font-bold">Level {playerStats.level} Explorer</h2>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Experience Points (XP)</span>
            <span>{playerStats.xp} / {playerStats.xpNeeded}</span>
          </div>
          <ProgressBar value={playerStats.xp} max={playerStats.xpNeeded} />
        </div>
      </div>

      {/* Currency Overview with Tokenomics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center gap-2 mb-4">
            <Coins className="text-yellow-500" />
            <div>
              <p className="text-sm font-medium">Gem Points (GP)</p>
              <p className="text-2xl font-bold">{playerStats.gemPoints}</p>
            </div>
          </div>
          <div className="text-sm space-y-1">
            <p>Circulation: {playerStats.tokenomics.gpCirculation.toLocaleString()}</p>
            <p>Locked: {playerStats.tokenomics.gpLocked.toLocaleString()}</p>
            <p>Burn Rate: {playerStats.tokenomics.burnRate}</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center gap-2">
            <Gamepad className="text-purple-500" />
            <div>
              <p className="text-sm font-medium">Quest Tokens (QT)</p>
              <p className="text-2xl font-bold">{playerStats.questTokens}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center gap-2">
            <Star className="text-blue-500" />
            <div>
              <p className="text-sm font-medium">Community Credits (CC)</p>
              <p className="text-2xl font-bold">{playerStats.communityCredits}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Competition & Events */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Next Competition */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center gap-2 mb-4">
            <Crown className="text-yellow-500" />
            <h2 className="text-xl font-bold">Next Competition</h2>
          </div>
          <div className="space-y-2">
            <p className="text-sm">Time Left: {calculateTimeLeft(playerStats.nextCompetition)}</p>
            <h3 className="font-medium mt-4 mb-2">Current Leaders</h3>
            {playerStats.leaderboard.map((leader, index) => (
              <div key={index} className="flex justify-between items-center">
                <span className="text-sm">{leader.name}</span>
                <span className="text-sm font-medium">{leader.score}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center gap-2 mb-4">
            <Clock className="text-purple-500" />
            <h2 className="text-xl font-bold">Upcoming Events</h2>
          </div>
          <div className="space-y-4">
            {playerStats.upcomingEvents.map((event, index) => (
              <div key={index} className="flex justify-between items-center">
                <span className="text-sm font-medium">{event.name}</span>
                <span className="text-sm">{formatDate(event.date)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Educational Progress */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center gap-2 mb-4">
          <BookOpen className="text-green-500" />
          <h2 className="text-xl font-bold">Crypto Education Progress</h2>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Course Progress</span>
            <span>{playerStats.educationProgress}%</span>
          </div>
          <ProgressBar value={playerStats.educationProgress} max={100} color="green" />
        </div>
      </div>

      {/* Community Engagement */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Mentorship Status */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center gap-2 mb-4">
            <Heart className="text-red-500" />
            <h2 className="text-xl font-bold">Community Role</h2>
          </div>
          <div className="space-y-2">
            <p className="text-sm font-medium">Status: {playerStats.mentorshipStatus}</p>
            <div className="flex items-center gap-2 mt-4">
              <Users className="text-blue-500" />
              <span className="text-sm">{playerStats.referrals} Referrals</span>
            </div>
          </div>
        </div>

        {/* Seasonal Progress */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center gap-2 mb-4">
            <Flame className="text-orange-500" />
            <h2 className="text-xl font-bold">Season Progress</h2>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Season 1 Progress</span>
              <span>{playerStats.seasonalProgress}%</span>
            </div>
            <ProgressBar value={playerStats.seasonalProgress} max={100} color="orange" />
          </div>
        </div>
      </div>

      {/* Active Quests */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center gap-2 mb-4">
          <Zap className="text-yellow-500" />
          <h2 className="text-xl font-bold">Active Quests</h2>
        </div>
        <div className="space-y-4">
          {playerStats.activeQuests.map((quest, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>{quest.name}</span>
                <span>{quest.progress} / {quest.total}</span>
              </div>
              <ProgressBar value={quest.progress} max={quest.total} />
            </div>
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center gap-2 mb-4">
          <Award className="text-purple-500" />
          <h2 className="text-xl font-bold">Achievements</h2>
        </div>
        <div className="mt-4">
          <p className="text-sm font-medium mb-2">Earned Titles:</p>
          <div className="flex flex-wrap gap-2">
            {playerStats.titles.map((title, index) => (
              <span 
                key={index}
                className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-sm"
              >
                {title}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;