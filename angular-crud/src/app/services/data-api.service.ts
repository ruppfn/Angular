import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs/internal/Observable'
import { Persona } from '../models/persona';
import { LoginComponent } from '../login/login.component';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  authenticated: Boolean = false;
  logFailed: Boolean = false;

  constructor(private http: HttpClient) { }

  getAllPersonas() {
    const url_api = 'http://localhost:8080/persona/';
    return this.http.get(url_api);
  }

  addPersona(persona: Persona): Observable<Persona> {
    const url_api = 'http://localhost:8080/persona/';
    const stringParams = 'persona=' + JSON.stringify(persona);
    const params = new HttpParams({ fromString: stringParams });
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      params
    };
    return this.http.post<Persona>(url_api, persona, httpOptions).pipe();
  }

  deletePersona(id: number): Observable<{}> {
    const url_api = 'http://localhost:8080/persona/' + id;
    return this.http.delete<Persona>(url_api).pipe();
  }

  /* TODO: Implementar
  logout() {
    return this.http.post('logout', {});
  }
  */

  login(credentials, callback) {
    const url_api = 'http://localhost:8080/persona/user';
    const headers = new HttpHeaders(credentials ?
      //btoa: Encode a string in base-64
      { authorization: 'Basic ' + btoa(credentials.username + ':' + credentials.password)} : { } );

    this.http.get(url_api, {headers, observe: 'response'}).subscribe( response => {
      if(response.status === 200){
        this.authenticated = true;
        return callback && callback()
      }
    }, err => {
      this.logFailed = true;
    })
  }

}
