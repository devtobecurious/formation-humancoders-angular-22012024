import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Game, GameOrUndefined, Games } from '../../models';
import { NgFor } from '@angular/common';
import { RowGameComponent } from '../row-game/row-game.component';
import { EditGameComponent } from '../edit-game/edit-game.component';
import { SearchGamesComponent } from '../search-games/search-games.component';
import { GameBusinessService } from '../../services/game-business.service';
import { TypeOrUndefined } from '../../../../core/custom-types';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

class MaClasse {}

@Component({
  selector: 'app-list-games',
  standalone: true,
  imports: [NgFor, RowGameComponent, EditGameComponent, SearchGamesComponent],
  templateUrl: './list-games.component.html',
  styleUrl: './list-games.component.css'
})
export class ListGamesComponent implements OnInit, OnDestroy {
  private readonly router = inject(Router);
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly gameService = inject(GameBusinessService); // Injection de dépendance

  // gameList: Games = [{ id: 1, date: new Date(), state: 'succes', videoGame: 'God of war' }]
  gameList: TypeOrUndefined<Games>;
  currentGame: GameOrUndefined;
  private readonly subscriptionContainer = new Subscription();

  ngOnInit(): void {
    // param id : this.activatedRoute.snapshot.params['id']

    // tout abonnement / souscription pour récup des données de l'api => onInit !
    const sub = this.gameService.getAll().subscribe({
      next: games => this.gameList = games
    });

    this.subscriptionContainer.add(sub);
  }

  ngOnDestroy(): void {
    this.subscriptionContainer.unsubscribe();
  }

  editOne(game: Game): void {
    this.currentGame = game;
  }

  cancel(): void {
    this.currentGame = undefined;
    this.router.navigate(['/']);
  }

  deleteOne(game: Game): void {
    // const toDelete = this.gameList.find(item => item.id === game.id);
    this.gameList = this.gameList?.filter(item => item.id !== game.id);
  }
}
