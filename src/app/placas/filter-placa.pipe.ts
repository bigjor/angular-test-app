import { Pipe, PipeTransform } from '@angular/core';
import { Placa } from './placa';

@Pipe({
  name: 'filterPlaca'
})
export class FilterPlacaPipe implements PipeTransform {

  transform(placas: Placa[], criterio: string): Placa[] {

    return criterio == '' 
      ? placas 
      : placas.filter(p => p.client?.toLowerCase().includes(criterio.toLowerCase()));
  }

}
