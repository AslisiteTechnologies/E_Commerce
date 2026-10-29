# Nove — technology, considered

An original electronics retail portfolio concept built for Aslisite Technologies. Nove is a fictional retailer; products, brands, technical specifications, prices, stock, ratings, shipping terms and checkout are all illustrative. The checkout never requests payment details and does not create real orders.

## Design and implementation

- **Identity:** Nove; warm mineral neutrals, graphite, and a restrained chartreuse accent. Manrope and DM Sans typography with editorial serif accents.
- **Experience:** responsive store shell with department navigation, live product search, category pages, sorting and price/brand filtering, product image gallery and variants, wishlist, four-item comparison, persistent cart, validated demo checkout, and simulated order confirmation.
- **Catalog:** 64 fictional products across smartphones, laptops, tablets, audio, smartwatches, gaming, cameras, and accessories.
- **Stack:** React, Vite, TypeScript, React Router, Zustand with LocalStorage persistence, Framer Motion, Lucide icons, and custom responsive CSS.

## Local development

```sh
npm install
npm run dev
```

## Verification

```sh
npm run test
npm run lint
npm run build
```

## Deployment

Build command: `npm run build`  
Output directory: `dist`

The included `vercel.json` rewrites application routes to the SPA entry. `public/_redirects` provides the equivalent Cloudflare Pages fallback. Connect the repository to either provider and use the defaults above. Add a custom subdomain such as `gadgets.demo.aslisite.com` in the hosting provider's domain settings and DNS; the application does not depend on a hardcoded hostname. No secrets, backend, environment variables, database, paid API, or payment integration are used.

## Image and content notes

Product photography loads from Unsplash image CDN URLs, with imagery grouped by product department. Replace those URLs with approved, product-specific imagery before adapting this concept for a real retailer. The fictional brand names and sample policies are concept content, not real partnerships, product claims, or legal terms. Customer ratings are sample interface values; no written customer reviews are represented as genuine.

Concept Website Designed & Developed by [Aslisite Technologies](https://aslisite.com).
