import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GameBoard from './components/GameBoard';
import PlayerList from './components/PlayerList';
import { GameProvider } from './context/GameContext';
import './styles/App.css';

const App: React.FC = () => {
  return (
    <GameProvider>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={GameBoard} />
            <Route path="/players" component={PlayerList} />
          </Switch>
        </div>
      </Router>
    </GameProvider>
  );
};

export default App;