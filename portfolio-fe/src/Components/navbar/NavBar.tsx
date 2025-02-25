import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";
import Login from "../../pages/auth/Login";

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  let accessToken = localStorage.getItem("accessToken");

  useEffect(() => {
    // Load Google Translate script dynamically
    const addGoogleTranslateScript = () => {
      // @ts-expect-error : Types are not available for google translate or not of concern at the moment.
      if (!window.google) {
        const script = document.createElement("script");
        script.src =
          "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        script.async = true;
        document.body.appendChild(script);
      }

      // Initialize Google Translate
      // @ts-expect-error : Types are not available for google translate or not of concern at the moment.
      window.googleTranslateElementInit = () => {
        // @ts-expect-error : Types are not available for google translate or not of concern at the moment.
        new window.google.translate.TranslateElement(
          { pageLanguage: "en", includedLanguages: "en,fr" }, // Add other languages if needed
          "google_translate_element",
        );
      };
    };

    addGoogleTranslateScript();
  }, []);

  const handleLanguageChange = (lang: string) => {
    // @ts-expect-error : Types are not available for google translate or not of concern at the moment.
    const googleTranslateElement = window.google.translate.TranslateElement;

    if (googleTranslateElement) {
      // Find the select dropdown and set the value to the selected language
      const translateElement = document.querySelector(
        "#google_translate_element select",
      );
      if (translateElement) {
        // @ts-expect-error : Types are not available for google translate or not of concern at the moment.
        translateElement.value = lang;
        // Trigger a change event to notify Google Translate of the language change
        translateElement.dispatchEvent(new Event("change"));
        console.log(`Language changed to: ${lang}`);
      } else {
        console.error("Google Translate dropdown not found");
      }
    } else {
      console.error("Google Translate element not initialized");
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Google Translate Element */}
      <div id="google_translate_element" style={{ display: "none" }}></div>

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

            <div className={styles.languageDropdown}>
              <select onChange={(e) => handleLanguageChange(e.target.value)}>
                <option value="en">English</option>
                <option value="fr">French</option>
              </select>
            </div>
          </div>
          <div className={styles.hamburger} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
