import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesFormComponent } from './clientes-form/clientes-form.component';
import { ListaClientesComponent } from './lista-clientes/lista-clientes.component';
import {MatDialogModule} from '@angular/material/dialog';
import {NgxMaskModule} from 'ngx-mask';
import {FormsModule} from '@angular/forms';
import {RouterLink} from '@angular/router';



@NgModule({
  declarations: [
    ClientesFormComponent,
      ListaClientesComponent
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
