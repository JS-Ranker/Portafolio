# Portafolio — Héctor Sanhueza

Sitio personal de una sola página hecho con React 19 y Vite 7, sin librerías de UI.

## Desarrollo

Requiere Node.js 20.19+ (o 22.12+), que es lo que pide Vite 7.

```bash
npm install
npm run dev       # servidor local en http://localhost:5173
npm run lint
npm run build     # genera dist/
npm run preview   # sirve dist/ en http://localhost:4173
```

## Actualizar el contenido

Todo el texto vive en [`src/data/portfolio.js`](src/data/portfolio.js): perfil, experiencia, proyectos, habilidades, educación y certificaciones. Para agregar un trabajo, un proyecto o una certificación, añade un objeto al arreglo correspondiente; no hace falta tocar los componentes.

- **Imágenes de proyectos:** van en `public/assets/images/projects/<proyecto>/` en formato `.webp` (con un ancho máximo de unos 1600 px). Indica `width` y `height` en el dato para evitar saltos de diseño. Si un proyecto no tiene imágenes, deja `images: []` y se muestra como tarjeta de texto.
- **CV y certificados:** `public/assets/cv/` y `public/assets/Certificados/`.
- **Formulario de contacto:** se envía a Formspree (`contact.formEndpoint`).

## Estructura

```
src/
  data/portfolio.js   contenido
  components/         Header, Footer, Icon (SVG en línea), SectionHeading
  sections/           Hero, Experience, Projects, Skills, Education, Contact
  hooks/              tema claro/oscuro, sección activa, animación de aparición
  styles/global.css   tokens de diseño (colores, tipografía, espaciado) y estilos base
```

Los colores de ambos temas se definen como variables CSS en `global.css` (`:root` y `:root[data-theme='dark']`). El script en `index.html` aplica el tema guardado antes de pintar la página.
