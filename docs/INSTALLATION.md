# Installation Guide

## Table of contents

- [1. Prerequisites](#1-prerequisites)
- [2. Clone the repository](#2-clone-the-repository)
- [3. Install the customer frontend](#3-install-the-customer-frontend)
- [4. Install the admin frontend](#4-install-the-admin-frontend)
- [5. Install backend dependencies](#5-install-backend-dependencies)
- [6. Prepare MongoDB](#6-prepare-mongodb)
- [7. Start-up order](#7-start-up-order)
- [8. Verify the environment](#8-verify-the-environment)

## 1. Prerequisites

Install Git, Node.js LTS, npm, and MongoDB. The repository does not currently pin a Node.js version. Select and document one supported LTS release before production use.

## 2. Clone the repository

```bash
git clone https://github.com/Brajesh31/Grocery-react-main.git
cd Grocery-react-main
```

## 3. Install the customer frontend

```bash
cd Client
npm install
npm start
```

The package uses Create React App. Its development server normally listens on port 3000 unless overridden.

## 4. Install the admin frontend

In a separate terminal:

```bash
cd Grocery-react-main/Client/react
npm install
npm run start
```

The nested package uses Vite. Its development server normally selects port 5173 unless configured otherwise.

## 5. Install backend dependencies

```bash
cd Grocery-react-main/Server
npm install
```

The backend manifest does not currently define a working start script. Although `node server.js` appears to be the entry command, the inspected server imports a route module that was not present in the tracked route directory. Resolve this before treating the backend as runnable.

## 6. Prepare MongoDB

The current server source connects to a local MongoDB instance and database. Start MongoDB and verify the local service is reachable. Move the connection string to validated environment configuration before deployment.

## 7. Start-up order

1. Start MongoDB.
2. Start the backend after resolving startup and configuration blockers.
3. Start the customer frontend.
4. Start the admin frontend when its workflow is being tested.

## 8. Verify the environment

Confirm dependency installation, database connectivity, frontend API URL, CORS allowlist, and the expected registration, login, product, cart, and order workflows. Use disposable test data only. Do not use real customer data or live payment credentials during development.
