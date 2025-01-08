# Bookmark Manager

A full-stack web application for managing and organizing bookmarks efficiently. This project serves as a development practice implementation combining modern web technologies.

## Project Overview

This bookmark manager allows users to store, organize, and manage their bookmarks effectively. Built with a focus on clean code, maintainability, and modern web development practices.

Last Updated: December 27, 2024

## Tech Stack

### Frontend
- **Framework**: SvelteKit
- **Language**: TypeScript
- **Styling**: TailwindCSS

### Backend
- **Framework**: AdonisJS
- **Language**: TypeScript
- **Database**: Sqlite

## Features

- User authentication and authorization
- Bookmark CRUD operations
- Category management
- Search functionality
- Tag system
- Bookmark organization and sorting
- Import/Export capabilities

## Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- Sqlite
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd bookmark-manager
```

2. Install frontend dependencies:
```bash
cd frontend-sveltekit
npm install
```

3. Install AdonisJS globally:
```bash
npm i -g @adonisjs/cli
```

4. Navigate to the backend directory:
```bash
cd backend-adonis
```

5. Install the dependencies:
```bash
npm install
```

## Running the Application

To start the AdonisJS server, run:
```bash
npm start
```

To run the application in development mode with hot module replacement, use:
```bash
npm run dev
```

## Development

1. Start the frontend development server:
```bash
cd frontend-sveltekit
npm run dev
```

## Introduction to AdonisJS
AdonisJS is a Node.js MVC framework that is designed to make building web applications and APIs enjoyable and efficient. It provides a rich ecosystem and a powerful set of tools to help developers create scalable applications.

## Configuration
Ensure that you configure your `.env` file according to your environment settings. You may need to set up database connections and other environment variables.

## API Endpoints
Refer to the documentation for the updated API endpoints and their usage.

## Testing
AdonisJS comes with built-in support for testing. You can run your tests using:
```bash
npm test
```

## Linting
To check for code quality issues, run:
```bash
npm run lint
```

## Formatting
To format the code, use:
```bash
npm run format
```

## Type Checking
To perform type checking, run:
```bash
npm run typecheck
```

## Project Structure

```
bookmark-manager/
├── frontend-sveltekit/    # Frontend application
│   ├── src/              # Source code
│   ├── static/           # Static assets
│   └── tests/            # Frontend tests
└── backend-adonis/       # Backend API server
    ├── src/             # Source code
    ├── config/          # Configuration files
    └── test/            # Backend tests
```

## Contributing

This is a personal development project. Feel free to fork and modify for your own use.

## License

MIT License
