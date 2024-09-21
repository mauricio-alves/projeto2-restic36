import { Component, EventEmitter, inject, Output } from '@angular/core';
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
import { MovieInterface } from '../../interfaces/movie-interface';
import { HotToastService } from '@ngxpert/hot-toast';

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
  private toast: HotToastService = inject(HotToastService);
  movieForm: FormGroup;
  formValues: MovieInterface;
  @Output() adicionar = new EventEmitter<MovieInterface>();

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

  // Função que emitirá o evento de adicionar filme para o componente pai (HomeComponent) e limpará o formulário após a adição do filme
  addMovie(): void {
    const randomId = Math.floor(Math.random() * 1000000).toString();

    if (this.movieForm.valid) {
      this.formValues = {
        id: randomId,
        ...this.movieForm.value,
      };
      this.adicionar.emit(this.formValues);
      this.formValues = {} as MovieInterface;
      this.movieForm.reset();
    } else {
      this.toast.error('Formulário inválido');
    }
  }
}
