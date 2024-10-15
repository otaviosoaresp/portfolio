import { motion } from "framer-motion"
import { t } from "i18next"
import { fadeIn } from "../../utils/motion"
import SectionWrapper from "../../utils/SectionWrapper"
import { useTranslation } from "react-i18next"


const Works: React.FC = () => {

    const { t } = useTranslation()

    return (
        <>
            <div>
                <motion.div variants={fadeIn("right", "tween", 0.2, 1)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}>
                    <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
                        {t("works.title")}
                    </p>
                    <h2 className="mt-[8px] font-black md:text-[60px] sm:text-[50px] text-[40px] text-white">
                        {t("works.title2")}
                    </h2>
                </motion.div>
            </div>
            
        </>
    )
}

export default SectionWrapper(Works, "works")