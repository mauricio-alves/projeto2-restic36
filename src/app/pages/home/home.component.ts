import { Component, inject, HostListener } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { MovieInterface } from '../../interfaces/movie-interface';
import { CommonModule } from '@angular/common';
import { MovieService } from '../../services/movie.service';
import { MovieFormComponent } from '../../components/movie-form/movie-form.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HotToastService } from '@ngxpert/hot-toast';

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
  private toast: HotToastService = inject(HotToastService);
  movies: MovieInterface[] = [];
  movieService: MovieService = inject(MovieService);

  constructor() {}

  ngOnInit(): void {
    this.loadMovies();
  }

  // Função para buscar todos os filmes
  loadMovies(): void {
    this.movieService.getAllMovies().then((movies) => {
      this.movies = movies;
    });
  }

  // Função para ordenar os filmes por nome
  nameSort() {
    this.movies.sort((a, b) => a.title.localeCompare(b.title));
  }

  // Função para ordenar os filmes por nota
  rateSort() {
    this.movies.sort((a, b) => b.vote_average - a.vote_average);
  }

  // Função para adicionar filme pelo formulário
  async addMovie(movieForm: MovieInterface): Promise<void> {
    try {
      await this.movieService.addMovie(movieForm);
      this.toast.success('Filme adicionado com sucesso');
      this.loadMovies();
    } catch (error) {
      this.toast.error('Erro ao adicionar filme');
      console.error('Erro ao adicionar filme', error);
    }
  }

  // Função para remover filme pelo id
  async deleteMovie(id: string): Promise<void> {
    try {
      await this.movieService.deleteMovie(id);
      this.toast.success('Filme removido com sucesso');
      this.loadMovies();
    } catch (error) {
      this.toast.error('Erro ao remover filme');
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
