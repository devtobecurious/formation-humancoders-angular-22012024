import { Component, inject } from '@angular/core';
import { TodoApplicationService } from '../services/todo-application.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'twitch-list-todos',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './list-todos.component.html',
  styleUrl: './list-todos.component.css'
})
export class ListTodosComponent {
  private readonly business = inject(TodoApplicationService);
  todos$ = this.business.getAll();
}
