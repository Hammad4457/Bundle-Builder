# Bundle Builder

A React prototype of a multi-step security bundle builder with a live review panel.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:5173

Other scripts: `npm run build`, `npm run preview`, `npm run lint`.

## Features

- 4-step accordion. Step 1 is open on load, and "Next" opens the following step.
- Product cards with badge, variants, quantity stepper and pricing.
- Each variant has its own quantity. Switching color shows that color's count, and the other colors stay in the review panel.
- Card and review steppers stay in sync. Totals, savings and the monthly price update live.
- "Save my system for later" saves to localStorage, and the saved system is restored on reload.
- Responsive: stacked on phone, review sidebar on tablet/laptop, full-width review below the builder on wide screens.

- Quantities are stored per `productId:variantId`, so every variant has its own count.
- Products without variants use `default` as the variant id.
- Review groups and totals are not stored. They are calculated from `quantities` on every render, so they can never get out of sync.
- Everything is rendered from `bundle.json`, so a product can be added without touching the components.
