import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './Components/LandingPage/LandingPage'
import Quiz from './Components/Quiz/Quiz';
import Finish from './Components/Finish/Finish';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/finish" element={<Finish />} />
      </Routes>
    </Router>
  )
}

export default App