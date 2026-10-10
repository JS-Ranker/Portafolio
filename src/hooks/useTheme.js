import { useCallback, useState } from 'react';

const STORAGE_KEY = 'theme';

// El tema inicial lo fija un script en index.html (evita el parpadeo); aquí solo se lee y se cambia.
const readTheme = () => document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';

export const useTheme = () => {
  const [theme, setTheme] = useState(readTheme);

  const toggleTheme = useCallback(() => {
    const next = readTheme() === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Almacenamiento no disponible (modo privado): el tema solo dura esta visita.
    }
    setTheme(next);
  }, []);

  return { theme, toggleTheme };
};
