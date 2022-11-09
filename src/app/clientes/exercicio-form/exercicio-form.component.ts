import {Component, OnInit} from '@angular/core';
import {Exercicio} from '../exercicio';
import {ExerciciosService} from '../../exercicios.service';
import {ActivatedRoute, Router} from '@angular/router';

declare var $: any;

@Component({
    selector: 'exercicio-form',
    templateUrl: './exercicio-form.component.html',
    styleUrls: ['./exercicio-form.component.css']
})
export class ExercicioFormComponent implements OnInit {
    exercicio: Exercicio;
    errors: String[];
    id = this.activatedRoute.snapshot.paramMap.get('id');

    constructor(
        private service: ExerciciosService,
        private activatedRoute: ActivatedRoute,
        private router: Router
    ) {
        this.exercicio = new Exercicio();
    }

    ngOnInit(): void {
        if (this.id) {
            this.service.getById(this.id)
                // tslint:disable-next-line:no-shadowed-variable
                .subscribe(response => this.exercicio = response,
                    error => this.exercicio = new Exercicio()
                )
        }
    }

    onSubmit() {
        if (this.id) {
            this.service.atualizar(this.exercicio).subscribe(() => {
                this.showNotificationSuccess('top', 'right', 3, 'Exercício atualizado com sucesso!');
                this.router.navigate(['/lista-exercicios']);
            }, errorResponse => {
                this.errors = errorResponse.error.errors;
                for (const error of this.errors) {
                    this.showNotificationError('top', 'right', error);
                }
            })
        } else if (!this.id) {
            this.service
                .salvar(this.exercicio).subscribe(() => {
                    this.showNotificationSuccess('top', 'right', 2, 'Exercício salvo com sucesso!');
                    // this.closeDialog();
                    this.router.navigate(['/lista-exercicios']);
                    // window.history.back();

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
}
