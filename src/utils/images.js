import React, { useEffect } from 'react';

// Utility para manejar las rutas de imágenes del portafolio

export const images = {
  // Perfil
  profile: {
    avatar: '/assets/images/profile/hector-sanhueza.jpg',
    hero: '/assets/images/profile/hector-sanhueza.jpg',
    about: '/assets/images/profile/hector-sanhueza.jpg',
  },

  // Proyectos
  projects: {
    veterinaria: {
      main: '/assets/images/projects/Veterinaria/home.PNG',
      login: '/assets/images/projects/Veterinaria/Login.PNG',
      adoptame: '/assets/images/projects/Veterinaria/adptame.PNG',
      mascotas: '/assets/images/projects/Veterinaria/mis_mascotas.PNG',
      tienda: '/assets/images/projects/Veterinaria/tienda.PNG',
      quienes: '/assets/images/projects/Veterinaria/quienes_somos.PNG',
      adoptame2: '/assets/images/projects/Veterinaria/adoptame_2.PNG',
    },
    k6Monitor: {
      main: '/assets/images/projects/Practica/k6-dashboard.svg',
      dashboard: '/assets/images/projects/Practica/k6-metrics.svg',
      reports: '/assets/images/projects/Practica/k6-reports.svg',
    },
  },

  // Tecnologías y habilidades
  skills: {
    javascript: '/assets/images/skills/javascript.svg',
    react: '/assets/images/skills/react.svg',
    nodejs: '/assets/images/skills/nodejs.svg',
    css: '/assets/images/skills/css.svg',
    html: '/assets/images/skills/html.svg',
    git: '/assets/images/skills/git.svg',
    mysql: '/assets/images/skills/mysql.svg',
    php: '/assets/images/skills/php.svg',
    // Agrega más según tus habilidades
  },

  // Iconos generales
  icons: {
    github: '/assets/images/icons/github.svg',
    linkedin: '/assets/images/icons/linkedin.svg',
    email: '/assets/images/icons/email.svg',
    download: '/assets/images/icons/download.svg',
    external: '/assets/images/icons/external.svg',
    code: '/assets/images/icons/code.svg',
  }
};

// Componente Image optimizado con lazy loading y fallback
export const OptimizedImage = ({
  src,
  alt,
  className = '',
  fallback = '/assets/images/placeholder.svg',
  ...props
}) => {
  const handleError = (e) => {
    e.target.src = fallback;
  };

  return React.createElement('img', {
    src,
    alt,
    className,
    onError: handleError,
    loading: 'lazy',
    ...props
  });
};

// Hook para precargar imágenes críticas
export const usePreloadImages = (imageUrls) => {
  useEffect(() => {
    imageUrls.forEach(url => {
      const img = new Image();
      img.src = url;
    });
  }, [imageUrls]);
};

export default images;
