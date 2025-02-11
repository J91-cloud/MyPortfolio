import { useEffect, useState } from "react";
import DynamicForm from "../../assets/DynamicForm";
import "../../styles/global.css";
import commentRequestDTO from "../../Models/commentRequestDTO";
import axiosInstance from "../../assets/axiosInstance";
import profileRequestDTO from "../../Models/profileRequestDTO";

const About = () => {
  const [profile, setProfile] = useState<profileRequestDTO[]>([]);

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

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
    <div className="container">
      <h1 className="font40 text-center font-bold">A little About Me</h1>

      {profile.map((user, index) => (
        <div key={index}>
          <div>
            <p className="p-4">{user.description}</p>
          </div>
        </div>
      ))}

      <hr />

      <h1>My Resumes</h1>

      <div className="grid grid-cols-2">
        <div>
          <h2 className="font20">English</h2>
          <hr className="p-4 m-2"/>
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
          <hr className="p-4 m-2"/>

        </div>
      </div>

      <h1 className="font20 font-bold mt-10">
        I have achieved the following Diplomas and Certificates
      </h1>
    </div>
  );
};

export default About;
