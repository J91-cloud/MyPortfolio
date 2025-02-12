import { motion } from "framer-motion";
import DisplayComments from "../../Components/comments/DisplayComments";
import DisplaySkills from "../../Components/skills/DisplaySkills";
import "../../styles/global.css";
import ShowProfile from "../../Components/profile/ShowProfile";
import DynamicForm from "../../assets/DynamicForm";
import skillRequestDTO from "../../Models/skillRequestDTO";
import axiosInstanceAuth from "../../assets/axiosIntanceAuth";
import axiosInstance from "../../assets/axiosInstance";
import commentRequestDTO from "../../Models/commentRequestDTO";
import UpdateProfile from "../../Components/profile/UpdateFrofile";

const Home = () => {
  let accessToken = localStorage.getItem("accessToken");

  const handleSubmit = async <T extends Record<string, any>>(
    endpoint: string,
    data: T,
  ) => {
    try {
      const response = await axiosInstanceAuth.post(endpoint, data);
      console.log("Success:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleSubmitComment = async <T extends Record<string, any>>(
    endpoint: string,
    data: T,
  ) => {
    try {
      const response = await axiosInstance.post(endpoint, data);
      console.log("Success:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container"
    >
      <div className="container">
        <ShowProfile />

        {accessToken ? (
          <UpdateProfile />
        ) : (
          <div>
            <p></p>
          </div>
        )}

        <br />

        <div className="grid grid-cols-2">
          <div>
            <h2 className="font40 font-extrabold shadow-md text-powderblue mix-blend-exclusion ">
              My Skills
            </h2>
          </div>
          <div>
            {accessToken ? (
              <DynamicForm<skillRequestDTO>
                endpoint="/skills"
                formType="skill"
                onSubmit={(data) => handleSubmit("/skills", data)}
              />
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

      <br />
      <br />

      <h1 className="font30 font-bold">Received Comments</h1>
      <DynamicForm<commentRequestDTO>
        endpoint="/comments"
        formType="comment"
        onSubmit={(data) => handleSubmitComment("/comments", data)}
      />

      <DisplayComments />
    </motion.div>
  );
};

export default Home;
