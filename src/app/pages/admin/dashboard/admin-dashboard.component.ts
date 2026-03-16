import { Component, OnInit, inject } from '@angular/core';
import { NgFor } from '@angular/common';
import { FlightDataService } from '../../../core/services/flight-data.service';
@Component({ standalone: true, selector: 'app-admin-dashboard', imports: [NgFor], templateUrl: './admin-dashboard.component.html', styleUrl: './admin-dashboard.component.css' })
export class AdminDashboardComponent implements OnInit { private readonly dataService = inject(FlightDataService); metrics = [{ label: 'Vols actifs', value: '0' }, { label: 'Réservations', value: '0' }, { label: 'Passagers', value: '0' }, { label: 'Revenus', value: '$0' }]; ngOnInit(): void { this.dataService.getDashboardMetrics().subscribe((data) => { this.metrics = [{ label: 'Vols actifs', value: String(data.flights) }, { label: 'Réservations', value: String(data.bookings) }, { label: 'Passagers', value: String(data.passengers) }, { label: 'Revenus', value: data.revenue }]; }); } }
