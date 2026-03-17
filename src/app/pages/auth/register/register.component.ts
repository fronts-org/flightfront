/******************************************************************************
 * FICHIER : register.component.ts
 * ROLE    : Page d'inscription utilisateur.
 *
 * DESCRIPTION
 * ---------------------------------------------------------------------------
 * Cette page permet à un nouveau passager de créer un compte.
 * Après validation :
 * - le compte est créé côté frontend (mode démo/local)
 * - l'utilisateur est automatiquement connecté
 * - il est redirigé vers son espace de réservations
 *
 * ÉVOLUTION FUTURE
 * ---------------------------------------------------------------------------
 * Pour un backend réel, il suffira de remplacer l'appel local par une requête
 * HTTP vers l'API d'inscription.
 ******************************************************************************/

import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  /**
   * Modèle de formulaire.
   */
  form = {
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  /**
   * Message d'erreur affiché dans l'interface si validation échouée.
   */
  errorMessage = '';

  /**
   * Soumet le formulaire d'inscription.
   */
  submit(): void {
    this.errorMessage = '';

    if (!this.form.fullName.trim() || !this.form.email.trim() || !this.form.password.trim()) {
      this.errorMessage = 'Tous les champs sont obligatoires.';
      return;
    }

    if (this.form.password !== this.form.confirmPassword) {
      this.errorMessage = 'La confirmation du mot de passe ne correspond pas.';
      return;
    }

    const success = this.authService.register(
      this.form.fullName,
      this.form.email,
      this.form.password
    );

    if (!success) {
      this.errorMessage = 'Impossible de créer le compte.';
      return;
    }

    this.router.navigate(['/my-bookings']);
  }
}