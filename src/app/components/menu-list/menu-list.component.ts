import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuService } from '../../services/menu.service';
import { CartService } from '../../services/cart.service';
import { MenuItem } from '../../models/menu-item.model';

@Component({
  selector: 'app-menu-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css'] // ← menu-specific CSS
})
export class MenuListComponent implements OnInit {
  menu: MenuItem[] = [];

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
