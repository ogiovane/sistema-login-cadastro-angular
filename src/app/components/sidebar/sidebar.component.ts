import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/lista-clientes', title: 'Lista Alunos',  icon:'library_books', class: '' },
    { path: '/clientes-form', title: 'Novo Aluno',  icon:'person', class: '' },
    { path: '/rotinas', title: 'Rotinas',  icon:'library_books', class: '' },
    { path: '/rotinas-form', title: 'Nova rotina',  icon:'add', class: '' },
    { path: '/treinos-form', title: 'Novo FichaTreino',  icon:'add', class: '' },
    // { path: '/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
