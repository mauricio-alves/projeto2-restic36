import { Component, inject } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { MovieInterface } from '../../interfaces/movie-interface';
import { CommonModule } from '@angular/common';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  movies: MovieInterface[] = [];
  movieService: MovieService = inject(MovieService);

  constructor() {
    this.movieService.getAllMovies().then((movies) => {
      this.movies = movies;
    });
  }
}
