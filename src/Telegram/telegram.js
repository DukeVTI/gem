// src/telegram.js

// Check if we're in the Telegram Web App environment
const telegram = window.Telegram?.WebApp;

export const initTelegramWebApp = () => {
    try {
        if (!telegram) {
            throw new Error('Telegram WebApp is not available');
        }

        // Basic initialization
        telegram.ready();
        telegram.expand();

        // Version-safe initialization
        const version = Number(telegram.version) || 0;

        // We'll check if features are supported before using them
        if (telegram.setHeaderColor && version > 6.0) {
            try {
                telegram.setHeaderColor('#2481cc');
            } catch (error) {
                console.warn('Failed to set header color:', error);
            }
        }

        if (telegram.enableClosingConfirmation && version > 6.0) {
            try {
                telegram.enableClosingConfirmation();
            } catch (error) {
                console.warn('Failed to enable closing confirmation:', error);
            }
        }

        return true;
    } catch (error) {
        console.error('Telegram WebApp initialization failed:', error.message);
        return false;
    }
};

export const getTelegramUser = () => {
    try {
        if (!telegram?.initDataUnsafe?.user) {
            // Check if we're in development environment
            if (process.env.NODE_ENV === 'development') {
                return {
                    id: 12345,
                    first_name: 'Test',
                    last_name: 'User',
                    username: 'testuser',
                    language_code: 'en'
                };
            }
            throw new Error('User data not available');
        }
        return telegram.initDataUnsafe.user;
    } catch (error) {
        console.error('Failed to get user data:', error.message);
        return null;
    }
};

export const getInitData = () => {
    try {
        const initData = telegram?.initData;
        if (!initData) {
            throw new Error('Init data not available');
        }
        return initData;
    } catch (error) {
        console.error('Failed to get init data:', error.message);
        return null;
    }
};

export const handleBackButton = (show = true) => {
    try {
        if (!telegram?.BackButton) {
            throw new Error('Back button not supported');
        }
        
        if (show) {
            telegram.BackButton.show();
        } else {
            telegram.BackButton.hide();
        }
    } catch (error) {
        console.error('Back button operation failed:', error.message);
    }
};

export const setMainButton = ({
    text,
    color = '#2481cc',
    textColor = '#ffffff',
    onClick,
    isVisible = true,
    isActive = true,
}) => {
    try {
        if (!telegram?.MainButton) {
            throw new Error('Main button not supported');
        }
        
        const button = telegram.MainButton;
        
        // Check if properties exist before setting them
        if ('text' in button) button.text = text;
        if ('color' in button) button.color = color;
        if ('textColor' in button) button.textColor = textColor;
        if ('isVisible' in button) button.isVisible = isVisible;
        if ('isActive' in button) button.isActive = isActive;

        if (onClick && button.onClick) {
            button.onClick(onClick);
        }
    } catch (error) {
        console.error('Main button operation failed:', error.message);
    }
};

export const hapticFeedback = {
    impact: {
        light: () => {
            try {
                telegram?.HapticFeedback?.impactOccurred?.('light');
            } catch (error) {
                console.warn('Haptic feedback failed:', error);
            }
        },
        medium: () => {
            try {
                telegram?.HapticFeedback?.impactOccurred?.('medium');
            } catch (error) {
                console.warn('Haptic feedback failed:', error);
            }
        },
        heavy: () => {
            try {
                telegram?.HapticFeedback?.impactOccurred?.('heavy');
            } catch (error) {
                console.warn('Haptic feedback failed:', error);
            }
        },
    },
    notification: {
        success: () => {
            try {
                telegram?.HapticFeedback?.notificationOccurred?.('success');
            } catch (error) {
                console.warn('Haptic feedback failed:', error);
            }
        },
        warning: () => {
            try {
                telegram?.HapticFeedback?.notificationOccurred?.('warning');
            } catch (error) {
                console.warn('Haptic feedback failed:', error);
            }
        },
        error: () => {
            try {
                telegram?.HapticFeedback?.notificationOccurred?.('error');
            } catch (error) {
                console.warn('Haptic feedback failed:', error);
            }
        },
    }
};

export const getThemeParams = () => {
    try {
        const themeParams = telegram?.themeParams;
        if (!themeParams) {
            throw new Error('Theme params not available');
        }
        return themeParams;
    } catch (error) {
        console.error('Failed to get theme params:', error.message);
        return null;
    }
};

export const isExpanded = () => {
    try {
        return telegram?.isExpanded || false;
    } catch (error) {
        console.error('Failed to check expanded state:', error.message);
        return false;
    }
};

// Export the telegram instance for direct access if needed
export { telegram };