# Coding Club Website

Welcome to the **Coding Club Website** repository! This project is built using the **MERN stack** (MongoDB, Express.js, React.js, Node.js) to provide a collaborative platform for coding enthusiasts. The project is divided into **frontend** and **backend** directories for modular development.

---

## Table of Contents

1. [Project Structure](https://chatgpt.com/c/675f1734-9e4c-8004-8d4e-f3c3255ae54f#project-structure)
2. [Technologies Used](https://chatgpt.com/c/675f1734-9e4c-8004-8d4e-f3c3255ae54f#technologies-used)
3. [Getting Started](https://chatgpt.com/c/675f1734-9e4c-8004-8d4e-f3c3255ae54f#getting-started)
   * [Prerequisites](https://chatgpt.com/c/675f1734-9e4c-8004-8d4e-f3c3255ae54f#prerequisites)
   * [Installation](https://chatgpt.com/c/675f1734-9e4c-8004-8d4e-f3c3255ae54f#installation)
4. [Branches and Workflow](https://chatgpt.com/c/675f1734-9e4c-8004-8d4e-f3c3255ae54f#branches-and-workflow)
5. [Developer Guide](https://chatgpt.com/c/675f1734-9e4c-8004-8d4e-f3c3255ae54f#developer-guide)
6. [Contributing](https://chatgpt.com/c/675f1734-9e4c-8004-8d4e-f3c3255ae54f#contributing)
7. [License](https://chatgpt.com/c/675f1734-9e4c-8004-8d4e-f3c3255ae54f#license)

---

## Project Structure

```plaintext
coding-club-website/
├── backend/              # Express and MongoDB backend
│   ├── config/           # Database configuration, environment variables
│   ├── controllers/      # Route controllers
│   ├── models/           # MongoDB schemas
│   ├── routes/           # API routes
│   ├── middleware/       # Middleware functions
│   ├── utils/            # Utility functions
│   ├── server.js         # Main entry point for the backend
│   ├── package.json      # Backend dependencies
│   ├── .env              # Environment variables
│   ├── .gitignore        # Ignore sensitive files like .env
│
├── frontend/             # React frontend with Vite
│   ├── public/           # Static files
│   ├── src/              # Source code
│   │   ├── assets/       # Images, stylesheets, etc.
│   │   ├── components/   # Reusable components
│   │   ├── context/      # React Context for state management
│   │   ├── pages/        # Page components (e.g., Home, About, Contact)
│   │   ├── routes/       # Frontend routes
│   │   ├── App.jsx       # Main app component
│   │   ├── main.jsx      # Vite entry point
│   │   ├── index.css     # Global styles
│   ├── vite.config.js    # Vite configuration
│   ├── package.json      # Frontend dependencies
│   ├── .gitignore        # Ignore unnecessary frontend files
│
├── README.md             # Project documentation
└── .gitignore            # Ignore common files across both frontend and backend
```

---

## Technologies Used

* **Frontend** : React.js (with Vite), TailwindCSS, ESLint, Prettier
* **Backend** : Express.js, MongoDB, Node.js
* **Tools** : Husky, Lint-Staged, Git for version control

---

## Getting Started

### Prerequisites

Ensure you have the following installed:

* [Node.js](https://nodejs.org/) (v16 or later)
* [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
* [MongoDB](https://www.mongodb.com/)
* Git

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/omanandswami2005/ccw.git
   cd ccw
   ```
2. Install dependencies for the backend:
   ```bash
   cd backend
   npm install
   ```
3. Install dependencies for the frontend:
   ```bash
   cd ../frontend
   npm install
   ```
4. Start the backend server:
   ```bash
   cd ../backend
   npm start
   ```
5. Start the frontend server:
   ```bash
   cd ../frontend
   npm run dev
   ```

---

## Branches and Workflow

### Branch Structure

* **`prod`** : Production-ready, stable code
* **`dev`** : Ongoing development and integration
* **`frontend`** : Frontend-specific development
* **`backend`** : Backend-specific development
* **`main`** : Backup or staging branch

### Development Workflow

1. Pull the respective branch:
   ```bash
   git checkout <branch-name>
   git pull origin <branch-name>
   ```
2. Make changes and test locally.
3. Commit changes:
   ```bash
   git add .
   git commit -m "feat: <describe your changes>"
   git push origin <branch-name>
   ```
4. Merge into `dev` and finally into `prod` once tested.

---

## Developer Guide

### Prettier and ESLint

* **Prettier** : Enforces consistent code formatting.
* **ESLint** : Identifies and fixes JavaScript code issues.
* Automatically run on staged files using Husky and Lint-Staged.

### Husky Setup

Husky hooks are set up to run Prettier and ESLint on pre-commit.

* Example:
  ```bash
  git add .
  git commit -m "feat: added new feature"
  # Husky automatically formats code before committing
  ```

---

## Contributing

We welcome contributions from everyone. To contribute:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/<feature-name>
   ```
3. Commit and push your changes.
4. Create a pull request to the `dev` branch.

---
