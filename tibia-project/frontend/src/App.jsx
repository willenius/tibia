import { useState } from 'react'
import './styles/homepage.css'
import Footer from './components/footer'
import Header from './components/header'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from './pages/About/about.jsx';
import Media from './pages/Media/media.jsx';
import Shows from './pages/Shows/shows.jsx';
import Home from './pages/home.jsx';
function App() {
  return (
    <>
    <Router>
    <div className='appWrapper'>
    <Header />
    <main className='mainContent'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/media" element={<Media />} />
        <Route path="/shows" element={<Shows />} />
      </Routes>
    </main>
    <Footer />
    
    </div>
    </Router>
    </>
  )
}
export default App
