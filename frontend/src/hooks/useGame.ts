import { useState, useEffect } from 'react';
import { fetchGameStatus, submitAction } from '../utils/api';

const useGame = () => {
    const [gameState, setGameState] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getGameStatus = async () => {
            try {
                const status = await fetchGameStatus();
                setGameState(status);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        getGameStatus();
    }, []);

    const handleAction = async (action) => {
        setLoading(true);
        try {
            const updatedState = await submitAction(action);
            setGameState(updatedState);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    return { gameState, loading, error, handleAction };
};

export default useGame;