import { useRefs } from "context/refsContext";
import { motion } from "framer-motion";
import useWidth from "hooks/useWidth";
import {
  AboutMeContent,
  AboutMeBoxLinks,
  AboutMeDescription,
  AboutMeTitle,
  SectionAboutMe,
  SkillsContainer,
  SkillCard,
} from "./aboutMe.styles";

export const AboutMe = () => {
  const { refAboutMe } = useRefs();
  const { width } = useWidth();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  const skillsVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const skillCardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <SectionAboutMe ref={refAboutMe}>
        <AboutMeContent>
          <motion.div variants={itemVariants}>
            <AboutMeTitle>About Me</AboutMeTitle>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <AboutMeDescription>
              I'm a passionate Senior UX Frontend Developer with over 5 years of experience 
              creating exceptional digital experiences. I specialize in React, Next.js, and 
              modern web technologies, with a strong focus on user experience design and 
              accessibility. I love solving complex problems and turning ideas into beautiful, 
              functional applications that make a real impact.
            </AboutMeDescription>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <AboutMeBoxLinks>
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
              <a
                href="https://drive.google.com/uc?id=1lgCyp5BOuSfQFZ3BB9z4hzxt0NApVRdb&export=download"
                target="_blank"
                rel="noreferrer"
                title="Download Resume"
              >
                Resume
              </a>
            </AboutMeBoxLinks>
          </motion.div>
        </AboutMeContent>

        <motion.div
          variants={skillsVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <SkillsContainer>
            <motion.div variants={skillCardVariants}>
              <SkillCard className="hover-lift">
                <div className="icon">🎨</div>
                <div className="title">UX/UI Design</div>
                <div className="description">
                  Creating intuitive user experiences with modern design systems and accessibility in mind
                </div>
              </SkillCard>
            </motion.div>
            
            <motion.div variants={skillCardVariants}>
              <SkillCard className="hover-lift">
                <div className="icon">⚡</div>
                <div className="title">Frontend Development</div>
                <div className="description">
                  Building scalable applications with React, Next.js, and cutting-edge web technologies
                </div>
              </SkillCard>
            </motion.div>
            
            <motion.div variants={skillCardVariants}>
              <SkillCard className="hover-lift">
                <div className="icon">🚀</div>
                <div className="title">Performance Optimization</div>
                <div className="description">
                  Delivering high-performance applications with advanced optimization techniques
                </div>
              </SkillCard>
            </motion.div>
          </SkillsContainer>
        </motion.div>
      </SectionAboutMe>
    </motion.div>
  );
};