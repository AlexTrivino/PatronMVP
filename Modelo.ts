export class Modelo {
  convertirCelsiusAFahrenheit(celsius: number): number {
    return (celsius * 9/5) + 32;
  }

  convertirFahrenheitACelsius(fahrenheit: number): number {
    return (fahrenheit - 32) * 5/9;
  }
}