import { NegociacaoController } from "./controllers/NegociacaoController.js";
const negociacaoController = new NegociacaoController();
const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', event => {
        event.preventDefault();
        negociacaoController.adiciona();
    });
}
else {
    throw new Error('Não foi possível inicializar a aplicação, verifique se o html tem o form.');
}
const botaoImportar = document.querySelector('#botao-importar');
if (botaoImportar) {
    botaoImportar.addEventListener('click', (ev) => {
        ev.preventDefault();
        negociacaoController.importarDados();
    });
}
else {
    throw new Error('Botão de importar não está disponível, verifique o html.');
}
