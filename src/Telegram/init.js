// src/telegram/init.js
export const initTelegramWebApp = () => {
  try {
    if (!window.Telegram?.WebApp) {
      throw new Error("Telegram WebApp is not available");
    }

    // Basic initialization
    window.Telegram.WebApp.ready();
    window.Telegram.WebApp.expand();

    // Version-safe initialization
    const version = Number(window.Telegram.WebApp.version) || 0;

    // Set header color if supported
    if (window.Telegram.WebApp.setHeaderColor && version > 6.0) {
      window.Telegram.WebApp.setHeaderColor("#2481cc");
    }

    // Enable closing confirmation if supported
    if (window.Telegram.WebApp.enableClosingConfirmation && version > 6.0) {
      window.Telegram.WebApp.enableClosingConfirmation();
    }

    return true;
  } catch (error) {
    console.error("Telegram WebApp initialization failed:", error.message);
    return false;
  }
};
