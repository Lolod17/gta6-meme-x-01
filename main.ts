// gta6-meme-x-01 entry — Node 22, standard library only, no network access.
// The judged artifact is the X post itself; this program's whole job is to
// hand POST.json (the post's address) to the gate by copying it into /output.
import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join as joinPath } from 'node:path';

const repoDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const postPath = joinPath(repoDir, 'POST.json');

// Read first so a missing or unreadable POST.json fails before any write.
const postBytes = readFileSync(postPath);

// The gate reads a JSON object naming the X post; refuse anything else here
// so a malformed POST.json fails loudly instead of reaching the scorer.
const parsed: unknown = JSON.parse(postBytes.toString('utf8'));
if (parsed === null || typeof parsed !== 'object' || Array.isArray(parsed)) {
  throw new Error('POST.json must be a JSON object naming the X post');
}

mkdirSync(outputDir, { recursive: true });
copyFileSync(postPath, joinPath(outputDir, 'POST.json'));
