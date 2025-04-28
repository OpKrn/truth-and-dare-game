import React, { createContext, useContext, useState } from 'react';

interface GameContextType {
    players: string[];
    currentTurn: number;
    gameState: string;
    addPlayer: (player: string) => void;
    nextTurn: () => void;
    updateGameState: (state: string) => void;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [players, setPlayers] = useState<string[]>([]);
    const [currentTurn, setCurrentTurn] = useState<number>(0);
    const [gameState, setGameState] = useState<string>('waiting');

    const addPlayer = (player: string) => {
        setPlayers((prevPlayers) => [...prevPlayers, player]);
    };

    const nextTurn = () => {
        setCurrentTurn((prevTurn) => (prevTurn + 1) % players.length);
    };

    const updateGameState = (state: string) => {
        setGameState(state);
    };

    return (
        <GameContext.Provider value={{ players, currentTurn, gameState, addPlayer, nextTurn, updateGameState }}>
            {children}
        </GameContext.Provider>
    );
};

export const useGame = (): GameContextType => {
    const context = useContext(GameContext);
    if (!context) {
        throw new Error('useGame must be used within a GameProvider');
    }
    return context;
};