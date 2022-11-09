import { Injectable } from '@angular/core';
import {Aluno} from './clientes/aluno';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  apiURL: string = environment.apiURLBase + '/api/alunos';

  constructor(private http: HttpClient) {

  }

  salvar(aluno: Aluno): Observable<Aluno> {
      return this.http.post<Aluno>(this.apiURL, aluno);
  }

  atualizar(aluno: Aluno): Observable<any> {
    return this.http.put<Aluno>(`${this.apiURL}/${aluno.id}`, aluno);
  }


  getClientes(): Observable<Aluno[]> {
    return this.http.get<Aluno[]>(this.apiURL);
  }

  getClienteById(id: string): Observable<Aluno> {
    return this.http.get<any>(`${this.apiURL}/${id}`)
  }

  deletar(aluno: Aluno) {
    return this.http.delete<any>(`${this.apiURL}/${aluno.id}`);
  }


}
