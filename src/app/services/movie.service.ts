import { Injectable } from '@angular/core';
import { MovieInterface } from '../interfaces/movie-interface';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  url = 'http://localhost:3000/movies';

  constructor() {}

  async getAllMovies(): Promise<MovieInterface[]> {
    const data = await fetch(this.url);
    return data.json();
  }

  async getMovieById(id: number): Promise<MovieInterface | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return data.json();
  }

  async addMovie(movie: MovieInterface): Promise<void> {
    await fetch(this.url, {
      method: 'POST',
      body: JSON.stringify(movie),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  async deleteMovie(id: string): Promise<void> {
    await fetch(`${this.url}/${id}`, {
      method: 'DELETE',
    });
    return;
  }
}
