import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import './Navbar.css';

export default function Navbar() {
  const { t, setLang, lang } = useLanguage();
  return (
    <nav>
      <h1>FreshFade</h1>
      <div>
        <a href="#home">{t.home}</a>
        <a href="#services">{t.services}</a>
        <a href="#about">{t.about}</a>
        <a href="#contact">{t.contact}</a>
      </div>
      <button onClick={() => setLang(lang === "en" ? "es" : "en")}>
        {lang === "en" ? "ES" : "EN"}
      </button>
    </nav>
  );
}