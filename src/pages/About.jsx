import { useLanguage } from "../context/LanguageContext";
export default function About() {
  const { lang } = useLanguage();
  return (
    <div className="page__about">
      <h2>{lang === "en" ? "About Us" : "Sobre Nosotros"}</h2>
      
      <div className="page__about_container">
        <img src="https://images.unsplash.com/photo-1578390432942-d323db577792?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGJhcmJlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=900" alt="barber"/>
        <p>
          {lang === "en"
            ? "We’ve been delivering modern styles and timeless cuts for over 15 years."
            : "Llevamos más de 15 años ofreciendo estilos modernos y cortes clásicos."}
        </p>
      </div>
    </div>
  );
}