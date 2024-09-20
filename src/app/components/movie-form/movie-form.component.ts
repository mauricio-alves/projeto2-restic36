import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {
  FormsModule,
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { MovieService } from '../../services/movie.service';
import { MovieInterface } from '../../interfaces/movie-interface';

@Component({
  selector: 'app-movie-form',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './movie-form.component.html',
  styleUrl: './movie-form.component.css',
})
export class MovieFormComponent {
  movieForm: FormGroup;
  formValues: MovieInterface;
  movieService: MovieService = inject(MovieService);

  constructor(private fb: FormBuilder) {
    // Inicializa o formulário
    this.formValues = {} as MovieInterface;

    // Cria e valida o formulário
    this.movieForm = this.fb.group({
      title: ['', Validators.required],
      release_date: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/
          ),
        ],
      ],
      vote_average: ['', [Validators.min(0), Validators.max(10)]],
      poster_path: ['', Validators.required],
      backdrop_path: ['', Validators.required],
      overview: ['', Validators.required],
    });
  }

  // Função para adicionar filme
  async onSubmit() {
    const randomId = Math.floor(Math.random() * 1000000).toString();

    if (this.movieForm.valid) {
      this.formValues = {
        id: randomId,
        ...this.movieForm.value,
      };
      try {
        const response = await this.movieService.addMovie(this.formValues);
        console.log(response);
      } catch (error) {
        console.log('Erro ao adicionar filme', error);
      }
      this.formValues = {} as MovieInterface;
      this.movieForm.reset();
    } else {
      console.log('Formulário inválido');
    }
  }
}
