# Contributing to Grocery React

Thank you for considering a contribution. This guide defines the expected workflow for proposing, implementing, testing, and reviewing changes.

## Table of contents

- [1. Before starting](#1-before-starting)
- [2. Contribution principles](#2-contribution-principles)
- [3. Development setup](#3-development-setup)
- [4. Branch and commit conventions](#4-branch-and-commit-conventions)
- [5. Code quality and security](#5-code-quality-and-security)
- [6. Testing requirements](#6-testing-requirements)
- [7. Documentation requirements](#7-documentation-requirements)
- [8. Pull request checklist](#8-pull-request-checklist)
- [9. Review process](#9-review-process)

## 1. Before starting

Search existing issues and pull requests. Discuss substantial features before implementation. For bugs, provide a minimal reproduction and expected behaviour. Never publish credentials, personal data, payment information, or production database records.

## 2. Contribution principles

Keep changes focused, testable, accessible, and consistent with the existing architecture. The repository contains separate customer frontend, admin frontend, and backend package roots. Identify the affected package before changing dependencies or scripts.

## 3. Development setup

Install dependencies from the package root you are changing:

```bash
cd Client && npm install
cd Client/react && npm install
cd Server && npm install
```

Run one command from its relevant directory. The backend currently has known startup and configuration blockers. Read [Installation](docs/INSTALLATION.md) before attempting to run it.

## 4. Branch and commit conventions

Use descriptive branch prefixes: `feat/`, `fix/`, `docs/`, `security/`, or `test/`. Write imperative commit messages such as `docs: clarify backend setup` or `fix: validate cart quantity`. Avoid combining unrelated refactors and features.

## 5. Code quality and security

- Validate all external input.
- Keep secrets out of source, logs, screenshots, and examples.
- Enforce authorization on the server, not only in the UI.
- Calculate prices and order totals from trusted database records.
- Use safe upload validation and bounded file sizes.
- Return safe errors without leaking stack traces or private data.
- Preserve third-party license notices.
- Consider keyboard and screen-reader access when changing UI.
- Avoid unnecessary dependencies.

## 6. Testing requirements

Run the relevant build, lint, and tests. Add tests for changed behaviour. Authentication, cart, order, admin, payment, and upload changes require negative tests as well as happy-path tests. If a check cannot run because of an existing project issue, disclose that fact instead of claiming it passed.

## 7. Documentation requirements

Update documentation when changing installation, configuration, routes, models, data handling, user-facing behaviour, deployment, or security controls. Long documents should have a table of contents. Keep commands and examples aligned with the actual code.

## 8. Pull request checklist

A pull request should explain the problem, implementation, affected package, tests executed, configuration changes, migration needs, security impact, accessibility impact, and known limitations. Include screenshots for visible UI changes. Do not commit dependency directories, build output, local environment files, editor caches, or generated test results.

## 9. Review process

Maintainers may request changes when work is unsafe, incomplete, untested, or inconsistent with project conventions. Address review feedback respectfully and keep the discussion focused on evidence and implementation.
