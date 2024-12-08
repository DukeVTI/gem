import React, { useState } from "react";
import {
  Wallet,
  Store,
  Crown,
  Scroll,
  Coins,
  Users,
  Gift,
  ChevronRight,
  Star,
} from "lucide-react";

const StorePage = () => {
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("titles");
  const [conversionAmount, setConversionAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("gemPoints");
  const [toCurrency, setToCurrency] = useState("communityCredits");

  const [storeData] = useState({
    userBalance: {
      gemPoints: 12500,
      questTokens: 45,
      communityCredits: 890,
    },
    titles: [
      {
        id: 1,
        name: "Dragon Slayer",
        price: 1000,
        currency: "gemPoints",
        rarity: "Legendary",
        description: "A title earned by the bravest warriors",
      },
      {
        id: 2,
        name: "Mystic Guide",
        price: 750,
        currency: "communityCredits",
        rarity: "Epic",
        description: "For those who guide others through the realm",
      },
      {
        id: 3,
        name: "Realm Protector",
        price: 500,
        currency: "gemPoints",
        rarity: "Rare",
        description: "Guardian of the digital kingdoms",
      },
    ],
    exclusiveQuests: [
      {
        id: 1,
        name: "The Crystal Caverns",
        price: 200,
        currency: "questTokens",
        duration: "7 days",
        rewards: ["2000 GP", "Special Badge"],
        description: "Explore the mysterious crystal caves",
      },
      {
        id: 2,
        name: "Dragon's Treasury",
        price: 150,
        currency: "questTokens",
        duration: "5 days",
        rewards: ["1500 GP", "Unique Title"],
        description: "Face the dragon and claim its treasure",
      },
    ],
    referralTiers: [
      {
        id: 1,
        name: "Community Supporter",
        price: 500,
        benefits: ["Support Badge", "Special Thanks"],
        description: "Support the growth of our community",
      },
      {
        id: 2,
        name: "Growth Champion",
        price: 1000,
        benefits: ["Unique Title", "Community Recognition"],
        description: "Be a champion of community expansion",
      },
    ],
    conversionRates: {
      gemPoints: {
        communityCredits: 0.8,
        questTokens: 1.2,
      },
      communityCredits: {
        gemPoints: 1.25,
        questTokens: 1.5,
      },
      questTokens: {
        gemPoints: 0.83,
        communityCredits: 0.67,
      },
    },
  });

  const getCurrencyIcon = (currency) => {
    switch (currency) {
      case "gemPoints":
        return <Coins className="w-5 h-5 text-yellow-400" />;
      case "questTokens":
        return <Scroll className="w-5 h-5 text-purple-400" />;
      case "communityCredits":
        return <Star className="w-5 h-5 text-blue-400" />;
      default:
        return <Coins className="w-5 h-5 text-yellow-400" />;
    }
  };

  const getCurrencyName = (currency) => {
    switch (currency) {
      case "gemPoints":
        return "Gem Points";
      case "questTokens":
        return "Quest Tokens";
      case "communityCredits":
        return "Community Credits";
      default:
        return currency;
    }
  };

  const handlePurchase = (item, type) => {
    if (!isWalletConnected) {
      alert("Please connect your TON wallet first");
      return;
    }
    // Handle purchase logic
  };

  const handleConversion = () => {
    if (!isWalletConnected) {
      alert("Please connect your TON wallet first");
      return;
    }

    const amount = parseFloat(conversionAmount);
    if (isNaN(amount) || amount <= 0) {
      alert("Please enter a valid amount");
      return;
    }

    const availableBalance = storeData.userBalance[fromCurrency];
    if (amount > availableBalance) {
      alert("Insufficient balance for conversion");
      return;
    }

    // Calculate conversion
    const rate = storeData.conversionRates[fromCurrency][toCurrency];
    const convertedAmount = amount * rate;

    alert(
      `Converting ${amount} ${getCurrencyName(fromCurrency)} to ${convertedAmount.toFixed(2)} ${getCurrencyName(toCurrency)}`
    );
    // Handle actual conversion logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900 text-white pb-8">
      {/* Header Section - Simplified for mobile */}
      <div className="sticky top-0 z-50 p-4 md:p-6 bg-gradient-to-br from-purple-900 to-indigo-900 shadow-lg backdrop-blur-sm bg-opacity-90">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:justify-between">
            <div className="flex items-center gap-3 w-full sm:w-auto justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-black/30 backdrop-blur-sm border border-purple-500/30">
                  <Store className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <h1 className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-purple-500">
                    Mystic Marketplace
                  </h1>
                </div>
              </div>
              <button
                onClick={() => setIsWalletConnected(!isWalletConnected)}
                className={`px-4 py-2 text-sm rounded-lg flex items-center gap-2 transition-all duration-300
                  ${isWalletConnected
                    ? "bg-purple-500/20 border-purple-500 text-purple-200"
                    : "bg-purple-600 hover:bg-purple-500 border-purple-500"
                  } border`}
              >
                <Wallet className="w-4 h-4" />
                <span className="hidden sm:inline">
                  {isWalletConnected ? "Connected" : "Connect Wallet"}
                </span>
              </button>
            </div>
          </div>

          {/* Balance Cards - Scrollable on mobile */}
          <div className="mt-4 flex gap-3 overflow-x-auto pb-2 snap-x snap-mandatory scrollbar-hide">
            <div className="snap-center min-w-[200px] p-3 rounded-xl bg-black/30 backdrop-blur-sm border border-purple-500/30">
              <div className="flex items-center gap-2">
                <Coins className="w-4 h-4 text-yellow-400" />
                <span className="text-sm text-purple-200">Gem Points</span>
              </div>
              <p className="text-lg font-bold mt-1">
                {storeData.userBalance.gemPoints.toLocaleString()}
              </p>
            </div>

            <div className="snap-center min-w-[200px] p-3 rounded-xl bg-black/30 backdrop-blur-sm border border-purple-500/30">
              <div className="flex items-center gap-2">
                <Scroll className="w-4 h-4 text-purple-400" />
                <span className="text-sm text-purple-200">Quest Tokens</span>
              </div>
              <p className="text-lg font-bold mt-1">
                {storeData.userBalance.questTokens.toLocaleString()}
              </p>
            </div>

            <div className="snap-center min-w-[200px] p-3 rounded-xl bg-black/30 backdrop-blur-sm border border-purple-500/30">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-purple-200">Community Credits</span>
              </div>
              <p className="text-lg font-bold mt-1">
                {storeData.userBalance.communityCredits.toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 mt-6">
        {/* Category Tabs - Scrollable on mobile */}
        <div className="flex gap-2 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
          {[
            { id: "titles", icon: <Crown className="w-4 h-4" />, label: "Titles" },
            { id: "quests", icon: <Scroll className="w-4 h-4" />, label: "Quests" },
            { id: "referrals", icon: <Users className="w-4 h-4" />, label: "Referrals" },
            { id: "convert", icon: <Gift className="w-4 h-4" />, label: "Convert" },
          ].map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`snap-center flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 whitespace-nowrap text-sm
                ${selectedCategory === category.id
                  ? "bg-purple-500/20 border-purple-500 text-purple-200"
                  : "bg-black/30 border-purple-500/30 text-purple-300"
                } border`}
            >
              {category.icon}
              <span>{category.label}</span>
            </button>
          ))}
        </div>

        {/* Items Display */}
        <div className="mt-4 space-y-3">
          {selectedCategory === "titles" &&
            storeData.titles.map((title) => (
              <div
                key={title.id}
                className="p-4 rounded-xl bg-black/40 backdrop-blur-sm border border-purple-500/30"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-purple-200">{title.name}</h3>
                    <span className="inline-block px-2 py-1 mt-2 rounded-full text-xs font-medium bg-purple-500/20 text-purple-300">
                      {title.rarity}
                    </span>
                    <p className="mt-2 text-sm text-purple-300">{title.description}</p>
                  </div>
                  <button
                    onClick={() => handlePurchase(title, "title")}
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-500 rounded-lg transition-colors w-full sm:w-auto"
                  >
                    <span className="font-bold">{title.price}</span>
                    {getCurrencyIcon(title.currency)}
                  </button>
                </div>
              </div>
            ))}

          {/* ... (Similar modifications for quests and referrals sections) */}

          {selectedCategory === "convert" && (
            <div className="p-4 rounded-xl bg-black/40 backdrop-blur-sm border border-purple-500/30">
              <h3 className="text-lg font-bold text-purple-200 mb-4">
                Currency Conversion
              </h3>

              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <label className="block text-sm text-purple-300 mb-2">From</label>
                    <select
                      value={fromCurrency}
                      onChange={(e) => setFromCurrency(e.target.value)}
                      className="w-full bg-black/30 border border-purple-500/30 rounded-lg px-3 py-2 text-sm text-purple-200"
                    >
                      <option value="gemPoints">Gem Points</option>
                      <option value="questTokens">Quest Tokens</option>
                      <option value="communityCredits">Community Credits</option>
                    </select>
                  </div>

                  <div className="hidden sm:flex items-center justify-center">
                    <ChevronRight className="w-5 h-5 text-purple-400" />
                  </div>

                  <div className="flex-1">
                    <label className="block text-sm text-purple-300 mb-2">To</label>
                    <select
                      value={toCurrency}
                      onChange={(e) => setToCurrency(e.target.value)}
                      className="w-full bg-black/30 border border-purple-500/30 rounded-lg px-3 py-2 text-sm text-purple-200"
                    >
                      <option value="communityCredits">Community Credits</option>
                      <option value="gemPoints">Gem Points</option>
                      <option value="questTokens">Quest Tokens</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-purple-300 mb-2">Amount</label>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      value={conversionAmount}
                      onChange={(e) => setConversionAmount(e.target.value)}
                      placeholder="Enter amount"
                      className="flex-1 bg-black/30 border border-purple-500/30 rounded-lg px-3 py-2 text-sm text-purple-200"
                    />
                    <button
                      onClick={handleConversion}
                      className="px-4 py-2 bg-purple-600 hover:bg-purple-500 rounded-lg transition-colors"
                    >
                      Convert
                    </button>
                  </div>
                </div>

                {fromCurrency && toCurrency && (
                  <div className="p-3 rounded-lg bg-purple-500/10 border border-purple-500/30">
                    <p className="text-sm text-purple-200">
                      <span className="font-medium">Rate:</span> 1 {getCurrencyName(fromCurrency)} = {storeData.conversionRates[fromCurrency][toCurrency]} {getCurrencyName(toCurrency)}
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StorePage;