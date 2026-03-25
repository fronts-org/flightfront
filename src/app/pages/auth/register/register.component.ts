import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
@Component({ selector: 'app-register', standalone: true, imports: [CommonModule, FormsModule, RouterLink], templateUrl: './register.component.html', styleUrl: './register.component.css' })
export class RegisterComponent { private readonly authService = inject(AuthService); private readonly router = inject(Router); form = { username: '', email: '', password: '', confirmPassword: '', firstName: '', lastName: '', phoneNumber: '' }; errorMessage = ''; infoMessage = ''; isLoading = false; submit(): void { this.errorMessage=''; this.infoMessage=''; if (this.form.password !== this.form.confirmPassword) { this.errorMessage='Les mots de passe ne correspondent pas.'; return; } this.isLoading = true; this.authService.register(this.form).subscribe({ next: result => { this.isLoading=false; this.infoMessage = result.emailConfirmationToken ? `Compte créé. Token de confirmation (démo) : ${result.emailConfirmationToken}` : 'Compte créé.'; this.router.navigate(['/profile']); }, error: err => { this.isLoading=false; this.errorMessage = err?.error?.detail ?? err?.error?.message ?? 'Inscription impossible.'; } }); }}
