import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';
import {Ficha} from './clientes/ficha';
import {environment} from '../environments/environment';
import {FichaItem} from './clientes/fichaItem';

@Injectable({
    providedIn: 'root'
})
export class FichasTreinoService {
    apiURL: string = environment.apiURLBase + '/api/fichas';

    constructor(private http: HttpClient) {
    }

    getFichaPorId(id): Observable<Ficha> {
        return this.http.get<Ficha>(`${this.apiURL}/${id}`);
    }

    salvar(fichaTreino: Ficha): Observable<Ficha> {
        return this.http.post<Ficha>(this.apiURL, fichaTreino)
            .pipe(catchError(this.handleError));
    }

    getFichasByRotina(id: number) {
        return this.http.get<Ficha[]>(`${this.apiURL}/?rotina=${id}`);
    }

    getFichaItensByFichaId(id: number): Observable<FichaItem[]> {
        return this.http.get<FichaItem[]>(`${this.apiURL}/${id}/itensficha/`);
    }

    getFichaItemById(id: number) {
        return this.http.get<FichaItem>(`${this.apiURL}/0/itensficha/${id}`);
    }

    salvarItemFicha(id, fichaItem: FichaItem): Observable<FichaItem> {
        return this.http.post<FichaItem>(`${this.apiURL}/${id}/itensficha/`, fichaItem);
    }

    atualizarFicha(ficha: Ficha) {
        return this.http.put<Ficha>(`${this.apiURL}/${ficha.id}`, ficha);
    }

    getItemById(id): Observable<FichaItem> {
        return this.http.get<FichaItem>(`${this.apiURL}/0/itensficha/${id}`)
            .pipe(catchError(this.handleError));
    }

    deletarFichaItem(item: FichaItem) {
        return this.http.delete<any>(`${this.apiURL}/1/itensficha/${item.id}`);
    }

    deletar(ficha: Ficha) {
        return this.http.delete<any>(`${this.apiURL}/${ficha.id}`);
    }

    atualizar(fichaItem: FichaItem) {
        return this.http.put<FichaItem>(`${this.apiURL}/1/itensficha/${fichaItem.id}`, fichaItem);
    }

    private handleError(error: HttpErrorResponse) {
        if (error.status === 0) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong.
            console.error(
                `Backend returned code ${error.status}, body was: `, error.error);
        }
        // Return an observable with a user-facing error message.
        return throwError(() => new Error('Something bad happened; please try again later.'));
    }
}
