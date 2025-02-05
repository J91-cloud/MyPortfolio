import { motion } from "framer-motion";

import styles from "./Home.module.css";
import ServiceCard from "../ServiceCard";
import Login from "../auth/Login";
import DisplaySkills from "../../Components/skills/DisplaySkills";
import AddSkillPopup from "../skills/AddSkillPopup";
import "../../styles/global.css";

const Home = () => {
  let accessToken = localStorage.getItem("accessToken");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container"
    >
      {/* <div className={styles.hero}>
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
      </div> */}

      <div className="container">
        <div className="grid grid-cols-2">
          <div>
          <h1 className="font40 font-extrabold">Hello</h1>
          </div>
          <div>
          <h1>Hello</h1>
          </div>
        </div>
      

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

        <h2 className="font40 font-extrabold shadow-md text-powderblue mix-blend-exclusion ">
          My Skills
        </h2>
      </div>

      <hr />

      <DisplaySkills />

      <hr />

      

      

      <h1 className="font30 mt-16 font-extrabold">Recently Edited Projects</h1>

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
      </div>
    </motion.div>
  );
};

export default Home;
