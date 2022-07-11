import { useState } from 'react';
import './App.css';
import Login from './components/login/login';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <div className="App">
      <p> Hello </p>
      <Login setIsAuthenticated={setIsAuthenticated} />
      {isAuthenticated && <p>Yes authenticated</p>}
    </div>
  );
}

export default App;
