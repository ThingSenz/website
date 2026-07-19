import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const templateRoot = new URL("../", import.meta.url);

test("portfolio routes and metadata are wired from the app catalog", async () => {
  const [appData, page, detailPage, privacyPage, layout, packageJson] =
    await Promise.all([
      readFile(new URL("../lib/apps.ts", import.meta.url), "utf8"),
      readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
      readFile(new URL("../app/apps/[slug]/page.tsx", import.meta.url), "utf8"),
      readFile(
        new URL("../app/apps/[slug]/privacy/page.tsx", import.meta.url),
        "utf8",
      ),
      readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
      readFile(new URL("../package.json", import.meta.url), "utf8"),
    ]);

  assert.match(appData, /export const appProjects/);
  assert.match(appData, /slug: "calculator"/);
  assert.match(detailPage, /getProjectScreenshots/);
  assert.match(page, /appProjects\.map/);
  assert.match(detailPage, /generateStaticParams/);
  assert.match(privacyPage, /Privacy Policy/);
  assert.match(layout, /ThingSenz Apps/);
  assert.match(packageJson, /"build": "next build --webpack"/);
  assert.doesNotMatch(packageJson, /vinext|react-loading-skeleton|wrangler/);
});

test("starter preview files were removed", async () => {
  await Promise.all([
    assert.rejects(
      access(new URL("../app/_sites-preview/SkeletonPreview.tsx", import.meta.url)),
    ),
    assert.rejects(
      access(new URL("../app/_sites-preview/preview.css", import.meta.url)),
    ),
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
  ]);

  await assert.rejects(access(new URL("public/_sites-preview", templateRoot)));
});
