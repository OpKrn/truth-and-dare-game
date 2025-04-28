class GameController {
    private gameService: GameService;

    constructor(gameService: GameService) {
        this.gameService = gameService;
    }

    public startGame(req: Request, res: Response): void {
        const gameId = this.gameService.createGame();
        res.status(201).json({ gameId });
    }

    public submitTruthOrDare(req: Request, res: Response): void {
        const { gameId, playerId, action } = req.body;
        const result = this.gameService.resolveAction(gameId, playerId, action);
        res.status(200).json(result);
    }

    public getGameStatus(req: Request, res: Response): void {
        const { gameId } = req.params;
        const status = this.gameService.getGameStatus(gameId);
        res.status(200).json(status);
    }
}

export default GameController;