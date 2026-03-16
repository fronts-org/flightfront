import { Component, OnInit, inject } from '@angular/core';
import { CurrencyPipe, NgFor } from '@angular/common';
import { FlightDataService } from '../../core/services/flight-data.service';
import { Booking } from '../../core/models/flight.models';
@Component({ standalone: true, selector: 'app-my-bookings', imports: [NgFor, CurrencyPipe], templateUrl: './my-bookings.component.html', styleUrl: './my-bookings.component.css' })
export class MyBookingsComponent implements OnInit { private readonly dataService = inject(FlightDataService); bookings: Booking[] = []; ngOnInit(): void { this.dataService.getBookings().subscribe((data) => { this.bookings = data; }); } }
