import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FichasTreinoService} from '../../fichas-treino.service';
import {Ficha} from '../ficha';

declare var $: any;

@Component({
    selector: 'exercicios-form',
    templateUrl: './treinos-form.component.html',
    styleUrls: ['./treinos-form.component.css']
})
export class TreinosFormComponent implements OnInit {
    idRotina = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    idFicha = Number(this.activatedRoute.snapshot.queryParamMap.get('idFicha'));

    fichaTreino: Ficha;
    fichas: Ficha[] = [];
    errors: String[];

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private fichaTreinoService: FichasTreinoService,
    ) {
        this.fichaTreino = new Ficha(this.idRotina);
    }

    ngOnInit(): void {
        if (this.idRotina && this.idFicha != 0) {
            this.fichaTreinoService.getFichaPorId(this.idFicha)
                .subscribe(response => this.fichaTreino = response,
                    error => this.fichaTreino = new Ficha(this.idFicha)
                )
        }
    }

    onSubmit() {
        if (this.idFicha != 0) {
            this.fichaTreinoService.atualizarFicha(this.fichaTreino)
                .subscribe(response => {
                        this.showNotificationSuccess('top', 'right', 3, 'Rotina atualizada com sucesso!');
                        this.router.navigate(['/lista-fichas/' + this.idRotina]);
                        // window.history.back();
                    },
                    errorResponse => {
                        this.errors = errorResponse.error.errors;
                        for (const error of this.errors) {
                            this.showNotificationError('top', 'right', error);
                        }
                    })
        } else if (this.idFicha == 0) {
            this.fichaTreinoService
                .salvar(this.fichaTreino).subscribe(response => {
                    this.showNotificationSuccess('top', 'right', 2, 'Nova ficha salva com sucesso!');
                    window.history.back();

                },
                errorResponse => {
                    // console.log(errorResponse)
                    this.showNotificationError('top', 'right', 'Nº de seq. não pode ser repetida!');
                }
            )
        }
    };

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

    back() {
        window.history.back();
    }
}
