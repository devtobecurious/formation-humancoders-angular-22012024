import { Injectable, inject } from "@angular/core";
import { Observable, of } from "rxjs";
import { Games } from "../models";
import { HttpClient } from "@angular/common/http";

@Injectable({ providedIn: 'root' }) // Singleton, auto instanciable
export class GameBusinessService {
  private readonly http = inject(HttpClient);

  getAll(): Observable<Games> {
    // Dans un service on ne souscrit jamais à une observable !
    // On retourne l'observable
    const result: Games = [{ id: 1, date: new Date(), state: 'success', videoGame: 'God of war' }];
    return of(result);
    //return this.http.get<Games>('https://swapi.dev/api/people');
  }
}
