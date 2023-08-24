let titulo = document.getElementsByTagName ("h5")
titulo[0].innerText = "Fundacion Pequeños Heroes";

const formulario = document.getElementById("formulario");
  

formulario.addEventListener("submit", function(evento){ 
  evento.preventDefault();
  const nombre = document.getElementsByClassName("nombre")[0].value;
  const apellido = document.getElementsByClassName("apellido")[0].value;
  const direccion = document.getElementsByClassName("direccion")[0].value;
  const ciudad = document.getElementsByClassName("ciudad")[0].value;
  const campaña = document.getElementsByClassName("campaña")[0].value;
  const monto = document.getElementsByClassName("monto")[0].value;
  
  const datosFormulario = {
    nombre: nombre,
    apellido: apellido,
    direccion: direccion,
    ciudad: ciudad,
    campaña: campaña,
    monto: monto,
  };

  localStorage.setItem('informacion del donante', JSON.stringify(datosFormulario));

  formulario.reset();
});

document.getElementById("Toasty").addEventListener("click", function (event) {
  event.preventDefault(); 

  const opcionSeleccionada = document.getElementById("inputState").value;
  let mensaje = "";
  let link = "";

  const campañas = [
    {
      nombre: "Nutricion",
      mensaje: "Haz click para conocer la campaña de Nutricion",
      enlace: "pages/Nutricion.html"
    },
    {
      nombre: "Educacion",
      mensaje: "Haz click para conocer la campaña de Educacion",
      enlace: "pages/Educacion.html"
    },
    {
      nombre: "Salud",
      mensaje: "Haz click para conocer la campaña de Salud",
      enlace: "pages/Salud.html"
    }
  ];
  
  const campañaSeleccionada = campañas.find(campaña => campaña.nombre === opcionSeleccionada);
  
  if (campañaSeleccionada) {
    mensaje = campañaSeleccionada.mensaje;
    link = campañaSeleccionada.enlace;
  } else {
    mensaje = "Selecciona una opción válida";
  }
  

  Toastify({
    text: mensaje,
    duration: 5000,
    destination: link
  }).showToast();
});

function cargarCampañas() {
  return fetch('campañas.json') 
    .then(response => {
      if (!response.ok) {
        throw new Error('Error al cargar las campañas');
      }
      return response.json();
    })
    .catch(error => {
      console.error('Error:', error);
    });
}


cargarCampañas()
  .then(campañas => {
    console.log(campañas);
  });
