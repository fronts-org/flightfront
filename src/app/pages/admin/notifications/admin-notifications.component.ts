import { Component, OnInit, inject } from '@angular/core';
import { NgFor } from '@angular/common';
import { NotificationItem } from '../../../core/models/flight.models';
import { FlightDataService } from '../../../core/services/flight-data.service';
@Component({ standalone: true, selector: 'app-admin-notifications', imports: [NgFor], templateUrl: './admin-notifications.component.html', styleUrl: './admin-notifications.component.css' })
export class AdminNotificationsComponent implements OnInit { private readonly dataService = inject(FlightDataService); notifications: NotificationItem[] = []; ngOnInit(): void { this.dataService.getNotifications().subscribe((data) => { this.notifications = data; }); } }
