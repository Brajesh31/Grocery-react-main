# Security Policy

## Table of contents

- [1. Supported versions](#1-supported-versions)
- [2. Reporting a vulnerability](#2-reporting-a-vulnerability)
- [3. Information to include](#3-information-to-include)
- [4. Do not disclose](#4-do-not-disclose)
- [5. Response process](#5-response-process)
- [6. Current security warning](#6-current-security-warning)

## 1. Supported versions

A formal release and security-support matrix has not yet been established. Identify the affected branch or commit when reporting an issue.

## 2. Reporting a vulnerability

Do not publish exploitable vulnerabilities, authentication bypasses, exposed credentials, or private data exposure in public issues. Use GitHub's private **Report a vulnerability** feature on the repository Security tab when enabled. If unavailable, contact the maintainer privately through the contact route on the maintainer's GitHub profile.

## 3. Information to include

Provide the affected component, commit, impact, realistic attack scenario, minimal reproduction, required permissions, sanitized logs, and a suggested mitigation if known.

## 4. Do not disclose

Never include passwords, API keys, tokens, private keys, database dumps, personal information, payment details, or unredacted production logs in public project spaces. If a secret is exposed, assume it is compromised and rotate it immediately.

## 5. Response process

The maintainer will assess severity, confirm reproducibility, coordinate a fix, and decide whether a security advisory or release is appropriate. No guaranteed response-time agreement is currently offered.

## 6. Current security warning

Repository inspection identified credential material embedded in backend source, a tracked environment file, and hardcoded administrator credential material. Because the repository is public, treat all exposed values as compromised. Rotate affected mail, authentication, administrator, and any other exposed service credentials immediately. Review provider audit logs and the complete Git history.

The backend also has authorization and payment-integration weaknesses. Do not deploy it or process real customer data until these issues are fixed and independently tested. This policy is not a security certification.
