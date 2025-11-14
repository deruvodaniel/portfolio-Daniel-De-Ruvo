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
          href="https://cdn.builder.io/o/assets%2Feb9edba76d874a5385833a00b6be2b6e%2F44c199474638431da9d1c7d8d0e28707?alt=media&token=1af667d8-3632-4777-b419-39ad015be4eb&apiKey=eb9edba76d874a5385833a00b6be2b6e"
          target="_blank"
          rel="noreferrer"
          title="Resume"
          aria-label="Open resume in a new tab"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
            <path d="M7 3h7l5 5v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" strokeWidth="1.6" fill="none"/>
            <path d="M14 3v5h5" strokeWidth="1.6" fill="none"/>
            <path d="M8 12h8M8 16h8" strokeWidth="1.6"/>
          </svg>
        </a>
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
