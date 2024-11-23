// src/App.jsx
import { useEffect, useState } from 'react';
import { initTelegramWebApp, getTelegramUser } from './Telegram/telegram';
import GemQuest from './components/Gem';

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const initApp = async () => {
            try {
                // Initialize Telegram Web App
                const initialized = initTelegramWebApp();
                if (!initialized) {
                    throw new Error('Failed to initialize Telegram Web App');
                }

                // Get user data
                const userData = await getTelegramUser();
                if (!userData) {
                    throw new Error('Failed to get user data');
                }
                
                setUser(userData);
                console.log('Telegram user:', userData);
            } catch (err) {
                setError(err.message);
                console.error('Initialization error:', err);
            } finally {
                // Simulate a longer loading time
                await new Promise(resolve => setTimeout(resolve, 10000));
                setIsLoading(false);
            }
        };

        initApp();
    }, []);

    if (error) {
        return (
            <div className="flex items-center justify-center min-h-screen p-4 bg-red-50">
                <div className="text-center">
                    <h1 className="text-xl font-bold text-red-600 mb-2">Error</h1>
                    <p className="text-red-500">{error}</p>
                </div>
            </div>
        );
    }

    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-gray-600">Loading...</p>
                </div>
            </div>
        );
    }

    return (
        <div>
            <GemQuest user={user} />
        </div>
    );
}

export default App;