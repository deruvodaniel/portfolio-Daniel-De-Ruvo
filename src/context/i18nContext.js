import React, { createContext, useCallback, useContext, useMemo, useState, useEffect } from 'react';

const I18nContext = createContext();

export const useI18n = () => {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within I18nProvider');
  return ctx;
};

const dict = {
  en: {
    header: { home: 'Home', about: 'About', skills: 'Skills', projects: 'Projects', contact: 'Contact', theme: 'Theme', language: 'ES/EN' },
    home: {
      kicker: 'Frontend Developer',
      name: 'Daniel De Ruvo',
      subtitle: 'Creating Digital Experiences',
      description: 'I craft exceptional digital experiences through clean code, modern design, and user-centered thinking. Specialized in React, Vue.js, and performance optimization.',
      viewProjects: 'View Projects',
      getInTouch: 'Get In Touch',
      years: 'Years Experience',
      projects: 'Projects Completed',
      satisfaction: 'Client Satisfaction',
    },
    about: {
      title: 'About',
      p1: "I'm a Senior Frontend Developer with over 3 years of experience crafting exceptional digital experiences. I specialize in modern JavaScript frameworks, responsive design, and performance optimization.",
      p2: 'My passion lies in transforming complex problems into simple, beautiful, and intuitive solutions. I believe in writing clean, maintainable code and staying up-to-date with the latest industry trends.',
      resume: 'Resume',
      skillFrontend: 'Frontend Development',
      skillFrontendDesc: 'Building responsive, performant web applications with modern frameworks like React, Vue.js, and cutting-edge CSS techniques.',
      skillDesign: 'UI/UX Design',
      skillDesignDesc: 'Creating intuitive user interfaces with attention to detail, accessibility, and user experience best practices.',
      skillPerf: 'Performance',
      skillPerfDesc: 'Optimizing applications for speed, SEO, and scalability using modern build tools and performance monitoring.',
    },
    tech: { title: 'Technologies' },
    projects: { title: 'Selected Work', live: 'Live Site', source: 'Source Code', category: 'Web Application', year: '2024' },
    courses: { title: 'Courses' },
    contact: {
      title: 'Contact',
      lead: "Do you have a project in mind? Let's talk!",
      copyEmail: 'Copy email',
      copiedEmail: 'Email copied',
      copyPhone: 'Copy phone',
      copiedPhone: 'Phone copied',
    },
    form: {
      name: 'Name', phone: 'Cellphone', email: 'Email', subject: 'Subject', message: 'Message', send: 'SEND',
      required: 'Field is required', minName: 'The name must be at least 3 characters long', maxName: 'Maximum characters reached', lettersOnly: 'You can only enter letters',
      maxPhone: 'The maximum number of characters is 20', minPhone: 'The minimum number of characters is 10', numbersOnly: 'You can only enter numbers',
      minEmail: 'The minimum number of characters is 10', maxEmail: 'The maximum number of characters is 40', invalidEmail: 'You must enter a valid email address',
      minSubject: 'The subject line must be at least 6 characters long', maxSubject: 'Maximum characters reached', lettersNumbers: 'You can only enter letters and numbers',
      minMessage: 'The message must be at least 10 characters long', maxMessage: 'Maximum characters reached',
      sentSuccess: 'Message sent successfully', sentError: 'An error occurred while sending the message',
    },
    footer: { rights: 'All rights reserved.' },
  },
  es: {
    header: { home: 'Inicio', about: 'Sobre mí', skills: 'Habilidades', projects: 'Proyectos', contact: 'Contacto', theme: 'Tema', language: 'ES/EN' },
    home: {
      kicker: 'Desarrollador Frontend',
      name: 'Daniel De Ruvo',
      subtitle: 'Creando experiencias digitales',
      description: 'Creo experiencias digitales excepcionales con código limpio, diseño moderno y enfoque centrado en el usuario. Especializado en React, Vue.js y optimización de rendimiento.',
      viewProjects: 'Ver proyectos',
      getInTouch: 'Contactar',
      years: 'Años de experiencia',
      projects: 'Proyectos completados',
      satisfaction: 'Satisfacción del cliente',
    },
    about: {
      title: 'Sobre mí',
      p1: 'Soy Senior Frontend Developer con más de 3 años de experiencia creando experiencias digitales de alto impacto. Me especializo en frameworks modernos de JavaScript, diseño responsive y optimización de rendimiento.',
      p2: 'Me apasiona transformar problemas complejos en soluciones simples, bellas e intuitivas. Creo en escribir código limpio y mantenible y mantenerme actualizado con las últimas tendencias.',
      resume: 'CV',
      skillFrontend: 'Desarrollo Frontend',
      skillFrontendDesc: 'Construcción de aplicaciones web responsivas y performantes con frameworks modernos como React, Vue.js y técnicas CSS de vanguardia.',
      skillDesign: 'Diseño UI/UX',
      skillDesignDesc: 'Creación de interfaces intuitivas con atención al detalle, accesibilidad y mejores prácticas de experiencia de usuario.',
      skillPerf: 'Rendimiento',
      skillPerfDesc: 'Optimización de aplicaciones para velocidad, SEO y escalabilidad usando herramientas modernas y monitoreo de rendimiento.',
    },
    tech: { title: 'Tecnologías' },
    projects: { title: 'Trabajo seleccionado', live: 'Sitio', source: 'Código', category: 'Aplicación web', year: '2024' },
    courses: { title: 'Cursos' },
    contact: {
      title: 'Contacto',
      lead: '¿Tenés un proyecto en mente? ¡Conversemos!',
      copyEmail: 'Copiar email',
      copiedEmail: 'Email copiado',
      copyPhone: 'Copiar teléfono',
      copiedPhone: 'Teléfono copiado',
    },
    form: {
      name: 'Nombre', phone: 'Teléfono', email: 'Email', subject: 'Asunto', message: 'Mensaje', send: 'ENVIAR',
      required: 'Campo requerido', minName: 'El nombre debe tener al menos 3 caracteres', maxName: 'Máximo de caracteres alcanzado', lettersOnly: 'Solo se permiten letras',
      maxPhone: 'El máximo de caracteres es 20', minPhone: 'El mínimo de caracteres es 10', numbersOnly: 'Solo se permiten números',
      minEmail: 'El mínimo de caracteres es 10', maxEmail: 'El máximo de caracteres es 40', invalidEmail: 'Debe ingresar un email válido',
      minSubject: 'El asunto debe tener al menos 6 caracteres', maxSubject: 'Máximo de caracteres alcanzado', lettersNumbers: 'Solo letras y números',
      minMessage: 'El mensaje debe tener al menos 10 caracteres', maxMessage: 'Máximo de caracteres alcanzado',
      sentSuccess: 'Mensaje enviado correctamente', sentError: 'Ocurrió un error al enviar el mensaje',
    },
    footer: { rights: 'Todos los derechos reservados.' },
  },
};

const getInitialLang = () => {
  const stored = typeof window !== 'undefined' ? localStorage.getItem('lang') : null;
  if (stored === 'es' || stored === 'en') return stored;
  const browser = typeof navigator !== 'undefined' ? navigator.language : 'en';
  return browser.startsWith('es') ? 'es' : 'en';
};

export const I18nProvider = ({ children }) => {
  const [lang, setLang] = useState(getInitialLang);

  useEffect(() => {
    try { localStorage.setItem('lang', lang); } catch {}
  }, [lang]);

  const t = useCallback((key) => {
    const parts = key.split('.');
    let obj = dict[lang];
    for (const p of parts) {
      obj = obj?.[p];
      if (obj == null) return key;
    }
    return obj;
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang, toggleLang: () => setLang((l) => (l === 'en' ? 'es' : 'en')), t }), [lang, t]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};
