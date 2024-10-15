import { motion } from "framer-motion"
import Tilt from 'react-parallax-tilt';
import { fadeIn } from "../../utils/motion"
import SectionWrapper from "../../utils/SectionWrapper"
import { useTranslation } from "react-i18next"
import { works } from "../../constants/info"
import { github } from "../../assets"
import styles from "./Works.module.scss"

const ProjectCard: React.FC<{ project: typeof works[0], index: number }> = ({ project, index }) => {
  const { t } = useTranslation()

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        tiltMaxAngleX={15}
        tiltMaxAngleY={15}
        scale={1.02}
        transitionSpeed={450}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={project.image}
            alt={t(project.name)}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute top-2 right-2">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => window.open(project.source_code_link, "_blank")}
              className="bg-black bg-opacity-50 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer shadow-lg"
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </motion.div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{t(project.name)}</h3>
          <p className="mt-2 text-secondary text-[14px]">{t(project.description)}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags?.map((tag) => (
            <span 
              key={tag.name} 
              className={`${styles[tag.color]} px-2 py-1 rounded-full text-[12px] font-semibold`}
            >
              {tag.name}
            </span>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works: React.FC = () => {
  const { t } = useTranslation()

  return (
    <>
      <motion.div variants={fadeIn("down", "spring", 0.1, 1)}>
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
          {t("works.title")}
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          {t("works.title2")}
        </h2>
      </motion.div>

      <div className="mt-8 flex flex-wrap gap-7">
        {works.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            project={project}
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "works")
