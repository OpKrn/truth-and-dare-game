import { Router } from 'express';
import GameController from '../controllers/gameController';

const router = Router();
const gameController = new GameController();

export function setGameRoutes(app: Router) {
    app.post('/api/game/start', gameController.startGame.bind(gameController));
    app.post('/api/game/submit', gameController.submitTruthOrDare.bind(gameController));
    app.get('/api/game/status', gameController.getGameStatus.bind(gameController));
}