import React, { createContext, useCallback, useContext, useMemo, useState, useEffect } from 'react';

const I18nContext = createContext();

export const useI18n = () => {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within I18nProvider');
  return ctx;
};

const dict = {
  en: {
    header: { home: 'Home', about: 'About', experience: 'Experience', skills: 'Skills', projects: 'Projects', contact: 'Contact', theme: 'Theme', language: 'ES/EN' },
    home: {
      kicker: 'Senior UX Frontend Developer',
      name: 'Daniel De Ruvo',
      subtitle: 'Creating Digital Experiences',
      location: 'Argentina',
      description: 'Senior UX Frontend Developer (5+ yrs) delivering scalable, high-performance web apps and intuitive UX. Expert in design systems, AI in UI/UX, React, Next.js, and Accessibility (WCAG). Team lead and mentor.',
      viewProjects: 'View Projects',
      getInTouch: 'Get In Touch',
      years: 'Years Experience',
      yearsNumber: '5+',
      projects: 'Clients & Projects',
      projectsNumber: '10+',
      satisfaction: 'Students Mentored',
      satisfactionNumber: '60+',
    },
    about: {
      title: 'About',
      p1: "I'm a Senior UX Frontend Developer with 5+ years leading and building scalable React/Next.js applications, design systems, and inclusive experiences.",
      p2: 'I pioneer AI in UI/UX to speed up discovery and MVPs, and champion performance, accessibility (WCAG 2.1 AA), and data-informed iteration.',
      resume: 'Resume',
      skillFrontend: 'Frontend Development',
      skillFrontendDesc: 'React and Next.js architectures, state management, performance optimization, testing, CI/CD.',
      skillDesign: 'UI/UX & Design Systems',
      skillDesignDesc: 'Design tokens, component libraries, Storybook, consistency and speed across products.',
      skillPerf: 'Accessibility & SEO',
      skillPerfDesc: 'WCAG 2.1 AA, semantic HTML, lighthouse tuning, analytics-driven improvements.',
    },
    tech: { title: 'Technologies' },
    projects: { title: 'Selected Work', live: 'Live Site', source: 'Source Code', category: 'Web Application', year: '2024' },
    courses: { title: 'Courses' },
    experience: {
      title: 'Experience',
      roles: [
        {
          company: 'Making Sense',
          role: 'Senior Frontend UX Developer',
          period: 'Jul 2022 – Present',
          bullets: [
            'Led React/Next.js platforms and design systems for 10+ global clients.',
            'Drove Java→React migrations, documentation and best practices adoption.',
            'Introduced AI in UI/UX; reduced MVP time up to 40%.',
            'Improved performance, WCAG 2.1 AA accessibility and SEO.',
            'Mentored devs; contributed to hiring and architecture decisions.'
          ]
        },
        {
          company: 'Coderhouse',
          role: 'Web Development Professor',
          period: 'Feb 2023 – Jul 2024',
          bullets: [
            'Taught HTML/CSS/JS/React/Git to 60+ students with high satisfaction.',
            'Guided multiple capstone projects from idea to deployment.'
          ]
        },
        {
          company: 'Garaje de Ideas Américas',
          role: 'Frontend Developer',
          period: 'Apr 2022 – Jul 2022',
          bullets: [
            'Executed 25+ A/B tests for a Fintech/Bank client improving CTR and UX.'
          ]
        },
        {
          company: 'Vidoomy',
          role: 'Frontend Developer',
          period: 'Mar 2020 – Apr 2022',
          bullets: [
            'Built an internal Vue.js SPA that reduced campaign setup time by 35%.'
          ]
        }
      ]
    },
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
    header: { home: 'Inicio', about: 'Sobre mí', experience: 'Experiencia', skills: 'Habilidades', projects: 'Proyectos', contact: 'Contacto', theme: 'Tema', language: 'ES/EN' },
    home: {
      kicker: 'Senior UX Frontend Developer',
      name: 'Daniel De Ruvo',
      subtitle: 'Creando experiencias digitales',
      location: 'Argentina',
      description: 'Senior UX Frontend Developer (5+ años) creando apps escalables y UX intuitiva. Experto en design systems, IA en UI/UX, React, Next.js y Accesibilidad (WCAG). Líder de equipos y mentor.',
      viewProjects: 'Ver proyectos',
      getInTouch: 'Contactar',
      years: 'Años de experiencia',
      yearsNumber: '5+',
      projects: 'Clientes y proyectos',
      projectsNumber: '10+',
      satisfaction: 'Estudiantes mentorados',
      satisfactionNumber: '60+',
    },
    about: {
      title: 'Sobre mí',
      p1: 'Soy Senior UX Frontend Developer con 5+ años liderando y construyendo aplicaciones React/Next.js escalables, design systems y experiencias inclusivas.',
      p2: 'Impulso IA en UI/UX para acelerar discovery y MVPs, y promuevo performance, accesibilidad (WCAG 2.1 AA) y decisiones informadas por datos.',
      resume: 'CV',
      skillFrontend: 'Desarrollo Frontend',
      skillFrontendDesc: 'Arquitecturas en React y Next.js, gestión de estado, performance, testing y CI/CD.',
      skillDesign: 'UI/UX y Design Systems',
      skillDesignDesc: 'Tokens de diseño, librerías de componentes, Storybook, consistencia y velocidad.',
      skillPerf: 'Accesibilidad y SEO',
      skillPerfDesc: 'WCAG 2.1 AA, HTML semántico, tuning de lighthouse y mejoras con analítica.',
    },
    tech: { title: 'Tecnologías' },
    projects: { title: 'Trabajo seleccionado', live: 'Sitio', source: 'Código', category: 'Aplicación web', year: '2024' },
    courses: { title: 'Cursos' },
    experience: {
      title: 'Experiencia',
      roles: [
        {
          company: 'Making Sense',
          role: 'Senior Frontend UX Developer',
          period: 'Jul 2022 – Presente',
          bullets: [
            'Lideré plataformas en React/Next.js y design systems para 10+ clientes globales.',
            'Migraciones Java→React, documentación y adopción de buenas prácticas.',
            'Introduje IA en UI/UX; reduje tiempos de MVP hasta 40%.',
            'Mejoras en performance, accesibilidad WCAG 2.1 AA y SEO.',
            'Mentoría, hiring y decisiones de arquitectura.'
          ]
        },
        {
          company: 'Coderhouse',
          role: 'Profesor de Desarrollo Web',
          period: 'Feb 2023 – Jul 2024',
          bullets: [
            'Enseñé HTML/CSS/JS/React/Git a 60+ estudiantes con alta satisfacción.',
            'Guié múltiples proyectos finales de idea a producción.'
          ]
        },
        {
          company: 'Garaje de Ideas Américas',
          role: 'Frontend Developer',
          period: 'Abr 2022 – Jul 2022',
          bullets: [
            'Ejecución de 25+ tests A/B para cliente Fintech/Banco mejorando CTR y UX.'
          ]
        },
        {
          company: 'Vidoomy',
          role: 'Frontend Developer',
          period: 'Mar 2020 – Abr 2022',
          bullets: [
            'SPA interna en Vue.js que redujo tiempos de setup de campañas en 35%.'
          ]
        }
      ]
    },
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
