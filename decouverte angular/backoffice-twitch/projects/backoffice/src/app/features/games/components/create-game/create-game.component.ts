import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Game } from '../../models';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'twitch-create-game',
  standalone: true,
  imports: [FormsModule, JsonPipe],
  templateUrl: './create-game.component.html',
  styleUrl: './create-game.component.css'
})
export class CreateGameComponent {
  game: Game = {date: new Date(), id: 0, state: 'echec', videoGame: ''};

  createOne(): void {
 // Appel de l'api donc du service qui appelle l'api
  }
}
