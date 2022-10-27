import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RotinasService} from 'app/rotinas.service';
import {Rotina} from '../rotina';

@Component({
  selector: 'app-fichas',
  templateUrl: './rotinas.component.html',
  styleUrls: ['./rotinas.component.scss']
})
export class RotinasComponent implements OnInit {
  id = this.activatedRoute.snapshot.paramMap.get('id');
  rotinas: Rotina[] = [];
  ficha: Rotina;

  objetivos = ['', 'Hipertrofia', 'Redução de Gordura',
    'Redução de Gordura/Hipertrofia', 'Definição Muscular', 'Condicionamento Físico', 'Qualidade de Vida']

  dificuldade = ['', 'Adaptação',
    'Iniciante', 'Intermediário', 'Avançado']

  constructor(
    private activatedRoute: ActivatedRoute,
    private rotinasService: RotinasService,
  ) { }

  ngOnInit(): void {
    this.rotinasService.getRotinas(this.id)
        .subscribe(response => {
          this.rotinas = response;
        });
  }

}
