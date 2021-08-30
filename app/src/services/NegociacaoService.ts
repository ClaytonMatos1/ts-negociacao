import { NegociacaoDia } from "../interfaces/NegociacaoDia.js";
import { Negociacao } from "../models/Negociacao.js";

export class NegociacaoService {
    public obterNegociacoesDia(): Promise<Negociacao[]> {
        return fetch('http://localhost:8080/dados')
            .then(res => res.json())
            .then((dados: NegociacaoDia[]) => dados.map(dado => new Negociacao(new Date, dado.vezes, dado.montante)));
    }
}