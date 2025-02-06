import { motion } from "framer-motion";
import DisplayComments from "../../Components/comments/DisplayComments";
import styles from "./Home.module.css";
import DisplaySkills from "../../Components/skills/DisplaySkills";
import AddSkillPopup from "../skills/AddSkillPopup";
import "../../styles/global.css";
import ShowProfile from "../../Components/profile/ShowProfile";

const Home = () => {
  let accessToken = localStorage.getItem("accessToken");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container"
    >
      <div className="container">
        <ShowProfile />

        <br />

        <div className="grid grid-cols-2">
          <div>
          <h2 className="font40 font-extrabold shadow-md text-powderblue mix-blend-exclusion ">
            My Skills
          </h2>

          </div>
          <div>
          {accessToken ? (
            <div className={styles.skills}>
              <AddSkillPopup />
            </div>
          ) : (
            <div>
              <p></p>
            </div>
          )}

          </div>
        </div>
          

          
        </div>
      

        <hr />

        <DisplaySkills />

        <hr />

        <DisplayComments/>


        
     
    </motion.div>
  );
};

export default Home;
