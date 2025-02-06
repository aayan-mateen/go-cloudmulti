import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sites from './components/Sites';
import VirtualMachines from './components/VirtualMachines';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/sites">Sites</a>
            </li>
            <li>
              <a href="/virtual-machines">Virtual Machines</a>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/sites">
            <Sites />
          </Route>
          <Route path="/virtual-machines">
            <VirtualMachines />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Welcome to go-cloudmulti!</h2>;
}

export default App;
