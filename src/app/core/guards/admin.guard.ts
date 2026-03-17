/******************************************************************************
 * FICHIER : admin.guard.ts
 * ROLE    : Protéger les routes d'administration.
 *
 * DESCRIPTION
 * ---------------------------------------------------------------------------
 * Ce guard autorise uniquement les utilisateurs authentifiés ayant le rôle
 * "Admin".
 *
 * Comportement :
 * - si NON connecté  → redirection vers /login
 * - si connecté mais pas admin → redirection vers /
 * - si admin → accès autorisé
 ******************************************************************************/

import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const adminGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  // 🔐 Vérifie si l'utilisateur est connecté
  if (!authService.isAuthenticated()) {
    return router.createUrlTree(['/login']);
  }

  // 🛑 Vérifie si l'utilisateur est admin
  if (!authService.isAdmin()) {
    return router.createUrlTree(['/']);
  }

  // ✅ Accès autorisé
  return true;
};