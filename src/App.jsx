import { useState } from 'react';
import './App.css';

import { Routes, Route } from 'react-router-dom';

import Portfolio from './components/Portfolio';
import About from './components/About';
import Projects from './components/Projects';
import Post from './components/Post';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="font-sans">
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} /> 
          <Route path="/post" element={<Post />} />
        </Routes>
      </div>
    </>
  )
}

export default App
