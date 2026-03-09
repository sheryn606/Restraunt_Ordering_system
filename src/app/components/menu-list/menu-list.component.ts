import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuService } from '../../services/menu.service';
import { CartService } from '../../services/cart.service';
import { MenuItem } from '../../models/menu-item.model';
import { MenuFilterPipe } from '../../pipes/menu-filter.pipe';   // add this
import { FormsModule } from '@angular/forms';                    // add this
import { HighlightDirective } from '../../directives/highlight.directive';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-menu-list',
  standalone: true,
  imports: [CommonModule, FormsModule, MenuFilterPipe, HighlightDirective,MatButtonModule,MatCardModule],          // update this
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {

  menu: MenuItem[] = [];
  search = '';   // add this

  constructor(
    private menuService: MenuService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.menuService.getMenu().subscribe(
      (data) => (this.menu = data),
      (err) => console.error('Menu load error:', err)
    );
  }

  addToCart(item: MenuItem) {
    this.cartService.addToCart(item);
  }
}