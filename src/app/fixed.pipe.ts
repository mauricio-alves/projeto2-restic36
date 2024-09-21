import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fixed',
  standalone: true,
})
export class FixedPipe implements PipeTransform {
  // Transforma um número em uma string com um número fixo de casas decimais (padrão: 1)
  transform(value: number | undefined, decimals: number = 1): string {
    return value !== undefined
      ? value.toFixed(decimals)
      : 'Valor não disponível';
  }
}
