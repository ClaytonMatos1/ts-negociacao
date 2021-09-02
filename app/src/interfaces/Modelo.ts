import { Comparavel } from "./Comparavel.js";
import { Imprimivel } from "./Imprimivel.js";

export interface Modelo<T> extends Imprimivel, Comparavel<T> {

}
