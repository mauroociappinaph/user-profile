import PropTypes from 'prop-types';
import styles from './Header.module.css';

const Header = ({ name, profileImage }) => (
  <header className={styles.header}>
    {profileImage && <img src={profileImage} alt={`${name}'s profile`} className={styles.profileImage} />}
    <h1 className={styles.name}>{name}</h1>
  </header>
);


export default Header;
