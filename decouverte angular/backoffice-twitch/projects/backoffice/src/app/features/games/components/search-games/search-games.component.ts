import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { inject } from "@angular/core";
import { Observable } from 'rxjs';
import { People } from '../../models';
import { PeopleApplicationService, PeopleInfrastructureService } from '../../services/people-application.service';

@Component({
  selector: 'twitch-search-games',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './search-games.component.html',
  styleUrl: './search-games.component.css'
})
export class SearchGamesComponent {
  people$ = inject(PeopleApplicationService).getAll();

  selectPeople(): void {
    // TO BE CONTINUED ... ;)
  }
}
