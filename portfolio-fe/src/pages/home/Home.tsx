import { motion } from "framer-motion";
import "../../styles/global.css";
import { ArrowRight } from "lucide-react";
import styles from "./Home.module.css";
import ServiceCard from "../ServiceCard";
import Login from "../auth/Login";
import DisplaySkills from "../../Components/skills/DisplaySkills";
import AddSkillPopup from "../skills/AddSkillPopup";

const Home = () => {
  let accessToken = localStorage.getItem("accessToken");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container"
    >
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>I'm Jessy Gjerek</h1>
          <h3 className={styles.subtitle}>
            3rd Year Student at Champlain College.
          </h3>
          <p className={styles.description}>
            My ultimate motto is to fulfill the demand of the buyers by making
            them satisfied with proper file delivery in time and without any
            delay. I am an ambitions adult who is ready to take on any task
            demanded by my employer.
          </p>
        </div>
        <div className={styles.heroImage} />
      </div>

      <Login />

      <br />

      <div className={styles.skills}>
        {accessToken ? (
          <div className={styles.skills}>
            <AddSkillPopup />
          </div>
        ) : (
          <div>
            <p></p>
          </div>
        )}

        <h2 className={styles.header2}>My Skills</h2>
      </div>

      <hr />

      <DisplaySkills />

      <hr />

      <br />

      <br />

      <br />

      <br />

      <h1 className="text-4xl">SJKSK</h1>

      <h1 className={styles.header2}>Recently Edited Projects</h1>

      <div className={styles.services}>
        <ServiceCard
          title="UI/UX Design"
          projectCount="234+"
          description="Het is al geruime tijd een bekend gegeven"
        />
        <ServiceCard
          title="Product Design"
          projectCount="234+"
          description="Het is al geruime tijd een bekend gegeven"
        />
        <ServiceCard
          title="Graphics Design"
          projectCount="234+"
          description="Het is al geruime tijd een bekend gegeven"
        />
        <ServiceCard
          title="Website Design"
          projectCount="234+"
          description="Het is al geruime tijd een bekend gegeven"
        />
      </div>
    </motion.div>
  );
};

export default Home;
