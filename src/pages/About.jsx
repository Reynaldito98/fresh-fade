import { useLanguage } from "../context/LanguageContext";
export default function About() {
  const { lang } = useLanguage();
  return (
    <div className="page">
      <h2>{lang === "en" ? "About Us" : "Sobre Nosotros"}</h2>
      <p>
        {lang === "en"
          ? "We’ve been delivering modern styles and timeless cuts for over 15 years."
          : "Llevamos más de 15 años ofreciendo estilos modernos y cortes clásicos."}
      </p>
    </div>
  );
}