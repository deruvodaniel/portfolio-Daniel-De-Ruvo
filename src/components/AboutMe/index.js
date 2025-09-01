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

  const skills = [
    { icon: '🚀', title: 'Frontend Development', description: 'React, Next.js, Vue.js' },
    { icon: '🎨', title: 'UI/UX Design', description: 'Figma, Adobe XD, Design Systems' },
    { icon: '⚡', title: 'Performance', description: 'Optimization, SEO, Accessibility' }
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
          <AboutMeTitle>About Me</AboutMeTitle>
          
          <AboutMeDescription>
            I'm a <strong>Senior UX Frontend Developer</strong> with over 5 years of experience 
            creating scalable, high-performance web applications. I specialize in React, 
            Next.js, and design systems, with a focus on user experience and accessibility.
          </AboutMeDescription>
          
          <AboutMeDescription>
            I've led frontend development teams for 10+ international clients, 
            implementing innovative solutions that have improved conversion rates by an 
            average of 40%. My experience ranges from startups to Fortune 500 companies.
          </AboutMeDescription>

          <SkillsContainer>
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <SkillCard>
                  <div className="icon">{skill.icon}</div>
                  <div className="title">{skill.title}</div>
                  <div className="description">{skill.description}</div>
                </SkillCard>
              </motion.div>
            ))}
          </SkillsContainer>

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
            <a href="#contact">Contact Me</a>
          </AboutMeBoxLinks>
        </AboutMeContent>
      </SectionAboutMe>
    </motion.div>
  );
};