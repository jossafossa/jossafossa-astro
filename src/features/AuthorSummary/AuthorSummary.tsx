import { getEntry, type ReferenceDataEntry } from "astro:content";
import { Heading, Section, Stack } from "@/components";
import { Author } from "../Author";

type AuthorSummaryProps = {
  author: ReferenceDataEntry<"authors">;
};

export const AuthorSummary = async ({ author }: AuthorSummaryProps) => {
  const realAuthor = author ? await getEntry(author) : undefined;

  return (
    <Stack>
      <Heading level={2}>About the author</Heading>

      {realAuthor && <Author author={realAuthor} />}
    </Stack>
  );
};
