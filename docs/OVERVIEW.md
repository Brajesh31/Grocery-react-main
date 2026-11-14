# Project Overview

## Table of contents

- [1. Purpose](#1-purpose)
- [2. Application areas](#2-application-areas)
- [3. User roles](#3-user-roles)
- [4. Domain concepts](#4-domain-concepts)
- [5. Scope boundaries](#5-scope-boundaries)
- [6. Current maturity](#6-current-maturity)

## 1. Purpose

Grocery React is a full-stack web application codebase intended to support an online grocery store. It combines React interfaces with a Node.js/Express backend and MongoDB persistence.

## 2. Application areas

The repository contains three package roots:

1. `Client/`: React application using Create React App.
2. `Client/react/`: Vite-based React administration dashboard and UI.
3. `Server/`: Express API and Mongoose models.

These applications have separate scripts, dependencies, and integration status. Do not assume that a script in one package works in another.

## 3. User roles

The User model includes a role field defaulting to `user`; source comments refer to an admin role. Current code does not consistently enforce role-based authorization on every administrative handler. Treat the role field as data, not proof of secure admin access.

## 4. Domain concepts

- **User:** account identity and authentication data.
- **Category:** classification used by products.
- **Product:** catalog item with price, description, image, category, and stock.
- **Cart:** a user's selected products and quantities.
- **Order:** purchase record with items, total, shipping address, status, and timestamp.
- **Payment intent:** intended Stripe integration boundary; current route requires repair.

## 5. Scope boundaries

The repository contains source for parts of these workflows, but not a verified end-to-end service. This documentation does not claim production readiness, payment certification, accessibility conformance, or complete API compatibility.

## 6. Current maturity

The project needs security remediation, backend route repair, configuration centralization, reproducible dependencies, and automated tests. See [Known Limitations](KNOWN_LIMITATIONS.md).
