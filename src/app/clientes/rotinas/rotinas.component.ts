import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RotinasService } from 'app/rotinas.service';
import { Ficha } from '../ficha';
import {Aluno} from '../aluno';

@Component({
  selector: 'app-fichas',
  templateUrl: './rotinas.component.html',
  styleUrls: ['./rotinas.component.scss']
})
export class RotinasComponent implements OnInit {
  id = this.activatedRoute.snapshot.paramMap.get('id');
  fichas: Ficha[] = [];
  ficha: Ficha;

  objetivos = ['', 'Hipertrofia', 'Redução de Gordura',
    'Redução de Gordura/Hipertrofia', 'Definição Muscular', 'Condicionamento Físico', 'Qualidade de Vida']

  dificuldade = ['', 'Adaptação',
    'Iniciante', 'Intermediário', 'Avançado']

  constructor(
    private activatedRoute: ActivatedRoute,
    private fichasService: RotinasService,
  ) { }

  ngOnInit(): void {
    this.fichasService.getFichas()
        .subscribe(response => {
          this.fichas = response;
        });
  }

}
