import { useLanguage } from "../context/LanguageContext";
import { useState, useEffect } from "react";


export default function Contact() {
  const { lang } = useLanguage();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [nameValid, setNameValid] = useState(false);
  const [phoneValid, setPhoneValid] = useState(false);
  const [messageValid, setMessageValid] = useState(false);
  const [nameErrorMessage, setNameErrorMessage] = useState('');
  const [phoneErrorMessage, setPhoneErrorMessage] = useState('');
  const [messageErrorMessage, setMessageErrorMessage] = useState('');


  function handleNameChange(evt) {
    setName(evt.target.value.split(' ').join('%20'));
    
    if(evt.target.checkValidity()){
      setNameValid(true);
      setNameErrorMessage('');
    } else{
      setNameValid(false);
      setNameErrorMessage(evt.target.validationMessage);
    }
    console.log(isDisabled);
  }

  function handlePhoneChange(evt) {
    setPhone(evt.target.value);
    if(evt.target.checkValidity()){
      setPhoneValid(true);
      setPhoneErrorMessage('');
    } else{
      setPhoneValid(false);
      setPhoneErrorMessage(evt.target.validationMessage);
    };

    console.log(isDisabled);
  }

  function handleMessageChange(evt) {
    setMessage(evt.target.value.split(' ').join('%20'));
    if(evt.target.checkValidity()){
      setMessageValid(true);
      setMessageErrorMessage('');
    } else{
      setMessageValid(false);
      setMessageErrorMessage(evt.target.validationMessage);
    };

    console.log(evt.target.value.split(' ').join('%20'));
  }

  return (
    <div className="page" id="contact">
      <h2>{lang === "en" ? "Contact Us" : "Contáctanos"}</h2>

      <div className="page__contact">
      <a href="https://wa.me/15046579565" target="_blank"><img src="https://img.favpng.com/16/3/10/whatsapp-logo-png-favpng-NbGyiBb9eGw54Ez58YzAAedwX.jpg" alt="whatsapp icon"/></a>
        <a href="https://instagram.com/@ronaldbarber_official" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png" alt="instagram icon"/></a>
        <a href="" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Facebook_Logo_2023.png/1200px-Facebook_Logo_2023.png" alt="facebook icon" /></a>
        <a href="https://www.tiktok.com/@Ronaldbarberkc" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/3116/3116491.png" alt="tik tok icon" /></a>
      </div>

      <form>
        <fieldset>
          <input type="text" placeholder={lang === "en" ? "Your Name" : "Tu Nombre"} onChange={handleNameChange} minLength="3"/>
          <span>{nameErrorMessage}</span>
        </fieldset>

        <fieldset>
          <input type="number" placeholder={lang === "en" ? "Phone number" : "Numero de telefono"} onChange={handlePhoneChange} minLength="8"/>
          <span>{phoneErrorMessage}</span>
        </fieldset>
        
        <fieldset>
          <textarea placeholder={lang === "en" ? "Message" : "Mensaje"} onChange={handleMessageChange} minLength="4"/>
          <span>{messageErrorMessage}</span>
        </fieldset>
        <a href={nameValid && phoneValid && messageValid?`mailto:reynaldoperezpauli6@gmail.com?subject=Appointment%20Request&body=Hello%20my%20name%20is%20${name}%20and%20my%20phone%20number%20is%20${phone}.%20%20%20${message}`:undefined} target="_blank">{lang === "en" ? "Send" : "Enviar"}</a>
      </form>
    </div>
  );
}