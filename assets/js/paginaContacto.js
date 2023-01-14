/**
 * Mostrar ventana de SweetAlert al enviar mensaje
 */
$('#miFormulario').on('submit', function (e) {
    e.preventDefault();
    Swal.fire({
        title: '¡Mensaje enviado correctamente!',
        text: 'Muchas gracias.',
        icon: 'success',
        customClass: {
        confirmButton: 'btn btn-primary'
        },
        buttonsStyling: false
    })
    return true;
});