// src/telegram/user.js
export const getTelegramUser = () => {
  try {
    if (!window.Telegram?.WebApp?.initDataUnsafe?.user) {
      // Check if we're in a development environment
      if (process.env.NODE_ENV === "development") {
        return {
          id: 12345,
          first_name: "Test",
          last_name: "User",
          username: "testuser",
          language_code: "en",
        };
      }
      throw new Error("User data not available");
    }
    return window.Telegram.WebApp.initDataUnsafe.user;
  } catch (error) {
    console.error("Failed to get user data:", error.message);
    return null;
  }
};
