# ByteSizeEnt.com — Website Prototype

A responsive, minimal-elegant concept for Ross's Assignment 3. The design gives **FILMAKA** (practical/live-action filmmaking) and **FILMAIKA** (AI filmmaking) equal prominence and keeps the language neutral: *by filmmakers, for filmmakers.*

## Included
- `public/index.html` — home page, dual category entry points, catalogue, title detail dialog, newsletter and sign-in prototype.
- `public/styles.css` — responsive styling for desktop, tablet and mobile.
- `public/app.js` — sample catalogue data, category/genre/search filters and UI interactions.
- `server/server.js` — starter Express API with title search endpoints and newsletter validation.
- `database/schema.sql` — PostgreSQL schema based on the brief's catalog fields, with credits, keywords, collections, users and watchlists.

## Preview the frontend
Open `public/index.html` directly in a browser. Internet access is needed for the Google Fonts and remote sample photography. All core layout and controls are local.

## Run the API starter
Requires Node.js 18+ and PostgreSQL for a production setup. The current API's catalogue is intentionally in-memory; it does not yet connect to PostgreSQL.

```bash
cd server
npm install
npm start
```

Then open `http://localhost:3000`. API endpoints:
- `GET /api/health`
- `GET /api/titles`
- `GET /api/titles/:slug`
- `POST /api/newsletter` with JSON body `{"email":"you@example.com"}`

## Suggested production architecture
1. **Frontend:** Next.js or React with TypeScript, accessible components, server-side rendering for discoverability.
2. **API/backend:** Node.js + Express/NestJS; input validation, rate limits, structured logs and admin-only routes.
3. **Database:** PostgreSQL using `database/schema.sql`. The schema includes the suggested catalog fields: title, series, episode, runtime, genre, subgenre, mood, language, country, year, cast/director credits, format, age rating, category, rights status, transcript keywords and thumbnail.
4. **Video/media:** S3-compatible object storage + CDN; store asset keys and use signed playback URLs. Do not store large video files in PostgreSQL.
5. **Search:** Start with PostgreSQL full-text search; consider a dedicated search engine only if catalogue scale and relevance needs justify it.
6. **Authentication:** Managed identity provider or secure server-side sessions; never store plaintext passwords.
7. **Admin/catalogue workflow:** Import CSV, validate metadata, deduplicate titles, review rights status, and publish only cleared titles.
8. **Analytics/operations:** Privacy-aware analytics, error monitoring, backups and audit logs for changes to rights and publication status.

## Important prototype notes
- All six film records are fictional sample data and remote imagery is for layout demonstration only.
- Sign-in and newsletter forms do not create accounts or save emails.
- The “Watch film” control is a placeholder; connect licensed video assets and rights checks before enabling playback.
- Before launch, confirm rights for every title, poster, still and video; add privacy/terms pages and accessibility testing.
- Do not treat this static prototype as a production-ready streaming service or expose private media URLs publicly.
