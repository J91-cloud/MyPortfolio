import React, { useState } from "react";
import axiosInstanceAuth from "../../assets/axiosIntanceAuth";
import styles from "./AddSkillPopup.module.css";

const AddSkillPopup: React.FC = () => {
  const [skillType, setSkillType] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  // Close the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSkillType("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      await axiosInstanceAuth.post("/skills", { skillType });
      setSuccess(true);
      setSkillType("");
      setTimeout(handleCloseModal, 1500);
    } catch (err) {
      setError("Failed to add skill. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={handleOpenModal} className={styles.addButton}>
        +
      </button>

      {isModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <h2>Add a New Skill</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Enter skill type"
                value={skillType}
                onChange={(e) => setSkillType(e.target.value)}
                required
              />
              <button type="submit" disabled={loading}>
                {loading ? "Adding..." : "Add Skill"}
              </button>
              <button
                type="button"
                onClick={handleCloseModal}
                className={styles.closeButton}
              >
                Close
              </button>
            </form>
            {error && <p className={styles.error}>{error}</p>}
            {success && (
              <p className={styles.success}>Skill added successfully!</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AddSkillPopup;
