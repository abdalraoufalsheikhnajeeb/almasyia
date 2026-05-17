#!/usr/bin/env node
// One-shot image optimization: convert .jpg / .png in public/images to .webp (quality 80, max 1920px)
// Originals are moved to public/images/_originals/ as a backup (gitignored).
// Run: node scripts/optimize-images.mjs
import { readdir, mkdir, stat, rename } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join, parse } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const PUBLIC_IMAGES = join(__dirname, "..", "public", "images");
const ORIGINALS_DIR = join(PUBLIC_IMAGES, "_originals");
const MAX_WIDTH = 1920;
const QUALITY = 80;
const EXTENSIONS = new Set([".jpg", ".jpeg", ".png"]);

const formatBytes = (bytes) => {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
};

async function* walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === "_originals") continue;
      yield* walk(full);
    } else {
      yield full;
    }
  }
}

async function optimizeImage(filePath) {
  const { dir, name, ext } = parse(filePath);
  const lowerExt = ext.toLowerCase();
  if (!EXTENSIONS.has(lowerExt)) return null;

  const webpPath = join(dir, `${name}.webp`);
  const originalBackup = join(
    ORIGINALS_DIR,
    filePath.substring(PUBLIC_IMAGES.length + 1)
  );

  const originalStat = await stat(filePath);

  // Convert + resize
  await sharp(filePath)
    .rotate()
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: QUALITY })
    .toFile(webpPath);

  // Backup original
  await mkdir(parse(originalBackup).dir, { recursive: true });
  await rename(filePath, originalBackup);

  const newStat = await stat(webpPath);
  const savedPct = (
    ((originalStat.size - newStat.size) / originalStat.size) *
    100
  ).toFixed(1);

  return {
    file: filePath.substring(PUBLIC_IMAGES.length + 1),
    before: originalStat.size,
    after: newStat.size,
    saved: savedPct,
  };
}

async function main() {
  if (!existsSync(PUBLIC_IMAGES)) {
    console.error(`Directory not found: ${PUBLIC_IMAGES}`);
    process.exit(1);
  }
  await mkdir(ORIGINALS_DIR, { recursive: true });

  const results = [];
  let totalBefore = 0;
  let totalAfter = 0;

  for await (const filePath of walk(PUBLIC_IMAGES)) {
    try {
      const result = await optimizeImage(filePath);
      if (result) {
        results.push(result);
        totalBefore += result.before;
        totalAfter += result.after;
        console.log(
          `OK ${result.file.padEnd(45)} ${formatBytes(result.before).padStart(
            10
          )} -> ${formatBytes(result.after).padStart(10)} (-${result.saved}%)`
        );
      }
    } catch (err) {
      console.error(`FAIL ${filePath}: ${err.message}`);
    }
  }

  console.log("\n=== Summary ===");
  console.log(`Files processed: ${results.length}`);
  console.log(`Total before:    ${formatBytes(totalBefore)}`);
  console.log(`Total after:     ${formatBytes(totalAfter)}`);
  console.log(
    `Total saved:     ${formatBytes(totalBefore - totalAfter)} (${(
      ((totalBefore - totalAfter) / totalBefore) *
      100
    ).toFixed(1)}%)`
  );
  console.log(`Originals backed up in: ${ORIGINALS_DIR}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
