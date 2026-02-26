import { getEntry, type ReferenceDataEntry } from "astro:content";
import { CardPost } from "../../components";

type AuthorProps = {
  author: ReferenceDataEntry<"authors">;
};

export const Author = async ({ author }: AuthorProps) => {
  const realAuthor = author ? await getEntry(author) : undefined;

  if (!realAuthor) return null;

  return (
    <CardPost
      title={realAuthor.data.name}
      href={`/authors/${realAuthor.data.slug}/`}
    />
  );
};
