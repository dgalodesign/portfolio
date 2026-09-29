export const langs = ['es', 'en'] as const;
export type Lang = (typeof langs)[number];

export const t = {
  es: {
    htmlLang: 'es',
    title: "Edgar D' Galo · Diseñador UX/UI",
    description:
      "Portafolio de Edgar D' Galo, diseñador UX/UI. Casos de estudio de producto, investigación y diseño de interfaces.",
    nav: { work: 'Proyectos', about: 'Sobre mí', contact: 'Contacto' },
    available: 'Disponible para nuevos proyectos',
    unavailable: 'No disponible por ahora',
    hero: {
      kicker: 'Diseñador UX/UI',
      title: 'Diseño productos digitales que la gente entiende y usa.',
      sub: 'Investigación, arquitectura de información y diseño de interfaces enfocados en resultados de negocio medibles.',
      ctaWork: 'Ver proyectos',
      ctaContact: 'Hablemos',
    },
    work: { title: 'Proyectos seleccionados', read: 'Ver caso', draft: 'Borrador' },
    services: {
      title: 'Cómo puedo ayudarte',
      items: [
        ['Research de usuarios', 'Entrevistas, pruebas de usabilidad y síntesis accionable.'],
        ['Diseño de producto', 'Flujos, wireframes, prototipos y UI lista para desarrollo.'],
        ['Design systems', 'Componentes y tokens consistentes que escalan con el equipo.'],
      ],
    },
    tools: 'Herramientas',
    about: {
      title: 'Sobre mí',
      body: [
        'Soy Edgar, diseñador UX/UI. Me interesa el punto donde el diseño, el negocio y la tecnología se encuentran.',
        'Trabajo de forma colaborativa con producto e ingeniería, y tomo decisiones a partir de evidencia, no de gustos.',
        '[TODO: reemplazar por tu historia real: trayectoria, sectores, qué te motiva y qué te diferencia.]',
      ],
      skills: 'Habilidades',
    },
    contact: {
      title: 'Trabajemos juntos',
      sub: 'Cuéntame sobre tu proyecto o vacante. Respondo en un máximo de 48 horas.',
      name: 'Nombre',
      email: 'Email',
      message: 'Mensaje',
      send: 'Enviar mensaje',
      sending: 'Enviando…',
      ok: '¡Gracias! Te responderé pronto.',
      err: 'No se pudo enviar. Escríbeme directamente por email.',
      cv: 'Descargar CV (PDF)',
      or: 'O escríbeme a',
    },
    case: {
      back: '← Todos los proyectos',
      role: 'Rol',
      year: 'Año',
      team: 'Equipo',
      draftNote:
        'Este caso es un borrador con estructura guiada. Reemplaza los textos entre corchetes con información y métricas reales.',
    },
    footer: '© ' + new Date().getFullYear() + " Edgar D' Galo",
    privacy: 'Privacidad',
    theme: 'Cambiar tema',
    skip: 'Saltar al contenido',
    notFound: { title: 'Página no encontrada', back: 'Volver al inicio' },
    privacyPage: {
      title: 'Política de privacidad',
      body: [
        'Este sitio usa Google Analytics para medir visitas de forma agregada. No se venden datos a terceros.',
        'Si envías el formulario de contacto, tu nombre, email y mensaje se usan únicamente para responderte.',
        'Puedes solicitar la eliminación de tus datos escribiendo al email de contacto.',
      ],
    },
  },
  en: {
    htmlLang: 'en',
    title: "Edgar D' Galo · UX/UI Designer",
    description:
      "Portfolio of Edgar D' Galo, UX/UI designer. Product case studies, research and interface design.",
    nav: { work: 'Work', about: 'About', contact: 'Contact' },
    available: 'Available for new projects',
    unavailable: 'Currently unavailable',
    hero: {
      kicker: 'UX/UI Designer',
      title: 'I design digital products people understand and use.',
      sub: 'Research, information architecture and interface design focused on measurable business outcomes.',
      ctaWork: 'View work',
      ctaContact: "Let's talk",
    },
    work: { title: 'Selected work', read: 'View case', draft: 'Draft' },
    services: {
      title: 'How I can help',
      items: [
        ['User research', 'Interviews, usability testing and actionable synthesis.'],
        ['Product design', 'Flows, wireframes, prototypes and dev-ready UI.'],
        ['Design systems', 'Consistent components and tokens that scale with the team.'],
      ],
    },
    tools: 'Tools',
    about: {
      title: 'About me',
      body: [
        "I'm Edgar, a UX/UI designer. I care about the point where design, business and technology meet.",
        'I work closely with product and engineering, and decide based on evidence, not taste.',
        '[TODO: replace with your real story: background, industries, what drives you and what sets you apart.]',
      ],
      skills: 'Skills',
    },
    contact: {
      title: "Let's work together",
      sub: 'Tell me about your project or role. I reply within 48 hours.',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send message',
      sending: 'Sending…',
      ok: "Thanks! I'll get back to you soon.",
      err: 'Could not send. Please email me directly.',
      cv: 'Download CV (PDF)',
      or: 'Or email me at',
    },
    case: {
      back: '← All projects',
      role: 'Role',
      year: 'Year',
      team: 'Team',
      draftNote:
        'This case is a guided draft. Replace bracketed text with real information and metrics.',
    },
    footer: '© ' + new Date().getFullYear() + " Edgar D' Galo",
    privacy: 'Privacy',
    theme: 'Toggle theme',
    skip: 'Skip to content',
    notFound: { title: 'Page not found', back: 'Back home' },
    privacyPage: {
      title: 'Privacy policy',
      body: [
        'This site uses Google Analytics to measure visits in aggregate. No data is sold to third parties.',
        'If you submit the contact form, your name, email and message are used only to reply to you.',
        'You can request deletion of your data by emailing the contact address.',
      ],
    },
  },
} as const;

export const tools = ['Figma', 'FigJam', 'Prototyping', 'User research', 'Design systems', 'Accessibility', 'HTML/CSS', 'AI-assisted design'];

export const other = (l: Lang): Lang => (l === 'es' ? 'en' : 'es');
