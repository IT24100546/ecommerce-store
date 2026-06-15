# E-Commerce Store

A full-stack e-commerce application built with React and Node.js.

## Project Structure

```
├── frontend/                  # React + Vite + TypeScript frontend
│   ├── src/
│   │   ├── components/        # Reusable UI components
│   │   │   ├── layout/        # Layout components (Header, Footer, Layout)
│   │   │   └── ui/            # Base UI components (Button, Input, Card)
│   │   ├── context/           # React context providers (Auth, Cart)
│   │   ├── hooks/             # Custom React hooks (useProducts, useCart, useAuth)
│   │   ├── lib/               # Third-party library configurations (Supabase client)
│   │   ├── pages/             # Page components (Home, Products, Cart, Checkout, etc.)
│   │   ├── types/             # TypeScript type definitions
│   │   ├── App.tsx            # Root application component
│   │   ├── main.tsx           # Application entry point
│   │   └── index.css          # Global styles (Tailwind CSS)
│   ├── index.html             # HTML template
│   ├── vite.config.ts         # Vite configuration
│   ├── tailwind.config.js     # Tailwind CSS configuration
│   ├── tsconfig.json          # TypeScript configuration
│   └── package.json           # Frontend dependencies
│
├── backend/                   # Node.js + Express + TypeScript backend
│   ├── src/
│   │   ├── config/            # Configuration files (Supabase client)
│   │   ├── controllers/       # Request handlers (products, orders, users)
│   │   ├── middleware/        # Express middleware (auth)
│   │   ├── routes/            # API route definitions
│   │   ├── types/             # TypeScript type definitions
│   │   ├── utils/             # Utility functions
│   │   └── index.ts           # Server entry point
│   ├── tsconfig.json          # TypeScript configuration
│   └── package.json           # Backend dependencies
│
├── .gitignore                 # Git ignore file
└── README.md                  # Project documentation
```

## Tech Stack

### Frontend
- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Lucide React** - Icon library
- **Supabase Client** - Database and authentication

### Backend
- **Node.js** - Runtime environment
- **Express** - Web framework
- **TypeScript** - Type-safe JavaScript
- **Supabase** - PostgreSQL database (hosted)

### Database
- **Supabase (PostgreSQL)** - Primary database with built-in authentication

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd ecommerce-store
   ```

2. Install frontend dependencies:
   ```bash
   cd frontend
   npm install
   ```

3. Install backend dependencies:
   ```bash
   cd ../backend
   npm install
   ```

4. Set up environment variables:
   - Copy `.env.example` to `.env` in both frontend and backend directories
   - Add your Supabase credentials

### Running the Application

**Frontend:**
```bash
cd frontend
npm run dev
```

**Backend:**
```bash
cd backend
npm run dev
```

## Features (Planned)

- Product catalog with categories
- Shopping cart functionality
- User authentication
- Order management
- Checkout process
- User account management

## API Endpoints (Planned)

- `GET /api/products` - List all products
- `GET /api/products/:id` - Get product details
- `POST /api/cart` - Add item to cart
- `GET /api/cart` - Get cart contents
- `POST /api/orders` - Create order
- `GET /api/orders` - List user orders
- `POST /api/auth/register` - Register user
- `POST /api/auth/login` - Login user

## License

MIT
