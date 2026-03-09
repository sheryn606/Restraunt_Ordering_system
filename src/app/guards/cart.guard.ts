import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CartService } from '../services/cart.service';

export const cartGuard: CanActivateFn = () => {

  const cart = inject(CartService);
  const router = inject(Router);

  if (cart.getCartItems().length > 0) {
    return true;
  }

  router.navigate(['/']);
  return false;
};