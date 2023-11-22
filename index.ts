import { Vista } from "./Vista";
import { Modelo } from "./Modelo";
import { Presentador } from "./Presentador";

//Creacion de objetos para usar la aplicacion

const modelo = new Modelo();
const vista = new Vista();
const presenter = new Presentador(vista, modelo);