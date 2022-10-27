import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Rotina} from './clientes/rotina';

@Injectable({
  providedIn: 'root'
})
export class RotinasService {

  constructor(private http: HttpClient) { }

  getRotinas(id): Observable<Rotina[]> {
    return this.http.get<Rotina[]>(`http://localhost:8080/api/rotinas/${id}`);
  }

  salvar(rotina: Rotina): Observable<Rotina> {
    return this.http.post<Rotina>('http://localhost:8080/api/rotinas/', rotina);
  }

  // atualizar(rotina: Rotina, id): Observable<any> {
  //   return this.http.put<Rotina>(`http://localhost:8080/api/rotinas/${rotina.id}`, rotina);
  // }


  getRotinaById(id: string): Observable<Rotina> {
    return this.http.get<any>(`http://localhost:8080/api/rotinas/${id}`);
  }

}
