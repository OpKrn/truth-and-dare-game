export class GameModel {
    players: string[];
    currentTurn: number;
    gameState: 'waiting' | 'in-progress' | 'finished';

    constructor() {
        this.players = [];
        this.currentTurn = 0;
        this.gameState = 'waiting';
    }

    addPlayer(player: string) {
        this.players.push(player);
    }

    nextTurn() {
        this.currentTurn = (this.currentTurn + 1) % this.players.length;
    }

    setGameState(state: 'waiting' | 'in-progress' | 'finished') {
        this.gameState = state;
    }
}