# Pricing Intelligence Dashboard

A static React and Vite dashboard that turns the Mission 1 competitive pricing research into an interactive pricing intelligence workspace. It explores competitor prices and product positioning; it does not forecast demand, revenue, or profit.

## Run locally

- Install Node.js 22 or newer and pnpm 9 or newer.
- Run `pnpm install --frozen-lockfile`.
- Run `pnpm dev` and open the local Vite URL.
- Run `pnpm build` to create the GitHub Pages site in `dist/`.

## Research data

The dashboard imports `src/data/competitor_data.json` as its source of truth. Data values, source URLs, price units, offer IDs, verification states, and caveats follow the Mission 1 package in the parent `Phase_1_Competitive_Pricing` folder.

Prices are dated snapshots checked October 27, 2026. Google Pixel Buds Pro 2 has a **Partially Verified** price: the official Store result was available, but the product page could not be opened. Vasco's E1 page listed $389 and marked the product unavailable. Timekettle compare-at amounts are displayed reference prices, not evidence of historic realized prices. Google’s $189 offer is retained as an expired promotion; the current comparison uses $229.

## Method

- Representative price metrics use one representative offer per competitor (P01, P05, P06, P07), all one-time USD prices per set.
- All-offer price distribution includes priced one-time offers only; monthly P08 and unpriced P09 are kept visible but excluded. This does not imply identical capabilities.
- Quartile positioning uses the median-of-halves method on the four representative prices. “Comparable” in the price explorer means within 5% of the proposed price.
- The $150–$250 Mission 1 recommendation is preliminary and separate from the interactive exploratory price.
- Product feature and translation performance claims remain company claims; the dashboard does not imply tested performance or predict customer behavior.

## Publish to GitHub Pages

The `.github/workflows/deploy.yml` workflow builds and deploys the site. In the repository settings, set **Pages → Build and deployment → Source → GitHub Actions** if it is not already selected. The Vite base path is configured for the `pricing-dashboard` repository.


