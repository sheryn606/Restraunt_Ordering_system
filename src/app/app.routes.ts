import { MenuListComponent } from './components/menu-list/menu-list.component';
import { CartComponent } from './components/cart/cart.component';
import { OrderFormComponent } from './components/order-form/order-form.component';
import { MenuDetailComponent } from './components/menu-detail/menu-detail.component';
import { cartGuard } from './guards/cart.guard';
export const routes = [
  { path: '', component: MenuListComponent },
  { path: 'menu/:id', component: MenuDetailComponent },
  { path: 'cart', component: CartComponent },
  { path: 'order', component: OrderFormComponent },
  { path: 'order', component: OrderFormComponent, canActivate:[cartGuard] },
  { path: '**', redirectTo: '' }
];