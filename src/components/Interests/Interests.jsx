// components/Interests.js
import styles from './Interests.module.css';

const Interests = ({ interests }) => (
  <section className={styles.interests}>
    <h2>Intereses</h2>
    <ul>
      {interests.map((interest, index) => (
        <li key={index}>{interest}</li>
      ))}
    </ul>
  </section>
);

export default Interests;
