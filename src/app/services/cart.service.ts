import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MenuItem } from '../models/menu-item.model';

@Injectable({ providedIn: 'root' })
export class CartService {
  private cart: MenuItem[] = [];
  private cartSubject = new BehaviorSubject<MenuItem[]>([]);
  cart$ = this.cartSubject.asObservable();

  addToCart(item: MenuItem) {
    this.cart.push(item);
    this.cartSubject.next(this.cart);
  }

  removeFromCart(index: number) {
    this.cart.splice(index, 1);
    this.cartSubject.next(this.cart);
  }

  getTotal() {
    return this.cart.reduce((sum, i) => sum + i.price, 0);
  }

  clear() {
    this.cart = [];
    this.cartSubject.next(this.cart);
  }

  getCartItems() {
    return this.cart;
  }
}
