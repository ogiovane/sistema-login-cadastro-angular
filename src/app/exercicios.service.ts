import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Exercicio} from './clientes/exercicio';
import {environment} from '../environments/environment';


@Injectable({
    providedIn: 'root'
})
export class ExerciciosService {
    apiURL: string = environment.apiURLBase + '/api/exercicios';


    constructor(private http: HttpClient) { }

    salvar(exercicio: Exercicio): Observable<Exercicio> {
        return this.http.post<Exercicio>(this.apiURL, exercicio);
    }

    getAll(): Observable<Exercicio[]> {
        return this.http.get<Exercicio[]>(this.apiURL);
    }

    getById(id: string): Observable<Exercicio> {
        return this.http.get<any>(`${this.apiURL}/${id}`)
    }

    atualizar(exercicio: Exercicio): Observable<any> {
        return this.http.put<Exercicio>(`${this.apiURL}/${exercicio.id}`, exercicio);
    }

    deletar(exercicio: Exercicio) {
        return this.http.delete<any>(`${this.apiURL}/${exercicio.id}`);
    }


}
