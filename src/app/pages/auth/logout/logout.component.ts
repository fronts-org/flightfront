/******************************************************************************
 * FICHIER : logout.component.ts
 * ROLE    : Page de déconnexion.
 *
 * DESCRIPTION
 * ---------------------------------------------------------------------------
 * Ce composant déclenche immédiatement la déconnexion puis redirige
 * l'utilisateur vers la page de connexion.
 *
 * POURQUOI UN COMPOSANT DÉDIÉ ?
 * ---------------------------------------------------------------------------
 * Cela permet d'avoir une route claire `/logout` et un comportement centralisé.
 ******************************************************************************/

import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-logout',
  standalone: true,
  template: `
    <section class="logout-shell">
      <div class="glass-card logout-card">
        <p>Déconnexion en cours...</p>
      </div>
    </section>
  `,
  styles: [`
    .logout-shell {
      min-height: calc(100vh - 180px);
      display: grid;
      place-items: center;
      padding: 2rem;
    }

    .logout-card {
      padding: 2rem;
      text-align: center;
      min-width: 320px;
    }
  `]
})
export class LogoutComponent {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  constructor() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}