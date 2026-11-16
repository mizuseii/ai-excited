import { copyFileSync, mkdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

// This entry presents a luminous storm jellyfish lifting a coastal town.
const source = 'entry.png';
const sourceSize = statSync(source).size;
if (sourceSize === 0) {
  throw new Error('entry.png is missing or empty');
}
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
mkdirSync(outputDir, { recursive: true });
copyFileSync(source, join(outputDir, 'entry.png'));
