import { useState, useEffect } from "react";
import "../../styles/global.css";
import axiosInstance from "../../assets/axiosInstance";
import profileRequestDTO from "../../Models/profileRequestDTO";
import myimage from "../../assets/Screenshot 2025-02-06 000544.png";

const ShowProfile: React.FC = () => {
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
    <div>
      {profile.map((user, index) => (
        <div key={index}>
          <div className="grid grid-cols-2">
            <div>
              <h1 className="font-extrabold font40 mt-10">{user.name}</h1>
              <p className="font20 font-bold mt-10">{user.shortBio}</p>
              <p className="font20 font-bold mt-10">{user.phoneNumber}</p>
              <p className="font20 font-bold">{user.email}</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-github mt-10">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>  
            </div>
            <div>
              <img className="p-5" src={myimage} alt="My Image" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ShowProfile;
