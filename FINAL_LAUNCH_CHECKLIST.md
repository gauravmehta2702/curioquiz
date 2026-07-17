# Mindrailo Launch 1.0

Production verification completed:

- `npm run lint` passed.
- `npm run build` passed.
- 40 static pages generated.
- Permanent brand: Mindrailo.
- Canonical website: https://mindrailo.com
- Children’s section standardised as Mindrailo Kids / Mindrailo Learning Adventure.
- Narration is cancelled during answers and level-complete screens, then starts only after the next question is visible.

## Required deployment steps

1. Replace the current local project files with this release, preserving `.git`.
2. Run `npm install`, `npm run build`, and `npm run dev` individually.
3. Test `/`, `/quizzes/`, `/search/`, `/faq/`, `/kids/`, `/kids/play/`, and one complete quiz.
4. Commit and push through GitHub Desktop.
5. In Cloudflare Pages, confirm the newest production deployment succeeds.
6. Attach `mindrailo.com` under Custom domains.
7. Submit `https://mindrailo.com/sitemap.xml` in Google Search Console after launch.
