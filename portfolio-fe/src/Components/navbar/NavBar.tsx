import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";
import GoogleTranslateLoader from "../Translation/googleTranslation";
import { protectWords } from "../Translation/utils";
import Login from "../../pages/auth/Login";

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  let accessToken = localStorage.getItem("accessToken");

  const handleTranslate = (language: string) => {
    let attempts = 0;
    const maxAttempts = 10;
  
    const interval = setInterval(() => {
      const selectElement = document.querySelector("select.goog-te-combo");
  
      if (selectElement) {
        (selectElement as HTMLSelectElement).value = language;
        selectElement.dispatchEvent(new Event("change"));
        console.log(`Language switched to ${language}`);
        clearInterval(interval); // Stop retrying
      } else if (++attempts >= maxAttempts) {
        clearInterval(interval); // Stop after max attempts
        console.warn("Google Translate dropdown not found. Retrying...");
      }
    }, 500); // Retry every 500ms
  };

  

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>


      <nav className={styles.navbar}>
        <div className={`container ${styles.navContainer}`}>
          <Link to="/" className={styles.logo}>
            Jessy Gjerek
          </Link>
          <div
            className={`${styles.navLinks} ${isMenuOpen ? styles.open : ""}`}
          >
            {accessToken ? (
              <Link
                to="/commentDashboard"
                className={`${styles.navLink} ${
                  location.pathname === "/commentDashboard" ? styles.active : ""
                }`}
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
              className={`${styles.navLink} ${
                location.pathname === "/about" ? styles.active : ""
              }`}
            >
              About Me
            </Link>
            <Link
              to="/portfolio"
              className={`${styles.navLink} ${
                location.pathname === "/portfolio" ? styles.active : ""
              }`}
            >
              My Projects
            </Link>
            <Link
              to="/contact"
              className={`${styles.navLink} ${
                location.pathname === "/contact" ? styles.active : ""
              }`}
            >
              Contact
            </Link>
            <button className={styles.hireButton}>
              <Login />
            </button>

          
          </div>
          <div className={styles.hamburger} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div id="google_translate_element" style={{ display: "none" }}></div>
<GoogleTranslateLoader />

<select
  className="comments-dropdown bg-transparent text-black"
  onChange={(e) => handleTranslate(e.target.value)}
>
  <option value="en">English</option>
  <option value="fr">French</option>
</select>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
