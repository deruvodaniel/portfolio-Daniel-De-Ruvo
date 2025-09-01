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
      <ContactTitle ref={refContact}>{t('contact.title')}</ContactTitle>
      <SectionContact>
        <BoxContactInfo>
          <ContactText>{t('contact.lead')}</ContactText>
          <ContactInfo>
            <ButtonCopy onClick={copyEmail}>
              {copyEmailSuccess ? t('contact.copiedEmail') : t('contact.copyEmail')}
            </ButtonCopy>
            <ButtonCopy onClick={copyPhone}>
              {copyPhoneSuccess ? t('contact.copiedPhone') : t('contact.copyPhone')}
            </ButtonCopy>
          </ContactInfo>
          {width > 1024 && (
            <ContactLinks>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noreferrer"
                className="twitter"
              >
                <img
                  alt="Twitter"
                  src="https://res.cloudinary.com/dn7qsxzdf/image/upload/v1653917728/portfolio%20daniel/logotblanco_pjudi4.svg"
                  width="45px"
                  height="40px"
                />
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
