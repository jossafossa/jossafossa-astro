import { marked } from 'marked';
import { codeToHtml } from 'shiki';

/**
 * Render markdown to HTML with syntax highlighting
 * @param markdown - Markdown content to render
 * @returns HTML string
 */
export async function renderMarkdown(markdown: string): Promise<string> {
  // First pass: render markdown to HTML
  let html = await marked(markdown);

  // Second pass: find and replace code blocks with Shiki-highlighted versions
  // Match <pre><code class="language-xxx">...</code></pre> patterns
  const codeBlockRegex = /<pre><code class="language-(\w+)">([\s\S]*?)<\/code><\/pre>/g;
  const matches = [...html.matchAll(codeBlockRegex)];

  for (const match of matches) {
    const [fullMatch, lang, code] = match;

    // Decode HTML entities in the code
    const decodedCode = code
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&amp;/g, '&')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'");

    try {
      const highlighted = await codeToHtml(decodedCode, {
        lang,
        theme: 'github-dark',
      });
      html = html.replace(fullMatch, highlighted);
    } catch (error) {
      console.warn(`Failed to highlight code block with language "${lang}":`, error);
      // Keep the original code block if highlighting fails
    }
  }

  return html;
}

/**
 * Fetch markdown content from a URL
 * @param url - Direct URL to markdown file (e.g., "https://raw.githubusercontent.com/user/repo/main/README.md")
 * @returns Markdown content as string, or null if fetch fails
 */
export async function fetchMarkdown(url: string): Promise<string | null> {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      console.error(`Failed to fetch markdown from ${url}: ${response.status} ${response.statusText}`);
      return null;
    }

    return await response.text();
  } catch (error) {
    console.error(`Error fetching markdown from ${url}:`, error);
    return null;
  }
}

