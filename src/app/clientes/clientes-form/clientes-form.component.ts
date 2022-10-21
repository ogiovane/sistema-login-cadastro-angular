import {Component, OnInit} from '@angular/core';
import {Cliente} from '../cliente';
import {ClientesService} from '../../clientes.service';
import {MatDialog} from '@angular/material/dialog';
import {of} from 'rxjs';
import {ActivatedRoute, Route, Router} from '@angular/router';

declare var $: any;

@Component({
    selector: 'app-clientes-form',
    templateUrl: './clientes-form.component.html',
    styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent implements OnInit {
    cliente: Cliente;
    errors: String[];
    id = this.activatedRoute.snapshot.paramMap.get('id');

    constructor(
        private service: ClientesService,
        private dialogRef: MatDialog,
        private activatedRoute: ActivatedRoute,
        private router: Router) {
        this.cliente = new Cliente();
    }

    ngOnInit(): void {
        // this.id = this.activatedRoute.snapshot.paramMap.get('id');
        // id = params;
        if (this.id) {
            this.service.getClienteById(this.id)
                .subscribe(response => this.cliente = response,
                    error => this.cliente = new Cliente()
                )
        }

    }

    closeDialog() {
        this.dialogRef.closeAll();
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

    onSubmit() {
        if (this.id) {
            this.service.atualizar(this.cliente)
                .subscribe(response => {
                    this.showNotificationSuccess('top', 'right', 3, 'Contato atualizado com sucesso!');
                    this.closeDialog();
                    this.router.navigate(['/lista-clientes']);
                },
                    errorResponse => {
                        this.errors = errorResponse.error.errors;
                        for (const error of this.errors) {
                            this.showNotificationError('top', 'right', error);
                        }
                    })
        } else if (!this.id) {
            this.service
                .salvar(this.cliente).subscribe(response => {
                    this.showNotificationSuccess('top', 'right', 2, 'Contato salvo com sucesso!');
                    this.closeDialog();
                    window.location.reload();
                    this.router.navigate(['lista-clientes']);

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


}
