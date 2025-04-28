# Truth and Dare Game Backend

This is the backend for the Truth and Dare Game project. It is built using Node.js and TypeScript, utilizing Express for handling HTTP requests.

## Project Structure

- **src/**: Contains the source code for the backend application.
  - **app.ts**: Entry point of the application, initializes the Express app and sets up middleware.
  - **controllers/**: Contains the game logic and player interaction methods.
    - **gameController.ts**: Handles game-related requests.
  - **models/**: Defines the structure of the game data.
    - **gameModel.ts**: Represents the game state and player information.
  - **routes/**: Defines the API endpoints for the game.
    - **gameRoutes.ts**: Links routes to the controller methods.
  - **services/**: Contains business logic for managing game state.
    - **gameService.ts**: Manages game creation, player addition, and action resolution.

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the backend directory:
   ```
   cd truth-and-dare-game/backend
   ```
3. Install dependencies:
   ```
   npm install
   ```

## Running the Application

To start the backend server, run:
```
npm start
```

The server will be running on `http://localhost:3000` by default.

## API Endpoints

- **POST /game/start**: Starts a new game.
- **POST /game/submit**: Submits a truth or dare action.
- **GET /game/status**: Retrieves the current game status.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.