import { Routes } from '@angular/router';

import { RotinasComponent } from 'app/clientes/rotinas/rotinas.component';
import { ClientesFormComponent } from '../../clientes/clientes-form/clientes-form.component';
import { ListaClientesComponent } from '../../clientes/lista-clientes/lista-clientes.component';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import {RotinasFormComponent} from '../../clientes/rotinas-form/rotinas-form.component';
import {ExerciciosFormComponent} from '../../clientes/exercicios-form/exercicios-form.component';

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'clientes-form',     component: ClientesFormComponent },
    { path: 'clientes-form/:id',     component: ClientesFormComponent },
    { path: 'lista-clientes',     component: ListaClientesComponent },
    { path: 'rotinas/:id',     component: RotinasComponent },
    { path: 'rotinas-form',     component: RotinasFormComponent },
    { path: 'exercicios-form',  component: ExerciciosFormComponent },
    { path: 'notifications',  component: NotificationsComponent },
];
