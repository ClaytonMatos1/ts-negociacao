import { Modelo } from "../interfaces/Modelo.js";

export class Negociacao implements Modelo<Negociacao> {

    constructor(
        private _data: Date,
        public readonly quantidade: number,
        public readonly valor: number
    ) { }

    get data(): Date {
        const data = new Date(this._data.getTime());
        return data;
    }

    get volume(): number {
        return this.quantidade * this.valor;
    }

    public static criaDe(data: string, quantidade: string, valor: string): Negociacao {
        const exp = /-/g;
        return new Negociacao(
            new Date(data.replace(exp, ',')),
            parseInt(quantidade),
            parseFloat(valor)
        );
    }

    public paraTexto(): string {
        return `
            Data: ${this.data},
            Quantidade: ${this.quantidade},
            Valor: ${this.valor}
        `;
    }

    public ehIgual(negociacao: Negociacao): boolean {
        return this.data.getDate() === negociacao.data.getDate()
            && this.data.getMonth() === negociacao.data.getMonth()
            && this.data.getFullYear() === negociacao.data.getFullYear();
    }
}