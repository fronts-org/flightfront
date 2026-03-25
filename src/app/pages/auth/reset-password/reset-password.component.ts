import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
@Component({ selector: 'app-reset-password', standalone: true, imports: [CommonModule, FormsModule], templateUrl: './reset-password.component.html', styleUrl: './reset-password.component.css' })
export class ResetPasswordComponent { private readonly authService = inject(AuthService); form = { email: '', token: '', newPassword: '', confirmPassword: '' }; errorMessage=''; infoMessage=''; submit(): void { this.errorMessage=''; this.infoMessage=''; this.authService.resetPassword(this.form).subscribe({ next: result => this.infoMessage = result.message, error: err => this.errorMessage = err?.error?.detail ?? err?.error?.message ?? 'Réinitialisation impossible.' }); }}
