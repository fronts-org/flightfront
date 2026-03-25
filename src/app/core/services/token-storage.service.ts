import { Injectable } from '@angular/core';
import { LoginResult } from '../models/auth.models';
@Injectable({ providedIn: 'root' })
export class TokenStorageService {
  private readonly authKey = 'flight_auth_result';
  getAuth(): LoginResult | null { const raw = localStorage.getItem(this.authKey); return raw ? JSON.parse(raw) as LoginResult : null; }
  saveAuth(auth: LoginResult): void { localStorage.setItem(this.authKey, JSON.stringify(auth)); }
  getAccessToken(): string | null { return this.getAuth()?.accessToken ?? null; }
  getRefreshToken(): string | null { return this.getAuth()?.refreshToken ?? null; }
  clear(): void { localStorage.removeItem(this.authKey); }
}
