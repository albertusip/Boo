# BOO Take‑Home Assignment

A Next.js (Pages Router) UI implementation inspired by the BOO questions page.

Reference (target UI):
```
https://boo.world/u/questions/l2rKda/if-you-could-solve-one-world-problem-what-would
```

## How to run

```bash
# install dependencies
npm install

# run dev server

npm run dev

# production build
npm run build

# start production server

npm run start
```

## Time spent (note)

- Functional code work took about 4 hours based on the GitHub commits.
- I started ~30 minutes earlier only to initialize the project via npm.
- The actual implementation work started at 09:00 (GMT+7) and finished just before 13:00 (GMT+7).
- This timing excludes the README update. Apologies for any inconvenience, and thank you for understanding.

## What I completed

- Pages Router structure with a single dynamic question page at `/u/questions/[code]/[slug]`.
- Core layout: header, sidebar, universe list, timeline posts, and related posts.
- Data flow using local mocks; selected related post becomes the highlighted question at the top of the timeline.
- Consistent component structure with folders + barrel exports.
- TailwindCSS styling applied throughout.

## What I skipped

- Sidebar navigation redirects are not implemented.
- Universe list redirects are not implemented.
- Sign‑up / sign‑in CTA does not redirect yet.
- Some UI details are not yet fully identical to the reference page.

## What I’d improve with more time

- Improve accessibility (focus states, aria labels, form semantics).
- Refine responsive behavior on small screens (spacing, sticky behavior, scroll containers).
- Replace mocks with real API calls and caching (SWR/React Query).
- Add loading/error states and empty‑state UX.
- Implement active/selected state in Related Posts list.
