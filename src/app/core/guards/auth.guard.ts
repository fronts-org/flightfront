/******************************************************************************
 * FICHIER : auth.guard.ts
 * ROLE    : Protéger les routes nécessitant une authentification.
 *
 * DESCRIPTION
 * ---------------------------------------------------------------------------
 * Ce guard redirige vers /login lorsqu'aucun utilisateur n'est connecté.
 ******************************************************************************/

import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isAuthenticated()) {
    return true;
  }

  return router.createUrlTree(['/login']);
};