import { Presentador } from "./Presentador";

export class Vista {
  private presentador!: Presentador;
  private readline: any;

  constructor() {
    this.readline = require('readline').createInterface({ //Crea la interfaz de la pregunta
      input: process.stdin,
      output: process.stdout
    });
  }

  agregarPresentador(presenter: Presentador) {
    this.presentador = presenter;
  }

  mostrarResultado(result: number) {
    console.log(`El resultado es: ${result}`);
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
  }

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
}