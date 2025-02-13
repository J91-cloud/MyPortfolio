import "../../styles/global.css";
import DisplayProjects from "../../Components/projects/DisplayProjects";
import axiosInstance from "../../assets/axiosIntanceAuth";
import projectRequestDTO from "../../Models/projectRequestDTO";
import DynamicForm from "../../assets/DynamicForm";

const Projects = () => {
  let accessToken = localStorage.getItem("accessToken");

  const handleSubmit = async <T extends Record<string, any>>(
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
    <div className="container">
      <div className="grid grid-cols-2">
        <div>
          <h1 className="font40 text-powderblue font-extrabold">Hello</h1>
        </div>
        <div>
          <h1 className="font40 text-powderblue font-extrabold">Hello</h1>
        </div>
      </div>

      {accessToken ? (
        <DynamicForm<projectRequestDTO>
          endpoint="/projects"
          formType="project"
          onSubmit={(data) => handleSubmit("/projects", data)}
        />
      ) : (
        <div>
          <p></p>
        </div>
      )}

      <DisplayProjects />
    </div>
  );
};

export default Projects;
