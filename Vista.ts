import { Presentador } from "./Presentador";

export class Vista {
  private presentador!: Presentador;
  private readline: any; //Atributo para hacer la entrada de datos con pregunta

  constructor() {
    this.readline = require('readline').createInterface({ //Crea la interfaz de la pregunta
      input: process.stdin,
      output: process.stdout
    });
  }

  agregarPresentador(presenter: Presentador) { // Llama al presentador
    this.presentador = presenter;
  }

  mostrarResultado(result: number) {
    console.log(`El resultado es: ${result}`); //Muestra el resultado
    this.readline.close();
  }

  solicitarConversion() {
    this.readline.question(
      '¿Qué acción desea realizar? (Escriba "1" para convertir de Celsius a Fahrenheit o "2" para convertir de Fahrenheit a Celsius): ',
      (solicitud: string) => {
        if (solicitud === '1') {
          this.ingresoDatosConversion('CelsiusAFahrenheit');
        } else if (solicitud === '2') {
          this.ingresoDatosConversion('FahrenheitACelsius');
        } else {
          console.log('Acción no válida. Por favor, introduzca "1" o "2".');
          this.solicitarConversion();
        }
      }
    );
  } // Realiza la solicitud de datos y le da una equivalencia en string dependiendo de lo ingresado para luego
    // usarlo en el metodo gestionar conversion en el presentador

  ingresoDatosConversion(solicitud: string) {
    this.readline.question('Ingrese la temperatura: ', (temperatura: string) => {
      const parsedTemperatura = parseFloat(temperatura);
      if (isNaN(parsedTemperatura)) {
        console.log('Por favor, introduzca un número válido para la temperatura.');
        this.ingresoDatosConversion(solicitud);
        return;
      }
      this.presentador.gestionarConversion(parsedTemperatura, solicitud);
    });
  }
} // Este metodo solicita que se ingrese un valor y si no es valido lo menciona con un mensaje