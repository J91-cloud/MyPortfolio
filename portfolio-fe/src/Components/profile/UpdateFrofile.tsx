import { useState, useEffect } from "react";
import profileRequestDTO from "../../Models/profileRequestDTO";
import axiosInstance from "../../assets/axiosInstance";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from "@mui/material"; // Or any other UI library

const UpdateProfile: React.FC = () => {
  const [profile, setProfile] = useState<profileRequestDTO | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const [formData, setFormData] = useState<profileRequestDTO>({
    description: "",
    name: "",
    gender: "",
    address: "",
    shortBio: "",
    phoneNumber: "",
    email: "",
  });

  useEffect(() => {
    axiosInstance
      .get("/profile/1")
      .then((response) => {
        const profileData: profileRequestDTO = response.data;
        setProfile(profileData);
        setFormData(profileData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching profile:", error);
        setError("Failed to fetch profile.");
        setLoading(false);
      });
  }, []);

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.put(
        "/profile/1",
        formData,
      );
      console.log("Profile updated:", response.data);
      setProfile(response.data);
      setIsPopupOpen(false);
    } catch (error) {
      console.error("Error updating profile:", error);
      setError("Failed to update profile.");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          if (profile) {
            setFormData(profile); // Ensure form gets the latest profile data
          }
          setIsPopupOpen(true);
        }}
      >
        Update Profile
      </Button>

      <Dialog open={isPopupOpen} onClose={() => setIsPopupOpen(false)}>
        <DialogTitle>Update Profile</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <TextField
              name="description"
              label="Description"
              value={formData.description}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
            <TextField
              name="name"
              label="Name"
              value={formData.name}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
            <TextField
              name="gender"
              label="Gender"
              value={formData.gender}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
            <TextField
              name="address"
              label="Address"
              value={formData.address}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
            <TextField
              name="shortBio"
              label="Short Bio"
              value={formData.shortBio}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
            <TextField
              name="phoneNumber"
              label="Phone Number"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
            <TextField
              name="email"
              label="Email"
              value={formData.email}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
            <DialogActions>
              <Button onClick={() => setIsPopupOpen(false)}>Cancel</Button>
              <Button type="submit" color="primary">
                Save
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default UpdateProfile;
