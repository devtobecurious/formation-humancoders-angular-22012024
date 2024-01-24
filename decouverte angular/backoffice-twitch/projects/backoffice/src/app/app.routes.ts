import { Routes } from '@angular/router';
import { ListGamesComponent } from './features/games/components/list-games/list-games.component';

export const routes: Routes = [
  {
    path: 'parties',
    component: ListGamesComponent
  },
  // {
  //   path: 'parties/:id',
  //   component: ListGamesComponent
  // }
];
