# Configuration des Releases iOS et Android

Ce guide explique comment configurer les builds automatiques pour iOS et Android.

## Prerequis

1. Un compte [Expo](https://expo.dev/signup) (gratuit)
2. Acces au repository GitHub

## Etape 1 : Connexion a Expo

```bash
# Installer EAS CLI globalement
npm install -g eas-cli

# Se connecter a Expo
eas login
```

## Etape 2 : Configurer le projet EAS

```bash
# Initialiser EAS dans le projet
eas build:configure
```

Cela va :
- Creer/mettre a jour `eas.json`
- Enregistrer le projet sur Expo
- Configurer les identifiants de build

## Etape 3 : Configurer le token Expo sur GitHub

1. Aller sur [expo.dev/settings/access-tokens](https://expo.dev/settings/access-tokens)
2. Creer un nouveau token (Robot Users > Create Token)
3. Copier le token
4. Aller dans les settings du repo GitHub
5. Aller dans **Secrets and variables > Actions**
6. Creer un nouveau secret nomme `EXPO_TOKEN` avec le token copie

## Etape 4 : Configurer les credentials iOS (optionnel)

Pour les builds iOS de production, vous devez configurer :

```bash
# Configurer les credentials iOS
eas credentials
```

Vous aurez besoin :
- Apple Developer Account ($99/an)
- App Store Connect API Key
- Distribution Certificate
- Provisioning Profile

EAS peut gerer ces credentials automatiquement.

## Etape 5 : Lancer un build

### Via GitHub Actions

Creez un tag pour declencher une release :

```bash
git tag -a v1.0.0 -m "Version 1.0.0"
git push origin v1.0.0
```

Ou lancez manuellement depuis l'onglet Actions > Build and Release > Run workflow.

### En local

```bash
# Build Android APK
eas build --platform android --profile production

# Build iOS
eas build --platform ios --profile production

# Build les deux
eas build --platform all --profile production
```

## Structure des profils de build

Le fichier `eas.json` contient 3 profils :

| Profil | Usage | Android | iOS |
|--------|-------|---------|-----|
| `development` | Dev avec hot reload | APK debug | Simulateur |
| `preview` | Tests internes | APK | Simulateur |
| `production` | Release publique | APK signe | IPA pour App Store |

## Quotas EAS Build

Le plan gratuit d'Expo inclut :
- 30 builds iOS par mois
- 30 builds Android par mois
- Files d'attente partagees

Pour plus de builds ou des builds prioritaires, voir [expo.dev/pricing](https://expo.dev/pricing).

## Troubleshooting

### Erreur "Not logged in"

```bash
eas login
```

### Erreur de credentials iOS

```bash
eas credentials --platform ios
```

### Build echoue

Consultez les logs sur [expo.dev](https://expo.dev) dans l'onglet Builds du projet.
