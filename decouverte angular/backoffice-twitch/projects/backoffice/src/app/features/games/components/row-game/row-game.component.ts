import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Game, GameOrUndefined } from '../../models';

@Component({
  selector: 'app-row-game',
  standalone: true,
  imports: [],
  templateUrl: './row-game.component.html',
  styleUrl: './row-game.component.css'
})
export class RowGameComponent {
  @Input() item: GameOrUndefined;

  @Output() toEdit = new EventEmitter<Game>();
  @Output() toDelete = new EventEmitter<Game>();

  clickToEdit(): void {
    this.toEdit.emit(this.item);
  }

  clickToDelete(): void {
    this.toDelete.emit(this.item);
  }
}
