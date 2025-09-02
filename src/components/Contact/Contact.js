import MyForm from "components/Contact/Form/Form";
import { useState, useEffect } from "react";
import { useRefs } from "context/refsContext";
import {
  SectionContact,
  ContactTitle,
  ContactText,
  ContactInfo,
  ContactLinks,
  BoxContactInfo,
  ButtonCopy,
} from "./Contact.styles";
import { motion } from "framer-motion";
import ParallaxText from "components/ParallaxText";
import useWidth from "hooks/useWidth";
import { useI18n } from "context/i18nContext";

export const Contact = () => {
  const { refContact } = useRefs();
  const [copyEmailSuccess, setCopyEmailSuccess] = useState(false);
  const [copyPhoneSuccess, setCopyPhoneSuccess] = useState(false);
  const { width } = useWidth();
  const initial = width > 700 ? -500 : 0;
  const { t } = useI18n();

  const copyEmail = (e) => {
    e.target.focus();
    navigator.clipboard.writeText("deruvodaniel@gmail.com");
    setCopyEmailSuccess(t('contact.copiedEmail'));
  };

  const copyPhone = (e) => {
    e.target.focus();
    navigator.clipboard.writeText("+5491165911732");
    setCopyPhoneSuccess(t('contact.copiedPhone'));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCopyEmailSuccess(false);
      setCopyPhoneSuccess(false);
    }, 3000);
    return () => clearInterval(interval);
  }, [setCopyEmailSuccess, setCopyPhoneSuccess]);

  return (
    <motion.div
      initial={{ opacity: 0, x: initial }}
      whileInView={{ opacity: 1 }}
      transition={{ type: "spring", duration: 2 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <ParallaxText As={ContactTitle} amount={36} fade={0.16} ref={refContact}>{t('contact.title')}</ParallaxText>
      <SectionContact>
        <BoxContactInfo>
          <ContactText>{t('contact.lead')}</ContactText>
          <ContactInfo aria-live="polite" aria-atomic="true">
            <ButtonCopy onClick={copyEmail} aria-label={t('contact.copyEmail')}>
              <svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16v16H4z" opacity="0.2"/><path d="M4 8l8 6 8-6"/></svg>
              {copyEmailSuccess ? t('contact.copiedEmail') : t('contact.copyEmail')}
            </ButtonCopy>
            <ButtonCopy onClick={copyPhone} aria-label={t('contact.copyPhone')}>
              <svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.1 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.81.3 1.6.57 2.34a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.74-1.14a2 2 0 0 1 2.11-.45c.74.27 1.53.45 2.34.57A2 2 0 0 1 22 16.92z"/></svg>
              {copyPhoneSuccess ? t('contact.copiedPhone') : t('contact.copyPhone')}
            </ButtonCopy>
          </ContactInfo>
          {width > 1024 && (
            <ContactLinks>
              <a
                href="https://cdn.builder.io/o/assets%2Feb9edba76d874a5385833a00b6be2b6e%2F44c199474638431da9d1c7d8d0e28707?alt=media&token=1af667d8-3632-4777-b419-39ad015be4eb&apiKey=eb9edba76d874a5385833a00b6be2b6e"
                target="_blank"
                rel="noreferrer"
                title="Resume"
                aria-label="Open resume in a new tab"
              >
                <svg width="45" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
                  <path d="M7 3h7l5 5v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" stroke="currentColor" stroke-width="1.6" fill="none"/>
                  <path d="M14 3v5h5" stroke="currentColor" stroke-width="1.6" fill="none"/>
                  <path d="M8 12h8M8 16h8" stroke="currentColor" stroke-width="1.6"/>
                </svg>
              </a>
              <a
                href="https://github.com/deruvodaniel"
                target="_blank"
                rel="noreferrer"
                title="Github"
              >
                <img
                  alt="GitHub"
                  src="https://res.cloudinary.com/dn7qsxzdf/image/upload/v1653917728/portfolio%20daniel/logogblanco_imqksz.svg"
                  width="45px"
                  height="40px"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/deruvodaniel/"
                target="_blank"
                title="Linkedin"
                rel="noreferrer"
              >
                <img
                  alt="Linkedin"
                  src="https://res.cloudinary.com/dn7qsxzdf/image/upload/v1653917728/portfolio%20daniel/logoinblanco_isyvzt.svg"
                  width="45px"
                  height="40px"
                />
              </a>
            </ContactLinks>
          )}
        </BoxContactInfo>
        <MyForm />
      </SectionContact>
    </motion.div>
  );
};
