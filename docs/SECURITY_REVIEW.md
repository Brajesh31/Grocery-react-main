# Security Review and Remediation Register

## Table of contents

- [1. Scope](#1-scope)
- [2. Critical findings](#2-critical-findings)
- [3. High-priority findings](#3-high-priority-findings)
- [4. Remediation order](#4-remediation-order)
- [5. Verification requirements](#5-verification-requirements)
- [6. Review limitations](#6-review-limitations)

## 1. Scope

This review is based on inspected source files including the server entry point, authentication middleware, order and payment routes, models, package manifests, and tracked file inventory. It is not a penetration test, dependency audit, or formal security certification.

## 2. Critical findings

| Finding | Evidence | Risk | Required action |
|---|---|---|---|
| Credential material embedded in backend source | Server, authentication middleware, order notification route, and admin creation script contain hardcoded credential values | Public readers may reuse exposed credentials or impersonate services/users | Rotate affected credentials immediately, remove from source, and remediate Git history |
| Tracked environment file | An environment file exists under the nested frontend package | May expose configuration or secrets | Treat any contained credentials as compromised; inspect privately and review history |
| Hardcoded JWT signing/verification secret | Active server and middleware code embed a secret | Token forgery risk if exposed | Rotate, externalize, invalidate old tokens, and test verification |

## 3. High-priority findings

| Finding | Evidence | Risk | Required action |
|---|---|---|---|
| Admin routes lack consistent role enforcement | Order administration and user mutation handlers do not consistently show admin checks | Unauthorized administrative actions may be possible | Add centralized authentication and role middleware to every admin route |
| Stripe client is not initialized | Payment route calls a client without active initialization | Payment requests fail and payment state cannot be trusted | Initialize server-side, validate amounts, verify webhooks, and reconcile orders |
| Order totals trust request item prices | Total is calculated from request item product fields | Client manipulation may alter totals | Load product prices from database and calculate server-side |
| Upload controls are incomplete | Multer checks MIME prefix but has no visible size limit or content inspection | Resource exhaustion or malicious uploads | Add size limits, content validation, safe names, storage isolation, and scanning where appropriate |
| Authentication payload access is inconsistent | Cart quantity handler reads a different user ID property | Ownership checks may fail | Standardize token claims and test protected routes |

## 4. Remediation order

1. Rotate every exposed credential at its provider.
2. Revoke affected sessions/tokens and review provider audit logs.
3. Remove secrets from current files and coordinate Git-history cleanup.
4. Remove tracked environment files and generated dependency directories.
5. Move secrets into validated runtime configuration.
6. Add centralized authentication and role-based authorization.
7. Repair payment initialization and webhook verification.
8. Recalculate prices and totals using database records.
9. Harden uploads and request validation.
10. Add regression tests and dependency scanning.

History rewriting affects collaborators and clones. Coordinate it, create a backup, and ensure exposed credentials are inactive before rewriting history.

## 5. Verification requirements

A finding is not resolved merely because a line was deleted. Verify provider-side rotation, search complete Git history, test authorization boundaries, run secret scanning, test payment webhooks, and record evidence in the remediation pull request.

## 6. Review limitations

This review does not inspect production infrastructure, live provider settings, deployment secrets, database access controls, every frontend component, or all dependencies. Further review is required after remediation.
