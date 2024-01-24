import { Injectable, inject } from "@angular/core";
import { Todos } from "../models";
import { Observable } from "rxjs";
import { TodoInfrastructureService } from "./todo-infrastructure.service";

@Injectable({ providedIn: 'root' })
export class TodoApplicationService {
  private readonly infra = inject(TodoInfrastructureService);

  getAll(): Observable<Todos> {
    return this.infra.getAll();
  }
}
