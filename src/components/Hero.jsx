import { useLanguage } from "../context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();
  return (
    <section className="hero" id="home">
      <div className="hero__blur">

      </div>
      <h1>{t.welcome}</h1>
      <p>{t.subtitle}</p>
      <button>{t.book_now}</button>
    </section>
  );
}
