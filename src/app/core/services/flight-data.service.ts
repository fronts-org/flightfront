/******************************************************************************
 * FICHIER : flight-data.service.ts
 * ROLE    : Fournit les données au frontend. Branchable ensuite à l'API .NET.
 ******************************************************************************/

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Booking, Flight, NotificationItem, Passenger } from '../models/flight.models';

@Injectable({ providedIn: 'root' })
export class FlightDataService {
  getFlights(): Observable<Flight[]> {
    return of([
      { id: 1, airline: 'Air Madagascar', flightNumber: 'MD701', departureCity: 'Antananarivo', arrivalCity: 'Nosy Be', departureTime: '2026-03-18T08:15:00', arrivalTime: '2026-03-18T09:30:00', duration: '1h15', price: 320, availableSeats: 27, status: 'Scheduled' },
      { id: 2, airline: 'Indian Ocean Airways', flightNumber: 'IO442', departureCity: 'Antananarivo', arrivalCity: 'Paris', departureTime: '2026-03-20T23:45:00', arrivalTime: '2026-03-21T10:15:00', duration: '11h30', price: 1280, availableSeats: 9, status: 'Boarding' },
      { id: 3, airline: 'SkyConnect', flightNumber: 'SC118', departureCity: 'Tamatave', arrivalCity: 'Sainte-Marie', departureTime: '2026-03-19T06:40:00', arrivalTime: '2026-03-19T07:30:00', duration: '50 min', price: 140, availableSeats: 14, status: 'Delayed' }
    ]);
  }
  getBookings(): Observable<Booking[]> {
    return of([
      { id: 1, flightId: 2, passengerName: 'Patrick Ranoelison', passengerEmail: 'patrick@example.com', seat: '14A', status: 'Confirmed', amount: 1280 },
      { id: 2, flightId: 1, passengerName: 'Lina Raharisoa', passengerEmail: 'lina@example.com', seat: '06C', status: 'Pending', amount: 320 }
    ]);
  }
  getPassengers(): Observable<Passenger[]> {
    return of([
      { id: 1, fullName: 'Patrick Ranoelison', email: 'patrick@example.com', loyaltyLevel: 'Platinum', totalTrips: 34 },
      { id: 2, fullName: 'Sarah Rakoto', email: 'sarah@example.com', loyaltyLevel: 'Gold', totalTrips: 17 },
      { id: 3, fullName: 'Jean Randria', email: 'jean@example.com', loyaltyLevel: 'Silver', totalTrips: 6 }
    ]);
  }
  getNotifications(): Observable<NotificationItem[]> {
    return of([
      { id: 1, title: 'Retard vol SC118', channel: 'Email', audience: 'Passagers SC118', status: 'Sent', createdAt: '2026-03-16 09:10' },
      { id: 2, title: 'Promo destination Nosy Be', channel: 'InApp', audience: 'Tous les clients', status: 'Scheduled', createdAt: '2026-03-16 10:00' },
      { id: 3, title: 'Maintenance portail paiement', channel: 'SMS', audience: 'Equipe support', status: 'Draft', createdAt: '2026-03-15 18:45' }
    ]);
  }
  getDashboardMetrics(): Observable<{ flights: number; bookings: number; passengers: number; revenue: string; }> {
    return of({ flights: 128, bookings: 842, passengers: 513, revenue: '$184,320' });
  }
}
