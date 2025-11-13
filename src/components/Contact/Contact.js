import MyForm from "components/Contact/Form/Form";
import { useState, useEffect } from "react";
import { useRefs } from "context/refsContext";
import {
  SectionContact,
  ContactTitle,
  ContactContainer,
  ContactText,
  ContactInfo,
  ContactLinks,
  BoxContactInfo,
  ButtonCopy,
} from "./Contact.styles";
import { motion } from "framer-motion";
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
      <SectionContact ref={refContact}>
        <ContactTitle>{t('contact.title')}</ContactTitle>
        <ContactContainer>
          <BoxContactInfo>
            <ContactText>{t('contact.lead')}</ContactText>
            <ContactInfo aria-live="polite" aria-atomic="true">
            <ButtonCopy onClick={copyEmail} aria-label={t('contact.copyEmail')}>
              <svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18" fill="none">
                <defs>
                  <linearGradient id="emailGradient" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="var(--colorSecondary)" />
                    <stop offset="100%" stopColor="var(--colorPrimary)" />
                  </linearGradient>
                </defs>
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="url(#emailGradient)" strokeWidth="2"/>
              </svg>
              {copyEmailSuccess ? t('contact.copiedEmail') : t('contact.copyEmail')}
            </ButtonCopy>
            <ButtonCopy onClick={copyPhone} aria-label={t('contact.copyPhone')}>
              <svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18" fill="none">
                <defs>
                  <linearGradient id="phoneGradient" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="var(--colorSecondary)" />
                    <stop offset="100%" stopColor="var(--colorPrimary)" />
                  </linearGradient>
                </defs>
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.1 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.81.3 1.6.57 2.34a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.74-1.14a2 2 0 0 1 2.11-.45c.74.27 1.53.45 2.34.57A2 2 0 0 1 22 16.92z" stroke="url(#phoneGradient)" strokeWidth="2"/>
              </svg>
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
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
                  <defs>
                    <linearGradient id="resumeGradient" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="var(--colorSecondary)" />
                      <stop offset="100%" stopColor="var(--colorPrimary)" />
                    </linearGradient>
                  </defs>
                  <path d="M7 3h7l5 5v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" stroke="url(#resumeGradient)" strokeWidth="1.6" fill="none"/>
                  <path d="M14 3v5h5" stroke="url(#resumeGradient)" strokeWidth="1.6" fill="none"/>
                  <path d="M8 12h8M8 16h8" stroke="url(#resumeGradient)" strokeWidth="1.6"/>
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
                  src="https://res.cloudinary.com/dn7qsxzdf/image/upload/v1653408217/portfolio%20daniel/logog_udsccl.svg"
                  width="18px"
                  height="18px"
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
                  src="https://res.cloudinary.com/dn7qsxzdf/image/upload/v1653403777/portfolio%20daniel/logoin_brxiyb.svg"
                  width="18px"
                  height="18px"
                />
              </a>
            </ContactLinks>
          )}
        </BoxContactInfo>
        <MyForm />
        </ContactContainer>
      </SectionContact>
    </motion.div>
  );
};
