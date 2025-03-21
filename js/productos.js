import { productos } from "./items.js";
import {
  darkMode,
  header_movement,
  hideMenuResize,
  scrollLeft,
  scrollRight,
  toggleMenu,
} from "./global-functions.js";

document.addEventListener("DOMContentLoaded", () => {
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  const DOMcarrito = document.querySelector("#carrito");
  const DOMtotal = document.querySelector("#total");
  const DOMbotonVaciar = document.querySelector("#boton-vaciar");
  const miLocalStorage = window.localStorage;

  // FUNCTIONS LLAMADAS AL INGRESAR A LA PAGINA

  productos.forEach(({ items, id }) => renderizarProductos(items, id));

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
      if (info.nombre.length > 25) {
        miNodoTitle.classList.add("titulo-largo");
      }
      miNodoTitle.textContent = info.nombre;

      const miNodoDescripcion = document.createElement("p");
      miNodoDescripcion.classList.add("card-text");
      miNodoDescripcion.textContent = info.descripcionCorta;

      const miNodoBoton = document.createElement("button");
      miNodoBoton.classList.add("btn", "btn-primary");
      miNodoBoton.textContent = "Agregar";
      miNodoBoton.setAttribute("marcador", info.id);

      miNodoCardBody.appendChild(miNodoImagen);
      miNodoCardBody.appendChild(miNodoTitle);
      miNodoCardBody.appendChild(miNodoDescripcion);
      miNodoCardBody.appendChild(miNodoBoton);
      miNodo.appendChild(miNodoCardBody);
      miNodo.addEventListener("click", () => abrirModalProducto(info));

      contenedor.appendChild(miNodo);
    });
  }

  function agregarProductoCarrito() {
    let cantidad = parseInt(document.getElementById("inputCantidad").value);
    const selectColor = document.getElementById("selectColor");
    const colorSeleccionado =
      selectColor && selectColor.value ? selectColor.value : null;
    const selectMedida = document.getElementById("selectMedida");
    const medidaSeleccionada =
      selectMedida && selectMedida.value ? selectMedida.value : null;
    const selectTipo = document.getElementById("selectTipo");
    const tipoSeleccionada =
      selectTipo && selectTipo.value ? selectTipo.value : null;

    for (let i = 0; i < cantidad; i++) {
      let producto = { id: String(productoEnEdicion.id) };

      if (colorSeleccionado) {
        producto.color = colorSeleccionado;
      }
      if (medidaSeleccionada) {
        producto.medida = medidaSeleccionada;
      }
      if (tipoSeleccionada) {
        producto.tipo = tipoSeleccionada;
      }

      carrito.push(producto);
    }

    renderizarCarrito();
    guardarCarritoEnLocalStorage();
    actualizarContadorCarrito();

    // Cierra el modal
    bootstrap.Modal.getInstance(
      document.getElementById("modalProducto")
    ).hide();

    // Muestra el toast con la info correcta
    showToast(
      {
        nombre: productoEnEdicion.nombre,
        medida: medidaSeleccionada,
        color: colorSeleccionado,
        tipo: tipoSeleccionada,
      },
      cantidad
    );
  }

  // -------------------------------------------------------- FUNCTIONS CARRITO

  actualizarContadorCarrito();

  function renderizarCarrito() {
    DOMcarrito.textContent = "";

    const carritoAgrupado = carrito.reduce((acc, item) => {
      let key = `${item.id}-${item.color || "default"}-${
        item.medida || "default"
      }-${item.tipo || "default"}`;
      if (!acc[key]) {
        acc[key] = { ...item, cantidad: 1 };
      } else {
        acc[key].cantidad++;
      }
      return acc;
    }, {});

    Object.values(carritoAgrupado).forEach((item) => {
      const miItem = productos
        .flatMap((p) => p.items)
        .find((p) => p.id === parseInt(item.id));
      if (!miItem) return;

      const miNodo = document.createElement("li");
      miNodo.classList.add(
        "list-group-item",
        "d-flex",
        "justify-content-between",
        "align-items-center"
      );

      const texto = document.createElement("span");
      texto.textContent = `${item.cantidad}x ${
        miItem.nombreCarrito ? miItem.nombreCarrito : miItem.nombre
      } ${item.medida ? " - Medida: " + item.medida : ""} ${
        item.color ? " - Color: " + item.color : ""
      } ${item.tipo ? " - Tipo: " + item.tipo : ""}`;

      const contenedorBotones = document.createElement("div");

      const btnEditar = document.createElement("button");
      btnEditar.classList.add("btn", "btn-primary", "btn-sm");
      btnEditar.textContent = "Editar";
      btnEditar.onclick = () =>
        abrirModalProducto(
          miItem,
          item.cantidad,
          true,
          item.color,
          item.medida,
          item.tipo
        );

      const btnEliminar = document.createElement("button");
      btnEliminar.classList.add("btn", "btn-sm");
      btnEliminar.textContent = "❌";
      btnEliminar.onclick = () =>
        borrarItemCarrito(item.id, item.color, item.medida, item.tipo);

      contenedorBotones.appendChild(btnEditar);
      contenedorBotones.appendChild(btnEliminar);

      miNodo.appendChild(texto);
      miNodo.appendChild(contenedorBotones);

      DOMcarrito.appendChild(miNodo);
    });

    DOMtotal.textContent = `${carrito.length} Productos`;
  }

  function abrirModalProducto(
    producto,
    cantidad = 1,
    esEditar = false,
    colorActual = "",
    medidaActual = "",
    tipoActual = ""
  ) {
    productoEnEdicion = producto;

    document.getElementById("modalProductoTitulo").textContent = esEditar
      ? "Editar Producto"
      : "Agregar al Carrito";
    document.getElementById("modalProductoDescripcion").textContent =
      producto.descripcion;
    document.getElementById("modalProductoImagen").src = producto.imagen;
    document.getElementById("inputCantidad").value = cantidad;

    document.getElementById("btnMenos").onclick = () => actualizarCantidad(-1);
    document.getElementById("btnMas").onclick = () => actualizarCantidad(1);
    document.getElementById("btnModalAccion").textContent = esEditar
      ? "Guardar"
      : "Agregar";

    document.getElementById("btnModalAccion").onclick = () => {
      esEditar
        ? guardarCambiosCantidad(colorActual, medidaActual, tipoActual)
        : agregarProductoCarrito();
    };

    document
      .getElementById("inputCantidad")
      .addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          esEditar
            ? guardarCambiosCantidad(colorActual, medidaActual, tipoActual)
            : agregarProductoCarrito();
        }
      });

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

    const contenedorMedidas = document.getElementById("contenedorMedidas");
    contenedorMedidas.innerHTML = "";

    if (producto.medida && producto.medida.length > 0) {
      const label = document.createElement("label");
      label.textContent = "Selecciona una medida:";
      label.setAttribute("for", "selectMedida");

      const select = document.createElement("select");
      select.id = "selectMedida";
      select.classList.add("form-control");

      producto.medida.forEach((medida) => {
        const option = document.createElement("option");
        option.value = medida;
        option.textContent = medida;

        // Preseleccionar el color actual
        if (medida === medidaActual) {
          option.selected = true;
        }

        select.appendChild(option);
      });

      contenedorMedidas.appendChild(label);
      contenedorMedidas.appendChild(select);
    }

    const contenedorTipos = document.getElementById("contenedorTipos");
    contenedorTipos.innerHTML = "";

    if (producto.tipo && producto.tipo.length > 0) {
      const label = document.createElement("label");
      label.textContent = "Selecciona un tipo:";
      label.setAttribute("for", "selectTipo");

      const select = document.createElement("select");
      select.id = "selectTipo";
      select.classList.add("form-control");

      producto.tipo.forEach((tipo) => {
        const option = document.createElement("option");
        option.value = tipo;
        option.textContent = tipo;

        // Preseleccionar el color actual
        if (tipo === tipoActual) {
          option.selected = true;
        }

        select.appendChild(option);
      });

      contenedorTipos.appendChild(label);
      contenedorTipos.appendChild(select);
    }

    const modal = new bootstrap.Modal(document.getElementById("modalProducto"));
    modal.show();
  }

  // Función para actualizar la cantidad dentro del modal
  function actualizarCantidad(cambio) {
    let inputCantidad = document.getElementById("inputCantidad");
    let nuevaCantidad = parseInt(inputCantidad.value) + cambio;
    if (nuevaCantidad < 1) return;
    inputCantidad.value = nuevaCantidad;
  }

  // Función para guardar los cambios en el carrito

  function guardarCambiosCantidad(colorActual, medidaActual, tipoActual) {
    if (!productoEnEdicion) return;

    let nuevaCantidad = parseInt(
      document.getElementById("inputCantidad").value
    );
    const selectColor = document.getElementById("selectColor");
    const colorSeleccionado =
      selectColor && selectColor.value ? selectColor.value : null;
    const selectMedida = document.getElementById("selectMedida");
    const medidaSeleccionado =
      selectMedida && selectMedida.value ? selectMedida.value : null;
    const selectTipo = document.getElementById("selectTipo");
    const tipoSeleccionado =
      selectTipo && selectTipo.value ? selectTipo.value : null;

    // Convertir colorActual vacío ("") en null para manejar la comparación correctamente
    colorActual = colorActual === "" ? null : colorActual;
    medidaActual = medidaActual === "" ? null : medidaActual;
    tipoActual = tipoActual === "" ? null : tipoActual;

    // Primero, eliminar la variante anterior del producto con el color previo
    carrito = carrito.filter(
      (item) =>
        !(
          item.id === String(productoEnEdicion.id) &&
          (item.color || null) === colorActual &&
          (item.medida || null) === medidaActual &&
          (item.tipo || null) === tipoActual
        )
    );

    // Ahora agregar la nueva cantidad con el color actualizado
    for (let i = 0; i < nuevaCantidad; i++) {
      carrito.push({
        id: String(productoEnEdicion.id),
        color: colorSeleccionado || null,
        medida: medidaSeleccionado || null,
        tipo: tipoSeleccionado || null,
      });
    }

    renderizarCarrito();
    guardarCarritoEnLocalStorage();
    actualizarContadorCarrito();
    bootstrap.Modal.getInstance(
      document.getElementById("modalProducto")
    ).hide();
  }

  function borrarItemCarrito(
    idProducto,
    colorProducto,
    medidaProducto,
    tipoProducto
  ) {
    carrito = carrito.filter(
      (item) =>
        !(
          item.id === idProducto &&
          item.color === colorProducto &&
          item.medida === medidaProducto &&
          item.tipo === tipoProducto
        )
    );

    renderizarCarrito();
    guardarCarritoEnLocalStorage();
    actualizarContadorCarrito();
  }

  function actualizarContadorCarrito() {
    const cartCount = document.getElementById("cart-count");
    cartCount.textContent = carrito.length;
    cartCount.style.display = carrito.length > 0 ? "flex" : "none";
  }

  function guardarCarritoEnLocalStorage() {
    miLocalStorage.setItem("carrito", JSON.stringify(carrito));
  }

  function vaciarCarrito() {
    carrito = [];
    renderizarCarrito();
    actualizarContadorCarrito();
    localStorage.clear();
  }

  DOMbotonVaciar.addEventListener("click", () => vaciarCarrito());

  // ---------------------------------------------------  OTHER FUNCTIONS
  // Toggle dark mode
  darkMode();

  window.addEventListener("resize", hideMenuResize);
  window.addEventListener("load", hideMenuResize);

  // Toggle Mobile Menu
  toggleMenu();

  // Comprar function

  document.getElementById("boton-comprar").addEventListener("click", () => {
    const productos = [
      ...productosDestacados,
      ...canaletas,
      ...babetas,
      ...caballetes_y_conversas,
      ...curvas,
      ...canios_y_grampas,
      ...sombreros,
      ...chapas_pinturas,
      ...membranas_y_aislantes,
      ...durlock,
      ...policarbonato,
      ...accesorios,
      ...accesorios_dos,
    ];

    const carritoAgrupado = carrito.reduce((acc, item) => {
      let key = `${item.id}-${item.color || "default"}-${
        item.medida || "default"
      }-${item.tipo || "default"}`;

      if (!acc[key]) {
        acc[key] = { ...item, cantidad: 1 };
      } else {
        acc[key].cantidad++;
      }
      return acc;
    }, {});

    const productosTexto = Object.values(carritoAgrupado)
      .map((item) => {
        const miItem = productos.find((p) => p.id === parseInt(item.id));
        if (!miItem) return "";

        return (
          `• ${item.cantidad}x ${
            miItem.nombreCarrito ? miItem.nombreCarrito : miItem.nombre
          }` +
          `${item.medida ? " - Medida: " + item.medida : ""}` +
          `${item.color ? " - Color: " + item.color : ""}` +
          `${item.tipo ? " - Tipo: " + item.tipo : ""}`
        );
      })
      .join("\n"); // Une cada elemento con un salto de línea

    const mensaje =
      `Hola, Gracias por contactar con Zinguería La Gran Esquina.\n\n` +
      `Los productos son:\n\n${productosTexto}\n\n` +
      `En breve te respondemos.`;

    const numero = "5491164471868";
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

    vaciarCarrito();
    actualizarContadorCarrito();
    window.open(url, "_blank");
  });

  // Navbar Function
  header_movement();

  // Scroll
  scrollRight({
    buttonId: "scrollRightItemsDestacados",
    scrollerContainerId: "items-destacados",
  });
  scrollLeft({
    buttonId: "scrollLeftItemsDestacados",
    scrollerContainerId: "items-destacados",
  });

  scrollLeft({
    buttonId: "scrollLeftCanaletas",
    scrollerContainerId: "items-canaletas",
  });
  scrollRight({
    buttonId: "scrollRightCanaletas",
    scrollerContainerId: "items-canaletas",
  });

  scrollLeft({
    buttonId: "scrollLeftSombreros",
    scrollerContainerId: "items-sombreros",
  });
  scrollRight({
    buttonId: "scrollRightSombreros",
    scrollerContainerId: "items-sombreros",
  });

  scrollLeft({
    buttonId: "scrollLeftMembranas",
    scrollerContainerId: "items-membranas_aislantes",
  });
  scrollRight({
    buttonId: "scrollRightMembranas",
    scrollerContainerId: "items-membranas_aislantes",
  });

  scrollLeft({
    buttonId: "scrollLeftDurlock",
    scrollerContainerId: "items-durlock",
  });
  scrollRight({
    buttonId: "scrollRightDurlock",
    scrollerContainerId: "items-durlock",
  });

  scrollLeft({
    buttonId: "scrollLeftAccesorios",
    scrollerContainerId: "items-accesorios",
  });
  scrollRight({
    buttonId: "scrollRightAccesorios",
    scrollerContainerId: "items-accesorios",
  });

  scrollLeft({
    buttonId: "scrollLeftAccesoriosDos",
    scrollerContainerId: "items-accesorios-dos",
  });
  scrollRight({
    buttonId: "scrollRightAccesoriosDos",
    scrollerContainerId: "items-accesorios-dos",
  });

  function showToast(producto, cantidad) {
    const toastElement = document.getElementById("liveToast");

    if (!toastElement) {
      console.error("No se encontró el elemento liveToast");
      return;
    }

    const toastBody = toastElement.querySelector(".toast-body");
    if (!toastBody) {
      console.error("No se encontró el elemento .toast-body");
      return;
    }

    toastBody.textContent = `Has agregado correctamente ${cantidad} de ${
      producto.nombreCarrito ? producto.nombreCarrito : producto.nombre
    }${producto.medida ? " - Medida: " + producto.medida : ""}${
      producto.color ? " - Color: " + producto.color : ""
    }${producto.tipo ? " - Tipo: " + producto.tipo : ""} al carrito.`;

    const toast = new bootstrap.Toast(toastElement, {
      autohide: true,
      delay: 3000,
    });

    toast.show();
  }
});
