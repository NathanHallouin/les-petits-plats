# Les Petits Plats

Application mobile de recettes de cuisine, simple et elegante. Recherchez parmi des centaines de recettes du quotidien, filtrez par temps de preparation, ustensiles ou appareils.

![React Native](https://img.shields.io/badge/React_Native-0.84-blue?logo=react)
![Expo](https://img.shields.io/badge/Expo-55-black?logo=expo)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?logo=typescript)
![License](https://img.shields.io/badge/License-MIT-green)

## Fonctionnalites

- Recherche de recettes par nom, ingredient ou description
- Filtres avances (temps, ustensiles, appareils)
- Interface moderne et responsive
- Compatible iOS, Android et Web
- Mode hors-ligne

## Captures d'ecran

| Accueil | Detail | Filtres |
|---------|--------|---------|
| ![Home](assets/screenshots/home.png) | ![Detail](assets/screenshots/detail.png) | ![Filters](assets/screenshots/filters.png) |

## Installation

### Prerequis

- Node.js 18+
- npm ou yarn
- Expo CLI (`npm install -g expo-cli`)

### Demarrage rapide

```bash
# Cloner le repository
git clone https://github.com/NathanHallouin/les-petits-plats.git
cd les-petits-plats

# Installer les dependances
npm install

# Lancer en mode developpement
npm start
```

### Commandes disponibles

| Commande | Description |
|----------|-------------|
| `npm start` | Lance le serveur de developpement Expo |
| `npm run android` | Lance sur emulateur/device Android |
| `npm run ios` | Lance sur simulateur/device iOS |
| `npm run web` | Lance dans le navigateur |
| `npm run lint` | Verifie le code avec Biome |
| `npm run format` | Formate le code avec Biome |

## Telecharger l'application

### Android

Telechargez la derniere version APK depuis la page [Releases](https://github.com/NathanHallouin/les-petits-plats/releases).

### iOS

L'application iOS est disponible via TestFlight. Consultez la page [Releases](https://github.com/NathanHallouin/les-petits-plats/releases) pour les instructions.

## Builds et Releases

Les builds iOS et Android sont automatises via GitHub Actions et EAS Build.

### Creer une release

```bash
# Creer un tag de version
git tag -a v1.0.0 -m "Version 1.0.0"
git push origin v1.0.0
```

Le workflow va automatiquement :
1. Builder l'APK Android
2. Builder l'IPA iOS
3. Creer une release GitHub avec les artefacts

### Configuration requise

Pour activer les builds automatiques, suivez le guide [SETUP_RELEASES.md](SETUP_RELEASES.md).

## Stack technique

- **Framework**: React Native + Expo
- **Langage**: TypeScript
- **Styles**: NativeWind (Tailwind CSS)
- **Navigation**: React Navigation
- **Linting**: Biome
- **CI/CD**: GitHub Actions + EAS Build

## Structure du projet

```
les-petits-plats/
├── assets/              # Images, logos, icones
├── components/          # Composants React
│   ├── Header.tsx
│   ├── HomeScreen.tsx
│   ├── RecipeCard.tsx
│   ├── RecipeDetailScreen.tsx
│   ├── RecipeFilters.tsx
│   └── SearchBar.tsx
├── data/                # Donnees des recettes
│   ├── recipes.ts
│   └── recipes/
├── App.tsx              # Point d'entree
├── global.css           # Styles globaux
└── tailwind.config.js   # Configuration Tailwind
```

## Contribuer

Les contributions sont les bienvenues ! N'hesitez pas a ouvrir une issue ou une pull request.

## Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de details.
