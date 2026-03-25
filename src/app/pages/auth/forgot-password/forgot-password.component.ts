import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
@Component({ selector: 'app-forgot-password', standalone: true, imports: [CommonModule, FormsModule], templateUrl: './forgot-password.component.html', styleUrl: './forgot-password.component.css' })
export class ForgotPasswordComponent { private readonly authService = inject(AuthService); email=''; infoMessage=''; resetToken=''; errorMessage=''; submit(): void { this.errorMessage=''; this.infoMessage=''; this.authService.forgotPassword({ email: this.email }).subscribe({ next: result => { this.infoMessage=result.message; this.resetToken=result.resetToken; }, error: err => { this.errorMessage = err?.error?.message ?? 'Impossible de générer la demande.'; } }); }}
