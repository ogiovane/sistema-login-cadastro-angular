import {Component, OnInit} from '@angular/core';
import {Exercicio} from '../exercicio';
import {ExerciciosService} from '../../exercicios.service';

declare var $: any;

@Component({
  selector: 'lista-exercicios',
  templateUrl: './lista-exercicios.component.html',
  styleUrls: ['./lista-exercicios.component.css']
})
export class ListaExerciciosComponent implements OnInit {
  exercicios: Exercicio[] = [];
  exercicioSelecionado: Exercicio;
  errors: String[];

  constructor(
      private exerciciosService: ExerciciosService,
  ) { }

  ngOnInit(): void {
    this.exerciciosService.getAll()
        .subscribe(response => {
          this.exercicios = response;
        });
  }


  preparaDelecao(exercicio: Exercicio) {
    this.exercicioSelecionado = exercicio;
  }

  deletarExercicio() {
    this.exerciciosService.deletar(this.exercicioSelecionado)
        .subscribe(() => {
              this.showNotificationSuccess('top', 'right', 4, 'Exercício deletado com sucesso!');
              this.ngOnInit();
              // location.reload();
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
