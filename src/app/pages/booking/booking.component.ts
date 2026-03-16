import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CurrencyPipe, DatePipe, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlightDataService } from '../../core/services/flight-data.service';
import { Flight } from '../../core/models/flight.models';
@Component({ standalone: true, selector: 'app-booking', imports: [NgIf, DatePipe, CurrencyPipe, FormsModule], templateUrl: './booking.component.html', styleUrl: './booking.component.css' })
export class BookingComponent implements OnInit { private readonly route = inject(ActivatedRoute); private readonly dataService = inject(FlightDataService); flight?: Flight; bookingForm = { fullName: '', email: '', seat: '12A' }; ngOnInit(): void { const id = Number(this.route.snapshot.paramMap.get('id')); this.dataService.getFlights().subscribe((flights) => { this.flight = flights.find((item) => item.id === id); }); } confirmBooking(): void { alert(`Réservation simulée pour ${this.bookingForm.fullName} sur le siège ${this.bookingForm.seat}.`); } }
