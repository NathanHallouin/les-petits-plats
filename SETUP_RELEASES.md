# iOS and Android Release Configuration

This guide explains how to set up automatic builds for iOS and Android.

## Prerequisites

1. An [Expo](https://expo.dev/signup) account (free)
2. Access to the GitHub repository

## Step 1: Log in to Expo

```bash
# Install EAS CLI globally
npm install -g eas-cli

# Log in to Expo
eas login
```

## Step 2: Configure the EAS Project

```bash
# Initialize EAS in the project
eas build:configure
```

This will:
- Create/update `eas.json`
- Register the project on Expo
- Configure build credentials

## Step 3: Configure Expo Token on GitHub

1. Go to [expo.dev/settings/access-tokens](https://expo.dev/settings/access-tokens)
2. Create a new token (Robot Users > Create Token)
3. Copy the token
4. Go to the GitHub repo settings
5. Navigate to **Secrets and variables > Actions**
6. Create a new secret named `EXPO_TOKEN` with the copied token

## Step 4: Configure iOS Credentials (Optional)

For production iOS builds, you need to configure:

```bash
# Configure iOS credentials
eas credentials
```

You will need:
- Apple Developer Account ($99/year)
- App Store Connect API Key
- Distribution Certificate
- Provisioning Profile

EAS can manage these credentials automatically.

## Step 5: Start a Build

### Via GitHub Actions

Create a tag to trigger a release:

```bash
git tag -a v1.0.0 -m "Version 1.0.0"
git push origin v1.0.0
```

Or manually trigger from the Actions tab > Build and Release > Run workflow.

### Locally

```bash
# Build Android APK
eas build --platform android --profile production

# Build iOS
eas build --platform ios --profile production

# Build both
eas build --platform all --profile production
```

## Build Profile Structure

The `eas.json` file contains 3 profiles:

| Profile | Usage | Android | iOS |
|---------|-------|---------|-----|
| `development` | Dev with hot reload | Debug APK | Simulator |
| `preview` | Internal testing | APK | Simulator |
| `production` | Public release | Signed APK | App Store IPA |

## EAS Build Quotas

The free Expo plan includes:
- 30 iOS builds per month
- 30 Android builds per month
- Shared queues

For more builds or priority builds, see [expo.dev/pricing](https://expo.dev/pricing).

## Troubleshooting

### "Not logged in" Error

```bash
eas login
```

### iOS Credentials Error

```bash
eas credentials --platform ios
```

### Build Failed

Check the logs on [expo.dev](https://expo.dev) in the project's Builds tab.
