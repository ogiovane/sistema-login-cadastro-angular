import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Rotina} from './clientes/rotina';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RotinasService {
  apiURL: string = environment.apiURLBase + '/api/rotinas';

  constructor(private http: HttpClient) { }

  getRotinas(id): Observable<Rotina[]> {
    return this.http.get<Rotina[]>(`http://localhost:8080/api/rotinas/${id}`);
  }

  salvar(rotina: Rotina): Observable<Rotina> {
    return this.http.post<Rotina>('http://localhost:8080/api/rotinas/', rotina);
  }

  atualizar(rotina: Rotina): Observable<any> {
    return this.http.put<Rotina>(`http://localhost:8080/api/rotinas/${rotina.id}`, rotina);
  }

  deletar(rotina: Rotina) {
    return this.http.delete<any>(`${this.apiURL}/${rotina.id}`);
  }


    getRotinaById(id: string): Observable<Rotina> {
    return this.http.get<Rotina>(`http://localhost:8080/api/rotinas/edit/${id}`);
  }

}
