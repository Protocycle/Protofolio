import './App.css';
import { Home } from './components/main/Home';
import { Wrapper } from './components/Wrapper';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { Apps } from './components/main/Apps';
import { Toolset } from './components/main/Toolset';
import { About } from './components/main/About';

function App() {
  return (
    <Router>
      <Wrapper>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/apps" component={Apps} />
          <Route exact path="/app-stack" component={Toolset} />
          <Redirect to="/home" />
        </Switch>
      </Wrapper>
    </Router>
  );
}

export default App;
