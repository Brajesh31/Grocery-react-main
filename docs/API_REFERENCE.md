# Backend API Reference

## Table of contents

- [1. Status and caveats](#1-status-and-caveats)
- [2. Authentication](#2-authentication)
- [3. Users](#3-users)
- [4. Products](#4-products)
- [5. Categories](#5-categories)
- [6. Cart](#6-cart)
- [7. Orders](#7-orders)
- [8. Payments](#8-payments)
- [9. Response conventions](#9-response-conventions)
- [10. Hardening checklist](#10-hardening-checklist)

## 1. Status and caveats

This is a source-derived route inventory, not a stable OpenAPI contract. The backend has duplicate route registration, inconsistent prefixes, a missing imported route module, and authorization gaps. Verify mounted paths and request schemas before integrating another client.

## 2. Authentication

| Method | Handler path in source | Purpose | Notes |
|---|---|---|---|
| POST | `/api/register` | Register user | Defined in server entry point |
| POST | `/login` | Authenticate user | Defined in server entry point; JWT secret requires rotation |

A separate `authRoutes.js` also defines register/login handlers, but the inspected server does not visibly mount it. Do not assume both implementations are active.

## 3. Users

| Method | Handler path in source | Purpose |
|---|---|---|
| GET | `/api/getUser` | Return user name and email |
| POST | `/api/addUser` | Create user and attempt welcome email |
| PUT | `/api/updateUser/:id` | Update user name and email |
| DELETE | `/api/deleteUser/:id` | Delete a user |
| GET | `/profile` | Return authenticated user's profile |

The profile route is defined in `userRoutes.js`; its effective URL depends on router mounting. User mutation and listing operations require server-side authorization review.

## 4. Products

The product router defines `POST /add`, `GET /all`, `PUT /update/:id`, and `DELETE /delete/:id`. The server mounts the router under `/api/products`. The update handler should verify that a product exists and validate all fields.

## 5. Categories

The category router defines `GET /` and `POST /add`. It is mounted under `/api/categories`. Category creation needs input validation and authorization controls.

## 6. Cart

The cart router defines `POST /add`, `GET /cartshow`, `DELETE /cart/delete/:id`, and `PATCH /:id`. The server mounts it under `/api`. The quantity-update handler reads a different user identifier property than other handlers in the same router. Correct and test this before relying on it.

## 7. Orders

The order router source defines `POST /create`, `GET /history`, `GET /admin/orders`, `DELETE /admin/orders/:orderId`, and `PUT /admin/orders/:orderId/status`. The server imports an order module path that was not found in the tracked route directory and mounts order routes under multiple prefixes. Resolve the import and duplicate mount ambiguity before publishing final endpoint URLs.

Administrative endpoints must require an authenticated administrator role. The current source does not consistently demonstrate this protection.

## 8. Payments

The Stripe route defines `POST /create-payment-intent` and is mounted under `/api/stripe`. The active route references a Stripe client that is not initialized. Treat it as non-operational until server-side initialization, amount validation, idempotency, webhook signature verification, and order/payment reconciliation are implemented.

## 9. Response conventions

Current handlers return JSON with varying fields such as `message`, `data`, `user`, `product`, `cart`, `order`, `token`, or `clientSecret`. A future API contract should standardize success, validation, authentication, authorization, not-found, and internal error formats, plus pagination and filtering.

## 10. Hardening checklist

- [ ] Publish OpenAPI after route wiring is repaired.
- [ ] Validate request bodies and path identifiers.
- [ ] Enforce authentication and role authorization.
- [ ] Restrict users to their own carts and orders.
- [ ] Calculate order totals from database prices.
- [ ] Add pagination and bounded query parameters.
- [ ] Standardize response and error formats.
- [ ] Add integration tests for supported endpoints.
