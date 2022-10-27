import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {FichaTreino} from './clientes/ficha-treino';

@Injectable({
  providedIn: 'root'
})
export class FichasTreinoService {
  // apiURL: 'http://localhost:8080/api/treinos';


  constructor(private http: HttpClient) { }

  getTreinos(id): Observable<FichaTreino[]> {
    return this.http.get<FichaTreino[]>(`http://localhost:8080/api/treinos/${id}`);
  }

  salvar(fichaTreino: FichaTreino): Observable<FichaTreino> {
    return this.http.post<FichaTreino>(`http://localhost:8080/api/treinos/`, fichaTreino);
  }

}
