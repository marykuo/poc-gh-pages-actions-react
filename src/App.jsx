import { Suspense, lazy } from "react";
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import PageLoader from "./components/PageLoader";
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
        {/* use Suspense to wrap and provide a loading fallback */}
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />

            {/* catch-all route for undefined paths */}
            <Route path="*" element={<Home />} />
          </Routes>
        </Suspense>
      </main>
    </HashRouter>
  );
}

export default App;
