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

  const baseDeDatos = [
    {
      id: 1,
      nombre: "Kit Americana",
      descripcion: "Babetas resistentes para las terminaciones de techo.",
      imagen: "/assets/productos/kit-americana.webp",
    },
    {
      id: 2,
      nombre: "Membrana asfaltica",
      descripcion: "Material térmico y acústico para techos y paredes.",
      imagen: "/assets/productos/membrana-plastica.png",
    },
    {
      id: 3,
      nombre: "Policarbonato",
      descripcion: "Láminas translúcidas, resistentes a impactos y rayos UV.",
      imagen: "/assets/productos/policarbonato.webp",
    },
    {
      id: 4,
      nombre: "Chapa T101",
      descripcion: "Chapa trapezoidal galvanizada para techos y cerramientos.",
      imagen: "/assets/productos/chapa-t101.jpeg",
    },
    {
      id: 5,
      nombre: "Chapa Acanalada",
      descripcion: "Chapa de acero liviana y resistente para techos.",
      imagen: "/assets/productos/chapa-acanalada.webp",
    },
    {
      id: 6,
      nombre: "Durlock",
      descripcion: "Placas de yeso para divisiones y cielorrasos.",
      imagen: "/assets/productos/durlock.png",
    },
    // {
    //   id: 7,
    //   nombre: "Conversas",
    //   descripcion:
    //     "Caballetes tremendos super resistentes y recontra re buenas",
    //   imagen: "/assets/productos/conversas.jpg",
    // },
    // {
    //   id: 8,
    //   nombre: "Caballetes",
    //   descripcion:
    //     "Caballetes tremendos super resistentes y recontra re buenas",
    //   imagen: "/assets/productos/caballetes.jpg",
    // },
  ];

  const canaletas = [
    {
      id: 9,
      nombre: "Americana",
      descripcion: "Canaleta Americana por metro",
      imagen: "/assets/productos/canaletas.jpg",
    },
    {
      id: 10,
      nombre: "Boqueta Americana",
      descripcion: "Boqueta Americana",
      imagen: "/assets/productos/canaletas.jpg",
    },
    {
      id: 11,
      nombre: "Terminal Americana",
      descripcion: "Terminal Americana",
      imagen: "/assets/productos/canaletas.jpg",
    },
    {
      id: 12,
      nombre: "Soporte Americano",
      descripcion: "Soporte Americano",
      imagen: "/assets/productos/canaletas.jpg",
    },
    {
      id: 13,
      nombre: "Esquinero Americano",
      descripcion: "Esquinero Americano",
      imagen: "/assets/productos/canaletas.jpg",
    },
  ];

  let carrito = [];
  const DOMcarrito = document.querySelector("#carrito");
  const DOMtotal = document.querySelector("#total");
  const DOMbotonVaciar = document.querySelector("#boton-vaciar");
  const miLocalStorage = window.localStorage;

  cargarCarritoDeLocalStorage();
  renderizarProductos(baseDeDatos, "items");
  renderizarProductos(canaletas, "items-canaletas");
  renderizarCarrito();

  function renderizarProductos(productos, seccion) {
    const contenedor = document.getElementById(seccion);
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
      miNodoBoton.addEventListener("click", (evento) =>
        anyadirProductoAlCarrito(evento, productos)
      );

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

  let productoEnEdicion = null; // Variable para almacenar el producto actual en el modal

  function renderizarCarrito() {
    // Unificar los arrays
    const productos = [...baseDeDatos, ...canaletas]; // unificacion de bases de objetos

    DOMcarrito.textContent = "";
    const carritoSinDuplicados = [...new Set(carrito)];

    carritoSinDuplicados.forEach((item) => {
      const miItem = productos.find((p) => p.id === parseInt(item));

      if (!miItem) return;

      const numeroUnidadesItem = carrito.filter((id) => id === item).length;

      // Crear nodo para mostrar el producto en el carrito
      const miNodo = document.createElement("li");
      miNodo.classList.add(
        "list-group-item",
        "text-right",
        "mx-2",
        "d-flex",
        "align-items-center",
        "justify-content-between"
      );

      // Nombre del producto
      const texto = document.createElement("span");
      texto.textContent = `${numeroUnidadesItem} - ${miItem.nombre} - ${miItem.descripcion}`;

      // Botón de editar
      const btnEditar = document.createElement("button");
      btnEditar.classList.add("btn", "btn-primary", "btn-sm");
      btnEditar.textContent = "Editar";
      btnEditar.dataset.item = item;
      btnEditar.addEventListener("click", () =>
        abrirModalEdicion(miItem, numeroUnidadesItem, productos)
      );

      // Botón para eliminar completamente el producto
      const btnEliminar = document.createElement("button");
      btnEliminar.classList.add("btn", "btn-danger", "btn-sm", "ms-2");
      btnEliminar.textContent = "X";
      btnEliminar.dataset.item = item;
      btnEliminar.addEventListener("click", (evento) =>
        borrarItemCarrito(evento.target.dataset.item, productos)
      );

      // Mezclar nodos
      miNodo.appendChild(texto);
      miNodo.appendChild(btnEditar);
      miNodo.appendChild(btnEliminar);

      DOMcarrito.appendChild(miNodo);
    });

    DOMtotal.textContent = `${carrito.length} Productos`;
  }

  function abrirModalEdicion(producto, cantidadActual, productos) {
    productoEnEdicion = producto;

    document.getElementById("modalProductoNombre").textContent =
      producto.nombre;
    document.getElementById("modalProductoDescripcion").textContent =
      producto.descripcion;
    document.getElementById("modalProductoImagen").src = producto.imagen;
    document.getElementById("inputCantidad").value = cantidadActual;

    document.getElementById("btnMenos").onclick = () =>
      actualizarCantidadModal(-1);
    document.getElementById("btnMas").onclick = () =>
      actualizarCantidadModal(1);

    document
      .getElementById("inputCantidad")
      .addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          event.preventDefault();
          guardarCambiosCantidad(productos);
        }
      });

    // Asegurar que el botón "Guardar" usa el array correcto
    document.getElementById("btnGuardar").onclick = () =>
      guardarCambiosCantidad(productos);

    const modal = new bootstrap.Modal(document.getElementById("modalEdicion"));
    modal.show();
  }

  // Función para actualizar la cantidad dentro del modal
  function actualizarCantidadModal(cambio) {
    let inputCantidad = document.getElementById("inputCantidad");
    let nuevaCantidad = parseInt(inputCantidad.value) + cambio;
    if (nuevaCantidad < 1) return; // Evita valores negativos o 0
    inputCantidad.value = nuevaCantidad;
  }

  // Función para guardar los cambios en el carrito
  function guardarCambiosCantidad(productos) {
    if (!productoEnEdicion) return;

    let nuevaCantidad = parseInt(
      document.getElementById("inputCantidad").value
    );

    if (nuevaCantidad < 1) {
      // Pasamos solo el ID del producto
      borrarItemCarrito(productoEnEdicion.id, productos);
      bootstrap.Modal.getInstance(
        document.getElementById("modalEdicion")
      ).hide();
      return;
    }

    // Actualizar el carrito eliminando todas las instancias previas del producto
    carrito = carrito.filter((id) => id !== String(productoEnEdicion.id));

    // Agregar la nueva cantidad de productos
    for (let i = 0; i < nuevaCantidad; i++) {
      carrito.push(String(productoEnEdicion.id));
    }

    // Volver a renderizar
    renderizarCarrito(productos);
    guardarCarritoEnLocalStorage();
    actualizarContadorCarrito();

    // Cerrar el modal después de guardar
    bootstrap.Modal.getInstance(document.getElementById("modalEdicion")).hide();
  }

  function borrarItemCarrito(idProducto, productos) {
    // Filtra el carrito para eliminar todas las instancias del producto seleccionado
    carrito = carrito.filter((id) => id !== String(idProducto));

    // Volver a renderizar el carrito
    renderizarCarrito(productos);
    guardarCarritoEnLocalStorage();
    actualizarContadorCarrito();
  }

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
    if (miLocalStorage.getItem("carrito") !== null) {
      carrito = JSON.parse(miLocalStorage.getItem("carrito"));
    }
  }

  DOMbotonVaciar.addEventListener("click", vaciarCarrito);
});
