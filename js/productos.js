import { productosDestacados, canaletas } from "./items.js";

document.addEventListener("DOMContentLoaded", () => {

  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  const DOMcarrito = document.querySelector("#carrito");
  const DOMtotal = document.querySelector("#total");
  const DOMbotonVaciar = document.querySelector("#boton-vaciar");
  const miLocalStorage = window.localStorage;

  // FUNCTIONS LLAMADAS AL INGRESAR A LA PAGINA

  renderizarProductos(canaletas, "items-canaletas");
  renderizarProductos(productosDestacados, "items");
  renderizarCarrito();


  let productoEnEdicion = null;
  let esEdicion = false;

  // ---------------------------------------------- FUNCTIONS PRODUCTOS

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
        abrirModalProducto(info)
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

  function abrirModalAgregar(producto) {
    document.getElementById("modalAgregarNombre").textContent = producto.nombre;
    document.getElementById("modalAgregarDescripcion").textContent =
      producto.descripcion;
    document.getElementById("modalAgregarImagen").src = producto.imagen;
    document.getElementById("inputCantidadAgregar").value = 1;

    document.getElementById("btnMenosAgregar").onclick = () =>
      actualizarCantidadAgregar(-1);
    document.getElementById("btnMasAgregar").onclick = () =>
      actualizarCantidadAgregar(1);
    document.getElementById("btnAgregarCarrito").onclick = () =>
      agregarProductoCarrito(producto);

    const modal = new bootstrap.Modal(document.getElementById("modalAgregar"));
    modal.show();
  }

  function actualizarCantidadAgregar(cambio) {
    let inputCantidad = document.getElementById("inputCantidadAgregar");
    let nuevaCantidad = parseInt(inputCantidad.value) + cambio;
    if (nuevaCantidad < 1) return;
    inputCantidad.value = nuevaCantidad;
  }

  function agregarProductoCarrito() {
    let cantidad = parseInt(document.getElementById("inputCantidad").value);
    for (let i = 0; i < cantidad; i++) {
        carrito.push(String(productoEnEdicion.id));
    }
    renderizarCarrito();
    guardarCarritoEnLocalStorage();
    actualizarContadorCarrito();
    bootstrap.Modal.getInstance(document.getElementById("modalProducto")).hide();
}






// -------------------------------------------------------- FUNCTIONS CARRITO

actualizarContadorCarrito();

function renderizarCarrito() {
  // Unificar los arrays
  const productos = [...productosDestacados, ...canaletas];

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
    texto.textContent = `${numeroUnidadesItem} - ${
      miItem.nombreCarrito ? miItem.nombreCarrito : miItem.nombre
    } `;

    // Contenedor para los botones
    const contenedorBotones = document.createElement("div");
    contenedorBotones.classList.add("d-flex", "gap-2");

    // Botón de editar
    const btnEditar = document.createElement("button");
    btnEditar.classList.add("btn", "btn-primary", "btn-sm");
    btnEditar.textContent = "Editar";
    btnEditar.dataset.item = item;
    btnEditar.addEventListener("click", () =>
      abrirModalProducto(miItem, numeroUnidadesItem, true)
    );

    // Botón para eliminar completamente el producto
    const btnEliminar = document.createElement("button");
    btnEliminar.classList.add("btn", "btn-sm");
    btnEliminar.textContent = "❌";
    btnEliminar.dataset.item = item;
    btnEliminar.addEventListener("click", (evento) =>
      borrarItemCarrito(evento.target.dataset.item, productos)
    );

    // Agregar botones al contenedor
    contenedorBotones.appendChild(btnEditar);
    contenedorBotones.appendChild(btnEliminar);

    // Mezclar nodos
    miNodo.appendChild(texto);
    miNodo.appendChild(contenedorBotones);

    DOMcarrito.appendChild(miNodo);
  });

  DOMtotal.textContent = `${carrito.length} Productos`;
}



function abrirModalProducto(producto, cantidad = 1, esEditar = false) {
  esEdicion = esEditar;
  productoEnEdicion = producto;

  document.getElementById("modalProductoTitulo").textContent = esEditar ? "Editar Producto" : "Agregar al Carrito";
  document.getElementById("modalProductoDescripcion").textContent = producto.descripcion;
  document.getElementById("modalProductoImagen").src = producto.imagen;
  document.getElementById("inputCantidad").value = cantidad;

  document.getElementById("btnMenos").onclick = () => actualizarCantidad(-1);
  document.getElementById("btnMas").onclick = () => actualizarCantidad(1);
  document.getElementById("btnModalAccion").textContent = esEditar ? "Guardar" : "Agregar";
  
  document.getElementById("btnModalAccion").onclick = () => {
      esEditar ? guardarCambiosCantidad() : agregarProductoCarrito();
  };

  const modal = new bootstrap.Modal(document.getElementById("modalProducto"));
  modal.show();
}


function actualizarContadorCarrito() {
  const cartCount = document.getElementById("cart-count");
  cartCount.textContent = carrito.length;
  cartCount.style.display = carrito.length > 0 ? "flex" : "none";
}

  // Función para actualizar la cantidad dentro del modal
  function actualizarCantidad(cambio) {
    let inputCantidad = document.getElementById("inputCantidad");
    let nuevaCantidad = parseInt(inputCantidad.value) + cambio;
    if (nuevaCantidad < 1) return;
    inputCantidad.value = nuevaCantidad;
}


  // Función para guardar los cambios en el carrito
  function guardarCambiosCantidad() {
    if (!productoEnEdicion) return;
    let nuevaCantidad = parseInt(document.getElementById("inputCantidad").value);

    if (nuevaCantidad < 1) {
        borrarItemCarrito(productoEnEdicion.id);
    } else {
        carrito = carrito.filter(id => id !== String(productoEnEdicion.id));
        for (let i = 0; i < nuevaCantidad; i++) {
            carrito.push(String(productoEnEdicion.id));
        }
    }

    renderizarCarrito();
    guardarCarritoEnLocalStorage();
    actualizarContadorCarrito();
    bootstrap.Modal.getInstance(document.getElementById("modalProducto")).hide();
}



function borrarItemCarrito(idProducto, productos) {
  // Filtra el carrito para eliminar todas las instancias del producto seleccionado
  carrito = carrito.filter((id) => id !== String(idProducto));

  // Volver a renderizar el carrito
  renderizarCarrito(productos);
  guardarCarritoEnLocalStorage();
  actualizarContadorCarrito();
}

function guardarCarritoEnLocalStorage() {
  miLocalStorage.setItem("carrito", JSON.stringify(carrito));
}


DOMbotonVaciar.addEventListener("click", () => {
  carrito = [];
  renderizarCarrito();
  actualizarContadorCarrito();
  localStorage.clear();
});



// ---------------------------------------------------  OTHER FUNCTIONS 

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
});
