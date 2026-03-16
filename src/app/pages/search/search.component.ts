import { Component, OnInit, inject } from '@angular/core';
import { CurrencyPipe, DatePipe, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Flight } from '../../core/models/flight.models';
import { FlightDataService } from '../../core/services/flight-data.service';
@Component({ standalone: true, selector: 'app-search', imports: [NgFor, CurrencyPipe, DatePipe, RouterLink, FormsModule], templateUrl: './search.component.html', styleUrl: './search.component.css' })
export class SearchComponent implements OnInit { private readonly flightService = inject(FlightDataService); flights: Flight[] = []; filteredFlights: Flight[] = []; filters = { departureCity: '', arrivalCity: '', maxPrice: '' }; ngOnInit(): void { this.flightService.getFlights().subscribe((data) => { this.flights = data; this.filteredFlights = data; }); } applyFilters(): void { this.filteredFlights = this.flights.filter((flight) => { const byDeparture = !this.filters.departureCity || flight.departureCity.toLowerCase().includes(this.filters.departureCity.toLowerCase()); const byArrival = !this.filters.arrivalCity || flight.arrivalCity.toLowerCase().includes(this.filters.arrivalCity.toLowerCase()); const byPrice = !this.filters.maxPrice || flight.price <= Number(this.filters.maxPrice); return byDeparture && byArrival && byPrice; }); } }
