import './App.css';
import { Home } from './components/main/Home';
import { Wrapper } from './components/Wrapper';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import { Apps } from './components/main/Apps';
import { Toolset } from './components/main/Toolset';
import { About } from './components/main/About';

function App() {
  return (
    <Router>
      <Wrapper>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/apps" element={<Apps />} />
          <Route path="/app-stack" element={<Toolset />} />
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </Wrapper>
    </Router>
  );
}

export default App;
