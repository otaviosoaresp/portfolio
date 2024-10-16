import React from "react";
import { motion } from "framer-motion";
import { textVariant, fadeIn } from "../../utils/motion";
import { useTranslation } from "react-i18next";
import { experiences } from "../../constants/info";
import styles from './Experience.module.scss';
import SectionWrapper from "../../utils/SectionWrapper";

interface ExperienceCardProps {
  experience: {
    title: string;
    company_name: string;
    icon: string;
    iconBg: string;
    date: string;
    points: string[];
  };
  index: number;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, index }) => {
  const { t } = useTranslation();

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className={styles.experienceCard}
    >
      <div className={styles.experienceIconContainer} style={{ backgroundColor: experience.iconBg }}>
        <img src={experience.icon} alt={t(experience.company_name)} className={styles.experienceIcon} />
      </div>
      <div className={styles.experienceCardContent}>
        <h3 className={styles.experienceTitle}>{t(experience.title)}</h3>
        <p className={styles.experienceCompany}>{t(experience.company_name)}</p>
        <p className={styles.experienceDate}>{t(experience.date)}</p>
        <ul className={styles.experiencePoints}>
          {experience.points.map((point, index) => (
            <li key={`experience-point-${index}`}>{t(point)}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const Experience: React.FC = () => {
  const { t } = useTranslation();

  return (
    <motion.section
      variants={textVariant(0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.experienceSection} max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`}
    >
      <motion.div>
        <p className={styles.sectionSubText}>{t('experience.title')}</p>
        <h2 className={styles.sectionHeadText}>{t('experience.overview')}</h2>
      </motion.div>
      <div className={styles.experienceTimeline}>
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} index={index} />
        ))}
      </div>
    </motion.section>
  );
};

export default SectionWrapper(Experience, "experience");
