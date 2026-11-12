export type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  embedUrl: string;
};

// Cada proyecto utiliza un video embebido de Jumpshare.
// Para reemplazar un video, cambiá únicamente su embedUrl por la URL /embed/ correspondiente.
export const projects: Project[] = [
  { id: "01", title: "Proyecto 01", category: "Agregar categoría", description: "Agregá una breve descripción de este reel.", embedUrl: "https://jumpshare.com/embed/35GXF5ltXFkkDODTi4xX" },
  { id: "02", title: "Proyecto 02", category: "Agregar categoría", description: "Agregá una breve descripción de este reel.", embedUrl: "https://jumpshare.com/embed/Fkl7lYs9bXDQkMfpcsaA" },
  { id: "03", title: "Proyecto 03", category: "Agregar categoría", description: "Agregá una breve descripción de este reel.", embedUrl: "https://jumpshare.com/embed/QIzgGnxxjizg9MgSJj2h" },
  { id: "04", title: "Proyecto 04", category: "Agregar categoría", description: "Agregá una breve descripción de este reel.", embedUrl: "https://jumpshare.com/embed/9YtsVzXMo3i4OIAgFHBS" },
  { id: "05", title: "Proyecto 05", category: "Agregar categoría", description: "Agregá una breve descripción de este reel.", embedUrl: "https://jumpshare.com/embed/nuXGWU219ZZsJyIIYwGb" },
  { id: "06", title: "Proyecto 06", category: "Agregar categoría", description: "Agregá una breve descripción de este reel.", embedUrl: "https://jumpshare.com/embed/Xcb2DVITPi8CqtXC5Ikj" },
  { id: "07", title: "Proyecto 07", category: "Agregar categoría", description: "Agregá una breve descripción de este reel.", embedUrl: "https://jumpshare.com/embed/hrZE7t0vtbJOHjiMBU4d" },
  { id: "08", title: "Proyecto 08", category: "Agregar categoría", description: "Agregá una breve descripción de este reel.", embedUrl: "https://jumpshare.com/embed/0Kv5wWYjb6ZZZnFxl4Os" },
];
