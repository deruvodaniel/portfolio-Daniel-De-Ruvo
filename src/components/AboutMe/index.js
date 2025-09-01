import {
  SectionAboutMe,
  AboutMeContent,
  AboutMeTitle,
  AboutMeDescription,
  AboutMeBoxLinks,
  SkillsContainer,
  SkillCard,
} from "./aboutMe.styles";
import { motion } from "framer-motion";
import useWidth from "../../hooks/useWidth";
import { useRefs } from "../../context/refsContext";

export const AboutMe = () => {
  const { refAboutMe } = useRefs();
  const { width } = useWidth();
  const initial = width > 700 ? -500 : 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: initial }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ type: "spring", bounce: 0.4, duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <SectionAboutMe ref={refAboutMe}>
        <AboutMeContent>
          <div>
            <AboutMeTitle>About</AboutMeTitle>
            <AboutMeDescription>
              I'm a <strong>Senior Frontend Developer</strong> with over 3 years of experience 
              crafting exceptional digital experiences. I specialize in modern JavaScript frameworks, 
              responsive design, and performance optimization.
            </AboutMeDescription>
            <AboutMeDescription>
              My passion lies in transforming complex problems into simple, beautiful, and intuitive solutions. 
              I believe in writing clean, maintainable code and staying up-to-date with the latest industry trends.
            </AboutMeDescription>
            <AboutMeBoxLinks>
              <a
                href="https://github.com/deruvodaniel"
                target="_blank"
                rel="noreferrer"
                title="GitHub"
              >
                <img
                  alt="GitHub"
                  src="https://res.cloudinary.com/dn7qsxzdf/image/upload/v1653917728/portfolio%20daniel/logogblanco_imqksz.svg"
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
                  src="https://res.cloudinary.com/dn7qsxzdf/image/upload/v1653917728/portfolio%20daniel/logoinblanco_isyvzt.svg"
                />
              </a>
              <a
                href="mailto:deruvodaniel@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>
            </AboutMeBoxLinks>
          </div>
          
          <SkillsContainer>
            <SkillCard>
              <div className="icon">⚡</div>
              <h3 className="title">Frontend Development</h3>
              <p className="description">
                Building responsive, performant web applications with modern frameworks 
                like React, Vue.js, and cutting-edge CSS techniques.
              </p>
            </SkillCard>
            
            <SkillCard>
              <div className="icon">🎨</div>
              <h3 className="title">UI/UX Design</h3>
              <p className="description">
                Creating intuitive user interfaces with attention to detail, 
                accessibility, and user experience best practices.
              </p>
            </SkillCard>
            
            <SkillCard>
              <div className="icon">🚀</div>
              <h3 className="title">Performance</h3>
              <p className="description">
                Optimizing applications for speed, SEO, and scalability using 
                modern build tools and performance monitoring.
              </p>
            </SkillCard>
          </SkillsContainer>
        </AboutMeContent>
      </SectionAboutMe>
    </motion.div>
  );
};