````markdown
# Horse Betting App

A React-based frontend code challenge for displaying horse racing and betting information.

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
   git clone https://github.com/your-username/horse-betting-app.git
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
   VITE_GAMES_URL=https://www.atg.se/services/racinginfo/v1/api/games/
   VITE_PRODUCT_URL=https://www.atg.se/services/racinginfo/v1/api/products/
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
- The UI is responsive and interactive, with expandable rows for horse details.
````
