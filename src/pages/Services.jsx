import { useLanguage } from "../context/LanguageContext";
import haircut from "../assets/corte.jpg";
import shave from "../assets/shave.jpg";
import beard from "../assets/beard.jpg";


export default function Services() {
  const { lang } = useLanguage();
  return (
    <div className="page__services">
      <h2>{lang === "en" ? "Our Services" : "Nuestros Servicios"}</h2>
      <ul>
        <li>
          <img src={haircut} alt="haircuts"></img>
          <p>✂️ {lang === "en" ? "Haircuts" : "Cortes de Cabello"}</p>
        </li>

        <li>
          <img src={shave} alt="shaves"></img>
          <p>🪒 {lang === "en" ? "Shaves" : "Afeitados"}</p>
        </li>

        <li>
          <img src={beard} alt="beard trim"></img>
          <p>💈 {lang === "en" ? "Beard Trims" : "Arreglo de Barba"}</p>
        </li>
      </ul>
    </div>
  );
}