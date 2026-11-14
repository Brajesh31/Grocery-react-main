# Configuration Guide

## Table of contents

- [1. Configuration status](#1-configuration-status)
- [2. Current source observations](#2-current-source-observations)
- [3. Required refactor](#3-required-refactor)
- [4. Secret management](#4-secret-management)
- [5. Frontend API configuration](#5-frontend-api-configuration)
- [6. Validation checklist](#6-validation-checklist)

## 1. Configuration status

Configuration is not centralized. The backend reads some values from the process environment, embeds others directly in source, and uses inconsistent variable names. This guide records observations rather than providing a ready-to-use production environment file.

## 2. Current source observations

| Concern | Current observation | Required action |
|---|---|---|
| HTTP port | Server reads `PORT` with fallback 5000 | Validate one documented setting |
| MongoDB | Local connection string embedded in server source | Move to validated `MONGODB_URI` |
| Mail transport | One path reads `Email_User` and `Pass` | Standardize names and one mail service |
| Order email | Another path reads `EMAIL_USER` | Remove inconsistent configuration |
| JWT | Active code embeds a signing/verification secret | Rotate and externalize |
| Stripe | Route references a client that is not initialized | Initialize securely and verify webhooks |
| Twilio | Dependency is present but active usage is unverified | Do not treat as configured |

These are source observations, not a complete supported environment-variable contract.

## 3. Required refactor

Centralize configuration in one backend module. Load values once, validate required values at startup, use consistent uppercase names, fail fast with safe messages, separate development/test/production settings, and never log secrets. Do not use fallback secrets.

A future configuration contract may include `PORT`, `MONGODB_URI`, `JWT_SECRET`, mail settings, and Stripe server credentials. These are recommended names for a future refactor, not all currently functional variables.

## 4. Secret management

Use untracked local environment files for development and a hosting-provider secret manager for deployment. Restrict production access and rotate credentials after exposure. Never put server-side Stripe keys, SMTP passwords, JWT secrets, or database credentials in frontend variables.

A public repository inspection found credential material in source and a tracked environment file. Treat exposed values as compromised. Rotate them at the issuing providers, then remove them from current files and coordinate Git-history remediation.

## 5. Frontend API configuration

Use one documented API base URL per environment. Browser-visible variables are public by design. Never bundle server secrets into React assets. Reconcile frontend API configuration with the backend CORS allowlist and avoid scattered hardcoded localhost URLs.

## 6. Validation checklist

- [ ] Exposed credentials have been rotated.
- [ ] No secret remains in tracked files or Git history.
- [ ] Required environment values are validated at startup.
- [ ] No server secret is bundled into frontend assets.
- [ ] CORS uses explicit trusted origins.
- [ ] Development and production settings are separated.
- [ ] Documentation and deployment settings use consistent names.
