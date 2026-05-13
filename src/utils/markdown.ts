import { Marked } from "marked";
import markedShiki from "marked-shiki";
import { codeToHtml } from "shiki";
import { shikiTheme } from "../../astro.config.mjs";

const marked = new Marked().use(
  markedShiki({
    async highlight(code, lang) {
      return codeToHtml(code, { lang: lang || "text", theme: shikiTheme });
    },
  }),
);

export async function renderMarkdown(markdown: string): Promise<string> {
  return marked.parse(markdown);
}

export async function fetchMarkdown(url: string): Promise<string> {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(
      `Failed to fetch markdown from ${url}: ${response.status} ${response.statusText}`,
    );
  }

  return response.text();
}
