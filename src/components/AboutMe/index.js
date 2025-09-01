import React from 'react';
import { motion } from 'framer-motion';
import { useRefs } from 'context/refsContext';
import {
  SectionAboutMe,
  AboutMeContent,
  AboutMeTitle,
  AboutMeDescription,
  AboutMeBoxLinks,
  SkillsContainer,
  SkillCard
} from './aboutMe.styles';

export const AboutMe = () => {
  const { refAboutMe } = useRefs();

  const experiences = [
    {
      title: "Frontend Architecture",
      description: "Building scalable React applications with modern tooling, TypeScript, and performance optimization. Expert in micro-frontends and design systems."
    },
    {
      title: "UX Engineering", 
      description: "Bridging design and development with user-centered solutions. Specializing in accessibility, responsive design, and interaction patterns."
    },
    {
      title: "Team Leadership",
      description: "Leading cross-functional teams, mentoring developers, and establishing best practices. Experience with Agile methodologies and code reviews."
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <SectionAboutMe ref={refAboutMe}>
        <AboutMeContent>
          <div>
            <AboutMeTitle>About</AboutMeTitle>
            <AboutMeDescription>
              I'm a <strong>Senior UX Frontend Developer</strong> with over 5 years of experience 
              creating exceptional digital experiences. I specialize in React, Next.js, and 
              design systems, with a passion for performance and accessibility.
            </AboutMeDescription>
            
            <AboutMeDescription>
              Currently, I lead frontend development for international clients, focusing on 
              scalable architectures and user-centered design. I believe in the power of 
              clean code, thoughtful UX, and continuous learning.
            </AboutMeDescription>

            <AboutMeBoxLinks>
              <a
                href="https://github.com/deruvodaniel"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  alt="GitHub"
                  src="https://res.cloudinary.com/dn7qsxzdf/image/upload/v1653917728/portfolio%20daniel/logogblanco_imqksz.svg"
                  width="28"
                  height="28"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/deruvodaniel/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  alt="LinkedIn"
                  src="https://res.cloudinary.com/dn7qsxzdf/image/upload/v1653917728/portfolio%20daniel/logoinblanco_isyvzt.svg"
                  width="28"
                  height="28"
                />
              </a>
              <a href="#contact">Get In Touch</a>
            </AboutMeBoxLinks>
          </div>

          <SkillsContainer>
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <SkillCard>
                  <div className="title">{exp.title}</div>
                  <div className="description">{exp.description}</div>
                </SkillCard>
              </motion.div>
            ))}
          </SkillsContainer>
        </AboutMeContent>
      </SectionAboutMe>
    </motion.div>
  );
};