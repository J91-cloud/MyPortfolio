import { useEffect, useState, useRef } from "react";
import GithubImg from "../../assets/Github.png";
import CSSImg from "../../assets/CSS.jpg";
import SpringBoot from "../../assets/Spring-Boot.png";
import educationRequestDTO from "../../Models/educationRequestDTO";
import DynamicForm from "../../assets/DynamicForm";
import "../../styles/global.css";
import commentRequestDTO from "../../Models/commentRequestDTO";
import axiosInstance from "../../assets/axiosInstance";
import profileRequestDTO from "../../Models/profileRequestDTO";
import "./About.css";

const About = () => {
  const [profile, setProfile] = useState<profileRequestDTO[]>([]);
  const [education, setEducation] = useState<educationRequestDTO[]>([]);

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
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

  useEffect(() => {
    axiosInstance
      .get("/education")
      .then((response) => {
        const educationData: educationRequestDTO[] = response.data.map(
          (education: any) => ({
            description: education.description,
            schoolName: education.schoolName,
            location: education.location,
            year: education.year,
          }),
        );
        setEducation(educationData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
        setError("Failed to fetch projects.");
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    axiosInstance
      .get("/profile")
      .then((response) => {
        const profileData: profileRequestDTO[] = response.data.map(
          (profile: any) => ({
            description: profile.description,
            name: profile.name,
            gender: profile.gender,
            address: profile.address,
            shortBio: profile.shortBio,
            phoneNumber: profile.phoneNumber,
            email: profile.email,
          }),
        );
        setProfile(profileData);
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
    //first section
    <div className="container">
      <h1 className="font40 text-center font-bold">A little About Me</h1>
      {profile.map((user, index) => (
        <div key={index}>
          <div>
            <p className="p-4">{user.description}</p>
          </div>
        </div>
      ))}

      <div className="image-container">
        <img src={GithubImg} alt="Image 1" />
        <img src={CSSImg} alt="Image 2" />
        <img src={SpringBoot} alt="Image 3" />
      </div>
      <hr />

      <section className="section-resumes">
        <h1 className="text-powderblue">My Resumes</h1>
        <div className="grid grid-cols-2">
          <div>
            <h2 className="font20">English</h2>
            <hr className="p-4 m-2" />
            <a
              href="/Resmue-CMD-2025.pdf"
              download="Resmue-CMD-2025.pdf"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              📄 Download My Resume
            </a>
          </div>
          <div>
            <h2 className="font20">French</h2>
            <hr className="p-4 m-2" />
            <a
              href="/Resmue-FRANCAIS.pdf"
              download="Resmue-FRANCAIS.pdf"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              📄 Download My French Resume
            </a>
          </div>
        </div>
      </section>

      <h1 className="font40 text-center font-bold">My Education</h1>

      {accessToken ? (
        <DynamicForm<educationRequestDTO>
          endpoint="/education"
          formType="education"
          onSubmit={(data) => handleSubmit("/education", data)}
        />
      ) : (
        <div>
          <p></p>
        </div>
      )}

      {education.map((educationInfo, index) => (
        <div key={index}>
          <div className="education-container">
            <section className="education-section">
              <h2>{educationInfo.schoolName}</h2>
              <p>{educationInfo.year}</p>
              <p>{educationInfo.location}</p>
              <hr />
              <p>{educationInfo.description}</p>
            </section>
          </div>
        </div>
      ))}

      <h1 className="font30 font-bold text-center">Certificates</h1>
      <hr className="styled-line"></hr>

      <div className="letter-image">
        <div className="animated-mail">
          <div className="back-fold"></div>
          <div className="letter">
            <div className="letter-border"></div>
            <div className="letter-title">Github</div>
            <div className="letter-context">Leanred At School</div>
            <div className="letter-stamp">
              <div className="letter-stamp-inner"></div>
            </div>
          </div>
          <div className="top-fold"></div>
          <div className="body"></div>
          <div className="left-fold"></div>
        </div>
        <div className="shadow"></div>
      </div>
    </div>
  );
};

export default About;
