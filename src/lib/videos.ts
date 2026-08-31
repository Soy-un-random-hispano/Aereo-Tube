export type VideoCategory = "Ambient" | "Naturaleza" | "Tutorial" | "Música";

export type Video = {
  id: string;
  title: string;
  channel: string;
  initials: string;
  views: string;
  age: string;
  duration: string;
  durationSec: number;
  thumb: string;
  description: string;
  subscribers: string;
  category: VideoCategory;
};

export const CHIPS = ["Todos", "Ambient", "Naturaleza", "Tutorial", "Música"] as const;

export const VIDEOS: Video[] = [
  {
    id: "laguna-cristal",
    title: "Laguna cristalina 4K — orbes de vidrio y agua",
    channel: "Aqua Archive",
    initials: "AA",
    views: "2,4 M",
    age: "hace 3 años",
    duration: "12:04",
    durationSec: 724,
    thumb: "/aero/thumbs/01.jpg",
    description:
      "Toma aérea de una laguna turquesa con esferas de cristal líquido. Ideal para dejar de fondo mientras trabajas. Tema Frutiger Aero, luz alta, sin locución.",
    subscribers: "1,8 M",
    category: "Ambient",
  },
  {
    id: "rocio-macro",
    title: "Rocío en cámara lenta — cada gota es una lente",
    channel: "Dew Studio",
    initials: "DS",
    views: "890 mil",
    age: "hace 11 meses",
    duration: "08:41",
    durationSec: 521,
    thumb: "/aero/thumbs/02.jpg",
    description:
      "Macro de gotas sobre hierba al amanecer. Refracción, bokeh lima y aqua, el vocabulario visual de 2007 en 4K.",
    subscribers: "640 mil",
    category: "Naturaleza",
  },
  {
    id: "cielo-vista",
    title: "Cielo Vista — nubes, flare y una esfera de cristal",
    channel: "Glasshouse",
    initials: "GH",
    views: "1,1 M",
    age: "hace 2 años",
    duration: "45:00",
    durationSec: 2700,
    thumb: "/aero/thumbs/03.jpg",
    description:
      "Loop de nubes cúmulus con una esfera gloss flotando. El fondo de escritorio que todos teníamos, ahora en movimiento.",
    subscribers: "920 mil",
    category: "Ambient",
  },
  {
    id: "acuario-tropical",
    title: "Acuario tropical 4K — cáusticas y pez ángel",
    channel: "Coral FM",
    initials: "CF",
    views: "5,6 M",
    age: "hace 4 años",
    duration: "3:01:12",
    durationSec: 10872,
    thumb: "/aero/thumbs/04.jpg",
    description:
      "Tres horas de acuario con luz cáustica. El screensaver de Windows, pero vivo. Lo-fi opcional en la descripción original.",
    subscribers: "3,2 M",
    category: "Música",
  },
  {
    id: "liquid-glass",
    title: "Estudio de liquid glass — esferas, highlights, estudio",
    channel: "Vista Labs",
    initials: "VL",
    views: "412 mil",
    age: "hace 3 semanas",
    duration: "14:22",
    durationSec: 862,
    thumb: "/aero/thumbs/05.jpg",
    description:
      "Cómo construir un material de cristal líquido: especular, refracción y el highlight ovalado de Aero. Tutorial de lookdev.",
    subscribers: "210 mil",
    category: "Tutorial",
  },
  {
    id: "colinas-verdes",
    title: "Colinas verdes — stock photo de 2007, ahora en 4K",
    channel: "Nature Stock",
    initials: "NS",
    views: "760 mil",
    age: "hace 1 año",
    duration: "22:18",
    durationSec: 1338,
    thumb: "/aero/thumbs/06.jpg",
    description:
      "Colinas, cielo perfecto, nubes de algodón. El paisaje que vendía monitores LCD. Restaurado y estabilizado.",
    subscribers: "1,1 M",
    category: "Naturaleza",
  },
  {
    id: "cascada-turquesa",
    title: "Cascada turquesa — niebla, arcoíris y rocas gloss",
    channel: "Aqua Archive",
    initials: "AA",
    views: "3,3 M",
    age: "hace 2 años",
    duration: "18:07",
    durationSec: 1087,
    thumb: "/aero/thumbs/07.jpg",
    description:
      "Una caída de agua sobre piscina cristalina. El arcoíris en la niebla es real. Sin música dramática, solo ambiente.",
    subscribers: "1,8 M",
    category: "Naturaleza",
  },
  {
    id: "costa-aero",
    title: "Costa Aero — mix ambiente, orbes y laguna",
    channel: "Frutiger Radio",
    initials: "FR",
    views: "980 mil",
    age: "hace 6 meses",
    duration: "1:12:40",
    durationSec: 4360,
    thumb: "/aero/thumbs/08.jpg",
    description:
      "Mix de pads y agua. Pensado para estudiar con el tema AeroTube encendido. Artwork original del wallpaper de la extensión.",
    subscribers: "540 mil",
    category: "Música",
  },
  {
    id: "historia-aero",
    title: "Cómo el Frutiger Aero definió los 2000",
    channel: "Vista Labs",
    initials: "VL",
    views: "1,9 M",
    age: "hace 8 meses",
    duration: "24:55",
    durationSec: 1495,
    thumb: "/aero/thumbs/01.jpg",
    description:
      "De Windows Vista a los wallpapers de MediaFire: orbes, agua, tipografía Frutiger y el optimismo de una década. Ensayo visual.",
    subscribers: "210 mil",
    category: "Tutorial",
  },
  {
    id: "gui-cristal",
    title: "GUI de cristal — botones gloss en 12 minutos",
    channel: "Glasshouse",
    initials: "GH",
    views: "305 mil",
    age: "hace 1 mes",
    duration: "12:11",
    durationSec: 731,
    thumb: "/aero/thumbs/05.jpg",
    description:
      "Receta CSS para un botón Aero: degradado, inset highlight, sombra de agua. La misma técnica que usa AeroTube en YouTube.",
    subscribers: "920 mil",
    category: "Tutorial",
  },
  {
    id: "lofi-acuario",
    title: "Lo-fi aquarium beats — estudiar con peces",
    channel: "Coral FM",
    initials: "CF",
    views: "8,1 M",
    age: "hace 5 años",
    duration: "2:44:09",
    durationSec: 9849,
    thumb: "/aero/thumbs/04.jpg",
    description:
      "Beats suaves sobre un acuario en loop. Cáusticas, burbujas, cero anuncios en esta vista previa.",
    subscribers: "3,2 M",
    category: "Música",
  },
  {
    id: "nubes-8h",
    title: "Relajación: nubes 8 horas — flare suave",
    channel: "Dew Studio",
    initials: "DS",
    views: "4,0 M",
    age: "hace 3 años",
    duration: "8:00:00",
    durationSec: 28800,
    thumb: "/aero/thumbs/03.jpg",
    description:
      "Ocho horas de cielo. Sin cortes, sin voz. El companion perfecto para el wallpaper Cielo de AeroTube.",
    subscribers: "640 mil",
    category: "Ambient",
  },
];

export function getVideo(id: string) {
  return VIDEOS.find((v) => v.id === id);
}

export function relatedVideos(id: string) {
  const current = getVideo(id);
  return VIDEOS.filter((v) => v.id !== id).sort((a, b) => {
    if (!current) return 0;
    const as = a.category === current.category ? -1 : 0;
    const bs = b.category === current.category ? -1 : 0;
    return as - bs;
  });
}

export function filterVideos(query: string, chip: string) {
  const q = query.trim().toLowerCase();
  return VIDEOS.filter((v) => {
    const chipOk = chip === "Todos" || v.category === chip;
    if (!chipOk) return false;
    if (!q) return true;
    return (
      v.title.toLowerCase().includes(q) ||
      v.channel.toLowerCase().includes(q) ||
      v.category.toLowerCase().includes(q)
    );
  });
}
