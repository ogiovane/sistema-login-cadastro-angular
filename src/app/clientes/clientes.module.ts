import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesFormComponent } from './clientes-form/clientes-form.component';
import { ListaClientesComponent } from './lista-clientes/lista-clientes.component';
import {MatDialogModule} from '@angular/material/dialog';
import {NgxMaskModule} from 'ngx-mask';
import {FormsModule} from '@angular/forms';
import {RouterLink} from '@angular/router';
import { RotinasComponent } from './lista-rotinas/rotinas.component';
import { RotinasFormComponent } from './rotinas-form/rotinas-form.component';
import { TreinosFormComponent } from './treinos-form/treinos-form.component';
import { ExercicioFormComponent } from './exercicio-form/exercicio-form.component';
import { ListaFichasComponent } from './lista-fichas/lista-fichas.component';
import { ListaExerciciosComponent } from './lista-exercicios/lista-exercicios.component';
import { FichaFormComponent } from './ficha-form/ficha-form.component';
import { FichaItensComponent } from './ficha-itens/ficha-itens.component';
import {MatTooltipModule} from '@angular/material/tooltip';



@NgModule({
  declarations: [
    ClientesFormComponent,
      ListaClientesComponent,
      RotinasComponent,
      RotinasFormComponent,
      TreinosFormComponent,
      ExercicioFormComponent,
      ListaFichasComponent,
      ListaExerciciosComponent,
      FichaFormComponent,
      FichaItensComponent
  ],
    imports: [
        CommonModule,
        MatDialogModule,
        NgxMaskModule,
        FormsModule,
        RouterLink,
        MatTooltipModule,
    ]
})
export class ClientesModule { }
