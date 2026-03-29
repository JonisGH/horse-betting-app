# Horse Betting App

A React + TypeScript frontend application built with Vite. It presents horse racing and betting data from the ATG API in a compact, interactive UI.

---

## Note on CORS and Local Proxy

**Important:** The ATG API is blocked by browser CORS in development. This repo uses Vite dev server proxying so the app can call `/api/...` routes locally, which are forwarded to `https://www.atg.se/...`.

---

## Features

- **Dropdown selection** for bet types (V75, V86, GS75)
- **Dynamic table** of horses and races, expandable for more details
- **Race track info** display
- **Data fetching** from ATG APIs (configurable via `.env`)
- **Unit tests** using Vitest and Testing Library

## Getting Started

### Prerequisites

- [nvm](https://github.com/nvm-sh/nvm) (recommended) — see `.nvmrc` for required Node version
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) for package management

### Node Version

This project includes `.nvmrc` (e.g., `22.15.0`).

```bash
nvm install
nvm use
```

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/JonisGH/horse-betting-app.git
   cd horse-betting-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

# or

yarn install

````

3. Set up environment variables in `.env` (already included):

```bash
VITE_GAMES_URL=/api/services/racinginfo/v1/api/games/
VITE_PRODUCT_URL=/api/services/racinginfo/v1/api/products/
````

> **Note:** `.env` is tracked here for challenge review, but usually this should be gitignored.

4. Start the development server:

   ```bash
   npm run dev
   ```

# or

yarn dev

```

5. Open the app:

- [http://localhost:5173](http://localhost:5173)
├── components/
│   ├── Table/
│   ├── RaceTrack/
│   ├── Dropdown/
│   └── Flex/
├── hooks/
│   ├── useFetchGameInfo.tsx
│   └── useFetchProductInfo.tsx
├── src/
│   ├── App.tsx
│   ├── App.test.tsx
│   └── ...
├── types/
│   └── Types.ts
├── .env
├── vite.config.ts
└── ...
```

## Build Configuration

This project uses [Vite](https://vitejs.dev/) as the build tool.  
All configuration is openly available in `vite.config.ts`.

## Testing

- **Run all tests:**

  ```bash
  npm run test
  # or
  yarn test
  ```

- Tests are written with [Vitest](https://vitest.dev/) and [@testing-library/react](https://testing-library.com/).

## Notes

- The `.env` file is included in version control for code challenge review purposes.
- All API URLs are configurable via environment variables.
