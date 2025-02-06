import React, { useEffect, useState } from "react";
import axiosInstance from "../../assets/axiosInstance";
import projectRequestDTO from "../../Models/projectRequestDTO";
import ServiceCard from "./project-display/ServiceCard";

const DisplayProjects: React.FC = () => {
  const [projects, setProjects] = useState<projectRequestDTO[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axiosInstance
      .get("/projects")
      .then((response) => {
        const projectData: projectRequestDTO[] = response.data.map(
          (project: any) => ({
            description: project.description,
            startDate: project.startDate,
            endDate: project.endDate,
            name: project.name,
            githubLink: project.githubLink,
          }),
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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      {projects.map((project, index) => (
        <ServiceCard
          key={index}
          name={project.name}
          description={project.description}
          endDate={project.endDate}
          githubLink={project.githubLink}
          startDate={project.startDate}
        />
      ))}
    </div>
  );
};

export default DisplayProjects;
