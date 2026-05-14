import ContentImage from "../ContentImage/ContentImage.astro";

// Single source of truth for MDX element overrides. To swap or add a mapping
// (e.g. <a> → custom Link, <blockquote> → Callout), add one entry here and
// every MdxContent across the site picks it up.
export const mdxComponents = {
  img: ContentImage,
};
