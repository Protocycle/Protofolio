import './App.css';
import { Home } from './components/main/Home';
import { PageWrapper } from './components/PageWrapper';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { Apps } from './components/main/Apps';
import { Toolset } from './components/main/Toolset';

function App() {
  return (
    <div className="App">
      <Router>
        <PageWrapper>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/apps" component={Apps} />
            <Route exact path="/app-stack" component={Toolset} />
            <Redirect to="/" />
          </Switch>
        </PageWrapper>
      </Router>
    </div>
  );
}

export default App;
