document.addEventListener("DOMContentLoaded", async () => {
    // const fetchUrl = "http://localhost:8000";
    const fetchUrl = "https://worthwhile-max-darshed-c84f137f.koyeb.app"
  
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
  
      const defaultLink = document.querySelector('.nav-link[data-target="excel"]');
      defaultLink.classList.add("active");
      document.getElementById("excel").classList.add("active");
      document.getElementById("excel").style.display = "block";
    }
  
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
          window.location.href = '/index.html'; // Redirigir a la página de inicio de sesión
      });
  
    });
    // Cerrar sesión
  