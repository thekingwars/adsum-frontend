import { Pipe, PipeTransform } from '@angular/core';
import { Category } from '../../@core/shared/enums/category';

@Pipe({
  name: 'category',
})
export class CategoryPipe implements PipeTransform {
  transform(value: string): string {
    switch (value) {
      case Category.BILLING:
        return 'Facturación';
      case Category.SALES:
        return 'Ventas';
      case Category.GENERAL:
        return 'Información General';
      case Category.TECHNICAL:
        return 'Soporte Técnico';
      default:
        return value;
    }
  }
}
