# FlightFront

Frontend Angular moderne pour une application de gestion de vols.

## Présentation

**FlightFront** est une interface utilisateur Angular pensée pour fonctionner avec un backend **ASP.NET Core / Clean Architecture / CQRS**.

Cette version du frontend met l'accent sur :

- une interface élégante et professionnelle
- une architecture claire pour un débutant comme pour un développeur confirmé
- des pages publiques et des pages d'administration
- un code commenté avec le rôle de chaque fichier
- une base prête à être branchée sur une API réelle

## Technologies

- Angular 17
- TypeScript
- HTML / CSS
- Reactive Forms
- Angular Router

## Pages disponibles

### Site public

- `/search` : recherche de vols
- `/book-flight` : réservation d'un vol
- `/bookings` : consultation des réservations utilisateur

### Administration

- `/admin/login` : connexion administrateur
- `/admin/flights` : liste des vols
- `/admin/new-flight` : création d'un vol
- `/admin/bookings` : suivi des réservations
- `/admin/airports` : gestion des aéroports
- `/admin/cities` : gestion des villes

## Structure du projet

```text
src/
  app/
    components/
      search-form/
    models/
      frontend.models.ts
    pages/
      website/
      admin/
    services/
      flight-data.service.ts
    app.component.*
    app.routes.ts
  styles.css
```

## Architecture fonctionnelle

Le projet est organisé autour de trois couches front-end simples :

1. Pages
2. Components
3. Services

## Service de données

Le fichier `flight-data.service.ts` contient actuellement des données mockées pour les vols, les réservations, les aéroports, les villes et les indicateurs du dashboard admin.

Dans un projet connecté au backend, ce service devra être remplacé ou enrichi par des appels HTTP (`HttpClient`) vers l'API .NET.

## Lancer le projet

```bash
npm install
npm start
```

Puis ouvrir `http://localhost:4200`.

## Points forts

- design moderne avec cartes, tableaux et formulaires premium
- routing complet public + admin
- composants standalone Angular
- formulaires réactifs
- code lisible et commenté

## Suite recommandée

- brancher `HttpClient` sur le backend .NET
- ajouter une authentification JWT réelle
- intégrer des guards Angular pour la partie admin
- connecter les formulaires aux endpoints réels

## Remarques

Si le téléchargement ZIP échoue, les fichiers peuvent être fournis un à un.
