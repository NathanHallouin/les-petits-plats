# Les Petits Plats

A simple and elegant recipe mobile application. Search through hundreds of everyday recipes, filter by preparation time, utensils, or appliances.

![React Native](https://img.shields.io/badge/React_Native-0.84-blue?logo=react)
![Expo](https://img.shields.io/badge/Expo-55-black?logo=expo)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?logo=typescript)
![License](https://img.shields.io/badge/License-MIT-green)

## Features

- Search recipes by name, ingredient, or description
- Advanced filters (time, utensils, appliances)
- Modern and responsive interface
- Compatible with iOS, Android, and Web
- Offline mode

## Screenshots

| Home | Detail | Filters |
|------|--------|---------|
| ![Home](assets/screenshots/home.png) | ![Detail](assets/screenshots/detail.png) | ![Filters](assets/screenshots/filters.png) |

## Installation

### Prerequisites

- Node.js 18+
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)

### Quick Start

```bash
# Clone the repository
git clone https://github.com/NathanHallouin/les-petits-plats.git
cd les-petits-plats

# Install dependencies
npm install

# Start development server
npm start
```

### Available Commands

| Command | Description |
|---------|-------------|
| `npm start` | Start Expo development server |
| `npm run android` | Run on Android emulator/device |
| `npm run ios` | Run on iOS simulator/device |
| `npm run web` | Run in browser |
| `npm run lint` | Check code with Biome |
| `npm run format` | Format code with Biome |

## Download the App

### Android

Download the latest APK version from the [Releases](https://github.com/NathanHallouin/les-petits-plats/releases) page.

### iOS

The iOS app is available via TestFlight. Check the [Releases](https://github.com/NathanHallouin/les-petits-plats/releases) page for instructions.

## Builds and Releases

iOS and Android builds are automated via GitHub Actions and EAS Build.

### Create a Release

```bash
# Create a version tag
git tag -a v1.0.0 -m "Version 1.0.0"
git push origin v1.0.0
```

The workflow will automatically:
1. Build the Android APK
2. Build the iOS IPA
3. Create a GitHub release with the artifacts

### Required Configuration

To enable automatic builds, follow the [SETUP_RELEASES.md](SETUP_RELEASES.md) guide.

## Tech Stack

- **Framework**: React Native + Expo
- **Language**: TypeScript
- **Styles**: NativeWind (Tailwind CSS)
- **Navigation**: React Navigation
- **Linting**: Biome
- **CI/CD**: GitHub Actions + EAS Build

## Project Structure

```
les-petits-plats/
├── assets/              # Images, logos, icons
├── components/          # React components
│   ├── Header.tsx
│   ├── HomeScreen.tsx
│   ├── RecipeCard.tsx
│   ├── RecipeDetailScreen.tsx
│   ├── RecipeFilters.tsx
│   └── SearchBar.tsx
├── data/                # Recipe data
│   ├── recipes.ts
│   └── recipes/
├── App.tsx              # Entry point
├── global.css           # Global styles
└── tailwind.config.js   # Tailwind configuration
```

## Contributing

Contributions are welcome! Feel free to open an issue or pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
