// Todo el contenido del portafolio vive aquí. Para actualizarlo, edita este archivo.

export const profile = {
  name: 'Héctor Sanhueza',
  role: 'Fullstack Developer',
  location: 'Santiago, Chile',
  photo: '/assets/images/profile/hector-sanhueza.webp',
  cv: '/assets/cv/Hector_Sanhueza_CV.pdf',
  intro:
    'Analista Programador y estudiante de Ingeniería en Informática. Construyo aplicaciones web de punta a punta: interfaces en React y Angular, APIs en Node.js y pruebas de rendimiento con k6.',
  current: {
    label: 'Práctica profesional en Clínica Formed',
    period: 'ago – nov 2026',
  },
};

export const contact = {
  email: 'hsanhueza.dev@gmail.com',
  phone: '+56 9 5075 0979',
  phoneHref: 'tel:+56950750979',
  linkedin: 'https://www.linkedin.com/in/hectorsanhueza/',
  github: 'https://github.com/JS-Ranker',
  formEndpoint: 'https://formspree.io/f/xblkrkzr',
};

export const experience = [
  {
    id: 'formed',
    role: 'Práctica Profesional',
    company: 'Clínica Formed',
    period: 'Ago 2026 – Presente',
    note: 'Término previsto: noviembre 2026',
    current: true,
    // TODO: agregar responsabilidades y tecnologías de la práctica en Formed.
    responsibilities: [],
  },
  {
    id: 'pcfactory',
    role: 'Ingeniero en Sistemas (Práctica Profesional)',
    company: 'PC Factory',
    period: 'Abr 2025 – Jun 2025',
    current: false,
    responsibilities: [
      'Apoyo en flujos críticos del sitio web (login, carrito, búsqueda).',
      'Desarrollo de scripts de pruebas E2E con k6 y JavaScript.',
      'Optimización de tiempos de carga y validación de interfaz.',
      'Documentación técnica para el equipo de desarrollo.',
    ],
  },
];

const vet = '/assets/images/projects/veterinaria';

export const projects = [
  {
    id: 'happy-pet',
    title: 'Happy Pet',
    kind: 'Proyecto de título',
    summary: 'Sistema de gestión veterinaria web y móvil.',
    description:
      'Plataforma para una veterinaria con e-commerce integrado, agenda de citas, videollamadas en vivo, notificaciones push, adopción de mascotas y fichas clínicas electrónicas.',
    tech: ['React', 'Vite', 'Node.js', 'Express', 'Ionic', 'Angular'],
    github: 'https://github.com/JS-Ranker/Proyecto_Titulo',
    images: [
      { src: `${vet}/home.webp`, alt: 'Página de inicio de Happy Pet', width: 1600, height: 762 },
      { src: `${vet}/tienda.webp`, alt: 'Tienda en línea de productos para mascotas', width: 1490, height: 1170 },
      { src: `${vet}/adoptame.webp`, alt: 'Listado de mascotas en adopción', width: 1407, height: 786 },
      { src: `${vet}/adoptame-detalle.webp`, alt: 'Detalle de una mascota en adopción', width: 1363, height: 1052 },
      { src: `${vet}/mis-mascotas.webp`, alt: 'Panel “Mis mascotas” del usuario', width: 1568, height: 1034 },
      { src: `${vet}/login.webp`, alt: 'Pantalla de inicio de sesión', width: 1045, height: 856 },
      { src: `${vet}/quienes-somos.webp`, alt: 'Página “Quiénes somos”', width: 1444, height: 1286 },
    ],
  },
  {
    id: 'k6',
    title: 'Monitoreo de rendimiento con k6',
    kind: 'Práctica · PC Factory',
    summary: 'Pruebas de carga para flujos críticos de e-commerce.',
    description:
      'Scripts de pruebas de carga y E2E con k6 para medir y optimizar el rendimiento de los flujos de login, carrito y búsqueda, con foco en áreas de TI y e-commerce.',
    tech: ['k6', 'JavaScript', 'Load testing', 'Performance testing'],
    github: 'https://github.com/JS-Ranker/Monitoreo_k6',
    images: [],
  },
];

export const skills = [
  { group: 'Lenguajes', items: ['TypeScript', 'JavaScript', 'Python', 'Java', 'SQL'] },
  { group: 'Frontend', items: ['React', 'Angular', 'Ionic', 'Vite', 'HTML', 'CSS'] },
  { group: 'Backend', items: ['Node.js', 'Express', 'APIs REST', 'WebSockets'] },
  { group: 'Bases de datos', items: ['PostgreSQL', 'MySQL'] },
  { group: 'Testing y herramientas', items: ['k6', 'Pruebas de carga', 'Git', 'VS Code'] },
  { group: 'Metodologías', items: ['Scrum'] },
];

export const education = [
  {
    id: 'ingenieria',
    title: 'Ingeniería en Informática',
    period: 'En curso',
    detail: 'Etapa final: práctica profesional (ago – nov 2026).',
    current: true,
  },
  {
    id: 'analista',
    title: 'Analista Programador',
    period: '2021 – 2024',
    detail: 'Título profesional. Desarrollo de software, bases de datos, metodologías ágiles y arquitectura de sistemas.',
    current: false,
  },
];

export const certifications = [
  {
    id: 'smpc',
    title: 'Scrum Master Professional Certificate (SMPC)',
    issuer: 'CertiProf',
    year: '2024',
    file: '/assets/Certificados/SMPC.pdf',
  },
];
