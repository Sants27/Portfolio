// import Navbar from "./components/Navbar"
// import Hero from "./components/Hero"
// import Skills from "./components/Skills"
// import Portfolio from "./components/Portfolio"
// import Contact from "./components/Contact"
// import Footer from "./components/Footer"
// export default function App() {
//   return (
//     <>
//       <Navbar />
//       <Hero/>
//       <Skills/>
//       <Portfolio/>
//       <Contact/>
//       <Footer/>
//     </>
//   )
// }

import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
// import Certification from "./pages/Certification";
import Contact from "./pages/Contact";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        {/* <Route path="/certification" element={<Certification />} /> */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}