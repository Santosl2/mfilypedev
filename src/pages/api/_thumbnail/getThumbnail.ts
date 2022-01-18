import { getOptions } from "./options";
import Puppeteer, { Page } from "puppeteer-core";

let _page: Page;

async function getPage(isDev: boolean, image: string) {
  if (_page) return _page;

  const options = await getOptions(true);
  const browser = await Puppeteer.launch(options);

  _page = await browser.newPage();

  return _page;
}

export async function getScreenshot(
  html: string,
  isDev: boolean,
  image: string,
): Promise<Buffer | string> {
  const page = await getPage(isDev, image);

  await page.setViewport({ width: 1200, height: 630 });
  await page.setContent(html);
  await page.evaluateHandle("document.fonts.ready");

  const file = await page.screenshot({ type: "png" });

  return file;
}
