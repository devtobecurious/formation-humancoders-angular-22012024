import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";
import { Todos } from "../models";
import { HttpClient } from "@angular/common/http";

@Injectable({ providedIn: 'root'}) // singleton auto injecté dès que appelé dans constructor ou dans inject()
export class TodoInfrastructureService {
  private readonly http = inject(HttpClient);

  getAll(): Observable<Todos> {
    return this.http.get<Todos>('https://jsonplaceholder.typicode.com/todos');
  }
}
