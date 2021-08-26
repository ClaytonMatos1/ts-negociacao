export class Negociacao {

    constructor(
        private _data: Date,
        public readonly quantidade: number,
        public readonly valor: number
    ) {}

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
}