const products = {
  canaletas: {
    americana: [
      "canaleta",
      "boqueta",
      "terminal",
      "soporte",
      "esquinero",
      "rinconero",
    ],
    medioCanioDeQuince: [],
    pecho_paloma: [],
    siete_quince_diez: [],
  },
  babetas: {
    p_amurar: ["calibre_30", "calibre_27"],
    p_moladora: ["calibre_30", "calibre_27"],
    sobreteja: ["calibre_30", "calibre_27"],
    con_forma: ["t101", "sinusoidal"],
  },
  caballetes: {
    desarrollo_33cm: [],
    desarrollo_40cm: [],
    con_forma: [],
    color: [],
  },
  conversas: {
    desarrollo_33cm: [],
    desarrollo_40cm: [],
    con_division: [],
  },
  chapas: {
    lisas: {
      calibre_30: [],
      calibre_28: [],
      calibre_27: [],
      calibre_25: [],
      calibre_25_color: [],
      calibre_22: [],
    },
    acanaladas: {
      calibre_27_cincalum: [],
      calibre_25_cincalum: [],
      calibre_25_color: [],
      plastica: ["blanca", "transparente"],
      trapezoidal: [],
    },
  },
  canios: {
    redondos: {
      tres: [],
      cuatro: [],
      cinco: [],
      seis: [],
      siete: [],
      ocho: [],
      nueve: [],
      diez: [],
      once: [],
      doce: [],
      curvas: [],
      grampas: [],
    },
    rectangular: {
      canio_5x10: [],
      grampas_5x10: [],
      codo: ["cuarenta_y_cinco_grados", "noventa_grados"],
    },
  },
};

document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.querySelector("#toggle-menu");
  const mobileMenu = document.querySelector(".navbar__mobile-menu");
  const movePage = document.querySelector("#move-page");

  

  const hideMenuResize = () => {
    mobileMenu.style.display = "none";
    movePage.classList.remove("shifted");
  };

  // Toggle dark mode
  document.getElementById("dark-mode-toggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });

  document
    .getElementById("dark-mode-toggle-mobile")
    .addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
    });

  window.addEventListener("resize", hideMenuResize);
  window.addEventListener("load", hideMenuResize);

  toggleButton.addEventListener("click", () => {
    mobileMenu.style.display =
      mobileMenu.style.display === "none" || mobileMenu.style.display === ""
        ? "flex"
        : "none";
    mobileMenu.classList.toggle("open");
    movePage.classList.toggle("shifted");
  });

  console.log(products);

  const baseDeDatos = [
    {
      id: 1,
      nombre: "Babetas",
      descripcion: "Babetas super resistentes y recontra re buenas",
      imagen: "/assets/productos/babetas.jpg",
    },
    {
      id: 2,
      nombre: "Caballetes",
      descripcion: "Caballetes tremendos super resistentes y recontra re buenas",
      imagen: "/assets/productos/caballetes.jpg",
    },
    {
      id: 3,
      nombre: "Canaletas",
      descripcion: "Caballetes tremendos super resistentes y recontra re buenas",
      imagen: "/assets/productos/canaletas.jpg",
    },
    {
      id: 4,
      nombre: "Caños",
      descripcion: "Caballetes tremendos super resistentes y recontra re buenas",
      imagen: "/assets/productos/canios.jpg",
    },
    {
      id: 5,
      nombre: "Chapas",
      descripcion: "Caballetes tremendos super resistentes y recontra re buenas",
      imagen: "/assets/productos/chapas.jpg",
    },
    {
      id: 6,
      nombre: "Canaletas",
      descripcion: "Caballetes tremendos super resistentes y recontra re buenas",
      imagen: "/assets/productos/chapas.jpg",
    },
    {
      id: 7,
      nombre: "Conversas",
      descripcion: "Caballetes tremendos super resistentes y recontra re buenas",
      imagen: "/assets/productos/conversas.jpg",
    },
    {
      id: 8,
      nombre: "Caballetes",
      descripcion: "Caballetes tremendos super resistentes y recontra re buenas",
      imagen: "/assets/productos/caballetes.jpg",
    }
  ];

  let carrito = [];
  const DOMitems = document.querySelector("#items");
  const DOMcarrito = document.querySelector("#carrito");
  const DOMtotal = document.querySelector("#total");
  const DOMbotonVaciar = document.querySelector("#boton-vaciar");
  const miLocalStorage = window.localStorage;

  function renderizarProductos(productos, categoria) {
    // Agregar el título de la categoría
    const tituloCategoria = document.getElementById("categoria-titulo");
    tituloCategoria.textContent = categoria || "Productos";

    // Limpiar el contenedor antes de renderizar
    const contenedor = document.getElementById("items");
    contenedor.innerHTML = "";

    productos.forEach((info) => {
        // Crear la tarjeta
        const miNodo = document.createElement("div");
        miNodo.classList.add("card");

        // Crear el cuerpo de la tarjeta
        const miNodoCardBody = document.createElement("div");
        miNodoCardBody.classList.add("card-body");

        // Imagen
        const miNodoImagen = document.createElement("img");
        miNodoImagen.setAttribute("src", info.imagen);
        miNodoImagen.setAttribute("alt", info.nombre);

        // Título
        const miNodoTitle = document.createElement("h5");
        miNodoTitle.classList.add("card-title");
        miNodoTitle.textContent = info.nombre;

        // Descripción
        const miNodoDescripcion = document.createElement("p");
        miNodoDescripcion.classList.add("card-text");
        miNodoDescripcion.textContent = info.descripcion;

        // Botón
        const miNodoBoton = document.createElement("button");
        miNodoBoton.classList.add("btn", "btn-primary");
        miNodoBoton.textContent = "Agregar";
        miNodoBoton.setAttribute("marcador", info.id);
        miNodoBoton.addEventListener("click", (evento) => anyadirProductoAlCarrito(evento, productos));

        // Insertar elementos en la tarjeta
        miNodoCardBody.appendChild(miNodoImagen);
        miNodoCardBody.appendChild(miNodoTitle);
        miNodoCardBody.appendChild(miNodoDescripcion);
        miNodoCardBody.appendChild(miNodoBoton);
        miNodo.appendChild(miNodoCardBody);

        // Insertar en el contenedor
        contenedor.appendChild(miNodo);
    });
}

function anyadirProductoAlCarrito(evento, productos) {
    // Añadir producto al carrito
    carrito.push(evento.target.getAttribute("marcador"));
    // Actualizar el carrito con la base de datos actual
    renderizarCarrito(productos);
    // Guardar en LocalStorage
    guardarCarritoEnLocalStorage();
    actualizarContadorCarrito();
}

function actualizarContadorCarrito() {
    const cartCount = document.getElementById("cart-count");
    cartCount.textContent = carrito.length;
    cartCount.style.display = carrito.length > 0 ? "flex" : "none";
}

carrito = JSON.parse(localStorage.getItem("carrito")) || [];
actualizarContadorCarrito();

function renderizarCarrito(productos) {
    // Vaciar HTML del carrito
    DOMcarrito.textContent = "";
    const carritoSinDuplicados = [...new Set(carrito)];

    carritoSinDuplicados.forEach((item) => {
        // Buscar el producto en la base de datos pasada como parámetro
        const miItem = productos.find((p) => p.id === parseInt(item));

        if (!miItem) return; // Evita errores si no se encuentra el producto

        const numeroUnidadesItem = carrito.filter((id) => id === item).length;

        // Crear nodo para mostrar el producto en el carrito
        const miNodo = document.createElement("li");
        miNodo.classList.add("list-group-item", "text-right", "mx-2");
        miNodo.textContent = `${numeroUnidadesItem} x ${miItem.nombre} - ${miItem.descripcion}`;

        // Botón de eliminar
        const miBoton = document.createElement("button");
        miBoton.classList.add("btn", "btn-danger");
        miBoton.textContent = "X";
        miBoton.style.marginLeft = "1rem";
        miBoton.dataset.item = item;
        miBoton.addEventListener("click", (evento) => borrarItemCarrito(evento, productos));

        // Mezclar nodos
        miNodo.appendChild(miBoton);
        DOMcarrito.appendChild(miNodo);
    });

    // Mostrar cantidad de productos en el carrito
    DOMtotal.textContent = `${carrito.length} Productos`;
}

function borrarItemCarrito(evento, productos) {
    const id = evento.target.dataset.item;
    carrito = carrito.filter((carritoId) => carritoId !== id);
    renderizarCarrito(productos);
    guardarCarritoEnLocalStorage();
    actualizarContadorCarrito();
}


  /**
   * Varia el carrito y vuelve a dibujarlo
   */
  function vaciarCarrito() {
    // Limpiamos los productos guardados
    carrito = [];
    // Renderizamos los cambios
    renderizarCarrito();
    
    actualizarContadorCarrito();
    // Borra LocalStorage
    localStorage.clear();
  }

  function guardarCarritoEnLocalStorage() {
    miLocalStorage.setItem("carrito", JSON.stringify(carrito));
  }

  function cargarCarritoDeLocalStorage() {
    // ¿Existe un carrito previo guardado en LocalStorage?
    if (miLocalStorage.getItem("carrito") !== null) {
      // Carga la información
      carrito = JSON.parse(miLocalStorage.getItem("carrito"));
    }
  }

  // Eventos
  DOMbotonVaciar.addEventListener("click", vaciarCarrito);

  // Inicio
  cargarCarritoDeLocalStorage();
  renderizarProductos(baseDeDatos, "Babetas");
  renderizarCarrito();
});
