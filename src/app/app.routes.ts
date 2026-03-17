/******************************************************************************
 * FICHIER : app.routes.ts
 * ROLE    : Déclare l'ensemble des routes du frontend.
 *
 * DESCRIPTION
 * ---------------------------------------------------------------------------
 * Ce fichier centralise :
 * - les pages publiques
 * - les pages d'authentification
 * - les routes protégées utilisateur
 * - les routes protégées administrateur
 *
 * ORGANISATION
 * ---------------------------------------------------------------------------
 * 1. Routes publiques
 * 2. Routes d'authentification
 * 3. Routes utilisateur connecté
 * 4. Routes d'administration
 * 5. Route de repli
 ******************************************************************************/

import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { BookingComponent } from './pages/booking/booking.component';
import { MyBookingsComponent } from './pages/my-bookings/my-bookings.component';

import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { LogoutComponent } from './pages/auth/logout/logout.component';

import { AdminLayoutComponent } from './pages/admin/layout/admin-layout.component';
import { AdminDashboardComponent } from './pages/admin/dashboard/admin-dashboard.component';
import { AdminFlightsComponent } from './pages/admin/flights/admin-flights.component';
import { AdminPassengersComponent } from './pages/admin/passengers/admin-passengers.component';
import { AdminNotificationsComponent } from './pages/admin/notifications/admin-notifications.component';

import { authGuard } from './core/guards/auth.guard';
import { adminGuard } from './core/guards/admin.guard';

export const routes: Routes = [
  /**
   * Routes publiques accessibles à tous.
   */
  {
    path: '',
    component: HomeComponent,
    title: 'Accueil | Flight'
  },
  {
    path: 'search',
    component: SearchComponent,
    title: 'Recherche de vols | Flight'
  },
  {
    path: 'booking/:id',
    component: BookingComponent,
    title: 'Réservation | Flight'
  },

  /**
   * Routes d'authentification.
   */
  {
    path: 'login',
    component: LoginComponent,
    title: 'Connexion | Flight'
  },
  {
    path: 'register',
    component: RegisterComponent,
    title: 'Inscription | Flight'
  },
  {
    path: 'logout',
    component: LogoutComponent,
    title: 'Déconnexion | Flight'
  },

  /**
   * Routes réservées aux utilisateurs authentifiés.
   */
  {
    path: 'my-bookings',
    component: MyBookingsComponent,
    canActivate: [authGuard],
    title: 'Mes réservations | Flight'
  },

  /**
   * Routes d'administration.
   * Elles sont protégées par adminGuard.
   */
  {
    path: 'admin',
    component: AdminLayoutComponent,
    canActivate: [adminGuard],
    children: [
      {
        path: '',
        component: AdminDashboardComponent,
        title: 'Dashboard Admin | Flight'
      },
      {
        path: 'flights',
        component: AdminFlightsComponent,
        title: 'Gestion des vols | Flight Admin'
      },
      {
        path: 'passengers',
        component: AdminPassengersComponent,
        title: 'Gestion des passagers | Flight Admin'
      },
      {
        path: 'notifications',
        component: AdminNotificationsComponent,
        title: 'Notifications | Flight Admin'
      }
    ]
  },

  /**
   * Route de secours :
   * si l'URL ne correspond à rien, retour à l'accueil.
   */
  {
    path: '**',
    redirectTo: ''
  }
];