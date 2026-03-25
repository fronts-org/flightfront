import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
@Component({ selector: 'app-login', standalone: true, imports: [CommonModule, FormsModule, RouterLink], templateUrl: './login.component.html', styleUrl: './login.component.css' })
export class LoginComponent { private readonly authService = inject(AuthService); private readonly router = inject(Router); form = { username: '', password: '' }; errorMessage = ''; isLoading = false; submit(): void { this.errorMessage = ''; this.isLoading = true; this.authService.login(this.form).subscribe({ next: auth => { this.isLoading = false; this.router.navigate([auth.roles.includes('Admin') ? '/admin' : '/profile']); }, error: err => { this.isLoading = false; this.errorMessage = err?.error?.message ?? 'Connexion impossible.'; } }); }}
