import { Component, OnInit, inject } from '@angular/core';
import { CurrencyPipe, DatePipe, NgFor } from '@angular/common';
import { FlightDataService } from '../../../core/services/flight-data.service';
import { Flight } from '../../../core/models/flight.models';
@Component({ standalone: true, selector: 'app-admin-flights', imports: [NgFor, DatePipe, CurrencyPipe], templateUrl: './admin-flights.component.html', styleUrl: './admin-flights.component.css' })
export class AdminFlightsComponent implements OnInit { private readonly dataService = inject(FlightDataService); flights: Flight[] = []; ngOnInit(): void { this.dataService.getFlights().subscribe((data) => { this.flights = data; }); } }
