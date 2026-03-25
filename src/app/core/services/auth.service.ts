import { Injectable, computed, inject, signal } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ActivityResponseItem, ConfirmEmailRequest, CurrentUserResponse, ForgotPasswordRequest, ForgotPasswordResponse, LoginRequest, LoginResult, ProfileResponse, RefreshTokenRequest, RegisterRequest, ResetPasswordRequest } from '../models/auth.models';
import { TokenStorageService } from './token-storage.service';
@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly http = inject(HttpClient); private readonly storage = inject(TokenStorageService); private readonly accountUrl = `${environment.apiBaseUrl}/account`; private readonly authState = signal<LoginResult | null>(this.storage.getAuth());
  readonly currentAuth = computed(() => this.authState()); readonly isAuthenticated = computed(() => !!this.authState()?.accessToken); readonly roles = computed(() => this.authState()?.roles ?? []); readonly permissions = computed(() => this.authState()?.permissions ?? []); readonly isAdmin = computed(() => this.roles().includes('Admin'));
  login(request: LoginRequest): Observable<LoginResult> { return this.http.post<LoginResult>(`${this.accountUrl}/login`, request).pipe(tap(result => this.setAuth(result))); }
  register(request: RegisterRequest): Observable<LoginResult> { return this.http.post<LoginResult>(`${this.accountUrl}/register`, request).pipe(tap(result => this.setAuth(result))); }
  refreshToken(): Observable<LoginResult> { const auth = this.storage.getAuth(); const request: RefreshTokenRequest = { refreshToken: auth?.refreshToken ?? '' }; const headers = new HttpHeaders({ Authorization: `Bearer ${auth?.accessToken ?? ''}` }); return this.http.post<LoginResult>(`${this.accountUrl}/refresh-token`, request, { headers }).pipe(tap(result => this.setAuth({ ...result, emailConfirmationToken: auth?.emailConfirmationToken ?? result.emailConfirmationToken }))); }
  getCurrentUser(): Observable<CurrentUserResponse> { return this.http.get<CurrentUserResponse>(`${this.accountUrl}/user`); }
  getProfile(): Observable<ProfileResponse> { return this.http.get<ProfileResponse>(`${this.accountUrl}/profile`); }
  getActivity(): Observable<ActivityResponseItem[]> { return this.http.get<ActivityResponseItem[]>(`${this.accountUrl}/activity`); }
  forgotPassword(request: ForgotPasswordRequest): Observable<ForgotPasswordResponse> { return this.http.post<ForgotPasswordResponse>(`${this.accountUrl}/forgot-password`, request); }
  resetPassword(request: ResetPasswordRequest): Observable<{ message: string }> { return this.http.post<{ message: string }>(`${this.accountUrl}/reset-password`, request); }
  confirmEmail(request: ConfirmEmailRequest): Observable<{ message: string }> { return this.http.post<{ message: string }>(`${this.accountUrl}/confirm-email`, request); }
  logout(): Observable<{ message: string }> { return this.http.post<{ message: string }>(`${this.accountUrl}/logout`, {}).pipe(tap(() => this.clearAuth())); }
  logoutLocal(): void { this.clearAuth(); }
  hasRole(role: string): boolean { return this.roles().includes(role); }
  private setAuth(auth: LoginResult): void { this.authState.set(auth); this.storage.saveAuth(auth); }
  private clearAuth(): void { this.authState.set(null); this.storage.clear(); }
}
