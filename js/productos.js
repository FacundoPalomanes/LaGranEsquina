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

  // const fecthUrl = "http://localhost:8000";
  const fecthUrl = "https://worthwhile-max-darshed-c84f137f.koyeb.app"

  // FUNCTIONS LLAMADAS AL INGRESAR A LA PAGINA

  let cachedDataPromise = null;

  async function fetchData() {
    if (cachedDataPromise) return cachedDataPromise; // Si ya existe, lo retornamos directamente

    // Creamos una nueva promesa para hacer el fetch de los datos
    cachedDataPromise = fetch(`${fecthUrl}/data`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      cache: "default",
    })
      .then((res) => res.json())
      .catch((error) => {
        console.error("Error al obtener los datos:", error);
        return null;
      });

    return cachedDataPromise; // Retornamos la promesa
  }

  renderAllSections();

  async function renderAllSections() {
    const productos = await fetchData();

    // Obtener las secciones del JSON dinámicamente
    const sections = Object.keys(productos).map((key) => ({
      seccion: key,
    }));

    // Iterar sobre cada sección y crear una tabla
    sections.forEach(({ seccion }) => {
      if (productos[seccion]) {
        renderizarProductos(productos[seccion], seccion);
      } else {
        console.error(
          `La sección ${seccion} no está definida en los productos.`
        );
      }
    });
  }

  renderizarCarrito();

  let productoEnEdicion = null;

  // ---------------------------------------------- FUNCTIONS PRODUCTOS

  function renderizarProductos(productos, seccion) {
    const contenedor = document.getElementById(seccion);
    contenedor.innerHTML = "";

    const fragmento = document.createDocumentFragment();

    productos.forEach((info) => {
      const miNodo = document.createElement(
        seccion === "destacados" && info.id !== 1 ? "a" : "div"
      );
      miNodo.classList.add("card");

      if (seccion === "destacados" && info.href && info.id !== 1) {
        miNodo.setAttribute("href", info.href);
        miNodo.setAttribute("target", "_self"); // Opcional, si quieres que abra en la misma pestaña
      }

      const miNodoCardBody = document.createElement("div");
      miNodoCardBody.classList.add("card-body");

      const miNodoImagen = document.createElement("img");
      miNodoImagen.setAttribute("src", info.imagen);
      miNodoImagen.setAttribute("alt", info.nombre);
      miNodoImagen.setAttribute("loading", "lazy");
      miNodoImagen.addEventListener("load", () => {
        miNodoImagen.classList.add("loaded");
      });

      const miNodoTitle = document.createElement("h5");
      miNodoTitle.classList.add("card-title");
      if (info.nombre.length > 22) {
        miNodoTitle.classList.add("titulo-largo");
      }
      miNodoTitle.textContent = info.nombre;

      const miNodoDescripcion = document.createElement("p");
      miNodoDescripcion.classList.add("card-text");
      miNodoDescripcion.textContent = info.descripcionCorta;

      const miNodoBoton = document.createElement("button");
      miNodoBoton.classList.add("btn", "btn-color");
      miNodoBoton.textContent =
        seccion === "destacados" && info.id !== 1 ? "Ver Producto" : "Agregar";

      miNodoBoton.setAttribute("marcador", info.id);
      miNodoCardBody.appendChild(miNodoImagen);
      miNodoCardBody.appendChild(miNodoTitle);
      miNodoCardBody.appendChild(miNodoDescripcion);
      miNodoCardBody.appendChild(miNodoBoton);
      miNodo.appendChild(miNodoCardBody);

      if (seccion !== "destacados" || info.id === 1) {
        miNodo.addEventListener("click", () => abrirModalProducto(info));
      }

      fragmento.appendChild(miNodo);
    });

    contenedor.appendChild(fragmento);
  }

  function agregarProductoCarrito() {
    let cantidad = parseInt(document.getElementById("inputCantidad").value);
    let metrosSelecionados;
    if (productoEnEdicion.metros) {
      const cantidadMetros = document.getElementById("inputMetros");
      metrosSelecionados =
        cantidadMetros && cantidadMetros.value ? cantidadMetros.value : null;
    }
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
      let producto = {
        id: String(productoEnEdicion.id),
        color: colorSeleccionado || null,
        medida: medidaSeleccionada || null,
        tipo: tipoSeleccionada || null,
        metros: metrosSelecionados || null,
      };

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
        metros: metrosSelecionados,
      },
      cantidad
    );
  }

  //FALTA EN EL TOAST

  // -------------------------------------------------------- FUNCTIONS CARRITO

  actualizarContadorCarrito();

  async function renderizarCarrito() {
    DOMcarrito.textContent = "";

    const productos = await fetchData();

    const carritoAgrupado = carrito.reduce((acc, item) => {
      let key = `${item.id}-${item.color || "default"}-${
        item.medida || "default"
      }-${item.tipo || "default"}-${item.metros || "default"}`;
      if (!acc[key]) {
        acc[key] = { ...item, cantidad: 1 };
      } else {
        acc[key].cantidad++;
      }
      return acc;
    }, {});

    Object.values(carritoAgrupado).forEach((item) => {
      // Recorremos todas las secciones buscando el producto con el ID dado
      const miItem = Object.values(productos)
        .flat()
        .find((p) => p.id === parseInt(item.id));

      if (!miItem) return;

      const miNodo = document.createElement("li");
      miNodo.classList.add(
        "list-group-item",
        "d-flex",
        "justify-content-between",
        "align-items-center"
      );

      const texto = document.createElement("div");
      texto.classList.add("flex-grow-1", "me-3", "text-break");
      texto.textContent = `${item.cantidad}x ${miItem.nombre} ${
        item.metros ? "- Metros: " + item.metros : ""
      } ${item.medida ? " - Medida: " + item.medida : ""} ${
        item.color ? " - Color: " + item.color : ""
      } ${item.tipo ? " - Tipo: " + item.tipo : ""}`;

      const contenedorBotones = document.createElement("div");
      contenedorBotones.classList.add("d-flex", "gap-2");

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
          item.tipo,
          item.metros
        );

      const btnEliminar = document.createElement("button");
      btnEliminar.classList.add("btn", "btn-sm");
      btnEliminar.textContent = "❌";
      btnEliminar.onclick = () =>
        borrarItemCarrito(
          item.id,
          item.color,
          item.medida,
          item.tipo,
          item.metros
        );

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
    tipoActual = "",
    metros = 1
  ) {
    productoEnEdicion = producto;
    const inputCantidad = document.getElementById("inputCantidad");
    const inputMetros = document.getElementById("inputMetros");

    const cantidadContainer = document.getElementById("cantidad");
    const metrosContainer = document.getElementById("metros");

    document.getElementById("modalProductoTitulo").textContent = esEditar
      ? "Editar Producto"
      : "Agregar al Carrito";
    document.getElementById("modalProductoDescripcion").textContent =
      producto.descripcion;
    document.getElementById("modalProductoImagen").src = producto.imagen;
    inputCantidad.value = cantidad;

    document.getElementById("btnMenos").onclick = () =>
      [60, 61, 101, 102].includes(producto.id)
        ? actualizarCantidad(-10)
        : actualizarCantidad(-1);
    document.getElementById("btnMas").onclick = () =>
      [60, 61, 101, 102].includes(producto.id)
        ? actualizarCantidad(10)
        : actualizarCantidad(1);
    document.getElementById("btnModalAccion").textContent = esEditar
      ? "Guardar"
      : "Agregar";

    document.getElementById("btnModalAccion").onclick = () => {
      esEditar
        ? guardarCambiosCantidad(colorActual, medidaActual, tipoActual, metros)
        : agregarProductoCarrito();
    };

    if (producto.metros) {
      cantidadContainer.style.display = "none"; // Oculta cantidad
      metrosContainer.style.display = "block"; // Muestra metros
      if ([54, 55, 56, 108, 109].includes(producto.id)) {
        cantidadContainer.style.display = "block"; // Muestra cantidad
        metrosContainer.style.display = "block"; // Muestra metros
        if ([54, 55, 56].includes(producto.id)) {
          inputMetros.setAttribute("min", "2");
          inputMetros.setAttribute("max", "8");
          inputMetros.setAttribute("step", "0.5");
          inputMetros.value = "2"; // Establece valor por defecto a 2
        }
      } else {
        // Productos con metros pero no en la lista especial
        inputMetros.setAttribute("min", "1");
        inputMetros.removeAttribute("max");
        inputMetros.removeAttribute("step");
        inputMetros.value = esEditar ? metros : "1"; // Valor por defecto normal
      }
    } else {
      cantidadContainer.style.display = "block"; // Muestra cantidad
      metrosContainer.style.display = "none"; // Oculta metros
      if ([60, 61, 101, 102].includes(producto.id)) {
        inputCantidad.setAttribute("min", "0");
        inputCantidad.value = "0";
      }
    }

    inputCantidad.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        esEditar
          ? guardarCambiosCantidad(
              colorActual,
              medidaActual,
              tipoActual,
              metros
            )
          : agregarProductoCarrito();
      }
    });
    inputMetros.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        esEditar
          ? guardarCambiosCantidad(
              colorActual,
              medidaActual,
              tipoActual,
              metros
            )
          : agregarProductoCarrito();
      }
    });

    const contenedorColores = document.getElementById("contenedorColores");
    contenedorColores.innerHTML = "";

    if (producto.color && producto.color.length > 0) {
      const label = document.createElement("label");
      label.textContent = "Selecciona una color:";
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

  function actualizarCantidad(cambio) {
    let inputCantidad = document.getElementById("inputCantidad");
    let nuevaCantidad = parseInt(inputCantidad.value) + cambio;
    if (nuevaCantidad < 1) return;
    inputCantidad.value = nuevaCantidad;
  }

  function guardarCambiosCantidad(
    colorActual,
    medidaActual,
    tipoActual,
    metrosActual
  ) {
    console.log("Metros pasados: ", metrosActual);
    if (!productoEnEdicion) return;

    let nuevaCantidad = parseInt(
      document.getElementById("inputCantidad").value
    );

    let metrosSeleccionados;
    if (productoEnEdicion.metros) {
      const cantidadMetros = document.getElementById("inputMetros");
      metrosSeleccionados =
        cantidadMetros && cantidadMetros.value
          ? parseFloat(cantidadMetros.value)
          : null;
    } else {
      metrosSeleccionados = null;
    }

    // Normalizar valores para comparación
    colorActual = colorActual || null;
    medidaActual = medidaActual || null;
    tipoActual = tipoActual || null;
    metrosActual = metrosActual !== "" ? parseFloat(metrosActual) : null;

    carrito = carrito.filter((item) => {
      if (item.id !== String(productoEnEdicion.id)) {
        return true;
      }

      const coincideColor =
        item.color === null ||
        colorActual === null ||
        item.color === colorActual;
      const coincideMedida =
        item.medida === null ||
        medidaActual === null ||
        item.medida === medidaActual;
      const coincideTipo =
        item.tipo === null || tipoActual === null || item.tipo === tipoActual;
      const coincideMetros =
        item.metros === null ||
        metrosActual === null ||
        metrosActual === "" ||
        Number(item.metros) === Number(metrosActual);

      if (coincideColor && coincideMedida && coincideTipo && coincideMetros) {
        return false; // eliminar
      }
      console.log(
        "Metros item: ",
        item.metros,
        "typeof : ",
        typeof item.metros
      );
      console.log(
        "Metros pasados ",
        metrosActual,
        "typeof : ",
        typeof metrosActual
      );

      return true; // mantener
    });

    // Recolectar los nuevos valores seleccionados para agregar
    const colorSeleccionado =
      document.getElementById("selectColor")?.value || null;
    const medidaSeleccionado =
      document.getElementById("selectMedida")?.value || null;
    const tipoSeleccionado =
      document.getElementById("selectTipo")?.value || null;

    console.log("Metros seleccionados: ", metrosSeleccionados);

    for (let i = 0; i < nuevaCantidad; i++) {
      carrito.push({
        id: String(productoEnEdicion.id),
        color: colorSeleccionado,
        medida: medidaSeleccionado,
        tipo: tipoSeleccionado,
        metros: metrosSeleccionados,
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
    id,
    color = null,
    medida = null,
    tipo = null,
    metros = null
  ) {
    carrito = carrito.filter((item) => {
      if (item.id !== String(id)) {
        return true;
      }

      const coincideColor = item.color === null || item.color === color;
      const coincideMedida = item.medida === null || item.medida === medida;
      const coincideTipo = item.tipo === null || item.tipo === tipo;
      const coincideMetros =
        item.metros === null || Number(item.metros) === Number(metros);

      if (coincideColor && coincideMedida && coincideTipo && coincideMetros) {
        return false;
      }

      return true;
    });

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
    const carritoAgrupado = carrito.reduce((acc, item) => {
      // this could be a function
      let key = `${item.id}-${item.color || "default"}-${
        item.medida || "default"
      }-${item.tipo || "default"}-${item.metros || "default"}`;

      if (!acc[key]) {
        acc[key] = { ...item, cantidad: 1 };
      } else {
        acc[key].cantidad++;
      }
      return acc;
    }, {});

    const productosTexto = Object.values(carritoAgrupado)
      .map((item) => {
        const miItem = productos
          .flatMap((p) => p.items)
          .find((p) => p.id === parseInt(item.id));
        if (!miItem) return "";

        return (
          `• ${item.cantidad}x ${miItem.nombre}` +
          `${item.metros ? "- Metros: " + item.metros : ""}` +
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
    scrollerContainerId: "destacados",
  });
  scrollLeft({
    buttonId: "scrollLeftItemsDestacados",
    scrollerContainerId: "destacados",
  });

  scrollLeft({
    buttonId: "scrollLeftCanaletas",
    scrollerContainerId: "canaletas",
  });
  scrollRight({
    buttonId: "scrollRightCanaletas",
    scrollerContainerId: "canaletas",
  });

  scrollLeft({
    buttonId: "scrollLeftCaniosGrampas",
    scrollerContainerId: "canios_grampas",
  });
  scrollRight({
    buttonId: "scrollRightCaniosGrampas",
    scrollerContainerId: "canios_grampas",
  });

  scrollLeft({
    buttonId: "scrollLeftSombreros",
    scrollerContainerId: "sombreros",
  });
  scrollRight({
    buttonId: "scrollRightSombreros",
    scrollerContainerId: "sombreros",
  });

  scrollLeft({
    buttonId: "scrollLeftChapasPinturas",
    scrollerContainerId: "chapas",
  });
  scrollRight({
    buttonId: "scrollRightChapasPinturas",
    scrollerContainerId: "chapas",
  });

  scrollLeft({
    buttonId: "scrollLeftSelladoresPinturas",
    scrollerContainerId: "selladores_pinturas",
  });
  scrollRight({
    buttonId: "scrollRightSelladoresPinturas",
    scrollerContainerId: "selladores_pinturas",
  });

  scrollLeft({
    buttonId: "scrollLeftClaraboyas",
    scrollerContainerId: "claraboyas",
  });
  scrollRight({
    buttonId: "scrollRightClaraboyas",
    scrollerContainerId: "claraboyas",
  });

  scrollLeft({
    buttonId: "scrollLeftMembranas",
    scrollerContainerId: "membranas_aislantes",
  });
  scrollRight({
    buttonId: "scrollRightMembranas",
    scrollerContainerId: "membranas_aislantes",
  });

  scrollLeft({
    buttonId: "scrollLeftDurlock",
    scrollerContainerId: "durlock",
  });
  scrollRight({
    buttonId: "scrollRightDurlock",
    scrollerContainerId: "durlock",
  });

  scrollLeft({
    buttonId: "scrollLeftAccesorios",
    scrollerContainerId: "accesorios",
  });
  scrollRight({
    buttonId: "scrollRightAccesorios",
    scrollerContainerId: "accesorios",
  });

  scrollLeft({
    buttonId: "scrollLeftAccesoriosDos",
    scrollerContainerId: "accesorios_dos",
  });
  scrollRight({
    buttonId: "scrollRightAccesoriosDos",
    scrollerContainerId: "accesorios_dos",
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

    toastBody.textContent = `Has agregado correctamente ${cantidad} de 
    ${producto.nombre}${producto.metros ? "- Metros: " + producto.metros : ""}${
      producto.medida ? " - Medida: " + producto.medida : ""
    }${producto.color ? " - Color: " + producto.color : ""}${
      producto.tipo ? " - Tipo: " + producto.tipo : ""
    } al carrito.`;

    const toast = new bootstrap.Toast(toastElement, {
      autohide: true,
      delay: 3000,
    });

    toast.show();
  }

  let lastSelectedProduct = null; // Guardamos el último producto seleccionado

  // Función para manejar la búsqueda desde cualquier input
  async function handleSearch(inputId, listId) {
    const query = document.getElementById(inputId).value.trim().toLowerCase();
    const list = document.getElementById(listId);
    list.innerHTML = "";

    if (query.length === 0) return;

    try {
      const data = await fetchData();

      if (data && typeof data === "object") {
        const secciones = Object.keys(data);

        secciones.forEach((seccion, index) => {
          data[seccion].forEach((obj) => {
            if (obj.nombre.toLowerCase().includes(query)) {
              const li = document.createElement("li");
              li.className = "list-group-item list-group-item-action";
              li.textContent = obj.nombre;

              li.onclick = () => {
                document.getElementById(inputId).value = obj.nombre;
                list.innerHTML = "";
                lastSelectedProduct = obj.nombre; // Guardamos lo seleccionado

                const seccionAnterior =
                  index > 0 ? secciones[index - 1] : secciones[0];
                const targetSection = document.getElementById(seccionAnterior);
                if (targetSection) {
                  targetSection.scrollIntoView({ behavior: "smooth" });
                }
              };

              list.appendChild(li);
            }
          });
        });
      }
    } catch (error) {
      console.error("Error buscando objetos:", error);
    }
  }

  // Escuchar el input del formulario de escritorio
  document
    .getElementById("searchInput")
    .addEventListener("input", () =>
      handleSearch("searchInput", "suggestionsList")
    );

  // Escuchar el input del formulario móvil
  document
    .getElementById("mobileSearchInput")
    .addEventListener("input", () =>
      handleSearch("mobileSearchInput", "mobileSuggestionsList")
    );

  // Función de búsqueda cuando se hace clic en el botón
  async function handleButtonSearch(inputId, listId) {
    const value = document.getElementById(inputId).value.trim().toLowerCase();
    if (!value) return;

    try {
      const data = await fetchData();

      if (data && typeof data === "object") {
        const secciones = Object.keys(data);

        for (let i = 0; i < secciones.length; i++) {
          const productos = data[secciones[i]];
          const encontrado = productos.find(
            (obj) => obj.nombre.toLowerCase() === value
          );

          if (encontrado) {
            lastSelectedProduct = encontrado.nombre;

            const seccionAnterior = i > 0 ? secciones[i - 1] : secciones[0];
            const targetSection = document.getElementById(seccionAnterior);
            if (targetSection) {
              targetSection.scrollIntoView({ behavior: "smooth" });
            }
            break;
          }
        }
      }
    } catch (error) {
      console.error("Error al buscar desde el botón:", error);
    }
  }

  // Escuchar el botón de búsqueda en el formulario de escritorio
  document
    .querySelector("button.btn.btn-outline-success")
    .addEventListener("click", () =>
      handleButtonSearch("searchInput", "suggestionsList")
    );

  // Escuchar el botón de búsqueda en el formulario móvil
  document
    .querySelectorAll("button.btn.btn-outline-success")[1] // Escucha el segundo botón (móvil)
    .addEventListener("click", () =>
      handleButtonSearch("mobileSearchInput", "mobileSuggestionsList")
    );
});
