import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Lista } from 'src/app/shared/model/list-model.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


//in questo file vi sono presenti i servizi che verrano usati dalle varie componenti
@Injectable({
  providedIn: 'root'
})
export class ListServiceService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Lista[]> {
    const url = environment.baseUrl + '/list/listTodo'
    return this.http.get<Lista[]>(url)
  }

  public delete(id: number): Observable<number> {
    const url = environment.baseUrl + '/list/' + id
    return this.http.delete<number>(url)
  }

  public post(lista: Lista): Observable<Lista> {
    const url = environment.baseUrl + '/list/'
    return this.http.post<Lista>(url, lista)
  }

  public put(lista: Lista): Observable<Lista> {
    const url = environment.baseUrl + '/list/' + lista.id
    return this.http.put<Lista>(url, lista);
  }
  public getId(id: number): Observable<Lista> {
    const url = environment.baseUrl + '/list/' + id
    return this.http.get<Lista>(url)
  }
}
