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
    }).then((result) => { 
        console.log(result);
        if (result.isConfirmed) { 
            window.location.href = 'formulario.html';
          }});
        }
    )