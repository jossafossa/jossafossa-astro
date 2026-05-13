import { getCollection, type CollectionEntry } from "astro:content";
import { Post } from "../Post";
import { CardGrid } from "@/ui";

type PostsGridProps = {
  author?: CollectionEntry<"authors">;
};

export const PostsGrid = async ({ author }: PostsGridProps) => {
  const posts = (await getCollection("posts"))
    .filter((post) => !post.data.draft)
    .filter((post) => {
      if (author) {
        return post.data.author?.id === author.id;
      }
      return true;
    })
    .sort((a, b) => {
      const dateA = a.data.date || new Date(0);
      const dateB = b.data.date || new Date(0);
      return dateB.getTime() - dateA.getTime();
    });

  return (
    <CardGrid>
      {posts.map((post) => (
        <Post post={post} />
      ))}
    </CardGrid>
  );
};
