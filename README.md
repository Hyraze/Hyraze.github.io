# Hanish Rao

## Pre-requisites

1. [Node.js](https://nodejs.org/en/) or nvm installed.
2. `pnpm` installed.

## Getting Started

1. You can clone the repo directly from your terminal:

```bash
git clone https://github.com/Hyraze/Hyraze.github.io.git <YOUR_APP_NAME>
```

2. After cloning the project, run this command: `pnpm` or `pnpm install`

3. Then, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## How to Run e2e Test (in local machine)

1. Build production with `pnpm build`, then run the production build using `pnpm start`.
2. Open another terminal (or new terminal tab, don't cancel / close the production server), then run the test with `pnpm test:e2e`.

References:

- https://nextjs.org/docs/testing#playwright
  - https://nextjs.org/docs/testing#running-your-playwright-tests
