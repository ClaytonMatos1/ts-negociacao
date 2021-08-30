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
    @DomInjector('#data')
    private inputData: HTMLInputElement;
    @DomInjector('#quantidade')
    private inputQuantidade: HTMLInputElement;
    @DomInjector('#valor')
    private inputValor: HTMLInputElement;
    private negociacoes: Negociacoes = new Negociacoes();
    private negociacaoView: NegociacaoView = new NegociacaoView('#negociacaoView');
    private mensagemView: MensagemView = new MensagemView('#mensagemView');
    private negociacaoService: NegociacaoService = new NegociacaoService();

    constructor() {
        this.negociacaoView.update(this.negociacoes);

    }

    @Inspect
    @logarTempo(true)
    public adiciona(): void {
        const negociacao: Negociacao = Negociacao.criaDe(
            this.inputData.value,
            this.inputQuantidade.value,
            this.inputValor.value
        );
        if (!this.ehDiaUtil(negociacao.data)) {
            this.mensagemView.update('Apenas negociações em dia úteis são aceitas!');
            this.limparFormulario();
            return;
        }

        this.negociacoes.adiciona(negociacao);
        this.atualizaView();
        this.limparFormulario();
    }

    private ehDiaUtil(data: Date): boolean {
        return data.getDay() !== DiasDaSemana.DOMINGO && data.getDay() !== DiasDaSemana.SABADO;
    }

    private limparFormulario(): void {
        this.inputData.value = '';
        this.inputQuantidade.value = '1';
        this.inputValor.value = '0.01';

        this.inputData.focus();
    }

    private atualizaView(): void {
        this.negociacaoView.update(this.negociacoes);
        this.mensagemView.update('Negociação adicionada com sucesso!');
    }

    public importarDados(): void {
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
