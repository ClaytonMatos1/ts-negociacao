var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { DomInjector } from "../decorators/DomInjector.js";
import { Inspect } from "../decorators/Inspect.js";
import { logarTempo } from "../decorators/LogarTempo.js";
import { DiasDaSemana } from "../enums/DiasDaSemana.js";
import { Negociacao } from "../models/Negociacao.js";
import { Negociacoes } from "../models/Negociacoes.js";
import { NegociacaoService } from "../services/NegociacaoService.js";
import { MensagemView } from "../views/MensagemView.js";
import { NegociacaoView } from "../views/NegociacaoView.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacaoView = new NegociacaoView('#negociacaoView');
        this.mensagemView = new MensagemView('#mensagemView');
        this.negociacaoService = new NegociacaoService();
        this.negociacaoView.update(this.negociacoes);
    }
    adiciona() {
        const negociacao = Negociacao.criaDe(this.inputData.value, this.inputQuantidade.value, this.inputValor.value);
        if (!this.ehDiaUtil(negociacao.data)) {
            this.mensagemView.update('Apenas negociações em dia úteis são aceitas!');
            this.limparFormulario();
            return;
        }
        this.negociacoes.adiciona(negociacao);
        this.atualizaView();
        this.limparFormulario();
    }
    ehDiaUtil(data) {
        return data.getDay() !== DiasDaSemana.DOMINGO && data.getDay() !== DiasDaSemana.SABADO;
    }
    limparFormulario() {
        this.inputData.value = '';
        this.inputQuantidade.value = '1';
        this.inputValor.value = '0.01';
        this.inputData.focus();
    }
    atualizaView() {
        this.negociacaoView.update(this.negociacoes);
        this.mensagemView.update('Negociação adicionada com sucesso!');
    }
    importarDados() {
        console.log('importando dados');
        this.negociacaoService.obterNegociacoesDia()
            .then(negociacoesHoje => {
            for (let negociacao of negociacoesHoje) {
                this.negociacoes.adiciona(negociacao);
            }
            this.negociacaoView.update(this.negociacoes);
        });
    }
}
__decorate([
    DomInjector('#data')
], NegociacaoController.prototype, "inputData", void 0);
__decorate([
    DomInjector('#quantidade')
], NegociacaoController.prototype, "inputQuantidade", void 0);
__decorate([
    DomInjector('#valor')
], NegociacaoController.prototype, "inputValor", void 0);
__decorate([
    Inspect,
    logarTempo(true)
], NegociacaoController.prototype, "adiciona", null);
