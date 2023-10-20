import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './pages/user/Login.js';
import Ab from './pages/Ab.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/a" element={<Ab />} />
      </Routes>
    </Router>
  );
}

export default App;
