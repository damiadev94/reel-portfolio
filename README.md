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

## Agregar tus reels
Los ocho espacios de la galería están vacíos para que agregues tus propios trabajos. No contienen videos ficticios.

1. Copiá cada video MP4 en `public/videos/`.
2. Abrí `src/data/projects.ts`.
3. En el espacio correspondiente, reemplazá el título, la categoría y la descripción.
4. Completá `videoUrl` con la ruta del archivo. Ejemplo: `videoUrl: "/videos/reel-01.mp4"`.
5. Opcionalmente, agregá una imagen de portada en `public/posters/` y asigná `poster: "/posters/reel-01.jpg"`.

Ejemplo de un proyecto:
```ts
{
  id: "01",
  title: "Campaña de producto",
  category: "Publicidad",
  description: "Edición vertical para una campaña de producto.",
  videoUrl: "/videos/reel-01.mp4",
  poster: "/posters/reel-01.jpg"
}
```

Los marcos de la galería y el visor de cada proyecto mantienen la proporción vertical 9:16. Los videos se reproducen en el visor al abrir cada tarjeta.

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
  videos/
  posters/
```
