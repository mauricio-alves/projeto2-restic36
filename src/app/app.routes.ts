import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';

export const routes: Routes = [
  // Rota para a página inicial
  {
    path: '',
    component: HomeComponent,
    title: 'Home',
  },
  // Rota para a página de detalhes de um filme
  {
    path: 'movies/:id',
    component: MovieDetailsComponent,
    title: 'Movie Details',
  },
];
