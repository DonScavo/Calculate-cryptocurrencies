class Interfaz {

    constructor() {
        this.init();
    }

    init() {
        this.construirSelect();
    }

    construirSelect() {
        cotizador.obtenerCoinsApi()
            .then(coins => {

                const selectCripto = document.getElementById('criptomoneda');

                for (const [key, value] of Object.entries(coins.coins.Data)) {

                    const option = document.createElement('option');
                    option.value = value.Symbol;
                    option.appendChild(document.createTextNode(value.CoinName));
                    selectCripto.appendChild(option);
                }
            })
            .catch(error => console.log(error))

    }


    mostrarMensaje(mensaje, classes) {
        // Creamos el div
        const div = document.createElement('div');
        // Agrega classes al div
        div.className = classes;
        // Agrega el div al elemento y crea el texto
        div.appendChild(document.createTextNode(mensaje));

        const divMensaje = document.querySelector('.mensajes');
        divMensaje.appendChild(div);

        setTimeout(() => {
            document.querySelector('.mensajes div').remove();
        }, 2000);

    }

    mostrarResultado(resultado, moneda, crypto) {

        const resultadoAnterior = document.querySelector('#resultado > div');

        if (resultadoAnterior) {
            resultadoAnterior.remove();
        }

        const datosMoneda = resultado[crypto][moneda];

        console.log(datosMoneda)
       // let price = datosMoneda.PRICE.toFixed(2);
        let actualización = new Date(datosMoneda.LASTUPDATE * 1000).toLocaleDateString('es-PE');

        let template = `
        <div class="card bg-warning">
            <div class="card-body text-light">
                <h2 class="card-title">Resultado: </h2>
                <p>El precio de ${datosMoneda.FROMSYMBOL} a moneda ${datosMoneda.TOSYMBOL} es de ${datosMoneda.PRICE.toFixed(2)} </p>
                 <p>Variación del último día: ${datosMoneda.CHANGEPCTDAY.toFixed(2)}%</p>
                <p>Última actualización: ${actualización}</p>
            </div>
        </div>
        `;

        this.mostrarOcoultarSpinner('block');
        setTimeout(() => {
            document.getElementById('resultado').innerHTML = template;
            this.mostrarOcoultarSpinner('none');
        }, 2000)
    }

    mostrarOcoultarSpinner(view) {
        const spinner = document.querySelector('.contenido-spinner');
        spinner.style.display = view;
    }
}