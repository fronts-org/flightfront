import { Component, OnInit, inject } from '@angular/core';
import { NgFor } from '@angular/common';
import { Passenger } from '../../../core/models/flight.models';
import { FlightDataService } from '../../../core/services/flight-data.service';
@Component({ standalone: true, selector: 'app-admin-passengers', imports: [NgFor], templateUrl: './admin-passengers.component.html', styleUrl: './admin-passengers.component.css' })
export class AdminPassengersComponent implements OnInit { private readonly dataService = inject(FlightDataService); passengers: Passenger[] = []; ngOnInit(): void { this.dataService.getPassengers().subscribe((data) => { this.passengers = data; }); } }
