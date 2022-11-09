import {Component, OnInit} from '@angular/core';
import {FichaItem} from '../fichaItem';
import {ActivatedRoute, Router} from '@angular/router';
import {FichasTreinoService} from '../../fichas-treino.service';
import {ExerciciosService} from '../../exercicios.service';
import {Aluno} from '../aluno';

declare var $: any;

@Component({
    selector: 'ficha-itens',
    templateUrl: './ficha-itens.component.html',
    styleUrls: ['./ficha-itens.component.css']
})


export class FichaItensComponent implements OnInit {
    id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    fichaId = Number(this.activatedRoute.snapshot.queryParamMap.get('fichaId'));
    fichaItems: FichaItem[] = [];
    itemSelecionado: FichaItem;
    errors: String[];

    constructor(
        private activatedRoute: ActivatedRoute,
        private fichaService: FichasTreinoService,
        private exercicioService: ExerciciosService,
        private router: Router
    ) {
    }

    ngOnInit(): void {
        this.fichaService.getFichaItensByFichaId(this.id)
            .subscribe(response => {
                this.fichaItems = response;
            });
    }

    preparaDelecao(item: FichaItem) {
        this.itemSelecionado = item;
    }

    deletarItem() {
        this.fichaService.deletarFichaItem(this.itemSelecionado)
            .subscribe(response => {
                    this.showNotificationSuccess('top', 'right', 4, 'Contato deletado com sucesso!');
                    location.reload();
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
