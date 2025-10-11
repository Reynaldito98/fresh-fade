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
            ? "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

            : 
            
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
        </p>
      </div>
    </div>
  );
}