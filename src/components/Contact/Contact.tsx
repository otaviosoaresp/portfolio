import React, { useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import styles from "./Contact.module.scss";
import SectionWrapper from "../../utils/SectionWrapper";

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAIL_JS_SERVICE_ID,
        import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID,
        {
          from_name: name,
          reply_to: email,
          message: message
        },
        import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY
      );
      setSubmitMessage(t("contact.successMessage"));
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Erro ao enviar e-mail:", error);
      setSubmitMessage(t("contact.errorMessage"));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.contactSection}>
      <motion.div
        className={styles.contactContainer}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className={styles.title}>{t("contact.title")}</h2>
        <p className={styles.introText}>
          {t("contact.introText")}
        </p>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={t("contact.namePlaceholder")}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t("contact.emailPlaceholder")}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={t("contact.messagePlaceholder")}
              required
            />
          </div>
          <motion.button
            type="submit"
            className={styles.submitButton}
            disabled={isSubmitting}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isSubmitting ? t("contact.sending") : t("contact.send")}
          </motion.button>
        </form>
        {submitMessage && (
          <motion.p
            className={styles.submitMessage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {submitMessage}
          </motion.p>
        )}
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
