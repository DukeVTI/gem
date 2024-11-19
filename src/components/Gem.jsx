import React, { useState } from 'react';
import { 
  Home,
  Trophy,
  Users,
  Gamepad,
  User
} from 'lucide-react';
import ProfileTab from './Profile';
import CommunityTab from './Community';
import LeaderboardTab from './Leaderboard';
/* import HomeTab from './Home'; */
import HomeTab from '../pages/Home';

// Extracted Tab Button Component
const TabButton = ({ item, isActive, onClick }) => (
    <button
        onClick={onClick}
        className={`flex flex-col items-center justify-center p-2 rounded-full w-12 h-12 transition-colors duration-200
            ${isActive
                ? 'bg-blue-500 text-white hover:bg-blue-600'
                : 'bg-white text-gray-500 hover:bg-gray-100'}`}
    >
        <item.icon className="w-6 h-6" />
    </button>
);

const BottomNav = ({ activeTab, setActiveTab }) => {
    const navItems = [
        { id: 'quests', icon: Gamepad, label: 'Quests' },
        { id: 'leaderboard', icon: Trophy, label: 'Ranks' },
        { id: 'home', icon: Home, label: 'Home' },
        { id: 'community', icon: Users, label: 'Social' },
        { id: 'profile', icon: User, label: 'Profile' }
    ];

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 pb-safe">
            <div className="flex justify-around items-center h-16">
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

// Tab Components
/* const HomeTab = () => (
    <div className="p-4 bg-white">
        <h2 className="text-xl font-bold mb-2">Home</h2>
        <p>This is the home content area.</p>
    </div>
); */

const QuestsTab = () => (
    <div className="p-4 bg-white">
        <h2 className="text-xl font-bold mb-2">Quests</h2>
        <p>This is the quests content area.</p>
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
        <div className="min-h-screen bg-gray-100">
            {/* Main Content Area */}
            <div className="pb-5">
                {renderContent()}
            </div>
            
            <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
    );
};

export default GemQuest;