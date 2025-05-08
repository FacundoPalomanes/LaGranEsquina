export const data = {
  destacados: [
    {
      id: 1,
      nombre: "Kit Americana",
      descripcion:
        "Tenemos en stock todos los accesorios necesarios para la instalación.",
      imagen: `./assets/productos/destacados/kit-americana.webp`,
    },
    {
      id: 2,
      nombre: "Membranas asfálticas",
      descripcion:
        "Disponemos en stock de todos los productos para su instalacion.",
      imagen:
        "./assets/productos/destacados/membrana-plastica.png",
      tipo: ["35 kg", "40 kg"],
      href: "#claraboyas",
    },
    {
      id: 3,
      nombre: "Policarbonatos",
      descripcion:
        "Material liviano y de alta resistencia a impactos, ideal para techos y cerramientos translúcidos con protección UV.",
      imagen:
        "./assets/productos/destacados/policarbonato.webp",
      href: "#durlock",
      metros: true,
    },
    {
      id: 4,
      nombre: "Chapas Trapezoidales",
      descripcion:
        "Chapa cincalum C/25 para todo tipo de techos y cerramientos.",
      imagen:
        "./assets/productos/destacados/chapa-t101.jpeg",
      href: "#sombreros",
      tipo: ["Calibre 25 Cincalum", "Color C/25"],
    },
    {
      id: 5,
      nombre: "Chapas Sinusoidales",
      descripcion: "Chapa cincalum C/25 o 27 en varias medidas.",
      imagen:
        "./assets/productos/destacados/chapa-acanalada.webp",
      href: "#sombreros",
      tipo: ["Calibre 25 Cincalum", "Calibre 27 Cincalum", "Color C/25"],
      metros: true,
    },
    {
      id: 6,
      nombre: "Durlock",
      descripcion: "Placas de yeso para divisiones y cielorrasos.",
      imagen:
        "./assets/productos/destacados/durlock.png",
      href: "#membranas_aislantes",
    },
    {
      id: 7,
      nombre: "Selladores",
      descripcion:
        "Sellador de multiples usos generales con alta adherencia y flexibilidad.",
      imagen:
        "./assets/productos/destacados/sellador.webp",
      color: ["Negro", "Gris", "Blanco", "Incoloro"],
      href: "#chapas",
    },
    {
      id: 8,
      nombre: "Babetas",
      descripcion: "Elemento de terminación que evita filtraciones.",
      imagen:
        "./assets/productos/destacados/atornillar-c30.webp",
      href: "#canaletas",
      tipo: ["Para Atornillar", "Para Amoladora", "Para Amurar"],
      color: ["Galvanizado C30", "Color C25"],
      metros: true,
    },
    {
      id: 9,
      nombre: "Caños redondos",
      descripcion:
        "Material galvanizado utilizado para bajadas de zingueria, conductos de aire, etc.",
      imagen:
        "./assets/productos/destacados/canio-redondo.jpg",
      href: "#curvas",
      metros: true,
      medida: [
        "3 Pulgadas",
        "4 Pulgadas",
        "5 Pulgadas",
        "6 Pulgadas",
        "7 Pulgadas",
        "8 Pulgadas",
        "10 Pulgadas",
        "12 Pulgadas",
        "Otras Medidas",
      ],
      color: ["Galvanizado", "Negro (consultar medidas)"],
    },
    {
      id: 10,
      nombre: "Caños rectangulares",
      descripcion:
        "Material galvanizado utilizado en bajadas de zingueria, conductos de aire, etc.",
      imagen:
        "./assets/productos/destacados/canio-rectangular.jpg",
      href: "#curvas",
    },
    {
      id: 11,
      nombre: "Sombreros",
      descripcion:
        "Accesorio para la protección de ductos de ventilación y chimeneas, evitando la entrada de agua y objetos externos.",
      imagen:
        "./assets/productos/destacados/sombrero.jpg",
      href: "#canios_grampas",
    },
  ],
  canaletas: [
    {
      id: 12,
      nombre: "Americana",
      descripcion:
        "Diseñada para la conducción de agua de lluvia en techos y cubiertas de fácil instalación.",
      imagen:
        "./assets/productos/canaletas/americana.webp",
      metros: true,
    },
    {
      id: 13,
      nombre: "Media Caña",
      descripcion:
        "Diseñada para la conducción de agua de lluvia en techos y cubiertas de fácil instalación.",
      imagen:
        "./assets/productos/canaletas/media-cania.jpg",
      metros: true,
    },
    {
      id: 14,
      nombre: "7-15-10",
      descripcion:
        "Diseñada para la conducción de agua de lluvia en techos y cubiertas de fácil instalación.",
      imagen:
        "./assets/productos/canaletas/7-15-10.jpg",
      metros: true,
    },
    {
      id: 15,
      nombre: "Pecho Paloma",
      descripcion:
        "Diseñada para la conducción de agua de lluvia en techos y cubiertas de fácil instalación.",
      imagen:
        "./assets/productos/canaletas/pecho-paloma.webp",
      metros: true,
    },
    {
      id: 16,
      nombre: "Rinconeros",
      descripcion: 'Pieza para esquinas en conversas de "canaletas varias"',
      imagen:
        "./assets/productos/accesorios/rinconero-americana.webp",
      tipo: ["Americana", "Pecho Paloma", "7x15x10"],
    },
    {
      id: 17,
      nombre: "Esquineros",
      descripcion: 'Esquinero soldado a 90° para "canaletas varias"',
      imagen:
        "./assets/productos/accesorios/esquinero-americana.jpg",
      tipo: ["Americana", "Pecho Paloma", "7x15x10"],
    },
    {
      id: 18,
      nombre: "Boquetas",
      descripcion:
        'Boqueta (puntera con tapa y bajada soldada) de terminación para "canaletas varias."',
      imagen:
        "./assets/productos/accesorios/boqueta-americana.jpg",
      tipo: ["Derecha", "Izquierda", "Intermedia"],
      medida: ["Americana", "Pecho Paloma", "7x15x10"],
    },
    {
      id: 19,
      nombre: "Terminales",
      descripcion:
        'Terminal (tapa soldada en 20cm de canaleta) para cierre y terminación para "canaletas varias"',
      imagen:
        "./assets/productos/canaletas/terminal-americana.jpg",
      tipo: ["Derecha", "Izquierda"],
      medida: ["Americana", "Pecho Paloma", "7x15x10"],
    },
    {
      id: 20,
      nombre: "Soportes",
      descripcion: "Soporte diseñado para sostener distintas canaletas",
      imagen:
        "./assets/productos/accesorios/soporte.jpg",
      tipo: ["Americana", "7x15x10", "Pecho Paloma"],
    },
    {
      id: 21,
      nombre: "Tapas",
      descripcion: "Tapas sueltas para distintas canaletas",
      imagen:
        "./assets/productos/canaletas/tapas.jpg",
      tipo: ["Americana", "7x15x10", "Pecho Paloma", "Por Pedido"],
      medida: ["Izquierda", "Derecha"],
    },
    {
      id: 22,
      nombre: "Capuchón",
      descripcion: "Recubrimiento para cenefas de maderas",
      imagen:
        "./assets/productos/canaletas/capuchon.jpg",
      metros: true,
    },
    {
      id: 23,
      nombre: "Esquineros",
      descripcion:
        'Zinguería en forma de "L" para cubrir entre el techo y la pared',
      imagen:
        "./assets/productos/canaletas/esquinero-canaleta.jpg",
      medida: [
        "10 x 10 cm",
        "15 x 15 cm",
        "20 x 20 cm",
        "Otras Medidas (Por Pedido)",
      ],
      metros: true,
    },
    {
      id: 24,
      nombre: "Recibidor",
      descripcion: "Zinguería Recibidora de agua contra pared",
      imagen:
        "./assets/productos/canaletas/recibidor.jpg",
      metros: true,
    },
    {
      id: 25,
      nombre: "Interna P/Amurar",
      descripcion:
        "Zinguería utilizada para recibir caída de agua contra pared.",
      imagen:
        "./assets/productos/canaletas/interna-amurar.jpg",
      metros: true,
    },
    {
      id: 26,
      nombre: "Banda Peine",
      descripcion:
        "Zinguería lateral con división utilizada bajo chapa o bajo teja.",
      imagen:
        "./assets/productos/canaletas/banda-peine.jpg",
      metros: true,
    },
    {
      id: 27,
      nombre: "Bajoteja",
      descripcion: "Zinguería lateral bajochapa o bajoteja",
      imagen:
        "./assets/productos/canaletas/bajoteja.jpg",
      metros: true,
    },
  ],
  babetas: [
    {
      id: 28,
      nombre: "Babetas",
      imagen:
        "./assets/productos/babetas/atornillar-c30.webp",
      tipo: ["Para Atornillar", "Para Amoladora", "Para Amurar"],
      color: ["Galvanizado C30", "Color C25"],
      metros: true,
    },
    {
      id: 29,
      nombre: "Babeta C/27",
      imagen:
        "./assets/productos/babetas/atornillar-c27.webp",
      tipo: ["Para Atornillar", "Para Amoladora", "Para Amurar"],
      metros: true,
    },
    {
      id: 30,
      nombre: "Sobrechapa C/Forma",
      descripcion:
        "Babeta diseñada para instalación sobre chapas con forma sinusoidal o trapezoidal.",
      imagen:
        "./assets/productos/babetas/sobrechapa-cforma.png",
      tipo: ["Sinusoidal", "Trapezoidal"],
      metros: true,
      color: ["Galvanizada", "Color"],
    },
  ],
  caballetes_conversas: [
    {
      id: 31,
      nombre: "Conversas",
      descripcion:
        "Se utiliza cuando convergen dos aguas de distintos niveles del mismo techo.",
      imagen:
        "./assets/productos/caballetes_conversas/conversa.png",
      metros: true,
      medida: ["Desarrollo 33", "Desarrollo 40"],
      color: ["Galvanizado", "Color"],
    },
    {
      id: 32,
      nombre: "Conversa C/División",
      descripcion:
        "Se utiliza cuando convergen dos aguas de distintos niveles de techo con mucho caudal.",
      imagen:
        "./assets/productos/caballetes_conversas/conversa-cdivision.png",
      metros: true,
    },
    {
      id: 33,
      nombre: "Caballetes",
      descripcion:
        "Caballete o cumbrera diseñado para el cierre superior de techos.",
      imagen:
        "./assets/productos/caballetes_conversas/caballete.png",
      metros: true,
      medida: ["Desarrollo 33", "Desarrollo 40"],
      color: ["Galvanizado", "Color"],
    },
    {
      id: 34,
      nombre: "Caballete C/Forma",
      descripcion:
        "Caballete o cumbrera (en 2 partes) con diseño especial sinusoidal o trapezoidal para cierre superior de techo.",
      imagen:
        "./assets/productos/caballetes_conversas/caballete-cforma.png",
      tipo: ["Sinusoidal", "Trapezoidal"],
      metros: true,
      color: ["Galvanizada", "Color"],
    },
  ],
  curvas: [
    {
      id: 35,
      nombre: "Curvas Articuladas",
      descripcion:
        "Curva articulada diseñada para facilitar el ajuste en instalaciones, permitiendo mayor versatilidad en la conducción de aire.",
      imagen:
        "./assets/productos/curvas/articulada.webp",
      medida: [
        "3 Pulgadas",
        "4 Pulgadas",
        "5 Pulgadas",
        "6 Pulgadas",
        "7 Pulgadas",
        "8 Pulgadas",
        "9 Pulgadas",
        "10 Pulgadas",
        "11 Pulgadas",
        "12 Pulgadas",
        "13 Pulgadas",
        "14 Pulgadas",
        "16 Pulgadas",
        "18 Pulgadas",
        "20 Pulgadas",
        "22 Pulgadas",
        "24 Pulgadas",
      ],
    },
    {
      id: 36,
      nombre: "Curvas Corrugadas",
      descripcion:
        "Curva con estructura corrugada que ofrece mayor resistencia y durabilidad, ideal para instalaciones expuestas a condiciones exigentes.",
      imagen:
        "./assets/productos/curvas/corrugada.webp",
      tipo: ["45°", "90°"],
      medida: ["3 Pulgadas", "4 Pulgadas", "5 Pulgadas", "6 Pulgadas"],
    },
    {
      id: 37,
      nombre: "Codos 5x10 y 7x12",
      descripcion:
        "Codos de 5x10 y 7x12 cm (a 45° y a 90°) de frente y de costado.",
      imagen:
        "./assets/productos/curvas/codo-cinco-diez.jpg",
      tipo: ["De frente", "De costado"],
      medida: ["5x10cm a 45*", "5x10cm a 90*", "7x12cm a 45*", "7x12cm a 90*"],
    },
    {
      id: 38,
      nombre: "Codos Redondos Soldados",
      descripcion: "Codos soldados a 45° y 90°",
      imagen:
        "./assets/productos/curvas/codo-siete-doce.jpg",
      tipo: ["45°", "90°"],
      medida: ["3 Pulgadas", "4 Pulgadas", "5 Pulgadas", "6 Pulgadas"],
    },
  ],
  canios_grampas: [
    {
      id: 39,
      nombre: "Caños Redondos",
      descripcion:
        "Caño redondo disponible en medidas de 3” a 12”, con opciones en galvanizado o color para mayor resistencia y versatilidad.",
      imagen:
        "./assets/productos/canios_grampas/canio-redondo.jpg",
      metros: true,
      medida: [
        "3 Pulgadas",
        "4 Pulgadas",
        "5 Pulgadas",
        "6 Pulgadas",
        "7 Pulgadas",
        "8 Pulgadas",
        "10 Pulgadas",
        "12 Pulgadas",
        "Otras Medidas",
      ],
      color: ["Galvanizado", "Color (consultar medidas)"],
    },
    {
      id: 40,
      nombre: "Grampas Omega",
      descripcion: "Grampas Omega metálicas en varias medidas para sujeción.",
      imagen:
        "./assets/productos/canios_grampas/grampa-omega.jpg",
      medida: [
        "3 Pulgadas",
        "4 Pulgadas",
        "5 Pulgadas",
        "6 Pulgadas",
        "7 Pulgadas",
        "8 Pulgadas",
        "10 Pulgadas",
        "12 Pulgadas",
      ],
    },
    {
      id: 41,
      nombre: "Grampas Para Amurar",
      descripcion: "Grampa en distintos diámetros (con pata de 20 cm de largo)",
      imagen:
        "./assets/productos/canios_grampas/grampas-pamurar.jpg",
      medida: [
        "3 Pulgadas",
        "4 Pulgadas",
        "5 Pulgadas",
        "6 Pulgadas",
        "7 Pulgadas",
        "8 Pulgadas",
        "10 Pulgadas",
        "12 Pulgadas",
      ],
    },
    {
      id: 42,
      nombre: "Caños 5x10",
      descripcion:
        "Caño galvanizado utilizable para bajada de zinguería o conductos de aire",
      imagen:
        "./assets/productos/canios_grampas/canio-rectangular.jpg",
      metros: true,
    },
    {
      id: 43,
      nombre: "Caños 7x12",
      descripcion:
        "Caño galvanizado utilizable para bajada de zinguería o conductos de aire (x metro)",
      imagen:
        "./assets/productos/canios_grampas/canio-rectangular.jpg",
      metros: true,
    },
    {
      id: 44,
      nombre: "Embudos",
      descripcion: "Recibidor de agua en forma de embudo",
      imagen:
        "./assets/productos/canios_grampas/embudo.jpg",
      tipo: [
        "Embudo Americano 5x10",
        "Embudo Mini 5x10",
        "Embudo Común 5x10",
        "Embudo Artístico 5x10",
        "Embudo Americano 7x12",
      ],
    },
    {
      id: 45,
      nombre: "Grampas",
      descripcion: "Grampas para caños de bajada 5x10 o 7x12.",
      imagen:
        "./assets/productos/canios_grampas/grampa.jpg",
      medida: ["5x10", "7x12"],
    },
    {
      id: 124,
      nombre: "Transformaciones",
      descripcion:
        "Pieza para transformar de redondo a rectangular y también de sentido de orientación (consultar).",
      imagen:
        "./assets/productos/canios_grampas/transformaciones.jpg",
    },
    {
      id: 46,
      nombre: "Reducciones Cónicas",
      descripcion: "Pieza galvanizada para reducir diferentes diámetros",
      imagen:
        "./assets/productos/canios_grampas/reducciones-conicas.jpg",
      medida: ["4 a 3", "5 a 4", "6 a 4", "6 a 5"],
    },
  ],
  sombreros: [
    {
      id: 47,
      nombre: "Doble Aro",
      descripcion: "El Sombrero Doble Aro aprobado por gas natural.",
      imagen:
        "./assets/productos/sombreros/doble-aro.webp",
      medida: [
        "3 Pulgadas",
        "4 Pulgadas",
        "5 Pulgadas",
        "6 Pulgadas",
        "7 Pulgadas",
        "8 Pulgadas",
        "10 Pulgadas",
        "12 Pulgadas",
      ],
    },
    {
      id: 48,
      nombre: "Americano o Venturi",
      descripcion:
        "El Sombrero Americano o Venturi es ideal para chimeneas, parrillas y ductos que requieren una eficiente extracción de humos y gases (En color y otras medidas es por Pedido).",
      imagen:
        "./assets/productos/sombreros/americano-venturi.webp",
      color: ["Negro", "Galvanizado"],
      medida: [
        "3 Pulgadas",
        "4 Pulgadas",
        "6 Pulgadas",
        "8 Pulgadas",
        "10 Pulgadas",
        "12 Pulgadas",
      ],
    },
    {
      id: 49,
      nombre: 'Tipo "H"',
      descripcion:
        "El Sombrero Tipo 'H' proporciona una excelente ventilación al reducir la entrada de agua y mejorar la extracción de aire. Su diseño es ampliamente utilizado en instalaciones industriales y residenciales.",
      imagen:
        "./assets/productos/sombreros/tipo-h.webp",
      medida: [
        "3 Pulgadas",
        "4 Pulgadas",
        "5 Pulgadas",
        "6 Pulgadas",
        "7 Pulgadas",
        "8 Pulgadas",
        "10 Pulgadas",
        "12 Pulgadas",
      ],
    },
    {
      id: 50,
      nombre: "Espiro",
      descripcion:
        "El Sombrero Espiro cuenta con un diseño en espiral que optimiza la salida de aire en chimeneas y parrillas, y minimiza la acumulación de residuos en el ducto. Ideal para sistemas de ventilación eficientes (medidas rectangulares por pedido).",
      imagen:
        "./assets/productos/sombreros/espiro.png",
      medida: [
        "3 Pulgadas",
        "4 Pulgadas",
        "6 Pulgadas",
        "8 Pulgadas",
        "10 Pulgadas",
        "12 Pulgadas",
      ],
    },
    {
      id: 51,
      nombre: "Giratorio o Eólico",
      descripcion:
        "El Sombrero Giratorio o Eólico aprovecha la fuerza del viento para mejorar la ventilación y extracción de humos sin consumo eléctrico (ideal para galpones). Es una solución ecológica y eficiente.",
      imagen:
        "./assets/productos/sombreros/eolico.jpg",
      medida: [
        "4 Pulgadas",
        "6 Pulgadas",
        "8 Pulgadas",
        "10 Pulgadas",
        "12 Pulgadas",
        "16 Pulgadas",
        "20 Pulgadas",
        "24 Pulgadas",
      ],
    },
    {
      id: 52,
      nombre: "Base Giratorio o Eólico",
      descripcion:
        "La Base de los Sombreros Eólicos o Giratorios proporciona una estructura sólida y estable en su instalación",
      imagen:
        "./assets/productos/sombreros/base-eolico.png",
      medida: ["16 Pulgadas", "20 Pulgadas", "24 Pulgadas"],
    },
  ],
  chapas: [
    {
      id: 53,
      nombre: "Chapas Lisas",
      descripcion:
        "La Chapa Lisa galvanizada es ideal para zingueria, cubiertas, revestimientos y aplicaciones estructurales. Lisa color solamente Calibre 25.",
      imagen:
        "./assets/productos/chapas/lisa.jpg",
      medida: [
        "C/30 (1 x 2 mts)",
        "C/28 (1 x 2 mts)",
        "C/27 (1.22 x 2.44 mts)",
        "C/25 (1.22 x 2.44 mts)",
      ],
      color: [
        "Galvanizado",
        "Gris C/25 (1.22 x 2.44 mts)",
        "Negro C/25 (1.22 x 2.44 mts)",
        "Otros colores C/25 (1.22 x 2.44 mts)",
      ],
    },
    {
      id: 54,
      nombre: "Sinusoidal",
      descripcion: "Varios Espesores y largos.",
      imagen:
        "./assets/productos/chapas/chapa-acanalada.webp",
      tipo: ["Calibre 25 Cincalum", "Calibre 27 Cincalum", "Color C/25"],
      metros: true,
    },
    {
      id: 55,
      nombre: "Trapezoidal C/25",
      descripcion: "Varios Espesores y largos.",
      imagen:
        "./assets/productos/chapas/chapa-t101.jpeg",
      tipo: ["Calibre 25 Cincalum", "Color C/25"],
      metros: true,
    },
    {
      id: 56,
      nombre: "Chapas Plásticas",
      descripcion:
        "La Chapa Plástica (Sinusoidal) es ideal para dejar pasar la claridad en galerías, quinchos, casas, etc (consultar trapezoidal).",
      imagen:
        "./assets/productos/chapas/chapa-plastica.jpg",
      color: ["Natural", "Blanco"],
      metros: true,
    },
    {
      id: 57,
      nombre: 'Clavos 3"',
      descripcion: "Clavos para chapas (viene x100 unidades)",
      imagen:
        "./assets/productos/chapas/clavos.jpg",
      tipo: [
        "Clavo Cabeza De Plomo",
        'Clavo de 3" con Accesorio (arandelas de goma y metal)',
      ],
    },
    {
      id: 58,
      nombre: "Perfil C",
      descripcion:
        "El Perfil C galvanizado es un elemento estructural clave en la construcción de techos, marcos, y soportes. Su diseño en 'C' proporciona resistencia y facilidad de instalación.",
      imagen:
        "./assets/productos/chapas/perfil-c.jpg",
      tipo: ["4 mts", "6 mts", "8 mts"],
      medida: ["80 x 40 x 1,6", "100 x 50 x 1,6", "120 x 50 x 1,6"],
    },
    {
      id: 59,
      nombre: "PCG y PGU",
      descripcion:
        "Perfil para Estructura de 0,94 mm de espesor. Vienen por 6 mts largo",
      imagen:
        "./assets/productos/chapas/pgc.jpg",
      tipo: ["PGC", "PGU"],
      medida: ["6 mts"],
    },
    {
      id: 60,
      nombre: "Tornillos Autoperforantes",
      descripcion:
        "Tornillos resistentes con punta autoperforante para fijación.",
      imagen:
        "./assets/productos/chapas/tornillo-autoperforante.png",
      tipo: [
        'Madera 1.5"',
        'Madera 2"',
        'Madera 2.5"',
        'Hierro 1"',
        'Hierro 1.5"',
        'Hierro 2"',
        'Hierro 2.5"',
      ],
    },
    {
      id: 61,
      nombre: "Separadores Plásticos",
      descripcion:
        "Separador de plástico duradero para diferentes aplicaciones.",
      imagen:
        "./assets/productos/chapas/separador-plastico.webp",
    },
  ],
  selladores_pinturas: [
    {
      id: 62,
      nombre: "Sellacanaletas",
      descripcion:
        "Sellador de uso general con alta adherencia y flexibilidad.",
      imagen:
        "./assets/productos/selladores_pinturas/sellador.webp",
      color: ["Negro", "Gris", "Blanco", "Incoloro"],
    },
    {
      id: 63,
      nombre: "Sellagrietas",
      descripcion: "Sella grietas, paredes, hormigón, muros, etc.",
      imagen:
        "./assets/productos/selladores_pinturas/sellagrietas.png",
    },
    {
      id: 64,
      nombre: "Pintura Para Chapa",
      descripcion:
        "Pintura formulada para protección y acabado en chapas galvanizadas, metálicas, maderas,etc",
      imagen:
        "./assets/productos/selladores_pinturas/pintura-pchapa.jpg",
      color: ["Negro", "Negro Mate", "Blanco", "Gris", "Verde", "Rojo", "Azul"],
      medida: ["1 lt", "4 lts", "10 lts", "20 lts"],
    },
    {
      id: 65,
      nombre: "Losalum",
      descripcion:
        "Impermeabilizante para losas, terrazas y azoteas en varios colores.",
      imagen:
        "./assets/productos/selladores_pinturas/losalum.png",
      medida: ["1 lt", "4 lts", "10 lts", "20 lts"],
    },
    {
      id: 66,
      nombre: "Sealer",
      descripcion:
        "Sealer sellador para solucion de filtraciones en diversas superficies. Para mayor eficiencia utilizar con vendas",
      imagen:
        "./assets/productos/selladores_pinturas/sealer.png",
      color: ["Gris", "Negro"],
      medida: ["1 lt", "4 lts", "10 lts", "20 lts"],
    },
    {
      id: 67,
      nombre: "Sellador de Alta Temperatura",
      descripcion: "Sellador especial para calderas, salamandras, etc.",
      imagen:
        "./assets/productos/selladores_pinturas/sellador-alta-temperatura.png",
    },
    {
      id: 68,
      nombre: "Vendas",
      descripcion:
        "Cinta de vendaje para aislamiento y protección estructural. Se recomienda utilizar con Sealer",
      imagen:
        "./assets/productos/selladores_pinturas/vendas.png",
      medida: [
        "4 cm x 25 mts",
        "10 cm x 25 mts",
        "20 cm x 25 mts",
        "100 cm x 25 mts",
      ],
    },
  ],
  claraboyas: [
    {
      id: 69,
      nombre: "Claraboyas",
      descripcion: "Recomendada para losas. Viene con ventilación",
      imagen:
        "./assets/productos/claraboyas/claraboyas.jpg",
      medida: ["40 x 40", "40 x 60", "50 x 50", "60 x 60"],
    },
    {
      id: 70,
      nombre: "Claraboyas para Tejas",
      descripcion: "Viene con ventilación en distintas medidas (consultar)",
      imagen:
        "./assets/productos/claraboyas/claraboya-pteja.jpg",
      medida: ["60 x 55 con Ventilacion"],
    },
    {
      id: 71,
      nombre: "Claraboyas soldadas en Chapa",
      descripcion:
        "Claraboya soldada y sellada  con ventilación (en 1,50 mts de chapa) (consultar medidas)",
      imagen:
        "./assets/productos/claraboyas/claraboya-soldada.jpg",
      tipo: ["Fijo", "De Abrir"],
    },
    {
      id: 72,
      nombre: "Puerta Trampa",
      descripcion: "",
      imagen:
        "./assets/productos/claraboyas/puerta-trampa.jpg",
    },
    {
      id: 73,
      nombre: "Campanas",
      descripcion: "Campanas galvanizadas a medida",
      imagen:
        "./assets/productos/claraboyas/campanas.jpg",
      medida: ["60 x 60", "100 x 60 x 60", "A medida"],
    },
    {
      id: 74,
      nombre: "Cenefas",
      descripcion:
        "Terminaciones modernas de frentes a medida (galvanizadas o color)",
      imagen:
        "./assets/productos/claraboyas/cenefas.webp",
      metros: true,
      medida: ["A medida"],
      color: ["Galvanizado", "Colores (consultar)"],
    },
    {
      id: 75,
      nombre: "Flor de Lis",
      descripcion: "Cenefas de Diseño Artistico",
      imagen:
        "./assets/productos/claraboyas/flor-de-lis.jpg",
      tipo: [
        "Chica Galvanizada (1)",
        "Grande Galvanizada (2)",
        "Grande Galvanizada (3)",
        "Grande Color (4)",
      ],
      metros: true,
    },
    {
      id: 122,
      nombre: "Capot",
      descripcion: "Capot para cubrir distintas bombas (a medida).",
      imagen:
        "./assets/productos/claraboyas/capot.jpg",
      medida: ["Estandar", "Centrífuga", "A medida"],
    },
  ],
  membranas_aislantes: [
    {
      id: 76,
      nombre: "Membrana Asfáltica N°4 (35kg)",
      descripcion:
        "La Membrana N°4 Isomanta (Emapi) con aluminio es ideal para impermeabilización de techos y terrazas. Su composición asfáltica garantiza una excelente protección contra filtraciones.",
      imagen:
        "./assets/productos/membranas_aislantes/membrana-asfaltica.webp",
      tipo: ["Isomanta", "Aislamax"],
    },
    {
      id: 77,
      nombre: "Membrana Asfáltica 4 MM (40kg)",
      descripcion:
        "La Membrana 4 MM con aluminio proporciona un alto nivel de impermeabilización en superficies expuestas a la intemperie, protegiendo contra humedad y filtraciones.",
      imagen:
        "./assets/productos/membranas_aislantes/mem-asfaltica-aislamax.jpg",
    },
    {
      id: 78,
      nombre: "Membranas Adhesivas o En Frío",
      descripcion: "Membrana adhesiva para aplicar en frío (sin soplete)",
      imagen:
        "./assets/productos/membranas_aislantes/membrana-adhesiva.jpg",
      metros: true,
      medida: ["10 cm", "15 cm", "25 cm"],
    },
    {
      id: 79,
      nombre: "Pinturas Asfálticas",
      descripcion:
        "Producto impermeabilizante y actúa como recubrimiento anticorrosivo, se emplea como imprimación de membranas.",
      imagen:
        "./assets/productos/membranas_aislantes/pinturas-emapi.webp",
      medida: ["18 lts", "4 lts (Aislamax)", "1 lt (Aislamax)"],
    },
    {
      id: 123,
      nombre: "Membrana en Pasta",
      descripcion:
        "Membrana líquida o en pasta son pinturas impermeabilizantes (consultar colores).",
      imagen:
        "./assets/productos/membranas_aislantes/membrana-pasta.jpg",
      medida: ["4 kg", "20 kg"],
    },
    {
      id: 80,
      nombre: "Aislantes Aislamax 5MM",
      descripcion:
        "El Aislante 5MM protege filtraciones, reduce la transmisión térmica y acústica, proporcionando mayor confort en techos y paredes. Fácil de instalar y resistente, viene de 1x20 metros.",
      imagen:
        "./assets/productos/membranas_aislantes/aislante-5mm.webp",
      tipo: ["Sola", "Con Aluminio"],
    },
    {
      id: 81,
      nombre: "Aislantes Aislamax 10MM",
      descripcion:
        "El Aislante 10MM protege filtraciones, reduce la transmisión térmica y acústica, proporcionando mayor confort en techos y paredes. Fácil de instalar y resistente, viene de 1x20 metros",
      imagen:
        "./assets/productos/membranas_aislantes/aislante-10mm.jpg",
      tipo: ["Con Aluminio", "Doble Aluminio"],
    },
    {
      id: 82,
      nombre: "Lana de Vidrio",
      descripcion:
        "La Lana de Vidrio es un material aislante térmico y acústico ideal para techos, paredes y entrepisos. Su composición le otorga resistencia al fuego y durabilidad, 1,20 x 18 mts.",
      imagen:
        "./assets/productos/membranas_aislantes/lana-de-vidrio.jpg",
      tipo: ["Sola", "Aluminio"],
    },
    {
      id: 83,
      nombre: "Cinta Aluminizada",
      descripcion: "Se utiliza para unir aislantes térmicos (x 50mts)",
      imagen:
        "./assets/productos/membranas_aislantes/cinta-aluminizada.jpg",
    },
    {
      id: 84,
      nombre: "Cintas de Aluminio Reforzada",
      descripcion: "Cinta tramada para unir rollos de lana de vidrio",
      imagen:
        "./assets/productos/membranas_aislantes/cinta-aluminizada-reforzada.jpg",
    },
    {
      id: 85,
      nombre: "House Cover 1,5 x 20 Metros",
      descripcion:
        "Membrana que funciona como barrera hidrófuga y de vapor ideal sobre madera y paredes",
      imagen:
        "./assets/productos/membranas_aislantes/house-cover.jpg",
    },
  ],
  durlock: [
    {
      id: 86,
      nombre: "Placa Durlock 9,5mm",
      descripcion:
        "Placa de yeso Durlock de 9,5mm 1.20x2.40m, ideal para tabiques y cielorrasos",
      imagen:
        "./assets/productos/durlock/durlock.png",
    },
    {
      id: 87,
      nombre: "Placa Durlock 12,5mm",
      descripcion:
        "Placa de yeso Durlock de 12,5mm 1.20x2.40m, ideal para tabiques y cielorrasos. Disponible en versiones para humedad y temperatura.",
      imagen:
        "./assets/productos/durlock/durlock.png",
      tipo: ["Normal", "Para Humedad", "Para Temperatura"],
    },
    {
      id: 88,
      nombre: "Montantes",
      descripcion:
        "Perfil montante de galvanizado para estructuras de construcción en seco. Disponible en 35mm y 70mm (2,60mts de largo).",
      imagen:
        "./assets/productos/durlock/montante.webp",
      medida: ["35mm", "70mm"],
    },
    {
      id: 89,
      nombre: "Soleras",
      descripcion:
        "Perfil solera de galvanizado, utilizado en la base y parte superior de estructuras de construcción en seco. Medidas: 35mm y 70mm (2,60mts de largo).",
      imagen:
        "./assets/productos/durlock/solera.png",
      medida: ["35mm", "70mm"],
    },
    {
      id: 90,
      nombre: "Cantonera",
      descripcion:
        "Cantonera de 2600mm para refuerzo y protección de esquinas en construcción en seco.",
      imagen:
        "./assets/productos/durlock/cantonera.jpg",
    },
    {
      id: 91,
      nombre: "Buña Perimetral 'Z'",
      descripcion:
        "Perfil buña perimetral en forma de 'Z', ideal para terminaciones en cielorrasos y paredes de 2600mm de largo.",
      imagen:
        "./assets/productos/durlock/bunia-perimetral.jpg",
    },
    {
      id: 92,
      nombre: "Angulo de Ajuste",
      descripcion:
        "Ángulo de ajuste de 2600mm de largo utilizado en estructuras de cielorrasos y tabiques.",
      imagen:
        "./assets/productos/durlock/angulo-ajuste.webp",
    },
    {
      id: 93,
      nombre: "Omega",
      descripcion:
        "Perfil metálico omega de 2600mm de largo para cielorrasos desmontables en sistemas de construcción en seco.",
      imagen:
        "./assets/productos/durlock/omega.png",
    },
    {
      id: 94,
      nombre: "Travesaños DM",
      descripcion: "Perfil para soportar cielorrasos, tabiques y muros",
      imagen:
        "./assets/productos/durlock/travesanio.jpg",
      medida: ["0.61 mts", "1.22 mts"],
    },
    {
      id: 95,
      nombre: "Largueros DM",
      descripcion:
        "Perfil para soportar cielorrasos, tabiques y muros (x 3,66 mts)",
      imagen:
        "./assets/productos/durlock/larguero.webp",
    },
    {
      id: 96,
      nombre: "Perimetral DM",
      descripcion:
        "Elemento del cielorraso suspendido. Viene de 3 metros de largo",
      imagen:
        "./assets/productos/durlock/perimetral.jpg",
    },
    {
      id: 97,
      nombre: "Masillas",
      descripcion:
        "Masilla para tratamiento de juntas en placas de yeso. Disponible en presentaciones de 7kg, 15kg y 32kg.",
      imagen:
        "./assets/productos/durlock/masilla.png",
      tipo: ["7 kg", "15 kg", "32 kg"],
    },
    {
      id: 97,
      nombre: "Masillas Durlock",
      descripcion:
        "Masilla para tratamiento de juntas en placas de yeso. Disponible en presentaciones de 1.8kg, 7kg, 18kg y 32kg.",
      imagen:
        "./assets/productos/durlock/masilla-durlock.jpg",
      tipo: ["1.8 kg", "7 kg", "18 kg", "32 kg"],
    },
    {
      id: 98,
      nombre: "Enduídos",
      descripcion:
        "Enduído plástico para alisar superficies antes de pintar. Disponible en envases de 4L y 20L.",
      imagen:
        "./assets/productos/durlock/enduido.jpg",
      tipo: ["4 lts", "20 lts"],
    },
    {
      id: 99,
      nombre: "Yesos",
      descripcion:
        "Yeso en polvo de rápido fraguado para trabajos de construcción y terminaciones. Presentaciones: 1kg, 3.5kg y 40kg.",
      imagen:
        "./assets/productos/durlock/yeso.jpg",
      tipo: ["1 kg", "3.5 kg", "40 kg"],
    },
    {
      id: 100,
      nombre: "Cintas",
      descripcion:
        "Cinta de fibra o papel para refuerzo de juntas en placas de yeso. Disponible en distintas medidas.",
      imagen:
        "./assets/productos/durlock/cinta.jpg",
      tipo: [
        "Tramada 20 mts",
        "Tramada 90 mts",
        "Papel 23 mts",
        "Papel 75 mts",
        "Papel 150 mts",
      ],
    },
    {
      id: 101,
      nombre: "Tornillos",
      descripcion: "Tornillos autoperforantes. Tornillos Tipos: T1, T2, T3..",
      imagen:
        "./assets/productos/durlock/tornillos.png",
      tipo: ["T1", "T2", "T3"],
    },
    {
      id: 102,
      nombre: "Fijaciones",
      descripcion:
        "Fijaciones para estructuras de construcción en seco, etc. Fijaciones Medidas: 6mm y 8mm.",
      imagen:
        "./assets/productos/durlock/fijacion.jpg",
      medida: ["6mm", "8mm"],
    },
    {
      id: 103,
      nombre: "Puerta Linea",
      descripcion:
        "Puerta de MDF de la línea 2000, con un ancho de 70cm, ideal para interiores.",
      imagen:
        "./assets/productos/durlock/puerta.jpg",
      medida: ["Lado izquierdo", "Lado derecho"],
    },
    {
      id: 104,
      nombre: "Placas Cementicias",
      descripcion:
        "Placa para revestimientos de paredes, cielorrasos, pisos, etc. Viene de 1,20x2,40 mts",
      imagen:
        "./assets/productos/durlock/placa-cementicia.jpg",
      medida: ["6mm", "8mm", "10mm"],
    },
    {
      id: 125,
      nombre: "Masilla GAMAX",
      descripcion: "Masilla para placas cementicias",
      imagen:
        "./assets/productos/durlock/masilla-GAMAX.jpg",
      medida: ["7 kg", "16 kg"],
    },
    {
      id: 105,
      nombre: "Base Coat Balde x 25kg",
      descripcion:
        "Su utiiza para nivelar superficies, paneles de yeso y fibrocemento",
      imagen:
        "./assets/productos/durlock/base-coat-balde.jpg",
    },
  ],
  policarbonato: [
    {
      id: 107,
      nombre: "Alveolar Cristal 2,10 x 5,80 Mts",
      descripcion:
        "Placa de policarbonato alveolar cristal, liviana y resistente, ideal para techos y cerramientos. Disponible en varias medidas.",
      imagen:
        "./assets/productos/policarbonato/cristal.png",
      medida: ["4 mm", "6 mm", "8 mm "],
    },
    {
      id: 108,
      nombre: "Chapa de Policarbonato Sinusoidal",
      descripcion:
        "Chapa de policarbonato sinusoidal, ideal para techos, disponible en varias longitudes (colores cristal y fume).",
      imagen:
        "./assets/productos/policarbonato/acanalada.png",
      tipo: ["Cristal", "Fume"],
      metros: true,
    },
    {
      id: 109,
      nombre: "Chapa de Policarbonato Trapezoidal",
      descripcion:
        "Chapa de policarbonato trapezoidal, ideal para techos, disponible en varias longitudes (colores cristal y fume).",
      imagen:
        "./assets/productos/policarbonato/trapezoidal.png",
      tipo: ["Cristal", "Fume"],
      metros: true,
    },
  ],
  accesorios: [
    {
      id: 110,
      nombre: "Barras de Estaño 50%",
      descripcion: "Barra de estaño para soldaduras limpias y duraderas.",
      imagen:
        "./assets/productos/accesorios/barra-estanio.webp",
    },
    {
      id: 111,
      nombre: "Tee y Ramales",
      descripcion:
        'Pieza de conexión en forma de /"T/" e /"Y/" utilizada para derivar el flujo en instalaciones hidráulicas o de ventilación, permitiendo múltiples salidas.',
      imagen:
        "./assets/productos/accesorios/tee-y-ramales.jpg",
      medida: [
        "3 Pulgadas",
        "4 Pulgadas",
        "5 Pulgadas",
        "6 Pulgadas",
        "7 Pulgadas",
        "8 Pulgadas",
        "10 Pulgadas",
        "12 Pulgadas",
      ],
    },
    {
      id: 112,
      nombre: "Reducciones Galvanizadas",
      descripcion:
        "Reducción de galvanizado diseñada para conectar tubos de diferentes diámetros, asegurando una transición eficiente y sin pérdidas de flujo.",
      imagen:
        "./assets/productos/accesorios/reduccion-de-aluminio.webp",
      medida: [
        "4 a 3",
        "5 a 4",
        "6 a 4",
        "6 a 5",
        "7 a 6",
        "8 a 6",
        "10 a 8",
        "12 a 10",
      ],
    },
    {
      id: 113,
      nombre: "Sellaband",
      descripcion:
        "Sellador flexible para techos con formas trapezoidal y sinusoidal (viene por 1 metro).",
      imagen:
        "./assets/productos/accesorios/sellaband.jpg",
      tipo: ["Trapezoidal", "Sinusoidal"],
    },
    {
      id: 114,
      nombre: "Compriband",
      descripcion:
        "Burlete sellador flexible para techos con forma trapezoidal y sinusoidal (viene por 1 metro).",
      imagen:
        "./assets/productos/accesorios/compriband.jpg",
      tipo: ["Trapezoidal", "Sinusoidal"],
    },
    {
      id: 115,
      nombre: "Malla Plástica",
      descripcion:
        "Malla sostén de aislantes térmicos. Viene de 2 metros de ancho, hasta 100 de largo (200 metros²).",
      imagen:
        "./assets/productos/accesorios/malla-plastica.jpg",
      metros: true,
    },
    {
      id: 116,
      nombre: "Boquilla 3/8",
      descripcion: "Adaptador para tornillos autoperforantes con cabeza 3/8",
      imagen:
        "./assets/productos/accesorios/boquilla-38.jpg",
    },
  ],
  accesorios_dos: [
    {
      id: 117,
      nombre: "Punta Philips",
      descripcion: "Adaptador para todo tipo de tornillos con cabeza Philips",
      imagen:
        "./assets/productos/accesorios_dos/punta-phillips.jpg",
    },
    {
      id: 118,
      nombre: "Martillo de Cobre",
      descripcion: "Elemento para soldar zinguería con estaño",
      imagen:
        "./assets/productos/accesorios_dos/martillo-cobre.jpg",
    },
    {
      id: 119,
      nombre: "Soplete p/Zinguero",
      descripcion: "Soplete para soldar Zinguería",
      imagen:
        "./assets/productos/accesorios_dos/soplete-zinguero.jpeg",
    },
    {
      id: 120,
      nombre: "Gárgola de Bronce",
      descripcion: "Adorno de desague para zinguería",
      imagen:
        "./assets/productos/accesorios_dos/gargola-bronce.jpg",
    },
    {
      id: 121,
      nombre: "Pasatecho",
      descripcion:
        "Pieza elástica para salida de ventilaciones a traves de distintas superficies. Gris (Baja temperatura) y Rojo (Alta Temperatura).",
      imagen:
        "./assets/productos/accesorios_dos/dektite.jpg",
      tipo: [
        "Gris N°3 (hasta 127mm)",
        "Gris N°4 (hasta 160mm)",
        "Rojo N°3 (hasta 127mm)",
        "Rojo N°4 (hasta 160mm)",
      ],
    },
  ],
};
