import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesFormComponent } from './clientes-form/clientes-form.component';
import { ListaClientesComponent } from './lista-clientes/lista-clientes.component';
import {MatDialogModule} from '@angular/material/dialog';
import {NgxMaskModule} from 'ngx-mask';
import {FormsModule} from '@angular/forms';
import {RouterLink} from '@angular/router';
import { RotinasComponent } from './rotinas/rotinas.component';
import { RotinasFormComponent } from './rotinas-form/rotinas-form.component';
import { TreinosFormComponent } from './treinos-form/treinos-form.component';



@NgModule({
  declarations: [
    ClientesFormComponent,
      ListaClientesComponent,
      RotinasComponent,
      RotinasFormComponent,
      TreinosFormComponent
  ],
    imports: [
        CommonModule,
        MatDialogModule,
        NgxMaskModule,
        FormsModule,
        RouterLink,
    ]
})
export class ClientesModule { }
