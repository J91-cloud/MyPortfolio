import { useState, useEffect } from "react";
import axiosInstance from "../../assets/axiosInstance";
import projectRequestDTO from "../../Models/projectRequestDTO";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from "@mui/material";

interface UpdateProjectProps {
    projectId: string;
  }

  


  const UpdateProject: React.FC<UpdateProjectProps> = ({ projectId }) => {
  const [project, setProject] = useState<projectRequestDTO | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const [formData, setFormData] = useState<projectRequestDTO>({
    name: "",
    description: "",
    startDate: "",
    endDate: "",
    githubLink: "",
  });

  useEffect(() => {
      axiosInstance
        .get(`/projects/${projectId}`)
        .then((response) => {
          const projectData: projectRequestDTO = response.data;
          setProject(projectData);
          setFormData(projectData);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching project:", error);
          setError("Failed to fetch project.");
          setLoading(false);
        });
  }, []);

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
        `/projects/${projectId}`,
        formData
      );
      console.log("Project updated:", response.data);
      setProject(response.data);
      setIsPopupOpen(false);
    } catch (error) {
      console.error("Error updating project:", error);
      setError("Failed to update project.");
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
          if (project) {
            setFormData(project); 
          }
          setIsPopupOpen(true);
        }}
      >
        Update Project
      </Button>


    <Dialog open={isPopupOpen} onClose={() => setIsPopupOpen(false)}>
      <DialogTitle>Update Project</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <TextField
            name="name"
            label="Name"
            value={formData.name}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="description"
            label="Description"
            value={formData.description}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="startDate"
            label="Start Date"
            value={formData.startDate}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="endDate"
            label="End Date"
            value={formData.endDate}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="githubLink"
            label="GitHub Link"
            value={formData.githubLink}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <DialogActions>
            <Button onClick={()=> setIsPopupOpen(false)}>Cancel</Button>
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

export default UpdateProject;