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
  
  // Lista todos os filmes
  getFilmes(): Observable<any> {
    return this.http.get(`${this.baseUrl}films`);
  }

  // Lista todos os personagens
  getPersonagens(): Observable<any> {
    return this.http.get(`${this.baseUrl}people`);
  }

  // Lista todos os planetas
  getPlanetas(): Observable<any> {
    return this.http.get(`${this.baseUrl}planets`);
  }

  // Lista todos as naves 
  getNaves(): Observable<any> {
    return this.http.get(`${this.baseUrl}starships`);
  }
}
