/******************************************************************************
 * FICHIER : auth.service.ts
 * ROLE    : Service d'authentification du frontend.
 *
 * DESCRIPTION
 * ---------------------------------------------------------------------------
 * Ce service centralise :
 * - la connexion utilisateur
 * - l'inscription simulée
 * - la déconnexion
 * - la persistance de session dans localStorage
 * - l'accès à l'utilisateur courant
 *
 * NOTE
 * ---------------------------------------------------------------------------
 * Cette version est prête pour le frontend. Pour un vrai backend JWT,
 * il suffira de remplacer les méthodes login/register par des appels HTTP.
 ******************************************************************************/

import { Injectable, computed, signal } from '@angular/core';

export interface AuthUser {
  id: number;
  fullName: string;
  email: string;
  role: 'Admin' | 'Passenger';
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly storageKey = 'flight_auth_user';

  /**
   * Signal interne contenant l'utilisateur connecté.
   * Il est initialisé depuis le localStorage pour conserver la session.
   */
  private readonly currentUserSignal = signal<AuthUser | null>(this.readStoredUser());

  /**
   * Exposition en lecture seule de l'utilisateur connecté.
   */
  readonly currentUser = computed(() => this.currentUserSignal());

  /**
   * Indique si un utilisateur est authentifié.
   */
  readonly isAuthenticated = computed(() => this.currentUserSignal() !== null);

  /**
   * Indique si l'utilisateur courant est administrateur.
   */
  readonly isAdmin = computed(() => this.currentUserSignal()?.role === 'Admin');

  /**
   * Simule une connexion.
   * Pour la démonstration :
   * - email contenant "admin" => rôle Admin
   * - sinon => rôle Passenger
   */
  login(email: string, password: string): boolean {
    if (!email?.trim() || !password?.trim()) {
      return false;
    }

    const normalizedEmail = email.trim().toLowerCase();
    const user: AuthUser = {
      id: 1,
      fullName: normalizedEmail.includes('admin') ? 'Administrateur Flight' : 'Passager Flight',
      email: normalizedEmail,
      role: normalizedEmail.includes('admin') ? 'Admin' : 'Passenger'
    };

    this.currentUserSignal.set(user);
    localStorage.setItem(this.storageKey, JSON.stringify(user));
    return true;
  }

  /**
   * Simule une inscription puis connecte automatiquement l'utilisateur.
   */
  register(fullName: string, email: string, password: string): boolean {
    if (!fullName?.trim() || !email?.trim() || !password?.trim()) {
      return false;
    }

    const user: AuthUser = {
      id: Date.now(),
      fullName: fullName.trim(),
      email: email.trim().toLowerCase(),
      role: 'Passenger'
    };

    this.currentUserSignal.set(user);
    localStorage.setItem(this.storageKey, JSON.stringify(user));
    return true;
  }

  /**
   * Déconnecte l'utilisateur et supprime la session locale.
   */
  logout(): void {
    this.currentUserSignal.set(null);
    localStorage.removeItem(this.storageKey);
  }

  /**
   * Lit l'utilisateur courant depuis le localStorage.
   */
  private readStoredUser(): AuthUser | null {
    const raw = localStorage.getItem(this.storageKey);
    if (!raw) {
      return null;
    }

    try {
      return JSON.parse(raw) as AuthUser;
    } catch {
      localStorage.removeItem(this.storageKey);
      return null;
    }
  }
}