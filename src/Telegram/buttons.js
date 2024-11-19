// src/telegram/buttons.js
export const setMainButton = ({
  text,
  color = "#2481cc",
  textColor = "#ffffff",
  onClick,
  isVisible = true,
  isActive = true,
}) => {
  try {
    if (!window.Telegram?.WebApp?.MainButton) {
      throw new Error("Main button not supported");
    }

    const button = window.Telegram.WebApp.MainButton;

    // Check if properties exist before setting them
    if ("text" in button) button.text = text;
    if ("color" in button) button.color = color;
    if ("textColor" in button) button.textColor = textColor;
    if ("isVisible" in button) button.isVisible = isVisible;
    if ("isActive" in button) button.isActive = isActive;

    if (onClick && button.onClick) {
      button.onClick(onClick);
    }
  } catch (error) {
    console.error("Main button operation failed:", error.message);
  }
};
