/******************************************************************************
 * FICHIER : app.config.ts
 * ROLE    : Configuration globale de l'application Angular.
 ******************************************************************************/

import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(withInterceptorsFromDi())]
};
