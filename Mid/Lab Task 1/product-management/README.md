# Name: Mehedi  hasan
# ID: 122-47502-3
# Section: B


# Backend database setup steps, installation and run commands, and the endpoint lis Setup & Run Guide

````bash

This guide will help you set up and run the NestJS backend project locally.

## 🚀 Prerequisites
Before starting, ensure the following are installed:
- Node.js v22 or later
- PostgreSQL
- Redis
- npm, yarn, or pnpm (any package manager)
- Docker (optional, for containerized setup)

---

## 📦 Install Dependencies
Use any of the following commands:

```bash
pnpm install
# or
yarn install
# or
npm install


````

# 🔧 Environment Variables

Go to the project root directory
Find the file .env.example
Create a .env file in the same directory
Copy all content from .env.example into .env
Update values based on your local environment
Example:

```bash
cp .env.example .env
```

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
