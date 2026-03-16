/******************************************************************************
 * FICHIER : main.ts
 * ROLE    : Point d'entrée principal de l'application Angular.
 ******************************************************************************/

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((error) => console.error('Erreur de démarrage Angular :', error));
