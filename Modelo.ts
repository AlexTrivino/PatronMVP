export class Modelo {

// Funciones de el cambio de Celcius a Fahrenheit y viceversa

  convertirCelsiusAFahrenheit(celsius: number): number {
    return (celsius * 9/5) + 32;
  }

  convertirFahrenheitACelsius(fahrenheit: number): number {
    return (fahrenheit - 32) * 5/9;
  }
}