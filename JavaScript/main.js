let titulo = document.getElementsByTagName ("h5")
titulo[0].innerText = "Fundacion Pequeños Heroes";


document.getElementById("conAcciones").addEventListener('click', () => {
    const mensaje = document.getElementById("mensaje");
    Swal.fire({
        title: 'Estás seguro de donar?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, seguro',
        cancelButtonText: 'No, no quiero'
    }).then((result) => { // Ejecuta una función después de que el usuario haga clic en un botón
        /**.then() se utiliza con promesas para adjuntar una función de devolución de llamada (callback) 
         * que se ejecuta cuando la promesa fue exitosa. */
        console.log(result);
        if (result.isConfirmed) { 
            window.location.href = 'formulario.html';
          }});
        }
    )