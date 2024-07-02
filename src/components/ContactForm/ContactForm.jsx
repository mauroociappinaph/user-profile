"use client";
import { useState } from "react";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const missingFields = !name || !email || !message;
    const invalidEmail = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (missingFields || invalidEmail) {
      setError(missingFields ? "Por favor, complete todos los campos." : "Por favor, introduce una dirección de correo válida.");
      return;
    }

    setSuccess(true);
    setError("");

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section className={styles.contactForm} data-testid="contact-form">
      <h2>Contacto</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
          <label htmlFor="name">Nombre:</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={styles.inputField}
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.inputField}
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="message">Mensaje:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={styles.inputField}
          />
        </div>
        {error && <p className={styles.error}>{error}</p>}
        <button
          type="submit"
          disabled={success}
          className={styles.submitButton}
        >
          {success ? "Enviado" : "Enviar"}
        </button>
      </form>
      {success && (
        <p className={styles.success}>
          Mensaje enviado con éxito. Gracias por contactarnos.
        </p>
      )}
    </section>
  );
};

export default ContactForm;
