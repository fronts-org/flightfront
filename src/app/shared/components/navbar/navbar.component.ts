/******************************************************************************
 * FICHIER : navbar.component.ts
 * ROLE    : Barre de navigation principale du frontend.
 *
 * DESCRIPTION
 * ---------------------------------------------------------------------------
 * Cette barre adapte son affichage selon l'état d'authentification :
 * - liens publics
 * - accès aux réservations si connecté
 * - accès à l'administration si admin
 * - connexion / inscription si invité
 * - déconnexion si connecté
 ******************************************************************************/

import { Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgIf],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  /**
   * Service d'authentification exposé au template
   * pour adapter l'affichage de la barre.
   */
  readonly authService = inject(AuthService);
}