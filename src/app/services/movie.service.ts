import { Injectable } from '@angular/core';
import { MovieInterface } from '../interfaces/movie-interface';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  url = 'http://localhost:3000/movies';

  constructor() {}

  // Método para buscar todos os filmes
  async getAllMovies(): Promise<MovieInterface[]> {
    const data = await fetch(this.url);
    return data.json();
  }

  // Método para buscar um filme pelo id
  async getMovieById(id: number): Promise<MovieInterface | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return data.json();
  }

  // Método para adicionar um filme
  async addMovie(movie: MovieInterface): Promise<void> {
    await fetch(this.url, {
      method: 'POST',
      body: JSON.stringify(movie),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  // Método para deletar um filme
  async deleteMovie(id: string): Promise<void> {
    await fetch(`${this.url}/${id}`, {
      method: 'DELETE',
    });
  }
}
