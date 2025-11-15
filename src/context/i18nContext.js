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
      subtitle: 'Crafting Pixel-Perfect Digital Products with AI-Powered Workflows',
      location: 'Argentina',
      description: 'Shipping high-impact MVPs in record time using intelligent automation, AI-assisted development, and modern tooling. From design to deployment—fast, precise, ready to scale.',
      viewProjects: 'View Projects',
      getInTouch: 'Get In Touch',
      resume: 'Resume',
      years: 'Years Experience',
      yearsNumber: '6+',
      projects: 'Clients & Projects',
      projectsNumber: '15+',
      satisfaction: 'Students Mentored',
      satisfactionNumber: '60+',
    },
    about: {
      title: 'About',
      p1: "I'm a Senior UX Frontend Developer obsessed with speed, precision, and product quality. I ship pixel-perfect interfaces fast—leveraging AI-powered workflows, intelligent automation, and modern frameworks to turn ideas into production-ready MVPs in record time.",
      p2: 'My approach combines strong visual craft, scalable architecture (React/Next.js), and cutting-edge AI tooling: from AI-assisted code generation and design systems to performance optimization and team collaboration. Whether building, mentoring, or staffing teams—I deliver with speed and intelligence.',
      resume: 'Resume',
      skillFrontend: 'AI-Powered Development',
      skillFrontendDesc: 'React & Next.js turbocharged with AI code generation, intelligent workflows, automated testing, and rapid prototyping. Ship MVPs in record time without sacrificing quality.',
      skillDesign: 'Visual Precision',
      skillDesignDesc: 'Pixel-perfect UI/UX, scalable design systems, design tokens, component libraries, and seamless designer-developer handoff.',
      skillPerf: 'Optimization',
      skillPerfDesc: 'Lighthouse 95+ scores, automated testing, performance monitoring, accessibility audits, and data-driven improvements.',
      skillLeadership: 'Leadership',
      skillLeadershipDesc: 'Team mentoring, technical roadmaps, recruitment & staffing, fostering innovation culture, and driving product decisions.',
      skillCollaboration: 'Collaboration',
      skillCollaborationDesc: 'Cross-functional alignment, stakeholder communication, agile rituals, code reviews, and building consensus across teams.',
      skillCreativity: 'Problem Solving',
      skillCreativityDesc: 'Creative solutions, design thinking, user-centered approach, exploring cutting-edge tools, and turning constraints into opportunities.',
    },
    tech: { title: 'Stack' },
    projects: { 
      title: 'Personal Projects', 
      featured: 'Featured Project',
      live: 'Live Demo', 
      source: 'Source Code',
      viewCode: 'View Code', 
      viewProject: 'View Project',
      category: 'Web Application', 
      year: '2024',
      items: {
        1: { text: 'App that connects to external API with theme switching and translations. Mobile-first responsive design with modern UI components.' },
        2: { text: 'Comprehensive nutrition app with questionnaires, meal plans, and AI-generated recipes using Gemini API. Advanced UX with personalized recommendations.' },
        3: { text: 'Full-featured ecommerce platform with modern design, payment integration, and inventory management. Built with Next.js and Shopify.' },
        4: { text: 'Advanced recipes application using vanilla JavaScript, modern fetch API, and object-oriented programming principles.' },
        5: { text: 'Engaging browser game built with Vue.js featuring dynamic gameplay mechanics and responsive design.' },
        6: { text: 'Professional landing page developed with Vue.js, featuring modern animations and responsive design patterns.' },
        7: { text: 'Interactive dashboard with real-time data visualization and modern UI components.' },
        8: { text: 'Advanced data table component with user management, API integration, and modern styling.' },
        9: { text: 'Full-featured e-commerce application built with React, Material-UI, and Firebase integration.' },
        10: { text: 'Professional landing page for nursing home with modern design and SEO optimization.' },
        11: { text: 'Clean, professional website with responsive design and SEO optimization for healthcare services.' },
        12: { text: 'Interactive event management application with modern JavaScript and responsive design.' },
      }
    },
    courses: { title: 'Courses' },
    experience: {
      title: 'Experience',
      tabs: {
        experience: 'Experience',
        courses: 'Certifications',
        clients: 'Clients'
      },
      roles: [
        {
          company: 'Making Sense',
          role: 'Senior Frontend UX Developer',
          period: 'Jul 2022 – Present',
          bullets: [
            'Led React/Next.js platforms and design systems for 10+ global clients, delivering pixel-perfect, production-ready UIs ahead of schedule.',
            'Reduced MVP development cycles by 40% using intelligent workflows, automated testing, and modern tooling (TypeScript, Storybook, Playwright).',
            'Drove UX/UI excellence: design tokens, component libraries, accessibility compliance (WCAG 2.1 AA), and Lighthouse 95+ performance scores.',
            'Mentored cross-functional teams on frontend architecture, modern practices, and rapid delivery strategies.',
            'Contributed to recruitment & staffing: interviewed 30+ candidates, built onboarding processes, and fostered engineering culture.'
          ]
        },
        {
          company: 'Coderhouse',
          role: 'Web Development Professor',
          period: 'Feb 2023 – Jul 2024',
          bullets: [
            'Taught HTML/CSS/JS/React/Git to 60+ students with 95%+ satisfaction ratings.',
            'Guided 20+ capstone projects from wireframes to deployment, mentoring on best practices and professional workflows.'
          ]
        },
        {
          company: 'Garaje de Ideas Américas',
          role: 'Frontend Developer',
          period: 'Apr 2022 – Jul 2022',
          bullets: [
            'Executed 25+ A/B tests for Fintech client, improving CTR by 18% and optimizing conversion funnels.'
          ]
        },
        {
          company: 'Vidoomy',
          role: 'Frontend Developer',
          period: 'Mar 2020 – Apr 2022',
          bullets: [
            'Built internal Vue.js SPA that reduced campaign setup time by 35%, streamlining workflows for 50+ team members.'
          ]
        }
      ]
    },
    contact: {
      title: 'Contact',
      lead: "Have a project in mind? Let's build something great together.",
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
      sentSuccess: 'Message sent successfully', sentError: 'An error occurred while sending the message', configError: 'Email configuration missing',
    },
    footer: { rights: 'All rights reserved.' },
  },
  es: {
    header: { home: 'Inicio', about: 'Sobre mí', experience: 'Experiencia', skills: 'Habilidades', projects: 'Proyectos', contact: 'Contacto', theme: 'Tema', language: 'ES/EN' },
    home: {
      kicker: 'Senior UX Frontend Developer',
      name: 'Daniel De Ruvo',
      subtitle: 'Creando Productos Digitales Pixel-Perfect con Workflows Potenciados por IA',
      location: 'Argentina',
      description: 'Entregando MVPs de alto impacto en tiempo récord usando automatización inteligente, desarrollo asistido por IA y tooling moderno. Del diseño al deployment—rápido, preciso, listo para escalar.',
      viewProjects: 'Ver Proyectos',
      getInTouch: 'Contacto',
      resume: 'CV',
      years: 'Años de experiencia',
      yearsNumber: '6+',
      projects: 'Clientes y proyectos',
      projectsNumber: '15+',
      satisfaction: 'Estudiantes mentorados',
      satisfactionNumber: '60+',
    },
    about: {
      title: 'Sobre mí',
      p1: 'Soy Senior UX Frontend Developer obsesionado con velocidad, precisión y calidad de producto. Entrego interfaces pixel-perfect rápido—aprovechando workflows potenciados por IA, automatización inteligente y frameworks modernos para convertir ideas en MVPs listos para producción en tiempo récord.',
      p2: 'Mi enfoque combina craft visual fuerte, arquitectura escalable (React/Next.js) y tooling de vanguardia con IA: desde generación de código asistida por IA y design systems hasta optimización de performance y colaboración en equipo. Ya sea construyendo, mentoreando o armando equipos—entrego con velocidad e inteligencia.',
      resume: 'CV',
      skillFrontend: 'Desarrollo con IA',
      skillFrontendDesc: 'React y Next.js potenciados con generación de código por IA, workflows inteligentes, testing automatizado y prototipado rápido. Entrego MVPs en tiempo récord sin sacrificar calidad.',
      skillDesign: 'Precisión Visual',
      skillDesignDesc: 'UI/UX pixel-perfect, design systems escalables, tokens de diseño, librerías de componentes y handoff fluido diseñador-desarrollador.',
      skillPerf: 'Optimización',
      skillPerfDesc: 'Lighthouse 95+, testing automatizado, monitoreo de performance, auditorías de accesibilidad y mejoras basadas en datos.',
      skillLeadership: 'Liderazgo',
      skillLeadershipDesc: 'Mentoría de equipos, roadmaps técnicos, reclutamiento y staffing, cultura de innovación y decisiones de producto.',
      skillCollaboration: 'Colaboración',
      skillCollaborationDesc: 'Alineación interfuncional, comunicación con stakeholders, rituales ágiles, code reviews y consenso entre equipos.',
      skillCreativity: 'Resolución de Problemas',
      skillCreativityDesc: 'Soluciones creativas, design thinking, enfoque centrado en el usuario, exploración de herramientas de vanguardia y convertir restricciones en oportunidades.',
    },
    tech: { title: 'Stack' },
    projects: { 
      title: 'Proyectos personales', 
      featured: 'Proyecto Destacado',
      live: 'Demo en Vivo', 
      source: 'Código',
      viewCode: 'Ver Código', 
      viewProject: 'Ver Proyecto',
      category: 'Aplicación web', 
      year: '2024',
      items: {
        1: { text: 'App que consume una API externa con cambio de tema y traducciones. Diseño mobile-first con componentes de UI modernos.' },
        2: { text: 'App integral de nutrición con cuestionarios, planes de comida y recetas generadas con IA (Gemini). UX avanzada y recomendaciones personalizadas.' },
        3: { text: 'Plataforma e‑commerce completa con diseño moderno, pagos e inventario. Construida con Next.js y Shopify.' },
        4: { text: 'Aplicación de recetas avanzada con JavaScript puro, fetch API moderno y principios de programación orientada a objetos.' },
        5: { text: 'Juego web en Vue.js con mecánicas dinámicas y diseño responsive.' },
        6: { text: 'Landing profesional en Vue.js con animaciones modernas y patrones responsive.' },
        7: { text: 'Dashboard interactivo con visualización de datos en tiempo real y componentes de UI modernos.' },
        8: { text: 'Tabla de datos avanzada con gestión de usuarios, integración a API y estilos modernos.' },
        9: { text: 'E‑commerce completo hecho con React, Material‑UI e integración con Firebase.' },
        10: { text: 'Landing para residencia de salud con diseño moderno y optimización SEO.' },
        11: { text: 'Sitio profesional y responsive para servicios de salud con SEO optimizado.' },
        12: { text: 'App para gestión de eventos, interactiva y responsive, con JavaScript moderno.' },
      }
    },
    courses: { title: 'Formación' },
    experience: {
      title: 'Experiencia',
      tabs: {
        experience: 'Experiencia',
        courses: 'Formación',
        clients: 'Clientes'
      },
      roles: [
        {
          company: 'Making Sense',
          role: 'Senior Frontend UX Developer',
          period: 'Jul 2022 – Presente',
          bullets: [
            'Lideré plataformas React/Next.js y design systems para 10+ clientes globales, entregando UIs pixel-perfect listas para producción antes de lo previsto.',
            'Reduje ciclos de desarrollo de MVPs en 40% usando workflows inteligentes, testing automatizado y tooling moderno (TypeScript, Storybook, Playwright).',
            'Impulsé excelencia en UX/UI: tokens de diseño, librerías de componentes, accesibilidad (WCAG 2.1 AA) y performance Lighthouse 95+.',
            'Mentoría a equipos cross-funcionales en arquitectura frontend, prácticas modernas y estrategias de entrega rápida.',
            'Contribuí a reclutamiento y staffing: entrevisté 30+ candidatos, armé procesos de onboarding y fomenté cultura de ingeniería.'
          ]
        },
        {
          company: 'Coderhouse',
          role: 'Profesor de Desarrollo Web',
          period: 'Feb 2023 – Jul 2024',
          bullets: [
            'Enseñé HTML/CSS/JS/React/Git a 60+ estudiantes con 95%+ de satisfacción.',
            'Guié 20+ proyectos finales desde wireframes hasta deployment, mentoreando en mejores prácticas y workflows profesionales.'
          ]
        },
        {
          company: 'Garaje de Ideas Américas',
          role: 'Frontend Developer',
          period: 'Abr 2022 – Jul 2022',
          bullets: [
            'Ejecuté 25+ tests A/B para cliente Fintech, mejorando CTR en 18% y optimizando funnels de conversión.'
          ]
        },
        {
          company: 'Vidoomy',
          role: 'Frontend Developer',
          period: 'Mar 2020 – Abr 2022',
          bullets: [
            'SPA interna en Vue.js que redujo tiempos de setup de campañas en 35%, optimizando workflows para 50+ miembros del equipo.'
          ]
        }
      ]
    },
    contact: {
      title: 'Contacto',
      lead: '¿Tenés un proyecto en mente? Construyamos algo increíble juntos.',
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
      sentSuccess: 'Mensaje enviado correctamente', sentError: 'Ocurrió un error al enviar el mensaje', configError: 'Configuración de email faltante',
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
