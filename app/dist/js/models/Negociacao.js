export class Negociacao {
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
    static criaDe(data, quantidade, valor) {
        const exp = /-/g;
        return new Negociacao(new Date(data.replace(exp, ',')), parseInt(quantidade), parseFloat(valor));
    }
}
