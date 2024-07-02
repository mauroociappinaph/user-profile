import { useMemo } from 'react';
import styles from "./page.module.css";
import Header from "../components/Header/Header.jsx";
import About from "../components/About/About.jsx";
import Interests from "../components/Interests/Interests.jsx";
import ContactForm from "../components/ContactForm/ContactForm.jsx";

export default function Home() {
  // Ruta de la imagen de perfil
  const profileImage = "/_MG_0102 3-Mejorado-NR-1-2.jpg";

  // Datos del usuario
  const user = useMemo(() => ({
    name: "Mauro Ciappina",
    profileImage: profileImage,
    description: "Desarrollador frontend con pasión por la tecnología y la innovación. Me considero una persona responsable, con facilidad para aprender y superar cualquier obstáculo.",
    interests: ["Programación", "Diseño web", "Música", "Viajes"],
  }), [profileImage]);

  // Verificar si los datos del usuario están completos
  if (!user.name || !user.profileImage || !user.description || !user.interests) {
    return (
      <div className={styles.pageContainer}>
        <p>Hubo un error al cargar los datos del usuario.</p>
      </div>
    );
  }

  
  return (
    <div className={styles.pageContainer}>
      <Header name={user.name} profileImage={user.profileImage} />
      <div className={styles.contentContainer}>
        <About description={user.description} />
        <Interests interests={user.interests} />
        <ContactForm />
      </div>
    </div>
  );
}
