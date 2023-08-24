
const donantes = [
    { nombre: "Carlos Garcia", edad: 30, email: "carlos.garcia@gmail.com" },
    { nombre: "Carlos Solari", edad: 25, email: "carlos.solari@hotmail.com" },
    { nombre: "Gustavo Calamaro", edad: 40, email: "gustavo.calamaro@outlook.com" }
  ];
  
  function generarListaDonantes() {
    const listaDonantes = document.getElementById("lista-donantes");
  
    donantes.forEach(donante => {
      const donanteItem = document.createElement("li");
      donanteItem.textContent = donante.nombre;
      donanteItem.classList.add("donante-item");
      
      
      donanteItem.addEventListener("click", () => {
        mostrarDetallesDonante(donante);
      });
  
      listaDonantes.appendChild(donanteItem);
    });
  }
  
  function mostrarDetallesDonante(donante) {
    const detallesContainer = document.getElementById("detalles-container");
    detallesContainer.innerHTML = `
      <h3>Detalles de ${donante.nombre}</h3>
      <p>Edad: ${donante.edad}</p>
      <p>Email: ${donante.email}</p>
    `;
  }
  
  generarListaDonantes();
  