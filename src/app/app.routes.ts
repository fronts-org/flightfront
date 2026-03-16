/******************************************************************************
 * FICHIER : app.routes.ts
 * ROLE    : Déclare l'ensemble des routes du frontend.
 ******************************************************************************/

import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { BookingComponent } from './pages/booking/booking.component';
import { MyBookingsComponent } from './pages/my-bookings/my-bookings.component';
import { AdminLayoutComponent } from './pages/admin/layout/admin-layout.component';
import { AdminDashboardComponent } from './pages/admin/dashboard/admin-dashboard.component';
import { AdminFlightsComponent } from './pages/admin/flights/admin-flights.component';
import { AdminPassengersComponent } from './pages/admin/passengers/admin-passengers.component';
import { AdminNotificationsComponent } from './pages/admin/notifications/admin-notifications.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Accueil | Flight' },
  { path: 'search', component: SearchComponent, title: 'Recherche | Flight' },
  { path: 'booking/:id', component: BookingComponent, title: 'Réservation | Flight' },
  { path: 'my-bookings', component: MyBookingsComponent, title: 'Mes réservations | Flight' },
  { path: 'admin', component: AdminLayoutComponent, children: [
      { path: '', component: AdminDashboardComponent, title: 'Dashboard Admin | Flight' },
      { path: 'flights', component: AdminFlightsComponent, title: 'Vols | Admin' },
      { path: 'passengers', component: AdminPassengersComponent, title: 'Passagers | Admin' },
      { path: 'notifications', component: AdminNotificationsComponent, title: 'Notifications | Admin' }
  ]},
  { path: '**', redirectTo: '' }
];
