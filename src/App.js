import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import Test from './components/Test';
import Counter from './components/Counter';
import Board from './components/Board';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li className="home">
              <Link to="/">Home</Link>
            </li>
            <li className="about">
              <Link to="/about">About</Link>
            </li>
            <li className="test">
              <Link to="/test">Test</Link>
            </li>
            <li className="users">
              <Link to="/users">Users</Link>
            </li>
            <li className="counter">
              <Link to="/counter">counter</Link>
            </li>
            <li className="board">
              <Link to="/board">Board</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users userId={'Jin'} />
          </Route>
          <Route path="/test">
            <Test />
          </Route>
          <Route path="/counter">
            <Counter />
          </Route>
          <Route path="/board">
            <Board />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
