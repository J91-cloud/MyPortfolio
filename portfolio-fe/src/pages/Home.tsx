import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import styles from './Home.module.css';
import ServiceCard from './ServiceCard';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container"
    >
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h2 className={styles.greeting}>Hello!</h2>
          <h1 className={styles.title}>I'm Jessy Gjerek</h1>
          <h3 className={styles.subtitle}>
            3rd Year Student at Champlain College.
          </h3>
          <p className={styles.description}>
            My ultimate motto is to fulfill the demand of the buyers by making them
            satisfied with proper file delivery in time and without any delay. I am an ambitions adult who is ready to take on any task demanded by my employer.
          </p>
          <div className={styles.buttons}>
            <button className={styles.startTour}>
              <span>Start Tour</span>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
        <div className={styles.heroImage} />
      </div>

      <div className={styles.services}>
        <ServiceCard
          title="UI/UX Design"
          projectCount="234+"
          description="Het is al geruime tijd een bekend gegeven"
        />
        <ServiceCard
          title="Product Design"
          projectCount="234+"
          description="Het is al geruime tijd een bekend gegeven"
        />
        <ServiceCard
          title="Graphics Design"
          projectCount="234+"
          description="Het is al geruime tijd een bekend gegeven"
        />
        <ServiceCard
          title="Website Design"
          projectCount="234+"
          description="Het is al geruime tijd een bekend gegeven"
        />
      </div>
    </motion.div>
  );
};

export default Home;

