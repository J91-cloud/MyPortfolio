import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";
import Login from "../../pages/auth/Login";

const Navbar = () => {
  const location = useLocation();
  let accessToken = localStorage.getItem("accessToken");

  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.navContainer}`}>
        <Link to="/" className={styles.logo}>
          Jessy Gjerek
        </Link>
        <div className={styles.navLinks}>
          {accessToken ? (
            <Link
              to="/commentDashboard"
              className={`${styles.navLink} ${location.pathname === "/commentDashboard" ? styles.active : ""}`}
            >
              Pending Comments
            </Link>
          ) : (
            <div>
              <p></p>
            </div>
          )}

          <Link
            to="/about"
            className={`${styles.navLink} ${location.pathname === "/about" ? styles.active : ""}`}
          >
            About Me
          </Link>
          <Link
            to="/portfolio"
            className={`${styles.navLink} ${location.pathname === "/portfolio" ? styles.active : ""}`}
          >
            My Projects
          </Link>
          <Link
            to="/contact"
            className={`${styles.navLink} ${location.pathname === "/contact" ? styles.active : ""}`}
          >
            Contact
          </Link>
          <button className={styles.hireButton}>
            {" "}
            <Login />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
