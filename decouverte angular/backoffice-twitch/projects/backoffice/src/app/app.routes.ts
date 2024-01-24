import { Routes } from '@angular/router';
import { ListGamesComponent } from './features/games/components/list-games/list-games.component';
import { CreateGameComponent } from './features/games/components/create-game/create-game.component';

export const routes: Routes = [
  {
    path: 'parties',
    component: ListGamesComponent
  },
  {
    path: 'parties/nouvelle',
    component: CreateGameComponent
  },
  // {
  //   path: 'parties/:id',
  //   component: ListGamesComponent
  // }
];
