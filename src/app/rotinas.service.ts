import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ficha } from './clientes/ficha';
import {Aluno} from './clientes/aluno';
import {Rotina} from './clientes/rotina';

@Injectable({
  providedIn: 'root'
})
export class RotinasService {

  constructor(private http: HttpClient) { }

  getFichas(): Observable<Ficha[]> {
    return this.http.get<Ficha[]>('http://localhost:8080/api/rotinas/');
  }

  salvar(rotina: Rotina): Observable<Rotina> {
    return this.http.post<Rotina>('http://localhost:8080/api/rotinas', rotina);
  }

  atualizar(rotina: Rotina): Observable<any> {
    return this.http.put<Rotina>(`http://localhost:8080/api/rotinas/${rotina.id}`, rotina);
  }


  getFichasById(id: string): Observable<Ficha[]> {
    return this.http.get<Ficha[]>(`http://localhost:8080/api/rotinas/${id}`);
  }

}
