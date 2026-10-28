# Name: Mehedi Hasan
## ID: 22-47502-3
## Section: B

# Product Management API

Backend database setup steps, installation and run commands, and the endpoint list.

---

# ⚙️ Setup & Run Guide

This guide helps you set up and run the NestJS backend project locally.

## Prerequisites

Before starting, make sure these are installed:

- Node.js v22 or later
- PostgreSQL
- pnpm

---

## Install Dependencies

```bash
pnpm install
```

---

# 🗄️ Database Setup & Migrations

## Environment Variables

Copy the example file and set your DB credentials:

```bash
cp .env.example .env
```

`.env.example` contents:

```dotenv
# App
NODE_ENV=development
PORT=5001

# Database (PostgreSQL)
DB_CLIENT=postgres
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=your_password_here
DB_DATABASE=user_management
```

## Create the Database

```sql
CREATE DATABASE user_management;
```

## Run Migrations

```bash
pnpm run migration:run
```

---

# ▶️ Running the Backend (Development)

Start the NestJS app:

```bash
pnpm start:dev
```

---

# 🔗 Endpoints

## Employees

- GET /employees
- POST /employees
- GET /employees/fd3e468e-ac91-46a0-bf2e-110ec4175056
- PATCH /employees/fd3e468e-ac91-46a0-bf2e-110ec4175056
- DELETE /employess/6d3e468e-ac91-46a0-bf2e-110ec4175056

## Products

- GET /products
- POST /products
- GET /products/fd3e468e-ac91-46a0-bf2e-110ec4175056
- PATCH /products/fd3e468e-ac91-46a0-bf2e-110ec4175056
- DELETE /products/7d3e468e-ac91-46a0-bf2e-110ec4175056
---

# 📁 Project Structure (Overview)

```bash
/project-root
  ├─ src/
  │   ├─ modules/
  │   │   ├─ employee/
  │   │   └─ product/
  │   ├─ common/
  │   ├─ config/
  │   ├─ main.ts
  │   └─ app.module.ts
  ├─ migrations/
  ├─ test/
  ├─ .env.example
  ├─ package.json
  └─ tsconfig.json
```