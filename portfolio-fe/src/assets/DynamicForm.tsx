// DynamicForm.tsx
import React, { useState } from "react";
import "../styles/global.css";

type FormField = {
  name: string;
  type: "text" | "number" | "email" | "password" | "textarea";
  label: string;
  required?: boolean;
};

type FormConfig = {
  fields: FormField[];
  submitButtonText: string;
};

// Define form configurations for each request DTO
const formConfigs: Record<string, FormConfig> = {
  comment: {
    fields: [
      { name: "name", type: "text", label: "Name", required: true },
      { name: "content", type: "textarea", label: "Content", required: true },
      { name: "profession", type: "text", label: "Profession", required: true },
    ],
    submitButtonText: "Submit Comment",
  },
  skill: {
    fields: [
      { name: "skillType", type: "text", label: "Skill", required: true },
    ],
    submitButtonText: "Submit Skill",
  },
  education: {
    fields: [
      {
        name: "schoolName",
        type: "text",
        label: "School Name",
        required: true,
      },
      { name: "year", type: "textarea", label: "Year", required: true },
      { name: "location", type: "text", label: "Location", required: true },
      {
        name: "description",
        type: "text",
        label: "Desccription",
        required: true,
      },
    ],
    submitButtonText: "Submit School / Acheivement",
  },
  project: {
    fields: [
      { name: "name", type: "text", label: "Name", required: true },
      {
        name: "startDate",
        type: "textarea",
        label: "Start Date",
        required: true,
      },
      { name: "endDate", type: "textarea", label: "End Date", required: true },
      {
        name: "githubLink",
        type: "text",
        label: "GitHub Link",
        required: true,
      },
      {
        name: "description",
        type: "text",
        label: "Desccription",
        required: true,
      },
    ],
    submitButtonText: "Submit School / Acheivement",
  },
};

// Define the DynamicForm component
type DynamicFormProps<T> = {
  endpoint: string;
  formType: keyof typeof formConfigs;
  onSubmit: (data: T) => Promise<void>;
};

const DynamicForm = <T extends Record<string, any>>({
  endpoint,
  formType,
  onSubmit,
}: DynamicFormProps<T>) => {
  const [formData, setFormData] = useState<Partial<T>>({});
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  const formConfig = formConfigs[formType];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(formData as T);
    setIsModalOpen(false); // Close the modal after submission
  };

  return (
    <>
      {/* Add Button to Open Modal */}
      <button className="add-button" onClick={() => setIsModalOpen(true)}>
        Add New Entry
      </button>

      {/* Modal Overlay */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>{formConfig.submitButtonText}</h2>
            <form onSubmit={handleSubmit}>
              {formConfig.fields.map((field) => (
                <div key={field.name} className="form-field">
                  <label>{field.label}</label>
                  {field.type === "textarea" ? (
                    <textarea
                      name={field.name}
                      value={formData[field.name] || ""}
                      onChange={handleChange}
                      required={field.required}
                    />
                  ) : (
                    <input
                      type={field.type}
                      name={field.name}
                      value={formData[field.name] || ""}
                      onChange={handleChange}
                      required={field.required}
                    />
                  )}
                </div>
              ))}
              <button type="submit" className="submit-button">
                {formConfig.submitButtonText}
              </button>
              <button
                type="button"
                className="cancel-button"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default DynamicForm;
