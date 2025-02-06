import DynamicForm from "../../assets/DynamicForm";
import commentRequestDTO from "../../Models/commentRequestDTO";
import profileRequestDTO from "../../Models/profileRequestDTO";

const About = () => {
  const handleSubmit = async <T extends Record<string, any>>(
    endpoint: string,
    data: T,
  ) => {
    try {
      const response = await fetch(`https://your-backend-api.com${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <h1>Dynamic Forms with Request DTOs</h1>

      <h2>Comment Form</h2>
      <DynamicForm<commentRequestDTO>
        endpoint="/submit-comment"
        formType="comment"
        onSubmit={(data) => handleSubmit("/submit-comment", data)}
      />

      <h2>Profile Form</h2>
      <DynamicForm<profileRequestDTO>
        endpoint="/submit-profile"
        formType="profile"
        onSubmit={(data) => handleSubmit("/submit-profile", data)}
      />
    </div>
  );
};

export default About;
