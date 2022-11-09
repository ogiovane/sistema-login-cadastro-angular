import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FichasTreinoService} from '../../fichas-treino.service';
import {Exercicio} from '../exercicio';
import {FichaItem} from '../fichaItem';
import {ExerciciosService} from '../../exercicios.service';
import {NgForm} from '@angular/forms';
import {Observable} from 'rxjs';

declare var $: any;

@Component({
    selector: 'ficha-form',
    templateUrl: './ficha-form.component.html',
    styleUrls: ['./ficha-form.component.css']
})
export class FichaFormComponent implements OnInit {
    id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    idItem = Number(this.activatedRoute.snapshot.paramMap.get('itemid'));
    fichaItems: FichaItem[] = [];
    fichaItem: FichaItem;
    itemEdicao: Observable<FichaItem>;
    exercicios: Exercicio[] = [];
    errors: String[];
    itemSelecionado: FichaItem;
    @ViewChild('f') editFichaForm: NgForm

    constructor(
        private activatedRoute: ActivatedRoute,
        private fichaService: FichasTreinoService,
        private exercicioService: ExerciciosService,
        private router: Router,
    ) {
        this.fichaItem = new FichaItem();
        this.fichaItem.exercicio = {id: 0};
        this.fichaItem.ficha = {id: this.id};
    }

    ngOnInit(): void {
        this.exercicioService.getAll()
            .subscribe(response => {
                this.exercicios = response;
            });

        this.fichaService.getFichaItensByFichaId(this.id)
            .subscribe(response => {
                this.fichaItems = response;
            });

        if (this.idItem != 0) {
            this.fichaService.getItemById(this.idItem)
                .subscribe(response => {
                        this.fichaItem = response;
                    },
                    errorResponse => {
                        // console.log(errorResponse)
                        this.showNotificationError('top', 'right', 'Ficha sem exercícios adicionados');
                    });
        }


    }


    reset() {
        this.editFichaForm.reset();
    }

    onSubmit() {
        if (this.idItem != 0) {
            this.fichaService.atualizar(this.fichaItem).subscribe(() => {
                this.showNotificationSuccess('top', 'right', 3, 'Exercício atualizado com sucesso!');
                this.editFichaForm.reset();
                this.ngOnInit();
                this.router.navigate(['/ficha-form/' + this.id]);
                // window.history.back();
                this.ngOnInit();
            }, errorResponse => {
                this.errors = errorResponse.error.errors;
                for (const error of this.errors) {
                    this.showNotificationError('top', 'right', error);
                }
            })
        } else if (this.id) {
            this.fichaService
                .salvarItemFicha(this.id, this.fichaItem).subscribe(() => {
                    this.showNotificationSuccess('top', 'right', 2, 'Exercício adicionado à ficha!');
                    this.editFichaForm.reset();
                    this.ngOnInit();
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

    preparaDelecao(item: FichaItem) {
        this.itemSelecionado = item;
    }

    deletarItem() {
        this.fichaService.deletarFichaItem(this.itemSelecionado)
            .subscribe(response => {
                    this.showNotificationSuccess('top', 'right', 4, 'Item deletado com sucesso!');
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

    cancelar() {
        this.editFichaForm.reset();
        this.idItem = 0;
        this.router.navigate(['/ficha-form/' + this.id]);
    }
}
