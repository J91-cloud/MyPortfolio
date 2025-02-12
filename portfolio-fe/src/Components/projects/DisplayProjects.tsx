import React, { useEffect, useState } from "react";
import axiosInstance from "../../assets/axiosInstance";

import ServiceCard from "./project-display/ServiceCard";
import UpdateProject from "./UpdateProject";


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

  useEffect(() => {
    axiosInstance
      .get("/projects")
      .then((response) => {
        console.log("API Response:", response.data); // Debugging

        const projectData: projectRequestDTO[] = response.data.map(
          (project: any) => ({
            projectId: project.projectIdentifier?.projectId || project.projectId, // Ensure correct path
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
        <div key={index}>
          <ServiceCard
            name={project.name}
            description={project.description}
            endDate={project.endDate}
            githubLink={project.githubLink}
            startDate={project.startDate}
          />
          <UpdateProject projectId={project.projectId} /> {/* ✅ Now it works */}
        </div>
      ))}
    </div>
  );
};

export default DisplayProjects;
