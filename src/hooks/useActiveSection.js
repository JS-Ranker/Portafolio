import { useEffect, useState } from 'react';

// Devuelve el id de la sección que ocupa la franja superior de la pantalla.
export const useActiveSection = (ids) => {
  const [active, setActive] = useState(null);
  const key = ids.join(',');

  useEffect(() => {
    const sections = key.split(',').map((id) => document.getElementById(id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-30% 0px -60% 0px' }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [key]);

  return active;
};
