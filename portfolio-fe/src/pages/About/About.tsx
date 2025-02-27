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
import DeleteEducation from "../../Components/education/DeleteEducation";
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
            educationId: education.educationIdentifier.educationId,
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
        <img src="https://media-hosting.imagekit.io//a4fc04966ee5480f/githubv.jpg?Expires=1835189412&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=f8JAQ7G3t3HgiuaqzoIrMSogb1V4FacEdmeFk-oCxLAJNOgmf-QzuDr9lKufwXe6~QkB7WfrDFAO281jOiWFamOILRyCOUByCAb69yPTro1xJBtvRWncVlvkOSE3q-owjswgg2tyPGKT1rW9UGV3k~7RmuSFZJgRzwlFFyeV5zfXcBfpco~P6q~xIjhYz0hGFIiBiSlalavS4X-98vaQI4Qlc2MUHmXAlKzvrpw7kDtVnjzIVX0kPTv4M-fbwWrWD5l3brIJwEfz-6ZwzZAiwdn2-XOjd9MyFtzOGVh49xG8N1kHmyGGpXKOjyRKusv42a6K9NQZCML8zopLWvAVQQ__" alt="Image 1" />
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

{education
  .map(educationInfo => ({
    ...educationInfo,
    yearAsInt: parseInt(educationInfo.year, 10) // Parse year string to integer
  }))
  .sort((a, b) => b.yearAsInt - a.yearAsInt) // Sort in descending order
  .map((educationInfo, index) => (
    <div key={index}>
      <div className="education-container">
        <section className="education-section">
          <h2>{educationInfo.schoolName}</h2>
          <p>{educationInfo.year}</p>
          <p>{educationInfo.location}</p>3
          <hr />
          <p>{educationInfo.description}</p>
          {accessToken && (
                  <>
                  
                    <DeleteEducation educationId={educationInfo.educationId} />
                  </>
                )}
        </section>
      </div>
    </div>
  ))}

      <h1 className="font30 font-bold text-center">Certificates</h1>
      <hr className="styled-line"></hr>

      <div></div>

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
