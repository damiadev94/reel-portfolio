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
  {
    id: "01",
    title: "Arañitas en Invierno",
    category: "Flebología",
    description: "Descubre cómo las arañitas pueden ayudarte a mejorar tu salud vascular en el invierno.",
    videoUrl: "https://jumpshare.com/embed/35GXF5ltXFkkDODTi4xX",
    poster: "",
  },
  {
    id: "02",
    title: "Cuando 4 no alcanzan.",
    category: "Flebología",
    description: "Aprende a identificar los signos de insuficiencia venosa y cómo prevenirla.",
    videoUrl: "https://jumpshare.com/embed/Fkl7lYs9bXDQkMfpcsaA",
    poster: "",
  },
  {
    id: "03",
    title: "Curar la Onicomicosis",
    category: "Podologia",
    description: "Descubre los tratamientos más efectivos para curar la onicomicosis y mantener tus uñas saludables.",
    videoUrl: "https://jumpshare.com/embed/QIzgGnxxjizg9MgSJj2h",
    poster: "",
  },
  {
    id: "04",
    title: "Presentación de Sofía",
    category: "Estética",
    description: "Conoce a Sofía, nuestra especialista en estética, y descubre cómo puede ayudarte a resaltar tu belleza natural.",
    videoUrl: "https://jumpshare.com/embed/9YtsVzXMo3i4OIAgFHBS",
    poster: "",
  },
  {
    id: "05",
    title: "Trigliceridos Altos",
    category: "Cardiología",
    description: "Aprende a controlar tus triglicéridos y mantener un corazón saludable con nuestros consejos y tratamientos especializados.",
    videoUrl: "https://jumpshare.com/embed/nuXGWU219ZZsJyIIYwGb",
    poster: "",
  },
  {
    id: "06",
    title: "La Sal que Usas Hoy.",
    category: "Cardiología",
    description: "Descubre cómo la sal que consumes a diario puede afectar tu salud cardiovascular y aprende a reducir su consumo de manera efectiva.",
    videoUrl: "https://jumpshare.com/embed/Xcb2DVITPi8CqtXC5Ikj",
    poster: "",
  },
  {
    id: "07",
    title: "App de Negocio de Lavado a Domicilio",
    category: "Apps",
    description: "",
    videoUrl: "https://jumpshare.com/embed/hrZE7t0vtbJOHjiMBU4d",
    poster: "",
  },
  {
    id: "08",
    title: "Breve Historia de las Várices.",
    category: "Flebología",
    description: "Descubre la historia de las várices y cómo pueden afectar tu salud vascular.",
    videoUrl: "https://jumpshare.com/embed/0Kv5wWYjb6ZZZnFxl4Os",
    poster: "",
  },
];