import { useLanguage } from "../context/LanguageContext";


export default function Contact() {
  const { lang } = useLanguage();
  return (
    <div className="page" id="contact">
      <h2>{lang === "en" ? "Contact Us" : "Contáctanos"}</h2>

      <div className="page__contact">
      <a href="https://wa.me/15046579565" target="_blank"><img src="https://img.favpng.com/16/3/10/whatsapp-logo-png-favpng-NbGyiBb9eGw54Ez58YzAAedwX.jpg" alt="whatsapp icon"/></a>
        <a href="" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png" alt="instagram icon"/></a>
        <a href="" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Facebook_Logo_2023.png/1200px-Facebook_Logo_2023.png" alt="facebook icon" /></a>
        <a href="" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/3116/3116491.png" alt="tik tok icon" /></a>
      </div>

      <form>
        <input type="text" placeholder={lang === "en" ? "Your Name" : "Tu Nombre"} />
        <input type="email" placeholder="Email" />
        <textarea placeholder={lang === "en" ? "Message" : "Mensaje"} />
        <button>{lang === "en" ? "Send" : "Enviar"}</button>
      </form>
    </div>
  );
}