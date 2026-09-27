# Alnujoom Almasiya

Multilingual Next.js App Router website (Arabic, English and Russian).

## Development

Use a supported Node.js LTS release and install the exact dependency graph:

```sh
npm ci
npm run dev
```

## Validation

```sh
npm run lint
npm run typecheck
npm audit
npm run build
npm start -- --port 3100
```

In another terminal, run `npm run audit:site`. This checks every prerendered
locale route, main landmarks, page headings, canonicals, language alternates,
JSON-LD syntax, internal links, case-sensitive image paths, sitemap coverage,
redirects, missing-page responses and the image optimizer. Set
`AUDIT_BASE_URL` to audit a different local server. Build before auditing.

The production build generates `public/sitemap*.xml` and `public/robots.txt`.
Canonical URLs intentionally use `https://www.alnujoomalmasiya.com`, not a
preview deployment hostname. The root URL redirects according to the language
cookie or browser preference; localized URLs remain directly crawlable.

## Maintenance

- Keep Next.js and its ESLint config on matching releases.
- ESLint 9 is retained because ESLint 10 fails with the current React lint
  plugin (`contextOrFilename.getFilename is not a function`). Do not upgrade
  that major without verifying the plugin chain.
- Tailwind 3 and TypeScript 5 remain on compatible versions. Major migrations
  require separate compatibility and visual testing.
- Keep airline URLs and image filename casing exact for Linux/Vercel.
- Contact forms use WhatsApp or Formspree. Never submit real customer data
  during automated tests; intercept those requests.
- Verify business claims, ratings, current travel requirements and tour prices
  before publishing. Automated checks cannot establish their accuracy.

See `docs/QUALITY_AUDIT.md` for this review's results and deployment checklist.
