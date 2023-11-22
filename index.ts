import { Vista } from "./Vista";
import { Modelo } from "./Modelo";
import { Presentador } from "./Presentador";

const modelo = new Modelo();
const vista = new Vista();
const presenter = new Presentador(vista, modelo);