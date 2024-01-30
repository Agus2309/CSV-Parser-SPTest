# CSV-Parser-SPTest

## Description
This is a project that I made for the Full-Stack Test by Shaw & Partners. 

![alt text](https://socialify.git.ci/Agus2309/CSV-Parser-SPTest/image?font=Inter&language=1&name=1&owner=1&pattern=Plus&theme=Dark)

# Commands
## Installation

Use the package manager [npm](https://www.npmjs.com/) to install all of the dependencies.
Standing on the root folder, for the Frontend execute:

```bash
cd frontend && npm install
```
For the Backend:
```bash
cd ../backend && npm install
npx prisma generate
```

## Building/Starting
Standing on the root folder, for the Frontend execute:
```bash
cd frontend && npm run dev
```
For the Backend:
```bash
cd ../backend && npm run dev
```
# Technologies
Since this project is Fullstack and separated in two folders, these are the tecnologies used

## Frontend
Vite + React + TypeScript

## Backend
Node.js + TypeScript + Express + Prisma

# Dependencies

## Frontend
This is the content of package.json
```json
{
  "name": "frontend",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  },
  "dependencies": {
    "autoprefixer": "^10.4.17",
    "postcss": "^8.4.33",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-dropzone": "^14.2.3",
    "tailwind": "^4.0.0",
    "zustand": "^4.5.0"
  },
  "devDependencies": {
    "@types/body-parser": "^1.19.5",
    "@types/cors": "^2.8.17",
    "@types/express": "^4.17.21",
    "@types/node": "^20.11.8",
    "@types/react": "^18.2.43",
    "@types/react-dom": "^18.2.17",
    "@typescript-eslint/eslint-plugin": "^6.14.0",
    "@typescript-eslint/parser": "^6.14.0",
    "@vitejs/plugin-react-swc": "^3.5.0",
    "autoprefixer": "^10.4.17",
    "eslint": "^8.55.0",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.5",
    "postcss": "^8.4.33",
    "tailwindcss": "^3.4.1",
    "ts-node": "^10.9.2",
    "typescript": "^5.3.3",
    "vite": "^5.0.8"
  }
}

```

## Backend
This is the content of package.json
```json
{
  "name": "backend",
  "version": "1.0.0",
  "description": "",
  "main": "index.ts",
  "scripts": {
    "prestart": "chmod +x node_modules/.bin/ts-node",
    "start": "nodemon src/index.ts",
    "build": "rimraf dist && tsc",
    "ts.check": "tsc --project tsconfig.json",
    "add-build": "git add dist",
    "test": "jest"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "@prisma/client": "^5.8.1",
    "@types/cors": "^2.8.17",
    "@types/multer": "^1.4.11",
    "body-parser": "^1.20.2",
    "cors": "^2.8.5",
    "dotenv": "^16.4.1",
    "express": "^4.18.2",
    "multer": "^1.4.5-lts.1",
    "reflect-metadata": "^0.2.1",
    "sqlite3": "^5.1.7",
    "typeorm": "^0.3.20"
  },
  "devDependencies": {
    "@types/csv-parse": "^1.2.2",
    "@types/express": "^4.17.21",
    "@types/jest": "^29.5.11",
    "@types/node": "^20.11.10",
    "@types/supertest": "^6.0.2",
    "jest": "^29.7.0",
    "nodemon": "^3.0.3",
    "pre-commit": "^1.2.2",
    "prisma": "^5.8.1",
    "rimraf": "^5.0.5",
    "supertest": "^6.3.4",
    "ts-jest": "^29.1.2",
    "ts-node": "^10.9.2",
    "typescript": "^5.3.3"
  },
  "pre-commit": [
    "ts.check",
    "build",
    "add-build"
  ]
}

```

# Tools Required

To run this project you'll need the following tools
```json
Frontend {
  Node.js, 
  npm
}

Backend{
  Node.js
}
```
 
