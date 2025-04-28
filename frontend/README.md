# Truth and Dare Game - Frontend Documentation

This is the frontend part of the Truth and Dare Game project, built using React and TypeScript. The frontend interacts with the backend to provide a seamless gaming experience.

## Project Structure

- **public/**: Contains static files.
  - **index.html**: The main HTML file for the application.

- **src/**: Contains the source code for the React application.
  - **App.tsx**: The main component that sets up routing and renders the game interface.
  - **components/**: Contains reusable components.
    - **GameBoard.tsx**: Displays the game state and handles user interactions for truth or dare.
    - **PlayerList.tsx**: Displays the list of players currently in the game.
  - **context/**: Contains context providers for state management.
    - **GameContext.tsx**: Manages the global state of the game.
  - **hooks/**: Contains custom hooks for encapsulating logic.
    - **useGame.ts**: Encapsulates game logic and state management.
  - **styles/**: Contains CSS styles for the application.
    - **App.css**: Styles for the frontend application.
  - **utils/**: Contains utility functions.
    - **api.ts**: Functions for making API calls to the backend.

## Getting Started

1. **Installation**: 
   - Navigate to the `frontend` directory.
   - Run `npm install` to install the necessary dependencies.

2. **Running the Application**: 
   - Use `npm start` to run the application in development mode.
   - Open `http://localhost:3000` to view it in your browser.

## API Integration

The frontend communicates with the backend through API calls defined in `src/utils/api.ts`. Ensure the backend server is running to interact with the game.

## Contributing

Feel free to contribute to the project by submitting issues or pull requests. Make sure to follow the coding standards and best practices.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.