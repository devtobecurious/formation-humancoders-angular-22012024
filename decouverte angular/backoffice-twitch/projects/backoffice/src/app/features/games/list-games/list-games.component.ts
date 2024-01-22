import { Component } from '@angular/core';
import { Games } from '../models';
import { NgFor } from '@angular/common';

class MaClasse {}

@Component({
  selector: 'app-list-games',
  standalone: true,
  imports: [NgFor],
  templateUrl: './list-games.component.html',
  styleUrl: './list-games.component.css'
})
export class ListGamesComponent {
  gameList: Games = [{ id: 1, date: new Date(), state: 'succes', videoGame: 'God of war' }]
}
