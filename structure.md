# Project Structure

src/
├── app/                      # Core application logic
│   ├── components/           # Reusable UI components
│   │   ├── AddTodoForm.js    # Component to add new todos
│   │   ├── TodoItem.js       # Component for individual todo item
│   │   ├── TodoList.js       # Component to display list of todos
│   │   └── Navbar.js         # Navigation bar with login/logout
│   │
│   ├── context/              # Global state management
│   │   ├── AuthContext.js    # Firebase Auth context for user state
│   │   ├── TodoContext.js    # Context for managing todo state
│   │   └── AppProvider.js    # Combines multiple contexts
│   │
│   ├── pages/                # Pages (for routing if needed)
│   │   ├── HomePage.js       # Main app page showing todos
│   │   └── LoginPage.js      # Login page for Google authentication
│   │
│   ├── services/             # Firebase-related functions and utilities
│   │   ├── firebaseConfig.js # Firebase configuration and initialization
│   │   ├── auth.js           # Firebase authentication helper functions
│   │   └── firestore.js      # Firestore helper functions for CRUD
│   │
│   ├── styles/               # CSS or SCSS files
│   │   ├── index.css         # Global styles
│   │   └── TodoList.css      # Component-specific styles (if needed)
│   │
│   ├── utils/                # Utility functions
│   │   └── formatDate.js     # Utility to format dates for todos
│   │
│   └── App.js                # Root component of the app
│
├── assets/                   # Static assets like images, icons, etc.
│   └── logo.png              # App logo
│
├── index.js                  # Main React entry point
├── package.json              # Project metadata and dependencies
├── .env                      # Environment variables (Firebase config, etc.)
└── .gitignore                # Ignored files and folders
