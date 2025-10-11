import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import './Navbar.css';

export default function Navbar() {
  const { t, setLang, lang } = useLanguage();
  return (
    <nav>
      <h1>FreshFade</h1>
      <div>
        <Link to="/">{t.home}</Link>
        <Link to="/services">{t.services}</Link>
        <Link to="/about">{t.about}</Link>
        <Link to="/contact">{t.contact}</Link>
      </div>
      <button onClick={() => setLang(lang === "en" ? "es" : "en")}>
        {lang === "en" ? "ES" : "EN"}
      </button>
    </nav>
  );
}