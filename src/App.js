import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home/Home";
import Projects from "./Components/Projects/Projects";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <nav
          className="pt-5 flex gap-x-8 absolute w-screen drop-shadow-lg bg-black text-white">
          <Link className="ml-[5vw] font-mono" to="/">
            Home
          </Link>
          <Link className="font-mono" to="/projects">
            Projects
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
