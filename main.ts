import { mkdir, copyFile, stat } from "node:fs/promises";
import { join, resolve } from "node:path";

const source = resolve("entry.png");
const destinationDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const destination = join(destinationDir, "entry.png");

await mkdir(destinationDir, { recursive: true });
// The storm jellyfish artwork is the complete visual entry; preserve it byte-for-byte.
const sourceDetails = await stat(source).catch(() => null);
if (!sourceDetails?.isFile() || sourceDetails.size === 0) {
  throw new Error("entry.png is missing or empty");
}
await copyFile(source, destination);
const details = await stat(destination);
if (!details.isFile()) throw new Error("output entry is not a file");
