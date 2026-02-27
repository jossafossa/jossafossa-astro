import { getCollection } from "astro:content";
import { CardGrid } from "@/components";
import { Author } from "../Author";

export const AuthorsGrid = async () => {
  const authors = await getCollection("authors");
  return (
    <CardGrid>
      {authors.map((author) => (
        <Author author={author} />
      ))}
    </CardGrid>
  );
};
