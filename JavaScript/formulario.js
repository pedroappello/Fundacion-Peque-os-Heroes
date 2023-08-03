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

  switch (opcionSeleccionada) {
    case "Nutricion":
      mensaje = "Haz click para conocer la campaña de Nutricion";
      link = "pages/Nutricion.html"
      break;
    case "Educacion":
      mensaje = "Haz click para conocer la campaña de Educacion";
      link = "pages/Educacion.html"
      break;
    case "Salud":
      mensaje = "Haz click para conocer la campaña de Salud";
      link = "pages/Salud.html"
      break;
    default:
      mensaje = "Selecciona una opción válida";
      break;
  }

  Toastify({
    text: mensaje,
    duration: 5000,
    destination: link
  }).showToast();
});

