# Engineering Roadmap

## Table of contents

- [1. Guiding principle](#1-guiding-principle)
- [2. Phase 0: Contain security exposure](#2-phase-0-contain-security-exposure)
- [3. Phase 1: Restore backend reliability](#3-phase-1-restore-backend-reliability)
- [4. Phase 2: Establish quality gates](#4-phase-2-establish-quality-gates)
- [5. Phase 3: Complete commerce workflows](#5-phase-3-complete-commerce-workflows)
- [6. Phase 4: Improve user experience](#6-phase-4-improve-user-experience)
- [7. Completion policy](#7-completion-policy)

## 1. Guiding principle

Prioritize safety, correctness, and reproducibility before adding visible features. A polished interface cannot compensate for insecure authentication, broken payment processing, or unreliable order data.

## 2. Phase 0: Contain security exposure

- Rotate exposed mail, JWT, administrator, and other provider credentials.
- Remove tracked environment files and hardcoded secrets.
- Coordinate Git-history cleanup.
- Review provider audit logs and invalidate affected sessions.
- Restrict administrative operations and document remediation.

## 3. Phase 1: Restore backend reliability

- Resolve missing route imports and duplicate router mounts.
- Centralize and validate environment configuration.
- Add a real start script and health endpoint.
- Standardize authentication claims and middleware.
- Enforce role-based access on every administrative route.
- Validate request bodies and identifiers.
- Recalculate order totals using database records.

## 4. Phase 2: Establish quality gates

- Commit lockfiles for every package root.
- Add backend unit and integration tests.
- Add frontend component and end-to-end tests.
- Add build and lint checks to CI.
- Add dependency, secret, and static security scanning.
- Establish reproducible development and release instructions.

## 5. Phase 3: Complete commerce workflows

- Complete cart ownership and quantity behaviour.
- Implement robust checkout and order state transitions.
- Initialize Stripe safely and verify webhooks.
- Standardize email notifications.
- Move uploaded media to durable storage.
- Add order reconciliation and administrative audit trails.

## 6. Phase 4: Improve user experience

- Complete responsive customer journeys.
- Improve accessibility and keyboard interaction.
- Add clear loading, empty, success, and failure states.
- Improve product search and filtering where required.
- Add user-facing order history and support workflows.
- Add operational monitoring and backup/restore procedures.

## 7. Completion policy

Mark a roadmap item complete only after implementation, tests, documentation, and review. Planned work must not be represented as an existing feature.
