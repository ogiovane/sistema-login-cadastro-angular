import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {RotinasService} from '../../rotinas.service';
import {Rotina} from '../rotina';

declare var $: any;

@Component({
    selector: 'fichas-form',
    templateUrl: './rotinas-form.component.html',
    styleUrls: ['./rotinas-form.component.css']
})
export class RotinasFormComponent implements OnInit {
    rotina: Rotina;
    id = this.activatedRoute.snapshot.queryParamMap.get('id');
    rotinaId = this.activatedRoute.snapshot.queryParamMap.get('idRotina');
    errors: String[];


    constructor(
        private activatedRoute: ActivatedRoute,
        private rotinaService: RotinasService,
        private router: Router,
    ) {
        this.rotina = new Rotina(this.id);
    }

    ngOnInit(): void {
        if (this.rotinaId) {
            this.rotinaService.getRotinaById(this.rotinaId)
                .subscribe(response => {
                        this.rotina = response;
                        console.log(this.rotina)
                    },
                    error => {
                        console.log('OCORREU UM ERRO');
                        // this.rotina = new Rotina(this.id)
                    }
                )
        }
    }

    onSubmit() {
        if (this.rotinaId) {
            this.rotinaService.atualizar(this.rotina)
                .subscribe(response => {
                        this.showNotificationSuccess('top', 'right', 3, 'Rotina atualizada com sucesso!');
                        this.router.navigate(['/rotinas/' + this.id]);
                    },
                    errorResponse => {
                        this.errors = errorResponse.error.errors;
                        for (const error of this.errors) {
                            this.showNotificationError('top', 'right', error);
                        }
                    })
        } else if (!this.rotinaId) {
            this.rotinaService
                .salvar(this.rotina).subscribe(response => {
                    this.showNotificationSuccess('top', 'right', 2, 'Rotina salva com sucesso!');
                    this.router.navigate(['rotinas/' + this.id]);

                },
                errorResponse => {
                    this.errors = errorResponse.error.errors;
                    for (const error of this.errors) {
                        this.showNotificationError('top', 'right', error);
                    }
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

    back(): void {
        window.history.back();
    }
}
