import React, { useEffect, useState } from "react";
import axiosInstance from "../../assets/axiosInstance";
import UpdateProject from "./UpdateProject";
import "./DisplayProjects.css"

interface projectRequestDTO {
  projectId: string; // ✅ Use lowercase "string"
  description: string;
  startDate: string;
  endDate: string;
  name: string;
  githubLink: string;
}

const DisplayProjects: React.FC = () => {
  const [projects, setProjects] = useState<projectRequestDTO[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  let accessToken = localStorage.getItem("accessToken");

  useEffect(() => {
    axiosInstance
      .get("/projects")
      .then((response) => {
        console.log("API Response:", response.data); // Debugging

        const projectData: projectRequestDTO[] = response.data.map(
          (project: any) => ({
            projectId:
              project.projectIdentifier?.projectId || project.projectId, // Ensure correct path
            description: project.description,
            startDate: project.startDate,
            endDate: project.endDate,
            name: project.name,
            githubLink: project.githubLink,
          })
        );

        setProjects(projectData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
        setError("Failed to fetch projects.");
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      {projects.map((project, index) => (
        <section className="bsb-timeline-5 py-5 py-xl-8" key={index}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-10 col-md-8 col-xl-6">
                <ul className="timeline">
                  <li className="timeline-item">
                    <span className="timeline-icon">
                      <i className="bi-check-lg text-primary"></i>
                    </span>
                    <div className="timeline-body">
                      <div className="timeline-content">
                        <div className="card w-84 item-card ml">
                          <div className="card-header">
                            Published On - {project.endDate}
                          </div>
                          <div className="card-body">
                            <h5 className="card-title font40">{project.name}</h5>
                            <p className="card-text">{project.description}</p>
                            <hr />
              
                            <p className="card-text">
                              {project.startDate} - {project.endDate}
                            </p>
                            <p className="card-text">{project.githubLink}</p>
                            {accessToken ? (
                              <UpdateProject projectId={project.projectId} />
                            ) : (
                              <div>
                                <p></p>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default DisplayProjects;
