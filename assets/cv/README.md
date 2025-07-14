# 📄 CV - Curriculum Vitae

## Instrucciones para agregar tu CV

Para que funcione la descarga del CV en tu portafolio, sigue estos pasos:

### 1. Crear tu CV en PDF
- Crea tu CV utilizando tu herramienta preferida (Word, Google Docs, Canva, etc.)
- Guárdalo en formato PDF
- Nómbralo: `Hector_Sanhueza_CV.pdf`

### 2. Colocar el archivo en esta carpeta
- Copia tu archivo PDF a esta carpeta: `assets/cv/`
- El archivo debe llamarse exactamente: `Hector_Sanhueza_CV.pdf`

### 3. Estructura final
```
Portafolio/
├── assets/
│   └── cv/
│       ├── Hector_Sanhueza_CV.pdf  ← Tu CV aquí
│       └── README.md               ← Este archivo
├── index.html
├── styles.css
└── script.js
```

### 4. Verificar funcionamiento
- Los botones de "Descargar CV" en el hero y en la sección "Sobre mí" ahora funcionarán
- Al hacer clic, se descargará automáticamente tu CV

### Personalización adicional

Si quieres cambiar el nombre del archivo, también debes actualizar estas líneas en `index.html`:

```html
<!-- En el hero -->
<a href="assets/cv/TU_NUEVO_NOMBRE.pdf" download="TU_NUEVO_NOMBRE.pdf">

<!-- En la sección Sobre mí -->
<a href="assets/cv/TU_NUEVO_NOMBRE.pdf" download="TU_NUEVO_NOMBRE.pdf">
```

## Características implementadas

✅ **Botón en Hero**: Botón principal de descarga junto a "Ver Proyectos" y "Contactarme"
✅ **Botón en Sobre mí**: Botón destacado con icono de PDF
✅ **Descarga automática**: Atributo `download` para descarga directa
✅ **Estilos modernos**: Botones con gradientes y efectos hover
✅ **Responsive**: Se adapta a dispositivos móviles
✅ **Iconos FontAwesome**: Iconos de descarga y PDF

¡Tu portafolio ahora está listo para mostrar y permitir la descarga de tu CV!
