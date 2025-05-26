import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/homepage.css";

import Footer from "./components/footer";
import Header from "./components/header";
import Intro from "./components/intro.jsx";

import About from "./pages/About/about.jsx";
import Media from "./pages/Media/media.jsx";
import Shows from "./pages/Shows/shows.jsx";
import Home from "./pages/home.jsx";

function App() {
  const [showHomepage, setShowHomePage] = useState(false);
  useEffect(() => {   //hämtar in useStatet i useEffecten och sätter det som true, därefter så ska showHomepage köras.
    const timerHomepage = setTimeout(() => {
      setShowHomePage(true);
    }, 1500); // visa startsidan efter 1.5 sekunder

    return () => clearTimeout(timerHomepage); // rensa timern om komponenten avmonteras
  }, []);

  return (
    <>
      <Router>
        {!showHomepage && <Intro />}
        {showHomepage && (
          <div className="appWrapper">
            <Header />
            <main className="mainContent">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/media" element={<Media />} />
                <Route path="/shows" element={<Shows />} />
              </Routes>
            </main>
            <Footer />
          </div>
        )}
      </Router>
    </>
  );
}
export default App;
