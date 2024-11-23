import React, { useState } from 'react';
import { 
  Home,
  Trophy,
  Users,
  Gamepad,
  User,
  Scroll,
  Sword,
  Gem,
  Shield,
  Crown
} from 'lucide-react';
import ProfileTab from './Profile';
import CommunityTab from './Community';
import LeaderboardTab from './Leaderboard';
import HomeTab from '../pages/Home';

// Fixed Enchanted Tab Button Component
const TabButton = ({ item, isActive, onClick }) => (
  <div className={`relative group ${
    isActive 
      ? 'scale-110' 
      : 'hover:scale-105'
  } transition-all duration-300`}>
    {/* Magical Glow Effect */}
    <div className={`absolute inset-0 rounded-xl blur ${
      isActive 
        ? 'bg-purple-500/50' 
        : 'bg-transparent group-hover:bg-purple-500/30'
    }`} />
    
    {/* Button Content */}
    <button
      onClick={onClick}
      className={`relative flex flex-col items-center justify-center w-16 h-16 rounded-xl border 
        ${isActive
          ? 'bg-gradient-to-b from-purple-900 to-indigo-900 border-purple-400'
          : 'bg-black/40 border-purple-500/30 group-hover:border-purple-500/50'}`}
    >
      <item.icon className={`w-6 h-6 mb-1 ${
        isActive 
          ? 'text-purple-200' 
          : 'text-purple-400 group-hover:text-purple-300'
      }`} />
      <span className={`text-xs font-bold ${
        isActive 
          ? 'text-purple-200' 
          : 'text-purple-400 group-hover:text-purple-300'
      }`}>
        {item.label}
      </span>
    </button>
  </div>
);

const BottomNav = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { id: 'quests', icon: Scroll, label: 'Quests' },
    { id: 'leaderboard', icon: Crown, label: 'Glory' },
    { id: 'home', icon: Gem, label: 'Realm' },
    { id: 'community', icon: Shield, label: 'Guild' },
    { id: 'profile', icon: User, label: 'Hero' }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 pb-safe">
      {/* Navigation Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-purple-900/90 to-transparent blur-sm" />
      
      {/* Navigation Content */}
      <div className="relative flex justify-around items-center h-24 px-2">
        {navItems.map((item) => (
          <TabButton
            key={item.id}
            item={item}
            isActive={activeTab === item.id}
            onClick={() => setActiveTab(item.id)}
          />
        ))}
      </div>
    </div>
  );
};

// Placeholder Quest Tab with Fantasy Theme
const QuestsTab = () => (
  <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900 text-white p-4">
    <h2 className="text-2xl font-bold flex items-center mb-4">
      <Scroll className="w-6 h-6 text-yellow-400 mr-2" />
      Quest Grimoire
    </h2>
    <p className="text-purple-200">Your epic adventures await, brave hero...</p>
  </div>
);

const GemQuest = ({ user }) => {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <HomeTab />;
      case 'quests':
        return <QuestsTab />;
      case 'leaderboard':
        return <LeaderboardTab />;
      case 'community':
        return <CommunityTab />;
      case 'profile':
        return <ProfileTab user={user} />;
      default:
        return <HomeTab />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Main Content Area */}
      <div className="pb-24">
        {renderContent()}
      </div>
      
      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
};

export default GemQuest;