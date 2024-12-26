import { BrowserRouter, Routes, Route } from "react-router-dom";
import Research_Work from './components/Research_Work.jsx';
import Home from './components/Home.jsx';
import Projects from './components/Projects.jsx';
import Experience from "./components/Experience.jsx";
import Navbar from "./components/Navbar.jsx";
import Contact from "./components/Contact.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exp" element={<Experience />} />
        <Route path="/research_work" element={<Research_Work />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
