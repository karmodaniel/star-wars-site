import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiStarWarsService {

  constructor(private https: HttpClient) { }
  
  getFilmes(): Observable<any> {
    return this.https.get(" https://swapi.dev/api/films");
  }

  getPersonagens(): Observable<any> {
    return this.https.get("https://swapi.dev/api/people");
  }

  getPlanetas(): Observable<any> {
    return this.https.get(" https://swapi.dev/api/planets");
  }

  getNaves(): Observable<any> {
    return this.https.get(" https://swapi.dev/api/starships");
  }
}
