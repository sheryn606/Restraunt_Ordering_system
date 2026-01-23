import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { MenuItem } from '../../models/menu-item.model';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Cart</h2>

    <p *ngIf="cart.length === 0">Cart is empty</p>

    <div *ngFor="let item of cart; let i = index" class="cart-item">
      {{ item.name }} - ₹{{ item.price }}
      <button (click)="remove(i)">Remove</button>
    </div>

    <h3 *ngIf="cart.length > 0">
      Total: ₹{{ total }}
    </h3>
  `
})
export class CartComponent {
  cart: MenuItem[] = [];
  total = 0;

  constructor(private cartService: CartService) {
    this.cartService.cart$.subscribe(items => {
      this.cart = items;
      this.total = items.reduce((sum, i) => sum + i.price, 0);
    });
  }

  remove(index: number) {
    this.cartService.removeFromCart(index);
  }
}
