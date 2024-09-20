import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MovieInterface } from '../../interfaces/movie-interface';
import { RouterModule } from '@angular/router';
import { FixedPipe } from '../../fixed.pipe';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, RouterModule, FixedPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() movieData!: MovieInterface;
  @Output() deletar = new EventEmitter<string>();

  // Função que emitirá o evento de deletar filme para o componente pai
  onDelete(): void {
    this.deletar.emit(this.movieData.id);
  }
}
