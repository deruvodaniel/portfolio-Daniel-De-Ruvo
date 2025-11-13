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
    if (section && section.current) {
      const headerOffset = window.innerWidth < 1024 ? 80 : 110;
      const elementPosition = section.current.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <FooterStyle>
      <div className="logo-container" onClick={() => goToTop(refHome)}>
        <img src="/DR-Logo.png" alt="Daniel De Ruvo" className="logo-image" width="70" height="70" />
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
