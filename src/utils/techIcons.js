import {
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiJavascript,
  SiTypescript,
  SiStorybook,
  SiMui,
  SiStyledcomponents,
  SiSass,
  SiCss3,
  SiCypress,
  SiJest,
  SiGit,
  SiDocker,
  SiGithubactions,
  SiFigma,
  SiGoogleanalytics,
  SiTailwindcss,
  SiRadixui,
  SiOpenai,
} from 'react-icons/si';

/**
 * Mapa de iconos de tecnologías
 * Convierte el texto de la tecnología a su componente de icono correspondiente
 */
export const techIconsMap = {
  'react': SiReact,
  'next.js': SiNextdotjs,
  'nextjs': SiNextdotjs,
  'vue.js': SiVuedotjs,
  'vue': SiVuedotjs,
  'javascript': SiJavascript,
  'typescript': SiTypescript,
  'ai tools': SiOpenai,
  'tailwind css': SiTailwindcss,
  'radix ui': SiRadixui,
  'storybook': SiStorybook,
  'mui': SiMui,
  'styled components': SiStyledcomponents,
  'sass': SiSass,
  'css modules': SiCss3,
  'cypress': SiCypress,
  'playwright': null, // Icon not available in react-icons, will use fallback
  'jest': SiJest,
  'git': SiGit,
  'docker': SiDocker,
  'ci/cd': SiGithubactions,
  'figma': SiFigma,
  'a11y / seo / analytics': SiGoogleanalytics,
};

/**
 * Crea un icono de tecnología o un fallback con las iniciales
 * @param {React.Component} Icon - Componente de icono de react-icons
 * @param {string} text - Texto de la tecnología (usado para fallback)
 * @returns {React.Element} Elemento de icono o fallback
 */
export const createTechIcon = (Icon, text) => {
  if (Icon) {
    return <Icon color="var(--colorPrimary)" />;
  }
  
  // Fallback: mostrar las primeras 2 letras del texto
  return (
    <span style={{ 
      fontSize: '24px', 
      fontWeight: 'bold', 
      color: 'var(--colorPrimary)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '32px',
      height: '32px',
      background: 'var(--borderColor)',
      borderRadius: '8px'
    }}>
      {(text || '').slice(0, 2).toUpperCase()}
    </span>
  );
};

/**
 * Obtiene el icono de una tecnología basado en su texto
 * @param {string} techText - Texto de la tecnología
 * @returns {React.Component|null} Componente de icono o null
 */
export const getTechIcon = (techText) => {
  const key = (techText || '').toLowerCase();
  return techIconsMap[key] || null;
};

/**
 * Transforma un array de tecnologías agregando sus iconos
 * @param {Array} technologies - Array de objetos de tecnología con propiedad 'text'
 * @returns {Array} Array transformado con propiedad 'icon' agregada
 */
export const addIconsToTechnologies = (technologies) => {
  return technologies.map(tech => {
    const Icon = getTechIcon(tech.text);
    return {
      ...tech,
      name: tech.text,
      icon: createTechIcon(Icon, tech.text)
    };
  });
};
