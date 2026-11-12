# Damian Larocca — Reel Editor Portfolio

Portfolio minimalista y oscuro para presentar trabajos de edición de reels y videos cortos. La galería está diseñada con marcos verticales reales de proporción **9:16**, pensados para contenido de Instagram Reels, TikTok y YouTube Shorts.

## Stack
- Next.js App Router
- React + TypeScript
- CSS personalizado
- Preparado para Vercel

## Requisitos
- Node.js 20.9 o superior
- npm

## Ejecutar localmente
```bash
npm install
npm run dev
```
Abrí http://localhost:3000

## Datos personales
El portfolio ya incluye:
- Nombre: Damian Larocca
- Email: damian_l@hotmail.es
- Teléfono: +54 11 2819-7638
- Contacto directo por WhatsApp

## Videos embebidos desde Jumpshare

La galería ya contiene ocho videos embebidos mediante sus iframes de Jumpshare. Cada iframe se adapta al marco vertical **9:16** del portfolio y se carga de forma diferida (`loading="lazy"`) para evitar cargar todos los reproductores antes de que el visitante llegue a la galería.

Para reemplazar uno de los videos:
1. Abrí `src/data/projects.ts`.
2. Buscá el proyecto que querés actualizar.
3. Reemplazá su propiedad `embedUrl` por la URL de inserción de Jumpshare, con formato `https://jumpshare.com/embed/ID`.
4. Editá `title`, `category` y `description` para mostrar la información del trabajo.

Ejemplo:
```ts
{
  id: "01",
  title: "Campaña de producto",
  category: "Publicidad",
  description: "Edición vertical para una campaña de producto.",
  embedUrl: "https://jumpshare.com/embed/ID_DEL_VIDEO"
}
```

Los reproductores se muestran directamente dentro de la galería, sin abrir un modal. El contenedor conserva la proporción **9:16** en escritorio y móviles. El contenido del iframe depende de que el video y su enlace de inserción sigan disponibles en Jumpshare.

## Validar el proyecto
```bash
npx tsc --noEmit
npm run lint
npm run build
```

## Publicar en Vercel
1. Subí la carpeta del proyecto a un repositorio de GitHub.
2. Entrá en https://vercel.com/new e importá el repositorio.
3. Vercel detectará Next.js automáticamente.
4. Conservá la configuración predeterminada y seleccioná Deploy.

No requiere base de datos, backend ni variables de entorno. Conviene comprimir los MP4 para web antes de agregarlos al repositorio: los videos pesados aumentan el tamaño del proyecto y hacen más lenta la carga.

## Estructura
```text
src/
  app/
    globals.css
    layout.tsx
    page.tsx
  data/
    projects.ts
public/
  videos/ (opcional, si decidís alojar MP4 localmente en el futuro)
  posters/ (opcional)
```
