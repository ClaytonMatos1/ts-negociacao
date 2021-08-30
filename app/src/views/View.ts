import { Inspect } from "../decorators/Inspect.js";
import { logarTempo } from "../decorators/LogarTempo.js";

export abstract class View<T> {
    protected elemento: HTMLElement;
    private escapar: boolean = false;

    constructor(seletor: string) {
        const elemento = document.querySelector(seletor);
        if (elemento) {
            this.elemento = elemento as HTMLElement;
        } else {
            throw new Error(`O seletor: ${seletor} não está disponível no DOM.`);
        }
    }

    protected abstract template(model: T): string;

    @logarTempo()
    @Inspect
    public update(model: T): void {
        let template = this.template(model);
        this.elemento.innerHTML = template;
    }
}
