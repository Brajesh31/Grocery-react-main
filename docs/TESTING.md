# Testing Strategy

## Table of contents

- [1. Current status](#1-current-status)
- [2. Testing layers](#2-testing-layers)
- [3. Backend cases](#3-backend-cases)
- [4. Frontend cases](#4-frontend-cases)
- [5. Security cases](#5-security-cases)
- [6. Existing commands](#6-existing-commands)
- [7. Release gate](#7-release-gate)

## 1. Current status

A comprehensive passing test suite has not been verified. The backend package currently defines a placeholder test command that exits with an error. Frontend manifests include test tooling, but coverage and passing results have not been established.

## 2. Testing layers

| Layer | Objective | Suggested tooling |
|---|---|---|
| Unit | Validate utilities, schemas, and pure functions | Jest or Vitest |
| Component | Verify React behaviour | React Testing Library |
| API integration | Verify routes, middleware, and database interactions | Supertest and isolated test database |
| End-to-end | Validate complete shopping workflows | Playwright or Cypress |
| Security | Verify authentication, authorization, validation, and uploads | Automated tests plus manual review |
| Accessibility | Detect semantic and interaction barriers | axe tooling plus manual testing |

Choose one primary test framework per package where practical.

## 3. Backend cases

Test registration, duplicate email, password hashing, login failures, token expiry, profile ownership, product CRUD, category creation, cart ownership and quantity boundaries, order creation using database prices, admin-only actions, upload restrictions, and payment webhook verification.

## 4. Frontend cases

Test loading, empty, success, and error states; form validation; navigation; cart updates; order summaries; and expired authentication. Check responsive layouts and accessible names.

## 5. Security cases

Prove that unauthenticated visitors cannot call protected routes, regular users cannot call admin endpoints, users cannot access another user's cart/order, client prices cannot change totals, malformed requests fail safely, uploads cannot escape storage, and secrets never appear in responses or logs.

## 6. Existing commands

Customer frontend:

```bash
cd Client
npm test -- --watchAll=false
npm run build
```

Admin frontend:

```bash
cd Client/react
npm run lint
npm run build
```

Backend:

```bash
cd Server
npm test
```

The backend test command is currently a placeholder and is expected to fail until a real suite is implemented. Record actual results; do not mark unexecuted checks as passing.

## 7. Release gate

Do not release until the backend starts reliably, critical security findings are fixed, tests cover sensitive workflows, production configuration is externalized, and a clean install from committed lockfiles succeeds.
