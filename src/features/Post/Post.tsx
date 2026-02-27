import { getEntry, type CollectionEntry } from "astro:content";
import { CardPost } from "../../components";

type PostProps = {
  post: CollectionEntry<"posts">;
};
export const Post = async ({ post }: PostProps) => {
  const author = post.data.author
    ? await getEntry(post.data.author)
    : undefined;

  return (
    <CardPost
      title={post.data.title}
      date={post.data.date}
      href={`/posts/${post.data.slug}/`}
      author={author}
    />
  );
};
