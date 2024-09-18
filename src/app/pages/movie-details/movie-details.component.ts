import { Component, inject } from '@angular/core';
import { MovieInterface } from '../../interfaces/movie-interface';
import { MovieService } from '../../services/movie.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FixedPipe } from '../../fixed.pipe';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [CommonModule, FixedPipe, MatButtonModule],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css',
})
export class MovieDetailsComponent {
  movie: MovieInterface | undefined;
  route: ActivatedRoute = inject(ActivatedRoute);
  movieService: MovieService = inject(MovieService);

  imageBaseUrl = 'https://image.tmdb.org/t/p/w500';
  imageBaseBackdropUrl = '';

  constructor() {
    const id = Number(this.route.snapshot.params['id']);
    this.movieService.getMovieById(id).then((movie) => {
      this.movie = movie;
      this.imageBaseBackdropUrl =
        'url(https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces' +
        this.movie?.backdrop_path +
        ')';
    });
  }
}
