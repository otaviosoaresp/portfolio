import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Tilt from 'react-parallax-tilt';
import { fadeIn, textVariant, staggerContainer } from '../../utils/motion';
import styles from './About.module.scss';
import { services } from '../../constants/info';
import SectionWrapper from '../../utils/SectionWrapper';

interface ServiceCardProps {
  index: number;
  title: string;
  icon: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ index, title, icon }) => (
  <Tilt className={styles.card}>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className={`${styles.shadowCard} ${styles.greenPinkGradient} w-full p-[1px] rounded-[20px]`}
    >
      <div className={`${styles.cardBg} rounded-[20px] py-5 px-12 min-h-[240px] flex justify-evenly items-center flex-col`}>
        <img src={icon} alt={title} className='w-16 h-16 object-contain' />
        <h3 className='text-white text-[18px] font-bold text-center'>{title}</h3>
      </div>
    </motion.div>
  </Tilt>
);

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <motion.section
      variants={staggerContainer(0.1, 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className='max-w-7xl mx-auto px-4 sm:px-6 mt-6 lg:px-8 relative z-0'
    >
      <motion.div variants={textVariant(0.2)}>
        <p className='sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider'>{t('about.introduction')}</p>   
        <h2 className='text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>{t('about.overview')}</h2>
      </motion.div>
    
      <motion.p
        variants={fadeIn("left", "spring", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        {t('about.description')}
      </motion.p>

      <div className={`mt-20 ${styles.cardContainer}`}>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </motion.section>
  );
};

export default SectionWrapper(About, "about");