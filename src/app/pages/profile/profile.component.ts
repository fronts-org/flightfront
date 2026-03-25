import { Component, inject } from '@angular/core';
import { CommonModule, DatePipe, NgFor, NgIf } from '@angular/common';
import { AuthService } from '../../core/services/auth.service';
@Component({ selector: 'app-profile', standalone: true, imports: [CommonModule, NgIf, NgFor, DatePipe], templateUrl: './profile.component.html', styleUrl: './profile.component.css' })
export class ProfileComponent { private readonly authService = inject(AuthService); profile$ = this.authService.getProfile(); activity$ = this.authService.getActivity(); }
