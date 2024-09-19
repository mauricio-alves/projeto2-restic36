import {
  ChangeDetectionStrategy,
  Component,
  Input,
  inject,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MovieInterface } from '../../interfaces/movie-interface';
import { RouterModule } from '@angular/router';
import { FixedPipe } from '../../fixed.pipe';
import { MovieService } from '../../services/movie.service';

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
  movieService: MovieService = inject(MovieService);

  async deleteMovie(id: string): Promise<void> {
    try {
      await this.movieService.deleteMovie(id);
      console.log('Filme removido com sucesso');
    } catch (error) {
      console.error('Erro ao remover filme', error);
    }
  }
}
