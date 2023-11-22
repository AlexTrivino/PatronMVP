import { Vista } from "./Vista";
import { Modelo } from "./Modelo";

export class Presentador {
  //Atributos (El presentador es el unico que se conecta con las otras 2 capas)
  private vista: Vista;
  private modelo: Modelo;

  constructor(vista: Vista, modelo: Modelo) {
    this.vista = vista;
    this.modelo = modelo;
    this.vista.agregarPresentador(this); // Llama al metodo agregar presentador desde vista
    this.vista.solicitarConversion(); // LLama al metodo solicitar conversion desde vista
    //Estas 2 ultimas lineas hacen la conexion de la vista con el presentador
  }

  gestionarConversion(temperatura: number, solicitud: string) {
    let resultado: number | undefined; //Define el resultado como numero o indefinido ya que se crea antes de darle un valor

    if (solicitud === 'CelsiusAFahrenheit') {
      resultado = this.modelo.convertirCelsiusAFahrenheit(temperatura);
    } else if (solicitud === 'FahrenheitACelsius') {
      resultado = this.modelo.convertirFahrenheitACelsius(temperatura);
    } else {
      console.log('Dirección de conversión no válida');
      return;
    }
    //Compara los valores recibidos del usuario con la variable solicitud

    if (resultado !== undefined) {
      this.vista.mostrarResultado(resultado);
    } else {
      console.log('El resultado de la conversión es indefinido');
    }
    //Nos devuelve el resultado guardado en la variable resultado
  }
}