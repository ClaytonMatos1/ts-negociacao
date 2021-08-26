export class View {
    constructor(seletor, escapar) {
        this.escapar = false;
        if (escapar) {
            this.escapar = escapar;
        }
        const elemento = document.querySelector(seletor);
        if (elemento) {
            this.elemento = elemento;
        }
        else {
            throw new Error(`O seletor: ${seletor} não está disponível no DOM.`);
        }
    }
    update(model) {
        let template = this.template(model);
        if (this.escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this.elemento.innerHTML = template;
    }
}
