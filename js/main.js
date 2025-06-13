import {
  header_movement,
  hideMenuResize,
  scrollLeft,
  scrollRight,
  darkMode,
  toggleMenu,
} from "./global-functions.js";
import { data } from "../assets/data.js";

document.addEventListener("DOMContentLoaded", () => {
  // Toggle dark mode
  darkMode();

  window.addEventListener("resize", hideMenuResize);
  window.addEventListener("load", hideMenuResize);

  // Toggle mobile menu
  toggleMenu();

  // Add click event to cards product
  scrollLeft({
    buttonId: "scrollLeft",
    scrollerContainerId: "destacados",
  });
  scrollRight({
    buttonId: "scrollRight",
    scrollerContainerId: "destacados",
  });

  // Welcome Message
  setTimeout(function () {
    const welcomeToastElement = document.getElementById("welcomeLiveToast");
    const welcomeToast = new bootstrap.Toast(welcomeToastElement, {
      autohide: false,
    });
    welcomeToast.show();
  }, 4000);

  // Navbar scroll
  header_movement();



  async function renderizarProductos() {
    try {
      const productos = data;

      const contenedor = document.getElementById("destacados");
      contenedor.innerHTML = "";

      productos["destacados"].splice(-2);

      productos["destacados"].forEach((info) => {
        const miNodo = document.createElement("div");
        miNodo.classList.add("card");

        const miNodoCardBody = document.createElement("div");
        miNodoCardBody.classList.add("card-body");

        const miNodoImagen = document.createElement("img");
        miNodoImagen.setAttribute("src", info.imagen);
        miNodoImagen.setAttribute("alt", info.nombre);

        const miNodoTitle = document.createElement("h5");
        miNodoTitle.classList.add("titulo-largo");
        miNodoTitle.textContent = info.nombre;

        const miNodoDescripcion = document.createElement("p");
        miNodoDescripcion.classList.add("card-text");
        miNodoDescripcion.textContent = info.descripcionCorta;

        const miNodoBoton = document.createElement("button");
        miNodoBoton.classList.add("btn", "btn-color");
        miNodoBoton.textContent = "Ver Producto";
        miNodoBoton.setAttribute("marcador", info.id);

        miNodoCardBody.appendChild(miNodoImagen);
        miNodoCardBody.appendChild(miNodoTitle);
        miNodoCardBody.appendChild(miNodoDescripcion);
        miNodoCardBody.appendChild(miNodoBoton);
        miNodo.appendChild(miNodoCardBody);
        miNodo.addEventListener("click", () => abrirModalProducto(info));

        contenedor.appendChild(miNodo);
      });
    } catch (err) {
      console.log(err);
    }
  }

  renderizarProductos();
  function abrirModalProducto(
    producto,
    cantidad = 1,
    colorActual = "",
    medidaActual = "",
    tipoActual = ""
  ) {
    document.getElementById("modalProductoTitulo").textContent =
      "Ver el Producto";
    document.getElementById("modalProductoDescripcion").textContent =
      producto.descripcion;
    document.getElementById("modalProductoImagen").src = producto.imagen;
    document.getElementById("inputCantidad").value = cantidad;

    document.getElementById("btnMenos").onclick = () => actualizarCantidad(-1);
    document.getElementById("btnMas").onclick = () => actualizarCantidad(1);
    document.getElementById("btnModalAccion").textContent = "Ver en Productos ";

    document.getElementById("btnModalAccion").onclick = () => {
      window.location.href = "/productos";
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
});
