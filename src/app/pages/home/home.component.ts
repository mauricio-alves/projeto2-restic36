import { Component, inject, HostListener } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { MovieInterface } from '../../interfaces/movie-interface';
import { CommonModule } from '@angular/common';
import { MovieService } from '../../services/movie.service';
import { MovieFormComponent } from '../../components/movie-form/movie-form.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CardComponent,
    CommonModule,
    MovieFormComponent,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  movies: MovieInterface[] = [];
  movieService: MovieService = inject(MovieService);

  constructor() {}

  ngOnInit(): void {
    this.loadMovies();
  }

  // Função para buscar filmes
  loadMovies(): void {
    this.movieService.getAllMovies().then((movies) => {
      this.movies = movies;
    });
  }

  // Função para ordenar por nome
  nameSort() {
    this.movies.sort((a, b) => a.title.localeCompare(b.title));
  }

  // Função para ordenar por nota
  rateSort() {
    this.movies.sort((a, b) => b.vote_average - a.vote_average);
  }

  // Função para remover filme
  async deleteMovie(id: string): Promise<void> {
    try {
      // Remove o filme da lista
      await this.movieService.deleteMovie(id);
      // Atualiza a lista de filmes
      this.loadMovies();
      console.log('Filme removido com sucesso');
    } catch (error) {
      console.error('Erro ao remover filme', error);
    }
  }

  // Verifica o scroll da página
  showScrollUpButton = false;
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    this.showScrollUpButton = scrollPosition > 800;
  }

  // Função para rolar até o topo
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
