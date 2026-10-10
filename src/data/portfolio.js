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
const sismos = '/assets/images/projects/sismos-chile';

export const projects = [
  {
    id: 'happy-pet',
    title: 'Happy Pet',
    kind: 'Proyecto de título',
    summary: 'Sistema de gestión veterinaria web y móvil.',
    description:
      'Plataforma para una veterinaria con portal para dueños y panel para veterinarios: agenda de citas, fichas clínicas electrónicas, e-commerce, adopción de mascotas y videoconsultas. Para publicarla reforcé la seguridad del backend (contraseñas con bcrypt, sesiones con JWT y permisos por rol) y la desplegué en Vercel con MySQL en Aiven.',
    tech: ['React', 'TypeScript', 'Node.js', 'Express', 'MySQL', 'JWT', 'Ionic', 'Angular', 'Vercel'],
    demo: 'https://proyecto-titulo-wya2.vercel.app',
    github: 'https://github.com/JS-Ranker/Proyecto_Titulo',
    demoAccounts: {
      password: 'demo1234',
      accounts: [
        { role: 'Dueño', login: 'RUT 11111111-1' },
        { role: 'Veterinario', login: 'camila.rojas@happypet.cl' },
      ],
    },
    images: [
      { src: `${vet}/home.webp`, alt: 'Página de inicio de Happy Pet', width: 1600, height: 762 },
      { src: `${vet}/mis-mascotas.webp`, alt: 'Panel “Mis mascotas” del dueño', width: 1600, height: 900 },
      { src: `${vet}/panel-veterinario.webp`, alt: 'Panel de control del veterinario', width: 1600, height: 900 },
      { src: `${vet}/tienda.webp`, alt: 'Tienda en línea de productos para mascotas', width: 1490, height: 1170 },
      { src: `${vet}/adoptame.webp`, alt: 'Listado de mascotas en adopción', width: 1407, height: 786 },
      { src: `${vet}/adoptame-detalle.webp`, alt: 'Detalle de una mascota en adopción', width: 1363, height: 1052 },
      { src: `${vet}/login.webp`, alt: 'Pantalla de inicio de sesión', width: 1045, height: 856 },
      { src: `${vet}/quienes-somos.webp`, alt: 'Página “Quiénes somos”', width: 1444, height: 1286 },
    ],
  },
  {
    id: 'sismos-chile',
    title: 'Sismos Chile',
    kind: 'Proyecto personal',
    summary: 'Monitor de la actividad sísmica en Chile en tiempo real.',
    description:
      'Mapa interactivo y lista de los sismos recientes en Chile, actualizados cada minuto con datos del USGS. Muestra magnitud, profundidad y ubicación en español, con filtros por período y magnitud, prerenderizado en el servidor y caché por minuto.',
    tech: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'TanStack Query', 'Leaflet', 'Vercel'],
    demo: 'https://sismos-chile-rouge.vercel.app',
    github: 'https://github.com/JS-Ranker/sismos-chile',
    images: [
      { src: `${sismos}/general.webp`, alt: 'Mapa de Chile con los sismos de la última semana y la lista del último sismo registrado', width: 1600, height: 900 },
      { src: `${sismos}/seleccion.webp`, alt: 'Sismo seleccionado en la lista, con su detalle abierto en el mapa', width: 1600, height: 900 },
      { src: `${sismos}/movil.webp`, alt: 'Vista de Sismos Chile en un celular', width: 1600, height: 900 },
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
