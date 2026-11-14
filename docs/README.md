# Grocery React Documentation

This directory contains technical and operational documentation for the repository.

## Table of contents

- [Documentation map](#documentation-map)
- [Suggested reading paths](#suggested-reading-paths)
- [Documentation conventions](#documentation-conventions)
- [Maintenance](#maintenance)

## Documentation map

| Document | Audience | Purpose |
|---|---|---|
| [Overview](OVERVIEW.md) | Everyone | Scope, components, and terminology |
| [Architecture](ARCHITECTURE.md) | Developers | Component boundaries and request flow |
| [Installation](INSTALLATION.md) | Developers | Local setup |
| [Configuration](CONFIGURATION.md) | Developers and operators | Runtime configuration and secrets |
| [API Reference](API_REFERENCE.md) | Frontend and backend developers | Source-derived route inventory |
| [Testing](TESTING.md) | Contributors | Test strategy and quality gates |
| [Deployment](DEPLOYMENT.md) | Operators | Deployment prerequisites |
| [Troubleshooting](TROUBLESHOOTING.md) | Developers | Common setup and integration issues |
| [Security Review](SECURITY_REVIEW.md) | Maintainers | Findings and remediation |
| [Data Handling](DATA_HANDLING.md) | Developers and operators | Personal and transactional data |
| [Known Limitations](KNOWN_LIMITATIONS.md) | Everyone | Confirmed blockers and gaps |
| [Roadmap](ROADMAP.md) | Contributors | Prioritized engineering work |
| [Licensing](LICENSING.md) | Maintainers | Existing license and attribution considerations |

## Suggested reading paths

**New developer:** Overview → Installation → Configuration → Architecture → API Reference.

**Frontend contributor:** Overview → Installation → API Reference → Testing → root Accessibility policy.

**Backend contributor:** Architecture → Configuration → API Reference → Security Review → Testing.

**Operator:** Security Review → Configuration → Deployment → Data Handling → Troubleshooting.

## Documentation conventions

Commands are examples and should be run from the stated directory. A route listed in source is not necessarily mounted or operational. Configuration notes distinguish current implementation from recommended future configuration. Security findings are described without reproducing secret values. No compliance or production-readiness claim should be inferred from documentation alone.

## Maintenance

Update the relevant guide whenever a route, package, model, environment variable, setup command, or operational process changes. Prefer source-backed details and keep examples synchronized with tests.
