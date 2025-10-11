// src/context/LanguageContext.jsx
import { createContext, useState, useContext } from "react";

const translations = {
  en: {
    home: "Home",
    services: "Services",
    about: "About",
    contact: "Contact",
    book_now: "Book now!",
    welcome: "Welcome to Fresh Fade Society LLC.",
    subtitle: "We offer the best service in hair cutting made by a professional barber to give you the best experience ever in the world of barbering and men hairstyling.",
  },
  es: {
    home: "Inicio",
    services: "Servicios",
    about: "Nosotros",
    contact: "Contacto",
    book_now: "Agenda ya!",
    welcome: "Bienvenido a Fresh Fade Society LLC.",
    subtitle: "Ofrecemos el mejor servicio de barberia a manos de un profesional para brindarte la mejor experiencia en el mundo del corte y estilizado para caballeros.",
  }
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("en");
  const t = translations[lang];
  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
