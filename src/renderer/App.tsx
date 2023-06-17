import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './Reset.css';
import './App.css';

export function Home() {
  return <h1>Hello</h1>;
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
