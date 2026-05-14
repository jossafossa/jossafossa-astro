import {
  getCollection,
  type CollectionKey,
  type CollectionEntry,
} from "astro:content";

// In dev: include drafts so unfinished entries are previewable locally.
// In production: exclude any entry with `draft: true` in its frontmatter.
// Collections whose schema has no `draft` field pass through unchanged.
export async function getVisibleCollection<C extends CollectionKey>(
  name: C,
): Promise<CollectionEntry<C>[]> {
  const entries = await getCollection(name);
  if (import.meta.env.PROD) {
    return entries.filter(
      (entry) => !(entry.data as { draft?: boolean }).draft,
    );
  }
  return entries;
}
