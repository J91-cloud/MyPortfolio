import React from "react";
import "./Timeline.css"; // Import the CSS

interface Project {
  projectId: string;
  description: string;
  startDate: string;
  endDate: string;
  name: string;
  githubLink: string;
}

interface Timeline3DProps {
  projects: Project[];
}

const Timeline3D: React.FC<Timeline3DProps> = ({ projects }) => {
  // Sort projects by endDate
  const sortedProjects = projects.sort(
    (a, b) => new Date(a.endDate).getTime() - new Date(b.endDate).getTime()
  );

  return (
    <div className="timeline-container">
      <div className="timeline-wrapper">
        {sortedProjects.map((project, index) => (
          <div
            key={project.projectId}
            className="timeline-point"
            style={{
              transform: `translateX(${index * 120}px) translateZ(${index * 50}px)`,
            }}
          >
            <div className="project-details">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <p>Start: {project.startDate}</p>
              <p>End: {project.endDate}</p>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline3D;