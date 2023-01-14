/**
 * Mostrar ventana de SweetAlert al confirmar cita
 */
$('#miFormulario').on('submit', function (e) {
    e.preventDefault();
    Swal.fire({
        title: '¡Reserva realizada!',
        text: 'En breves recibirá una confirmación en su teléfono móvil.',
        icon: 'success',
        customClass: {
        confirmButton: 'btn btn-primary'
        },
        buttonsStyling: false
    })
    return true;
});