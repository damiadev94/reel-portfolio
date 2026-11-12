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
    videoUrl: "../../public/videos/arañitas-invierno-1.mp4",
    poster: "",
  },
  {
    id: "02",
    title: "Cuando 4 no alcanzan.",
    category: "Flebología",
    description: "Aprende a identificar los signos de insuficiencia venosa y cómo prevenirla.",
    videoUrl: "../../public/videos/Copia de cuando-4-no-alcanzan.mp4",
    poster: "",
  },
  {
    id: "03",
    title: "Curar la Onicomicosis",
    category: "Podologia",
    description: "Descubre los tratamientos más efectivos para curar la onicomicosis y mantener tus uñas saludables.",
    videoUrl: "../../public/videos/Copia de curar la onicomicosis.mp4",
    poster: "",
  },
  {
    id: "04",
    title: "Presentación de Sofía",
    category: "Estética",
    description: "Conoce a Sofía, nuestra especialista en estética, y descubre cómo puede ayudarte a resaltar tu belleza natural.",
    videoUrl: "../../public/videos/Copia de sofia-jueves.mp4",
    poster: "",
  },
  {
    id: "05",
    title: "Trigliceridos Altos",
    category: "Cardiología",
    description: "Aprende a controlar tus triglicéridos y mantener un corazón saludable con nuestros consejos y tratamientos especializados.",
    videoUrl: "../../public/videos/DRA LO 1.mp4",
    poster: "",
  },
  {
    id: "06",
    title: "La Sal que Usas Hoy.",
    category: "Cardiología",
    description: "Descubre cómo la sal que consumes a diario puede afectar tu salud cardiovascular y aprende a reducir su consumo de manera efectiva.",
    videoUrl: "../../public/videos/Reel1lasalqueusashoyya.mp4",
    poster: "",
  },
  {
    id: "07",
    title: "App de Negocio de Lavado a Domicilio",
    category: "Apps",
    description: "",
    videoUrl: "../../public/videos/VIDEO 3 KARLOOK.mp4",
    poster: "",
  },
  {
    id: "08",
    title: "Breve Historia de las Várices.",
    category: "Flebología",
    description: "Descubre la historia de las várices y cómo pueden afectar tu salud vascular.",
    videoUrl: "../../public/videos/video-historia-varices-1.mp4",
    poster: "",
  },
];
