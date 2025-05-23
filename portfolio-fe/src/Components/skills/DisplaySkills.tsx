import React, { useEffect, useState } from "react";
import axiosInstance from "../../assets/axiosInstance";
import skillRequestDTO from "../../Models/skillRequestDTO";
import DeleteSkill from "./DeleteSkills";
import "../../styles/global.css";

const SkillList: React.FC = () => {
  const [skills, setSkills] = useState<skillRequestDTO[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  let accessToken = localStorage.getItem("accessToken");

  useEffect(() => {
    axiosInstance
      .get("/skills") // Fetch all skills from your API
      .then((response) => {
        const skillData: skillRequestDTO[] = response.data.map(
          (skill: any) => ({
            skillId: skill.skillIdentifier?.skillId || skill.skillId,
            skillType: skill.skillType, // Extract only skillType
          }),
        );
        setSkills(skillData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching skills:", error);
        setError("Failed to fetch skills.");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading skills...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <div className="container">
        <div className="row">
          <ul className="skillList font-bold">
            {skills.map((skill, index) => (
              <li className="list" key={index}>
                {skill.skillType}
                {accessToken ? (
                  <DeleteSkill skillId={skill.skillId} />
                ) : (
                  <div>
                    <p></p>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SkillList;
