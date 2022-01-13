import './App.css';
import { Home } from './components/main/Home';
import { Navbar } from './components/Navbar';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { Apps } from './components/main/Apps';
import { Toolset } from './components/main/Toolset';

function App() {
  return (
    <Router>
      <Navbar>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/apps" component={Apps} />
          <Route exact path="/app-stack" component={Toolset} />
          <Redirect to="/" />
        </Switch>
      </Navbar>
    </Router>
  );
}

export default App;
