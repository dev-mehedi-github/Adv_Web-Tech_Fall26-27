# Name: Mehedi  hasan
# ID: 22-47502-3
# Section: B


# Product Management API
- Backend database setup steps, installation and run commands, and the endpoint lis Setup & Run Guide

````bash

This guide will help you set up and run the NestJS backend project locally.

## 🚀 Prerequisites
Before starting, ensure the following are installed:
- Node.js v22 or later
- PostgreSQL
- Redis
- npm, yarn, or pnpm 
- Docker 

---

## 📦 Install Dependencies
Use following commands:

```bash
pnpm install

````


# 🗄️ Database Setup & Migrations

Create the database

```bash
create db user_mangement

```

Run migrations

```bash
pnpm run migration:run



# ▶️ Running the Backend (Development)

Start the NestJS app:

```bash
pnpm start:dev

```


```

# Endpoints

GET /employees
POST /employeesGET /employees/fd3e468e-ac91-46a0-bf2e-110ec4175056
PATCH /employees/fd3e468e-ac91-46a0-bf2e-110ec4175056
DELETE /employess

# 📁 Project Structure (Overview)

```bash
/project-root
  ├─ src/
  │   ├─ modules/employee and product
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
