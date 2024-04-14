import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-list-cards',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent
  ],
  templateUrl: './list-cards.component.html',
  styleUrl: './list-cards.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListCardsComponent { }
