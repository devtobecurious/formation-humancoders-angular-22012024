import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Game, GameOrUndefined } from '../../models';
import { DatePipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'twitch-edit-game',
  standalone: true,
  imports: [DatePipe, JsonPipe],
  templateUrl: './edit-game.component.html',
  styleUrl: './edit-game.component.css'
})
export class EditGameComponent {
  @Input() item: GameOrUndefined;
  @Output() cancelEdit = new EventEmitter<Game>();

  clickToCancel(): void {
    this.cancelEdit.emit(this.item);
  }
}
