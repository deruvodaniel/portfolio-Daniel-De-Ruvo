import { FooterStyle, FooterLinks } from "./Footer.styles";
import useDateYear from "hooks/useDateYear";
import { useRefs } from "context/refsContext";
import useWidth from "hooks/useWidth";
import { useI18n } from "context/i18nContext";

export const Footer = () => {
  const { year } = useDateYear();
  const { refHome } = useRefs();
  const { width } = useWidth();
  const { t } = useI18n();

  const goToTop = (section) => {
    if (section !== null && section.current !== null) {
      section.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <FooterStyle>
      <div className="logo-container" onClick={() => goToTop(refHome)}>
        <div className="logo-text">DR</div>
      </div>
      
      <FooterLinks>
        <a
          href="https://github.com/deruvodaniel"
          target="_blank"
          rel="noreferrer"
          title="GitHub"
        >
          <img
            alt="GitHub"
            src="https://res.cloudinary.com/dn7qsxzdf/image/upload/v1653408217/portfolio%20daniel/logog_udsccl.svg"
            width={width > 767 ? "32px" : "28px"}
            height={width > 767 ? "32px" : "28px"}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/deruvodaniel/"
          target="_blank"
          rel="noreferrer"
          title="LinkedIn"
        >
          <img
            alt="LinkedIn"
            src="https://res.cloudinary.com/dn7qsxzdf/image/upload/v1653403777/portfolio%20daniel/logoin_brxiyb.svg"
            width={width > 767 ? "32px" : "28px"}
            height={width > 767 ? "32px" : "28px"}
          />
        </a>
      </FooterLinks>
      
      <h3>{year} Daniel De Ruvo. {t('footer.rights')}</h3>
    </FooterStyle>
  );
};
