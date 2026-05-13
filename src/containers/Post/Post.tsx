import { getEntry, type CollectionEntry } from "astro:content";
import { CardPost } from "@/ui";

type PostProps = {
  post: CollectionEntry<"posts">;
};
export const Post = async ({ post }: PostProps) => {
  const author = post.data.author
    ? await getEntry(post.data.author)
    : undefined;

  const authorObject = author && {
    name: author.data.name,
    slug: author.data.slug,
  };

  return (
    <CardPost
      title={post.data.title}
      date={post.data.date}
      href={`/posts/${post.data.slug}/`}
      author={authorObject}
      image={post.data.image}
    />
  );
};
