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
      description: 'Senior UX Frontend Developer (6+ yrs) specializing in AI-driven development workflows to accelerate MVPs and optimize user experiences. Expert in React, Next.js, design systems, and AI integration for rapid prototyping and process automation.',
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
      p1: "I'm a Senior UX Frontend Developer with 6+ years leveraging AI to accelerate development workflows, from rapid prototyping to automated testing and process optimization.",
      p2: 'I integrate AI tools and methodologies to reduce MVP development time by 40%, while maintaining high standards in performance, accessibility (WCAG 2.1 AA), and user experience design.',
      resume: 'Resume',
      skillFrontend: 'AI Development',
      skillFrontendDesc: 'React and Next.js with AI integration, automated workflows, intelligent code generation, and AI-assisted testing.',
      skillDesign: 'Smart UI/UX',
      skillDesignDesc: 'AI-enhanced design systems, automated component generation, intelligent design tokens, and rapid prototyping with AI tools.',
      skillPerf: 'Process Automation',
      skillPerfDesc: 'AI-driven optimization, automated accessibility testing, intelligent performance monitoring, and data-driven improvements.',
    },
    tech: { title: 'Technologies' },
    projects: { 
      title: 'Personal Projects', 
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
      roles: [
        {
          company: 'Making Sense',
          role: 'Senior Frontend UX Developer',
          period: 'Jul 2022 – Present',
          bullets: [
            'Led React/Next.js platforms and design systems for 10+ global clients using AI-enhanced workflows.',
            'Implemented AI tools for code generation and testing, reducing development time by 40%.',
            'Pioneered AI-driven UI/UX processes for rapid prototyping and user research automation.',
            'Mentored teams on AI integration, accessibility (WCAG 2.1 AA), and performance optimization.',
            'Drove architecture decisions integrating AI tools for automated testing and deployment.'
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
      sentSuccess: 'Message sent successfully', sentError: 'An error occurred while sending the message', configError: 'Email configuration missing',
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
      description: 'Senior UX Frontend Developer (6+ años) especializado en workflows de desarrollo impulsados por IA para acelerar MVPs y optimizar experiencias de usuario. Experto en React, Next.js, design systems e integración de IA para prototipado rápido y automatización de procesos.',
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
      p1: 'Soy Senior UX Frontend Developer con 6+ años aprovechando IA para acelerar workflows de desarrollo, desde prototipado rápido hasta testing automatizado y optimización de procesos.',
      p2: 'Integro herramientas y metodologías de IA para reducir el tiempo de desarrollo de MVPs en 40%, manteniendo altos estándares en performance, accesibilidad (WCAG 2.1 AA) y diseño de experiencia de usuario.',
      resume: 'CV',
      skillFrontend: 'Desarrollo con IA',
      skillFrontendDesc: 'React y Next.js con integración de IA, workflows automatizados, generación inteligente de código y testing asistido por IA.',
      skillDesign: 'UI/UX Inteligente',
      skillDesignDesc: 'Design systems potenciados por IA, generación automatizada de componentes, tokens de diseño inteligentes y prototipado rápido con herramientas de IA.',
      skillPerf: 'Automatización',
      skillPerfDesc: 'Optimización dirigida por IA, testing automatizado de accesibilidad, monitoreo inteligente de performance y mejoras basadas en datos.',
    },
    tech: { title: 'Tecnologías' },
    projects: { 
      title: 'Proyectos personales', 
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
    courses: { title: 'Cursos' },
    experience: {
      title: 'Experiencia',
      roles: [
        {
          company: 'Making Sense',
          role: 'Senior Frontend UX Developer',
          period: 'Jul 2022 – Presente',
          bullets: [
            'Lideré plataformas en React/Next.js y design systems para 10+ clientes globales usando workflows potenciados por IA.',
            'Implementé herramientas de IA para generación de código y testing, reduciendo tiempos de desarrollo en 40%.',
            'Pionero en procesos de UI/UX dirigidos por IA para prototipado rápido y automatización de research.',
            'Mentoría en integración de IA, accesibilidad (WCAG 2.1 AA) y optimización de performance.',
            'Decisiones de arquitectura integrando herramientas de IA para testing y deployment automatizado.'
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
