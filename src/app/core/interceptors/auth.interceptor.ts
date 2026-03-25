import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { TokenStorageService } from '../services/token-storage.service';
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const storage = inject(TokenStorageService); const accessToken = storage.getAccessToken();
  if (!accessToken || req.url.endsWith('/account/login') || req.url.endsWith('/account/register')) return next(req);
  return next(req.clone({ setHeaders: { Authorization: `Bearer ${accessToken}` } }));
};
