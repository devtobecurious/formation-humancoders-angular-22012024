import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListGamesComponent } from './features/games/components/list-games/list-games.component';
import { NgIf } from '@angular/common';
import { ListTodosComponent } from './features/learnings/todos/list-todos/list-todos.component';
import { DiscoverObservablesComponent } from './features/learnings/discover-observables/discover-observables.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NgIf,
    ListGamesComponent,
    ListTodosComponent,
    DiscoverObservablesComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'backoffice';
  afficherImage = false;
}
