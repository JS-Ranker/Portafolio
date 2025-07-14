# 📋 Guía Completa: Sección de Descarga de CV

## ✅ ¿Qué se ha implementado?

### 1. **Botones de Descarga**
- **Botón en Hero**: Junto a "Ver Proyectos" y "Contactarme"
- **Botón en Sección Sobre mí**: Botón destacado con estilo especial

### 2. **Estilos Implementados**
- `btn-secondary`: Para el botón en el hero (gradiente azul/turquesa)
- `btn-cv`: Para el botón en "Sobre mí" (gradiente rojo, estilo PDF)
- Efectos hover con transformaciones y sombras
- Completamente responsive para móviles

### 3. **Estructura de Carpetas**
```
Portafolio/
├── assets/
│   └── cv/
│       ├── Hector_Sanhueza_CV.pdf  ← Colocar tu CV aquí
│       └── README.md
├── index.html
├── styles.css
└── script.js
```

## 🚀 Pasos para activar la descarga

### Paso 1: Crear tu CV
1. Diseña tu CV en tu herramienta favorita (Word, Google Docs, Canva, etc.)
2. Exporta/guarda como PDF
3. Nómbralo exactamente: `Hector_Sanhueza_CV.pdf`

### Paso 2: Colocar el archivo
1. Copia tu archivo PDF a la carpeta: `assets/cv/`
2. Asegúrate de que el nombre sea exacto: `Hector_Sanhueza_CV.pdf`

### Paso 3: ¡Listo!
- Los botones ahora funcionarán automáticamente
- Al hacer clic, se descargará tu CV

## 🎨 Personalización Avanzada

### Cambiar el nombre del archivo
Si quieres usar un nombre diferente, edita estas líneas en `index.html`:

```html
<!-- Línea ~44: Botón en Hero -->
<a href="assets/cv/TU_ARCHIVO.pdf" download="TU_ARCHIVO.pdf">

<!-- Línea ~92: Botón en Sobre mí -->
<a href="assets/cv/TU_ARCHIVO.pdf" download="TU_ARCHIVO.pdf">
```

### Agregar más formatos
Puedes ofrecer múltiples formatos creando más botones:

```html
<div class="cv-download">
    <a href="assets/cv/Hector_CV.pdf" class="btn btn-cv" download>
        <i class="fas fa-file-pdf"></i> PDF
    </a>
    <a href="assets/cv/Hector_CV.docx" class="btn btn-secondary" download>
        <i class="fas fa-file-word"></i> Word
    </a>
</div>
```

### Cambiar colores del botón CV
En `styles.css`, modifica la sección `.btn-cv`:

```css
.btn-cv {
    /* Cambiar gradiente de fondo */
    background: linear-gradient(135deg, #tu-color-1, #tu-color-2);
    /* Cambiar color del borde */
    border-color: #tu-color;
    /* Cambiar sombra */
    box-shadow: 0 4px 15px rgba(tu-color-rgba, 0.2);
}
```

## 📱 Características Responsive

### Móviles (max-width: 480px)
- Botones se apilan verticalmente
- Ancho completo con máximo de 280px
- Padding ajustado para mejor toque
- Centro automático

### Tablets (max-width: 768px)
- Botones mantienen diseño horizontal
- Espaciado reducido entre elementos
- Tamaños de fuente optimizados

## 🔧 Solución de Problemas

### ❌ "El botón no descarga nada"
**Solución**: Verifica que el archivo PDF esté en la ruta correcta con el nombre exacto

### ❌ "Error 404 al hacer clic"
**Solución**: Revisa la ruta en el HTML y confirma que la carpeta `assets/cv/` existe

### ❌ "El botón se ve mal en móvil"
**Solución**: Los estilos responsive ya están incluidos, verifica que no hay CSS conflictivo

### ❌ "Quiero cambiar el icono"
**Solución**: Cambia la clase FontAwesome:
- `fas fa-download` (descarga)
- `fas fa-file-pdf` (PDF)
- `fas fa-file-alt` (documento)
- `fas fa-cloud-download-alt` (descarga de nube)

## 🎯 Mejoras Futuras Opcionales

### 1. Contador de Descargas
Agregar un contador que muestre cuántas veces se ha descargado:

```javascript
// En script.js
let downloadCount = localStorage.getItem('cv-downloads') || 0;

document.querySelectorAll('.btn-cv, .btn-secondary').forEach(btn => {
    btn.addEventListener('click', () => {
        downloadCount++;
        localStorage.setItem('cv-downloads', downloadCount);
        console.log(`CV descargado ${downloadCount} veces`);
    });
});
```

### 2. Vista Previa del CV
Agregar un modal para ver el CV antes de descargarlo:

```html
<a href="#" class="btn btn-preview" onclick="previewCV()">
    <i class="fas fa-eye"></i> Vista Previa
</a>
```

### 3. Múltiples Idiomas
Ofrecer CV en diferentes idiomas:

```html
<div class="cv-languages">
    <a href="assets/cv/Hector_CV_ES.pdf" class="btn btn-cv">
        🇪🇸 Español
    </a>
    <a href="assets/cv/Hector_CV_EN.pdf" class="btn btn-cv">
        🇺🇸 English
    </a>
</div>
```

## ✨ Resumen

Tu portafolio ahora tiene:
- ✅ Dos botones de descarga de CV estratégicamente ubicados
- ✅ Diseño moderno y responsive
- ✅ Descarga automática sin redirecciones
- ✅ Estilos coherentes con el resto del sitio
- ✅ Estructura de carpetas organizada

**Solo necesitas colocar tu archivo PDF en `assets/cv/Hector_Sanhueza_CV.pdf` y todo funcionará perfectamente.**
