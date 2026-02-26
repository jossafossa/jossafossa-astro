import { type CollectionEntry } from "astro:content";
import styles from "./CardPost.module.scss";
import { Link } from "../Link";
import { Date } from "../Date";
import { BlockLink } from "../BlockLink";
import { Heading } from "../Heading";

type CardPostProps = {
  author?: CollectionEntry<"authors">;
  title: string;
  date?: Date;
  href: string;
};

export const CardPost = ({ title, date, href, author }: CardPostProps) => {
  return (
    <BlockLink href={href}>
      <article className={styles.cardPost}>
        <Heading level={2}>{title}</Heading>
        {date && <Date date={date} />}
        {author && (
          <Link href={`/authors/${author.data.slug}/`}>{author.data.name}</Link>
        )}
      </article>
    </BlockLink>
  );
};
