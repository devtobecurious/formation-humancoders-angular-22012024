import { Component } from '@angular/core';
import { Game, GameOrUndefined, Games } from '../../models';
import { NgFor } from '@angular/common';
import { RowGameComponent } from '../row-game/row-game.component';
import { EditGameComponent } from '../edit-game/edit-game.component';

class MaClasse {}

@Component({
  selector: 'app-list-games',
  standalone: true,
  imports: [NgFor, RowGameComponent, EditGameComponent],
  templateUrl: './list-games.component.html',
  styleUrl: './list-games.component.css'
})
export class ListGamesComponent {
  gameList: Games = [{ id: 1, date: new Date(), state: 'succes', videoGame: 'God of war' }]
  currentGame: GameOrUndefined;

  editOne(game: Game): void {
    this.currentGame = game;
  }

  cancel(): void {
    this.currentGame = undefined;
  }

  deleteOne(game: Game): void {
    // const toDelete = this.gameList.find(item => item.id === game.id);
    this.gameList = this.gameList.filter(item => item.id !== game.id);
  }
}
