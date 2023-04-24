import { test, expect } from "@playwright/test";

/** replace with env vars if needed */
const LOCAL_HOST_URL = "http://localhost:3000/";
const DOWNLOAD_CV_TEXT = "Download CV";
const VIEW_PROJECTS_TEXT = "View Projects";

test("should shown home page", async ({ page }) => {
  await page.goto(LOCAL_HOST_URL);
  await expect(page.locator("h1")).toContainText("hanishrao");
  await expect(
    page.locator("a", { hasText: DOWNLOAD_CV_TEXT })
  ).toBeVisible();
  await expect(page.locator("a", { hasText: "Open in Github" })).toBeVisible();
});

test("click use this template should redirect to github generate project", async ({
  context,
  page,
}) => {
  await page.goto(LOCAL_HOST_URL);
  const [newPage] = await Promise.all([
    context.waitForEvent("page"),
    page.locator("a", { hasText: DOWNLOAD_CV_TEXT }).click(), // Opens a new tab
  ]);

  await newPage.waitForLoadState();
  expect(newPage.url()).toBe(
    "https://docs.google.com/document/d/1PfLIBtS_H4p4u0-6NghH5XdV2FDlAvrVgLuogxHYLXw/edit?usp=sharing"
  );
});

test("click use this template should redirect to github repo", async ({
  context,
  page,
}) => {
  await page.goto(LOCAL_HOST_URL);
  const [newPage] = await Promise.all([
    context.waitForEvent("page"),
    page.locator("a", { hasText: VIEW_PROJECTS_TEXT }).click(), // Opens a new tab
  ]);

  await newPage.waitForLoadState();
  expect(newPage.url()).toBe("https://github.com/Hyraze");
});
