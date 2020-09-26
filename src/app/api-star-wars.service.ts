import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiStarWarsService {

  constructor(private http: HttpClient) { }

  listarPersonagens (): Observable<any> {
    return this.http.get("https://swapi.dev/api/people");
  }
}
