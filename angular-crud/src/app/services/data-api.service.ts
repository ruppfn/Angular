import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs/internal/Observable'
import { Persona } from '../models/persona';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getAllPersonas(){
    const url_api = 'http://localhost:8080/persona/view';
    return this.http.get(url_api);
  }

  addPersona(persona: Persona): Observable<Persona>{
    const url_api = 'http://localhost:8080/persona/add';
    const stringParams = 'persona=' + JSON.stringify(persona);
    const params = new HttpParams({fromString: stringParams});
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'}),
      params};
    return this.http.post<Persona>(url_api, persona, httpOptions).pipe();
  }

  deletePersona(id: number): Observable<{}>{
    const url_api = 'http://localhost:8080/persona/delete';
    const stringParams = 'id=' + id;
    const params = new HttpParams({fromString: stringParams});
    const httpOptions = {params};
    return this.http.delete<Persona>(url_api, httpOptions).pipe();
  }

}
