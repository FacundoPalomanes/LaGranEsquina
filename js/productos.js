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

  // ---------------------------------------------- FUNCTIONS PRODUCTOS

  function renderizarProductos(productos, seccion) {
    const contenedor = document.getElementById(seccion);
    contenedor.innerHTML = "";

    productos.forEach((info) => {
        const miNodo = document.createElement("div");
        miNodo.classList.add("card");

        const miNodoCardBody = document.createElement("div");
        miNodoCardBody.classList.add("card-body");

        const miNodoImagen = document.createElement("img");
        miNodoImagen.setAttribute("src", info.imagen);
        miNodoImagen.setAttribute("alt", info.nombre);

        const miNodoTitle = document.createElement("h5");
        miNodoTitle.classList.add("card-title");
        miNodoTitle.textContent = info.nombre;

        const miNodoDescripcion = document.createElement("p");
        miNodoDescripcion.classList.add("card-text");
        miNodoDescripcion.textContent = info.descripcion;

        const miNodoBoton = document.createElement("button");
        miNodoBoton.classList.add("btn", "btn-primary");
        miNodoBoton.textContent = "Agregar";
        miNodoBoton.setAttribute("marcador", info.id);
        miNodoBoton.addEventListener("click", () => abrirModalProducto(info));

        miNodoCardBody.appendChild(miNodoImagen);
        miNodoCardBody.appendChild(miNodoTitle);
        miNodoCardBody.appendChild(miNodoDescripcion);
        miNodoCardBody.appendChild(miNodoBoton);
        miNodo.appendChild(miNodoCardBody);

        contenedor.appendChild(miNodo);
    });
}

function agregarProductoCarrito() {
    let cantidad = parseInt(document.getElementById("inputCantidad").value);
    const selectColor = document.getElementById("selectColor");
    const colorSeleccionado = selectColor && selectColor.value ? selectColor.value : null;

    for (let i = 0; i < cantidad; i++) {
        let producto = { id: String(productoEnEdicion.id) };

        if (colorSeleccionado) {
            producto.color = colorSeleccionado;
        }

        carrito.push(producto);
    }

    renderizarCarrito();
    guardarCarritoEnLocalStorage();
    actualizarContadorCarrito();
    bootstrap.Modal.getInstance(document.getElementById("modalProducto")).hide();
}

console.log(carrito);



// -------------------------------------------------------- FUNCTIONS CARRITO

actualizarContadorCarrito();

function renderizarCarrito() {
    DOMcarrito.textContent = "";
    const productos = [...productosDestacados, ...canaletas];

    const carritoAgrupado = carrito.reduce((acc, item) => {
        let key = `${item.id}-${item.color || "default"}`;
        if (!acc[key]) {
            acc[key] = { ...item, cantidad: 1 };
        } else {
            acc[key].cantidad++;
        }
        return acc;
    }, {});

    Object.values(carritoAgrupado).forEach((item) => {
        const miItem = productos.find((p) => p.id === parseInt(item.id));
        if (!miItem) return;

        const miNodo = document.createElement("li");
        miNodo.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");

        const texto = document.createElement("span");
        texto.textContent = `${item.cantidad}x ${miItem.nombre} ${item.color ? " - Color: " + item.color : ""}`;

        const contenedorBotones = document.createElement("div");

        const btnEditar = document.createElement("button");
        btnEditar.classList.add("btn", "btn-primary", "btn-sm");
        btnEditar.textContent = "Editar";
        btnEditar.onclick = () => abrirModalProducto(miItem, item.cantidad, true, item.color);

        const btnEliminar = document.createElement("button");
        btnEliminar.classList.add("btn", "btn-sm");
        btnEliminar.textContent = "❌";
        btnEliminar.onclick = () => borrarItemCarrito(item.id, item.color);

        contenedorBotones.appendChild(btnEditar);
        contenedorBotones.appendChild(btnEliminar);

        miNodo.appendChild(texto);
        miNodo.appendChild(contenedorBotones);

        DOMcarrito.appendChild(miNodo);
    });

    DOMtotal.textContent = `${carrito.length} Productos`;
}





function abrirModalProducto(producto, cantidad = 1, esEditar = false, colorActual = "") {
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

  const contenedorColores = document.getElementById("contenedorColores");
  contenedorColores.innerHTML = ""; 

  if (producto.color && producto.color.length > 0) {
      const label = document.createElement("label");
      label.textContent = "Selecciona un color:";
      label.setAttribute("for", "selectColor");

      const select = document.createElement("select");
      select.id = "selectColor";
      select.classList.add("form-control");

      producto.color.forEach((color) => {
          const option = document.createElement("option");
          option.value = color;
          option.textContent = color;

          // Preseleccionar el color actual
          if (color === colorActual) {
              option.selected = true;
          }

          select.appendChild(option);
      });

      contenedorColores.appendChild(label);
      contenedorColores.appendChild(select);
  }

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
    const selectColor = document.getElementById("selectColor");
    const colorSeleccionado = selectColor && selectColor.value ? selectColor.value : null;

    // Filtrar el carrito eliminando solo la entrada específica
    carrito = carrito.filter(item => !(item.id === String(productoEnEdicion.id) && (item.color || null) === colorSeleccionado));

    // Agregar la nueva cantidad del producto editado
    for (let i = 0; i < nuevaCantidad; i++) {
        carrito.push({ id: String(productoEnEdicion.id), color: colorSeleccionado || null });
    }

    renderizarCarrito();
    guardarCarritoEnLocalStorage();
    actualizarContadorCarrito();
    bootstrap.Modal.getInstance(document.getElementById("modalProducto")).hide();
}







function borrarItemCarrito(idProducto, colorProducto) {
  carrito = carrito.filter(item => !(item.id === idProducto && item.color === colorProducto));

  renderizarCarrito();
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
