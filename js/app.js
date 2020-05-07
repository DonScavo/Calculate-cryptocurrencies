const cotizador = new API('5bbd2b4ffabd9f5db1014a1c881dfc3f7252e3da9574b1e3d58ca100ab6c358d');
const ui = new Interfaz();

cotizador.obtenerCoinsApi();



const formulario = document.getElementById('formulario');


formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const monedaSelect = document.getElementById('moneda');
    const monedaSeleccionada = monedaSelect.options[monedaSelect.selectedIndex].value;


    const criptoSelect = document.getElementById('criptomoneda');
    const criptoSeleccionada = criptoSelect.options[criptoSelect.selectedIndex].value;


    if (monedaSeleccionada === '' || criptoSeleccionada === '') {
        ui.mostrarMensaje('Ambos campos son obligatorios', 'alert bg-danger text-center');

    } else {
        cotizador.obtenerValores(monedaSeleccionada, criptoSeleccionada)
            .then(data => {
                ui.mostrarResultado(data.fullData.RAW, monedaSeleccionada, criptoSeleccionada);
         
            })
            .catch((error) => console.log(error))
    }


});