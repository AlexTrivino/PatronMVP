import { Vista } from "./Vista";
import { Modelo } from "./Modelo";

export class Presentador {
  private vista: Vista;
  private modelo: Modelo;

  constructor(vista: Vista, modelo: Modelo) {
    this.vista = vista;
    this.modelo = modelo;
    this.vista.agregarPresentador(this);
    this.vista.solicitarConversion();
  }

  gestionarConversion(temperatura: number, solicitud: string) {
    let resultado: number | undefined;

    if (solicitud === 'CelsiusAFahrenheit') {
      resultado = this.modelo.convertirCelsiusAFahrenheit(temperatura);
    } else if (solicitud === 'FahrenheitACelsius') {
      resultado = this.modelo.convertirFahrenheitACelsius(temperatura);
    } else {
      console.log('Dirección de conversión no válida');
      return;
    }

    if (resultado !== undefined) {
      this.vista.mostrarResultado(resultado);
    } else {
      console.log('El resultado de la conversión es indefinido');
    }
  }
}