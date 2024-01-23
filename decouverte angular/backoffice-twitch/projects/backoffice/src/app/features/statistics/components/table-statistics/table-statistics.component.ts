import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Statistics, StatisticsOrUndefined } from '../../models';

@Component({
  selector: 'app-table-statistics',
  standalone: true,
  imports: [],
  templateUrl: './table-statistics.component.html',
  styleUrl: './table-statistics.component.css'
})
export class TableStatisticsComponent {
  @Input('maList') list: StatisticsOrUndefined;
  @Input() titleTable = '';

  @Output() newStat = new EventEmitter<number>();

  uneFonctionAuPif(): void {

  }

  clickToAdd(): void {
    this.newStat.emit(2);
    this.newStat.emit(3);
  }
}
