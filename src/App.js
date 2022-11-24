import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home/Home";
import Projects from "./Components/Projects/Projects";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <nav className="bg-black text-white pt-16 flex gap-x-8 ">
          <Link className="ml-[5vw]" to="/">Home</Link>
          <Link to="/projects">Projects</Link>
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
