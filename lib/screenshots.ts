import { readdir } from "node:fs/promises";
import path from "node:path";

const screenshotExtensions = new Set([
  ".avif",
  ".gif",
  ".jpeg",
  ".jpg",
  ".png",
  ".webp",
]);

export type ProjectScreenshot = {
  alt: string;
  src: string;
};

export async function getProjectScreenshots(
  slug: string,
): Promise<ProjectScreenshot[]> {
  const screenshotsDir = path.join(
    process.cwd(),
    "public",
    "screenshots",
    slug,
  );

  try {
    const files = await readdir(screenshotsDir);

    return files
      .filter((file) => screenshotExtensions.has(path.extname(file).toLowerCase()))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
      .map((file) => ({
        alt: humanizeScreenshotName(file),
        src: `/screenshots/${slug}/${file}`,
      }));
  } catch {
    return [];
  }
}

function humanizeScreenshotName(file: string) {
  const name = path.basename(file, path.extname(file));

  return name
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}
