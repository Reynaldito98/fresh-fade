// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./index.css";

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Navbar />
        <Home />
        <Services />
        <About />
        <Contact /> 
        <Footer />
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;