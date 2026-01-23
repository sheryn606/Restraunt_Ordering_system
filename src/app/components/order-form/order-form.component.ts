import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-order-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './order-form.component.html',
})
export class OrderFormComponent {
  name = '';
  phone = '';
  address = '';

  constructor(public cart: CartService) {}

  submit() {
    if (!this.name || !this.phone) {
      alert('Please fill in name and phone.');
      return;
    }
    alert(`Order placed successfully!\nTotal: ₹${this.cart.getTotal()}`);
    this.cart.clear();
  }
}
