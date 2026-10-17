import { chromium } from "playwright";
export function launchBrowser() {
  const executablePath = process.env.BROWSER_EXECUTABLE;
  return chromium.launch(
    executablePath
      ? { executablePath }
      : process.platform === "win32"
        ? { channel: "chrome" }
        : {},
  );
}
