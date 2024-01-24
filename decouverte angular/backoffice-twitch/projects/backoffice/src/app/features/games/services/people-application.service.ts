import { Injectable, inject } from "@angular/core";
import { Observable, map } from "rxjs";
import { People, Person } from "../models";
import { HttpClient } from "@angular/common/http";

export type PeopleApiResult = {
  results: People
}

@Injectable({providedIn: 'root'})
export class PeopleInfrastructureService {
  private readonly http = inject(HttpClient);

  getAll(): Observable<PeopleApiResult> {
    return this.http.get<PeopleApiResult>('https://swapi.dev/api/people');
  }
}


@Injectable({providedIn: 'root'})
export class PeopleApplicationService {
  private readonly infra = inject(PeopleInfrastructureService);

  getAll(): Observable<People> {
    return this.infra.getAll().pipe(
      map(api => api.results)
    );
  }
}
