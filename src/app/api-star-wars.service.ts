import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiStarWarsService {

  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }
  
  getFilmes(): Observable<any> {
    return this.http.get(`${this.baseUrl}films`);
  }

  getPersonagens(): Observable<any> {
    return this.http.get(`${this.baseUrl}people`);
  }

  getPlanetas(): Observable<any> {
    return this.http.get(`${this.baseUrl}planets`);
  }

  getNaves(): Observable<any> {
    return this.http.get(`${this.baseUrl}starships`);
  }
}
