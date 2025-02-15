import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";
import Login from "../../pages/auth/Login";

const Navbar = () => {
  const location = useLocation();
  let accessToken = localStorage.getItem("accessToken");

  const handleLanguageChange = (lang: string) => {
    const googleTranslateElement = document.querySelector(
      ".goog-te-combo"
    ) as HTMLSelectElement;

    if (googleTranslateElement) {
      googleTranslateElement.value = lang;
      googleTranslateElement.dispatchEvent(new Event("change"));
      console.log(`Language changed to: ${lang}`);
    } else {
      console.error("Google Translate dropdown not found");
    }
  };

  return (
    <>
      {/* Google Translate Element (hidden) */}
      <div id="google_translate_element" style={{ display: "none" }}></div>

      {/* Your Existing Navbar */}
      <nav className={styles.navbar}>
        <div className={`container ${styles.navContainer}`}>
          <Link to="/" className={styles.logo}>
            Jessy Gjerek
          </Link>
          <div className={styles.navLinks}>
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
              {" "}
              <Login />
            </button>

            {/* Language Dropdown */}
            <div className={styles.languageDropdown}>
              <select
                onChange={(e) => handleLanguageChange(e.target.value)}
              >
                <option value="en">English</option>
                <option value="fr">French</option>
              </select>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;