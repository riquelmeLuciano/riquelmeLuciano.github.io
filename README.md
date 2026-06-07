# Luciano Riquelme — Página personal

Sitio estático personal alojado en [GitHub Pages](https://pages.github.com/).

## Vista previa local

Abre `index.html` en el navegador o usa un servidor local:

```bash
# Python
python -m http.server 8080

# Node (si tienes npx)
npx serve .
```

Luego visita `http://localhost:8080`.

## Publicar en GitHub Pages

### 1. Crear el repositorio

1. Crea un repositorio en GitHub llamado `LucianoRiquelme` (o el nombre que prefieras).
2. Sube este proyecto:

```bash
git init
git add .
git commit -m "Página personal estática"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/LucianoRiquelme.git
git push -u origin main
```

### 2. Activar GitHub Pages

1. Ve a **Settings → Pages** en tu repositorio.
2. En **Source**, elige **Deploy from a branch**.
3. Selecciona la rama `main` y la carpeta `/ (root)`.
4. Guarda. En unos minutos estará disponible en:

```
https://TU_USUARIO.github.io/LucianoRiquelme/
```

> Si el repositorio se llama `TU_USUARIO.github.io`, la URL será `https://TU_USUARIO.github.io/`.

## Personalizar

Edita `index.html` para cambiar:

- Texto de presentación y secciones
- Enlaces de contacto (email, GitHub, LinkedIn)
- Proyectos en la sección correspondiente

Los estilos están en `css/style.css` y la interactividad mínima en `js/main.js`.

## Estructura

```
├── index.html      # Página principal
├── css/style.css   # Estilos
├── js/main.js      # Navegación móvil y año en footer
├── .nojekyll       # Evita procesamiento Jekyll en GitHub Pages
└── README.md
```
