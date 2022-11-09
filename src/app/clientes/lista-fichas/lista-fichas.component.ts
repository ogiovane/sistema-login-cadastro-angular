import {Component, OnInit} from '@angular/core';
import {Ficha} from '../ficha';
import {ActivatedRoute} from '@angular/router';
import {FichasTreinoService} from '../../fichas-treino.service';

declare var $: any;

@Component({
    selector: 'lista-fichas',
    templateUrl: './lista-fichas.component.html',
    styleUrls: ['./lista-fichas.component.css']
})
export class ListaFichasComponent implements OnInit {
    fichas: Ficha[] = [];
    idRotina = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    errors: String[];
    fichaSelecionada: Ficha;


    constructor(
        private fichasTreinoService: FichasTreinoService,
        private activatedRoute: ActivatedRoute,
    ) {
    }

    ngOnInit(): void {
        this.fichasTreinoService.getFichasByRotina(this.idRotina)
            .subscribe(response => {
                this.fichas = response;
            });
    }

    preparaDelecao(ficha: Ficha) {
        this.fichaSelecionada = ficha;
    }

    deletarFicha() {
        this.fichasTreinoService.deletar(this.fichaSelecionada)
            .subscribe(response => {
                    this.showNotificationSuccess('top', 'right', 4, 'Ficha deletada com sucesso!');
                    // location.reload();
                    this.ngOnInit();
                },
                errorResponse => {
                    this.errors = errorResponse.error.errors;
                    for (const error of this.errors) {
                        this.showNotificationError('top', 'right', error);
                    }
                });
    }

    showNotificationSuccess(from, align, color, alertMessage) {
        const type = ['', 'info', 'success', 'warning', 'danger'];

        // const color = 2;

        $.notify({
            icon: 'notifications',
            message: alertMessage,

        }, {
            type: type[color],
            timer: 4000,
            placement: {
                from: from,
                align: align
            },
            template: '<div data-notify="container" class="col-xl-2 col-lg-2 col-8 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
                '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
                '<i class="material-icons" data-notify="icon">done</i> ' +
                '<span data-notify="title">{1}</span> ' +
                '<span data-notify="message">{2}</span>' +
                '<div class="progress" data-notify="progressbar">' +
                '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
                '</div>' +
                '<a href="{3}" target="{4}" data-notify="url"></a>' +
                '</div>'
        });
    }

    showNotificationError(from, align, alertMessage) {
        const type = ['', 'info', 'success', 'warning', 'danger'];

        const color = 4;

        $.notify({
            icon: 'notifications',
            message: alertMessage,

        }, {
            type: type[color],
            timer: 4000,
            placement: {
                from: from,
                align: align
            },
            template: '<div data-notify="container" class="col-xl-2 col-lg-2 col-8 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
                '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
                '<i class="material-icons" data-notify="icon">warning</i> ' +
                '<span data-notify="title">{1}</span> ' +
                '<span data-notify="message">{2}</span>' +
                '<div class="progress" data-notify="progressbar">' +
                '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
                '</div>' +
                '<a href="{3}" target="{4}" data-notify="url"></a>' +
                '</div>'
        });
    }
}

