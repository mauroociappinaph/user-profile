// components/About.js
import PropTypes from 'prop-types';
import styles from './About.module.css';

const About = ({ description, className = '', heading = 'Sobre mí', style = {} }) => (
  <section className={`${styles.about} ${className}`} style={style} aria-label="about-section">
    <h2>{heading}</h2>
    <p>{description}</p>
  </section>
);

About.propTypes = {
  description: PropTypes.string,
  className: PropTypes.string,
  heading: PropTypes.string,
  style: PropTypes.object,
};

export default About;
