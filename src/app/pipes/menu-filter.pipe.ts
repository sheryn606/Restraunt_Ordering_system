import { Pipe, PipeTransform } from '@angular/core';
import { MenuItem } from '../models/menu-item.model';

@Pipe({
  name: 'menuFilter',
  standalone: true
})
export class MenuFilterPipe implements PipeTransform {

  transform(menu: MenuItem[], search: string): MenuItem[] {

    if (!search) return menu;

    return menu.filter(item =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  }
}