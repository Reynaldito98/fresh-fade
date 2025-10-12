import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
    const {lang} = useLanguage();

    return (
      <footer>
        <p>{lang==="en" ? "© 2025 Fresh Fade Society Site by Reynaldo Perez Pauli. All Rights Reserved." : "© 2025 Fresh Fade Society Site por Reynaldo Perez Pauli. Todos los Derechos Reservados."}</p>
      </footer>
    );
  }