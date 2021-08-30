import { Negociacao } from "../models/Negociacao.js";
export class NegociacaoService {
    obterNegociacoesDia() {
        return fetch('http://localhost:8080/dados')
            .then(res => res.json())
            .then((dados) => dados.map(dado => new Negociacao(new Date, dado.vezes, dado.montante)));
    }
}
