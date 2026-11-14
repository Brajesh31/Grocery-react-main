# Data Handling and Privacy Considerations

## Table of contents

- [1. Purpose](#1-purpose)
- [2. Data categories](#2-data-categories)
- [3. Data minimization](#3-data-minimization)
- [4. Authentication data](#4-authentication-data)
- [5. Orders and payments](#5-orders-and-payments)
- [6. Uploaded files](#6-uploaded-files)
- [7. Logs](#7-logs)
- [8. Retention and deletion](#8-retention-and-deletion)
- [9. Privacy notice](#9-privacy-notice)

## 1. Purpose

This document describes data-handling considerations based on the current models and routes. It is not a legal privacy notice and does not establish compliance with any privacy law.

## 2. Data categories

| Category | Examples visible in source | Considerations |
|---|---|---|
| Account | Name, email, role | Restrict access and avoid unnecessary exposure |
| Authentication | Password hash and JWT claims | Never return password fields; protect signing keys |
| Catalog | Product name, description, price, category, stock, image path | Validate and maintain integrity |
| Cart | User reference, product reference, quantity | Enforce per-user ownership |
| Orders | Items, total, shipping address, status, timestamp | Treat as sensitive purchase information |
| Uploads | Product images | Validate content and control access |

## 3. Data minimization

Collect only information required for shopping and account functionality. Avoid copying full user records into logs or API responses. Use explicit field selection when returning user information.

## 4. Authentication data

Passwords should be stored only as secure password hashes. Never return hashes to the frontend. Tokens should have appropriate expiry and must not be logged or stored in insecure locations.

## 5. Orders and payments

Do not store raw card numbers, security codes, or other sensitive payment credentials. Use the payment provider's secure client and server APIs. Verify webhooks and retain only identifiers and transaction state needed for order reconciliation.

Shipping addresses and order history should be visible only to the account owner and properly authorized administrators.

## 6. Uploaded files

Validate uploads by content, size, and allowed format. Generate server-side filenames. Store uploads outside executable code paths and use durable storage with access controls, backups, and a defined retention policy.

## 7. Logs

Logs should not contain passwords, tokens, API keys, full addresses, payment details, or unnecessary personal information. Use request identifiers and sanitized error metadata.

## 8. Retention and deletion

Define retention periods for accounts, orders, uploaded media, and logs based on actual business and legal requirements. Implement account deletion and data export where required. Backups need documented retention and deletion behaviour.

## 9. Privacy notice

Before collecting real customer data, publish a clear privacy notice identifying the data controller, purposes, lawful basis where applicable, processors, retention, user rights, contact details, and cross-border processing. Obtain qualified legal review for relevant jurisdictions.
