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
- **Framework**: FeathersJS
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

3. Install backend dependencies:
```bash
cd ../backend-feathers
npm install
```

### Development

1. Start the backend server:
```bash
cd backend-feathers
npm run dev
```

2. Start the frontend development server:
```bash
cd frontend-sveltekit
npm run dev
```

## Project Structure

```
bookmark-manager/
├── frontend-sveltekit/    # Frontend application
│   ├── src/              # Source code
│   ├── static/           # Static assets
│   └── tests/            # Frontend tests
└── backend-feathers/     # Backend API server
    ├── src/             # Source code
    ├── config/          # Configuration files
    └── test/            # Backend tests
```

## Contributing

This is a personal development project. Feel free to fork and modify for your own use.

## License

MIT License
