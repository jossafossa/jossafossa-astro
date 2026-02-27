import { type CollectionEntry } from "astro:content";
import type { ImageMetadata } from "astro";
import styles from "./CardPost.module.scss";
import { Link } from "../Link";
import { Date } from "../Date";
import { BlockLink } from "../BlockLink";
import { Heading } from "../Heading";
import type { PropsWithChildren } from "react";
import { Image } from "../Image";
import { Stack } from "../Stack";
import { Paragraph } from "../Paragraph";

type CardPostProps = {
  author?: CollectionEntry<"authors">;
  title: string;
  date?: Date;
  href: string;
  image?: ImageMetadata;
};

export const CardPost = ({
  title,
  date,
  href,
  author,
  image,
}: PropsWithChildren<CardPostProps>) => {
  return (
    <BlockLink href={href}>
      <article className={styles.cardPost}>
        <Stack>
          {image && (
            <header>
              <Image src={image} alt={title} ratio="wide" />
            </header>
          )}

          <Heading level={2}>{title}</Heading>
          {date && (
            <Paragraph>
              {"Published: "}
              <Date date={date} />
            </Paragraph>
          )}
          {author && (
            <Paragraph>
              {"Author: "}
              <Link href={`/authors/${author.data.slug}/`}>
                {author.data.name}
              </Link>
            </Paragraph>
          )}
        </Stack>
      </article>
    </BlockLink>
  );
};
