import React, { useEffect, useState, useRef } from "react";
import axiosInstance from "../../assets/axiosInstance";
import GithubImg from "../../assets/Github.png";
import DeleteProject from "./DeleteProjects";
import UpdateProject from "./UpdateProject";
import styles from "./DisplayProjects.module.css";

interface projectRequestDTO {
  projectId: string;
  description: string;
  startDate: string;
  endDate: string;
  name: string;
  imageUrl: string;
  githubClone: string;
  category: string;
  githubLink: string;
}

const DisplayProjects: React.FC = () => {
  const [projects, setProjects] = useState<projectRequestDTO[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  let accessToken = localStorage.getItem("accessToken");

  useEffect(() => {
    axiosInstance
      .get("/projects")
      .then((response) => {
        console.log("API Response:", response.data); 

        const projectData: projectRequestDTO[] = response.data.map(
          (project: any) => ({
            projectId:
              project.projectIdentifier?.projectId || project.projectId, 
            description: project.description,
            startDate: project.startDate,
            endDate: project.endDate,
            name: project.name,
            imageUrl: project.imageUrl,
            githubClone: project.githubClone,
            category: project.category,
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

  // Handle wheel event
  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      if (isAnimating || projects.length === 0) return;

      if (event.deltaY > 0 && currentIndex < projects.length - 1) {
        // Scroll down: Move to the next project
        setIsAnimating(true);
        const currentCard = cardsRef.current[currentIndex];
        if (currentCard) {
          currentCard.style.transform = "translateY(100%)"; 
          currentCard.style.opacity = "0"; 
        }

        setTimeout(() => {
          setCurrentIndex((prev) => prev + 1); 
          setIsAnimating(false);
        }, 600); 
      } else if (event.deltaY < 0 && currentIndex > 0) {
        // Scroll up: Move to the previous project
        setIsAnimating(true);
        const previousCard = cardsRef.current[currentIndex - 1];
        if (previousCard) {
          previousCard.style.transform = "translateY(0)";
          previousCard.style.opacity = "1"; 
        }

        setTimeout(() => {
          setCurrentIndex((prev) => prev - 1); 
          setIsAnimating(false);
        }, 600); 
      }
    };

    window.addEventListener("wheel", handleWheel);
    return () => window.removeEventListener("wheel", handleWheel);
  }, [currentIndex, isAnimating, projects]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container">
      <div className="grid grid-cols-2">
        <div>
          <div className={styles.stack_container}>
            {projects.map((project, index) => (
              <div
                key={project.projectId}
                className={`${styles.card} ${
                  index === currentIndex ? styles.active : ""
                }`}
                ref={(el) => {
                  if (el) cardsRef.current[index] = el;
                }}
                style={{
                  zIndex: projects.length - index, // Ensure proper stacking order
                  transform:
                    index < currentIndex ? "translateY(100%)" : "translateY(0)",
                  opacity: index < currentIndex ? "0" : "1",
                }}
              >
                <h2>{project.name}</h2>
                <p>{project.description}</p>
                <p>Start Date: {project.startDate}</p>
                <p>End Date: {project.endDate}</p>
      
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Link
                </a>
                {accessToken && (
                  <>
                    <UpdateProject projectId={project.projectId} />
                    <DeleteProject projectId={project.projectId} />
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="flex">
          <img src="https://media-hosting.imagekit.io//a7dd1707b4574a32/Schedule.png?Expires=1835187479&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=sOuej1jkoNiNaiiOHK4uPWEDXOF8QoJXNG~WuZOzbJ7FURrWEKqDzOGjXymxb53-kTbRiN6tVBhk40AhqohwxDoBwaNMhx85hO8xLvBAdeUfQi7ESBua4JhPnZj-9De7GffTTNpo83HAdhTjYO1hwye2V1mjeCvHdY5LZUZQlVIB3NYu9EeFfcWnloSd7tcsiEQo8xclGX6W3qWK2J0CqJR9Krmgo2Tpw5ENZMHOpdAOrybnLLnN~KeXGBxs865CHNZKroyp0uvXpwakWl7d21G9VnyAQIaj8SuEBXCPcr0z63uuMrgfe9TLDQFDlxSZWuncL2xoAfUvJXAea7TKsQ__" className={styles.images} alt="" />
          <aside className="bg-black text-white p-6 rounded-lg width66 max-w-lg font-mono">
            <div className="flex justify-between items-center">
              <div className="flex space-x-2 text-red-500">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <p className="text-sm">bash</p>
            </div>
            <div className="mt-4">
              <p className="text-green-400">$ npm install git</p>
              <p className="text-white"> git clone https://champlain_petclinic.com</p>
              <p className="text-white">
                added 1 package, and audited 2 packages in 3s
              </p>
              <p className="text-green-400">$</p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default DisplayProjects;
