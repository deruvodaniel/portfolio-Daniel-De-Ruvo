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
        <div className="logo-mark" aria-label="Home" role="img">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="logoGradFooter" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#00E5FF" />
                <stop offset="60%" stopColor="#00FFA3" />
                <stop offset="100%" stopColor="#7CFFCB" />
              </linearGradient>
            </defs>
            <path d="M4 9h10v4a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V9Z" stroke="url(#logoGradFooter)" strokeWidth="1.6" fill="none"/>
            <path d="M14 10h3a2 2 0 0 1 0 4h-3" stroke="url(#logoGradFooter)" strokeWidth="1.6" fill="none"/>
            <path d="M7 5c0 1 1 1 1 2s-1 1-1 2M10 5c0 1 1 1 1 2s-1 1-1 2" stroke="url(#logoGradFooter)" strokeWidth="1.6" strokeLinecap="round"/>
          </svg>
        </div>
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
