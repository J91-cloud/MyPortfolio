import styles from "./ServiceCard.module.css";

interface ServiceCardProps {
  title: string;
  projectCount: string;
  description: string;
}

const ServiceCard = ({
  title,
  projectCount,
  description,
}: ServiceCardProps) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
      <p className={styles.projectCount}>{projectCount} project</p>
    </div>
  );
};

export default ServiceCard;
