import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.navContainer}`}>
        <Link to="/" className={styles.logo}>
          Jessy Gjerek
        </Link>
        <div className={styles.navLinks}>
          <Link
            to="/about"
            className={`${styles.navLink} ${location.pathname === '/about' ? styles.active : ''}`}
          >
            About us
          </Link>
          <Link
            to="/portfolio"
            className={`${styles.navLink} ${location.pathname === '/portfolio' ? styles.active : ''}`}
          >
            Portfolio
          </Link>
          <Link
            to="/contact"
            className={`${styles.navLink} ${location.pathname === '/contact' ? styles.active : ''}`}
          >
            Contact
          </Link>
          <button className={styles.hireButton}>
            Hire me
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;