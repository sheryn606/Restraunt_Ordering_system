import { MenuListComponent } from './components/menu-list/menu-list.component';
import { CartComponent } from './components/cart/cart.component';
import { OrderFormComponent } from './components/order-form/order-form.component'; // ← existing component

export const routes = [
  { path: '', component: MenuListComponent },
  { path: 'cart', component: CartComponent },
  { path: 'order', component: OrderFormComponent }, // ← use existing OrderForm
  { path: '**', redirectTo: '' }
];
