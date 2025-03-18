//// DONE
export const productosDestacados = [
  {
    id: 1,
    nombre: "Kit Americana",
    descripcionCorta: "Kit completo para instalación de canaletas.",
    descripcion:
      "Incluye todos los accesorios necesarios para la instalación de canaletas y desagues.",
    imagen: "/assets/productos/productosDestacados/kit-americana.webp",
  },
  {
    id: 2,
    nombre: "Membrana asfáltica",
    descripcionCorta:
      "Membrana con aluminio impermeabilizante para techos y paredes.",
    descripcion:
      "Disponemos en stock de todos los productos para su instalacion.",
    imagen: "/assets/productos/productosDestacados/membrana-plastica.png",
    tipo: ["35 Kilogramos", "40 Kilogramos"],
  },
  {
    id: 3,
    nombre: "Policarbonato",
    descripcionCorta: "Placa translúcidas resistentes y flexibles.",
    descripcion:
      "Material liviano y de alta resistencia a impactos, ideal para techos y cerramientos translúcidos con protección UV.",
    imagen: "/assets/productos/productosDestacados/policarbonato.webp",
  },
  {
    id: 4,
    nombre: "Chapa Trapezoidal",
    descripcionCorta: "Chapa trapezoidal en varias medidas cincalum.",
    descripcion: "Chapa cincalum C/25 para todo tipo de techos y cerramientos.",
    imagen: "/assets/productos/productosDestacados/chapa-t101.jpeg",
  },
  {
    id: 5,
    nombre: "Chapa Acanalada",
    descripcionCorta: "Chapa sinusoidal cincalum varias medidas.",
    descripcion:
      "Chapa cincalum C/25 o 27 para todo tipo de techos y cerramientos.",
    imagen: "/assets/productos/productosDestacados/chapa-acanalada.webp",
  },
  {
    id: 6,
    nombre: "Durlock",
    descripcionCorta: "Placas de yeso para divisiones y cielorrasos.",
    descripcion:
      "Sistema constructivo en seco para la realización de paredes, cielorrasos y revestimientos interiores, ofreciendo aislamiento acústico y térmico.",
    imagen: "/assets/productos/productosDestacados/durlock.png",
  },
  {
    id: 7,
    nombre: "Sellador",
    descripcionCorta: "Compuesto para sellado de juntas y grietas.",
    descripcion:
      "Sellador de alta adherencia para zinguerias, grietas y juntas en distintas superficies, disponible en varios colores.",
    color: ["Negro", "Gris", "Blanco", "Incoloro"],
    imagen: "/assets/productos/productosDestacados/sellador.webp",
  },
  {
    id: 8,
    nombre: "Babeta",
    descripcionCorta: "Perfiles metálicos para terminaciones en techos.",
    descripcion:
      "Elemento de terminación en cubiertas de chapa, tejas, etc. que evita filtraciones y mejora la estética del techo.",
    imagen: "/assets/productos/productosDestacados/durlock.png",
  },
  {
    id: 9,
    nombre: "Caño redondo",
    descripcionCorta: "Varias medidas en stock.",
    descripcion:
      "Material galvanizado utilizado en bajadas de zingueria, conductos de aire, etc.",
    imagen: "/assets/productos/productosDestacados/canio-redondo.jpg",
  },
  {
    id: 10,
    nombre: "Caño rectangular",
    descripcionCorta: "Caño rectangular de 5x10 o 7x12 cm.",
    descripcion:
      "Material galvanizado utilizado en bajadas de zingueria, conductos de aire, etc.",
    imagen: "/assets/productos/productosDestacados/canio-rectangular.jpg",
  },
  {
    id: 11,
    nombre: "Sombrero",
    descripcionCorta: "Terminación metálica para chimeneas y ventilaciones.",
    descripcion:
      "Accesorio para la protección de ductos de ventilación y chimeneas, evitando la entrada de agua y objetos externos.",
    imagen: "/assets/productos/productosDestacados/sombrero.jpg",
  },
];

// DONE
export const canaletas = [
  {
    id: 12,
    nombre: "Americana",
    nombreCarrito: "Canaleta Americana",
    descripcionCorta: "Canaleta tipo Americana por metro.",
    descripcion:
      "Diseñada para la conducción de agua de lluvia en techos y cubiertas de fácil instalación.",
    imagen: "/assets/productos/canaletas/americana.webp",
  },
  {
    id: 13,
    nombre: "Media Caña",
    nombreCarrito: "Canaleta Media Caña",
    descripcionCorta: "Canaleta semicircular para drenaje de agua.",
    descripcion:
      "Diseñada para la conducción de agua de lluvia en techos y cubiertas de fácil instalación.",
    imagen: "/assets/productos/canaletas/media-cania.jpg",
  },
  {
    id: 14,
    nombre: "7-15-10",
    nombreCarrito: "Canaleta 7-15-10",
    descripcionCorta: "Canaleta metálica para sistemas de drenaje.",
    descripcion:
      "Diseñada para la conducción de agua de lluvia en techos y cubiertas de fácil instalación.",
    imagen: "/assets/productos/canaletas/7-15-10.jpg",
  },
  {
    id: 15,
    nombre: "Banda Peine",
    nombreCarrito: "Canaleta Banda Peine",
    descripcionCorta: "Banda lateral con division.",
    descripcion:
      "Zingueria lateral con division utilizada bajo chapa o bajo teja.",
    imagen: "/assets/productos/canaletas/banda-peine.jpg",
  },
  {
    id: 16,
    nombre: "Interna P/Amurar",
    nombreCarrito: "Canaleta Interna Para Amurar",
    descripcionCorta: "Canaleta interna contra pared.",
    descripcion: "Zingueria utilizada para recibir caida de agua contra pared.",
    imagen: "/assets/productos/canaletas/interna-amurar.jpg",
  },
  {
    id: 17,
    nombre: "Esquinero P/Canaletas",
    descripcionCorta: "Accesorio para unir canaletas en esquinas.",
    descripcion:
      "Esquinero o rinconero diseñado para unir canaletas en esquinas.",
    imagen: "/assets/productos/canaletas/esquinero.jpg", // hacer medidas o sumar un objeto mas de esquinero
    medida: ["15x15", "20x20"],
  },
];

// DONE   REMAINS CSS ///SACAR TODAS LAS BABETAS DE C/30 Y C/27 Y SOLO PONER UNA SOLA DE CADA UNA QUE SE LLAME BABETA Y TE DEJE ELEGIR ENTRE P/ATORNILLAR, AMOLADORA O SOBRETEJA
export const babetas = [
  {
    id: 18,
    nombre: "Babeta C/30",
    nombreCarrito: "Babeta C/30",
    tipo: ["Para Atornillar", "Para Amoladora", "Sobreteja"],
    imagen: "/assets/productos/babetas/atornillar-c30.webp",
  },
  {
    id: 21,
    nombre: "Babeta C/27",
    nombreCarrito: "Babeta Para Atornillar C/27",
    imagen: "/assets/productos/babetas/atornillar-c27.webp",
    tipo: ["Para Atornillar", "Para Amoladora", "Sobreteja"],
  },
  {
    id: 24,
    nombre: "Sobrechapa C/Forma",
    nombreCarrito: "Babeta Sobrechapa C/Forma",
    descripcionCorta:
      "Babeta para instalación sobre chapas, evita filtraciones.",
    descripcion:
      "Babeta diseñada para instalación sobre chapas con forma sinusoidal o trapezoidal.",
    imagen: "/assets/productos/babetas/sobrechapa-cforma.png",
  },
];

// DONE   REMAINS CSS
export const caballetes_y_conversas = [
  {
    id: 25,
    nombre: "Conversa",
    descripcionCorta: "Conversa de mayor tamaño para unir cubiertas metálicas.",
    descripcion:
    "Se utiliza cuando convergen dos aguas de distintos niveles de techo de mayor tamaño.",
    imagen: "/assets/productos/caballeteYConversas/conversa.png",
    medida: ["33 Centimetros", "40 Centimetros"],
  },
  {
    id: 27,
    nombre: "Conversa C/Division",
    descripcionCorta: "Conversa con división interna para mejor drenaje.",
    descripcion:
      "Se utiliza cuando convergen dos aguas de distintos niveles de techo con mucho caudal.",
    imagen: "/assets/productos/caballeteYConversas/conversa-cdivision.png",
  },
  {
    id: 28,
    nombre: "Caballete",
    descripcionCorta: "Caballete de cierre para techos",
    descripcion:
      "Caballete o cumbrera diseñado para el cierre superior de techos.",
    imagen: "/assets/productos/caballeteYConversas/caballete.png",
    medida: ["33 Centimetros", "40 Centimetros"],
  },
  {
    id: 30,
    nombre: "Caballete C/Forma",
    descripcionCorta: "Caballete con forma sinusoidal y trapezoidal.",
    descripcion:
      "Caballete o cumbrera con diseño especial sinusoidal o trapezoidal para cierre superior de techo.",
    imagen: "/assets/productos/caballeteYConversas/caballete-cforma.png",
  },
];

// DONE
export const curvas = [
  {
    id: 31,
    nombre: "Articulada",
    nombreCarrito: "Curva Articulada",
    descripcionCorta: "Curva flexible para ajuste en instalaciones diversas.",
    descripcion:
      "Curva articulada diseñada para facilitar el ajuste en instalaciones, permitiendo mayor versatilidad en la conducción de aire.",
    imagen: "/assets/productos/curvas/articulada.webp",
    medida: [
      `3"`,
      `4"`,
      `5"`,
      `6"`,
      `7"`,
      `8"`,
      `9"`,
      `10"`,
      `11"`,
      `12"`,
      `13"`,
      `14"`,
      `16"`,
      `18"`,
      `20"`,
      `22"`,
      `24"`,
    ],
  },
  {
    id: 32,
    nombre: "Corrugada",
    nombreCarrito: "Curva Corrugada",
    descripcionCorta: "Curva reforzada con diseño corrugado resistente.",
    descripcion:
      "Curva con estructura corrugada que ofrece mayor resistencia y durabilidad, ideal para instalaciones expuestas a condiciones exigentes.",
    imagen: "/assets/productos/curvas/corrugada.webp",
    medida: [
      "3 x 90",
      "3 x 45",
      "4 x 90",
      "4 x 45",
      "5 x 90",
      "5 x 45",
      "6 x 90",
      "6 x 45",
    ],
  },
  {
    id: 39,
    nombre: "Codo 5x10",
    descripcionCorta: "Codo galvanizado de 5x10 cm.",
    descripcion: "Codo de 5x10 cm a 45° a 90° // de frente y de costado.",
    medida: ["45°", "90°"],
    imagen: "/assets/productos/caniosYGrampas/codo-cinco-diez.jpg",
  },
  {
    id: 40,
    nombre: "Codo Soldado a 45°",
    descripcionCorta: "Codo galvanizado a 45°",
    medida: ["45°", "90°"],
    descripcion: "Codo a 45° // de frente y de costado.",
    imagen: "/assets/productos/caniosYGrampas/codo-siete-doce.jpg",
  },
];

// DONE
export const canios_y_grampas = [
  {
    id: 35,
    nombre: "Redondo",
    nombreCarrito: "Caño Redondo",
    descripcionCorta: "Caño redondo en distintas medidas y espesores.",
    descripcion:
      "Caño redondo disponible en medidas de 3” a 12”, con opciones en galvanizado o negro para mayor resistencia y versatilidad.",
    imagen: "/assets/productos/productosDestacados/canio-redondo.jpg",
    medida: [
      `3"`,
      `4"`,
      `5"`,
      `6"`,
      `7"`,
      `8"`,
      `10"`,
      `12" y muchas medidas mas`,
    ],
    color: ["Galvanizado", "Negro"],
  },
  {
    id: 37,
    nombre: "Caño 5x10",
    descripcionCorta: "Caño rectangular de 5x10 cm.",
    descripcion:
      "Caño galvanizado utilizable para bajada de zingueria o conductos de aire.",
    imagen: "/assets/productos/productosDestacados/canio-rectangular.jpg",
  },
  {
    id: 38,
    nombre: "Caño 7x12",
    descripcionCorta: "Caño rectangular de 7x12 cm.",
    descripcion:
      "Caño galvanizado utilizable para bajada de zingueria o conductos de aire.",
    imagen: "/assets/productos/productosDestacados/canio-rectangular.jpg",
  },
];

// DONE
export const sombreros = [
  {
    id: 41,
    nombre: "Doble Aro",
    nombreCarrito: "Sombrero Doble Aro",
    descripcionCorta:
      "Sombrero con doble aro para mejor resistencia al viento.",
    descripcion: "El Sombrero Doble Aro aprobado por gas natural.",
    imagen: "/assets/productos/sombreros/doble-aro.webp",
    medida: [
      `SDA 3"`,
      `SDA 4"`,
      `SDA 5"`,
      `SDA 6"`,
      `SDA 7"`,
      `SDA 8"`,
      `SDA 10"`,
      `SDA 12"`,
    ],
  },
  {
    id: 42,
    nombre: "Americano Venturi",
    nombreCarrito: "Sombrero Americano Venturi",
    descripcionCorta: "Diseño americano con efecto Venturi para mejor flujo.",
    descripcion:
      "El Sombrero Americano Venturi es ideal para chimeneas, parrillas y ductos que requieren una eficiente extracción de humos y gases.",
    imagen: "/assets/productos/sombreros/americano-venturi.webp",
    medida: [`3"`, `4"`, `6"`, `8"`, `10"`, `12"`],
    color: ["Galvanizado", "Negro"],
  },
  {
    id: 43,
    nombre: `Tipo "H"`,
    nombreCarrito: `Sombrero Tipo "H"`,
    descripcionCorta: "Diseño en 'H' para mayor eficiencia en ventilación.",
    descripcion:
      "El Sombrero Tipo 'H' proporciona una excelente ventilación al reducir la entrada de agua y mejorar la extracción de aire. Su diseño es ampliamente utilizado en instalaciones industriales y residenciales.",
    imagen: "/assets/productos/sombreros/tipo-h.webp",
    medida: [`3"`, `4"`, `5"`, `6"`, `7"`, `8"`, `10"`, `12"`],
  },
  {
    id: 44,
    nombre: "Espiro",
    nombreCarrito: "Sombrero Espiro",
    descripcionCorta: "Sombrero con diseño espiral para mejor ventilacion.",
    descripcion:
      "El Sombrero Espiro cuenta con un diseño en espiral que optimiza la extracción de aire en chimeneas y parrillas, y minimiza la acumulación de residuos en el ducto. Ideal para sistemas de ventilación eficientes.",
    imagen: "/assets/productos/sombreros/espiro.png",
    medida: [`3"`, `4"`, `6"`, `8"`, `10"`, `12"`],
  },
  {
    id: 45,
    nombre: "Giratorio Eolico",
    nombreCarrito: "Sombrero Giratorio Eolico",
    descripcionCorta: "Sistema giratorio para optimizar la extracción de aire.",
    descripcion:
      "El Sombrero Giratorio Eólico aprovecha la fuerza del viento para mejorar la ventilación y extracción de humos sin consumo eléctrico. Es una solución ecológica y eficiente.",
    imagen: "/assets/productos/sombreros/eolico.jpg",
    medida: [`4"`, `6"`, `8"`, `10"`, `12"`, `16"`, `20"`, `24"`, `30"`],
  },
  {
    id: 46,
    nombre: "Base Eolico Giratorio",
    descripcionCorta: "Base para sombrero giratorio, mejora la estabilidad.",
    descripcion:
      "La Base Eólico Giratorio con bandeja proporciona una estructura sólida y estable para la instalación de sombreros giratorios.",
    imagen: "/assets/productos/sombreros/base-eolico.png",
    medida: [`16"`, `20"`, `24"`],
  },
];

// DONE
export const chapas_pinturas = [
  {
    id: 47,
    nombre: "Lisa",
    nombreCarrito: "Chapa Lisa",
    descripcionCorta: "Chapa lisa galvanizada.",
    descripcion:
      "La Chapa Lisa galvanizada es ideal para zingueria, cubiertas, revestimientos y aplicaciones estructurales. Su acabado uniforme permite una instalación sencilla y una estética limpia.",
    imagen: "/assets/productos/chapas/lisa.jpg",
    medida: [
      "C/30 1x2",
      "C/28 1x2",
      "C/27 4x8",
      "C/25 4x8",
      "C/25 4x8 color",
      "C/22 1x2",
      "C/22 4x8",
    ],
  },
  {
    id: 48,
    nombre: "Sinusoidal",
    nombreCarrito: "Chapa Sinusoidal",
    descripcionCorta:
      "Chapa sinusoidal cortadas cada 50cm desde 2 hasta 8 Metros.",
    descripcion: "Varios Espesores y largos.",
    imagen: "/assets/productos/productosDestacados/chapa-acanalada.webp",
    medida: [
      "2.5 Metros",
      "3 Metros",
      "3.5 Metros",
      "4 Metros",
      "4.5 Metros",
      "5 Metros",
      "5.5 Metros",
      "6 Metros",
      "6.5 Metros",
      "7 Metros",
      "7.5 Metros",
      "8 Metros",
    ],
  },
  {
    id: 50,
    nombre: "Trapezoidal C/25",
    nombreCarrito: "Chapa Trapezoidal C/25",
    descripcionCorta:
      "Chapa Trapezoidal C/25 cortadas cada 50cm desde 2 hasta 8 Metros.",
    descripcion: "Varios Espesores y largos.",
    imagen: "/assets/productos/productosDestacados/chapa-t101.jpeg",
    medida: [
      "3 Metros",
      "3.5 Metros",
      "4 Metros",
      "4.5 Metros",
      "5 Metros",
      "5.5 Metros",
      "6 Metros",
      "6.5 Metros",
      "7 Metros",
      "7.5 Metros",
      "8 Metros",
    ],
    color: ["Galvanizado", "Negro"],
  },
  {
    id: 51,
    nombre: "Plastica",
    nombreCarrito: "Chapa Plástica",
    descripcionCorta: "Chapa sinusoidal plastica de varios largos.",
    descripcion:
      "La Chapa Plástica es ideal para dejar pasar la claridad en galerias, quinchos, casas, etc.",
    imagen: "/assets/productos/chapas/chapa-plastica.jpg",
    medida: [
      "2 Metros",
      "2.5 Metros",
      "3 Metros",
      "3.5 Metros",
      "4 Metros",
      "4.5 Metros",
      "5 Metros",
      "5.5 Metros",
      "6 Metros",
      "6.5 Metros",
      "7 Metros",
      "7.5 Metros",
      "8 Metros",
    ],
    color: ["Natural", "Blanco"],
  },
  {
    id: 52,
    nombre: "Perfil C",
    nombreCarrito: "Perfil C Para Chapa",
    descripcionCorta: `Perfil galvanizado en "C" para estructuras de techo.`,
    descripcion:
      "El Perfil C galvanizado es un elemento estructural clave en la construcción de techos, marcos, y soportes. Su diseño en 'C' proporciona resistencia y facilidad de instalación.",
    imagen: "/assets/productos/chapas/perfil-c.jpg",
    medida: [
      "80 x 50 x 1,6 x 4 Metros",
      "80 x 50 x 1,6 x 6 Metros",
      "80 x 50 x 1,6 x 8 Metros",
      "100 x 50 x 1,6 x 4 Metros",
      "100 x 50 x 1,6 x 6 Metros",
      "100 x 50 x 1,6 x 8 Metros",
      "120 x 50 x 1,6 x 4 Metros",
      "120 x 50 x 1,6 x 6 Metros",
      "120 x 50 x 1,6 x 8 Metros",
    ],
  },
];

//
export const membranas_y_aislantes = [
  {
    id: 53,
    nombre: "Membrana N°4",
    nombreCarrito: "Membrana N°4 (35kg)",
    descripcionCorta: "Membrana asfáltica con babeta para impermeabilizar de 35kg.",
    descripcion:
      "La Membrana N°4 con aluminio es ideal para impermeabilización de techos y terrazas. Su composición asfáltica garantiza una excelente protección contra filtraciones.",
    imagen: "/assets/productos/membranasYAislantes/membrana-asfaltica.webp",
  },
  {
    id: 54,
    nombre: "Membrana 4 MM (40kg)",
    nombreCarrito: "Membrana 4 MM",
    descripcionCorta: "Membrana de 4 mm para techos y superficies expuestas de 40kg.",
    descripcion:
      "La Membrana 4 MM con aluminio proporciona un alto nivel de impermeabilización en superficies expuestas a la intemperie, protegiendo contra humedad y filtraciones.",
    imagen: "/assets/productos/membranasYAislantes/mem-asfaltica-aislamax.jpg",
  },
  {
    id: 55,
    nombre: "Aislante 5MM",
    nombreCarrito: "Aislante 5MM",
    descripcionCorta: "Aislante térmico y acústico de 5 mm con babeta.",
    descripcion:
      "El Aislante 5MM protege filtraciones, reduce la transmisión térmica y acústica, proporcionando mayor confort en techos y paredes. Fácil de instalar y resistente.",
    imagen: "/assets/productos/membranasYAislantes/aislante-5mm.webp",
    tipo: ["Sola", "Con Aluminio"],
  },
  {
    id: 56,
    nombre: "Aislante 10MM",
    nombreCarrito: "Aislante 10MM",
    descripcionCorta: "Mayor aislamiento térmico con 10 mm de espesor.",
    descripcion:
      "El Aislante 10MM protege filtraciones, reduce la transmisión térmica y acústica, proporcionando mayor confort en techos y paredes. Fácil de instalar y resistente..",
    imagen: "/assets/productos/membranasYAislantes/aislante-10mm.jpg",
    tipo: ["Sola", "Con Aluminio", "Doble Aluminio", "Burbuja Con Aluminio"],
  },
  {
    id: 57,
    nombre: "Lana de Vidrio",
    nombreCarrito: "Lana de Vidrio",
    descripcionCorta: "Aislante térmico y acústico de fibra de vidrio.",
    descripcion:
      "La Lana de Vidrio es un material aislante térmico y acústico ideal para techos, paredes y entrepisos. Su composición le otorga resistencia al fuego y durabilidad.",
    imagen: "/assets/productos/membranasYAislantes/lana-de-vidrio.jpg",
    tipo: ["Sola", "Aluminio"],
  },
  {
    id: 49,
    nombre: "Pintura Asfaltica",
    nombreCarrito: "Pintura Asfaltica",
    descripcionCorta: "Aislante térmico y acústico de fibra de vidrio.",
    descripcion:
      "La Lana de Vidrio es un material aislante térmico y acústico ideal para techos, paredes y entrepisos. Su composición le otorga resistencia al fuego y durabilidad.",
    imagen: "/assets/productos/membranasYAislantes/pinturas-emapi.webp",
    tipo: ["Sola", "Aluminio"],
  },
];

export const durlock = [
  {
    id: 58,
    nombre: "Placa Durlock 9,5mm",
    descripcionCorta: "Placa de yeso para construcción en seco 1.20x2.40 mts.",
    descripcion:
      "Placa de yeso Durlock de 9,5mm 1.20x2.40m, ideal para tabiques y cielorrasos. Disponible en versiones para humedad y temperatura.",
    imagen: "/assets/productos/productosDestacados/durlock.png",
    tipo: ["Normal"],
  },
  {
    id: 59,
    nombre: "Placa Durlock 12,5mm",
    descripcionCorta: "Placa de yeso para construcción en seco 1.20x2.40 mts.",
    descripcion:
      "Placa de yeso Durlock de 12,5mm 1.20x2.40m, ideal para tabiques y cielorrasos. Disponible en versiones para humedad y temperatura.",
    imagen: "/assets/productos/productosDestacados/durlock.png",
    tipo: ["Normal", "Para Humedad", "Para Temperatura"],
  },
  {
    id: 60,
    nombre: "Montante",
    descripcionCorta: "Perfil metálico para estructura Durlock.",
    descripcion:
      "Perfil montante de acero galvanizado para estructuras de construcción en seco. Disponible en 35mm y 70mm.",
    imagen: "/assets/productos/durlock/montante.webp",
    medida: ["35 Milimetros", "70 Milimetros"],
  },
  {
    id: 61,
    nombre: "Solera",
    descripcionCorta: "Perfil solera para sistema Durlock.",
    descripcion:
      "Perfil solera de acero galvanizado, utilizado en la base y parte superior de estructuras de construcción en seco. Medidas: 35mm y 70mm.",
    imagen: "/assets/productos/durlock/solera.png",
    medida: ["35 Milimetros", "70 Milimetros"],
  },
  {
    id: 62,
    nombre: "Cantonera",
    descripcionCorta: "Cantonera metálica para protección 2600 milimetros.",
    descripcion:
      "Cantonera de 2600mm para refuerzo y protección de esquinas en construcción en seco.",
    imagen: "/assets/productos/durlock/cantonera.jpg",
  },
  {
    id: 63,
    nombre: "Buña Perimetral 'Z'",
    descripcionCorta: "Perfil 'Z' para buñas perimetrales 2600 milimetros.",
    descripcion:
      "Perfil buña perimetral en forma de 'Z', ideal para terminaciones en cielorrasos y paredes de 2600mm.",
    imagen: "/assets/productos/durlock/bunia-perimetral.jpg",
  },
  {
    id: 64,
    nombre: "Omega",
    descripcionCorta: "Perfil omega para cielorrasos 2600 milimetros.",
    descripcion:
      "Perfil metálico omega de 2600mm para cielorrasos desmontables en sistemas de construcción en seco.",
    imagen: "/assets/productos/durlock/omega.png",
  },
  {
    id: 65,
    nombre: "Angulo de Ajuste",
    descripcionCorta: "Ángulo metálico para ajuste 2600 milimetros.",
    descripcion:
      "Ángulo de ajuste de 2600mm utilizado en estructuras de cielorrasos y tabiques.",
    imagen: "/assets/productos/durlock/angulo-ajuste.webp",
  },
  {
    id: 66,
    nombre: "Masilla",
    descripcionCorta: "Masilla para juntas en placas Durlock.",
    descripcion:
      "Masilla para tratamiento de juntas en placas de yeso Durlock. Disponible en presentaciones de 1.8kg, 7kg, 18kg y 32kg.",
    tipo: ["1.8 Kilogramos", "7 Kilogramos", "18 Kilogramos", "32 Kilogramos"],
    imagen: "/assets/productos/durlock/masilla.png",
  },
  {
    id: 67,
    nombre: "Enduido",
    descripcionCorta: "Enduido para superficies lisas.",
    descripcion:
      "Enduido plástico para alisar superficies antes de pintar. Disponible en envases de 4L y 20L.",
    tipo: ["4 Litros", "20 Litros"],
    imagen: "/assets/productos/durlock/enduido.jpg",
  },
  {
    id: 68,
    nombre: "Yeso",
    descripcionCorta: "Yeso en polvo para construcción.",
    descripcion:
      "Yeso en polvo de rápido fraguado para trabajos de construcción y terminaciones. Presentaciones: 1kg, 3.5kg y 40kg.",
    tipo: ["1 Kilogramo", "3.5 Kilogramos", "40 Kilogramos"],
    imagen: "/assets/productos/durlock/yeso.jpg",
  },
  {
    id: 69,
    nombre: "Cinta",
    descripcionCorta: "Cinta para juntas en placas Durlock.",
    descripcion:
      "Cinta de fibra o papel para refuerzo de juntas en placas de yeso. Disponible en distintas medidas.",
    tipo: [
      "Tramada 20 Metros",
      "Tramada 90 Metros",
      "Papel 23 Metros",
      "Papel 75 Metros",
      "Papel 150 Metros",
    ],
    imagen: "/assets/productos/durlock/cinta.jpg",
  },
  {
    id: 70,
    nombre: "Tornillos o Fijaciones",
    descripcionCorta: "Tornillos para placas y estructuras.",
    descripcion:
      "Tornillos autoperforantes y fijaciones para estructuras y placas de yeso. Tornillos Tipos: T1, T2, T3. // Fijaciones Medidas: 6mm y 8mm.",
    tipo: ["T1", "T2", "T3"],
    medida: ["6", "8"],
    imagen: "/assets/productos/durlock/tornillos-y-fijaciones.webp",
  },
  {
    id: 71,
    nombre: "Puerta Linea",
    descripcionCorta: "Puerta MDF de 70cm, línea 2000.",
    descripcion:
      "Puerta de MDF de la línea 2000, con un ancho de 70cm, ideal para interiores.",
    imagen: "/assets/productos/durlock/puerta.webp",
  },
];

export const policarbonato = [
  {
    id: 72,
    nombre: "Alveolar Cristal",
    descripcionCorta: "Panel de policarbonato translúcido y resistente.",
    descripcion:
      "Placa de policarbonato alveolar cristal, liviana y resistente, ideal para techos y cerramientos. Disponible en varias medidas.",
    imagen: "/assets/productos/policarbonato/cristal.png",
    medida: ["4 Milimetros", "6 Milimetros", "8 Milimetros", "10 Milimetros"],
  },
  {
    id: 73,
    nombre: "Chapa de Policarbonato Sinusoidal",
    descripcionCorta: "Policarbonato sinusoidal para techos y cubiertas.",
    descripcion:
      "Chapa de policarbonato sinusoidal, ideal para techos, disponible en varias longitudes y colores cristal y fume.",
    imagen: "/assets/productos/policarbonato/acanalada.png",
    medida: [
      "3 Metros",
      "3.5 Metros",
      "4 Metros",
      "4.5 Metros",
      "5 Metros",
      "5.5 Metros",
      "6 Metros",
    ],
    tipo: ["Cristal", "Fume"],
  },
  {
    id: 90,
    nombre: "Chapa de Policarbonato Trapezoidal",
    descripcionCorta: "Policarbonato trapezoidal para techos y cubiertas.",
    descripcion:
      "Chapa de policarbonato trapezoidal, ideal para techos, disponible en varias longitudes y colores cristal y fume.",
    imagen: "/assets/productos/policarbonato/acanalada.png",
    medida: [
      "3 Metros",
      "3.5 Metros",
      "4 Metros",
      "4.5 Metros",
      "5 Metros",
      "5.5 Metros",
      "6 Metros",
    ],
    tipo: ["Cristal", "Fume"],
  },
];

export const accesorios = [
  {
    id: 74,
    nombre: "Boqueta Americana",
    descripcionCorta: "Boqueta de terminación para canaleta americana.",
    descripcion:
      "Boqueta (puntera con tapa y bajada soldada) de terminación para estructuras con sistema americano.",
    imagen: "/assets/productos/accesorios/boqueta-americana.jpg",
    tipo: ["Derecha", "Izquierda", "Ambas"],
  },
  {
    id: 75,
    nombre: "Terminal Americana",
    descripcionCorta: "Terminal para cierre de canaletas americana.",
    descripcion: "Terminal (tapa soldada en 20cm de canaleta) para cierre y terminación de canaleta americana.",
    tipo: ["Derecha", "Izquierda", "Ambas"],
    imagen: "/assets/productos/accesorios/terminal-americana.jpg",
  },
  {
    id: 76,
    nombre: "Soportes",
    descripcionCorta: "Soporte resistente para estructuras americanas.",
    descripcion: "Soporte diseñado para refuerzo en estructuras americanas.",
    imagen: "/assets/productos/accesorios/soporte-americana.jpg",
    tipo: ["Americana", "7x15x10", "Pecho Paloma"],
  },
  {
    id: 77,
    nombre: "Esquinero Americana",
    descripcionCorta: "Esquinero de unión para estructuras americanas.",
    descripcion: "Esquinero soldado a 90° para refuerzo y terminación de estructuras.",
    imagen: "/assets/productos/accesorios/esquinero-americana.jpg",
  },
  {
    id: 78,
    nombre: "Rinconero Americana",
    descripcionCorta: "Rinconero para refuerzo en esquinas estructurales.",
    descripcion: "Pieza de refuerzo para esquinas en estructuras americanas.",
    imagen: "/assets/productos/accesorios/rinconero-americana.webp",
  },
  {
    id: 79,
    nombre: "Grampas",
    descripcionCorta: "Grampas metálicas de sujeción en varias medidas.",
    descripcion: "Grampas metálicas resistentes para fijación estructural.",
    medida: ["5 x 10", "7 x 12"],
    imagen: "/assets/productos/accesorios/grampa.webp",
  },
  {
    id: 80,
    nombre: "Grampas Omega",
    descripcionCorta: "Grampas Omega para fijación segura y resistente.",
    descripcion: "Grampas Omega metálicas en varias medidas para sujeción.",
    medida: [`3"`, `4"`, `5"`, `6"`, `7"`, `8"`, `10"`, `12"`],
    imagen: "/assets/productos/accesorios/grampa-omega.jpg",
  },
  {
    id: 81,
    nombre: "Barra de Estaño",
    descripcionCorta: "Barra de estaño de alta pureza para soldaduras.",
    descripcion: "Barra de estaño para soldaduras limpias y duraderas.",
    imagen: "/assets/productos/accesorios/barra-estanio.webp",
  },
  {
    id: 33,
    nombre: "Tee y Ramales",
    descripcionCorta: `Conexión en "T" e "Y" para derivaciones en instalaciones.`,
    descripcion: `Pieza de conexión en forma de "T" e "Y" utilizada para derivar el flujo en instalaciones hidráulicas o de ventilación, permitiendo múltiples salidas.`,
    imagen: "/assets/productos/curvas/tee-y-ramales.jpg",
    medida: [`3"`, `4"`, `5"`, `6"`, `7"`, `8"`, `10"`, `12"`],
  },
];

export const accesorios_dos = [
  {
    id: 34,
    nombre: "Reduccion Galvanizado",
    descripcionCorta: "Adaptador para unir tubos de distintos diámetros.",
    descripcion:
      "Reducción de galvanizado diseñada para conectar tubos de diferentes diámetros, asegurando una transición eficiente y sin pérdidas de flujo.",
    imagen: "/assets/productos/curvas/reduccion-de-aluminio.webp",
    medida: [
      "4 a 3",
      "5 a 4",
      "6 a 4",
      "6 a 5",
      "7 a 6",
      "8 a 6",
      "10 a 8",
      "12 a 10",
      "Preguntar medidas especiales",
    ],
  },
  {
    id: 82,
    nombre: "Sellaband",
    descripcionCorta: "Sellaband para sellado en techos y estructuras.",
    descripcion:
      "Sellador flexible para techos con formas trapesoidal y sinusoidal.",
    tipo: ["Trapesoidal", "Sinusoidal"],
    imagen: "/assets/productos/accesorios/sellaband.jpg",
  },
  {
    id: 83,
    nombre: "Compriband",
    descripcionCorta: "Cinta de sellado Compriband para techos.",
    descripcion: "Cinta de sellado expandible para techos y estructuras.",
    tipo: ["Trapesoidal", "Sinusoidal"],
    imagen: "/assets/productos/accesorios/compriband.jpg",
  },
  {
    id: 84,
    nombre: "Sellador",
    descripcionCorta: "Sellador de alta adherencia en varios colores.",
    descripcion: "Sellador de uso general con alta adherencia y flexibilidad.",
    color: ["Negro", "Gris", "Blanco", "Incoloro"],
    imagen: "/assets/productos/productosDestacados/sellador.webp",
  },
  {
    id: 85,
    nombre: "Tornillo Autoperforante",
    descripcionCorta: "Tornillos autoperforantes para madera y chapa.",
    descripcion:
      "Tornillos resistentes con punta autoperforante para fijación.",
    tipo: [
      `Madera 2"`,
      `Madera 2.5"`,
      `Chapa 1"`,
      `Chapa 1.5"`,
      `Chapa 2"`,
      `Chapa 2.5"`,
    ],
    imagen: "/assets/productos/accesorios/tornillo-autoperforante.jpg",
  },
  {
    id: 86,
    nombre: "Separador Plastico",
    descripcionCorta: "Separador plástico resistente para estructuras.",
    descripcion: "Separador de plástico duradero para diferentes aplicaciones.",
    imagen: "/assets/productos/accesorios/separador-plastico.webp",
  },
  {
    id: 87,
    nombre: "Pintura Para Chapa",
    descripcionCorta: "Pintura especial para protección de chapas.",
    descripcion:
      "Pintura formulada para protección y acabado en chapas metálicas.",
    medida: ["1 Litro", "4 Litros", "10 Litros", "20 Litros"],
    imagen: "/assets/productos/accesorios/pintura-chapa.png",
  },
  {
    id: 88,
    nombre: "Sealer",
    descripcionCorta: "Sealer protector en colores gris y negro.",
    descripcion: "Sealer sellador para protección en diversas superficies.",
    color: ["Gris", "Negro"],
    medida: ["1 Litro", "4 Litros", "10 Litros", "20 Litros"],
    imagen: "/assets/productos/accesorios/sealer.png",
  },
  {
    id: 89,
    nombre: "Vendas",
    descripcionCorta: "Vendas para aislamiento en diversas medidas.",
    descripcion: "Cinta de vendaje para aislamiento y protección estructural.",
    medida: [
      "4 Centimetros x 25 Metros",
      "10 Centimetros x 25 Metros",
      "20 Centimetros x 25 Metros",
      "100 Centimetros x 25 Metros",
    ],
    imagen: "/assets/productos/accesorios/vendas.png",
  },
];

//COLOR , MEDIDA, TIPO
