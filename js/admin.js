document.addEventListener("DOMContentLoaded", async () => {
  const fetchUrl = "http://localhost:8000";
  // const fetchUrl = "https://worthwhile-max-darshed-c84f137f.koyeb.app"

  let jwt = localStorage.getItem("jwt");
  if (jwt) {
    const page = await fetch(`${fetchUrl}/editar`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });

    if (page.ok) {
      document.getElementById("form").classList.add("display-none");
      const htmlContent = await page.text(); // Obtener el contenido HTML como texto
      const container = document.getElementById("adminContainer");
      container.innerHTML = htmlContent; // Insertar el HTML en el contenedor
      initializeNavLinks();
    } else {
      localStorage.clear("jwt");
      console.log("Error al obtener la página.");
    }
  } else {
    const form = document.getElementById("loginForm");
    form.addEventListener("submit", async (event) => {
      event.preventDefault();

      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      const response = await fetch(`${fetchUrl}/api/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const result = await response.json();

      if (response.ok) {
        document.getElementById("message").textContent = result.message;

        jwt = result.token; // Guardamos el token
        localStorage.setItem("jwt", jwt);

        const page = await fetch(`${fetchUrl}/editar`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        });

        if (page.ok) {
          document.getElementById("form").classList.add("display-none");
          const htmlContent = await page.text();
          const container = document.getElementById("adminContainer");
          container.innerHTML = htmlContent;
          initializeNavLinks();
        } else {
          console.log("Error al obtener la página.");
        }
      } else {
        // Mostrar mensaje de error
        document.getElementById("message").textContent = result.message;
      }
    });
  }

  function initializeNavLinks() {
    const navLinks = document.querySelectorAll(".nav-link");
    const contentSections = document.querySelectorAll(".content-section");

    navLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const target = e.target.getAttribute("data-target");

        contentSections.forEach((section) => {
          section.classList.remove("active");
          section.style.display = "none";
        });

        const activeSection = document.getElementById(target);
        activeSection.classList.add("active");
        activeSection.style.display = "block";

        navLinks.forEach((link) => {
          link.classList.remove("active");
        });

        e.target.classList.add("active");
      });
    });

    const defaultLink = document.querySelector(
      '.nav-link[data-target="excel"]'
    );
    defaultLink.classList.add("active");
    document.getElementById("excel").classList.add("active");
    document.getElementById("excel").style.display = "block";
    enablePageThings();
  }

  function enablePageThings() {
    const messageDiv = document.getElementById("message");

    document
      .getElementById("uploadForm")
      .addEventListener("submit", async function (e) {
        e.preventDefault();

        const formData = new FormData();
        const fileInput = document.getElementById("fileInput");
        formData.append("file", fileInput.files[0]);

        const response = await fetch(`${fetchUrl}/upload`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
          body: formData,
        });

        if (response.ok) {
          messageDiv.classList.remove("error");
          messageDiv.classList.add("success");
          messageDiv.textContent = "Archivo subido exitosamente.";
        } else {
          messageDiv.classList.remove("success");
          messageDiv.classList.add("error");
          messageDiv.textContent = "Hubo un error al subir el archivo.";
        }
        messageDiv.style.display = "block";
      });
    document
      .getElementById("download-excel")
      .addEventListener("click", async () => {
        try {
          const response = await fetch(`${fetchUrl}/generate-excel`, {
            method: "GET",
            headers: {
              Authorization: `Bearer ${jwt}`,
            },
          });

          if (!response.ok) {
            messageDiv.classList.remove("success");
            messageDiv.classList.add("error");
            messageDiv.textContent = "Hubo un error al descargar el excel.";
            return;
          }

          // Convertir la respuesta en un Blob
          const blob = await response.blob();

          // Crear un enlace de descarga
          const url = URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.href = url;
          a.download = "items.xlsx"; // Nombre del archivo descargado
          document.body.appendChild(a);
          a.click();
          a.remove();
          URL.revokeObjectURL(url); // Limpiar la URL temporal

          messageDiv.classList.remove("error");
          messageDiv.classList.add("success");
          messageDiv.textContent = "Excel descargado correctamente.";
        } catch (error) {
          console.error("Error al descargar el archivo:", error);
          messageDiv.classList.remove("success");
          messageDiv.classList.add("error");
          messageDiv.textContent = "Hubo un error al descargar el excel.";
        }
      });

    document.getElementById("close-session").addEventListener("click", () => {
      // Borrar el JWT del localStorage
      localStorage.removeItem("jwt");

      // Mostrar el formulario de inicio de sesión
      document.getElementById("form").classList.remove("display-none");

      // Limpiar el contenido del contenedor admin
      const container = document.getElementById("adminContainer");
      container.innerHTML = "";

      // Limpiar el mensaje
      document.getElementById("message").textContent = "";

      // Redirigir a la página principal o login
      window.location.href = "/index.html"; // Redirigir a la página de inicio de sesión
    });

    const itemsList = document.getElementById("itemsList");
    const searchBar = document.getElementById("searchBar");
    let itemsData = [];

    async function fetchItems() {
      try {
        const response = await fetch(`${fetchUrl}/data`, {
          method: "GET",
        });
        const data = await response.json();
        itemsData = [];

        for (const category in data) {
          data[category].forEach((item) => {
            itemsData.push({ category, ...item });
          });
        }

        renderItems(itemsData);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    }

    function renderItems(items) {
      itemsList.innerHTML = "";

      items.forEach((item) => {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("item-card");
        itemDiv.innerHTML = `
              <div>
                  <img src="${item.imagen}" alt="${item.nombre}">
                  <strong>${item.category}</strong>
                  <strong>${item.nombre}</strong>
                  <em>${item.descripcion}</em>${
          item.metros ? "<em>Este objeto acepta metros unicamente</em>" : ""
        } ${item.medida ? `<em>${item.medida}</em>` : ""} ${
          item.color ? `<em>${item.color}</em>` : ""
        } ${item.tipo ? `<em>${item.tipo}</em>` : ""}
              </div>
              <button class="edit-btn" data-id="${item.id}">Editar</button>
          `;

        const editBtn = itemDiv.querySelector(".edit-btn");
        editBtn.addEventListener("click", () => editItem(item.id));
        itemsList.appendChild(itemDiv);
      });
    }

    function editItem(id) {
      // Encontrar el item con el ID correspondiente y abrir el modal para editarlo
      const item = itemsData.find((item) => item.id === id);
      openModal(item);
    }

    const modalProducto = document.getElementById("modalProducto");
    const modalProductoImagen = document.getElementById("modalProductoImagen");
    const modalImagenInput = document.getElementById("modalImagenInput");
    const modalProductoNombre = document.getElementById("modalProductoNombre");
    const modalProductoDescripcion = document.getElementById(
      "modalProductoDescripcion"
    );
    const contenedorColores = document.getElementById("contenedorColores");
    const contenedorMedidas = document.getElementById("contenedorMedidas");
    const contenedorTipos = document.getElementById("contenedorTipos");

    const agregarColorBtn = document.getElementById("agregarColorBtn");
    const agregarMedidaBtn = document.getElementById("agregarMedidaBtn");
    const agregarTipoBtn = document.getElementById("agregarTipoBtn");
    const btnGuardarCambios = document.getElementById("btnGuardarCambios");
    const btnBorrarObjeto = document.getElementById("btnBorrarObjeto");

    let currentItem = null;

    function openModal(item) {
      currentItem = item;

      modalProductoImagen.src = item.imagen || "";
      modalProductoNombre.value = item.nombre || "";
      modalProductoDescripcion.value = item.descripcion || "";

      renderList(contenedorColores, item.color, "color");
      renderList(contenedorMedidas, item.medida, "medida");
      renderList(contenedorTipos, item.tipo, "tipo");

      new bootstrap.Modal(modalProducto).show();
    }

    function renderList(container, items, type) {
      container.innerHTML = "";
      if (items) {
        items.forEach((item, index) => {
          const div = document.createElement("div");
          div.innerHTML = `
                      <div class="d-flex align-items-center mb-1">
                          <input type="text" class="form-control me-2" value="${item}" oninput="updateItem('${type}', ${index}, this.value)">
                          <button class="btn btn-danger btn-sm" onclick="deleteItem('${type}', ${index})">Eliminar</button>
                      </div>
                  `;
          container.appendChild(div);
        });
      }
    }

    function updateItem(type, index, value) {
      currentItem[type][index] = value;
    }

    function deleteItem(type, index) {
      currentItem[type].splice(index, 1);
      renderList(
        type === "color"
          ? contenedorColores
          : type === "medida"
          ? contenedorMedidas
          : contenedorTipos,
        currentItem[type],
        type
      );
    }

    agregarColorBtn.addEventListener("click", () => {
      currentItem.color = currentItem.color || [];
      currentItem.color.push(""); // Agregar un nuevo campo vacío
      renderList(contenedorColores, currentItem.color, "color");
    });

    agregarMedidaBtn.addEventListener("click", () => {
      currentItem.medida = currentItem.medida || [];
      currentItem.medida.push(""); // Agregar un nuevo campo vacío
      renderList(contenedorMedidas, currentItem.medida, "medida");
    });

    agregarTipoBtn.addEventListener("click", () => {
      currentItem.tipo = currentItem.tipo || [];
      currentItem.tipo.push(""); // Agregar un nuevo campo vacío
      renderList(contenedorTipos, currentItem.tipo, "tipo");
    });

    modalProductoImagen.addEventListener("click", () => {
      modalImagenInput.click();
    });

    modalImagenInput.addEventListener("change", (event) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
          modalProductoImagen.src = e.target.result;
          currentItem.imagen = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    });

    btnGuardarCambios.addEventListener("click", async () => {
      currentItem.nombre = modalProductoNombre.value;
      currentItem.descripcion = modalProductoDescripcion.value;

      // Guardar los colores, medidas y tipos (los valores que el usuario ha ingresado)
      currentItem.color = getEditableListValues(contenedorColores);
      currentItem.medida = getEditableListValues(contenedorMedidas);
      currentItem.tipo = getEditableListValues(contenedorTipos);

      // Obtener el estado del checkbox 'metros'
      const metrosCheckbox = document.querySelector("#modalProductoMetros");
      const metrosChecked = metrosCheckbox.checked; // Devuelve true si está marcado, false si no.

      // Guardar el valor del dropdown 'href'
      const hrefDropdown = document.querySelector("#modalProductoHref");
      currentItem.href =
        hrefDropdown.value !== "none" ? hrefDropdown.value : "";

      // Verificar si hay imagen cargada
      const imagenInput = document.querySelector("#modalImagenInput");
      let imagenFile = imagenInput ? imagenInput.files[0] : null;

      // Crear un objeto FormData para enviar la información
      const formData = new FormData();

      // Agregar los datos al FormData
      formData.append("id", currentItem.id);
      formData.append("nombre", currentItem.nombre);
      formData.append("descripcion", currentItem.descripcion);
      formData.append("color", currentItem.color.join(","));
      formData.append("medida", currentItem.medida.join(","));
      formData.append("tipo", currentItem.tipo.join(","));
      formData.append("href", currentItem.href || "");
      formData.append("seccion", currentItem.category);
      formData.append("metros", metrosChecked); 

      // Si hay imagen, agregarla al FormData
      if (imagenFile) {
        console.log("Imagen File: ", imagenFile);
        formData.append("image", imagenFile);
      }

      console.log(formData);

      // Hacer el fetch para enviar los datos al servidor
      try {
        const response = await fetch(`${fetchUrl}/update-item`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
          body: formData,
        });

        if (!response.ok) {
          const errorData = await response.json();
          console.error(errorData.error || "Error desconocido");
          alert(errorData.error || "Hubo un problema al guardar los cambios.");
          return;
        }

        const data = await response.json();
        console.log(data);
        alert("Cambios guardados correctamente!");
      } catch (error) {
        console.error("Error en la solicitud:", error);
        alert("Hubo un problema al enviar los datos.");
      }

      // Cerrar el modal
      bootstrap.Modal.getInstance(modalProducto).hide();
    });

    btnBorrarObjeto.addEventListener("click", async () => {
      try {
        console.log(currentItem.category);
        console.log(currentItem.id);
        const response = await fetch(`${fetchUrl}/delete-item`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jwt}`,
          },
          body: JSON.stringify({
            seccion: currentItem.category,
            id: currentItem.id,
          }),
        });

        // Verificar si la respuesta es exitosa
        if (!response.ok) {
          const errorData = await response.json(); // Intentar leer el JSON de error
          console.error(errorData.error || "Error desconocido");
          alert(errorData.error || "Hubo un problema al guardar los cambios.");
          return;
        }

        const data = await response.json();
        console.log(data);
        alert("Cambios guardados correctamente!");
      } catch (error) {
        console.error("Error en la solicitud:", error);
        alert("Hubo un problema al enviar los datos.");
      }
      bootstrap.Modal.getInstance(modalProducto).hide();
    });

    // Función para obtener los valores de los campos de texto de los colores, medidas y tipos
    function getEditableListValues(container) {
      const inputs = container.querySelectorAll("input");
      return Array.from(inputs).map((input) => input.value);
    }

    window.openModal = openModal;
    window.deleteItem = deleteItem;
    window.updateItem = updateItem;

    searchBar.addEventListener("input", () => {
      const searchText = searchBar.value.toLowerCase();
      const filteredItems = itemsData.filter((item) =>
        item.nombre.toLowerCase().includes(searchText)
      );
      renderItems(filteredItems);
    });

    fetchItems();
  }
});
// Cerrar sesión
