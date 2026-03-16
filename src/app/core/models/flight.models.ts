/******************************************************************************
 * FICHIER : flight.models.ts
 * ROLE    : Définit les modèles TypeScript du frontend.
 ******************************************************************************/

export interface Flight { id: number; airline: string; flightNumber: string; departureCity: string; arrivalCity: string; departureTime: string; arrivalTime: string; duration: string; price: number; availableSeats: number; status: 'Scheduled' | 'Boarding' | 'Delayed' | 'Cancelled'; }
export interface Booking { id: number; flightId: number; passengerName: string; passengerEmail: string; seat: string; status: 'Confirmed' | 'Pending' | 'Cancelled'; amount: number; }
export interface Passenger { id: number; fullName: string; email: string; loyaltyLevel: 'Silver' | 'Gold' | 'Platinum'; totalTrips: number; }
export interface NotificationItem { id: number; title: string; channel: 'Email' | 'SMS' | 'InApp'; audience: string; status: 'Draft' | 'Scheduled' | 'Sent'; createdAt: string; }
