import { copyFileSync, mkdirSync, statSync } from "node:fs";
import { resolve } from "node:path";

// The entry is a luminous storm jellyfish lifting a coastal town into the night.
const source = resolve("./entry.png");
try {
  if (statSync(source).size === 0) throw new Error("entry.png is empty");
} catch (error) {
  throw new Error(`Cannot use entry.png: ${error instanceof Error ? error.message : error}`);
}

const destination = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? "/output");
mkdirSync(destination, { recursive: true });
copyFileSync(source, resolve(destination, "entry.png"));
