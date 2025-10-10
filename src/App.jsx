import { useState } from 'react';
import './App.css';

import Portfolio from './components/Portfolio';
import Projects from './components/Projects';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="font-sans">
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/projects" element={<Projects />} /> 
        </Routes>
      </div>
    </>
  )
}

export default App
