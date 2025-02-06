const products = {
  "canaletas": {
    "americana": [
      "canaleta",
      "boqueta",
      "terminal",
      "soporte",
      "esquinero",
      "rinconero"
    ],
    "medioCanioDeQuince": [],
    "pecho_paloma": [],
    "siete_quince_diez": []
  },
  "babetas": {
    "p_amurar": ["calibre_30", "calibre_27"],
    "p_moladora": ["calibre_30", "calibre_27"],
    "sobreteja": ["calibre_30", "calibre_27"],
    "con_forma": ["t101", "sinusoidal"]
  },
  "caballetes": {
    "desarrollo_33cm": [],
    "desarrollo_40cm": [],
    "con_forma": [],
    "color": []
  },
  "conversas": {
    "desarrollo_33cm": [],
    "desarrollo_40cm": [],
    "con_division": []
  },
  "chapas": {
    "lisas": {
      "calibre_30": [],
      "calibre_28": [],
      "calibre_27": [],
      "calibre_25": [],
      "calibre_25_color": [],
      "calibre_22": []
    },
    "acanaladas": {
      "calibre_27_cincalum": [],
      "calibre_25_cincalum": [],
      "calibre_25_color": [],
      "plastica": ["blanca", "transparente"],
      "trapezoidal": []
    }
  },
  "canios": {
    "redondos": {
      "tres": [],
      "cuatro": [],
      "cinco": [],
      "seis": [],
      "siete": [],
      "ocho": [],
      "nueve": [],
      "diez": [],
      "once": [],
      "doce": [],
      "curvas": [],
      "grampas": []
    },
    "rectangular": {
      "canio_5x10": [],
      "grampas_5x10": [],
      "codo": ["cuarenta_y_cinco_grados", "noventa_grados"]
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.querySelector("#toggle-menu");
    const mobileMenu = document.querySelector(".navbar__mobile-menu");
    const movePage = document.querySelector("#move-page");
  
    const hideMenuResize = () => {
      mobileMenu.style.display = "none";
      movePage.classList.remove("shifted");
    };
  
    // Toggle dark mode 
    document.getElementById('dark-mode-toggle').addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
    }); 
  
    document.getElementById('dark-mode-toggle-mobile').addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
    }); 
  
    window.addEventListener("resize", hideMenuResize);
    window.addEventListener("load", hideMenuResize);

    toggleButton.addEventListener("click", () => {
      mobileMenu.style.display = mobileMenu.style.display === "none" || mobileMenu.style.display === "" ? "flex" : "none";
      mobileMenu.classList.toggle("open");
      movePage.classList.toggle("shifted");
    });

    console.log(products)

    // const container = document.getElementById('productos-container');
        
    //     Object.keys(products).forEach(category => {
    //         const categoryDiv = document.createElement('div');
    //         categoryDiv.classList.add('col-md-4', 'mb-4');
    //         categoryDiv.innerHTML = `
    //             <div class="card">
    //                 <img src="assets/productos/${category}.jpg" class="card-img-top" alt="${category}">
    //                 <div class="card-body">
    //                     <h5 class="card-title text-center">${category.charAt(0).toUpperCase() + category.slice(1)}</h5>
    //                     <ul class="list-group list-group-flush">
    //                         ${Object.keys(products[category]).map(sub => `<li class="list-group-item">${sub.replace(/_/g, ' ')}</li>`).join('')}
    //                     </ul>
    //                 </div>
    //             </div>`;
    //         container.appendChild(categoryDiv);
    //     });
    
});
