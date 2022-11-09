import { Routes } from '@angular/router';

import { RotinasComponent } from 'app/clientes/lista-rotinas/rotinas.component';
import { ClientesFormComponent } from '../../clientes/clientes-form/clientes-form.component';
import { ListaClientesComponent } from '../../clientes/lista-clientes/lista-clientes.component';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import {RotinasFormComponent} from '../../clientes/rotinas-form/rotinas-form.component';
import {TreinosFormComponent} from '../../clientes/treinos-form/treinos-form.component';
import {ExercicioFormComponent} from '../../clientes/exercicio-form/exercicio-form.component';
import {ListaFichasComponent} from '../../clientes/lista-fichas/lista-fichas.component';
import {ListaExerciciosComponent} from '../../clientes/lista-exercicios/lista-exercicios.component';
import {FichaFormComponent} from '../../clientes/ficha-form/ficha-form.component';
import {FichaItensComponent} from '../../clientes/ficha-itens/ficha-itens.component';

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
    { path: 'rotinas/rotina-form/:id',     component: RotinasFormComponent },
    { path: 'rotinas/editar/:id',     component: RotinasFormComponent },
    { path: 'novo-treino/:id',  component: TreinosFormComponent },
    { path: 'cadastrar-exercicio',  component: ExercicioFormComponent },
    { path: 'cadastrar-exercicio/:id',  component: ExercicioFormComponent },
    { path: 'lista-fichas/:id',  component: ListaFichasComponent },
    { path: 'listar-ficha/:id',  component: FichaItensComponent },
    { path: 'lista-exercicios',  component: ListaExerciciosComponent },
    { path: 'ficha-form/:id',  component: FichaFormComponent },
    { path: 'ficha-form/:id/:itemid',  component: FichaFormComponent },
];
