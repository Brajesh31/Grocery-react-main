# Troubleshooting

## Table of contents

- [1. Installation](#1-installation)
- [2. Frontend](#2-frontend)
- [3. Backend](#3-backend)
- [4. Database](#4-database)
- [5. Authentication and cart](#5-authentication-and-cart)
- [6. Email and payments](#6-email-and-payments)
- [7. Reporting an issue](#7-reporting-an-issue)

## 1. Installation

**Dependencies resolve to unexpected versions.** Application lockfiles are not currently committed. Use a consistent Node.js/npm version and add lockfiles as a dedicated reviewed change.

**Dependency directories appear in Git status.** Do not commit local `node_modules`. Ignore rules do not remove files already tracked; those require an explicit index cleanup.

## 2. Frontend

**The customer app cannot reach the API.** Verify the API base URL, backend port, CORS allowlist, and whether the backend is running.

**A Vite route fails after browser refresh.** Verify the hosting platform's SPA fallback and configured base path.

## 3. Backend

**The backend fails during startup.** Inspect imports in `Server/server.js`. The current source references a route module not found in the tracked route directory. Restore the intended module or correct the import.

**A route returns 404.** Check the path inside the router and the prefix used when mounting it. Duplicate mounts may create unexpected endpoint paths.

## 4. Database

**MongoDB connection is refused.** Confirm MongoDB is running and the connection address is correct. The current server uses a local URI rather than validated environment configuration.

**A document fails validation.** Compare the request with the Mongoose schema. Product category is an ObjectId reference; order records require shipping address and item data.

## 5. Authentication and cart

**A protected route rejects a token.** Confirm signing and verification use the same rotated secret and consistent token payload. Never print tokens to logs.

**Cart quantity updates do not find the cart.** The quantity handler reads a different user ID property from other cart handlers. Standardize the decoded token shape and add ownership tests.

## 6. Email and payments

**Email delivery fails.** The source uses inconsistent mail environment names and contains exposed credential material. Rotate credentials and centralize mail configuration.

**Payment intent creation fails.** The Stripe route references an uninitialized client. Do not use live credentials until initialization and webhook verification are implemented.

## 7. Reporting an issue

Use the Bug Report template. Include package path, command, runtime version, expected and actual behaviour, and sanitized logs. Never attach environment files, access tokens, customer records, or database dumps.
