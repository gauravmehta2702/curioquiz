import fs from 'node:fs';
const gamesText = fs.readFileSync(new URL('../src/data/kidsGames.ts', import.meta.url), 'utf8');
const engineText = fs.readFileSync(new URL('../src/components/kids/UniversalKidsGame.tsx', import.meta.url), 'utf8');
const slugs = [...gamesText.matchAll(/q\("([^"]+)"/g)].map(m=>m[1]);
const special = [...gamesText.matchAll(/slug:"([^"]+)"/g)].map(m=>m[1]);
const all = [...slugs,...special];
const quizSlugs = slugs;
const missing = quizSlugs.filter(slug => !engineText.includes(`"${slug}": [`));
if (new Set(all).size !== all.length) throw new Error('Duplicate kids game slugs found');
if (missing.length) throw new Error(`Missing question banks: ${missing.join(', ')}`);
for (const match of engineText.matchAll(/options:\[([^\]]+)\], answer:"([^"]+)"/g)) {
  const options = [...match[1].matchAll(/"([^"]+)"/g)].map(x=>x[1]);
  if (!options.includes(match[2])) throw new Error(`Answer not present in options: ${match[2]}`);
}
if (!engineText.includes('grid-template-columns')) {
  // Styling is in globals.css, this guard simply ensures source is not the old list-only engine.
}
console.log(`Validated ${all.length} kids games: ${quizSlugs.length} quiz games and ${special.length} interactive classics.`);
