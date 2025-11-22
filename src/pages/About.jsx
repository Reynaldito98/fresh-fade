import { useLanguage } from "../context/LanguageContext";
import {barber} from "../assets/barber.jpg";

export default function About() {
  const { lang } = useLanguage();
  
  const englishText = "With over 11 years of experience behind the chair, Ronald Yanes has built a reputation for precision cuts, clean fades, and exceptional client care. What started as a hobby in his teenage years quickly grew into a lifelong passion for the craft of barbering.\nRonald specializes in classic and modern styles — from sharp skin fades to timeless gentleman cuts and beard sculpting. His mission is simple: to make every client look and feel their best while creating a comfortable, welcoming environment.\nWhether it’s your weekly trim or a total transformation, Ronald combines technical skill with creativity and attention to detail to deliver a look that suits your lifestyle and personality.\nWhen he’s not in the shop, Ronald keeps up with the latest trends in men’s grooming, attends barber expos, and mentors up-and-coming barbers in the community.".split("\n");

  const spanishText = "Soy Ronald, barbero profesional con 11 de años de experiencia con una verdadera pasión por el arte del cuidado masculino. Desde mis inicios en la barbería, he dedicado mi carrera a perfeccionar cada detalle del estilo masculino, combinando técnicas tradicionales con las últimas tendencias en cortes, degradados y afeitados.\nMi objetivo es ofrecer más que un simple corte: busco crear una experiencia personalizada para cada cliente, donde el servicio, el estilo y la comodidad se unan para reflejar su identidad y confianza.\nCon años de experiencia en el sector, he aprendido que cada visita a la barbería es una oportunidad para conectar, compartir y transformar la imagen de quien se sienta en mi silla. Cada herramienta, cada línea y cada acabado tienen un propósito: resaltar lo mejor de cada persona.\nEn mi espacio, la barbería no es solo un lugar para arreglarse, sino un punto de encuentro, estilo y buena vibra.".split("\n");

  return (
    <div className="page__about" id="about">
      <h2>{lang === "en" ? "About Us" : "Sobre Nosotros"}</h2>
      
      <div className="page__about_container">
        <img src={barber} alt="barber"/>
        
        <div className="page__about_text">
          {lang === "en"
            ? 
            englishText.map(item => <p>{item}</p>)
            :
            spanishText.map(item => <p>{item}</p>)        
          }
        </div>
      </div>
    </div>
  );
}