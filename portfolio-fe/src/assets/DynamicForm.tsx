import React, { useState, useEffect } from "react";
import "../styles/global.css";

type FormField = {
  name: string;
  type: "text" | "number" | "email" | "password" | "textarea" | "select";
  label: string;
  required?: boolean;
  enum?: string[];
};

type FormConfig = {
  fields: FormField[];
  submitButtonText: string;
  successMessage: string;
};

const formConfigs: Record<string, FormConfig> = {
  comment: {
    fields: [
      { name: "name", type: "text", label: "Name", required: true },
      { name: "content", type: "textarea", label: "Content", required: true },
      { name: "profession", type: "text", label: "Profession", required: true },
    ],
    submitButtonText: "Submit Comment",
    successMessage:
      "Your comment has been submitted successfully! And will be reviewed by the creator ✅",
  },
  skill: {
    fields: [
      { name: "skillType", type: "text", label: "Skill", required: true },
    ],
    submitButtonText: "Submit Skill",
    successMessage: "Your skill has been added! 🚀",
  },
  education: {
    fields: [
      {
        name: "schoolName",
        type: "text",
        label: "School Name",
        required: true,
      },
      { name: "year", type: "text", label: "Year", required: true },
      { name: "location", type: "text", label: "Location", required: true },
      {
        name: "description",
        type: "text",
        label: "Description",
        required: true,
      },
    ],
    submitButtonText: "Submit School / Achievement",
    successMessage: "Education details added successfully! 🎓",
  },
  project: {
    fields: [
      { name: "name", type: "text", label: "Project Name", required: true },
      { name: "startDate", type: "text", label: "Start Date", required: true },
      { name: "endDate", type: "text", label: "End Date", required: true },
      {
        name: "githubClone",
        type: "text",
        label: "githubClone",
        required: true,
      },
      { name: "imageURL", type: "text", label: "imageURL", required: true },
      {
        name: "category",
        type: "select",
        label: "Category",
        required: true,
        enum: ["WEB_DEVELOPMENT", "IT", "SCRIPT"],
      },

      {
        name: "githubLink",
        type: "text",
        label: "GitHub Link",
        required: true,
      },
      {
        name: "description",
        type: "text",
        label: "Description",
        required: true,
      },
    ],
    submitButtonText: "Submit Project",
    successMessage: "Your project has been added successfully! 💻",
  },
};

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const formConfig = formConfigs[formType];

  const handleChange = (e: React.ChangeEvent<any>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(formData as T);
    setSuccessMessage(formConfig.successMessage);

    setTimeout(() => {
      setSuccessMessage(null);
    }, 1500);

    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  return (
    <>
      <button className="add-button" onClick={() => setIsModalOpen(true)}>
        Add Your Own!
      </button>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>{formConfig.submitButtonText}</h2>

            {!successMessage ? (
              <form onSubmit={handleSubmit}>
                {formConfig.fields.map((field) => (
                  <div key={field.name} className="form-field">
                    <label>{field.label}</label>
                    {field.type === "select" ? (
                      <select
                        name={field.name}
                        value={formData[field.name] || ""}
                        onChange={handleChange}
                        required={field.required}
                      >
                        {field.enum?.map((item) => (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
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
            ) : (
              <p className="success-message">
                {successMessage && <>{successMessage}</>}
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default DynamicForm;
