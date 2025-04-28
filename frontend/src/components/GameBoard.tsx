import React, { useContext, useEffect } from 'react';
import { GameContext } from '../context/GameContext';
import { useGame } from '../hooks/useGame';

const GameBoard: React.FC = () => {
    const { gameState, currentTurn } = useContext(GameContext);
    const { fetchGameStatus } = useGame();

    useEffect(() => {
        fetchGameStatus();
    }, [fetchGameStatus]);

    const handleTruthOrDare = (action: string) => {
        // Logic to handle truth or dare action
    };

    return (
        <div className="game-board">
            <h1>Truth or Dare Game</h1>
            <div className="game-status">
                <p>Current Turn: {currentTurn}</p>
                <p>Game State: {gameState}</p>
            </div>
            <div className="actions">
                <button onClick={() => handleTruthOrDare('truth')}>Truth</button>
                <button onClick={() => handleTruthOrDare('dare')}>Dare</button>
            </div>
        </div>
    );
};

export default GameBoard;