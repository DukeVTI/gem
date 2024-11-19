// src/components/ProfileHeader.jsx
import React from "react";
import { Gem, Crown } from "lucide-react";

const ProfileHeader = ({ userData }) => {
  const progressPercentage = (userData.xp / userData.nextLevel) * 100;

  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 text-white rounded-t-lg">
      <div className="flex justify-between items-center">
        {/* Left side - Username and Level */}
        <div>
          <h1 className="text-xl font-bold">{userData.username}</h1>
          <div className="flex items-center gap-2">
            <Crown size={16} />
            <span>Level {userData.level}</span>
          </div>
        </div>

        {/* Right side - Gem Points */}
        <div className="flex flex-col items-end">
          <div className="flex items-center gap-2">
            <Gem size={16} />
            <span>{userData.gemPoints} GP</span>
          </div>
        </div>
      </div>

      {/* XP Progress Bar */}
      <div className="mt-2 bg-white/20 rounded-full h-2">
        <div
          className="bg-yellow-400 h-2 rounded-full transition-all duration-300"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
      <div className="text-sm mt-1">
        XP: {userData.xp}/{userData.nextLevel}
      </div>
    </div>
  );
};

export default ProfileHeader;
