import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { TableStatisticsComponent } from '../table-statistics/table-statistics.component';
import { Statistics, getFakeList } from '../../models';

@Component({
  selector: 'app-list-statistics',
  standalone: true,
  // imports: [CommonModule], // Si on appelle le CommonModule, on génère le js de tout le Module !!!
  imports: [TableStatisticsComponent],
  templateUrl: './list-statistics.component.html',
  styleUrl: './list-statistics.component.css'
})
export class ListStatisticsComponent {
  items: Statistics = getFakeList();

  pourAjoutNouvelElement(nb: number): void {
    console.info(nb);
  }
}

