# Truth and Dare Game

Welcome to the Truth and Dare Game project! This is a multiplayer game that allows players to engage in fun and exciting truth or dare challenges. The project is structured into a backend and a frontend, each serving distinct purposes.

## Project Structure

```
truth-and-dare-game
├── backend
│   ├── src
│   │   ├── app.ts
│   │   ├── controllers
│   │   │   └── gameController.ts
│   │   ├── models
│   │   │   └── gameModel.ts
│   │   ├── routes
│   │   │   └── gameRoutes.ts
│   │   └── services
│   │       └── gameService.ts
│   ├── package.json
│   ├── tsconfig.json
│   └── README.md
├── frontend
│   ├── public
│   │   └── index.html
│   ├── src
│   │   ├── App.tsx
│   │   ├── components
│   │   │   ├── GameBoard.tsx
│   │   │   └── PlayerList.tsx
│   │   ├── context
│   │   │   └── GameContext.tsx
│   │   ├── hooks
│   │   │   └── useGame.ts
│   │   ├── styles
│   │   │   └── App.css
│   │   └── utils
│   │       └── api.ts
│   ├── package.json
│   ├── tsconfig.json
│   └── README.md
├── README.md
└── .gitignore
```

## Backend

The backend is built using TypeScript and Express. It handles the game logic, player interactions, and data management.

- **Entry Point**: `backend/src/app.ts`
- **Controllers**: `backend/src/controllers/gameController.ts`
- **Models**: `backend/src/models/gameModel.ts`
- **Routes**: `backend/src/routes/gameRoutes.ts`
- **Services**: `backend/src/services/gameService.ts`

## Frontend

The frontend is developed using React. It provides the user interface for players to interact with the game.

- **Main Component**: `frontend/src/App.tsx`
- **Game Board**: `frontend/src/components/GameBoard.tsx`
- **Player List**: `frontend/src/components/PlayerList.tsx`
- **Context Management**: `frontend/src/context/GameContext.tsx`
- **Custom Hooks**: `frontend/src/hooks/useGame.ts`
- **Styles**: `frontend/src/styles/App.css`
- **API Utilities**: `frontend/src/utils/api.ts`

## Getting Started

To get started with the project, clone the repository and install the necessary dependencies for both the backend and frontend.

### Backend

1. Navigate to the `backend` directory.
2. Run `npm install` to install dependencies.
3. Start the server with `npm start`.

### Frontend

1. Navigate to the `frontend` directory.
2. Run `npm install` to install dependencies.
3. Start the React application with `npm start`.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.