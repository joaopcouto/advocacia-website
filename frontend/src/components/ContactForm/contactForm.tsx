import React from "react";
import {  useState } from "react";
import emailjs from '@emailjs/browser';
import './styles.css'

    const ContactForm = () => {
        const [isSubmitting, setIsSubmitting] = useState(false);
        const [stateMessage, setStateMessage] = useState(null);
        const sendEmail = (e) => {
          e.persist();
          e.preventDefault();
          setIsSubmitting(true);
          emailjs
            .sendForm(
            "service_8zwgwej",
              "template_kywckxo",
              e.target,
              "-IqN5Pw6LR9XRYBMI",)
            .then(
              (result) => {
                setStateMessage('Message sent!');
                setIsSubmitting(false);
                setTimeout(() => {
                  setStateMessage(null);
                }, 5000); // hide message after 5 seconds
              },
              (error) => {
                console.log(error);
                setStateMessage('Something went wrong, please try again later');
                setIsSubmitting(false);
                setTimeout(() => {
                  setStateMessage(null);
                }, 5000); // hide message after 5 seconds
              }
            );
          
          // Clears the form after sending the email
          e.target.reset();
        };
        return (
          <form  className="contact-form" onSubmit={sendEmail}>
            <div className="contact-infos">
            <input className="contact-infos-input" type="text" name="user_name" placeholder="Nome"/>
            <input className="contact-infos-input" id="email" type="email" name="user_email" placeholder="E-mail"/>
            <span className="campos-obrigatorios">Todos os campos são obrigatórios.</span>
            </div>
            <div className="contact-message">
            <textarea name="message" placeholder="Mensagem"/>
            <input className="button" type="submit" value="Enviar >" disabled={isSubmitting}/>
            {stateMessage && <p>{stateMessage}</p>}           
            </div>
          </form>
        );
      };

export default ContactForm;