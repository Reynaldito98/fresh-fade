import { useLanguage } from "../context/LanguageContext";
export default function Contact() {
  const { lang } = useLanguage();
  return (
    <div className="page">
      <h2>{lang === "en" ? "Contact Us" : "Contáctanos"}</h2>
      <form>
        <input type="text" placeholder={lang === "en" ? "Your Name" : "Tu Nombre"} />
        <input type="email" placeholder="Email" />
        <textarea placeholder={lang === "en" ? "Message" : "Mensaje"} />
        <button>{lang === "en" ? "Send" : "Enviar"}</button>
      </form>
    </div>
  );
}