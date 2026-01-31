import { lazy } from "react";
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

// use lazy loading for better performance
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));

function App() {
  return (
    <HashRouter>
      <header>
        <nav>
          <Link to="/">首頁</Link> | <Link to="/about">關於</Link>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          {/* catch-all route for undefined paths */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
    </HashRouter>
  );
}

export default App;
