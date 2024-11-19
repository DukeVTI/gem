// src/telegram/haptic.js
export const hapticFeedback = {
  impact: {
    light: () => {
      try {
        window.Telegram?.WebApp?.HapticFeedback?.impactOccurred?.("light");
      } catch (error) {
        console.warn("Haptic feedback failed:", error);
      }
    },
    medium: () => {
      try {
        window.Telegram?.WebApp?.HapticFeedback?.impactOccurred?.("medium");
      } catch (error) {
        console.warn("Haptic feedback failed:", error);
      }
    },
    heavy: () => {
      try {
        window.Telegram?.WebApp?.HapticFeedback?.impactOccurred?.("heavy");
      } catch (error) {
        console.warn("Haptic feedback failed:", error);
      }
    },
  },
  notification: {
    success: () => {
      try {
        window.Telegram?.WebApp?.HapticFeedback?.notificationOccurred?.(
          "success"
        );
      } catch (error) {
        console.warn("Haptic feedback failed:", error);
      }
    },
    warning: () => {
      try {
        window.Telegram?.WebApp?.HapticFeedback?.notificationOccurred?.(
          "warning"
        );
      } catch (error) {
        console.warn("Haptic feedback failed:", error);
      }
    },
    error: () => {
      try {
        window.Telegram?.WebApp?.HapticFeedback?.notificationOccurred?.(
          "error"
        );
      } catch (error) {
        console.warn("Haptic feedback failed:", error);
      }
    },
  },
};
