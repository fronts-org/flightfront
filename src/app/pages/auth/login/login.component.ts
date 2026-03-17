/******************************************************************************
 * FICHIER : login.component.ts
 * ROLE    : Page de connexion.
 *
 * DESCRIPTION
 * ---------------------------------------------------------------------------
 * Cette page permet à un utilisateur de se connecter.
 * Elle gère :
 * - l'affichage du formulaire
 * - la validation simple des champs
 * - l'appel au service d'authentification
 * - la redirection selon le rôle utilisateur
 ******************************************************************************/

import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  form = {
    email: '',
    password: ''
  };

  errorMessage = '';

  /**
   * Tente la connexion puis redirige l'utilisateur.
   */
  submit(): void {
    this.errorMessage = '';

    const success = this.authService.login(this.form.email, this.form.password);

    if (!success) {
      this.errorMessage = 'Veuillez renseigner un email et un mot de passe valides.';
      return;
    }

    if (this.authService.isAdmin()) {
      this.router.navigate(['/admin']);
      return;
    }

    this.router.navigate(['/my-bookings']);
  }

  /**
   * Remplit rapidement un compte de démonstration administrateur.
   */
  fillAdminDemo(): void {
    this.form.email = 'admin@flight.local';
    this.form.password = 'Admin123!';
  }

  /**
   * Remplit rapidement un compte de démonstration passager.
   */
  fillPassengerDemo(): void {
    this.form.email = 'passager@flight.local';
    this.form.password = 'Passenger123!';
  }
}