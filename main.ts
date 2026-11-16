import { copyFileSync, existsSync, mkdirSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';

// A stained-glass storm jellyfish lifts a coastal town into the dusk sky.
const source = './entry.png';
const destination = process.env.MAKEFUN_OUTPUT_DIR
  ? join(process.env.MAKEFUN_OUTPUT_DIR, 'entry.png')
  : '/output/entry.png';

if (!existsSync(source) || statSync(source).size === 0) {
  throw new Error(`Entry image is missing or empty: ${source}`);
}

mkdirSync(dirname(destination), { recursive: true });
copyFileSync(source, destination);
