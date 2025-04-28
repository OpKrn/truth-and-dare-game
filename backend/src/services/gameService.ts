export class GameService {
    private games: Map<string, any>;

    constructor() {
        this.games = new Map();
    }

    createGame(gameId: string): void {
        if (this.games.has(gameId)) {
            throw new Error('Game already exists');
        }
        this.games.set(gameId, {
            players: [],
            currentTurn: 0,
            gameState: 'waiting',
        });
    }

    addPlayer(gameId: string, playerName: string): void {
        const game = this.games.get(gameId);
        if (!game) {
            throw new Error('Game not found');
        }
        if (game.players.includes(playerName)) {
            throw new Error('Player already in the game');
        }
        game.players.push(playerName);
    }

    resolveAction(gameId: string, action: string): string {
        const game = this.games.get(gameId);
        if (!game) {
            throw new Error('Game not found');
        }
        // Logic to resolve action (truth or dare)
        return `Resolved action: ${action}`;
    }

    getGameStatus(gameId: string): any {
        const game = this.games.get(gameId);
        if (!game) {
            throw new Error('Game not found');
        }
        return game;
    }
}