# Flight Frontend Pro

Frontend Angular moderne pour le projet **Flight Management System**.

## Objectif

Cette application fournit une interface :
- publique pour rechercher et réserver des vols
- privée pour suivre ses réservations
- administrative pour piloter les opérations

## Stack

- Angular 17
- TypeScript
- Angular Router
- HttpClient
- CSS moderne responsive
- Architecture par pages + services + composants partagés

## Modules fonctionnels

### Espace public
- Accueil premium
- Recherche de vols
- Détail / réservation
- Mes réservations

### Back-office
- Tableau de bord
- Gestion des vols
- Gestion des passagers
- Gestion des notifications

## Lancement

```bash
npm install
npm start
```

Application disponible sur `http://localhost:4200`.

## Configuration API

L'URL de l'API se trouve dans :

- `src/environments/environment.ts`
- `src/environments/environment.prod.ts`

## Structure

```text
src/app
├── core
│   ├── models
│   └── services
├── shared
│   └── components
├── pages
│   ├── home
│   ├── search
│   ├── booking
│   ├── my-bookings
│   └── admin
```

## Qualité du code

Chaque fichier contient :
- une entête expliquant son rôle
- des commentaires pédagogiques
- un code lisible et prêt à connecter à une API .NET

## Auteur

RANOELISON Dimbisoa Adrianno
