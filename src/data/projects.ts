export type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  videoUrl: string;
  poster: string;
};

// Reemplazá los textos y agregá tus videos cuando estés listo.
// videoUrl: ruta local (ej. "/videos/reel-01.mp4") o URL pública directa a un MP4.
// poster: ruta opcional a una imagen de portada (ej. "/posters/reel-01.jpg").
export const projects: Project[] = [
  { id: "01", title: "Proyecto 01", category: "Agregar categoría", description: "Agregá una breve descripción de este reel.", videoUrl: "", poster: "" },
  { id: "02", title: "Proyecto 02", category: "Agregar categoría", description: "Agregá una breve descripción de este reel.", videoUrl: "", poster: "" },
  { id: "03", title: "Proyecto 03", category: "Agregar categoría", description: "Agregá una breve descripción de este reel.", videoUrl: "", poster: "" },
  { id: "04", title: "Proyecto 04", category: "Agregar categoría", description: "Agregá una breve descripción de este reel.", videoUrl: "", poster: "" },
  { id: "05", title: "Proyecto 05", category: "Agregar categoría", description: "Agregá una breve descripción de este reel.", videoUrl: "", poster: "" },
  { id: "06", title: "Proyecto 06", category: "Agregar categoría", description: "Agregá una breve descripción de este reel.", videoUrl: "", poster: "" },
  { id: "07", title: "Proyecto 07", category: "Agregar categoría", description: "Agregá una breve descripción de este reel.", videoUrl: "", poster: "" },
  { id: "08", title: "Proyecto 08", category: "Agregar categoría", description: "Agregá una breve descripción de este reel.", videoUrl: "", poster: "" },
];
