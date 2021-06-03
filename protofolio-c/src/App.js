import './App.css';
import { Home } from './components/main/Home';
import { PageWrapper } from './components/PageWrapper';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <PageWrapper>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
      </PageWrapper>
    </div>
  );
}

export default App;
