import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, switchMap, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';
export const refreshTokenInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService); const router = inject(Router);
  return next(req).pipe(catchError((error: HttpErrorResponse) => {
    const isRefreshCall = req.url.endsWith('/account/refresh-token'); const isAnonymousEndpoint = req.url.endsWith('/account/login') || req.url.endsWith('/account/register') || req.url.endsWith('/account/forgot-password') || req.url.endsWith('/account/reset-password') || req.url.endsWith('/account/confirm-email');
    if (error.status !== 401 || isRefreshCall || isAnonymousEndpoint || !authService.isAuthenticated()) return throwError(() => error);
    return authService.refreshToken().pipe(switchMap(() => next(req)), catchError((refreshError) => { authService.logoutLocal(); router.navigate(['/login']); return throwError(() => refreshError); }));
  }));
};
