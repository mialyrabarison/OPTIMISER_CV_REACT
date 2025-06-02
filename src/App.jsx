import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Realisations from "./components/Realisations";
import Blog from "./components/Blog";
import MentionLegal from "./components/MentionLegal";
import { Routes, Route } from 'react-router-dom';
import Contact from "./components/Contact";
import Services from "./components/Services";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Réalisations" element={<Realisations />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Mentions-legals" element={<MentionLegal />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Services" element={<Services />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
