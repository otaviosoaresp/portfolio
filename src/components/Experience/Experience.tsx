import React from "react";
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
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.experienceCard}>
      <div className={styles.experienceCardInner}>
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
      </div>
    </div>
  );
};

const Experience: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.experienceWrapper}>
      <section className={`${styles.experienceSection} max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`}>
        <div>
          <p className={styles.sectionSubText}>{t('experience.title')}</p>
          <h2 className={styles.sectionHeadText}>{t('experience.overview')}</h2>
        </div>
        <div className={styles.experienceTimeline}>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default SectionWrapper(Experience, "experience");
