import { Imprimivel } from "../interfaces/Imprimivel.js";

export function imprimir(...objetos: Array<Imprimivel>) {
    for (const objeto of objetos) {
        console.log(objeto.paraTexto());
    }
}