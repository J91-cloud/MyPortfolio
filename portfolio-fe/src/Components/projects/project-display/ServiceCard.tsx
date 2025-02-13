import styles from "./ServiceCard.module.css";
import projectRequestDTO from "../../../Models/projectRequestDTO";

const ServiceCard = ({
  name,
  description,
  startDate,
  endDate,
  githubLink,
}: projectRequestDTO) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.cardTitle}>{name}</h3>
      <p className={styles.cardDescription}>{description}</p>
      <p className={styles.projectDates}>
        <strong>Start Date:</strong> {startDate} | <strong>End Date:</strong>{" "}
        {endDate}
      </p>
      <p>{githubLink}</p>
    </div>
  );
};

export default ServiceCard;
