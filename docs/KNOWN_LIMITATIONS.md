# Known Limitations and Open Engineering Work

## Table of contents

- [1. Purpose](#1-purpose)
- [2. Confirmed repository issues](#2-confirmed-repository-issues)
- [3. Product and integration gaps](#3-product-and-integration-gaps)
- [4. Unverified areas](#4-unverified-areas)
- [5. Release exit criteria](#5-release-exit-criteria)

## 1. Purpose

This document separates confirmed source observations from features that still require verification. It prevents documentation, badges, and release notes from overstating project maturity.

## 2. Confirmed repository issues

| Priority | Issue | Impact |
|---|---|---|
| Critical | Hardcoded credential material in backend source | Treat exposed values as compromised and rotate them |
| Critical | Tracked environment file | May expose secrets; inspect privately and rotate values |
| Critical | Hardcoded JWT secret | Token forgery risk if exposed |
| High | Backend imports a route module absent from tracked route list | Server startup may fail |
| High | Stripe route references uninitialized client | Payment endpoint is not operational |
| High | Admin operations lack consistent role enforcement | Unauthorized administrative actions may be possible |
| High | Order total uses request-supplied price fields | Price tampering risk |
| Medium | Cart quantity handler uses inconsistent user ID property | Cart update may fail |
| Medium | Backend test script is a placeholder | Regressions are not automatically caught |
| Medium | Application lockfiles are missing | Dependency installation is not reproducible |
| Medium | Generated dependency directories are tracked | Repository size and review noise |
| Medium | Root documentation was minimal | Contributors lack reliable setup guidance |

## 3. Product and integration gaps

- End-to-end checkout has not been verified.
- Payment reconciliation and verified webhooks are not implemented in the inspected route.
- Email configuration is inconsistent.
- Durable production upload storage is not established.
- Admin route protection and role management need implementation and tests.
- The actual frontend-to-backend API contract needs verification.

## 4. Unverified areas

This review does not establish whether the application currently builds, whether every frontend screen is complete, whether all routes are reachable in a running environment, whether production credentials are compromised beyond tracked source, or whether a deployed instance is active.

## 5. Release exit criteria

Do not declare a release ready until critical and high-priority issues are fixed, credentials are rotated and history reviewed, clean installs and builds pass, tests cover sensitive workflows, and the API contract is documented from verified runtime behaviour.
