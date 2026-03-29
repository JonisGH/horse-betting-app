# Horse Betting App

A React + TypeScript frontend application built with Vite, focusing on data presentation for horse racing and betting information. The app demonstrates dynamic UI components, data fetching, and state management while displaying real-time race track data from ATG APIs.

## Note on CORS and Local Proxy

**Important:** The ATG API endpoints are restricted by CORS policies and cannot be called directly from the browser. This app uses a Vite dev server proxy to bypass this limitation during development. The proxy redirects requests from `/api/...` to `https://www.atg.se/...`, allowing the app to function seamlessly in the development environment while maintaining a production-like architecture.

## Features

- **Dropdown selection** for bet types (V75, V86, GS75)
- **Dynamic table** of horses and races, expandable for more details
- **Race track info** display
- **Data fetching** from ATG APIs (configurable via `.env`)
- **Unit tests** using Vitest and Testing Library

## Getting Started

### Prerequisites

- [nvm](https://github.com/nvm-sh/nvm) (recommended) — see `.nvmrc` for required Node version
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) to install dependencies and run scripts

### Node Version

This project includes an `.nvmrc` file specifying the recommended Node.js version (e.g., `22.15.0`).  
To use it:

```bash
nvm install
nvm use
```

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/JonisGH/horse-betting-app.git
   cd horse-betting-app
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables:**

   A `.env` file is already provided in the project root:

   ```
   VITE_GAMES_URL=/api/services/racinginfo/v1/api/games/
   VITE_PRODUCT_URL=/api/services/racinginfo/v1/api/products/
   ```

   > **Note:**  
   > In a real project, the `.env` file should be added to `.gitignore` to avoid committing secrets.  
   > For this code challenge, it is tracked for simplicity and easier review.

4. **Start the development server:**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

   The Vite dev server will automatically proxy API requests from `/api/...` to the actual ATG endpoints.

5. **Open the app:**  
   Visit [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

```
horse-betting-app/
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
